import React, { useState } from "react";
import confetti from "canvas-confetti";
import { personalDetails, socialLinks } from "../../portfolio";

const ContactSection = () => {
  const [selectedService, setSelectedService] = useState("Full-Stack Web App");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectScope: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const services = [
    "Full-Stack Web App",
    "Mobile / PWA App",
    "3D Web Experience",
    "API & Backend Architecture",
    "Technical Consultation",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e65728", "#e5b869", "#7aa7c7", "#ffffff"],
      });
    } catch (err) {
      // fallback
    }

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: "relative" }}>
      {/* Ambient Gradient Glows */}
      <div
        className="ambient-glow-orb ambient-orb-terracotta"
        style={{ width: "600px", height: "600px", top: "10%", right: "-10%" }}
      />
      <div
        className="ambient-glow-orb ambient-orb-gold"
        style={{ width: "500px", height: "500px", bottom: "10%", left: "-10%" }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="editorial-badge">
            <span style={{ color: "#e65728" }}>✦</span> [ 08 // INQUIRY & COLLABORATION ]
          </span>
          <h2 className="section-title">
            HAVE A PROJECT IN MIND? <br />
            <span className="gradient-text">LET'S START THE CONVERSATION.</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a full-scale web product, an interactive 3D platform, or an expert developer for your team, I'm just a message away.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "36px",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Direct Email Card */}
            <div className="bento-card tilt-card" style={{ padding: "28px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(230, 87, 40, 0.15)",
                    border: "1px solid rgba(230, 87, 40, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ff7243",
                    fontSize: "1.2rem",
                  }}
                >
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    backgroundColor: copiedEmail ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.05)",
                    border: copiedEmail ? "1px solid #10b981" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: copiedEmail ? "#34d399" : "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {copiedEmail ? "✓ Copied" : "Copy Email"}
                </button>
              </div>

              <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                PRIMARY INBOX
              </span>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                <a
                  href={`mailto:${socialLinks.email}`}
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  {socialLinks.email}
                </a>
              </h4>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="bento-card tilt-card" style={{ padding: "28px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(229, 184, 105, 0.15)",
                    border: "1px solid rgba(229, 184, 105, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffd58a",
                    fontSize: "1.2rem",
                  }}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </div>

                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(37, 211, 102, 0.15)",
                    border: "1px solid rgba(37, 211, 102, 0.3)",
                    color: "#25d366",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    textDecoration: "none",
                  }}
                >
                  Chat on WhatsApp
                </a>
              </div>

              <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                DIRECT PHONES / WHATSAPP
              </span>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                <a href={`tel:${socialLinks.phone}`} style={{ color: "#ffffff", textDecoration: "none" }}>{socialLinks.phone}</a>
                <span style={{ color: "var(--text-muted)", margin: "0 8px" }}>|</span>
                <a href={`tel:${socialLinks.phoneAlt}`} style={{ color: "var(--accent-gold)", textDecoration: "none" }}>{socialLinks.phoneAlt}</a>
              </h4>
            </div>

            {/* Location & Status Card */}
            <div className="bento-card tilt-card" style={{ padding: "28px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(122, 167, 199, 0.15)",
                  border: "1px solid rgba(122, 167, 199, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9dc4df",
                  fontSize: "1.2rem",
                  marginBottom: "14px",
                }}
              >
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                CURRENT LOCATION & TIMEZONE
              </span>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                {personalDetails.location}
              </h4>

              <div style={{ marginTop: "14px" }}>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span>{personalDetails.statusBadge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="bento-card tilt-card" style={{ padding: "36px" }}>
            {isSubmitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "2px solid #10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#10b981",
                    fontSize: "2rem",
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                </div>

                <h3 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700 }}>
                  Message Received!
                </h3>

                <p style={{ color: "var(--text-secondary)", maxWidth: "420px", lineHeight: 1.6 }}>
                  Thank you for reaching out, <strong style={{ color: "#ffffff" }}>{formData.name}</strong>. I will review your inquiry and get back to you within 24 hours.
                </p>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", projectScope: "", message: "" });
                  }}
                  className="btn-secondary"
                  style={{ marginTop: "12px" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Project Inquiry & Brief
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "24px" }}>
                  Select the services you require and share a brief overview of your vision.
                </p>

                {/* Service Selector Tags */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                    className="font-mono"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginBottom: "10px",
                    }}
                  >
                    SELECT SERVICE NEEDED //
                  </label>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {services.map((srv, idx) => {
                      const isSelected = selectedService === srv;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedService(srv)}
                          style={{
                            padding: "8px 14px",
                            borderRadius: "8px",
                            backgroundColor: isSelected ? "rgba(230, 87, 40, 0.2)" : "rgba(255, 255, 255, 0.04)",
                            border: isSelected ? "1px solid #e65728" : "1px solid rgba(255, 255, 255, 0.08)",
                            color: isSelected ? "#ff7243" : "var(--text-secondary)",
                            fontSize: "0.82rem",
                            fontFamily: "var(--font-mono)",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs: Name & Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <label
                      className="font-mono"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        marginBottom: "6px",
                      }}
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Thorne"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        backgroundColor: "var(--bg-input)",
                        border: "1px solid var(--border-subtle)",
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        fontFamily: "var(--font-body)",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-terracotta)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>

                  <div>
                    <label
                      className="font-mono"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        marginBottom: "6px",
                      }}
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        backgroundColor: "var(--bg-input)",
                        border: "1px solid var(--border-subtle)",
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        fontFamily: "var(--font-body)",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-terracotta)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>
                </div>

                {/* Project Scope / Timeline */}
                <div style={{ marginBottom: "16px" }}>
                  <label
                    className="font-mono"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    ESTIMATED BUDGET / TIMELINE (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $2k - $5k / 2-4 Weeks"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      backgroundColor: "var(--bg-input)",
                      border: "1px solid var(--border-subtle)",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      fontFamily: "var(--font-body)",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-terracotta)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>

                {/* Message Textarea */}
                <div style={{ marginBottom: "28px" }}>
                  <label
                    className="font-mono"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    PROJECT MESSAGE / VISION *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product, objectives, and any specific tech stack preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      backgroundColor: "var(--bg-input)",
                      border: "1px solid var(--border-subtle)",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-terracotta)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "16px" }}
                >
                  <span>Transmit Inquiry</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
