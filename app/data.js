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
  {key:'hg', name:'Hà Giang',      c:[23.00,105.15]},
  {key:'cb', name:'Cao Bằng',      c:[22.75,106.40]},
  {key:'ls', name:'Lạng Sơn',      c:[21.85,106.76]},
  {key:'tq', name:'Tuyên Quang',   c:[22.05,105.35]},
  {key:'bk', name:'Bắc Kạn',       c:[22.30,105.72]},
  {key:'tn', name:'Thái Nguyên',   c:[21.59,105.84]},
  {key:'db', name:'Điện Biên',     c:[21.39,103.02]},
  {key:'sl', name:'Sơn La',        c:[20.95,104.55]},
  {key:'hb', name:'Hòa Bình',      c:[20.73,105.15]},
  {key:'qn', name:'Quảng Ninh',    c:[20.95,107.10]},
  {key:'hp', name:'Hải Phòng',     c:[20.84,106.69]},
  {key:'ht', name:'Hà Tĩnh',       c:[18.20,106.30]},
  {key:'qb', name:'Quảng Bình',    c:[17.55,106.55]},
  {key:'qt', name:'Quảng Trị',     c:[17.00,107.05]},
  {key:'hue',name:'Huế',           c:[16.40,107.70]},
  {key:'dn', name:'Đà Nẵng–Hội An',c:[16.05,108.20]},
  {key:'qng',name:'Quảng Ngãi',    c:[15.10,108.75]},
  {key:'bd', name:'Bình Định',     c:[13.80,109.25]},
  {key:'py', name:'Phú Yên',       c:[13.05,109.33]},
  {key:'kh', name:'Nha Trang',     c:[12.2388,109.1967]},
  {key:'nt', name:'Ninh Thuận',    c:[11.5645,108.99]},
  {key:'bt', name:'Bình Thuận',    c:[10.93,108.10]},
  {key:'vt', name:'Vũng Tàu',      c:[10.4113,107.1362]},
];

