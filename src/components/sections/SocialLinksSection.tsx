import { Github, Youtube, Globe, ExternalLink, ArrowUpRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const socials = [
  {
    name: "GitHub",
    handle: "SushantSReddy",
    url: "https://github.com/SushantSReddy",
    icon: Github,
  },
  {
    name: "YouTube",
    handle: "@sushantsangapude",
    url: "https://youtube.com/@sushantsangapude?si=A1JervLHDlC5zgep",
    icon: Youtube,
  },
  {
    name: "Duolingo",
    handle: "SushantReddy",
    url: "https://www.duolingo.com/profile/SushantReddy?via=share_profile_qr",
    icon: Globe,
  },
  {
    name: "Matiks",
    handle: "sushantsreddy",
    url: "https://app.matiks.org/profile/sushantsreddy?referred_by=sushantsreddy",
    icon: ExternalLink,
  },
];

const SocialLinksSection = () => (
  <section id="socials" className="section-spacing">
    <div className="section-container max-w-4xl">
      <AnimatedSection>
        <p className="body-md uppercase tracking-[0.3em] text-xs mb-4 text-muted-foreground/60">
          Connect
        </p>
        <h2 className="heading-lg mb-12 text-foreground">Find Me Online</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-4">
        {socials.map((social, i) => {
          const Icon = social.icon;
          return (
            <AnimatedSection key={social.name} delay={i * 0.1}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-card flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {social.name}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground/40 group-hover:text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default SocialLinksSection;
