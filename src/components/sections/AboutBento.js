import React from "react";
import { personalDetails, bentoStats, coreDeliverables } from "../../portfolio";

const AboutBento = () => {
  return (
    <section id="about" className="section-padding" style={{ position: "relative" }}>
      {/* Background Ambient Glow */}
      <div
        className="ambient-glow-orb ambient-orb-terracotta"
        style={{ width: "500px", height: "500px", top: "20%", right: "-10%" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-gold"
        style={{ width: "450px", height: "450px", bottom: "10%", left: "-10%" }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="editorial-badge">
            <span style={{ color: "#e65728" }}>✦</span> [ 01 // ABOUT & ARCHITECTURE ]
          </span>
          <h2 className="section-title">
            ENGINEERING WITH PURPOSE, <br />
            <span className="gradient-text">DESIGNING FOR IMPACT.</span>
          </h2>
          <p className="section-subtitle">
            A look into my engineering philosophy, technical background, and quantifiable production milestones.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
          }}
        >
          {/* Bento Card 1: Main Bio & Background (8 Columns) */}
          <div
            className="bento-card tilt-card"
            style={{
              gridColumn: "span 8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <span className="editorial-badge-gold">FULL-STACK SPECIALIST</span>
                <span className="font-mono" style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  [ ARCHIVE 2025 ]
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  marginBottom: "16px",
                }}
              >
                Bridging elegant visual design with resilient, cloud-scale architectures.
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                  marginBottom: "16px",
                }}
              >
                I am a software engineer specializing in building high-conversion, highly interactive web applications, cross-platform mobile apps, and 3D experiences. With a degree in Information Technology from the University of Sargodha and recognition as a Google Code-In Finalist, I approach code with both architectural precision and user-first visual craftsmanship.
              </p>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                }}
              >
                My toolkit spans from frontend engineering with React, Next.js, and Three.js to backend API development in Node.js, Laravel, Python, PostgreSQL, and Firebase cloud integrations.
              </p>
            </div>

            {/* Location & Status Footer */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "28px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                <i className="fa-solid fa-location-dot" style={{ color: "var(--accent-terracotta)" }}></i>
                <span>{personalDetails.location}</span>
              </div>
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span>{personalDetails.statusBadge}</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Quick Deliverables (4 Columns) */}
          <div
            className="bento-card tilt-card"
            style={{
              gridColumn: "span 4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "linear-gradient(145deg, rgba(26, 26, 36, 0.85) 0%, rgba(18, 18, 24, 0.75) 100%)",
            }}
          >
            <div>
              <span className="editorial-badge-slate" style={{ marginBottom: "16px" }}>
                CORE CAPABILITIES
              </span>

              <h4
                className="font-display"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  margin: "14px 0 20px 0",
                }}
              >
                What I Bring To Your Team
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {coreDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "14px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "4px",
                      }}
                    >
                      <strong style={{ fontSize: "0.95rem", color: "#ffffff" }}>{item.title}</strong>
                      <span
                        className="font-mono"
                        style={{ fontSize: "0.68rem", color: "var(--accent-terracotta-light)" }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Cards 3-6: 4 Statistics Grid (3 Columns Each) */}
          {bentoStats.map((stat, idx) => {
            const isTerracotta = stat.highlight === "terracotta";
            const isGold = stat.highlight === "gold";

            return (
              <div
                key={idx}
                className="bento-card tilt-card"
                style={{
                  gridColumn: "span 3",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      display: "block",
                      marginBottom: "12px",
                    }}
                  >
                    [ METRIC {idx + 1} ]
                  </span>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "clamp(2.4rem, 3.8vw, 3.5rem)",
                      fontWeight: 800,
                      lineHeight: 1,
                      marginBottom: "8px",
                      color: isTerracotta ? "#ff7243" : isGold ? "#e5b869" : "#7aa7c7",
                      textShadow: isTerracotta
                        ? "0 0 25px rgba(230, 87, 40, 0.3)"
                        : isGold
                        ? "0 0 25px rgba(229, 184, 105, 0.25)"
                        : "0 0 25px rgba(122, 167, 199, 0.25)",
                    }}
                  >
                    {stat.number}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "6px",
                      color: "#ffffff",
                    }}
                  >
                    {stat.label}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginTop: "12px",
                  }}
                >
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .bento-card {
            grid-column: span 12 !important;
          }
        }
        @media (min-width: 600px) and (max-width: 992px) {
          .bento-card:nth-child(n+3) {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutBento;
