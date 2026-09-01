import React from "react";
import { socialLinks } from "../../portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#08080b",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "60px 0 40px 0",
        overflow: "hidden",
      }}
    >
      {/* Subtle Top Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #e65728, transparent)",
          boxShadow: "0 0 20px #e65728",
        }}
      />

      <div className="section-container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          {/* Brandmark */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #e65728 0%, #d84514 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-display)",
                  color: "#ffffff",
                }}
              >
                IA
              </div>
              <span
                className="font-display"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                IQRASH AHMED<span style={{ color: "var(--accent-terracotta)" }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              FULL STACK SOFTWARE ENGINEER & 3D WEB SPECIALIST
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              }}
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0077b5";
                e.currentTarget.style.borderColor = "rgba(0, 119, 181, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              }}
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href={`mailto:${socialLinks.email}`}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e65728";
                e.currentTarget.style.borderColor = "rgba(230, 87, 40, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              }}
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#25d366";
                e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              }}
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#e65728";
              e.currentTarget.style.color = "#ff7243";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            <span>BACK TO TOP</span>
            <i className="fa-solid fa-arrow-up" style={{ fontSize: "0.75rem" }}></i>
          </button>
        </div>

        {/* Bottom Sub-Footer */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span>© {new Date().getFullYear()} IQRASH AHMED. ALL RIGHTS RESERVED.</span>
          <span>CRAFTED WITH REACT, THREE.JS & LUXURY BENTO ARCHITECTURE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
