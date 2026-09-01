import React, { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "rgba(10, 10, 14, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "880px",
          maxHeight: "90vh",
          overflowY: "auto",
          backgroundColor: "#121217",
          border: "1px solid rgba(230, 87, 40, 0.4)",
          borderRadius: "24px",
          padding: "36px",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(230, 87, 40, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
            fontSize: "1.2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e65728";
            e.currentTarget.style.borderColor = "#e65728";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Modal Header */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
          <span className="editorial-badge">{project.badge || "CASE STUDY"}</span>
          <span className="editorial-badge-gold">{project.category}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            [ {project.year} ]
          </span>
        </div>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          {project.title}
        </h2>

        {/* Project Image Preview */}
        {project.image && (
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              marginBottom: "28px",
              backgroundColor: "#0d0d12",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                maxHeight: "380px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        )}

        {/* Description & Overview */}
        <div style={{ marginBottom: "28px" }}>
          <h4
            className="font-mono"
            style={{
              fontSize: "0.85rem",
              color: "var(--accent-terracotta-light)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "8px",
            }}
          >
            Project Overview
          </h4>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Deliverables Grid */}
        {project.deliverables && project.deliverables.length > 0 && (
          <div style={{ marginBottom: "28px" }}>
            <h4
              className="font-mono"
              style={{
                fontSize: "0.85rem",
                color: "var(--accent-gold)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              Key Deliverables & Architecture
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    fontSize: "0.9rem",
                    color: "var(--text-primary)",
                  }}
                >
                  <i className="fa-solid fa-check" style={{ color: "#e65728", fontSize: "0.8rem" }}></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div style={{ marginBottom: "36px" }}>
          <h4
            className="font-mono"
            style={{
              fontSize: "0.85rem",
              color: "var(--accent-slate-light)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "12px",
            }}
          >
            Technologies Used
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(122, 167, 199, 0.1)",
                  border: "1px solid rgba(122, 167, 199, 0.25)",
                  color: "#9dc4df",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
          }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Visit Live Platform</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <i className="fa-brands fa-github"></i>
              <span>View Source / GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
