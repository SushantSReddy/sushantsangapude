drop policy if exists "admins can read views" on public.page_views;
create policy "admins can read views" on public.page_views
for select to authenticated
using (exists (select 1 from public.user_roles ur where ur.user_id = auth.uid() and ur.role = 'admin'));