import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import EducationSection from "@/components/sections/EducationSection";
import GoalsSection from "@/components/sections/GoalsSection";
import SocialLinksSection from "@/components/sections/SocialLinksSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <GoalsSection />
      <SocialLinksSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
