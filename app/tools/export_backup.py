#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dọc Bờ — Backup dữ liệu từ Supabase + cập nhật data.js (bản dự phòng offline).

Chạy ở MÁY BẠN (có mạng). Không cần cài gì thêm (dùng thư viện sẵn của Python).
  cd app
  py tools\\export_backup.py

Việc script làm:
  1) Đọc places (đã publish) + provinces + types từ Supabase.
  2) Ghi file backup thô:  backups/docbo_YYYYMMDD_HHMM.json
  3) Ghi đè data.js  (để bản dự phòng offline luôn tươi = khớp Supabase).

Lưu ý: chỉ backup điểm 'published' (đủ cho bản dự phòng của app, vì app chỉ hiện published).
Muốn backup TOÀN BỘ kể cả 'draft' -> xem ghi chú cuối file.
"""
import json, os, sys, urllib.request, urllib.parse
from datetime import datetime

SB_URL = "https://musbrsfduxvihlmomvvu.supabase.co"
SB_KEY = "sb_publishable_AqpgPIy5OFrbp7o8Ix09-Q_8_0fGFOB"   # publishable — công khai được

def rest(path):
    url = f"{SB_URL}/rest/v1/{path}"
    req = urllib.request.Request(url, headers={
        "apikey": SB_KEY, "Authorization": f"Bearer {SB_KEY}"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def main():
    print("Đang tải dữ liệu từ Supabase…")
    places    = rest("places?select=name,type,province,lat,lng,note,tel,map_url&status=eq.published")
    provinces = rest("provinces?select=key,name,center_lat,center_lng,sort_order&order=sort_order")
    types     = rest("types?select=key,label,color")
    print(f"  places: {len(places)} | provinces: {len(provinces)} | types: {len(types)}")

    # 1) backup thô
    os.makedirs("backups", exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M")
    bpath = f"backups/docbo_{stamp}.json"
    with open(bpath, "w", encoding="utf-8") as f:
        json.dump({"places":places,"provinces":provinces,"types":types},
                  f, ensure_ascii=False, indent=1)
    print(f"  ✓ Backup: {bpath}")

    # 2) dựng lại data.js theo đúng định dạng app dùng
    TYPE = {t["key"]: {"label":t["label"],"color":t["color"]} for t in types}
    order = {p["key"]: i for i,p in enumerate(provinces)}
    PROV = [{"key":p["key"],"name":p["name"],"c":[p["center_lat"],p["center_lng"]]} for p in provinces]

    def place_obj(r):
        o = {"n": r["name"], "t": r["type"], "p": r["province"]}
        if r.get("lat") is not None and r.get("lng") is not None:
            o["ll"] = [r["lat"], r["lng"]]
        if r.get("note"): o["note"] = r["note"]
        if r.get("tel"):  o["tel"]  = r["tel"]
        if r.get("map_url"): o["map"] = r["map_url"]
        return o
    PLACES = sorted((place_obj(r) for r in places),
                    key=lambda o: (order.get(o["p"],99), o["n"]))

    js  = "// data.js — BẢN DỰ PHÒNG offline (tự sinh từ Supabase bằng export_backup.py)\n"
    js += "// Nguồn thật là Supabase; sửa nội dung trong dashboard, đừng sửa tay file này.\n\n"
    js += "var TYPE = " + json.dumps(TYPE, ensure_ascii=False, indent=1) + ";\n\n"
    js += "var PROVINCES = " + json.dumps(PROV, ensure_ascii=False, indent=1) + ";\n\n"
    js += "var PLACES = " + json.dumps(PLACES, ensure_ascii=False, indent=1) + ";\n"
    with open("data.js", "w", encoding="utf-8") as f:
        f.write(js)
    print(f"  ✓ Đã cập nhật data.js ({len(PLACES)} điểm)")
    print("\nXong. Nhớ đẩy data.js mới lên GitHub để bản dự phòng trên web cũng tươi.")

if __name__ == "__main__":
    try:
        main()
    except urllib.error.URLError as e:
        print("Lỗi mạng/Supabase:", e); sys.exit(1)

# ----------------------------------------------------------------------
# Backup TOÀN BỘ (kể cả 'draft'):
#   Cách đơn giản không cần code: Supabase → Table Editor → bảng places →
#   nút "..." (hoặc Export) → Export to CSV. Làm tương tự cho provinces, types.
#   Cất mấy file CSV đó là có bản sao đầy đủ.
# ----------------------------------------------------------------------
