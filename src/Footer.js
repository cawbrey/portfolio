import React from "react";

const Footer = () => {
    return (
        <footer
            style={{
                background: "#3c2c23",
                display: "flex",
                borderTopRightRadius: "30px",
                borderTopLeftRadius: "30px",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",

            }}
        >
            {/* Logo and Name Section */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <img
                    src="logo.png" // Replace with your logo path
                    alt="Logo"
                    style={{ height: "40px", marginRight: "10px",
                    borderRadius: "30px"}}
                />
                <h1 style={{ fontSize: "1.5rem", margin: 0, color: "#FFFFFF"}}>Carter Awbrey</h1>
            </div>

            {/* Social Links */}
            <div>
                <a
                    href="https://www.linkedin.com/in/cawbrey"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        margin: "0 15px",
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: "1.2rem",
                    }}
                >
                    <img src="linkedin.svg" alt="LinkedIn" style={{ height: "40px" }} />
                </a>
                <a
                    href="https://github.com/cawbrey"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        margin: "0 15px",
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: "1.2rem",
                    }}
                >
                    <img src="github.svg" alt="Github" style={{height: "40px"}}/>
                </a>
                <a
                    href="mailto:carterawb@gmail.com"
                    style={{
                        margin: "0 15px",
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: "1.2rem",
                    }}
                >
                    <img src="email.svg" alt="Email" style={{height: "40px"}}/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
