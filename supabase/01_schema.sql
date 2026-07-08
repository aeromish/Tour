-- ============================================================
-- Dọc Bờ — Schema + Row Level Security (chạy trong Supabase SQL Editor)
-- Chạy file này TRƯỚC, rồi mới tới 02_seed.sql
-- ============================================================

-- ---------- Bảng loại điểm ----------
create table if not exists public.types (
  key   text primary key,
  label text not null,
  color text not null
);

-- ---------- Bảng tỉnh/thành ----------
create table if not exists public.provinces (
  key        text primary key,
  name       text not null,
  center_lat double precision,
  center_lng double precision,
  region     text,
  sort_order int
);

-- ---------- Bảng điểm (chính) ----------
create table if not exists public.places (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  type       text not null references public.types(key),
  province   text not null references public.provinces(key),
  lat        double precision,
  lng        double precision,
  note       text,
  tel        text,
  map_url    text,
  images     jsonb not null default '[]'::jsonb,
  status     text  not null default 'published',   -- 'draft' | 'published'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists places_province_idx on public.places(province);
create index if not exists places_type_idx     on public.places(type);
create index if not exists places_status_idx   on public.places(status);

-- ---------- Tự cập nhật updated_at ----------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_places_updated on public.places;
create trigger trg_places_updated
  before update on public.places
  for each row execute function public.set_updated_at();

-- ============================================================
-- Row Level Security
--   • Khách (chưa đăng nhập): CHỈ đọc điểm đã 'published'
--   • Admin (đã đăng nhập):  toàn quyền
-- ============================================================
alter table public.places    enable row level security;
alter table public.provinces enable row level security;
alter table public.types     enable row level security;

-- Đọc công khai
drop policy if exists "read published places" on public.places;
create policy "read published places" on public.places
  for select using (status = 'published');

drop policy if exists "read provinces" on public.provinces;
create policy "read provinces" on public.provinces
  for select using (true);

drop policy if exists "read types" on public.types;
create policy "read types" on public.types
  for select using (true);

-- Ghi/sửa/xoá: chỉ tài khoản đã đăng nhập
drop policy if exists "admin write places" on public.places;
create policy "admin write places" on public.places
  for all to authenticated using (true) with check (true);

drop policy if exists "admin write provinces" on public.provinces;
create policy "admin write provinces" on public.provinces
  for all to authenticated using (true) with check (true);

drop policy if exists "admin write types" on public.types;
create policy "admin write types" on public.types
  for all to authenticated using (true) with check (true);

-- ============================================================
-- Grants (cần cho REST API của Supabase, nhất là project tạo sau 30/5/2026)
-- RLS ở trên vẫn là lớp chặn thật; grant chỉ mở "cửa" cho API.
-- ============================================================
grant usage on schema public to anon, authenticated;
grant select on public.places, public.provinces, public.types to anon, authenticated;
grant insert, update, delete on public.places, public.provinces, public.types to authenticated;
