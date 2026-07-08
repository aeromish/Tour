-- ============================================================
-- Dọc Bờ — Bảng góp ý cộng đồng (chạy trong Supabase SQL Editor)
-- Khách gửi góp ý được, nhưng không đọc được của người khác. Chỉ admin xem/duyệt.
-- ============================================================

create table if not exists public.suggestions (
  id         uuid primary key default gen_random_uuid(),
  kind       text not null default 'gopy',      -- 'sai' | 'moi' | 'gopy'
  place_name text,
  province   text,
  message    text not null,
  lat        double precision,
  lng        double precision,
  contact    text,
  status     text not null default 'pending',   -- 'pending' | 'done' | 'ignored'
  created_at timestamptz not null default now()
);

alter table public.suggestions enable row level security;

-- Ai cũng GỬI được (insert)
drop policy if exists "anyone submit suggestion" on public.suggestions;
create policy "anyone submit suggestion" on public.suggestions
  for insert to anon, authenticated with check (true);

-- Chỉ admin ĐỌC/SỬA/XOÁ
drop policy if exists "admin manage suggestions" on public.suggestions;
create policy "admin manage suggestions" on public.suggestions
  for all to authenticated using (true) with check (true);

grant insert on public.suggestions to anon, authenticated;
grant select, update, delete on public.suggestions to authenticated;