const PLACES = [
 {
  "n": "Cột cờ Lũng Cú",
  "t": "view",
  "p": "hg",
  "ll": [
   23.3624,
   105.3138
  ],
  "note": "Điểm cực Bắc Tổ quốc, cột cờ trên đỉnh núi Rồng."
 },
 {
  "n": "Đèo Mã Pí Lèng",
  "t": "view",
  "p": "hg",
  "ll": [
   23.2247,
   105.332
  ],
  "note": "Một trong tứ đại đỉnh đèo, nhìn xuống sông Nho Quế."
 },
 {
  "n": "Sông Nho Quế – Hẻm Tu Sản",
  "t": "view",
  "p": "hg",
  "ll": [
   23.205,
   105.345
  ],
  "note": "Đi thuyền ngắm hẻm vực sâu nhất Đông Nam Á."
 },
 {
  "n": "Phố cổ Đồng Văn",
  "t": "view",
  "p": "hg",
  "ll": [
   23.278,
   105.362
  ],
  "note": "Phố cổ gần thế kỷ, nhâm nhi cà phê phố cổ."
 },
 {
  "n": "Dinh thự Vua Mèo (Nhà Vương)",
  "t": "view",
  "p": "hg",
  "ll": [
   23.2756,
   105.27
  ],
  "note": "Dinh họ Vương ở Sà Phìn, đầu thế kỷ 20."
 },
 {
  "n": "Cổng trời & Núi đôi Quản Bạ",
  "t": "view",
  "p": "hg",
  "ll": [
   23.076,
   105.001
  ],
  "note": "View thung lũng Tam Sơn, núi đôi Cô Tiên."
 },
 {
  "n": "Sủng Là – Nhà của Pao",
  "t": "view",
  "p": "hg",
  "note": "Làng bối cảnh phim ‘Chuyện của Pao’."
 },
 {
  "n": "Dốc Thẩm Mã",
  "t": "view",
  "p": "hg",
  "note": "Dốc cua tay áo nổi tiếng để check-in.",
  "ll": [
   23.169,
   105.19417
  ]
 },
 {
  "n": "Ruộng bậc thang Hoàng Su Phì",
  "t": "view",
  "p": "hg",
  "note": "Di sản ruộng bậc thang, đẹp mùa lúa chín."
 },
 {
  "n": "Thác Bản Giốc",
  "t": "view",
  "p": "cb",
  "ll": [
   22.853,
   106.723
  ],
  "note": "Thác đẹp nhất VN, nằm trên biên giới Việt–Trung."
 },
 {
  "n": "Động Ngườm Ngao",
  "t": "view",
  "p": "cb",
  "ll": [
   22.847,
   106.705
  ],
  "note": "Hang động đẹp bậc nhất miền Bắc, sát Bản Giốc."
 },
 {
  "n": "Khu di tích Pác Bó",
  "t": "view",
  "p": "cb",
  "ll": [
   22.976,
   106.1
  ],
  "note": "Suối Lê Nin, hang Cốc Bó gắn với Bác Hồ."
 },
 {
  "n": "Hồ Thang Hen",
  "t": "view",
  "p": "cb",
  "note": "Hồ trên núi nước xanh ngọc, mùa nước đẹp.",
  "ll": [
   22.75815,
   106.29481
  ]
 },
 {
  "n": "Núi Mắt Thần",
  "t": "view",
  "p": "cb",
  "note": "Núi thủng độc đáo bên thảo nguyên Quây Sơn.",
  "ll": [
   22.77821,
   106.31129
  ]
 },
 {
  "n": "Làng rèn Phúc Sen",
  "t": "view",
  "p": "cb",
  "note": "Làng nghề rèn dao truyền thống của người Nùng.",
  "ll": [
   22.69002,
   106.41394
  ]
 },
 {
  "n": "Đèo Mã Phục",
  "t": "view",
  "p": "cb",
  "ll": [
   22.65,
   106.45
  ],
  "note": "Đèo 7 tầng đẹp trên đường tới Bản Giốc."
 },
 {
  "n": "Hồ Bản Viết",
  "t": "view",
  "p": "cb",
  "note": "Hồ giữa rừng, mùa thu lá đỏ."
 },
 {
  "n": "Di tích Chiến thắng Đông Khê",
  "t": "view",
  "p": "cb",
  "note": "Di tích chiến dịch Biên giới 1950."
 },
 {
  "n": "Phở chua Cao Bằng",
  "t": "food",
  "p": "cb",
  "note": "Phở chua trộn đặc sản."
 },
 {
  "n": "Vịt quay 7 vị – hạt dẻ Trùng Khánh",
  "t": "food",
  "p": "cb",
  "note": "Vịt quay 7 vị, hạt dẻ Trùng Khánh."
 },
 {
  "n": "Bánh cuốn Cao Bằng",
  "t": "food",
  "p": "cb",
  "note": "Bánh cuốn chan nước xương nóng.",
  "ll": [
   22.66481,
   106.26104
  ]
 },
 {
  "n": "Động & chùa Tam Thanh",
  "t": "view",
  "p": "ls",
  "ll": [
   21.858,
   106.753
  ],
  "note": "Động đá vôi có chùa, phù điêu A Di Đà thế kỷ XVII."
 },
 {
  "n": "Núi Tô Thị – Thành nhà Mạc",
  "t": "view",
  "p": "ls",
  "ll": [
   21.859,
   106.751
  ],
  "note": "Tượng đá nàng Tô Thị, thành cổ thế kỷ XVI."
 },
 {
  "n": "Đỉnh Mẫu Sơn",
  "t": "view",
  "p": "ls",
  "ll": [
   21.85,
   107.09
  ],
  "note": "Núi cao mát lạnh, mùa đông có băng tuyết."
 },
 {
  "n": "Đền Mẫu Đồng Đăng",
  "t": "view",
  "p": "ls",
  "ll": [
   21.956,
   106.706
  ],
  "note": "Đền thờ Mẫu nổi tiếng gần cửa khẩu Hữu Nghị."
 },
 {
  "n": "Thung lũng hoa Bắc Sơn",
  "t": "view",
  "p": "ls",
  "note": "Lúa vàng + đồng hoa, view từ núi Nà Lay."
 },
 {
  "n": "Thảo nguyên Đồng Lâm",
  "t": "view",
  "p": "ls",
  "note": "‘Vịnh Hạ Long trên cạn’ ở Hữu Lũng, cắm trại.",
  "ll": [
   10.95092,
   108.20966
  ]
 },
 {
  "n": "Ải Chi Lăng",
  "t": "view",
  "p": "ls",
  "note": "Cửa ải lịch sử hiểm trở.",
  "ll": [
   21.57356,
   106.50258
  ]
 },
 {
  "n": "Chợ Đông Kinh",
  "t": "view",
  "p": "ls",
  "note": "Chợ lớn nhất xứ Lạng, hàng hoá phong phú.",
  "ll": [
   21.0272,
   105.85658
  ]
 },
 {
  "n": "Khu di tích Tân Trào",
  "t": "view",
  "p": "tq",
  "ll": [
   21.84,
   105.42
  ],
  "note": "Thủ đô kháng chiến: lán Nà Nưa, cây đa Tân Trào."
 },
 {
  "n": "Khu sinh thái Na Hang",
  "t": "view",
  "p": "tq",
  "ll": [
   22.49,
   105.39
  ],
  "note": "Hồ thuỷ điện, núi non — ‘Hạ Long trên núi’."
 },
 {
  "n": "Suối khoáng Mỹ Lâm",
  "t": "view",
  "p": "tq",
  "note": "Suối khoáng nóng để nghỉ dưỡng.",
  "ll": [
   21.76863,
   105.12655
  ]
 },
 {
  "n": "Thác Bản Ba",
  "t": "view",
  "p": "tq",
  "note": "Thác nhiều tầng giữa rừng Chiêm Hoá.",
  "ll": [
   22.51889,
   105.50581
  ]
 },
 {
  "n": "Thác Mơ (Pác Ban)",
  "t": "view",
  "p": "tq",
  "ll": [
   22.5,
   105.38
  ],
  "note": "Thác 3 tầng giữa khu Na Hang, đi đò trên hồ."
 },
 {
  "n": "Núi & đền Pác Tạ",
  "t": "view",
  "p": "tq",
  "ll": [
   22.5,
   105.4
  ],
  "note": "Núi hình voi cúi đầu, đền cổ linh thiêng ven hồ."
 },
 {
  "n": "Đình Tân Trào",
  "t": "view",
  "p": "tq",
  "ll": [
   21.84,
   105.42
  ],
  "note": "Nơi họp Quốc dân Đại hội tháng 8/1945."
 },
 {
  "n": "99 ngọn núi Thượng Lâm",
  "t": "view",
  "p": "tq",
  "note": "‘Hạ Long giữa đại ngàn’ ở Lâm Bình."
 },
 {
  "n": "Thác Khuổi Nhi",
  "t": "view",
  "p": "tq",
  "note": "Thác 3 tầng, thả chân cho cá massage."
 },
 {
  "n": "Cọc Vài Phạ",
  "t": "view",
  "p": "tq",
  "note": "Cọc đá giữa hồ Na Hang gắn truyền thuyết Tài Ngào."
 },
 {
  "n": "Bảo tàng Tuyên Quang",
  "t": "view",
  "p": "tq",
  "note": "Hiện vật lịch sử – văn hoá xứ Tuyên.",
  "ll": [
   21.81967,
   105.20952
  ]
 },
 {
  "n": "Gỏi cá bỗng sông Lô",
  "t": "food",
  "p": "tq",
  "note": "Đặc sản cá bỗng tươi sông Lô."
 },
 {
  "n": "Bánh cuốn Tuyên Quang",
  "t": "food",
  "p": "tq",
  "note": "Bánh cuốn nóng ăn ở chợ đêm.",
  "ll": [
   22.82473,
   104.98569
  ]
 },
 {
  "n": "Hồ Ba Bể",
  "t": "view",
  "p": "bk",
  "ll": [
   22.402,
   105.617
  ],
  "note": "Hồ nước ngọt tự nhiên lớn nhất VN, giữa VQG Ba Bể."
 },
 {
  "n": "Động Puông",
  "t": "view",
  "p": "bk",
  "ll": [
   22.44,
   105.63
  ],
  "note": "Sông Năng xuyên núi đá vôi, hang dơi dài 300m."
 },
 {
  "n": "Thác Đầu Đẳng",
  "t": "view",
  "p": "bk",
  "ll": [
   22.38,
   105.55
  ],
  "note": "Thác 3 tầng hơn 1.000m trên sông Năng."
 },
 {
  "n": "Ao Tiên",
  "t": "view",
  "p": "bk",
  "ll": [
   22.41,
   105.63
  ],
  "note": "Hồ nhỏ nước trong giữa lòng chảo đá vôi, cạnh hồ Ba Bể."
 },
 {
  "n": "Đảo Bà Góa",
  "t": "view",
  "p": "bk",
  "ll": [
   22.4,
   105.61
  ],
  "note": "Đảo đá phủ cây xanh giữa hồ Ba Bể."
 },
 {
  "n": "Đền An Mã",
  "t": "view",
  "p": "bk",
  "ll": [
   22.4,
   105.62
  ],
  "note": "Đền trên đảo đá giữa hồ, thờ Mẫu Thượng Ngàn."
 },
 {
  "n": "Động Hua Mạ",
  "t": "view",
  "p": "bk",
  "ll": [
   22.36,
   105.63
  ],
  "note": "‘Kỳ quan trong lòng đất’, thạch nhũ lộng lẫy."
 },
 {
  "n": "Bản Pác Ngòi",
  "t": "view",
  "p": "bk",
  "ll": [
   22.39,
   105.62
  ],
  "note": "Bản Tày nhà sàn cổ ven hồ, homestay, hát then."
 },
 {
  "n": "Suối Bó Lòm",
  "t": "view",
  "p": "bk",
  "ll": [
   22.29767728879754,
   105.55826393019761
  ],
  "note": "Suối giữa rừng vùng Ba Bể (toạ độ do bạn cung cấp)."
 },
 {
  "n": "Động Nàng Tiên",
  "t": "view",
  "p": "bk",
  "note": "Động tự nhiên sâu ~60m ở Na Rì."
 },
 {
  "n": "Thác Nà Khoang",
  "t": "view",
  "p": "bk",
  "note": "Thác bậc thang giữa rừng, sơn thủy hữu tình."
 },
 {
  "n": "Cá nướng Pác Ngòi",
  "t": "food",
  "p": "bk",
  "note": "Cá hồ Ba Bể nướng than, ăn tại bản Pác Ngòi."
 },
 {
  "n": "Lẩu cá hồ Ba Bể",
  "t": "food",
  "p": "bk",
  "note": "Lẩu cá tươi đánh bắt trên hồ.",
  "ll": [
   15.92667,
   107.96509
  ]
 },
 {
  "n": "Bánh trứng kiến",
  "t": "food",
  "p": "bk",
  "note": "Bánh lá vả nhân trứng kiến của người Tày (mùa xuân)."
 },
 {
  "n": "Miến dong Na Rì",
  "t": "food",
  "p": "bk",
  "note": "Miến dong dai ngon, đặc sản mua làm quà."
 },
 {
  "n": "Gà đồi nướng Ba Bể",
  "t": "food",
  "p": "bk",
  "note": "Gà thả rông nướng than, ăn kèm xôi nếp nương."
 },
 {
  "n": "Hồ Núi Cốc",
  "t": "view",
  "p": "tn",
  "ll": [
   21.545,
   105.717
  ],
  "note": "‘Vịnh Hạ Long trên cạn’, truyền thuyết nàng Công – chàng Cốc."
 },
 {
  "n": "Đồi chè Tân Cương",
  "t": "view",
  "p": "tn",
  "ll": [
   21.545,
   105.76
  ],
  "note": "Vùng ‘đệ nhất danh trà’, đồi chè xanh mướt, hái chè."
 },
 {
  "n": "Hang Phượng Hoàng – Suối Mỏ Gà",
  "t": "view",
  "p": "tn",
  "ll": [
   21.78,
   106.05
  ],
  "note": "Hang 3 tầng nhũ đá + suối nước mát (Võ Nhai)."
 },
 {
  "n": "ATK Định Hóa",
  "t": "view",
  "p": "tn",
  "ll": [
   21.9,
   105.63
  ],
  "note": "Thủ đô kháng chiến, di tích lán Bác Hồ, đồi Khau Tý."
 },
 {
  "n": "Thác Khuôn Tát",
  "t": "view",
  "p": "tn",
  "ll": [
   21.92,
   105.6
  ],
  "note": "Thác bạc 7 tầng, đầu nguồn suối Tỉn Keo (Định Hóa)."
 },
 {
  "n": "Bảo tàng Văn hóa các dân tộc VN",
  "t": "view",
  "p": "tn",
  "ll": [
   21.593,
   105.843
  ],
  "note": "Lưu giữ bản sắc 54 dân tộc, TP Thái Nguyên."
 },
 {
  "n": "Đền Đuổm",
  "t": "view",
  "p": "tn",
  "ll": [
   21.72,
   105.7
  ],
  "note": "Đền thờ Dương Tự Minh dưới núi Đuổm (Phú Lương)."
 },
 {
  "n": "Làng nhà sàn Thái Hải",
  "t": "view",
  "p": "tn",
  "ll": [
   21.52,
   105.8
  ],
  "note": "Bản Tày Nùng tái hiện, được UNWTO vinh danh."
 },
 {
  "n": "Núi Văn – Núi Võ",
  "t": "view",
  "p": "tn",
  "note": "Hai núi thiêng gắn truyền thuyết, view vùng chè (Đại Từ).",
  "ll": [
   15.92667,
   107.96509
  ]
 },
 {
  "n": "Hồ Ghềnh Chè",
  "t": "view",
  "p": "tn",
  "note": "Hồ giữa đồi chè, cắm trại, chèo thuyền (Sông Công)."
 },
 {
  "n": "Đường hầm Pháp",
  "t": "view",
  "p": "tn",
  "note": "Di tích đường hầm khai thác mỏ thời Pháp, xã Yên Thịnh."
 },
 {
  "n": "Đường dây tời quặng Pháp",
  "t": "view",
  "p": "tn",
  "note": "Hệ thống tời quặng thời Pháp, xã Yên Thịnh."
 },
 {
  "n": "Trà Tân Cương",
  "t": "food",
  "p": "tn",
  "note": "Đặc sản ‘đệ nhất danh trà’, mua tại vườn Tân Cương.",
  "ll": [
   11.41937,
   106.4625
  ]
 },
 {
  "n": "Bánh chưng Bờ Đậu",
  "t": "food",
  "p": "tn",
  "note": "Bánh chưng nếp Định Hóa gói lá dong, làng Bờ Đậu."
 },
 {
  "n": "Nem chua Đại Từ",
  "t": "food",
  "p": "tn",
  "note": "Nem chua nướng/áp chảo, đặc sản Đại Từ."
 },
 {
  "n": "Cơm lam – bánh ngải",
  "t": "food",
  "p": "tn",
  "note": "Cơm lam ống tre, bánh ngải lá ngải cứu của người Tày.",
  "ll": [
   10.02093,
   105.75385
  ]
 },
 {
  "n": "Bánh cooc mò",
  "t": "food",
  "p": "tn",
  "note": "Bánh gạo nếp hình sừng bò, dẻo ngọt."
 },
 {
  "n": "Di tích Chiến trường Điện Biên Phủ",
  "t": "view",
  "p": "db",
  "ll": [
   21.387,
   103.009
  ],
  "note": "Đồi A1, hầm Đờ Cát, Bảo tàng Chiến thắng."
 },
 {
  "n": "Tượng đài Chiến thắng Điện Biên Phủ",
  "t": "view",
  "p": "db",
  "ll": [
   21.388,
   103.019
  ],
  "note": "Tượng đồng lớn trên đồi D1."
 },
 {
  "n": "Đèo Pha Đin",
  "t": "view",
  "p": "db",
  "ll": [
   21.49,
   103.31
  ],
  "note": "Một trong tứ đại đỉnh đèo Tây Bắc."
 },
 {
  "n": "Sở chỉ huy Mường Phăng",
  "t": "view",
  "p": "db",
  "note": "Hầm Đại tướng Võ Nguyên Giáp giữa rừng.",
  "ll": [
   21.45127,
   103.16377
  ]
 },
 {
  "n": "A Pa Chải",
  "t": "view",
  "p": "db",
  "note": "Cực Tây Tổ quốc, ngã ba biên giới Việt–Lào–Trung.",
  "ll": [
   22.39102,
   102.23009
  ]
 },
 {
  "n": "Hồ Pá Khoang",
  "t": "view",
  "p": "db",
  "ll": [
   21.43,
   103.15
  ],
  "note": "Hồ giữa rừng, gần Mường Phăng."
 },
 {
  "n": "Cánh đồng Mường Thanh",
  "t": "view",
  "p": "db",
  "ll": [
   21.38,
   103.02
  ],
  "note": "Vựa lúa lớn nhất Tây Bắc."
 },
 {
  "n": "Cao nguyên đá Tủa Chùa",
  "t": "view",
  "p": "db",
  "note": "Cao nguyên đá, ruộng bậc thang, chợ phiên."
 },
 {
  "n": "Suối khoáng nóng U Va",
  "t": "view",
  "p": "db",
  "note": "Suối khoáng nóng của người Thái."
 },
 {
  "n": "Thành Bản Phủ",
  "t": "view",
  "p": "db",
  "note": "Thành cổ + đền Hoàng Công Chất.",
  "ll": [
   10.77015,
   106.67635
  ]
 },
 {
  "n": "Xôi nếp nương – gà đen",
  "t": "food",
  "p": "db",
  "note": "Xôi nếp nương, gà đen, pa pỉnh tộp."
 },
 {
  "n": "Cao nguyên Mộc Châu",
  "t": "view",
  "p": "sl",
  "ll": [
   20.834,
   104.636
  ],
  "note": "Đồi chè, đồng hoa mận–cải, vườn dâu tây."
 },
 {
  "n": "Đồi chè trái tim Mộc Châu",
  "t": "view",
  "p": "sl",
  "ll": [
   20.85,
   104.68
  ],
  "note": "Đồi chè tạo hình trái tim nổi tiếng."
 },
 {
  "n": "Thác Dải Yếm",
  "t": "view",
  "p": "sl",
  "ll": [
   20.817,
   104.608
  ],
  "note": "Thác trắng giữa Mộc Châu, có cầu kính."
 },
 {
  "n": "Nhà tù Sơn La",
  "t": "view",
  "p": "sl",
  "ll": [
   21.329,
   103.905
  ],
  "note": "Di tích nhà tù Pháp, cây đào Tô Hiệu."
 },
 {
  "n": "Sống lưng khủng long Tà Xùa",
  "t": "view",
  "p": "sl",
  "note": "Sống núi săn mây nổi tiếng."
 },
 {
  "n": "Hang Dơi (Sơn Mộc Hương)",
  "t": "view",
  "p": "sl",
  "ll": [
   20.85,
   104.65
  ],
  "note": "‘Tây thiên đệ nhất động’ ở Mộc Châu."
 },
 {
  "n": "Rừng thông bản Áng",
  "t": "view",
  "p": "sl",
  "ll": [
   20.82,
   104.7
  ],
  "note": "Hồ + rừng thông, cắm trại, cưỡi ngựa."
 },
 {
  "n": "Cầu kính Bạch Long",
  "t": "view",
  "p": "sl",
  "ll": [
   20.8,
   104.62
  ],
  "note": "Cầu kính dài kỷ lục ở Mộc Châu."
 },
 {
  "n": "Ngọc Chiến",
  "t": "view",
  "p": "sl",
  "note": "Bản Thái, suối khoáng nóng, ruộng bậc thang (Mường La).",
  "ll": [
   21.61089,
   104.20188
  ]
 },
 {
  "n": "Bê chao Mộc Châu",
  "t": "food",
  "p": "sl",
  "note": "Đặc sản bê chao + sữa Mộc Châu."
 },
 {
  "n": "Cá hồi – cá tầm Mộc Châu",
  "t": "food",
  "p": "sl",
  "note": "Trại cá nước lạnh, lẩu cá hồi.",
  "ll": [
   21.47679,
   104.15929
  ]
 },
 {
  "n": "Mai Châu – Bản Lác",
  "t": "view",
  "p": "hb",
  "ll": [
   20.661,
   105.1
  ],
  "note": "Bản người Thái, nhà sàn, ruộng lúa, đạp xe."
 },
 {
  "n": "Hồ Hòa Bình",
  "t": "view",
  "p": "hb",
  "ll": [
   20.81,
   105.33
  ],
  "note": "Hồ thuỷ điện rộng lớn, du thuyền, Thung Nai."
 },
 {
  "n": "Đèo Thung Khe",
  "t": "view",
  "p": "hb",
  "note": "Đèo Đá Trắng mây mù, ngô & trứng nướng ven đường.",
  "ll": [
   20.67482,
   105.1041
  ]
 },
 {
  "n": "Suối khoáng Kim Bôi",
  "t": "view",
  "p": "hb",
  "note": "Suối khoáng nóng nghỉ dưỡng."
 },
 {
  "n": "Thác Mu",
  "t": "view",
  "p": "hb",
  "ll": [
   20.43,
   105.42
  ],
  "note": "Thác nhiều tầng nước xanh ngọc, có hang Mu (Lạc Sơn)."
 },
 {
  "n": "Thung Nai",
  "t": "view",
  "p": "hb",
  "ll": [
   20.77,
   105.24
  ],
  "note": "‘Vịnh Hạ Long trên núi’, du thuyền sông Đà."
 },
 {
  "n": "Cửu Thác Tú Sơn",
  "t": "view",
  "p": "hb",
  "note": "Khu 9 tầng thác, tắm suối (Kim Bôi)."
 },
 {
  "n": "Thác Gò Lào",
  "t": "view",
  "p": "hb",
  "note": "Thác ~20m giữa rừng, gần Mai Châu."
 },
 {
  "n": "Hang Kia – Pà Cò",
  "t": "view",
  "p": "hb",
  "note": "Săn mây, vườn mận đào, bản người Mông.",
  "ll": [
   20.71661,
   104.98651
  ]
 },
 {
  "n": "Lũng Vân",
  "t": "view",
  "p": "hb",
  "note": "‘Nóc nhà xứ Mường’, bản vùng cao mây phủ.",
  "ll": [
   23.35968,
   105.2983
  ]
 },
 {
  "n": "Bảo tàng Không gian Văn hoá Mường",
  "t": "view",
  "p": "hb",
  "note": "Tái hiện đời sống người Mường (TP Hòa Bình)."
 },
 {
  "n": "Cơm lam – lợn mán",
  "t": "food",
  "p": "hb",
  "note": "Cơm lam ống tre, thịt lợn mán nướng.",
  "ll": [
   20.70905,
   105.25764
  ]
 },
 {
  "n": "Vịnh Hạ Long",
  "t": "view",
  "p": "qn",
  "ll": [
   20.91,
   107.184
  ],
  "note": "Di sản UNESCO, hàng nghìn đảo đá vôi."
 },
 {
  "n": "Bãi Cháy",
  "t": "view",
  "p": "qn",
  "ll": [
   20.954,
   107.07
  ],
  "note": "Khu du lịch biển, Sun World, cáp treo Nữ Hoàng."
 },
 {
  "n": "Núi Yên Tử",
  "t": "view",
  "p": "qn",
  "ll": [
   21.156,
   106.723
  ],
  "note": "Kinh đô Phật giáo Trúc Lâm, chùa Đồng trên đỉnh."
 },
 {
  "n": "Đảo Cô Tô",
  "t": "view",
  "p": "qn",
  "ll": [
   20.976,
   107.767
  ],
  "note": "Đảo biển nước trong xanh, cát trắng."
 },
 {
  "n": "Đảo Quan Lạn",
  "t": "view",
  "p": "qn",
  "note": "Đảo hoang sơ, bãi Minh Châu.",
  "ll": [
   20.85936,
   107.48022
  ]
 },
 {
  "n": "Trà Cổ – Móng Cái",
  "t": "view",
  "p": "qn",
  "note": "Bãi biển dài gần biên giới.",
  "ll": [
   21.48188,
   108.02759
  ]
 },
 {
  "n": "Hang Sửng Sốt",
  "t": "view",
  "p": "qn",
  "ll": [
   20.85,
   107.1
  ],
  "note": "Hang lớn đẹp nhất vịnh Hạ Long."
 },
 {
  "n": "Đảo Ti Tốp",
  "t": "view",
  "p": "qn",
  "ll": [
   20.83,
   107.08
  ],
  "note": "Bãi tắm + đỉnh ngắm toàn vịnh."
 },
 {
  "n": "Vịnh Bái Tử Long",
  "t": "view",
  "p": "qn",
  "ll": [
   21.0,
   107.5
  ],
  "note": "Vịnh hoang sơ cạnh Hạ Long."
 },
 {
  "n": "Chùa Ba Vàng",
  "t": "view",
  "p": "qn",
  "ll": [
   21.08,
   106.78
  ],
  "note": "Chùa lớn trên núi Thành Đẳng (Uông Bí)."
 },
 {
  "n": "Bảo tàng Quảng Ninh",
  "t": "view",
  "p": "qn",
  "ll": [
   20.95,
   107.09
  ],
  "note": "‘Cung điện’ kính đen soi bóng vịnh."
 },
 {
  "n": "Chả mực Hạ Long",
  "t": "food",
  "p": "qn",
  "note": "Chả mực giã tay, ăn với xôi/bánh cuốn.",
  "ll": [
   10.75566,
   106.67634
  ]
 },
 {
  "n": "Đảo Cát Bà",
  "t": "view",
  "p": "hp",
  "ll": [
   20.728,
   107.048
  ],
  "note": "Đảo lớn, vườn quốc gia, nhiều bãi tắm."
 },
 {
  "n": "Vịnh Lan Hạ",
  "t": "view",
  "p": "hp",
  "ll": [
   20.7,
   107.07
  ],
  "note": "Vịnh đẹp cạnh Cát Bà, kayak & tắm biển."
 },
 {
  "n": "Biển Đồ Sơn",
  "t": "view",
  "p": "hp",
  "ll": [
   20.714,
   106.779
  ],
  "note": "Khu nghỉ biển lâu đời, lễ hội chọi trâu."
 },
 {
  "n": "Bánh đa cua bể Bà Cụ – Cầu Đất",
  "t": "food",
  "p": "hp",
  "note": "Bánh đa cua trứ danh, hẻm 195 Cầu Đất."
 },
 {
  "n": "Bánh đa cua Kỳ Đồng",
  "t": "food",
  "p": "hp",
  "note": "26 Kỳ Đồng — nước cua đồng ngọt thanh.",
  "ll": [
   20.85843,
   106.68025
  ]
 },
 {
  "n": "Bánh đa cua 48 Lạch Tray",
  "t": "food",
  "p": "hp",
  "note": "48 Lạch Tray — quán đông khách quen.",
  "ll": [
   20.84907,
   106.69344
  ]
 },
 {
  "n": "Bánh mì cay Ông Cuông",
  "t": "food",
  "p": "hp",
  "note": "184 Hàng Kênh — bánh mì que pate, chí chương cay.",
  "ll": [
   20.85055,
   106.68527
  ]
 },
 {
  "n": "Bánh mì cay Lê Hoàng",
  "t": "food",
  "p": "hp",
  "note": "39 Đinh Tiên Hoàng — bánh mì que nổi tiếng.",
  "ll": [
   20.86428,
   106.68265
  ]
 },
 {
  "n": "Nem cua bể Thuận Yến",
  "t": "food",
  "p": "hp",
  "note": "88 Trần Nhật Duật — nem cua bể vuông giòn rụm.",
  "ll": [
   20.85557,
   106.68348
  ]
 },
 {
  "n": "Nem cua bể Nga",
  "t": "food",
  "p": "hp",
  "note": "92 Trần Nhật Duật — nem hải sản trứ danh.",
  "ll": [
   20.85557,
   106.68348
  ]
 },
 {
  "n": "Ốc Thủy Dương",
  "t": "food",
  "p": "hp",
  "note": "30/263 Lạch Tray — thiên đường ốc, mở chiều tối.",
  "ll": [
   20.84907,
   106.69344
  ]
 },
 {
  "n": "Ốc chị Hoa",
  "t": "food",
  "p": "hp",
  "note": "69 Máy Tơ — quán ốc bình dân đông khách.",
  "ll": [
   20.86388,
   106.69626
  ]
 },
 {
  "n": "Bún cá cay Lê Lợi",
  "t": "food",
  "p": "hp",
  "note": "66 Lê Lợi — bún cá cay chuẩn vị đất Cảng.",
  "ll": [
   21.16372,
   106.36898
  ]
 },
 {
  "n": "Giá bể xào Huệ Béo",
  "t": "food",
  "p": "hp",
  "note": "103 Dư Hàng — giá bể (giá biển) xào đặc sản.",
  "ll": [
   20.84703,
   106.67886
  ]
 },
 {
  "n": "Sủi dìn & chè Cô Út",
  "t": "food",
  "p": "hp",
  "note": "163-165 Cầu Đất — sủi dìn, bơ dầm, chè vừng.",
  "ll": [
   20.85703,
   106.68692
  ]
 },
 {
  "n": "Dừa dầm Cô Tuyến",
  "t": "food",
  "p": "hp",
  "note": "100/124 Lạch Tray — dừa dầm mát lạnh.",
  "ll": [
   20.84907,
   106.69344
  ]
 },
 {
  "n": "Chợ Cố Đạo (ăn vặt)",
  "t": "food",
  "p": "hp",
  "note": "78 Trần Nhật Duật — thiên đường ăn vặt chiều tối.",
  "ll": [
   20.85557,
   106.68348
  ]
 },
 {
  "n": "Pate cột đèn",
  "t": "food",
  "p": "hp",
  "note": "Pate gan truyền thống, mua làm quà.",
  "ll": [
   21.0095,
   105.83545
  ]
 },
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
  "map": "https://maps.app.goo.gl/QUydHETRMHBcN6HNA",
  "ll": [
   18.25814,
   106.11077
  ]
 },
 {
  "n": "Hải đăng Cửa Nhượng",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/T6bxfv1Fpf75sGfS8",
  "ll": [
   18.26571,
   106.12248
  ]
 },
 {
  "n": "Nhà hàng Hải Đăng Tình Lành",
  "t": "food",
  "p": "ht",
  "note": "Phía sau ngọn hải đăng, Cẩm Trung.",
  "tel": "0968540598",
  "map": "https://maps.app.goo.gl/Zgf4hRDr4RqJzpu7A",
  "ll": [
   18.26562,
   106.12344
  ]
 },
 {
  "n": "Đường ven biển Kỳ Bắc",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/R5GVSosEeznNEpSf9",
  "ll": [
   18.26649,
   106.15305
  ]
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
  "map": "https://maps.app.goo.gl/6XCGwM5M9dmtTwrU7",
  "ll": [
   18.25123,
   106.18692
  ]
 },
 {
  "n": "Nhà hàng & Homestay Phương Đức",
  "t": "stay",
  "p": "ht",
  "note": "Chân biển Kỳ Xuân, có homestay view biển cực chill.",
  "tel": "0964588777",
  "map": "https://maps.app.goo.gl/ohqVbjva9fLwxJ1YA",
  "ll": [
   18.25212,
   106.18581
  ]
 },
 {
  "n": "Rì Rào Homestay Kỳ Xuân",
  "t": "stay",
  "p": "ht",
  "note": "Thắng Lợi, Kỳ Xuân.",
  "map": "https://maps.app.goo.gl/MsGZi1Vt8HVvzKz86",
  "ll": [
   18.25096,
   106.18737
  ]
 },
 {
  "n": "Nhà hàng Thế Giới Mực Nhảy",
  "t": "food",
  "p": "ht",
  "note": "Xuân Thắng, Kỳ Xuân.",
  "tel": "0964890369",
  "map": "https://maps.app.goo.gl/6r6wv7feHPFHhYg19",
  "ll": [
   18.24986,
   106.18713
  ]
 },
 {
  "n": "Bếp dã ngoại Kỳ Xuân",
  "t": "food",
  "p": "ht",
  "note": "Phải kéo đồ một đoạn.",
  "tel": "0978822543",
  "map": "https://maps.app.goo.gl/gXz3bGTDmTtE8Yfq5",
  "ll": [
   18.24205,
   106.19912
  ]
 },
 {
  "n": "Hải sản Bao Cấp 1994",
  "t": "food",
  "p": "ht",
  "note": "Quán ruột ở Kỳ Xuân, dân địa phương hay ăn.",
  "tel": "0358571276",
  "map": "https://maps.app.goo.gl/fmjzCHmVuPMQHxQE8",
  "ll": [
   18.23422,
   106.20706
  ]
 },
 {
  "n": "Nhà hàng Hải Sản Dân Hường",
  "t": "food",
  "p": "ht",
  "tel": "0919973458",
  "map": "https://maps.app.goo.gl/vBGEMQzyY98Ni95N9",
  "ll": [
   18.23321,
   106.20886
  ]
 },
 {
  "n": "LIMDIM Hotel",
  "t": "stay",
  "p": "ht",
  "note": "Kỳ Xuân.",
  "tel": "0971560642",
  "map": "https://maps.app.goo.gl/ZhWccgYaqUkzc1Sw6",
  "ll": [
   18.23196,
   106.2103
  ]
 },
 {
  "n": "Nhà nghỉ Phương Nam",
  "t": "stay",
  "p": "ht",
  "note": "Sơn Tịnh, Kỳ Xuân.",
  "tel": "0972520420",
  "map": "https://maps.app.goo.gl/qwZbkxLv3wtenze37",
  "ll": [
   18.23303,
   106.21342
  ]
 },
 {
  "n": "Bãi biển Nguyễn Huệ — Kỳ Xuân",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/TRqUSdQ81hLsb39j6",
  "ll": [
   18.22879,
   106.2177
  ]
 },
 {
  "n": "Eo biển Kỳ Xuân – Kỳ Phú",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/ZoCn26Bf4cMMnMZ2A",
  "ll": [
   18.2226,
   106.22711
  ]
 },
 {
  "n": "Đường quốc phòng ven biển Xuân Hội",
  "t": "view",
  "p": "ht",
  "note": "Kỳ Khang.",
  "map": "https://maps.app.goo.gl/YdNLaWsGaAxUJKLW9",
  "ll": [
   18.15628,
   106.30473
  ]
 },
 {
  "n": "Quảng trường biển Kỳ Ninh",
  "t": "view",
  "p": "ht",
  "note": "Kỳ Anh.",
  "map": "https://maps.app.goo.gl/Lo8TA53yeD5BbknEA",
  "ll": [
   18.12983,
   106.33476
  ]
 },
 {
  "n": "Homestay View Biển — Kỳ Nam",
  "t": "stay",
  "p": "ht",
  "note": "Kỳ Nam, Kỳ Anh. Gặp em Hương.",
  "tel": "0963345335",
  "map": "https://maps.app.goo.gl/1CJBSWrU3vegdFg96",
  "ll": [
   17.98983,
   106.47645
  ]
 },
 {
  "n": "Nhà hàng Ra Khơi",
  "t": "food",
  "p": "ht",
  "note": "Đường ven biển Hoành Sơn.",
  "tel": "0973266579",
  "map": "https://maps.app.goo.gl/ocEDwm11LDtnx3Lz5",
  "ll": [
   17.98396,
   106.48136
  ]
 },
 {
  "n": "Nhà hàng – Khách sạn Hoành Sơn",
  "t": "stay",
  "p": "ht",
  "tel": "0973531430",
  "map": "https://maps.app.goo.gl/irkKmi72A7Z5LpJr7",
  "ll": [
   17.98301,
   106.48207
  ]
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
  "map": "https://maps.app.goo.gl/Qd8dZr2JEJDBEdKu7",
  "ll": [
   17.96716,
   106.49202
  ]
 },
 {
  "n": "Camping bãi biển Kỳ Anh",
  "t": "view",
  "p": "ht",
  "map": "https://maps.app.goo.gl/mYqhvD2FSw6w59bu6",
  "ll": [
   17.96638,
   106.49272
  ]
 },
 {
  "n": "Mực nháy Vũng Áng – NH Hậu Thìn",
  "t": "food",
  "p": "ht",
  "note": "Ở cuối bãi biển.",
  "tel": "0978957599",
  "map": "https://maps.app.goo.gl/shmGsDDTs3kuCXhj6",
  "ll": [
   18.11697,
   106.40954
  ]
 },
 {
  "n": "KS Hoàng Anh — Kỳ Thịnh",
  "t": "stay",
  "p": "ht",
  "note": "Chỗ ngủ khi phải ở lại Vũng Áng.",
  "tel": "0967855509",
  "map": "https://maps.app.goo.gl/eTGTPeQSH6SyFT2P9",
  "ll": [
   18.04684,
   106.36808
  ]
 },
 {
  "n": "Ngã ba Đồng Lộc",
  "t": "view",
  "p": "ht",
  "ll": [
   18.5083,
   105.6469
  ],
  "note": "Di tích 10 nữ TNXP — nằm sâu trong đất liền, tiện đường thì rẽ vào."
 },
 {
  "n": "Chùa Hương Tích (Hà Tĩnh)",
  "t": "view",
  "p": "ht",
  "ll": [
   18.3589,
   105.7028
  ],
  "note": "‘Hoan Châu đệ nhất danh lam’ trên núi Hồng Lĩnh."
 },
 {
  "n": "Khu di tích Nguyễn Du — Tiên Điền",
  "t": "view",
  "p": "ht",
  "note": "Khu lưu niệm đại thi hào Nguyễn Du."
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
  "map": "https://maps.app.goo.gl/vAayVrQGaenmGofs8",
  "ll": [
   17.87282,
   106.45262
  ]
 },
 {
  "n": "Bãi tắm Cảnh Dương",
  "t": "view",
  "p": "qb",
  "note": "Cảnh Thượng, Quảng Trạch.",
  "map": "https://maps.app.goo.gl/wyv9RL1ADBgvx9cWA",
  "ll": [
   17.86885,
   106.45051
  ]
 },
 {
  "n": "Bãi biển Quảng Thọ",
  "t": "view",
  "p": "qb",
  "note": "Bắc Gianh.",
  "map": "https://maps.app.goo.gl/3oPDb7tiAQCU3e8MA",
  "ll": [
   17.75326,
   106.4663
  ]
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
  "map": "https://maps.app.goo.gl/pqRhuALjoCoCj8cV6",
  "ll": [
   17.66084,
   106.51483
  ]
 },
 {
  "n": "Đá Nhảy Beach Hotel",
  "t": "stay",
  "p": "qb",
  "tel": "0848445444",
  "map": "https://maps.app.goo.gl/b6MVNyA9vk9zxfh28",
  "ll": [
   17.66481,
   106.51031
  ]
 },
 {
  "n": "Bãi Đá Nhảy (phía sau)",
  "t": "view",
  "p": "qb",
  "note": "Lý Hòa, Bố Trạch.",
  "map": "https://maps.app.goo.gl/6FSbQyMzaVhiShY56",
  "ll": [
   17.65858,
   106.51662
  ]
 },
 {
  "n": "Camping bãi Đá Nhảy",
  "t": "view",
  "p": "qb",
  "map": "https://maps.app.goo.gl/48BYHQTG9sB4Jya58",
  "ll": [
   17.65729,
   106.51746
  ]
 },
 {
  "n": "Khách sạn Hoài Thu",
  "t": "stay",
  "p": "qb",
  "note": "Bắc Trạch.",
  "tel": "0348740959",
  "map": "https://maps.app.goo.gl/MMbBN6xACWF3p9sy5",
  "ll": [
   17.69571,
   106.47602
  ]
 },
 {
  "n": "Khách sạn An Bình",
  "t": "stay",
  "p": "qb",
  "note": "Xóm Cồn, Bắc Gianh.",
  "tel": "0912414121",
  "map": "https://maps.app.goo.gl/12fY5JHVjtkNv19J9",
  "ll": [
   17.7315,
   106.43989
  ]
 },
 {
  "n": "Cường Thu Nhà Nghỉ",
  "t": "stay",
  "p": "qb",
  "note": "Quyết Thắng, Bắc Trạch.",
  "tel": "0949094004",
  "map": "https://maps.app.goo.gl/7PtWfvkqV2hpNoKY6",
  "ll": [
   17.69988,
   106.47924
  ]
 },
 {
  "n": "Khách sạn Hoài Thu 2",
  "t": "stay",
  "p": "qb",
  "note": "Bắc Trạch.",
  "tel": "0348740959",
  "map": "https://maps.app.goo.gl/2HrV5Kn5bPv5aDxM7",
  "ll": [
   17.68076,
   106.49869
  ]
 },
 {
  "n": "Thanh Tuấn Homestay",
  "t": "stay",
  "p": "qb",
  "note": "Bãi Đá Nhảy, Thanh Trạch.",
  "tel": "0977536332",
  "map": "https://maps.app.goo.gl/TaWiRPWWvcPF9eAc6",
  "ll": [
   17.67603,
   106.50023
  ]
 },
 {
  "n": "Đồi cát Quang Phú",
  "t": "view",
  "p": "qb",
  "note": "567 Trương Pháp, Nam Trạch.",
  "map": "https://maps.app.goo.gl/iwyMNKG5BBis85pd6",
  "ll": [
   17.5314,
   106.59462
  ]
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
  "map": "https://maps.app.goo.gl/C4GPYpUXW3C8EuFR6",
  "ll": [
   17.49228,
   106.62635
  ]
 },
 {
  "n": "Nam Long Plus Hotel",
  "t": "stay",
  "p": "qb",
  "note": "28A Phan Chu Trinh, Đồng Hới.",
  "tel": "0918923595",
  "map": "https://maps.app.goo.gl/TikF8fPJoNVecUiq7",
  "ll": [
   17.47831,
   106.62314
  ]
 },
 {
  "n": "Nhà khách Thanh Thiếu Niên",
  "t": "stay",
  "p": "qb",
  "tel": "02323810447",
  "map": "https://maps.app.goo.gl/frn75ux8UyNQAyyBA",
  "ll": [
   17.50322,
   106.61822
  ]
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
  "tel": "0827652225",
  "ll": [
   21.03194,
   105.83706
  ]
 },
 {
  "n": "Thanh Hương Motel",
  "t": "stay",
  "p": "qb",
  "note": "Ngoài trung tâm Đồng Hới 3–4km, thôn 7 Bố Trạch.",
  "map": "https://maps.app.goo.gl/CrVoeg5sFoBjhfmR9",
  "ll": [
   17.51717,
   106.57736
  ]
 },
 {
  "n": "Nhà khách 30/4",
  "t": "stay",
  "p": "qb",
  "note": "219 Trương Pháp, Đồng Hới.",
  "tel": "0912072387",
  "map": "https://maps.app.goo.gl/qXhuf94uLRuaA8eA9",
  "ll": [
   17.49938,
   106.62226
  ]
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
  "n": "Vườn Quốc gia Phong Nha – Kẻ Bàng",
  "t": "view",
  "p": "qb",
  "ll": [
   17.585,
   106.287
  ],
  "note": "Di sản thiên nhiên thế giới — ‘vương quốc hang động’."
 },
 {
  "n": "Động Phong Nha",
  "t": "view",
  "p": "qb",
  "ll": [
   17.586,
   106.288
  ],
  "note": "Đi thuyền trên sông Son vào động, sông ngầm dài nhất."
 },
 {
  "n": "Động Thiên Đường",
  "t": "view",
  "p": "qb",
  "ll": [
   17.505,
   106.263
  ],
  "note": "‘Hoàng cung trong lòng đất’, hang khô tráng lệ nhất châu Á."
 },
 {
  "n": "Sông Chày – Hang Tối",
  "t": "view",
  "p": "qb",
  "note": "Zipline, chèo kayak, tắm bùn khoáng."
 },
 {
  "n": "Suối Nước Moọc",
  "t": "view",
  "p": "qb",
  "note": "Suối xanh mát giữa thung lũng đá vôi, tắm suối thư giãn.",
  "ll": [
   17.55539,
   106.23574
  ]
 },
 {
  "n": "Công viên Ozo Phong Nha",
  "t": "view",
  "p": "qb",
  "note": "Hệ thống trò chơi trên cây, zipline giữa rừng."
 },
 {
  "n": "East Hill — gà nướng Phong Nha",
  "t": "food",
  "p": "qb",
  "note": "Quán gà nướng chấm muối cheo nằm trên đồi, view cánh đồng Phong Nha rất đẹp, đồ ăn ngon."
 },
 {
  "n": "Khách sạn Phương Đông — Cửa Việt",
  "t": "stay",
  "p": "qt",
  "tel": "0969440545",
  "ll": [
   16.81469,
   107.11028
  ]
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
  "map": "https://maps.app.goo.gl/6fRKfYYJPZy8Nm2W7",
  "ll": [
   16.75429,
   107.18703
  ]
 },
 {
  "n": "Khách sạn Song Phát — Cửa Việt",
  "t": "stay",
  "p": "qt",
  "note": "Đường Hoàng Diệu.",
  "tel": "0368136699",
  "map": "https://maps.app.goo.gl/T592cYRtUBLtBKDV8",
  "ll": [
   16.91664,
   107.18285
  ]
 },
 {
  "n": "Eo biển xanh — Cửa Tùng",
  "t": "view",
  "p": "qt",
  "map": "https://maps.app.goo.gl/21M77DhnhPGHUw5K7",
  "ll": [
   17.0185,
   107.11105
  ]
 },
 {
  "n": "Địa đạo Vịnh Mốc",
  "t": "view",
  "p": "qt",
  "note": "Có quán ăn ngay cổng.",
  "map": "https://maps.app.goo.gl/J5pAFPGCGM59RjRj8",
  "ll": [
   17.07414,
   107.10989
  ]
 },
 {
  "n": "Mũi Si",
  "t": "view",
  "p": "qt",
  "note": "Hợp mọi xe, đầy đủ dịch vụ.",
  "map": "https://maps.app.goo.gl/XmEQpwP3MfAX44Ep8",
  "ll": [
   16.46949,
   107.59621
  ]
 },
 {
  "n": "Homestay Mũi Si",
  "t": "stay",
  "p": "qt",
  "map": "https://maps.app.goo.gl/DoPjh9mszkp37DDt8",
  "ll": [
   17.04477,
   107.11387
  ]
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
  "map": "https://maps.app.goo.gl/SmXDtydo8DdKzSxs9",
  "ll": [
   16.63311,
   106.69644
  ]
 },
 {
  "n": "Cây cô đơn hồ Rào Quán",
  "t": "view",
  "p": "qt",
  "note": "Cần xe gầm cao, không dịch vụ.",
  "map": "https://maps.app.goo.gl/zM5kLramL7DS7FCY9"
 },
 {
  "n": "Nghĩa trang Liệt sĩ Trường Sơn",
  "t": "view",
  "p": "qt",
  "ll": [
   16.83,
   106.95
  ],
  "note": "Nghĩa trang liệt sĩ lớn nhất Việt Nam."
 },
 {
  "n": "Cầu treo Đakrông",
  "t": "view",
  "p": "qt",
  "note": "Cầu treo trên đường Hồ Chí Minh nhánh Tây.",
  "ll": [
   16.6618,
   106.82396
  ]
 },
 {
  "n": "Nhà nghỉ Gia Đạt",
  "t": "stay",
  "p": "hue",
  "note": "58 Trần Trúc Nhẫn. Phòng đôi 4 người 500k. Cô Vân.",
  "tel": "0906551771",
  "map": "https://maps.app.goo.gl/Xk6PV8iqJmBjkQo26",
  "ll": [
   16.45639,
   107.58333
  ]
 },
 {
  "n": "Quán cơm chị Tẹo",
  "t": "food",
  "p": "hue",
  "note": "59 Hai Bà Trưng — nhiều món Huế đặc trưng, có chỗ đỗ xe.",
  "tel": "0905862388",
  "map": "https://maps.app.goo.gl/qWKw6Eiymnd3j7t67",
  "ll": [
   16.45691,
   107.58927
  ]
 },
 {
  "n": "Cơm niêu Lửa Việt",
  "t": "food",
  "p": "hue",
  "note": "Nội thành Huế.",
  "map": "https://maps.app.goo.gl/WLZNv4XbJV1B3szx7",
  "ll": [
   16.46816,
   107.59788
  ]
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
  "map": "https://maps.app.goo.gl/sfoZqkGVZW9Xsna96",
  "ll": [
   16.46937,
   107.60319
  ]
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
  "map": "https://maps.app.goo.gl/gimRvp5nYch4LhSz5",
  "ll": [
   16.57095,
   107.63115
  ]
 },
 {
  "n": "Sunshine Villa",
  "t": "stay",
  "p": "hue",
  "note": "77 Thái Dương, Thuận An.",
  "tel": "0899865931",
  "map": "https://maps.app.goo.gl/EmFS2aaEx7YuSRrd9",
  "ll": [
   16.56176,
   107.64307
  ]
 },
 {
  "n": "Homestay Summer",
  "t": "stay",
  "p": "hue",
  "note": "98 Hoàng Sa, Thuận An.",
  "tel": "0914091418",
  "map": "https://maps.app.goo.gl/KxuEEuy36VR1AJPPA",
  "ll": [
   16.562,
   107.64525
  ]
 },
 {
  "n": "Cầu vượt cửa biển Thuận An",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/GzExZJ6dLyofWoxV8",
  "ll": [
   16.56826,
   107.62267
  ]
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
  "map": "https://maps.app.goo.gl/Fks9W9LNqKMNbKrW8",
  "ll": [
   16.63877,
   107.52048
  ]
 },
 {
  "n": "Cầu Tư Hiền",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/scyMugwh6fdcQFMn6",
  "ll": [
   16.34927,
   107.91348
  ]
 },
 {
  "n": "Bãi biển Cảnh Dương — Chân Mây",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/iaMTeSbNABE71x3X8",
  "ll": [
   16.32992,
   107.96152
  ]
 },
 {
  "n": "Nhà nghỉ Cảnh Dương",
  "t": "stay",
  "p": "hue",
  "note": "Chân Mây – Lăng Cô.",
  "tel": "0935110905",
  "map": "https://maps.app.goo.gl/QbPurAahDeLdderT6",
  "ll": [
   16.31492,
   107.98044
  ]
 },
 {
  "n": "Nhà nghỉ Hoàng Ngọc — biển Cảnh Dương",
  "t": "stay",
  "p": "hue",
  "tel": "0935106990",
  "map": "https://maps.app.goo.gl/uKNt6B8ZAoxm5zp89",
  "ll": [
   16.31391,
   107.98363
  ]
 },
 {
  "n": "Bãi biển Tân Cảnh Dương",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/uPM2eVWQrVGCUsoh7",
  "ll": [
   16.31708,
   107.97718
  ]
 },
 {
  "n": "Bãi biển Chân Mây",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/RZJiwXwxxtdb3ZuG6",
  "ll": [
   16.31283,
   108.00096
  ]
 },
 {
  "n": "Nhà nghỉ Nguyệt Ánh",
  "t": "stay",
  "p": "hue",
  "note": "Biển Cảnh Dương, Chân Mây.",
  "tel": "0978941527",
  "map": "https://maps.app.goo.gl/BSktNKbee9YRh9To7",
  "ll": [
   16.31232,
   108.00558
  ]
 },
 {
  "n": "Nhà nghỉ Anh Dũng",
  "t": "stay",
  "p": "hue",
  "note": "Cảnh Dương, Chân Mây.",
  "tel": "0899081701",
  "map": "https://maps.app.goo.gl/gHuBnsTyCNHcia2W6",
  "ll": [
   16.31171,
   108.00514
  ]
 },
 {
  "n": "Bình An Guest House",
  "t": "stay",
  "p": "hue",
  "note": "Thôn Bình An, Chân Mây.",
  "tel": "0935000727",
  "map": "https://maps.app.goo.gl/iq1e4hZCVhqNCCxD7",
  "ll": [
   16.31115,
   108.00432
  ]
 },
 {
  "n": "MIMI Guest House",
  "t": "stay",
  "p": "hue",
  "note": "Lộc Vĩnh, Chân Mây.",
  "tel": "0774552912",
  "map": "https://maps.app.goo.gl/NehDvWUe9oiX9AGPA",
  "ll": [
   16.31149,
   108.00512
  ]
 },
 {
  "n": "Ghềnh Chân Mây",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/bbKhNRT4LeDTfxJ2A",
  "ll": [
   16.34376,
   108.02018
  ]
 },
 {
  "n": "Điểm ngắm bình minh Bãi Bàng — Chân Mây",
  "t": "view",
  "p": "hue",
  "map": "https://maps.app.goo.gl/gKehTFJybF24tCBx6",
  "ll": [
   16.33912,
   108.02524
  ]
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
  "map": "https://maps.app.goo.gl/6B8Zr9CNSBdYfx9U8",
  "ll": [
   16.23329,
   108.08613
  ]
 },
 {
  "n": "Nhà nghỉ dưỡng Lăng Cô — Bộ Công An",
  "t": "stay",
  "p": "hue",
  "note": "Đ. Lạc Long Quân.",
  "tel": "02343683890",
  "map": "https://maps.app.goo.gl/6oS5yAZ67D8H5EXg8",
  "ll": [
   16.24309,
   108.0774
  ]
 },
 {
  "n": "Vitamin Sea Home",
  "t": "stay",
  "p": "hue",
  "note": "Lăng Cô.",
  "tel": "0974136886",
  "map": "https://maps.app.goo.gl/3NCkeNQ8WVvhvroAA",
  "ll": [
   16.23255,
   108.08665
  ]
 },
 {
  "n": "Khu nghỉ dưỡng Lăng Cô T26",
  "t": "stay",
  "p": "hue",
  "note": "493 Lạc Long Quân.",
  "tel": "0935483548",
  "map": "https://maps.app.goo.gl/F7nHorZ8Us8KXBS79",
  "ll": [
   16.24371,
   108.07709
  ]
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
  "n": "Đại Nội Huế (Kinh thành)",
  "t": "view",
  "p": "hue",
  "ll": [
   16.469,
   107.578
  ],
  "note": "Quần thể di tích cố đô triều Nguyễn, di sản UNESCO."
 },
 {
  "n": "Chùa Thiên Mụ",
  "t": "view",
  "p": "hue",
  "ll": [
   16.4533,
   107.5547
  ],
  "note": "Biểu tượng Huế bên sông Hương, tháp Phước Duyên 7 tầng."
 },
 {
  "n": "Lăng Khải Định",
  "t": "view",
  "p": "hue",
  "ll": [
   16.401,
   107.581
  ],
  "note": "Kiến trúc Đông–Tây, khảm sành sứ tinh xảo."
 },
 {
  "n": "Lăng Tự Đức",
  "t": "view",
  "p": "hue",
  "ll": [
   16.457,
   107.552
  ],
  "note": "Lăng thơ mộng, hồ nước cây xanh, kiến trúc hài hòa thiên nhiên."
 },
 {
  "n": "Lăng Minh Mạng",
  "t": "view",
  "p": "hue",
  "ll": [
   16.417,
   107.553
  ],
  "note": "Bố cục đối xứng uy nghiêm bên ngã ba sông."
 },
 {
  "n": "Cầu Trường Tiền",
  "t": "view",
  "p": "hue",
  "ll": [
   16.4684,
   107.592
  ],
  "note": "Biểu tượng Huế bắc qua sông Hương."
 },
 {
  "n": "Chợ Đông Ba",
  "t": "view",
  "p": "hue",
  "ll": [
   16.4717,
   107.587
  ],
  "note": "Chợ lớn nhất Huế — đặc sản & quà lưu niệm."
 },
 {
  "n": "Bãi tắm Mân Thái",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/jLXZTPSmkRDv9Fff7",
  "ll": [
   16.08902,
   108.24959
  ]
 },
 {
  "n": "Ngũ Hành Sơn",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/C9hVShNNi2RorRZU9",
  "ll": [
   16.00371,
   108.26316
  ]
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
  "map": "https://maps.app.goo.gl/5G1LM3UKFYemiXJv6",
  "ll": [
   15.91183,
   108.3416
  ]
 },
 {
  "n": "Bãi biển Cửa Đại",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/6oSnpNBXwh3paz1t8",
  "ll": [
   15.90181,
   108.36001
  ]
 },
 {
  "n": "Bãi tắm Cửa Đại",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/8pimYUoxunkpERcWA",
  "ll": [
   15.89458,
   108.37214
  ]
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
  "map": "https://maps.app.goo.gl/r6FMNGqwjGkVdwoe9",
  "ll": [
   15.60231,
   108.54404
  ]
 },
 {
  "n": "Homestay Ngọc Lan",
  "t": "stay",
  "p": "dn",
  "note": "Thôn Hòa Hạ, Quảng Phú.",
  "tel": "0868655433",
  "map": "https://maps.app.goo.gl/JgTe7yi27yrNgxea8",
  "ll": [
   15.59832,
   108.54575
  ]
 },
 {
  "n": "Mi Casa Garden",
  "t": "stay",
  "p": "dn",
  "note": "Thanh Niên, Quảng Phú.",
  "tel": "0902158919",
  "map": "https://maps.app.goo.gl/zLdfVr82h2x3ovHS7",
  "ll": [
   15.5941,
   108.54963
  ]
 },
 {
  "n": "Homestay Hoa Giấy",
  "t": "stay",
  "p": "dn",
  "note": "Đường Thanh Niên, Quảng Phú.",
  "tel": "0914747266",
  "map": "https://maps.app.goo.gl/auoK3CfF2ioHZUNKA",
  "ll": [
   15.5915,
   108.55046
  ]
 },
 {
  "n": "Tam Tien Homes",
  "t": "stay",
  "p": "dn",
  "note": "Homestay duy nhất có bãi cát dài đi thẳng xuống biển, không bị che chắn.",
  "tel": "0901998115",
  "map": "https://maps.app.goo.gl/hnBdvgyGv37uMgJs9",
  "ll": [
   15.54636,
   108.58911
  ]
 },
 {
  "n": "Chợ cá Tam Tiến",
  "t": "food",
  "p": "dn",
  "map": "https://maps.app.goo.gl/YGaQg3z3gYuphDrG6",
  "ll": [
   15.54859,
   108.58769
  ]
 },
 {
  "n": "Bà Nà Hills",
  "t": "view",
  "p": "dn",
  "map": "https://maps.app.goo.gl/j26WFCoNfGeDg27o9",
  "ll": [
   15.99514,
   107.99614
  ]
 },
 {
  "n": "Nhà nghỉ Việt Thương",
  "t": "stay",
  "p": "dn",
  "note": "Hòa Tiến.",
  "tel": "0362955674",
  "map": "https://maps.app.goo.gl/xBmuJQXwrAkK2uqB8",
  "ll": [
   15.94622,
   108.13726
  ]
 },
 {
  "n": "Bean's House Riverfront",
  "t": "stay",
  "p": "dn",
  "note": "285 Trần Hưng Đạo, An Hải.",
  "tel": "0777930210",
  "map": "https://maps.app.goo.gl/MJaWPSGAkvjE1nTn9",
  "ll": [
   16.0754,
   108.22902
  ]
 },
 {
  "n": "Khách sạn MT Ngô Quyền — Sơn Trà",
  "t": "stay",
  "p": "dn",
  "note": "Sát trạm sạc VinFast, bãi đỗ ô tô rộng, thuê xe AB 100k/ngày, giá từ 300k.",
  "tel": "0367772088",
  "map": "https://maps.app.goo.gl/pomzP4jkZTZADSGe7",
  "ll": [
   16.07642,
   108.23077
  ]
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
  "map": "https://maps.app.goo.gl/Qg5EAZfcKys2C4b67",
  "ll": [
   13.95399,
   108.64626
  ]
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
  "map": "https://maps.app.goo.gl/LV1JnsMXhcFhjqBT9",
  "ll": [
   15.88369,
   108.32559
  ]
 },
 {
  "n": "Phố cổ Hội An (Chùa Cầu)",
  "t": "view",
  "p": "dn",
  "ll": [
   15.877,
   108.327
  ],
  "note": "Di sản UNESCO, phố đèn lồng, Chùa Cầu 400 năm."
 },
 {
  "n": "Thánh địa Mỹ Sơn",
  "t": "view",
  "p": "dn",
  "ll": [
   15.764,
   108.124
  ],
  "note": "Di sản UNESCO — quần thể đền tháp Chăm Pa."
 },
 {
  "n": "Cù Lao Chàm",
  "t": "view",
  "p": "dn",
  "note": "Cụm 8 đảo, lặn ngắm san hô; đi tàu/cano từ Cửa Đại.",
  "ll": [
   15.95086,
   108.52272
  ]
 },
 {
  "n": "Cầu Rồng",
  "t": "view",
  "p": "dn",
  "ll": [
   16.061,
   108.227
  ],
  "note": "Biểu tượng Đà Nẵng, phun lửa & nước tối T7–CN."
 },
 {
  "n": "Chùa Linh Ứng – Bán đảo Sơn Trà",
  "t": "view",
  "p": "dn",
  "ll": [
   16.1003,
   108.2787
  ],
  "note": "Tượng Quan Âm cao 67m hướng ra biển."
 },
 {
  "n": "Đỉnh Bàn Cờ – Sơn Trà",
  "t": "view",
  "p": "dn",
  "ll": [
   16.115,
   108.296
  ],
  "note": "Đỉnh cao nhất bán đảo, view toàn cảnh Đà Nẵng."
 },
 {
  "n": "Bảo tàng Điêu khắc Chăm",
  "t": "view",
  "p": "dn",
  "ll": [
   16.0604,
   108.223
  ],
  "note": "Bộ sưu tập cổ vật Chăm Pa lớn nhất Việt Nam."
 },
 {
  "n": "Rạn Nam Ô",
  "t": "view",
  "p": "dn",
  "note": "Rạn đá phủ rêu xanh dưới chân đèo Hải Vân, vào miễn phí."
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
  "note": "Trên cung đường ven biển Quảng Ngãi.",
  "ll": [
   14.74232,
   107.68382
  ]
 },
 {
  "n": "Đảo Lý Sơn",
  "t": "view",
  "p": "qng",
  "note": "Đi tàu ra, dịch vụ cơ bản.",
  "map": "https://maps.app.goo.gl/bxKUN5k8VxQULEf38",
  "ll": [
   15.38856,
   109.13403
  ]
 },
 {
  "n": "Mũi Ba Làng An",
  "t": "view",
  "p": "qng",
  "note": "Mũi đá đen, hải đăng, view biển hoang sơ.",
  "ll": [
   15.23534,
   108.9439
  ]
 },
 {
  "n": "Biển Mỹ Khê (Quảng Ngãi)",
  "t": "view",
  "p": "qng",
  "note": "Bãi biển dài, cát trắng mịn, vắng."
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
  "p": "bd",
  "ll": [
   14.12739,
   109.20681
  ]
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
  "note": "69/1 Trần Hưng Đạo — gỏi cá & lẩu sứa đặc sản Quy Nhơn.",
  "ll": [
   13.78051,
   109.22285
  ]
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
  "tel": "0941351557",
  "ll": [
   11.94918,
   108.43962
  ]
 },
 {
  "n": "KS Hà Min",
  "t": "stay",
  "p": "bd",
  "note": "Trung tâm Quy Nhơn.",
  "tel": "0913600327",
  "ll": [
   10.7801,
   106.6441
  ]
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
  "tel": "02563546699",
  "ll": [
   10.81891,
   106.69669
  ]
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
  "tel": "02563847763",
  "ll": [
   16.48152,
   107.60041
  ]
 },
 {
  "n": "KS Hoàng Hưng",
  "t": "stay",
  "p": "bd",
  "note": "Khu quảng trường.",
  "tel": "0905410628",
  "ll": [
   10.73319,
   106.69016
  ]
 },
 {
  "n": "Seaside Hotel",
  "t": "stay",
  "p": "bd",
  "note": "Khu quảng trường.",
  "tel": "0903954915",
  "ll": [
   16.06278,
   108.24335
  ]
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
  "tel": "02563629369",
  "ll": [
   10.04275,
   105.77977
  ]
 },
 {
  "n": "À Ơi Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu TP/Bãi Xếp.",
  "tel": "0357035590",
  "map": "https://maps.app.goo.gl/a7DXpBf5VCuejgH77",
  "ll": [
   13.75681,
   109.21317
  ]
 },
 {
  "n": "Nắng Home",
  "t": "stay",
  "p": "bd",
  "note": "Khu TP/Bãi Xếp.",
  "tel": "0328865768",
  "ll": [
   21.04329,
   105.78528
  ]
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
  "tel": "0914299177",
  "ll": [
   20.21531,
   105.93725
  ]
 },
 {
  "n": "Home Sunrise",
  "t": "stay",
  "p": "bd",
  "tel": "02563535151",
  "ll": [
   20.91674,
   105.85333
  ]
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
  "tel": "0933677764",
  "ll": [
   10.83789,
   106.74548
  ]
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
  "tel": "0373358858",
  "ll": [
   13.76357,
   109.28935
  ]
 },
 {
  "n": "FLC Luxury Resort",
  "t": "stay",
  "p": "bd",
  "note": "Eo Gió – Nhơn Lý.",
  "tel": "02566288888",
  "ll": [
   13.88658,
   109.28
  ]
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
  "tel": "0905042699",
  "ll": [
   13.77113,
   109.23621
  ]
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
  "n": "Tháp Bánh Ít",
  "t": "view",
  "p": "bd",
  "ll": [
   13.878,
   109.113
  ],
  "note": "Cụm tháp Chăm trên đồi, thế kỷ XI."
 },
 {
  "n": "Bảo tàng Quang Trung",
  "t": "view",
  "p": "bd",
  "ll": [
   13.879,
   108.932
  ],
  "note": "Tưởng niệm vua Quang Trung & võ Tây Sơn (sâu trong đất liền)."
 },
 {
  "n": "Bãi biển Xuân Hải",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/6dQMoWDTwJRtbEec8",
  "ll": [
   13.62425,
   109.23297
  ]
 },
 {
  "n": "Bãi biển Bãi Nồm",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/YZZTErccEYFBtVoK8",
  "ll": [
   13.56752,
   109.28984
  ]
 },
 {
  "n": "Bãi biển Vịnh Hòa",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/XkJzFX69nLDh35hy9",
  "ll": [
   13.50824,
   109.29049
  ]
 },
 {
  "n": "Bãi biển Từ Nham",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/qXQAUm7ZvaCe3nwA7",
  "ll": [
   13.47981,
   109.29393
  ]
 },
 {
  "n": "Biển Gành Đỏ",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/QFXTTV3AZH6Q7U7a6",
  "ll": [
   13.38617,
   109.24418
  ]
 },
 {
  "n": "Bãi biển Gành Đỏ",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/bLvpABTZTm73tLi78",
  "ll": [
   13.37233,
   109.24705
  ]
 },
 {
  "n": "Hải đăng Gành Đèn",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/Rtw6HenbSn6J7K8w5",
  "ll": [
   13.36397,
   109.29395
  ]
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
  "map": "https://maps.app.goo.gl/Z3s76PgpwFUJeYKg6",
  "ll": [
   13.33601,
   109.2914
  ]
 },
 {
  "n": "Bãi tắm Làng Chài",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/TGfzu1KUkNoXuGe19",
  "ll": [
   13.2737,
   109.30915
  ]
 },
 {
  "n": "Gành Ông",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/K6zB2vXzZQ5p5LVKA",
  "ll": [
   13.19323,
   109.30022
  ]
 },
 {
  "n": "Bãi biển Long Thủy",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/6Hdh9KCyxoQPkM139",
  "ll": [
   13.16656,
   109.29297
  ]
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
  "map": "https://maps.app.goo.gl/uv8XpE7tPYJXZaZg7",
  "ll": [
   13.0024,
   109.37618
  ]
 },
 {
  "n": "Làng Biển Homestay Phú Yên",
  "t": "stay",
  "p": "py",
  "note": "Hòa Hiệp.",
  "tel": "0792305305",
  "map": "https://maps.app.goo.gl/LPPTnEX29ApnV8TE7",
  "ll": [
   12.99367,
   109.38254
  ]
 },
 {
  "n": "Hotel Anh Quốc",
  "t": "stay",
  "p": "py",
  "note": "Đường Lê Hanh, Hòa Hiệp.",
  "tel": "0365555957",
  "map": "https://maps.app.goo.gl/QYFqYTGnZV7xHM6U7",
  "ll": [
   12.99292,
   109.38304
  ]
 },
 {
  "n": "SandA Villa",
  "t": "stay",
  "p": "py",
  "note": "KP Phú Thọ, Hòa Hiệp.",
  "tel": "0939406479",
  "map": "https://maps.app.goo.gl/wuBgS7MyDRiNNALz8",
  "ll": [
   12.98931,
   109.38151
  ]
 },
 {
  "n": "Phú Yên Bluesea Villas",
  "t": "stay",
  "p": "py",
  "note": "Trần Phú, Hòa Hiệp. Có bể bơi.",
  "tel": "0913018882",
  "map": "https://maps.app.goo.gl/mArmRAa93mGDQUpg6",
  "ll": [
   13.00045,
   109.37588
  ]
 },
 {
  "n": "Nhà nghỉ An Phát",
  "t": "stay",
  "p": "py",
  "note": "Phú Thọ, Hòa Hiệp. Phòng đơn 300k.",
  "tel": "0987379770",
  "map": "https://maps.app.goo.gl/1vH8rKYGuUcaEv6A8",
  "ll": [
   12.99353,
   109.38243
  ]
 },
 {
  "n": "Homestay Ông Bà Tám Làng Lò",
  "t": "stay",
  "p": "py",
  "note": "Biển Lò 3, KP Phú Thọ 3, Hòa Hiệp.",
  "tel": "0918861934",
  "map": "https://maps.app.goo.gl/DmL8zKwxGXXyupot5",
  "ll": [
   12.98872,
   109.38954
  ]
 },
 {
  "n": "Homestay Đất Phú",
  "t": "stay",
  "p": "py",
  "note": "KP Đa Ngư, Hòa Hiệp.",
  "tel": "0935359957",
  "map": "https://maps.app.goo.gl/BtXWMuGRtJR46xTVA",
  "ll": [
   12.9574,
   109.39455
  ]
 },
 {
  "n": "Làng Chài Homestay Phú Yên",
  "t": "stay",
  "p": "py",
  "tel": "0976983336",
  "map": "https://maps.app.goo.gl/GtfiPvENs2DtuJyf8",
  "ll": [
   13.00635,
   109.37658
  ]
 },
 {
  "n": "Gành đá Bãi Gốc",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/6nSgH5V7aC5MgtH36",
  "ll": [
   12.94649,
   109.43099
  ]
 },
 {
  "n": "Cung đường biển đẹp nhất Phú Yên",
  "t": "view",
  "p": "py",
  "note": "QL29, Hòa Xuân.",
  "map": "https://maps.app.goo.gl/bxLCtwuDZcoSWFrY6",
  "ll": [
   12.91495,
   109.45024
  ]
 },
 {
  "n": "Viewpoint đường ven biển Phú Yên",
  "t": "view",
  "p": "py",
  "map": "https://maps.app.goo.gl/h6YV1EciPkFfkZVz7",
  "ll": [
   12.91795,
   109.44428
  ]
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
  "map": "https://maps.app.goo.gl/cKxsMeiowZ4ZZh3i9",
  "ll": [
   12.84443,
   109.38945
  ]
 },
 {
  "n": "Tháp Nhạn",
  "t": "view",
  "p": "py",
  "ll": [
   13.0883,
   109.305
  ],
  "note": "Tháp Chăm ~800 tuổi, biểu tượng Tuy Hòa, ngắm hoàng hôn."
 },
 {
  "n": "Bãi Xép",
  "t": "view",
  "p": "py",
  "ll": [
   13.135,
   109.297
  ],
  "note": "Phim trường ‘Tôi thấy hoa vàng trên cỏ xanh’."
 },
 {
  "n": "Nhà thờ Mằng Lăng",
  "t": "view",
  "p": "py",
  "ll": [
   13.405,
   109.275
  ],
  "note": "Nhà thờ Gothic cổ, lưu cuốn sách quốc ngữ in đầu tiên."
 },
 {
  "n": "Hòn Yến",
  "t": "view",
  "p": "py",
  "ll": [
   13.317,
   109.293
  ],
  "note": "Danh thắng quốc gia, rạn san hô lộ khi triều rút."
 },
 {
  "n": "Đầm Ô Loan",
  "t": "view",
  "p": "py",
  "ll": [
   13.28,
   109.28
  ],
  "note": "Đầm nước lợ, đặc sản sò huyết."
 },
 {
  "n": "Cầu gỗ Ông Cọp",
  "t": "view",
  "p": "py",
  "ll": [
   13.37,
   109.28
  ],
  "note": "Cầu gỗ dài bắc qua sông, lối tắt tới Gành Đá Đĩa."
 },
 {
  "n": "Bãi rêu Xóm Rớ",
  "t": "view",
  "p": "py",
  "note": "Kè đá phủ rêu xanh khi triều rút, Tuy Hòa.",
  "ll": [
   13.07171,
   109.33792
  ]
 },
 {
  "n": "Vịnh Xuân Đài",
  "t": "view",
  "p": "py",
  "note": "Vịnh biển đẹp ở Sông Cầu, nhiều hải sản.",
  "ll": [
   13.42436,
   109.24642
  ]
 },
 {
  "n": "VinWonders Hòn Tre",
  "t": "view",
  "p": "kh",
  "ll": [
   12.2103,
   109.244
  ],
  "note": "Công viên giải trí + cáp treo vượt biển 3,3km."
 },
 {
  "n": "Hòn Mun",
  "t": "view",
  "p": "kh",
  "ll": [
   12.165,
   109.295
  ],
  "note": "Khu bảo tồn biển, lặn ngắm san hô rực rỡ."
 },
 {
  "n": "Hòn Tằm",
  "t": "view",
  "p": "kh",
  "ll": [
   12.18,
   109.27
  ],
  "note": "Đảo bãi đẹp, tắm bùn khoáng, thể thao biển."
 },
 {
  "n": "Hòn Một",
  "t": "view",
  "p": "kh",
  "ll": [
   12.17,
   109.285
  ],
  "note": "Đảo nhỏ, san hô lộ thiên, lặn biển."
 },
 {
  "n": "Tháp Bà Ponagar",
  "t": "view",
  "p": "kh",
  "ll": [
   12.2655,
   109.1955
  ],
  "note": "Cụm tháp Chăm cổ hơn 1.200 năm, 61 Hai Tháng Tư."
 },
 {
  "n": "Chùa Long Sơn",
  "t": "view",
  "p": "kh",
  "ll": [
   12.2545,
   109.181
  ],
  "note": "Chùa cổ dưới núi Trại Thủy, tượng Phật trắng."
 },
 {
  "n": "Nhà thờ Núi (Nhà thờ Đá)",
  "t": "view",
  "p": "kh",
  "ll": [
   12.2455,
   109.1865
  ],
  "note": "Nhà thờ đá kiến trúc Gothic giữa phố."
 },
 {
  "n": "Viện Hải dương học",
  "t": "view",
  "p": "kh",
  "ll": [
   12.2055,
   109.216
  ],
  "note": "Thủy cung trưng bày hàng trăm loài biển."
 },
 {
  "n": "Hòn Chồng",
  "t": "view",
  "p": "kh",
  "ll": [
   12.268,
   109.208
  ],
  "note": "Bãi đá hình khối kỳ lạ, ngắm vịnh."
 },
 {
  "n": "Bãi biển Trần Phú",
  "t": "view",
  "p": "kh",
  "ll": [
   12.235,
   109.196
  ],
  "note": "Bờ cát trắng ~7km giữa thành phố."
 },
 {
  "n": "Tháp Trầm Hương",
  "t": "view",
  "p": "kh",
  "ll": [
   12.2375,
   109.1955
  ],
  "note": "Tháp hình búp sen ở quảng trường 2/4."
 },
 {
  "n": "Đảo Điệp Sơn",
  "t": "view",
  "p": "kh",
  "ll": [
   12.62,
   109.3
  ],
  "note": "Con đường cát giữa biển, vịnh Vân Phong."
 },
 {
  "n": "Đảo Yến – Hòn Nội",
  "t": "view",
  "p": "kh",
  "ll": [
   12.16,
   109.33
  ],
  "note": "‘Bãi tắm đôi’, đảo yến hoang sơ."
 },
 {
  "n": "Suối khoáng nóng Tháp Bà / I-Resort",
  "t": "view",
  "p": "kh",
  "ll": [
   12.27,
   109.18
  ],
  "note": "Tắm bùn khoáng nóng nổi tiếng."
 },
 {
  "n": "Dốc Lết",
  "t": "view",
  "p": "kh",
  "ll": [
   12.46,
   109.215
  ],
  "note": "Bãi cát trắng dài + đồi cát (Ninh Hòa)."
 },
 {
  "n": "Bãi Dài Cam Ranh",
  "t": "view",
  "p": "kh",
  "ll": [
   11.98,
   109.21
  ],
  "note": "Bãi biển cát trắng dài, nước trong (Cam Ranh)."
 },
 {
  "n": "Đảo Bình Hưng",
  "t": "view",
  "p": "kh",
  "ll": [
   11.43,
   109.21
  ],
  "note": "Đảo tôm hùm, bè nổi, lặn biển (Cam Ranh)."
 },
 {
  "n": "Khu du lịch Ba Hồ",
  "t": "view",
  "p": "kh",
  "note": "Suối thác 3 hồ giữa rừng (Ninh Hòa)."
 },
 {
  "n": "Bún cá Nguyên Loan",
  "t": "food",
  "p": "kh",
  "note": "123 Ngô Gia Tự — bún cá/sứa gần 45 năm.",
  "ll": [
   12.2411,
   109.18819
  ]
 },
 {
  "n": "Nem nướng Đặng Văn Quyên",
  "t": "food",
  "p": "kh",
  "note": "Hàn Thuyên/Lãn Ông — nem nướng Ninh Hòa."
 },
 {
  "n": "Bò nướng Lạc Cảnh",
  "t": "food",
  "p": "kh",
  "note": "44 Nguyễn Bỉnh Khiêm — bò nướng đặc sản.",
  "ll": [
   12.25697,
   109.19453
  ]
 },
 {
  "n": "Bún sứa Năm Beo",
  "t": "food",
  "p": "kh",
  "note": "B2 chung cư Phan Bội Châu — bún cá sứa nước trong."
 },
 {
  "n": "Bánh căn 134 Trần Quý Cáp",
  "t": "food",
  "p": "kh",
  "note": "Bánh căn nhân mực/trứng nổi tiếng."
 },
 {
  "n": "Vịnh Vĩnh Hy",
  "t": "view",
  "p": "nt",
  "ll": [
   11.71,
   109.18
  ],
  "note": "Một trong những vịnh đẹp nhất VN, tàu đáy kính, san hô."
 },
 {
  "n": "Hang Rái",
  "t": "view",
  "p": "nt",
  "ll": [
   11.65,
   109.16
  ],
  "note": "Ghềnh đá cổ, ‘thác trên biển’, săn ảnh bình minh."
 },
 {
  "n": "Đồi cát Nam Cương",
  "t": "view",
  "p": "nt",
  "ll": [
   11.52,
   108.98
  ],
  "note": "Tiểu sa mạc, check-in cồn cát."
 },
 {
  "n": "Biển Ninh Chữ",
  "t": "view",
  "p": "nt",
  "ll": [
   11.58,
   109.03
  ],
  "note": "Bãi biển đẹp, chợ cá, ngắm hoàng hôn."
 },
 {
  "n": "Tháp Po Klong Garai",
  "t": "view",
  "p": "nt",
  "ll": [
   11.59,
   108.96
  ],
  "note": "Cụm tháp Chăm gạch đỏ nguyên vẹn nhất VN, đồi Trầu."
 },
 {
  "n": "Vườn nho Thái An",
  "t": "view",
  "p": "nt",
  "ll": [
   11.68,
   109.14
  ],
  "note": "Thủ phủ nho, hái nho tại vườn (đường ra Vĩnh Hy)."
 },
 {
  "n": "Mũi Dinh",
  "t": "view",
  "p": "nt",
  "ll": [
   11.36,
   109.03
  ],
  "note": "Hải đăng cổ 1904, bãi biển hoang sơ, đồi cát."
 },
 {
  "n": "Làng gốm Bàu Trúc",
  "t": "view",
  "p": "nt",
  "ll": [
   11.55,
   108.92
  ],
  "note": "Làng gốm cổ nhất Đông Nam Á (UNESCO)."
 },
 {
  "n": "VQG Núi Chúa",
  "t": "view",
  "p": "nt",
  "ll": [
   11.72,
   109.13
  ],
  "note": "Khu dự trữ sinh quyển, trekking, cắm trại."
 },
 {
  "n": "Đồng cừu An Hòa",
  "t": "view",
  "p": "nt",
  "note": "Cánh đồng chăn thả cừu nổi tiếng, chụp ảnh.",
  "ll": [
   16.45623,
   107.60826
  ]
 },
 {
  "n": "Biển Cà Ná",
  "t": "view",
  "p": "nt",
  "note": "Bãi biển hoang sơ phía nam, đá xếp chênh vênh.",
  "ll": [
   11.3487,
   108.8872
  ]
 },
 {
  "n": "Cừu – dê nướng Phan Rang",
  "t": "food",
  "p": "nt",
  "note": "Đặc sản cừu nướng, dê xào lăn.",
  "ll": [
   11.56367,
   108.99386
  ]
 },
 {
  "n": "Bánh căn Phan Rang",
  "t": "food",
  "p": "nt",
  "note": "Bánh căn chấm nước cá kho/mắm nêm.",
  "ll": [
   11.59076,
   108.96216
  ]
 },
 {
  "n": "Gỏi cá mai",
  "t": "food",
  "p": "nt",
  "note": "Cá mai cuốn bánh tráng, chấm nước đậu phộng.",
  "ll": [
   13.77198,
   109.24715
  ]
 },
 {
  "n": "Đồi Cát Bay Mũi Né",
  "t": "view",
  "p": "bt",
  "ll": [
   10.94,
   108.29
  ],
  "note": "Cồn cát đổi hình theo gió, trượt cát, hoàng hôn."
 },
 {
  "n": "Bàu Trắng",
  "t": "view",
  "p": "bt",
  "ll": [
   11.05,
   108.41
  ],
  "note": "Đồi cát trắng + hồ sen, ‘tiểu sa mạc’, đi jeep."
 },
 {
  "n": "Suối Tiên Mũi Né",
  "t": "view",
  "p": "bt",
  "ll": [
   10.95,
   108.27
  ],
  "note": "Suối nước đỏ uốn lượn giữa vách cát."
 },
 {
  "n": "Hòn Rơm",
  "t": "view",
  "p": "bt",
  "ll": [
   10.97,
   108.34
  ],
  "note": "Bãi tắm hoang sơ + làng chài."
 },
 {
  "n": "Bãi đá Ông Địa",
  "t": "view",
  "p": "bt",
  "ll": [
   10.94,
   108.18
  ],
  "note": "Bãi đá + tượng Ông Địa ven biển."
 },
 {
  "n": "Tháp Po Sah Inư",
  "t": "view",
  "p": "bt",
  "ll": [
   10.94,
   108.13
  ],
  "note": "Tháp Chăm cổ trên đồi Bà Nài, gần Phan Thiết."
 },
 {
  "n": "Lầu Ông Hoàng",
  "t": "view",
  "p": "bt",
  "ll": [
   10.94,
   108.14
  ],
  "note": "Di tích + view biển, gắn thơ Hàn Mặc Tử."
 },
 {
  "n": "Làng chài Mũi Né",
  "t": "view",
  "p": "bt",
  "ll": [
   10.93,
   108.29
  ],
  "note": "Làng chài, chợ hải sản buổi sáng."
 },
 {
  "n": "Trường Dục Thanh",
  "t": "view",
  "p": "bt",
  "ll": [
   10.928,
   108.098
  ],
  "note": "Trường xưa nơi Bác Hồ từng dạy học."
 },
 {
  "n": "Bãi đá Cổ Thạch – Chùa Hang",
  "t": "view",
  "p": "bt",
  "ll": [
   11.43,
   108.84
  ],
  "note": "Bãi đá bảy màu + chùa trong hang (Tuy Phong)."
 },
 {
  "n": "Lẩu thả Phan Thiết",
  "t": "food",
  "p": "bt",
  "note": "Đặc sản bày hình bông sen, cá suốt + bún."
 },
 {
  "n": "Bánh căn Lân Nguyệt",
  "t": "food",
  "p": "bt",
  "note": "8 Hải Thượng Lãn Ông — bánh căn chấm xíu mại.",
  "ll": [
   10.92969,
   108.09981
  ]
 },
 {
  "n": "Bánh quai vạc",
  "t": "food",
  "p": "bt",
  "note": "152 Võ Thị Sáu — bánh quai vạc tôm.",
  "ll": [
   10.92525,
   108.10514
  ]
 },
 {
  "n": "Răng mực nướng",
  "t": "food",
  "p": "bt",
  "note": "Món đường phố nướng giòn cay."
 },
 {
  "n": "Hải sản Bi Bo",
  "t": "food",
  "p": "bt",
  "note": "191 Nguyễn Đình Chiểu, Mũi Né — hải sản bình dân.",
  "ll": [
   10.95472,
   108.22309
  ]
 },
 {
  "n": "Bánh xèo Phan Thiết",
  "t": "food",
  "p": "bt",
  "note": "Bánh xèo tôm mực, ăn cuốn rau.",
  "ll": [
   10.93602,
   108.09073
  ]
 },
 {
  "n": "Mì Quảng vịt",
  "t": "food",
  "p": "bt",
  "note": "129 Trần Phú — mì Quảng vịt Phan Thiết.",
  "ll": [
   10.93185,
   108.09793
  ]
 },
 {
  "n": "Tượng Chúa Kitô Vua",
  "t": "view",
  "p": "vt",
  "ll": [
   10.3375,
   107.0865
  ],
  "note": "Tượng Chúa 32m trên Núi Nhỏ, leo lên ngắm toàn cảnh."
 },
 {
  "n": "Hải đăng Vũng Tàu",
  "t": "view",
  "p": "vt",
  "ll": [
   10.342,
   107.0855
  ],
  "note": "Hải đăng cổ nhất VN (1862) trên Núi Nhỏ."
 },
 {
  "n": "Mũi Nghinh Phong",
  "t": "view",
  "p": "vt",
  "ll": [
   10.33,
   107.085
  ],
  "note": "Mũi đá + ‘Cổng Trời’, check-in gió biển."
 },
 {
  "n": "Bãi Sau (Thùy Vân)",
  "t": "view",
  "p": "vt",
  "ll": [
   10.348,
   107.103
  ],
  "note": "Bãi tắm dài, sôi động, nhiều dịch vụ."
 },
 {
  "n": "Bãi Trước",
  "t": "view",
  "p": "vt",
  "ll": [
   10.35,
   107.075
  ],
  "note": "Bãi biển trung tâm, hàng dừa, ngắm hoàng hôn."
 },
 {
  "n": "Bạch Dinh",
  "t": "view",
  "p": "vt",
  "ll": [
   10.353,
   107.073
  ],
  "note": "Biệt thự Pháp cổ trên sườn Núi Lớn, bảo tàng."
 },
 {
  "n": "Niết Bàn Tịnh Xá",
  "t": "view",
  "p": "vt",
  "ll": [
   10.345,
   107.078
  ],
  "note": "Chùa đẹp bên sườn Núi Nhỏ, hướng biển."
 },
 {
  "n": "Thích Ca Phật Đài",
  "t": "view",
  "p": "vt",
  "ll": [
   10.358,
   107.078
  ],
  "note": "Tượng Phật ngồi thiền trên đài sen."
 },
 {
  "n": "Khu du lịch Hồ Mây",
  "t": "view",
  "p": "vt",
  "ll": [
   10.35,
   107.08
  ],
  "note": "Công viên trên Núi Lớn, cáp treo, hồ."
 },
 {
  "n": "Đồi Con Heo",
  "t": "view",
  "p": "vt",
  "ll": [
   10.337,
   107.09
  ],
  "note": "Đồi cỏ + xích đu view biển, check-in."
 },
 {
  "n": "Biển Long Hải",
  "t": "view",
  "p": "vt",
  "ll": [
   10.39,
   107.22
  ],
  "note": "Bãi biển yên bình ngoài trung tâm."
 },
 {
  "n": "Hồ Đá Xanh",
  "t": "view",
  "p": "vt",
  "note": "Hồ nước xanh ngọc giữa núi đá (Tân Thành).",
  "ll": [
   10.50993,
   107.14737
  ]
 },
 {
  "n": "Hồ Tràm",
  "t": "view",
  "p": "vt",
  "note": "Biển hoang sơ, resort, casino (Xuyên Mộc).",
  "ll": [
   10.48635,
   107.45428
  ]
 },
 {
  "n": "Suối nước nóng Bình Châu",
  "t": "view",
  "p": "vt",
  "note": "Suối khoáng nóng giữa rừng (Xuyên Mộc).",
  "ll": [
   10.60037,
   107.55998
  ]
 },
 {
  "n": "Núi Minh Đạm",
  "t": "view",
  "p": "vt",
  "note": "Căn cứ cách mạng, hang động, view biển (Long Điền).",
  "ll": [
   21.09458,
   105.65662
  ]
 },
 {
  "n": "Bánh khọt Gốc Vú Sữa",
  "t": "food",
  "p": "vt",
  "note": "14 Nguyễn Trường Tộ — bánh khọt nhân tôm trứ danh.",
  "ll": [
   10.34011,
   107.07885
  ]
 },
 {
  "n": "Lẩu cá đuối Hoàng Minh",
  "t": "food",
  "p": "vt",
  "note": "44 Trương Công Định — lẩu cá đuối măng chua.",
  "ll": [
   10.34365,
   107.07851
  ]
 },
 {
  "n": "Bánh canh ghẹ",
  "t": "food",
  "p": "vt",
  "note": "Bánh canh ghẹ topping đầy (Võ Thị Sáu/Tú Xương).",
  "ll": [
   10.04631,
   105.78727
  ]
 },
 {
  "n": "Hải sản Gành Hào",
  "t": "food",
  "p": "vt",
  "note": "Nhà hàng hải sản view biển nổi tiếng."
 }
];

