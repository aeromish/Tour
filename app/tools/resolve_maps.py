#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
resolve_maps.py — Rút toạ độ (ll) từ các LINK GOOGLE MAPS đã có sẵn trong data.js.

Khác với geocode.py (tra tên trên OpenStreetMap), script này lần theo link
maps.app.goo.gl của từng điểm để lấy đúng toạ độ điểm đó. Vì dữ liệu của bạn có
sẵn ~137 link Maps nên cách này phủ được phần lớn và chính xác hơn.

CÁCH CHẠY (trong thư mục dự án doc-bo):
    py tools\resolve_maps.py             # Windows
    python3 tools/resolve_maps.py        # Mac/Linux
Tùy chọn:
    ... --limit 20      # thử 20 điểm đầu (chạy nháp)
    ... --data data.js  # chỉ định file dữ liệu

GỢI Ý: chạy script này TRƯỚC (rút từ link Maps), sau đó chạy geocode.py để vớt
nốt mấy điểm không có link. Hai cái bù cho nhau.

LƯU Ý:
  • Cần internet. Dùng thư viện chuẩn Python 3, không phải cài thêm gì.
  • Script tự nghỉ ~1 giây/điểm để Google không chặn. Có cache (.resolve_cache.json).
  • Chỉ thêm ll cho điểm đang thiếu và CÓ link map; không đụng điểm đã có ll.
  • Nếu Google tạm chặn (hiếm), cứ chạy lại sau ít phút — phần đã lấy được đã lưu cache.
"""

import json, re, time, sys, os, argparse
import urllib.request, urllib.error

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")
CACHE = ".resolve_cache.json"

def load_places(text):
    m = re.search(r"(?:const|var) PLACES = (\[.*\n\]);", text, re.S)
    if not m:
        sys.exit("Không tìm thấy mảng PLACES trong data.js.")
    return json.loads(m.group(1)), m.start(1), m.end(1)

def write_places(text, start, end, places):
    return text[:start] + json.dumps(places, ensure_ascii=False, indent=1) + text[end:]

def extract_latlng(url):
    """Bóc [lat, lng] từ một URL Google Maps đã mở đầy đủ. Ưu tiên toạ độ điểm thật."""
    # !3d<lat>!4d<lng> = toạ độ chính xác của địa điểm
    m = re.search(r"!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)", url)
    if m: return [round(float(m.group(1)),5), round(float(m.group(2)),5)]
    # /@<lat>,<lng>,<zoom> = tâm khung nhìn (gần đúng)
    m = re.search(r"/@(-?\d+\.\d+),(-?\d+\.\d+)", url)
    if m: return [round(float(m.group(1)),5), round(float(m.group(2)),5)]
    # ?q=<lat>,<lng> hoặc ?ll=<lat>,<lng>
    m = re.search(r"[?&](?:q|ll)=(-?\d+\.\d+),(-?\d+\.\d+)", url)
    if m: return [round(float(m.group(1)),5), round(float(m.group(2)),5)]
    return None

def resolve(link):
    """Mở link rút gọn, trả [lat,lng] hoặc None."""
    req = urllib.request.Request(link, headers={
        "User-Agent": UA,
        "Cookie": "CONSENT=YES+1",          # tránh trang đồng ý cookie của Google
        "Accept-Language": "en-US,en;q=0.9",
    })
    try:
        with urllib.request.urlopen(req, timeout=25) as r:
            final = r.geturl()
            ll = extract_latlng(final)
            if ll: return ll
            # nếu URL cuối chưa có toạ độ, thử tìm trong nội dung trang
            body = r.read(200000).decode("utf-8", "ignore")
            return extract_latlng(body)
    except urllib.error.HTTPError as e:
        # nhiều khi toạ độ vẫn nằm trong URL đích dù mã lỗi
        return extract_latlng(getattr(e, "url", "") or link)
    except Exception as ex:
        print("   (lỗi:", ex, ")")
        return None

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", default="data.js")
    ap.add_argument("--limit", type=int, default=0)
    args = ap.parse_args()
    if not os.path.exists(args.data):
        sys.exit(f"Không thấy {args.data}. Chạy script trong thư mục dự án (nơi có data.js).")

    text = open(args.data, encoding="utf-8").read()
    places, s, e = load_places(text)

    cache = {}
    if os.path.exists(CACHE):
        try: cache = json.load(open(CACHE, encoding="utf-8"))
        except Exception: cache = {}

    todo = [p for p in places if "ll" not in p and p.get("map")]
    if args.limit: todo = todo[:args.limit]
    print(f"Tổng {len(places)} điểm · thiếu toạ độ nhưng có link Maps: {len(todo)}\n")

    filled = missed = 0
    for i, p in enumerate(todo, 1):
        link = p["map"]
        if link in cache:
            ll = cache[link]
        else:
            ll = resolve(link)
            time.sleep(1.0)
            cache[link] = ll
            json.dump(cache, open(CACHE,"w",encoding="utf-8"), ensure_ascii=False)
        if ll:
            p["ll"] = ll; filled += 1
            print(f"[{i}/{len(todo)}] ✓ {p['n']} -> {ll}")
        else:
            missed += 1
            print(f"[{i}/{len(todo)}] · {p['n']} (không rút được toạ độ)")

    out = write_places(text, s, e, places)
    json.loads(re.search(r"(?:const|var) PLACES = (\[.*\n\]);", out, re.S).group(1))  # kiểm tra hợp lệ
    open(args.data, "w", encoding="utf-8").write(out)
    print(f"\nXong. Điền thêm {filled} toạ độ · {missed} không rút được.")
    print(f"Đã cập nhật {args.data}. Mở lại web để xem bản đồ dày marker hơn.")

if __name__ == "__main__":
    main()
