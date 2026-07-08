-- ============================================================
-- Dọc Bờ — Kho ảnh (Storage) cho tính năng ảnh của điểm
-- Chạy trong Supabase → SQL Editor. Sau khi chạy, upload ảnh trong dashboard sẽ được.
-- ============================================================

-- 1) Tạo bucket 'places' (công khai để ảnh hiển thị được trên app)
insert into storage.buckets (id, name, public)
values ('places', 'places', true)
on conflict (id) do update set public = true;

-- 2) Người đã đăng nhập (admin) được UPLOAD / SỬA / XOÁ ảnh trong bucket này
drop policy if exists "docbo upload places" on storage.objects;
create policy "docbo upload places" on storage.objects
  for insert to authenticated with check (bucket_id = 'places');

drop policy if exists "docbo update places" on storage.objects;
create policy "docbo update places" on storage.objects
  for update to authenticated using (bucket_id = 'places');

drop policy if exists "docbo delete places" on storage.objects;
create policy "docbo delete places" on storage.objects
  for delete to authenticated using (bucket_id = 'places');

-- 3) Mọi người XEM được ảnh (bucket public đã đủ; thêm policy cho chắc)
drop policy if exists "docbo read places" on storage.objects;
create policy "docbo read places" on storage.objects
  for select to anon, authenticated using (bucket_id = 'places');
