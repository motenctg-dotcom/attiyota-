-- আত্মীয়তা ওয়েবসাইটের ডেটাবেজ স্ট্রাকচার (রেফারেন্স কপি)
create table profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  full_name text not null,
  age int not null check (age >= 18 and age <= 80),
  occupation text not null,
  district text not null,
  gender text not null check (gender in ('male', 'female')),
  submitted_by text not null default 'self' check (submitted_by in ('self', 'guardian')),
  phone text not null,
  photo_url text,
  bio text,
  is_premium boolean not null default false,
  premium_expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table premium_codes (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  duration_days int not null,
  is_used boolean not null default false,
  used_by uuid references auth.users(id),
  used_at timestamptz,
  created_at timestamptz not null default now()
);

create table profile_unlocks (
  id uuid primary key default gen_random_uuid(),
  viewer_user_id uuid references auth.users(id) on delete cascade not null,
  expires_at timestamptz,
  unlocked_via text not null check (unlocked_via in ('code', 'manual_payment')),
  created_at timestamptz not null default now(),
  unique(viewer_user_id)
);

alter table profiles enable row level security;
alter table premium_codes enable row level security;
alter table profile_unlocks enable row level security;

create policy "সবাই প্রোফাইল লিস্ট দেখতে পারবে" on profiles for select using (true);
create policy "লগইন করা ইউজার নিজের প্রোফাইল বানাতে পারবে" on profiles for insert with check (auth.uid() = user_id);
create policy "ইউজার নিজের প্রোফাইল এডিট করতে পারবে" on profiles for update using (auth.uid() = user_id);
create policy "ইউজার নিজের প্রোফাইল ডিলিট করতে পারবে" on profiles for delete using (auth.uid() = user_id);
create policy "কোড টেবিল গোপন থাকবে" on premium_codes for select using (false);
create policy "ইউজার নিজের আনলক স্ট্যাটাস দেখতে পারবে" on profile_unlocks for select using (auth.uid() = viewer_user_id);
create policy "ইউজার নিজের আনলক তৈরি করতে পারবে" on profile_unlocks for insert with check (auth.uid() = viewer_user_id);
create policy "ইউজার নিজের আনলক আপডেট করতে পারবে" on profile_unlocks for update using (auth.uid() = viewer_user_id);

create or replace function redeem_premium_code(input_code text, redeeming_user_id uuid)
returns json language plpgsql security definer as $$
declare
  code_row premium_codes%rowtype;
  new_expiry timestamptz;
begin
  select * into code_row from premium_codes where code = input_code and is_used = false;
  if code_row.id is null then
    return json_build_object('success', false, 'message', 'কোড সঠিক নয় বা আগেই ব্যবহার হয়ে গেছে');
  end if;
  if code_row.duration_days = 0 then
    new_expiry := null;
  else
    new_expiry := now() + (code_row.duration_days || ' days')::interval;
  end if;
  update premium_codes set is_used = true, used_by = redeeming_user_id, used_at = now() where id = code_row.id;
  insert into profile_unlocks (viewer_user_id, expires_at, unlocked_via)
    values (redeeming_user_id, new_expiry, 'code')
    on conflict (viewer_user_id) do update set expires_at = new_expiry, unlocked_via = 'code', created_at = now();
  return json_build_object('success', true, 'message', 'প্রিমিয়াম একসেস চালু হয়েছে', 'expires_at', new_expiry);
end;
$$;
