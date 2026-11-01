-- 이 SQL은 Supabase 대시보드 SQL Editor에서 한 번 실행합니다.
-- 관리자의 Table Editor와 SQL Editor에서 private schema 통계를 조회합니다.
create schema if not exists campaign_private;
revoke all on schema campaign_private from public, anon, authenticated;
create table if not exists campaign_private.events (
  visitor_id uuid not null references auth.users(id) on delete cascade,
  event_date date not null,
  mission_no smallint not null check (mission_no between 0 and 7),
  viewed_at timestamptz not null default now(),
  completed_at timestamptz,
  primary key (visitor_id, event_date, mission_no)
);
alter table campaign_private.events enable row level security;
revoke all on campaign_private.events from public, anon, authenticated;

create or replace function public.record_fortune_view(mission_no integer)
returns void language plpgsql security definer set search_path = '' as $$
declare uid uuid := auth.uid(); today date := (now() at time zone 'Asia/Seoul')::date;
begin
  if uid is null or coalesce((auth.jwt()->>'is_anonymous')::boolean, false) is not true
    or mission_no is null or mission_no < 0 or mission_no > 7 then
    raise exception 'Invalid request';
  end if;
  insert into campaign_private.events(visitor_id,event_date,mission_no)
  values (uid,today,mission_no) on conflict do nothing;
end $$;

create or replace function public.record_mission_completion(mission_no integer)
returns void language plpgsql security definer set search_path = '' as $$
declare uid uuid := auth.uid(); today date := (now() at time zone 'Asia/Seoul')::date;
begin
  if uid is null or coalesce((auth.jwt()->>'is_anonymous')::boolean, false) is not true
    or mission_no is null or mission_no < 0 or mission_no > 7 then
    raise exception 'Invalid request';
  end if;
  update campaign_private.events e set completed_at = coalesce(e.completed_at, now())
  where e.visitor_id = uid and e.event_date = today and e.mission_no = record_mission_completion.mission_no;
  if not found then raise exception 'No fortune view found'; end if;
end $$;
revoke all on function public.record_fortune_view(integer) from public, anon;
revoke all on function public.record_mission_completion(integer) from public, anon;
grant execute on function public.record_fortune_view(integer) to authenticated;
grant execute on function public.record_mission_completion(integer) to authenticated;

-- 관리자만 SQL Editor에서 실행할 예시:
-- select event_date, count(distinct visitor_id) as visitors,
--   count(distinct visitor_id) filter (where completed_at is not null) as completers,
--   round(100.0 * count(distinct visitor_id) filter (where completed_at is not null)
--     / nullif(count(distinct visitor_id), 0), 1) as completion_percent
-- from campaign_private.events group by event_date order by event_date desc;
-- select * from campaign_private.events order by viewed_at desc;
