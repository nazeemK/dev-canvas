import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BrandMarquee from "@/components/BrandMarquee";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ScrollBackground from "@/components/ScrollBackground";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SeoSchema from "@/components/SeoSchema";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLocale } from "@/i18n";

const Index = () => {
  const { t } = useLocale();
  const [loading, setLoading] = useState(true);
  usePageMeta({
    title: t.seo.home.title,
    description: t.seo.home.description,
    path: "/",
  });

  return (
    <>
      <SeoSchema />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <ScrollBackground />
        <Navbar ready={!loading} />
        <main>
          <div id="hero">
            <Hero ready={!loading} />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="brands">
            <BrandMarquee />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
          <div id="work">
            <ExperienceSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
