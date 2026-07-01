import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  dark: boolean;
  setDark: (v: boolean) => void;
  className?: string;
}

const ThemeToggle = ({ dark, setDark, className = "" }: ThemeToggleProps) => {
  return (
    <button
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setDark(!dark)}
      className={`relative inline-flex h-8 w-14 items-center rounded-full border border-border/60 bg-secondary/80 backdrop-blur transition-colors duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-1.5 text-muted-foreground/70">
        <Sun size={12} strokeWidth={2.2} />
        <Moon size={12} strokeWidth={2.2} />
      </span>
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="relative z-10 ml-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground shadow-md"
        style={{ transform: dark ? "translateX(24px)" : "translateX(0px)" }}
      >
        {dark ? <Moon size={13} /> : <Sun size={13} />}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;