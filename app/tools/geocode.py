#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
geocode.py — Điền toạ độ (ll) cho các điểm còn thiếu trong data.js,
lấy từ Nominatim (OpenStreetMap). Miễn phí, không cần API key.

CÁCH CHẠY (trong thư mục dự án doc-bo):
    python3 tools/geocode.py
Tùy chọn:
    python3 tools/geocode.py --limit 20     # chỉ thử 20 điểm đầu (chạy nháp)
    python3 tools/geocode.py --data data.js # chỉ định đường dẫn data.js

LƯU Ý:
  • Nominatim giới hạn 1 yêu cầu/giây nên script tự nghỉ ~1,1s mỗi điểm.
    ~288 điểm thiếu toạ độ => khoảng 6–8 phút. Cứ để chạy.
  • Kết quả được lưu cache (.geocode_cache.json) để chạy lại không gọi mạng lại.
  • Quán ăn được tra theo ĐỊA CHỈ trong phần mô tả (số nhà + đường) nên trúng hơn.
  • Homestay/quán nhỏ nhiều khi KHÔNG có trên OpenStreetMap => sẽ bỏ qua,
    đó là chuyện bình thường. Bãi biển, gành, đèo, địa danh lớn thường tìm ra.
  • Script chỉ THÊM toạ độ cho điểm đang thiếu; không đụng điểm đã có ll.
  • Cần kết nối internet. Không cần cài thêm gì (dùng thư viện chuẩn của Python 3).
