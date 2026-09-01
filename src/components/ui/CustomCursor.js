import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Track interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".bento-card") ||
        target.closest(".tilt-card") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    // Smooth trailing animation loop
    let animId;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animId = requestAnimationFrame(animateTrailing);
    };

    animId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? "12px" : "8px",
          height: isHovered ? "12px" : "8px",
          borderRadius: "50%",
          backgroundColor: isHovered ? "#ff7243" : "#e65728",
          boxShadow: "0 0 12px rgba(230, 87, 40, 0.8)",
          transform: `translate(${position.x - (isHovered ? 6 : 4)}px, ${
            position.y - (isHovered ? 6 : 4)
          }px)`,
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />

      {/* Outer Trailing Ring */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? "50px" : "32px",
          height: isHovered ? "50px" : "32px",
          borderRadius: "50%",
          border: isHovered
            ? "1.5px solid rgba(229, 184, 105, 0.75)"
            : "1.5px solid rgba(230, 87, 40, 0.4)",
          backgroundColor: isHovered ? "rgba(230, 87, 40, 0.08)" : "transparent",
          boxShadow: isHovered ? "0 0 20px rgba(229, 184, 105, 0.3)" : "none",
          transform: `translate(${trailingPos.x - (isHovered ? 25 : 16)}px, ${
            trailingPos.y - (isHovered ? 25 : 16)
          }px)`,
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
