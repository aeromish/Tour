-- ============================================================
-- Dọc Bờ — 07. KHOÁ QUYỀN ADMIN  (⚠️ CHẠY FILE NÀY TRƯỚC 08)
--
-- Vì sao bắt buộc:
--   Hiện tại policy của places/suggestions là "authenticated = toàn quyền".
--   Khi bật đăng ký công khai (để dùng Chia tiền), MỌI người đăng ký đều là
--   'authenticated' -> họ sửa/xoá được 464 điểm của bạn.
--   File này đổi sang: chỉ user nằm trong bảng `admins` mới được ghi.
-- ============================================================

-- 1) Danh sách admin
create table if not exists public.admins (
  user_id  uuid primary key,
  email    text,
  added_at timestamptz not null default now()
);
alter table public.admins enable row level security;   -- không policy => không ai đọc trực tiếp
revoke all on table public.admins from anon, authenticated;

create or replace function public.is_admin()
returns boolean
language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.admins a where a.user_id = auth.uid()); $$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

-- 2) ⚠️ THÊM CHÍNH BẠN VÀO admins  — đổi email cho đúng tài khoản bạn đăng nhập dashboard
insert into public.admins (user_id, email)
select id, email from auth.users
where email = 'EMAIL-ADMIN-CUA-BAN@gmail.com'   -- <<<<<< ĐỔI THÀNH EMAIL BẠN ĐĂNG NHẬP DASHBOARD
on conflict (user_id) do nothing;

-- Kiểm tra: phải ra đúng 1 dòng. Nếu 0 dòng => sai email, sửa rồi chạy lại phần trên.
select count(*) as so_admin from public.admins;

-- 3) Xoá sạch policy cũ trên 4 bảng rồi dựng lại theo is_admin()
do $$
declare r record;
begin
  for r in select policyname, tablename from pg_policies
           where schemaname='public' and tablename in ('places','provinces','types','suggestions')
  loop execute format('drop policy %I on public.%I', r.policyname, r.tablename); end loop;
end $$;

-- places: khách chỉ đọc điểm đã công khai; admin toàn quyền
create policy "places read public" on public.places
  for select to anon, authenticated using (status = 'published' or public.is_admin());
create policy "places admin write" on public.places
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- provinces / types: ai cũng đọc; admin toàn quyền
create policy "provinces read" on public.provinces for select to anon, authenticated using (true);
create policy "provinces admin write" on public.provinces
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "types read" on public.types for select to anon, authenticated using (true);
create policy "types admin write" on public.types
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- suggestions: ai cũng GỬI được; chỉ admin đọc/sửa/xoá
create policy "suggestions insert" on public.suggestions
  for insert to anon, authenticated with check (true);
create policy "suggestions admin read"   on public.suggestions for select to authenticated using (public.is_admin());
create policy "suggestions admin update" on public.suggestions for update to authenticated using (public.is_admin());
create policy "suggestions admin delete" on public.suggestions for delete to authenticated using (public.is_admin());

-- 4) Kho ảnh: chỉ admin được tải lên / sửa / xoá; ai cũng xem
drop policy if exists "docbo upload places" on storage.objects;
drop policy if exists "docbo update places" on storage.objects;
drop policy if exists "docbo delete places" on storage.objects;
drop policy if exists "docbo read places"   on storage.objects;

create policy "docbo upload places" on storage.objects
  for insert to authenticated with check (bucket_id = 'places' and public.is_admin());
create policy "docbo update places" on storage.objects
  for update to authenticated using (bucket_id = 'places' and public.is_admin());
create policy "docbo delete places" on storage.objects
  for delete to authenticated using (bucket_id = 'places' and public.is_admin());
create policy "docbo read places" on storage.objects
  for select to anon, authenticated using (bucket_id = 'places');

-- ============================================================
-- Sau khi chạy xong file này:
--   • Đăng nhập lại dashboard, thử sửa 1 điểm -> phải vẫn được (bạn là admin).
--   • Chỉ khi đó mới sang chạy 08_money_auth.sql và bật đăng ký công khai.
-- ============================================================
