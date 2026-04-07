DROP POLICY IF EXISTS "Anyone can send a message" ON public.messages;

ALTER TABLE public.messages
  ADD CONSTRAINT messages_name_length CHECK (char_length(name) <= 100),
  ADD CONSTRAINT messages_message_length CHECK (char_length(message) <= 1000);