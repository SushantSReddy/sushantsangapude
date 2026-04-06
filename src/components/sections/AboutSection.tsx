import AnimatedSection from "../AnimatedSection";

const AboutSection = () => (
  <section id="about" className="section-spacing bg-secondary/30">
    <div className="section-container max-w-4xl">
      <AnimatedSection>
        <p className="body-md uppercase tracking-[0.3em] text-xs mb-4 text-muted-foreground/60">
          About
        </p>
        <h2 className="heading-lg mb-8 text-foreground">Who I Am</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="body-lg mb-10 max-w-3xl">
          I am a Class 11 student with a deep interest in artificial
          intelligence, technology, and science. I enjoy solving problems,
          learning new concepts, and constantly improving myself.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <AnimatedSection delay={0.2}>
          <div className="premium-card">
            <h3 className="heading-md text-lg mb-3 text-foreground">Inspirations</h3>
            <p className="body-md">Elon Musk, Steve Jobs, Alexander Wang</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="premium-card">
            <h3 className="heading-md text-lg mb-3 text-foreground">
              Favorite Personalities
            </h3>
            <p className="body-md">Zakir Khan, Mahesh Babu, Kartik Aaryan</p>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={0.4}>
        <p className="quote-text text-center">
          "Stay hungry, stay foolish."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
