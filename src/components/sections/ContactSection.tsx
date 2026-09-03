import { Mail, Phone } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import MessageForm from "../MessageForm";
import GuestbookForm from "../GuestbookForm";

const ContactSection = () => (
  <section id="contact" className="section-spacing bg-secondary/30">
    <div className="section-container max-w-4xl">
      <AnimatedSection>
        <p className="body-md uppercase tracking-[0.3em] text-xs mb-4 text-muted-foreground/60">
          Contact
        </p>
        <h2 className="heading-lg mb-12 text-foreground">Get in Touch</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <AnimatedSection delay={0.1}>
          <a
            href="mailto:sushantsangapude@gmail.com"
            className="premium-card flex items-center gap-4 group"
          >
            <Mail size={22} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 mb-1">Email</p>
              <p className="text-sm font-medium text-foreground">sushantsangapude@gmail.com</p>
            </div>
          </a>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <a
            href="tel:7020830681"
            className="premium-card flex items-center gap-4 group"
          >
            <Phone size={22} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 mb-1">Mobile</p>
              <p className="text-sm font-medium text-foreground">7020830681</p>
            </div>
          </a>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={0.3}>
        <p className="quote-text text-center mb-12">
          "Opportunities don't happen, you create them."
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.35}>
        <MessageForm />
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
