revoke all on function public.grant_first_user_admin() from public, anon, authenticated;
revoke all on function public.has_role(uuid, app_role) from public, anon;
grant execute on function public.has_role(uuid, app_role) to authenticated, service_role;