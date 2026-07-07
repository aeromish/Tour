#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dọc Bờ — Điền toạ độ cho các điểm còn thiếu (nguồn: Supabase).

Chạy ở MÁY BẠN (có mạng). Không cần cài gì thêm.
  cd app
  py tools\\geocode_to_supabase.py

Cách hoạt động (an toàn — KHÔNG tự ghi vào DB):
  1) Đọc từ Supabase các điểm published đang THIẾU toạ độ.
  2) Tra toạ độ qua OpenStreetMap (Nominatim), nghỉ ~1,1s/điểm cho lịch sự.
  3) Sinh ra file  update_coords.sql
  -> Bạn mở file đó, dán vào Supabase → SQL Editor → Run. Xong.

Vì chỉ SINH SQL (không tự sửa DB), script này không cần đăng nhập / secret key,
và bạn được xem trước trước khi áp vào dữ liệu thật.
"""
import json, re, sys, time, urllib.request, urllib.parse

SB_URL = "https://musbrsfduxvihlmomvvu.supabase.co"
SB_KEY = "sb_publishable_AqpgPIy5OFrbp7o8Ix09-Q_8_0fGFOB"   # publishable — công khai được
UA     = "DocBo-geocode/1.0 (lien he: ban)"                 # Nominatim yêu cầu User-Agent

# Thành phố trung tâm để tra địa chỉ quán cho trúng
CITY = {'hp':'Hải Phòng','hue':'Huế','dn':'Đà Nẵng','qng':'Quảng Ngãi','bd':'Quy Nhơn',
        'py':'Tuy Hòa','kh':'Nha Trang','nt':'Phan Rang Tháp Chàm','bt':'Phan Thiết',
        'vt':'Vũng Tàu','tq':'Tuyên Quang','tn':'Thái Nguyên','bk':'Bắc Kạn'}

def rest(path):
    req = urllib.request.Request(f"{SB_URL}/rest/v1/{path}",
        headers={"apikey":SB_KEY,"Authorization":f"Bearer {SB_KEY}"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def extract_addr(note):
    """Lấy địa chỉ (số nhà + đường) từ mô tả nếu có — để tra quán cho trúng."""
    if not note: return None
    head = re.split(r"\s[—–\-]\s", note)[0].strip()
    head = re.split(r"\s*\(", head)[0].strip()
    if re.match(r"^(số\s*)?[A-Za-z]?\d", head, re.I) or 'chung cư' in head.lower():
        return head
    return None

def geocode(q):
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode(
        {"q": q, "format":"json", "limit":1, "countrycodes":"vn"})
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            data = json.load(r)
        if data:
            return float(data[0]["lat"]), float(data[0]["lon"])
    except Exception:
        pass
    return None

def main():
    print("Đang lấy danh sách điểm thiếu toạ độ từ Supabase…")
    provs = {p["key"]: p["name"] for p in rest("provinces?select=key,name")}
    rows  = rest("places?select=id,name,province,note&status=eq.published&lat=is.null&order=province")
    print(f"  Có {len(rows)} điểm cần tra.\n")
    if not rows:
        print("Không có điểm nào thiếu toạ độ. Xong."); return

    out = ["-- Dọc Bờ — cập nhật toạ độ (dán vào Supabase SQL Editor rồi Run)",
           "-- Sinh tự động; mỗi dòng chỉ sửa lat/lng của đúng 1 điểm.\n"]
    hit = 0
    for i, r in enumerate(rows, 1):
        pn = provs.get(r["province"], "")
        addr = extract_addr(r.get("note"))
        # thứ tự thử: địa chỉ+thành phố -> tên+tỉnh -> tên+VN
        tries = []
        if addr:
            tries.append(f"{addr}, {CITY.get(r['province'], pn)}, Việt Nam")
        tries.append(f"{r['name']}, {pn}, Việt Nam")
        tries.append(f"{r['name']}, Việt Nam")

        found = None
        for q in tries:
            found = geocode(q); time.sleep(1.1)
            if found: break

        if found:
            hit += 1
            out.append(f"update public.places set lat={found[0]:.6f}, lng={found[1]:.6f}, "
                       f"updated_at=now() where id='{r['id']}';  -- {r['name']}")
            print(f"  [{i}/{len(rows)}] ✓ {r['name']} -> {found[0]:.5f},{found[1]:.5f}")
        else:
            out.append(f"-- (không tìm thấy) {r['name']} — {r['province']}")
            print(f"  [{i}/{len(rows)}] – {r['name']} (không tìm thấy, bỏ qua)")

    with open("update_coords.sql", "w", encoding="utf-8") as f:
        f.write("\n".join(out) + "\n")
    print(f"\nXong. Tra được {hit}/{len(rows)} điểm.")
    print("→ Mở file update_coords.sql, dán vào Supabase → SQL Editor → Run.")
    print("  (Quán nhỏ/homestay đôi khi không có trên OpenStreetMap — cứ để trống,")
    print("   sau này vào dashboard bấm map-picker chọn tay là chính xác nhất.)")

if __name__ == "__main__":
    try:
        main()
    except urllib.error.URLError as e:
        print("Lỗi mạng:", e); sys.exit(1)
