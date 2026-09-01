import React, { useState } from "react";
import { projectsData } from "../../portfolio";
import ProjectModal from "../ui/ProjectModal";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Mobile", "AI & Python", "Full Stack", "Laravel & SaaS", "Open Source"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (proj) =>
            proj.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            selectedCategory.toLowerCase().includes(proj.category.toLowerCase())
        );

  return (
    <section id="projects" className="section-padding" style={{ position: "relative" }}>
      {/* Ambient Gradient Glows */}
      <div
        className="ambient-glow-orb ambient-orb-terracotta"
        style={{ width: "550px", height: "550px", top: "15%", left: "-5%" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-gold"
        style={{ width: "500px", height: "500px", bottom: "10%", right: "-5%" }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="editorial-badge">
            <span style={{ color: "#e65728" }}>✦</span> [ 02 // SELECTED PORTFOLIO & ARCHIVES ]
          </span>
          <h2 className="section-title">
            CRAFTED WITH PRECISION, <br />
            <span className="gradient-text">SCALED FOR PRODUCTION.</span>
          </h2>
          <p className="section-subtitle">
            Explore a curated selection of full-stack web applications, streaming platforms, mobile PWAs, and open-source systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "44px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "16px",
          }}
        >
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "999px",
                  backgroundColor: isActive ? "rgba(230, 87, 40, 0.15)" : "transparent",
                  border: isActive
                    ? "1px solid rgba(230, 87, 40, 0.5)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  color: isActive ? "#ff7243" : "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isActive ? "0 0 20px rgba(230, 87, 40, 0.2)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }
                }}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "30px",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card tilt-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px",
                cursor: "pointer",
              }}
              onClick={() => setActiveModalProject(project)}
            >
              <div>
                {/* Project Image Preview with Glass Border */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    marginBottom: "20px",
                    backgroundColor: "#0d0d12",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />

                  {/* Hover Overlay Hint */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(10, 10, 14, 0.8)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>INSPECT</span>
                    <i className="fa-solid fa-expand" style={{ fontSize: "0.7rem", color: "#e65728" }}></i>
                  </div>
                </div>

                {/* Badges & Meta */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <span className="editorial-badge" style={{ fontSize: "0.72rem", padding: "4px 10px" }}>
                    {project.badge}
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    [ {project.year} ]
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    lineHeight: 1.25,
                    marginBottom: "10px",
                    color: "#ffffff",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "18px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "20px",
                  }}
                >
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: "4px 10px",
                        borderRadius: "999px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "#a4a4b8",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveModalProject(project)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--accent-terracotta-light)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: 0,
                  }}
                >
                  <span>View Details</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.75rem" }}></i>
                </button>

                <div style={{ display: "flex", gap: "10px" }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                      aria-label="GitHub Repository"
                    >
                      <i className="fa-brands fa-github" style={{ fontSize: "0.95rem" }}></i>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(230, 87, 40, 0.15)",
                        border: "1px solid rgba(230, 87, 40, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ff7243",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e65728";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(230, 87, 40, 0.15)";
                        e.currentTarget.style.color = "#ff7243";
                      }}
                      aria-label="Live Demo"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "0.85rem" }}></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
