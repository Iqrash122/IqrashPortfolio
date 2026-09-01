import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Credentials", href: "#credentials" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        transition: "all 0.35s ease",
        backgroundColor: isScrolled ? "rgba(10, 10, 14, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(18px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        padding: isScrolled ? "14px 0" : "22px 0",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brandmark */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #e65728 0%, #d84514 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "1rem",
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              boxShadow: "0 4px 15px rgba(230, 87, 40, 0.4)",
            }}
          >
            IA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="font-display"
              style={{
                fontSize: "1.15rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              IQRASH AHMED<span style={{ color: "var(--accent-terracotta)" }}>.</span>
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: "0.68rem",
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
              }}
            >
              FULL STACK & 3D DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff7243")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Pill & Action Button */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "16px",
          }}
          className="desktop-actions"
        >
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>Available</span>
          </div>

          <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.88rem" }}>
            <span>Let's Talk</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.8rem" }}></i>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: "#ffffff",
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
        >
          <i className={mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#0d0d12",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "24px 20px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "var(--text-primary)",
                textDecoration: "none",
                fontSize: "1.05rem",
                fontWeight: 600,
                padding: "8px 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Let's Talk</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
