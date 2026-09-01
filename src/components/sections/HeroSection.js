import React from "react";
import ThreeHeroScene from "../3d/ThreeHeroScene";
import { personalDetails, socialLinks } from "../../portfolio";

const HeroSection = () => {
  const floatingTech = [
    { name: "React.js", icon: "fa-brands fa-react", color: "#61dafb" },
    { name: "Next.js", icon: "fa-solid fa-n", color: "#ffffff" },
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "#68a063" },
    { name: "Laravel", icon: "fa-brands fa-laravel", color: "#ff2d20" },
    { name: "React Native", icon: "fa-solid fa-mobile-screen", color: "#61dafb" },
    { name: "Three.js", icon: "fa-solid fa-cube", color: "#e65728" },
    { name: "Firebase", icon: "fa-solid fa-fire", color: "#ffa000" },
    { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#336791" },
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      {/* 3D Three.js Background Canvas */}
      <ThreeHeroScene />

      {/* Ambient Gradient Glows */}
      <div
        className="ambient-glow-orb ambient-orb-terracotta"
        style={{ width: "650px", height: "650px", top: "10%", left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-gold"
        style={{ width: "450px", height: "450px", bottom: "10%", right: "5%" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-slate"
        style={{ width: "400px", height: "400px", top: "20%", left: "5%" }}
      />

      {/* Hero Content Container */}
      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "1050px",
        }}
      >
        {/* Editorial Eyebrow Tag */}
        <div style={{ marginBottom: "24px" }}>
          <span className="editorial-badge" style={{ padding: "8px 18px", fontSize: "0.82rem" }}>
            <span style={{ color: "#e65728" }}>✦</span> FULL STACK SOFTWARE ENGINEER <span style={{ color: "#e5b869" }}>✦</span> 3D WEB SPECIALIST
          </span>
        </div>

        {/* Main Display Headline */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.5rem, 6.2vw, 5.2rem)",
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            marginBottom: "24px",
          }}
        >
          TURNING IDEAS INTO <br />
          <span className="gradient-text">SCALABLE & 3D DIGITAL</span> EXPERIENCES.
        </h1>

        {/* Subtitle Bio */}
        <p
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.28rem)",
            color: "var(--text-secondary)",
            maxWidth: "760px",
            margin: "0 auto 36px auto",
            lineHeight: 1.68,
            fontWeight: 400,
          }}
        >
          Hi, I'm <strong style={{ color: "#ffffff" }}>Iqrash Ahmed</strong>. A Full Stack Developer crafting resilient web applications, cross-platform mobile apps, and interactive 3D WebGL interfaces with React, Next.js, Node.js, and Laravel.
        </p>

        {/* Call to Action Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          <a href="#projects" className="btn-primary" style={{ padding: "16px 36px", fontSize: "1rem" }}>
            <span>Explore Selected Work</span>
            <i className="fa-solid fa-arrow-down" style={{ fontSize: "0.85rem" }}></i>
          </a>

          {personalDetails.resumeLink && (
            <a
              href={personalDetails.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: "16px 32px", fontSize: "1rem" }}
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>Download Resume</span>
            </a>
          )}

          <a href="#contact" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
            <i className="fa-regular fa-envelope"></i>
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Floating Tech Stack Badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            maxWidth: "850px",
            margin: "0 auto 36px auto",
          }}
        >
          {floatingTech.map((tech, idx) => (
            <div
              key={idx}
              className="tilt-card"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: "rgba(18, 18, 24, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-primary)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(230, 87, 40, 0.5)";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(230, 87, 40, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(0px) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
              }}
            >
              <i className={tech.icon} style={{ color: tech.color, fontSize: "0.95rem" }}></i>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Social Links Bar */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "18px",
            padding: "10px 24px",
            borderRadius: "999px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            CONNECT //
          </span>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", fontSize: "1.1rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", fontSize: "1.1rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0077b5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            style={{ color: "var(--text-secondary)", fontSize: "1.1rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e65728")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", fontSize: "1.1rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#25d366")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
