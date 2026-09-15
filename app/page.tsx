import { AboutSection } from "@/sections/about-section";
import { ApproachSection } from "@/sections/approach-section";
import { ContactSection } from "@/sections/contact-section";
import { CredentialsSection } from "@/sections/credentials-section";
import { ExperienceSection } from "@/sections/experience-section";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CredentialsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
