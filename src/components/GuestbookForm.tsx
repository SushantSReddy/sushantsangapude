import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const GuestbookForm = () => {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setError("");

    const { error: fnError } = await supabase.functions.invoke("submit-message", {
      body: {
        name: name.trim(),
        message: note.trim() || "Signed the guestbook",
        type: "guestbook",
      },
    });

    setLoading(false);

    if (fnError) {
      setError("Failed to sign the guestbook. Please try again.");
      return;
    }

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setNote("");
    }, 3000);
  };

  return (
    <div className="premium-card max-w-lg mx-auto">
      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
        <BookOpen size={18} /> Sign the Guestbook
      </h3>
      <p className="body-md text-sm mb-6">Leave your name so I know you stopped by!</p>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center py-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
              <Check size={22} className="text-foreground" />
            </div>
            <p className="font-medium text-foreground">Thanks for signing!</p>
            <p className="body-md text-sm mt-1">Your visit has been recorded.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="guestbook-name" className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                id="guestbook-name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="guestbook-note" className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                Note (optional)
              </label>
              <input
                id="guestbook-note"
                name="note"
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={500}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all duration-300"
                placeholder="Say hi!"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover-lift transition-all duration-300 disabled:opacity-60"
            >
              {loading ? (
                <>Signing... <Loader2 size={14} className="animate-spin" /></>
              ) : (
                <>Sign Guestbook <BookOpen size={14} /></>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GuestbookForm;
