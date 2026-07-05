/* ============================================================
   DỮ LIỆU APP "DỌC BỜ" — trích đầy đủ từ cẩm nang đã upload.
   Sửa/thêm điểm ngay tại file này (mảng PLACES), không cần đụng index.html.
   Trường: n tên | t loại(view/food/stay) | p mã tỉnh | ll [vĩ độ,kinh độ]
           | note ghi chú | tel SĐT | map link Google Maps
   Ghi chú: ll chỉ gán cho các điểm mốc lớn (toạ độ ước lượng); phần lớn điểm
   dựa vào link Maps thật nên nút "Chỉ đường" vẫn mở đúng chỗ dù không có ll.
   ============================================================ */

const TYPE = {
  view:  {label:'Cảnh đẹp', color:'#0e7c86'},
  food:  {label:'Ăn uống',  color:'#e5643c'},
  stay:  {label:'Lưu trú',  color:'#4e8c5a'},
};

const PROVINCES = [
  {key:'ht', name:'Hà Tĩnh',       c:[18.20,106.30]},
  {key:'qb', name:'Quảng Bình',    c:[17.55,106.55]},
  {key:'qt', name:'Quảng Trị',     c:[17.00,107.05]},
  {key:'hue',name:'Huế',           c:[16.40,107.70]},
  {key:'dn', name:'Đà Nẵng–Hội An',c:[16.05,108.20]},
  {key:'qng',name:'Quảng Ngãi',    c:[15.10,108.75]},
  {key:'bd', name:'Bình Định',     c:[13.80,109.25]},
  {key:'py', name:'Phú Yên',       c:[13.05,109.33]},
];

