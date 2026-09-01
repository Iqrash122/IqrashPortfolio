import React from "react";
import CustomCursor from "../components/ui/CustomCursor";
import Navbar from "../components/navigation/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutBento from "../components/sections/AboutBento";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import EducationCertifications from "../components/sections/EducationCertifications";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";
import "./Main.scss";

const Main = () => {
  return (
    <div className="dark-mode" style={{ minHeight: "100vh", backgroundColor: "var(--bg-canvas)", position: "relative" }}>
      {/* Interactive Custom Glowing Magnetic Cursor */}
      <CustomCursor />

      {/* Luxury Editorial Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* 1. Cinematic 3D Hero */}
        <HeroSection />

        {/* 2. Editorial Bento Grid About & Metrics */}
        <AboutBento />

        {/* 3. Selected Projects & 3D Tilt Cards with Full Inspection Modal */}
        <ProjectsSection />

        {/* 4. Technical Arsenal & Dot Proficiency Meters */}
        <SkillsSection />

        {/* 5. Career Experience Timeline */}
        <ExperienceSection />

        {/* 6. Education & Global Honors (Google Code-In, Google Assistant) */}
        <EducationCertifications />

        {/* 7. 4-Phase Engineering Workflow */}
        <ProcessSection />

        {/* 8. Client Endorsements & Testimonials */}
        <TestimonialsSection />

        {/* 9. Interactive Contact Hub & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Luxury Dark Footer */}
      <Footer />
    </div>
  );
};

export default Main;
