import { GraduationCap } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const EducationSection = () => (
  <section id="education" className="section-spacing bg-secondary/30">
    <div className="section-container max-w-4xl text-center">
      <AnimatedSection>
        <p className="body-md uppercase tracking-[0.3em] text-xs mb-4 text-muted-foreground/60">
          Education
        </p>
        <h2 className="heading-lg mb-12 text-foreground">My Foundation</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="premium-card max-w-lg mx-auto text-center">
          <GraduationCap size={32} className="mx-auto mb-5 text-muted-foreground" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Class 11 Student</h3>
          <p className="body-md text-sm mb-1">Institute: VAA</p>
          <p className="body-md text-sm">
            Preparing for engineering entrance exams (JEE)
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <p className="quote-text">
          "Education is the passport to the future."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;
