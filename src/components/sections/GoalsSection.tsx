import AnimatedSection from "../AnimatedSection";

const GoalsSection = () => (
  <section id="goals" className="section-spacing">
    <div className="section-container max-w-4xl">
      <AnimatedSection>
        <p className="body-md uppercase tracking-[0.3em] text-xs mb-4 text-muted-foreground/60">
          Goals
        </p>
        <h2 className="heading-lg mb-12 text-foreground">Where I'm Headed</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.15}>
          <div className="premium-card h-full">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">
              Short-term
            </div>
            <ul className="space-y-3">
              <li className="body-md text-sm">Master PCM subjects</li>
              <li className="body-md text-sm">Improve problem-solving skills</li>
              <li className="body-md text-sm">Prepare seriously for JEE</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.25}>
          <div className="premium-card h-full">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">
              Long-term
            </div>
            <ul className="space-y-3">
              <li className="body-md text-sm">Join IIT</li>
              <li className="body-md text-sm">
                Become a software engineer or AI innovator
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={0.4}>
        <p className="quote-text text-center">
          "Dream big. Start small. Act now."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default GoalsSection;
