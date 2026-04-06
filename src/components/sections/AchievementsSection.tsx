import { Target, Trophy, TrendingUp } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const items = [
  { icon: Target, title: "Academic Focus", desc: "Consistent discipline in studies and exam preparation." },
  { icon: Trophy, title: "Competitive Preparation", desc: "Dedicated preparation for engineering entrance exams." },
  { icon: TrendingUp, title: "Self-Improvement", desc: "Strong mindset for continuous growth and learning." },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-spacing">
    <div className="section-container max-w-4xl">
      <AnimatedSection>
        <p className="body-md uppercase tracking-[0.3em] text-xs mb-4 text-muted-foreground/60">
          Achievements
        </p>
        <h2 className="heading-lg mb-12 text-foreground">Milestones</h2>
      </AnimatedSection>
      <div className="space-y-6">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.12}>
            <div className="premium-card flex items-start gap-5">
              <item.icon size={24} className="text-muted-foreground mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="body-md text-sm">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.4}>
        <p className="quote-text text-center">
          "Small progress every day leads to big results."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AchievementsSection;
