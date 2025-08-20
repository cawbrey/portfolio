import React from "react";

const TitleBar = ({ navLinks = [] }) => {
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    const offset = 80; // Height of the TitleBar
    const top = target.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px", // Internal padding for spacing
        backgroundColor: "#ffffff", // Background color for the title bar
        color: "#037583", // Text color
        borderBottomRightRadius: "30px",
        borderBottomLeftRadius: "30px",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.4)", // Optional: shadow for depth
      }}
    >
      {/* Left Section: Your Name */}
      <a
        onClick={(event) => handleNavClick(event, "#home")}
        style={{
          display: "flex",
          gap: "16px",
          color: "#037583",
          textDecoration: "none",
          fontSize: "32px",
          fontWeight: 1000,
          cursor: "pointer",
        }}
      >
        <img
          src="logo.png"
          style={{
            height: "40px",
            borderRadius: "30px",
          }}
        />
        Carter Awbrey
      </a>

      {/* Right Section: Navigation Links */}
      <nav style={{ display: "flex", gap: "24px" }}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={(event) => handleNavClick(event, link.href)}
            style={{
              color: "#037583",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TitleBar;
