-- Dọc Bờ — cập nhật màu 3 loại điểm theo nhận diện mới (chàm/san hô/hổ phách)
update public.types set color='#2c3768' where key='view';   -- Cảnh đẹp: chàm
update public.types set color='#f2685c' where key='food';   -- Ăn uống: san hô
update public.types set color='#e0a12e' where key='stay';   -- Lưu trú: hổ phách
