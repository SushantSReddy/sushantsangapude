CREATE TABLE public.guestbook_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  note TEXT CHECK (note IS NULL OR char_length(note) <= 500),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT ON public.guestbook_entries TO authenticated;
GRANT INSERT ON public.guestbook_entries TO anon, authenticated;
GRANT ALL ON public.guestbook_entries TO service_role;
ALTER TABLE public.guestbook_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can read guestbook" ON public.guestbook_entries FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "No direct inserts" ON public.guestbook_entries FOR INSERT TO anon, authenticated WITH CHECK (false);