import { Brain, BookOpen, Lightbulb } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const skills = [
  {
    icon: Brain,
    title: "Technical Skills",
    items: ["AI tools", "Website development (learning)", "Technology exploration"],
  },
  {
    icon: BookOpen,
    title: "Academic Strengths",
    items: ["Physics", "Mathematics", "Logical reasoning"],
  },
  {
    icon: Lightbulb,
    title: "Soft Skills",
    items: ["Problem-solving", "Discipline", "Time management", "Fast learning"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-spacing">
    <div className="section-container">
      <AnimatedSection>
        <p className="body-md uppercase tracking-[0.3em] text-xs mb-4 text-muted-foreground/60">
          Skills
        </p>
        <h2 className="heading-lg mb-12 text-foreground">What I Bring</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.12}>
            <div className="premium-card h-full group">
              <s.icon
                size={28}
                className="mb-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              />
              <h3 className="text-lg font-semibold mb-4 text-foreground">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="body-md text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.4}>
        <p className="quote-text text-center">
          "Success is built on daily habits, not occasional efforts."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default SkillsSection;
