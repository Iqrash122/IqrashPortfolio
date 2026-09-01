import React from "react";
import { processSteps } from "../../portfolio";

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding" style={{ position: "relative" }}>
      {/* Background Ambient Glow */}
      <div
        className="ambient-glow-orb ambient-orb-terracotta"
        style={{ width: "500px", height: "500px", top: "15%", left: "-10%" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-gold"
        style={{ width: "450px", height: "450px", bottom: "10%", right: "-10%" }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="editorial-badge">
            <span style={{ color: "#e65728" }}>✦</span> [ 06 // METHODOLOGY & LIFECYCLE ]
          </span>
          <h2 className="section-title">
            STRUCTURED WORKFLOW FOR <br />
            <span className="gradient-text">ZERO-DEFECT DELIVERIES.</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested 4-phase engineering lifecycle ensuring transparency, rapid iteration, and production reliability.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bento-card tilt-card"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Number Watermark Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: 800,
                      color: "rgba(230, 87, 40, 0.4)",
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </span>

                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.72rem",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "var(--accent-gold)",
                    }}
                  >
                    {step.tag}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                    lineHeight: 1.25,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Bottom Step Indicator */}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                }}
              >
                <span>PHASE {idx + 1} OF 4</span>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.7rem", color: "#e65728" }}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
