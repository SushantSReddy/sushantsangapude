import { Github, Youtube, Globe, ExternalLink, Send } from "lucide-react";

const Footer = () => (
  <footer className="py-12 text-center">
    <div className="flex items-center justify-center gap-4 mb-6">
      <a
        href="https://github.com/SushantSReddy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
      >
        <Github size={16} />
      </a>
      <a
        href="https://youtube.com/@sushantsangapude?si=A1JervLHDlC5zgep"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
      >
        <Youtube size={16} />
      </a>
      <a
        href="https://www.duolingo.com/profile/SushantReddy?via=share_profile_qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Duolingo"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
      >
        <Globe size={16} />
      </a>
      <a
        href="https://t.me/sushantsreddy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
      >
        <Send size={16} />
      </a>
      <a
        href="https://app.matiks.org/profile/sushantsreddy?referred_by=sushantsreddy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Matiks"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
      >
        <ExternalLink size={16} />
      </a>
    </div>
    <p className="text-xs text-muted-foreground/50 tracking-[0.15em] uppercase">
      Designed by Sushant
    </p>
  </footer>
);

export default Footer;
