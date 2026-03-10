import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
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

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <CustomCursor />
        <ScrollBackground />
        <Navbar />
        <main>
          <div id="hero">
            <Hero />
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
      </div>
    </>
  );
};

export default Index;