"""

import json, re, time, sys, os, argparse, urllib.parse, urllib.request

PROV_NAME = {
    'hg':'Hà Giang','cb':'Cao Bằng','ls':'Lạng Sơn','tq':'Tuyên Quang',
    'db':'Điện Biên','sl':'Sơn La','hb':'Hòa Bình','qn':'Quảng Ninh','hp':'Hải Phòng',
    'ht':'Hà Tĩnh','qb':'Quảng Bình','qt':'Quảng Trị','hue':'Thừa Thiên Huế',
    'dn':'Đà Nẵng','qng':'Quảng Ngãi','bd':'Bình Định','py':'Phú Yên',
    'kh':'Khánh Hòa','nt':'Ninh Thuận','bt':'Bình Thuận','vt':'Bà Rịa - Vũng Tàu',
}
# Thành phố/khu trung tâm — dùng cho địa chỉ quán (số nhà + đường) để tra trúng hơn.
CITY = {
    'hp':'Hải Phòng','hue':'Huế','dn':'Đà Nẵng','qng':'Quảng Ngãi',
    'bd':'Quy Nhơn','py':'Tuy Hòa','kh':'Nha Trang','nt':'Phan Rang Tháp Chàm',
    'bt':'Phan Thiết','vt':'Vũng Tàu','tq':'Tuyên Quang',
}
UA = "doc-bo-geocoder/1.0 (lien he qua Netlify site cua ban)"
CACHE = ".geocode_cache.json"

def load_places(text):
    m = re.search(r"(?:const|var) PLACES = (\[.*\n\]);", text, re.S)
    if not m:
        sys.exit("Không tìm thấy mảng PLACES trong data.js (file có đúng định dạng không?).")
    return json.loads(m.group(1)), m.start(1), m.end(1)

def write_places(text, start, end, places):
    new = json.dumps(places, ensure_ascii=False, indent=1)
    return text[:start] + new + text[end:]

def nominatim(query):
    """Trả [lat, lon] hoặc None."""
    params = urllib.parse.urlencode({
        "q": query, "format":"json", "limit":1,
        "countrycodes":"vn", "accept-language":"vi",
    })
    url = "https://nominatim.openstreetmap.org/search?" + params
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            data = json.loads(r.read().decode("utf-8"))
    except Exception as e:
        print("   (lỗi mạng:", e, ")")
        return None
    if not data:
        return None
    return [round(float(data[0]["lat"]), 5), round(float(data[0]["lon"]), 5)]

def extract_addr(note):
    """Trích địa chỉ (số nhà + tên đường) từ mô tả, nếu có.
    Quy ước dữ liệu: phần trước dấu '—' thường là địa chỉ với các quán,
    vd '123 Ngô Gia Tự — bún cá...'. Chỉ nhận khi mở đầu là số nhà
    (123, 8, B2, 129 C) hoặc có 'chung cư' — để tránh nhầm với mô tả thường."""
    if not note:
        return None
    head = re.split(r"\s[—–\-]\s", note)[0].strip()   # phần trước gạch ngang
    head = re.split(r"\s*\(", head)[0].strip()         # bỏ phần trong ngoặc nếu có
    if re.match(r"^(số\s*)?[A-Za-z]?\d", head, re.I) or 'chung cư' in head.lower():
        return head
    return None

def variants(p):
    name = p["n"]; prov = p["p"]; note = p.get("note", "")
    pn = PROV_NAME.get(prov, ""); city = CITY.get(prov, pn)
    out = []
    addr = extract_addr(note)
    if addr:                                  # quán: ưu tiên địa chỉ + thành phố
        out.append(f"{addr}, {city}, Việt Nam")
        if pn and pn != city:
            out.append(f"{addr}, {pn}, Việt Nam")
    base = re.split(r"\s[—–\-]\s", name)[0].strip()   # bỏ phần sau dấu — / -
    out.append(f"{name}, {pn}, Việt Nam")
    if base != name:
        out.append(f"{base}, {pn}, Việt Nam")
    out.append(f"{name}, Việt Nam")
    seen=set(); uniq=[]
    for q in out:
        if q and q not in seen: seen.add(q); uniq.append(q)
    return uniq

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", default="data.js")
    ap.add_argument("--limit", type=int, default=0, help="chỉ xử lý N điểm đầu thiếu ll")
    args = ap.parse_args()

    if not os.path.exists(args.data):
        sys.exit(f"Không thấy {args.data}. Hãy chạy script trong thư mục dự án (nơi có data.js).")

    text = open(args.data, encoding="utf-8").read()
    places, s, e = load_places(text)

    cache = {}
    if os.path.exists(CACHE):
        try: cache = json.load(open(CACHE, encoding="utf-8"))
        except Exception: cache = {}

    missing = [p for p in places if "ll" not in p]
    if args.limit: missing = missing[:args.limit]
    print(f"Tổng {len(places)} điểm · thiếu toạ độ: {len(missing)} · bắt đầu tra Nominatim…\n")

    filled = 0; missed = 0
    for i, p in enumerate(missing, 1):
        key = f"{p['n']}|{p['p']}"
        ll = cache.get(key, "NOPE") if key in cache else None
        if key in cache:
            ll = cache[key]
        else:
            ll = None
            for q in variants(p):
                ll = nominatim(q)
                time.sleep(1.1)          # tôn trọng giới hạn 1 req/s
                if ll: break
            cache[key] = ll
            json.dump(cache, open(CACHE,"w",encoding="utf-8"), ensure_ascii=False)
        if ll:
            p["ll"] = ll; filled += 1
            print(f"[{i}/{len(missing)}] ✓ {p['n']} -> {ll}")
        else:
            missed += 1
            print(f"[{i}/{len(missing)}] · {p['n']} (không thấy trên OSM, bỏ qua)")

    out = write_places(text, s, e, places)
    # kiểm tra lại JSON hợp lệ trước khi ghi đè
    json.loads(re.search(r"(?:const|var) PLACES = (\[.*\n\]);", out, re.S).group(1))
    open(args.data, "w", encoding="utf-8").write(out)

    print(f"\nXong. Điền thêm {filled} toạ độ · {missed} điểm không tìm thấy.")
    print(f"Đã cập nhật {args.data}. Mở lại web là thấy bản đồ dày marker hơn.")

if __name__ == "__main__":
    main()
