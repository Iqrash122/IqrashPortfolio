import React from "react";
import { workExperiences } from "../../portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding" style={{ position: "relative" }}>
      {/* Background Ambient Glow */}
      <div
        className="ambient-glow-orb ambient-orb-terracotta"
        style={{ width: "500px", height: "500px", top: "25%", left: "-10%" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-gold"
        style={{ width: "450px", height: "450px", bottom: "15%", right: "-10%" }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="editorial-badge">
            <span style={{ color: "#e65728" }}>✦</span> [ 04 // CAREER PATH & EXPERIENCE ]
          </span>
          <h2 className="section-title">
            PROVEN TRACK RECORD & <br />
            <span className="gradient-text">ENGINEERING LEADERSHIP.</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of production impact, full-stack architectural leadership, and client milestones.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", position: "relative" }}>
          {workExperiences.map((exp, idx) => {
            const isTerracotta = exp.accent === "terracotta";
            const isGold = exp.accent === "gold";
            const accentColor = isTerracotta ? "#e65728" : isGold ? "#e5b869" : "#7aa7c7";

            return (
              <div
                key={idx}
                className="bento-card tilt-card"
                style={{
                  padding: "32px",
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: "32px",
                  borderLeft: `4px solid ${accentColor}`,
                }}
              >
                {/* Left Column: Company & Period */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    {/* Company Logo & Name */}
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                      {exp.logo && (
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            backgroundColor: "#ffffff",
                            padding: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 4px 15px rgba(0, 0, 0, 0.4)`,
                          }}
                        >
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                          />
                        </div>
                      )}

                      <div>
                        <h4
                          className="font-display"
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            lineHeight: 1.2,
                          }}
                        >
                          {exp.company}
                        </h4>
                        <span
                          className="font-mono"
                          style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}
                        >
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.75rem",
                          padding: "4px 12px",
                          borderRadius: "999px",
                          backgroundColor: `${accentColor}18`,
                          border: `1px solid ${accentColor}40`,
                          color: isTerracotta ? "#ff7243" : isGold ? "#ffd58a" : "#9dc4df",
                          fontWeight: 600,
                        }}
                      >
                        {exp.period}
                      </span>

                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.75rem",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Role & Impact Bullets */}
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "12px",
                    }}
                  >
                    {exp.role}
                  </h3>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.98rem",
                      lineHeight: 1.68,
                      marginBottom: "20px",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Bullet achievements */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {exp.achievements.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          fontSize: "0.92rem",
                          color: "var(--text-primary)",
                          lineHeight: 1.55,
                        }}
                      >
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ color: accentColor, marginTop: "4px", fontSize: "0.88rem", flexShrink: 0 }}
                        ></i>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .bento-card {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
