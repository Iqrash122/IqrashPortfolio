import React from "react";
import { testimonialsData } from "../../portfolio";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ position: "relative" }}>
      {/* Background Ambient Glow */}
      <div
        className="ambient-glow-orb ambient-orb-gold"
        style={{ width: "500px", height: "500px", top: "20%", right: "-5%" }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="editorial-badge-gold">
            <span style={{ color: "#e5b869" }}>✦</span> [ 07 // CLIENT & PEER ENDORSEMENTS ]
          </span>
          <h2 className="section-title">
            TRUSTED BY FOUNDERS & <br />
            <span className="gradient-text-gold">ENGINEERING LEADERS.</span>
          </h2>
          <p className="section-subtitle">
            Authentic feedback from technical leaders and clients who partnered on web, mobile, and cloud initiatives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bento-card tilt-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* 5-Star Rating & Project Tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "18px",
                  }}
                >
                  <div style={{ display: "flex", gap: "4px", color: "var(--accent-gold)" }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" style={{ fontSize: "0.9rem" }}></i>
                    ))}
                  </div>

                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.72rem",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(229, 184, 105, 0.1)",
                      border: "1px solid rgba(229, 184, 105, 0.25)",
                      color: "#ffd58a",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "1.02rem",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  "{item.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #e65728 0%, #e5b869 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#0a0a0e",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4
                    className="font-display"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.name}
                  </h4>
                  <span
                    className="font-mono"
                    style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}
                  >
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