const PLACES = [
 {
  "n": "Thiên Cầm",
  "t": "view",
  "p": "ht",
  "ll": [
   18.34,
   106.1
  ],
  "note": "Điểm vào tuyến biển Hà Tĩnh. Mẹo: đừng ăn ngay Thiên Cầm, chạy thêm tới Kỳ Xuân."
 },
 {
  "n": "Cầu Cửa Nhượng",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/QUydHETRMHBcN6HNA"
 },
 {
  "n": "Hải đăng Cửa Nhượng",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/T6bxfv1Fpf75sGfS8"
 },
 {
  "n": "Nhà hàng Hải Đăng Tình Lành",
  "t": "food",
  "p": "ht",
  "note": "Phía sau ngọn hải đăng, Cẩm Trung.",
  "tel": "0968540598",
  "map": "https://maps.app.goo.gl/Zgf4hRDr4RqJzpu7A"
 },
 {
  "n": "Đường ven biển Kỳ Bắc",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/R5GVSosEeznNEpSf9"
 },
 {
  "n": "Bãi biển Cu Kỳ — Kỳ Xuân",
  "t": "view",
  "p": "ht",
  "ll": [
   18.18,
   106.3
  ],
  "note": "Có lều nghỉ, võng nằm, cảnh đẹp, cắm trại ok, hải sản tươi (chế biến bình thường).",
  "tel": "0977976678",
  "map": "https://maps.app.goo.gl/j7xAo2KcYHBEnc3w6"
 },
 {
  "n": "Bãi biển Kỳ Xuân",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/6XCGwM5M9dmtTwrU7"
 },
 {
  "n": "Nhà hàng & Homestay Phương Đức",
  "t": "stay",
  "p": "ht",
  "note": "Chân biển Kỳ Xuân, có homestay view biển cực chill.",
  "tel": "0964588777",
  "map": "https://maps.app.goo.gl/ohqVbjva9fLwxJ1YA"
 },
 {
  "n": "Rì Rào Homestay Kỳ Xuân",
  "t": "stay",
  "p": "ht",
  "note": "Thắng Lợi, Kỳ Xuân.",
  "map": "https://maps.app.goo.gl/MsGZi1Vt8HVvzKz86"
 },
 {
  "n": "Nhà hàng Thế Giới Mực Nhảy",
  "t": "food",
  "p": "ht",
  "note": "Xuân Thắng, Kỳ Xuân.",
  "tel": "0964890369",
  "map": "https://maps.app.goo.gl/6r6wv7feHPFHhYg19"
 },
 {
  "n": "Bếp dã ngoại Kỳ Xuân",
  "t": "food",
  "p": "ht",
  "note": "Phải kéo đồ một đoạn.",
  "tel": "0978822543",
  "map": "https://maps.app.goo.gl/gXz3bGTDmTtE8Yfq5"
 },
 {
  "n": "Hải sản Bao Cấp 1994",
  "t": "food",
  "p": "ht",
  "note": "Quán ruột ở Kỳ Xuân, dân địa phương hay ăn.",
  "tel": "0358571276",
  "map": "https://maps.app.goo.gl/fmjzCHmVuPMQHxQE8"
 },
 {
  "n": "Nhà hàng Hải Sản Dân Hường",
  "t": "food",
  "p": "ht",
  "tel": "0919973458",
  "map": "https://maps.app.goo.gl/vBGEMQzyY98Ni95N9"
 },
 {
  "n": "LIMDIM Hotel",
  "t": "stay",
  "p": "ht",
  "note": "Kỳ Xuân.",
  "tel": "0971560642",
  "map": "https://maps.app.goo.gl/ZhWccgYaqUkzc1Sw6"
 },
 {
  "n": "Nhà nghỉ Phương Nam",
  "t": "stay",
  "p": "ht",
  "note": "Sơn Tịnh, Kỳ Xuân.",
  "tel": "0972520420",
  "map": "https://maps.app.goo.gl/qwZbkxLv3wtenze37"
 },
 {
  "n": "Bãi biển Nguyễn Huệ — Kỳ Xuân",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/TRqUSdQ81hLsb39j6"
 },
 {
  "n": "Eo biển Kỳ Xuân – Kỳ Phú",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/ZoCn26Bf4cMMnMZ2A"
 },
 {
  "n": "Đường quốc phòng ven biển Xuân Hội",
  "t": "view",
  "p": "ht",
  "note": "Kỳ Khang.",
  "map": "https://maps.app.goo.gl/YdNLaWsGaAxUJKLW9"
 },
 {
  "n": "Quảng trường biển Kỳ Ninh",
  "t": "view",
  "p": "ht",
  "note": "Kỳ Anh.",
  "map": "https://maps.app.goo.gl/Lo8TA53yeD5BbknEA"
 },
 {
  "n": "Homestay View Biển — Kỳ Nam",
  "t": "stay",
  "p": "ht",
  "note": "Kỳ Nam, Kỳ Anh. Gặp em Hương.",
  "tel": "0963345335",
  "map": "https://maps.app.goo.gl/1CJBSWrU3vegdFg96"
 },
 {
  "n": "Nhà hàng Ra Khơi",
  "t": "food",
  "p": "ht",
  "note": "Đường ven biển Hoành Sơn.",
  "tel": "0973266579",
  "map": "https://maps.app.goo.gl/ocEDwm11LDtnx3Lz5"
 },
 {
  "n": "Nhà hàng – Khách sạn Hoành Sơn",
  "t": "stay",
  "p": "ht",
  "tel": "0973531430",
  "map": "https://maps.app.goo.gl/irkKmi72A7Z5LpJr7"
 },
 {
  "n": "Bãi biển Hoành Sơn",
  "t": "view",
  "p": "ht",
  "ll": [
   18.07,
   106.5
  ],
  "note": "Gần Hoành Sơn Quan – Đèo Ngang.",
  "map": "https://maps.app.goo.gl/MqQ5vtWhfaP96LFaA"
 },
 {
  "n": "Hoành Sơn Quán",
  "t": "food",
  "p": "ht",
  "tel": "0967825852",
  "map": "https://maps.app.goo.gl/Qd8dZr2JEJDBEdKu7"
 },
 {
  "n": "Camping bãi biển Kỳ Anh",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/mYqhvD2FSw6w59bu6"
 },
 {
  "n": "Mực nháy Vũng Áng – NH Hậu Thìn",
  "t": "food",
  "p": "ht",
  "note": "Ở cuối bãi biển.",
  "tel": "0978957599",
  "map": "https://maps.app.goo.gl/shmGsDDTs3kuCXhj6"
 },
 {
  "n": "KS Hoàng Anh — Kỳ Thịnh",
  "t": "stay",
  "p": "ht",
  "note": "Chỗ ngủ khi phải ở lại Vũng Áng.",
  "tel": "0967855509",
  "map": "https://maps.app.goo.gl/eTGTPeQSH6SyFT2P9"
 },
 {
  "n": "Biển Vũng Chùa — mộ Đại tướng Giáp",
  "t": "view",
  "p": "qb",
  "ll": [
   17.91,
   106.5
  ],
  "map": "https://maps.app.goo.gl/Yjz8cTPSrZEkq6Sf7"
 },
 {
  "n": "Nhà hàng & Homestay Hoa Biển",
  "t": "stay",
  "p": "qb",
  "note": "Gần mộ Đại tướng.",
  "tel": "0908423410"
 },
 {
  "n": "Cảnh Dương Beach",
  "t": "view",
  "p": "qb",
  "map": "https://maps.app.goo.gl/vAayVrQGaenmGofs8"
 },
 {
  "n": "Bãi tắm Cảnh Dương",
  "t": "view",
  "p": "qb",
  "note": "Cảnh Thượng, Quảng Trạch.",
  "map": "https://maps.app.goo.gl/wyv9RL1ADBgvx9cWA"
 },
 {
  "n": "Bãi biển Quảng Thọ",
  "t": "view",
  "p": "qb",
  "note": "Bắc Gianh.",
  "map": "https://maps.app.goo.gl/3oPDb7tiAQCU3e8MA"
 },
 {
  "n": "Bãi Đá Nhảy — Lý Hòa",
  "t": "view",
  "p": "qb",
  "ll": [
   17.65,
   106.45
  ],
  "note": "Bãi đá kỳ thú sát QL1A, Bố Trạch.",
  "map": "https://maps.app.goo.gl/3s6cQEEzpDdsvgXA8"
 },
 {
  "n": "Bãi biển Đá Nhảy — Thanh Trạch",
  "t": "view",
  "p": "qb",
  "map": "https://maps.app.goo.gl/pqRhuALjoCoCj8cV6"
 },
 {
  "n": "Đá Nhảy Beach Hotel",
  "t": "stay",
  "p": "qb",
  "tel": "0848445444",
  "map": "https://maps.app.goo.gl/b6MVNyA9vk9zxfh28"
 },
 {
  "n": "Bãi Đá Nhảy (phía sau)",
  "t": "view",
  "p": "qb",
  "note": "Lý Hòa, Bố Trạch.",
  "map": "https://maps.app.goo.gl/6FSbQyMzaVhiShY56"
 },
 {
  "n": "Camping bãi Đá Nhảy",
  "t": "view",
  "p": "qb",
  "map": "https://maps.app.goo.gl/48BYHQTG9sB4Jya58"
 },
 {
  "n": "Khách sạn Hoài Thu",
  "t": "stay",
  "p": "qb",
  "note": "Bắc Trạch.",
  "tel": "0348740959",
  "map": "https://maps.app.goo.gl/MMbBN6xACWF3p9sy5"
 },
 {
  "n": "Khách sạn An Bình",
  "t": "stay",
  "p": "qb",
  "note": "Xóm Cồn, Bắc Gianh.",
  "tel": "0912414121",
  "map": "https://maps.app.goo.gl/12fY5JHVjtkNv19J9"
 },
 {
  "n": "Cường Thu Nhà Nghỉ",
  "t": "stay",
  "p": "qb",
  "note": "Quyết Thắng, Bắc Trạch.",
  "tel": "0949094004",
  "map": "https://maps.app.goo.gl/7PtWfvkqV2hpNoKY6"
 },
 {
  "n": "Khách sạn Hoài Thu 2",
  "t": "stay",
  "p": "qb",
  "note": "Bắc Trạch.",
  "tel": "0348740959",
  "map": "https://maps.app.goo.gl/2HrV5Kn5bPv5aDxM7"
 },
 {
  "n": "Thanh Tuấn Homestay",
  "t": "stay",
  "p": "qb",
  "note": "Bãi Đá Nhảy, Thanh Trạch.",
  "tel": "0977536332",
  "map": "https://maps.app.goo.gl/TaWiRPWWvcPF9eAc6"
 },
 {
  "n": "Đồi cát Quang Phú",
  "t": "view",
  "p": "qb",
  "note": "567 Trương Pháp, Nam Trạch.",
  "map": "https://maps.app.goo.gl/iwyMNKG5BBis85pd6"
 },
 {
  "n": "Bãi biển Nhật Lệ — Đồng Hới",
  "t": "view",
  "p": "qb",
  "ll": [
   17.47,
   106.62
  ],
  "map": "https://maps.app.goo.gl/yGMEKc8mQV533mMN7"
 },
 {
  "n": "KS Thăng Long (view Nhật Lệ)",
  "t": "stay",
  "p": "qb",
  "note": "View biển Nhật Lệ, gặp chị Cao Hoài Thu.",
  "tel": "0707173173",
  "map": "https://maps.app.goo.gl/C4GPYpUXW3C8EuFR6"
 },
 {
  "n": "Nam Long Plus Hotel",
  "t": "stay",
  "p": "qb",
  "note": "28A Phan Chu Trinh, Đồng Hới.",
  "tel": "0918923595",
  "map": "https://maps.app.goo.gl/TikF8fPJoNVecUiq7"
 },
 {
  "n": "Nhà khách Thanh Thiếu Niên",
  "t": "stay",
  "p": "qb",
  "tel": "02323810447",
  "map": "https://maps.app.goo.gl/frn75ux8UyNQAyyBA"
 },
 {
  "n": "Nhà Vườn Thuyền Trưởng",
  "t": "stay",
  "p": "qb",
  "note": "Đồng Hới. Thuê nguyên căn đầy đủ tiện nghi, 2–2,5 triệu/đêm.",
  "tel": "0847399999"
 },
 {
  "n": "An Nhiên",
  "t": "stay",
  "p": "qb",
  "note": "KĐT Đông Phùng Hưng, Đồng Hới.",
  "tel": "0827652225"
 },
 {
  "n": "Thanh Hương Motel",
  "t": "stay",
  "p": "qb",
  "note": "Ngoài trung tâm Đồng Hới 3–4km, thôn 7 Bố Trạch.",
  "map": "https://maps.app.goo.gl/CrVoeg5sFoBjhfmR9"
 },
 {
  "n": "Nhà khách 30/4",
  "t": "stay",
  "p": "qb",
  "note": "219 Trương Pháp, Đồng Hới.",
  "tel": "0912072387",
  "map": "https://maps.app.goo.gl/qXhuf94uLRuaA8eA9"
 },
 {
  "n": "Cơm bao cấp Quảng Bình",
  "t": "food",
  "p": "qb",
  "tel": "0855138222",
  "map": "https://maps.app.goo.gl/wsvqTeavGCHxRWz86"
 },
 {
  "n": "Cơm gà đồi — Đồng Hới",
  "t": "food",
  "p": "qb",
  "note": "134 Lý Thường Kiệt."
 },
 {
  "n": "Nem lụi & bún thịt nướng — Đồng Hới",
  "t": "food",
  "p": "qb",
  "note": "Nem lụi 60k/10 cái, bún thịt nướng 25k. Có ship.",
  "tel": "0394647164"
 },
 {
  "n": "Thanh Tuấn — KS Phong Nha",
  "t": "stay",
  "p": "qb",
  "note": "Khu Phong Nha còn nhiều nhà nghỉ: Carambola, Jungle Boss, Phong Nha Bolero…",
  "tel": "0705953788"
 },
 {
  "n": "Khách sạn Phương Đông — Cửa Việt",
  "t": "stay",
  "p": "qt",
  "tel": "0969440545"
 },
 {
  "n": "Bãi biển Trung Giang — Cửa Tùng",
  "t": "view",
  "p": "qt",
  "ll": [
   17.06,
   107.1
  ],
  "note": "Ăn hải sản khu Trung Giang gần cầu Cửa Tùng — ngon-bổ-rẻ hơn sát bờ Cửa Việt.",
  "tel": "0944363357",
  "map": "https://maps.app.goo.gl/NXRbHursAc2u3dEn7"
 },
 {
  "n": "Cầu Hiền Lương — Vĩ tuyến 17",
  "t": "view",
  "p": "qt",
  "ll": [
   17.0,
   107.0
  ],
  "map": "https://maps.app.goo.gl/uQ5D6XsuDjuis1Qt9"
 },
 {
  "n": "Thành cổ Quảng Trị",
  "t": "view",
  "p": "qt",
  "map": "https://maps.app.goo.gl/6fRKfYYJPZy8Nm2W7"
 },
 {
  "n": "Khách sạn Song Phát — Cửa Việt",
  "t": "stay",
  "p": "qt",
  "note": "Đường Hoàng Diệu.",
  "tel": "0368136699",
  "map": "https://maps.app.goo.gl/T592cYRtUBLtBKDV8"
 },
 {
  "n": "Eo biển xanh — Cửa Tùng",
  "t": "view",
  "p": "qt",
  "map": "https://maps.app.goo.gl/21M77DhnhPGHUw5K7"
 },
 {
  "n": "Địa đạo Vịnh Mốc",
  "t": "view",
  "p": "qt",
  "note": "Có quán ăn ngay cổng.",
  "map": "https://maps.app.goo.gl/J5pAFPGCGM59RjRj8"
 },
 {
  "n": "Mũi Si",
  "t": "view",
  "p": "qt",
  "note": "Hợp mọi xe, đầy đủ dịch vụ.",
  "map": "https://maps.app.goo.gl/XmEQpwP3MfAX44Ep8"
 },
 {
  "n": "Homestay Mũi Si",
  "t": "stay",
  "p": "qt",
  "map": "https://maps.app.goo.gl/DoPjh9mszkp37DDt8"
 },
 {
  "n": "Điện gió Hướng Tân",
  "t": "view",
  "p": "qt",
  "note": "Hợp mọi xe, không dịch vụ.",
  "map": "https://maps.app.goo.gl/UR1Gi4DbxVh2W9fm9"
 },
 {
  "n": "Điện gió Liên Lập",
  "t": "view",
  "p": "qt",
  "note": "Hợp mọi xe, không dịch vụ.",
  "map": "https://maps.app.goo.gl/SmXDtydo8DdKzSxs9"
 },
 {
  "n": "Cây cô đơn hồ Rào Quán",
  "t": "view",
  "p": "qt",
  "note": "Cần xe gầm cao, không dịch vụ.",
  "map": "https://maps.app.goo.gl/zM5kLramL7DS7FCY9"
 },
 {
  "n": "Nhà nghỉ Gia Đạt",
  "t": "stay",
  "p": "hue",
  "note": "58 Trần Trúc Nhẫn. Phòng đôi 4 người 500k. Cô Vân.",
  "tel": "0906551771",
  "map": "https://maps.app.goo.gl/Xk6PV8iqJmBjkQo26"
 },
 {
  "n": "Quán cơm chị Tẹo",
  "t": "food",
  "p": "hue",
  "note": "59 Hai Bà Trưng — nhiều món Huế đặc trưng, có chỗ đỗ xe.",
  "tel": "0905862388",
  "map": "https://maps.app.goo.gl/qWKw6Eiymnd3j7t67"
 },
 {
  "n": "Cơm niêu Lửa Việt",
  "t": "food",
  "p": "hue",
  "note": "Nội thành Huế.",
  "map": "https://maps.app.goo.gl/WLZNv4XbJV1B3szx7"
 },
 {
  "n": "Homestay ở Đại Nội",
  "t": "stay",
  "p": "hue",
  "note": "68 Trần Nguyên Hãn, giáp phố Lê Huân. Cô Minh.",
  "tel": "0397266119"
 },
 {
  "n": "SIMBA Homestay Huế",
  "t": "stay",
  "p": "hue",
  "note": "19 Nguyễn Tuân, Vỹ Dạ.",
  "tel": "0774446656",
  "map": "https://maps.app.goo.gl/sfoZqkGVZW9Xsna96"
 },
 {
  "n": "KS Nữ Hoàng",
  "t": "stay",
  "p": "hue",
  "note": "Nội thành Huế, ~250k/phòng đơn.",
  "tel": "0905890455"
 },
 {
  "n": "Bull House Homestay",
  "t": "stay",
  "p": "hue",
  "note": "An Cựu City.",
  "tel": "0914050515"
 },
 {
  "n": "Bãi biển Thuận An",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/gimRvp5nYch4LhSz5"
 },
 {
  "n": "Sunshine Villa",
  "t": "stay",
  "p": "hue",
  "note": "77 Thái Dương, Thuận An.",
  "tel": "0899865931",
  "map": "https://maps.app.goo.gl/EmFS2aaEx7YuSRrd9"
 },
 {
  "n": "Homestay Summer",
  "t": "stay",
  "p": "hue",
  "note": "98 Hoàng Sa, Thuận An.",
  "tel": "0914091418",
  "map": "https://maps.app.goo.gl/KxuEEuy36VR1AJPPA"
 },
 {
  "n": "Cầu vượt cửa biển Thuận An",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/GzExZJ6dLyofWoxV8"
 },
 {
  "n": "Phá Tam Giang",
  "t": "view",
  "p": "hue",
  "ll": [
   16.55,
   107.45
  ],
  "note": "Đầm phá lớn nhất Đông Nam Á, đẹp lúc hoàng hôn.",
  "tel": "0905101060"
 },
 {
  "n": "Hiên Cát Homestay",
  "t": "stay",
  "p": "hue",
  "note": "Thôn Tân Mỹ, Phong Quảng.",
  "tel": "0388728681",
  "map": "https://maps.app.goo.gl/Fks9W9LNqKMNbKrW8"
 },
 {
  "n": "Cầu Tư Hiền",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/scyMugwh6fdcQFMn6"
 },
 {
  "n": "Bãi biển Cảnh Dương — Chân Mây",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/iaMTeSbNABE71x3X8"
 },
 {
  "n": "Nhà nghỉ Cảnh Dương",
  "t": "stay",
  "p": "hue",
  "note": "Chân Mây – Lăng Cô.",
  "tel": "0935110905",
  "map": "https://maps.app.goo.gl/QbPurAahDeLdderT6"
 },
 {
  "n": "Nhà nghỉ Hoàng Ngọc — biển Cảnh Dương",
  "t": "stay",
  "p": "hue",
  "tel": "0935106990",
  "map": "https://maps.app.goo.gl/uKNt6B8ZAoxm5zp89"
 },
 {
  "n": "Bãi biển Tân Cảnh Dương",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/uPM2eVWQrVGCUsoh7"
 },
 {
  "n": "Bãi biển Chân Mây",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/RZJiwXwxxtdb3ZuG6"
 },
 {
  "n": "Nhà nghỉ Nguyệt Ánh",
  "t": "stay",
  "p": "hue",
  "note": "Biển Cảnh Dương, Chân Mây.",
  "tel": "0978941527",
  "map": "https://maps.app.goo.gl/BSktNKbee9YRh9To7"
 },
 {
  "n": "Nhà nghỉ Anh Dũng",
  "t": "stay",
  "p": "hue",
  "note": "Cảnh Dương, Chân Mây.",
  "tel": "0899081701",
  "map": "https://maps.app.goo.gl/gHuBnsTyCNHcia2W6"
 },
 {
  "n": "Bình An Guest House",
  "t": "stay",
  "p": "hue",
  "note": "Thôn Bình An, Chân Mây.",
  "tel": "0935000727",
  "map": "https://maps.app.goo.gl/iq1e4hZCVhqNCCxD7"
 },
 {
  "n": "MIMI Guest House",
  "t": "stay",
  "p": "hue",
  "note": "Lộc Vĩnh, Chân Mây.",
  "tel": "0774552912",
  "map": "https://maps.app.goo.gl/NehDvWUe9oiX9AGPA"
 },
 {
  "n": "Ghềnh Chân Mây",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/bbKhNRT4LeDTfxJ2A"
 },
 {
  "n": "Điểm ngắm bình minh Bãi Bàng — Chân Mây",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/gKehTFJybF24tCBx6"
 },
 {
  "n": "Bãi biển Lăng Cô",
  "t": "view",
  "p": "hue",
  "ll": [
   16.23,
   108.08
  ],
  "note": "Ăn bên bãi biển, đừng ăn bên đầm (đắt mà không ngon bằng).",
  "map": "https://maps.app.goo.gl/K4JCVvp9TNumQnNe9"
 },
 {
  "n": "Muối Villa Lăng Cô",
  "t": "stay",
  "p": "hue",
  "tel": "0937460888",
  "map": "https://maps.app.goo.gl/6B8Zr9CNSBdYfx9U8"
 },
 {
  "n": "Nhà nghỉ dưỡng Lăng Cô — Bộ Công An",
  "t": "stay",
  "p": "hue",
  "note": "Đ. Lạc Long Quân.",
  "tel": "02343683890",
  "map": "https://maps.app.goo.gl/6oS5yAZ67D8H5EXg8"
 },
 {
  "n": "Vitamin Sea Home",
  "t": "stay",
  "p": "hue",
  "note": "Lăng Cô.",
  "tel": "0974136886",
  "map": "https://maps.app.goo.gl/3NCkeNQ8WVvhvroAA"
 },
 {
  "n": "Khu nghỉ dưỡng Lăng Cô T26",
  "t": "stay",
  "p": "hue",
  "note": "493 Lạc Long Quân.",
  "tel": "0935483548",
  "map": "https://maps.app.goo.gl/F7nHorZ8Us8KXBS79"
 },
 {
  "n": "Hải Vân Quan",
  "t": "view",
  "p": "hue",
  "ll": [
   16.2,
   108.13
  ],
  "note": "Thiên hạ đệ nhất hùng quan, đỉnh đèo Hải Vân.",
  "map": "https://maps.app.goo.gl/oZyCKhBQ4atjz2kk8"
 },
 {
  "n": "Bãi tắm Mân Thái",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/jLXZTPSmkRDv9Fff7"
 },
 {
  "n": "Ngũ Hành Sơn",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/C9hVShNNi2RorRZU9"
 },
 {
  "n": "Bãi biển Mỹ Khê",
  "t": "view",
  "p": "dn",
  "ll": [
   16.06,
   108.25
  ]
 },
 {
  "n": "Bãi biển An Bàng — Hội An",
  "t": "view",
  "p": "dn",
  "ll": [
   15.9,
   108.32
  ],
  "map": "https://maps.app.goo.gl/fHVdfWANZF7YYGML6"
 },
 {
  "n": "An Bang Seascape Homestay",
  "t": "stay",
  "p": "dn",
  "note": "82 Nguyễn Phan Vinh, Hội An.",
  "tel": "0904885502",
  "map": "https://maps.app.goo.gl/5G1LM3UKFYemiXJv6"
 },
 {
  "n": "Bãi biển Cửa Đại",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/6oSnpNBXwh3paz1t8"
 },
 {
  "n": "Bãi tắm Cửa Đại",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/8pimYUoxunkpERcWA"
 },
 {
  "n": "Làng bích hoạ Tam Thanh",
  "t": "view",
  "p": "dn",
  "ll": [
   15.47,
   108.62
  ],
  "map": "https://maps.app.goo.gl/sZAv9mRcrZnAyxJu8"
 },
 {
  "n": "Homestay Rio's Gió Biển — Làng Bích Họa",
  "t": "stay",
  "p": "dn",
  "tel": "0935199159",
  "map": "https://maps.app.goo.gl/r6FMNGqwjGkVdwoe9"
 },
 {
  "n": "Homestay Ngọc Lan",
  "t": "stay",
  "p": "dn",
  "note": "Thôn Hòa Hạ, Quảng Phú.",
  "tel": "0868655433",
  "map": "https://maps.app.goo.gl/JgTe7yi27yrNgxea8"
 },
 {
  "n": "Mi Casa Garden",
  "t": "stay",
  "p": "dn",
  "note": "Thanh Niên, Quảng Phú.",
  "tel": "0902158919",
  "map": "https://maps.app.goo.gl/zLdfVr82h2x3ovHS7"
 },
 {
  "n": "Homestay Hoa Giấy",
  "t": "stay",
  "p": "dn",
  "note": "Đường Thanh Niên, Quảng Phú.",
  "tel": "0914747266",
  "map": "https://maps.app.goo.gl/auoK3CfF2ioHZUNKA"
 },
 {
  "n": "Tam Tien Homes",
  "t": "stay",
  "p": "dn",
  "note": "Homestay duy nhất có bãi cát dài đi thẳng xuống biển, không bị che chắn.",
  "tel": "0901998115",
  "map": "https://maps.app.goo.gl/hnBdvgyGv37uMgJs9"
 },
 {
  "n": "Chợ cá Tam Tiến",
  "t": "food",
  "p": "dn",
  "map": "https://maps.app.goo.gl/YGaQg3z3gYuphDrG6"
 },
 {
  "n": "Bà Nà Hills",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/j26WFCoNfGeDg27o9"
 },
 {
  "n": "Nhà nghỉ Việt Thương",
  "t": "stay",
  "p": "dn",
  "note": "Hòa Tiến.",
  "tel": "0362955674",
  "map": "https://maps.app.goo.gl/xBmuJQXwrAkK2uqB8"
 },
 {
  "n": "Bean's House Riverfront",
  "t": "stay",
  "p": "dn",
  "note": "285 Trần Hưng Đạo, An Hải.",
  "tel": "0777930210",
  "map": "https://maps.app.goo.gl/MJaWPSGAkvjE1nTn9"
 },
 {
  "n": "Khách sạn MT Ngô Quyền — Sơn Trà",
  "t": "stay",
  "p": "dn",
  "note": "Sát trạm sạc VinFast, bãi đỗ ô tô rộng, thuê xe AB 100k/ngày, giá từ 300k.",
  "tel": "0367772088",
  "map": "https://maps.app.goo.gl/pomzP4jkZTZADSGe7"
 },
 {
  "n": "Homestay biển Làng Bích Hoạ — Tam Kỳ",
  "t": "stay",
  "p": "dn",
  "tel": "0387091611",
  "map": "https://maps.app.goo.gl/ENsDWGUXABBvz8AY9"
 },
 {
  "n": "KS Phi Hùng",
  "t": "stay",
  "p": "dn",
  "note": "Hùng Vương.",
  "map": "https://maps.app.goo.gl/Qg5EAZfcKys2C4b67"
 },
 {
  "n": "KS ở Non Nước",
  "t": "stay",
  "p": "dn",
  "note": "65 Võ Duy Ninh, Sơn Trà. Studio bếp riêng ~299k, gần biển Mân Thái, có chỗ đỗ ô tô.",
  "tel": "0934568077"
 },
 {
  "n": "Homestay Snow Pearl",
  "t": "stay",
  "p": "dn",
  "note": "10 Trần Cao Vân, gần phố cổ, ~300k.",
  "tel": "0905434943",
  "map": "https://maps.app.goo.gl/LV1JnsMXhcFhjqBT9"
 },
 {
  "n": "Bãi tắm Sa Huỳnh",
  "t": "view",
  "p": "qng",
  "ll": [
   14.68,
   109.05
  ],
  "note": "Bãi biển vắng, cát đẹp trên đường vào Bình Định."
 },
 {
  "n": "Chùa Minh Đức",
  "t": "view",
  "p": "qng",
  "note": "Trên cung đường ven biển Quảng Ngãi."
 },
 {
  "n": "Đảo Lý Sơn",
  "t": "view",
  "p": "qng",
  "note": "Đi tàu ra, dịch vụ cơ bản.",
  "map": "https://maps.app.goo.gl/bxKUN5k8VxQULEf38"
 },
 {
  "n": "Bãi biển Tam Quan Bắc",
  "t": "view",
  "p": "bd",
  "note": "Đường tỉnh 639, dừng nghỉ trưa có bãi tắm đẹp & quán ăn."
 },
 {
  "n": "Bến Lộ Diêu — Tàu Không Số",
  "t": "view",
  "p": "bd",
  "note": "Đường tỉnh 639."
 },
 {
  "n": "Cầu Đề Gi",
  "t": "view",
  "p": "bd"
 },
 {
  "n": "Eo Gió — Nhơn Lý",
  "t": "view",
  "p": "bd",
  "ll": [
   13.82,
   109.34
  ],
  "note": "Cung biển đẹp nhất Quy Nhơn. Mua vé vào tản bộ ngắm biển Đông."
 },
 {
  "n": "Bãi biển Quy Nhơn",
  "t": "view",
  "p": "bd",
  "ll": [
   13.77,
   109.23
  ],
  "note": "Hải sản dọc Xuân Diệu & Ngọc Hân Công Chúa."
 },
 {
  "n": "Hòn Khô — Làng Chài Nhơn Hải",
  "t": "view",
  "p": "bd",
  "note": "Lặn ngắm san hô, chèo SUP. Gửi xe, mua vé tàu ra đảo ~5 phút."
 },
 {
  "n": "Bãi Kỳ Co",
  "t": "view",
  "p": "bd",
  "note": "Leo núi vào bãi (có vé) hoặc đi thuyền từ Nhơn Lý. Thuê phao/kính/đồ bơi tại bãi."
 },
 {
  "n": "Tháp Đôi Chămpa",
  "t": "view",
  "p": "bd",
  "note": "Phố Trần Hưng Đạo, di tích Chăm giữa thành phố."
 },
 {
  "n": "Ghềnh Ráng Tiên Sa",
  "t": "view",
  "p": "bd",
  "note": "Khu di tích nhà thơ Hàn Mặc Tử."
 },
 {
  "n": "Quán Vị Cua — bún Rạm",
  "t": "food",
  "p": "bd",
  "note": "02 Ngọc Hân Công Chúa, đặc sản bún rạm."
 },
 {
  "n": "Lẩu sứa Thanh Kiều",
  "t": "food",
  "p": "bd",
  "note": "69/1 Trần Hưng Đạo — gỏi cá & lẩu sứa đặc sản Quy Nhơn."
 },
 {
  "n": "Lẩu sứa Hoa Hoa",
  "t": "food",
  "p": "bd",
  "note": "8 Nguyễn Dữ, Hải Cảng."
 },
 {
  "n": "Hệ thống Ông Minh (bò tơ, hải sản)",
  "t": "food",
  "p": "bd",
  "note": "Nguyễn Trung Tín, Nguyễn Thị Định, Bùi Hữu Nghĩa."
 },
 {
  "n": "Quán nhậu Biển Hồ — Quy Nhơn",
  "t": "food",
  "p": "bd",
  "map": "https://maps.app.goo.gl/rrLPzB3xMg6rJr2Q9"
 },
 {
  "n": "TMS Sea View Quy Nhơn",
  "t": "stay",
  "p": "bd",
  "tel": "0966377719"
 },
 {
  "n": "Luxury Apartment Altara",
  "t": "stay",
  "p": "bd",
  "note": "76 Trần Hưng Đạo. Căn 2 ngủ 1 khách, đầy đủ tiện nghi, hơn 600k/đêm.",
  "tel": "0796719039"
 },
 {
  "n": "Xavia Hotel",
  "t": "stay",
  "p": "bd",
  "note": "Trung tâm Quy Nhơn.",
  "tel": "0941351557"
 },
 {
  "n": "KS Hà Min",
  "t": "stay",
  "p": "bd",
  "note": "Trung tâm Quy Nhơn.",
  "tel": "0913600327"
 },
 {
  "n": "KS Dezon",
  "t": "stay",
  "p": "bd",
  "note": "Trung tâm Quy Nhơn.",
  "tel": "0983809679"
 },
 {
  "n": "Gallery Home",
  "t": "stay",
  "p": "bd",
  "note": "Trung tâm Quy Nhơn.",
  "tel": "0913595012"
 },
 {
  "n": "Le Mint Hotel",
  "t": "stay",
  "p": "bd",
  "note": "Trung tâm Quy Nhơn — được khen ổn.",
  "tel": "025636866889"
 },
 {
  "n": "Hotel Bel-air",
  "t": "stay",
  "p": "bd",
  "note": "Trung tâm Quy Nhơn.",
  "tel": "0942251779"
 },
 {
  "n": "KS Ciao",
  "t": "stay",
  "p": "bd",
  "tel": "02566516688"
 },
 {
  "n": "Ngọc Linh Hotel",
  "t": "stay",
  "p": "bd",
  "tel": "02563546699"
 },
 {
  "n": "Yến Vi Hotel",
  "t": "stay",
  "p": "bd",
  "tel": "02566294234"
 },
 {
  "n": "Money Fine Hotel",
  "t": "stay",
  "p": "bd",
  "tel": "0906507647"
 },
 {
  "n": "KS Anh Vy",
  "t": "stay",
  "p": "bd",
  "tel": "02563847763"
 },
 {
  "n": "KS Hoàng Hưng",
  "t": "stay",
  "p": "bd",
  "note": "Khu quảng trường.",
  "tel": "0905410628"
 },
 {
  "n": "Seaside Hotel",
  "t": "stay",
  "p": "bd",
  "note": "Khu quảng trường.",
  "tel": "0903954915"
 },
 {
  "n": "Mio Hotel",
  "t": "stay",
  "p": "bd",
  "note": "Khu quảng trường.",
  "tel": "0256247879"
 },
 {
  "n": "An House",
  "t": "stay",
  "p": "bd",
  "note": "Khu quảng trường.",
  "tel": "02563629369"
 },
 {
  "n": "À Ơi Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu TP/Bãi Xếp.",
  "tel": "0357035590",
  "map": "https://maps.app.goo.gl/a7DXpBf5VCuejgH77"
 },
 {
  "n": "Nắng Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu TP/Bãi Xếp.",
  "tel": "0328865768"
 },
 {
  "n": "Sen Trúc Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu TP/Bãi Xếp.",
  "tel": "0962071917"
 },
 {
  "n": "BBnB Home Quy Nhơn",
  "t": "stay",
  "p": "bd",
  "tel": "0902420408"
 },
 {
  "n": "Home Bảo Bảo",
  "t": "stay",
  "p": "bd",
  "tel": "0914299177"
 },
 {
  "n": "Home Sunrise",
  "t": "stay",
  "p": "bd",
  "tel": "02563535151"
 },
 {
  "n": "Pimira Home",
  "t": "stay",
  "p": "bd",
  "tel": "0908503239"
 },
 {
  "n": "Home Sóng Coffee",
  "t": "stay",
  "p": "bd",
  "note": "Hòn Khô – Nhơn Hải.",
  "tel": "0846065545"
 },
 {
  "n": "Sea House Home",
  "t": "stay",
  "p": "bd",
  "note": "Hòn Khô – Nhơn Hải.",
  "tel": "0389901821"
 },
 {
  "n": "Cá Home",
  "t": "stay",
  "p": "bd",
  "note": "Hòn Khô – Nhơn Hải.",
  "tel": "0933677764"
 },
 {
  "n": "Phát Lợi Hotel",
  "t": "stay",
  "p": "bd",
  "note": "Hòn Khô – Nhơn Hải.",
  "tel": "0369727455"
 },
 {
  "n": "Viad Nhơn Hải Home",
  "t": "stay",
  "p": "bd",
  "tel": "0985899698"
 },
 {
  "n": "Nhơn Hải Beach Hotel",
  "t": "stay",
  "p": "bd",
  "tel": "0373358858"
 },
 {
  "n": "FLC Luxury Resort",
  "t": "stay",
  "p": "bd",
  "note": "Eo Gió – Nhơn Lý.",
  "tel": "02566288888"
 },
 {
  "n": "Casa de Miramar",
  "t": "stay",
  "p": "bd",
  "note": "Eo Gió – Nhơn Lý.",
  "tel": "0944941999"
 },
 {
  "n": "Happiness Hotel",
  "t": "stay",
  "p": "bd",
  "note": "Eo Gió – Nhơn Lý.",
  "tel": "02563845845"
 },
 {
  "n": "Ngõ Coffee Home",
  "t": "stay",
  "p": "bd",
  "note": "Eo Gió – Nhơn Lý.",
  "tel": "0901111799"
 },
 {
  "n": "LYS Hotel",
  "t": "stay",
  "p": "bd",
  "note": "Eo Gió – Nhơn Lý.",
  "tel": "0905042699"
 },
 {
  "n": "Mộc Sỏi Home & Mộc Núi Home",
  "t": "stay",
  "p": "bd",
  "note": "Eo Gió – Nhơn Lý (cùng chủ).",
  "tel": "0888046866"
 },
 {
  "n": "Chài Village Hotel",
  "t": "stay",
  "p": "bd",
  "tel": "0988146777"
 },
 {
  "n": "Home Vũng Nồm",
  "t": "stay",
  "p": "bd",
  "tel": "0989976339"
 },
 {
  "n": "Home Sao Biển",
  "t": "stay",
  "p": "bd",
  "note": "Khu Trung Lương.",
  "tel": "0393060764"
 },
 {
  "n": "Biển Nhớ Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu Trung Lương.",
  "tel": "0986455125"
 },
 {
  "n": "Hom Nhà Của Ba",
  "t": "stay",
  "p": "bd",
  "note": "Khu Trung Lương.",
  "tel": "0988227267"
 },
 {
  "n": "Má Năm Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu Trung Lương.",
  "tel": "0981401837"
 },
 {
  "n": "Cá Mặn Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu Trung Lương.",
  "tel": "0932356214"
 },
 {
  "n": "Nhà Ba Cơm Má Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu Trung Lương.",
  "tel": "0977001849"
 },
 {
  "n": "Biển Tình Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu Trung Lương — có thể dậy sớm ra bãi mua hải sản tươi về tự chế biến hoặc nhờ quản gia nấu.",
  "tel": "0982850092"
 },
 {
  "n": "Home Lườiii",
  "t": "stay",
  "p": "bd",
  "note": "Khu Mỹ Thắng, Phù Mỹ.",
  "tel": "0916359965"
 },
 {
  "n": "Tổ Ong Kiến",
  "t": "stay",
  "p": "bd",
  "note": "Khu Mỹ Thắng, Phù Mỹ.",
  "tel": "0902157730"
 },
 {
  "n": "Bãi biển Xuân Hải",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/6dQMoWDTwJRtbEec8"
 },
 {
  "n": "Bãi biển Bãi Nồm",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/YZZTErccEYFBtVoK8"
 },
 {
  "n": "Bãi biển Vịnh Hòa",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/XkJzFX69nLDh35hy9"
 },
 {
  "n": "Bãi biển Từ Nham",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/qXQAUm7ZvaCe3nwA7"
 },
 {
  "n": "Biển Gành Đỏ",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/QFXTTV3AZH6Q7U7a6"
 },
 {
  "n": "Bãi biển Gành Đỏ",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/bLvpABTZTm73tLi78"
 },
 {
  "n": "Hải đăng Gành Đèn",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/Rtw6HenbSn6J7K8w5"
 },
 {
  "n": "Gành Đá Đĩa",
  "t": "view",
  "p": "py",
  "ll": [
   13.28,
   109.28
  ],
  "note": "Cột đá bazan xếp tổ ong độc nhất.",
  "map": "https://maps.app.goo.gl/oyeVD5gP7fWzft2z5"
 },
 {
  "n": "Cảng cá Phú Lương",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/Z3s76PgpwFUJeYKg6"
 },
 {
  "n": "Bãi tắm Làng Chài",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/TGfzu1KUkNoXuGe19"
 },
 {
  "n": "Gành Ông",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/K6zB2vXzZQ5p5LVKA"
 },
 {
  "n": "Bãi biển Long Thủy",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/6Hdh9KCyxoQPkM139"
 },
 {
  "n": "Bãi biển Tuy Hòa",
  "t": "view",
  "p": "py",
  "ll": [
   13.08,
   109.32
  ],
  "map": "https://maps.app.goo.gl/DH3Mo36ZRRENhDDDA"
 },
 {
  "n": "Tháp Nghinh Phong — Tuy Hòa",
  "t": "view",
  "p": "py",
  "ll": [
   13.08,
   109.33
  ]
 },
 {
  "n": "Làng Lò — Phú Yên",
  "t": "view",
  "p": "py",
  "note": "Hòa Hiệp.",
  "map": "https://maps.app.goo.gl/uv8XpE7tPYJXZaZg7"
 },
 {
  "n": "Làng Biển Homestay Phú Yên",
  "t": "stay",
  "p": "py",
  "note": "Hòa Hiệp.",
  "tel": "0792305305",
  "map": "https://maps.app.goo.gl/LPPTnEX29ApnV8TE7"
 },
 {
  "n": "Hotel Anh Quốc",
  "t": "stay",
  "p": "py",
  "note": "Đường Lê Hanh, Hòa Hiệp.",
  "tel": "0365555957",
  "map": "https://maps.app.goo.gl/QYFqYTGnZV7xHM6U7"
 },
 {
  "n": "SandA Villa",
  "t": "stay",
  "p": "py",
  "note": "KP Phú Thọ, Hòa Hiệp.",
  "tel": "0939406479",
  "map": "https://maps.app.goo.gl/wuBgS7MyDRiNNALz8"
 },
 {
  "n": "Phú Yên Bluesea Villas",
  "t": "stay",
  "p": "py",
  "note": "Trần Phú, Hòa Hiệp. Có bể bơi.",
  "tel": "0913018882",
  "map": "https://maps.app.goo.gl/mArmRAa93mGDQUpg6"
 },
 {
  "n": "Nhà nghỉ An Phát",
  "t": "stay",
  "p": "py",
  "note": "Phú Thọ, Hòa Hiệp. Phòng đơn 300k.",
  "tel": "0987379770",
  "map": "https://maps.app.goo.gl/1vH8rKYGuUcaEv6A8"
 },
 {
  "n": "Homestay Ông Bà Tám Làng Lò",
  "t": "stay",
  "p": "py",
  "note": "Biển Lò 3, KP Phú Thọ 3, Hòa Hiệp.",
  "tel": "0918861934",
  "map": "https://maps.app.goo.gl/DmL8zKwxGXXyupot5"
 },
 {
  "n": "Homestay Đất Phú",
  "t": "stay",
  "p": "py",
  "note": "KP Đa Ngư, Hòa Hiệp.",
  "tel": "0935359957",
  "map": "https://maps.app.goo.gl/BtXWMuGRtJR46xTVA"
 },
 {
  "n": "Làng Chài Homestay Phú Yên",
  "t": "stay",
  "p": "py",
  "tel": "0976983336",
  "map": "https://maps.app.goo.gl/GtfiPvENs2DtuJyf8"
 },
 {
  "n": "Gành đá Bãi Gốc",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/6nSgH5V7aC5MgtH36"
 },
 {
  "n": "Cung đường biển đẹp nhất Phú Yên",
  "t": "view",
  "p": "py",
  "note": "QL29, Hòa Xuân.",
  "map": "https://maps.app.goo.gl/bxLCtwuDZcoSWFrY6"
 },
 {
  "n": "Viewpoint đường ven biển Phú Yên",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/h6YV1EciPkFfkZVz7"
 },
 {
  "n": "Bãi biển Bãi Môn — Mũi Điện",
  "t": "view",
  "p": "py",
  "ll": [
   12.88,
   109.45
  ],
  "note": "Điểm đón bình minh đầu tiên trên đất liền Việt Nam.",
  "map": "https://maps.app.goo.gl/mPW9NNouwxZxKQzs7"
 },
 {
  "n": "Khu di tích Bến Tàu Không Số Vũng Rô",
  "t": "view",
  "p": "py",
  "ll": [
   12.87,
   109.4
  ],
  "map": "https://maps.app.goo.gl/CrVZ5iJY3LNWJvqK8"
 },
 {
  "n": "Điểm check-in địa phận Phú Yên – Khánh Hòa",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/cKxsMeiowZ4ZZh3i9"
 }
];

