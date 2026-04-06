import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setMessage("");
    }, 3000);
  };

  return (
    <div className="premium-card max-w-lg mx-auto">
      <h3 className="text-lg font-semibold text-foreground mb-6">Send a Message</h3>
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
            <p className="font-medium text-foreground">Thank you, {name}!</p>
            <p className="body-md text-sm mt-1">Your message has been received.</p>
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
              <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 mb-2 block">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 mb-2 block">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all duration-300 resize-none"
                placeholder="Your message"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover-lift transition-all duration-300"
            >
              Send Message
              <Send size={14} />
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MessageForm;
