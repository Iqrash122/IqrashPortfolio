import React from "react";
import { educationData, certificationsData } from "../../portfolio";

const EducationCertifications = () => {
  return (
    <section id="credentials" className="section-padding" style={{ position: "relative" }}>
      {/* Background Ambient Glow */}
      <div
        className="ambient-glow-orb ambient-orb-slate"
        style={{ width: "500px", height: "500px", top: "20%", right: "-10%" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-terracotta"
        style={{ width: "450px", height: "450px", bottom: "10%", left: "-10%" }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="editorial-badge-slate">
            <span style={{ color: "#7aa7c7" }}>✦</span> [ 05 // ACADEMICS & GLOBAL HONORS ]
          </span>
          <h2 className="section-title">
            FORMAL FOUNDATIONS & <br />
            <span className="gradient-text-slate">GLOBAL RECOGNITION.</span>
          </h2>
          <p className="section-subtitle">
            Academic degrees in Information Technology paired with prestigious global honors from Google Open Source and industry certifications.
          </p>
        </div>

        {/* Global Honors & Certifications Grid */}
        <div style={{ marginBottom: "50px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <span className="editorial-badge" style={{ padding: "6px 14px", fontSize: "0.78rem" }}>
              PRESTIGIOUS HONORS & CERTIFICATIONS
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "24px",
            }}
          >
            {certificationsData.map((cert, idx) => {
              const isTerracotta = cert.accent === "terracotta";
              const isGold = cert.accent === "gold";
              const accentColor = isTerracotta ? "#e65728" : isGold ? "#e5b869" : "#7aa7c7";

              return (
                <div
                  key={idx}
                  className="bento-card tilt-card"
                  style={{
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {/* Header with Logo and Badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "18px",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "14px",
                          overflow: "hidden",
                          backgroundColor: "#ffffff",
                          padding: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        <img
                          src={cert.logo}
                          alt={cert.title}
                          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                        />
                      </div>

                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.72rem",
                          padding: "4px 12px",
                          borderRadius: "999px",
                          backgroundColor: `${accentColor}18`,
                          border: `1px solid ${accentColor}40`,
                          color: isTerracotta ? "#ff7243" : isGold ? "#ffd58a" : "#9dc4df",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {cert.badge}
                      </span>
                    </div>

                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "6px",
                      }}
                    >
                      {cert.title}
                    </h3>

                    <div
                      className="font-mono"
                      style={{
                        fontSize: "0.82rem",
                        color: accentColor,
                        marginBottom: "12px",
                      }}
                    >
                      {cert.issuer}
                    </div>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        marginBottom: "24px",
                      }}
                    >
                      {cert.description}
                    </p>
                  </div>

                  {/* Verification Links */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    {cert.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 14px",
                          borderRadius: "8px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = accentColor;
                          e.currentTarget.style.borderColor = accentColor;
                          e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.color = "var(--text-primary)";
                        }}
                      >
                        <span>{link.name}</span>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "0.7rem" }}></i>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Degrees Grid */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <span className="editorial-badge-gold" style={{ padding: "6px 14px", fontSize: "0.78rem" }}>
              ACADEMIC DEGREE & EDUCATION
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "24px",
            }}
          >
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bento-card tilt-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        backgroundColor: "#ffffff",
                        padding: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                      />
                    </div>

                    <div>
                      <h4
                        className="font-display"
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "#ffffff",
                          lineHeight: 1.2,
                        }}
                      >
                        {edu.institution}
                      </h4>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--accent-gold)",
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "10px",
                    }}
                  >
                    {edu.degree}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
