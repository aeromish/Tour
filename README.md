# Dọc Bờ — web cẩm nang phượt ven biển miền Trung

Trang web tra cứu cung đường moto ven biển (Hà Tĩnh → Phú Yên): xem điểm đẹp,
quán ăn, chỗ nghỉ trên bản đồ; bấm là chỉ đường hoặc gọi điện.
Không cần cài đặt, không cần tài khoản — chỉ là một web tĩnh.

## Cấu trúc thư mục

```
doc-bo/
├─ index.html        ← trang web (giao diện + logic)
├─ data.js           ← TOÀN BỘ DỮ LIỆU điểm — sửa ở đây là chính
├─ lib/
│  ├─ leaflet.js     ← thư viện bản đồ (để sẵn, chạy được cả khi mạng yếu)
│  └─ leaflet.css
├─ assets/
│  ├─ icon-192.png   ← icon / favicon
│  └─ icon-512.png
└─ README.md
```

## Chạy thử trên máy

Cách nhanh: mở thẳng `index.html` bằng trình duyệt là xem được ngay.

Cách "chuẩn web" (khuyến nghị, để bản đồ và định vị hoạt động đầy đủ): mở terminal
trong thư mục `doc-bo` rồi chạy một server tĩnh:

```bash
python3 -m http.server 8000
```

Sau đó mở trình duyệt vào `http://localhost:8000`.

## Sửa / thêm điểm

Mở `data.js`, sửa danh sách `PLACES`. Mỗi điểm là một dòng, ví dụ:

```js
{n:'Tên điểm', t:'view', p:'qb', ll:[17.47,106.62], note:'Ghi chú', tel:'0123456789', map:'https://maps.app.goo.gl/...'},
```

- `t` (loại): `view` cảnh đẹp · `food` ăn uống · `stay` lưu trú
- `p` (tỉnh): dùng đúng mã `key` trong danh sách `PROVINCES` (vd `ht`, `qb`, `hue`…)
- `ll` (toạ độ `[vĩ độ, kinh độ]`): có thì hiện ghim trên bản đồ; bỏ trống cũng được.
  Lấy toạ độ: mở Google Maps, bấm chuột phải vào điểm → bấm vào cặp số để copy.
- `tel`, `map`, `note`: tuỳ chọn.

Lưu file, tải lại trang là thấy thay đổi.

## Đổi màu / icon

- Màu chủ đạo nằm trong `index.html`, phần `:root { --sea: ...; --sun: ...; }`.
- Đổi icon: thay 2 file trong `assets/` (giữ nguyên tên).

## Đưa lên mạng (deploy miễn phí)

**Netlify Drop** (dễ nhất, không cần tài khoản để thử): vào https://app.netlify.com/drop
rồi kéo-thả nguyên thư mục `doc-bo` vào. Vài giây sau có link chạy thật (HTTPS).

**Vercel**: cài `npm i -g vercel`, vào thư mục `doc-bo` gõ `vercel` và làm theo hướng dẫn.
Hoặc đẩy thư mục lên GitHub rồi "Import Project" trên vercel.com.

Khi đã chạy trên HTTPS, nút "Vị trí của tôi" sẽ xin quyền định vị và hoạt động bình thường.

## Ghi chú

- Toạ độ các điểm hiện là **ước lượng** cho những mốc lớn — nên thay bằng toạ độ thật khi rảnh.
- **Tính năng:** bản đồ toàn màn + danh sách kéo lên/xuống (bottom-sheet); nút **Gần tôi** (◎) sắp các điểm theo khoảng cách thực; marker có màu + biểu tượng theo loại (🏞️ cảnh đẹp · 🍜 ăn uống · 🛏️ lưu trú); tìm kiếm, lọc loại, lọc theo tỉnh.

Hiện có 431 điểm trải 21 tỉnh/thành: Đông Bắc (Hà Giang, Cao Bằng, Lạng Sơn, Tuyên Quang), Tây Bắc (Điện Biên, Sơn La, Hòa Bình), duyên hải Bắc Bộ (Quảng Ninh, Hải Phòng), miền Trung (Hà Tĩnh → Phú Yên) và ven biển phía Nam (Nha Trang, Ninh Thuận, Bình Thuận, Vũng Tàu).
- Nút "Chỉ đường" mở Google Maps; nếu điểm chưa có link `map` thì nó tự tìm theo tên.

## Điền toạ độ tự động cho điểm còn thiếu (tuỳ chọn)

Có 2 script, nên chạy theo thứ tự này (Windows dùng `py`, Mac/Linux dùng `python3`):

**Bước 1 — rút toạ độ từ link Google Maps sẵn có** (chính xác, phủ ~137 điểm có link):
```bash
cd doc-bo
py tools\resolve_maps.py            # thử trước: thêm --limit 20
```

**Bước 2 — vớt nốt điểm không có link, tra trên OpenStreetMap:**
```bash
py tools\geocode.py                 # thử trước: thêm --limit 20
```

Cả hai đều: cần internet, chỉ thêm toạ độ cho điểm đang thiếu, có cache, kiểm tra
hợp lệ trước khi ghi nên không sợ hỏng `data.js`, và dùng thư viện chuẩn của Python
(không phải cài thêm gì).

---

### Chi tiết từng script


`resolve_maps.py` — lần theo link Maps của mỗi điểm để lấy đúng toạ độ điểm đó.
`geocode.py` — tra tên trên OpenStreetMap, dùng cho điểm không có link.

```bash
py tools\geocode.py --limit 20   # ví dụ chạy thử 20 điểm
```

- Cần internet; script tự nghỉ ~1,1 giây/điểm theo quy định của Nominatim.
- Chỉ thêm toạ độ cho điểm đang thiếu, không đụng điểm đã có.
- Kết quả lưu cache (`.geocode_cache.json`), chạy lại không gọi mạng lại.
- Homestay/quán nhỏ nhiều khi không có trên OSM nên sẽ bị bỏ qua — bình thường.
  Bãi biển, gành, đèo, địa danh lớn thường tìm ra.

Chạy xong, mở lại web là thấy thêm ghim.

## Thêm điểm mới ở khu vực khác (gợi ý nguồn)

- **OpenStreetMap / Overpass API** — kéo hàng loạt điểm (bãi biển, quán ăn, cây xăng…)
  theo khu vực, kèm sẵn toạ độ. Khớp với bản đồ app đang dùng, miễn phí (giấy phép ODbL,
  nhớ giữ dòng "© OpenStreetMap").
- **Tri thức bản địa**: group phượt, phuot.vn, blog review, danh sách đã lưu trên Google Maps —
  chất lượng thật, đúng gu đi moto (như chính cẩm nang gốc).
- **Google Places API** dữ liệu phong phú (rating, ảnh, giờ mở cửa) nhưng cần API key, có phí,
  và điều khoản hạn chế lưu trữ lâu dài — cân nhắc nếu chỉ tra cứu lúc chạy.
