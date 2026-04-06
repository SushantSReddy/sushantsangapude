import { Globe, CalendarCheck, Sparkles } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const projects = [
  {
    icon: Globe,
    title: "Personal CV Website",
    desc: "Built using AI tools to showcase skills and ambitions.",
  },
  {
    icon: CalendarCheck,
    title: "Study Management System",
    desc: "A system for managing school and coaching effectively.",
  },
  {
    icon: Sparkles,
    title: "AI Productivity Tools",
    desc: "Exploring AI tools for productivity and learning.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-spacing bg-secondary/30">
    <div className="section-container">
      <AnimatedSection>
        <p className="body-md uppercase tracking-[0.3em] text-xs mb-4 text-muted-foreground/60">
          Projects
        </p>
        <h2 className="heading-lg mb-12 text-foreground">What I've Built</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12}>
            <div className="premium-card h-full group cursor-default">
              <p.icon
                size={28}
                className="mb-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              />
              <h3 className="text-lg font-semibold mb-3 text-foreground">{p.title}</h3>
              <p className="body-md text-sm">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.4}>
        <p className="quote-text text-center">
          "Don't watch the clock; do what it does. Keep going."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ProjectsSection;
