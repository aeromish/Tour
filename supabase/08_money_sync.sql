-- ============================================================
-- Dọc Bờ — 08. CHIA TIỀN: đồng bộ / sao lưu riêng tư
-- ⚠️ Chạy 07_admin_lockdown.sql TRƯỚC file này.
-- (File này thay thế mọi bản 06/08 trước đó — chạy được dù bạn đã chạy chúng hay chưa.)
--
-- Mô hình đơn giản nhất:
--   • Bảng chi tiêu là RIÊNG TƯ. Chỉ chủ sở hữu (đăng nhập) đọc & ghi được.
--   • Không có link chia sẻ, không token, không ai khác xem được.
--   • Chốt tour xong thì xuất PDF gửi nhóm — thế là đủ.
-- ============================================================

create table if not exists public.money_trips (
  id         uuid primary key default gen_random_uuid(),
  owner      uuid references auth.users(id) on delete cascade,
  name       text not null default '',
  data       jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Nếu bảng đã tồn tại từ bản cũ: bổ sung / dọn cột
alter table public.money_trips add  column if not exists owner uuid references auth.users(id) on delete cascade;
alter table public.money_trips drop column if exists view_token;
alter table public.money_trips drop column if exists secret;

create index if not exists money_trips_owner_idx on public.money_trips(owner);

-- Dọn các hàm RPC của những bản trước (không dùng nữa)
drop function if exists public.money_create(text, jsonb);
drop function if exists public.money_load(uuid, text);
drop function if exists public.money_save(uuid, text, text, jsonb);
drop function if exists public.money_delete(uuid, text);
drop function if exists public.money_view(uuid, text);
drop function if exists public.money_rotate_token(uuid);

-- ---------- RLS: chỉ chủ sở hữu ----------
alter table public.money_trips enable row level security;

do $$
declare r record;
begin
  for r in select policyname from pg_policies
           where schemaname = 'public' and tablename = 'money_trips'
  loop execute format('drop policy %I on public.money_trips', r.policyname); end loop;
end $$;

create policy "money owner select" on public.money_trips
  for select to authenticated using (owner = auth.uid());
create policy "money owner insert" on public.money_trips
  for insert to authenticated with check (owner = auth.uid());
create policy "money owner update" on public.money_trips
  for update to authenticated using (owner = auth.uid()) with check (owner = auth.uid());
create policy "money owner delete" on public.money_trips
  for delete to authenticated using (owner = auth.uid());

revoke all on table public.money_trips from anon;                 -- khách vãng lai: không có quyền gì
grant select, insert, update, delete on table public.money_trips to authenticated;

-- ---------- Chặn dữ liệu quá lớn + tự cập nhật updated_at ----------
create or replace function public.money_trips_guard()
returns trigger language plpgsql as $$
begin
  if pg_column_size(new.data) > 200000 then
    raise exception 'Dữ liệu quá lớn (giới hạn ~200KB)';
  end if;
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists money_trips_guard_t on public.money_trips;
create trigger money_trips_guard_t
  before insert or update on public.money_trips
  for each row execute function public.money_trips_guard();

-- ============================================================
-- SAU KHI CHẠY:
--   Supabase → Authentication → Sign In / Providers
--     • Bật "Allow new users to sign up"  (an toàn vì đã chạy 07)
--     • Bật Email (magic link) và/hoặc Google
--
--   💡 Nếu CHỈ MÌNH BẠN dùng tính năng này: cứ đăng nhập bằng chính
--      tài khoản admin sẵn có, KHÔNG cần bật đăng ký công khai.
--      (Vẫn nên chạy 07 — nó siết quyền lại cho chắc.)
-- ============================================================
