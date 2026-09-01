import React, { useState } from "react";
import { skillsData } from "../../portfolio";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData.skills
      : skillsData.skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ position: "relative" }}>
      {/* Background Ambient Orbs */}
      <div
        className="ambient-glow-orb ambient-orb-gold"
        style={{ width: "500px", height: "500px", top: "10%", right: "-10%" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-slate"
        style={{ width: "450px", height: "450px", bottom: "10%", left: "-10%" }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="editorial-badge-gold">
            <span style={{ color: "#e5b869" }}>✦</span> [ 03 // TECHNICAL ARSENAL & PROFICIENCY ]
          </span>
          <h2 className="section-title">
            ENGINEERING STACK & <br />
            <span className="gradient-text-gold">PROFICIENCY METRICS.</span>
          </h2>
          <p className="section-subtitle">
            An overview of my core technology stack, software expertise, and engineering capabilities calibrated across 5+ years.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "40px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "16px",
          }}
        >
          {skillsData.categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "9px 20px",
                  borderRadius: "999px",
                  backgroundColor: isActive ? "rgba(229, 184, 105, 0.15)" : "transparent",
                  border: isActive
                    ? "1px solid rgba(229, 184, 105, 0.5)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  color: isActive ? "#ffd58a" : "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isActive ? "0 0 18px rgba(229, 184, 105, 0.2)" : "none",
                }}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredSkills.map((skill, idx) => {
            const isTerracotta = skill.accent === "terracotta";
            const isGold = skill.accent === "gold";
            const accentColor = isTerracotta ? "#e65728" : isGold ? "#e5b869" : "#7aa7c7";
            const glowClass = isTerracotta
              ? "active-terracotta"
              : isGold
              ? "active-gold"
              : "active-slate";

            return (
              <div
                key={idx}
                className="bento-card tilt-card"
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: `1px solid ${accentColor}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.3rem",
                        color: accentColor,
                        boxShadow: `0 4px 15px ${accentColor}25`,
                      }}
                    >
                      <i className={skill.icon}></i>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {/* Dot Meter (5 dots) */}
                      <div className="dot-meter">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`dot-meter-item ${
                              dot <= skill.dotCount ? glowClass : ""
                            }`}
                          />
                        ))}
                      </div>

                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: accentColor,
                          marginLeft: "6px",
                        }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "6px",
                    }}
                  >
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "18px",
                    }}
                  >
                    {skill.desc}
                  </p>
                </div>

                {/* Animated Progress Track */}
                <div>
                  <div
                    style={{
                      width: "100%",
                      height: "6px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.percentage}%`,
                        height: "100%",
                        borderRadius: "999px",
                        background: isTerracotta
                          ? "linear-gradient(90deg, #e65728, #ff7243)"
                          : isGold
                          ? "linear-gradient(90deg, #e5b869, #ffd58a)"
                          : "linear-gradient(90deg, #7aa7c7, #9dc4df)",
                        boxShadow: `0 0 10px ${accentColor}80`,
                        transition: "width 0.6s ease",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "8px",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span>CATEGORY // {skill.category.toUpperCase()}</span>
                    <span>LEVEL: ADVANCED</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
