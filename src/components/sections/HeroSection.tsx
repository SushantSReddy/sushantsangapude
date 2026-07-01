import { motion } from "framer-motion";
import { ArrowDown, Github, Youtube, Globe, ExternalLink, Send } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center section-container text-center relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        className="max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="body-md mb-4 uppercase tracking-[0.3em] text-muted-foreground/60 text-xs"
        >
          Welcome
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="heading-xl mb-6 text-foreground"
        >
          Sushant Sangapude
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl md:text-2xl font-light text-muted-foreground mb-6 tracking-tight"
        >
          Building skills today for tomorrow's world
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="body-lg max-w-2xl mx-auto mb-8"
        >
          Hi, I'm Sushant — a Class 11 student at VAA, passionate about AI,
          technology, and innovation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="quote-text mb-10"
        >
          "The best way to predict the future is to create it."
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover-lift transition-all duration-300"
        >
          Explore My Journey
          <ArrowDown size={16} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/SushantSReddy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
          >
            <Github size={18} />
          </a>
          <a
            href="https://youtube.com/@sushantsangapude?si=A1JervLHDlC5zgep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
          >
            <Youtube size={18} />
          </a>
          <a
            href="https://www.duolingo.com/profile/SushantReddy?via=share_profile_qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Duolingo"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
          >
            <Globe size={18} />
          </a>
          <a
            href="https://app.matiks.org/profile/sushantsreddy?referred_by=sushantsreddy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Matiks"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
          >
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
