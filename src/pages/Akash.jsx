import React from "react";
import "./Akash.css";


const Akash = () => {
  return (
    <div className="akash-page">

      {/* Glow Background */}
      <div style={glowPurple}></div>
      <div style={glowBlue}></div>

      {/* HERO */}
<section className="akash-hero">
  <div className="akash-hero-inner">

  <img src="/akash.jpg" alt="Akash Das" style={profileImage} />


    <h1 style={name}>
      Akash <span style={nameAccent}>Das</span>
    </h1>

    <div style={underline}></div>

    <p style={tagline}>
      Frontend Developer • DevSource Community
    </p>
  </div>
</section>


      {/* ABOUT */}

  <section style={section}>
  <h2 style={heading}>About Me</h2>

  <div
    style={glassCard}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,0.25)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <p style={text}>
      I am a B.Tech IT student with a strong interest in building clean, responsive,
      and user-focused web interfaces. I believe in learning by building real projects
      and continuously improving through hands-on experience.
    </p>

    <div style={{ marginTop: "20px" }}>
      <p style={highlightLine}>
         <strong>DevSource Community Member</strong>
      </p>
      <p style={subText}>
        Learning, building & collaborating on real-world projects with a passionate developer community.
      </p>
    </div>

    <div style={{ marginTop: "18px" }}>
      <p style={highlightLine}>
         <strong>B.Tech in Information Technology – GGSIPU</strong>
      </p>
      <p style={subText}>
        2024 – 2028 | Focused on Web Development & Software Engineering
      </p>
    </div>
  </div>
</section>


      {/* SKILLS */}
      <section style={section}>
        <h2 style={heading}>Skills</h2>
        <div style={skillWrap}>
            {["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"].map(
  (skill) => (
    <span
      key={skill}
      style={skillPill}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(99,102,241,0.25)";
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(99,102,241,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {skill}
    </span>
  )
)}

          
        </div>
      </section>

      {/* PROJECTS */}
      <section style={section}>
        <h2 style={heading}>Projects</h2>
        <div style={projectGrid}>
          <div
  style={projectCard}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(99,102,241,0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>

            <h3>To-Do List App</h3>
            <p style={cardText}>Task manager using HTML, CSS and JS</p>
          </div>

          <div
  style={projectCard}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(99,102,241,0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>

            <h3>Weather App</h3>
            <p style={cardText}>Real-time weather using API</p>
          </div>

         <div
  style={projectCard}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(99,102,241,0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>

            <h3>Portfolio Website</h3>
            <p style={cardText}>Personal responsive portfolio</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section style={section}>
  <h2 style={heading}>Contact Me</h2>

  <div style={contactWrap}>
    <a
      href="https://github.com/I-akashdas"
      target="_blank"
      rel="noreferrer"
      style={contactCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(99,102,241,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span style={contactIcon}></span>
      <span>GitHub</span>
    </a>

    <a
  href="https://www.linkedin.com/in/akash-das-64a0b7329"
  target="_blank"
  rel="noreferrer"
  style={contactCard}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(59,130,246,0.35)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  <span style={contactIcon}></span>
  <span>LinkedIn</span>
</a>


    <a
  href="https://x.com/_iakashdas"
  target="_blank"
  rel="noreferrer"
  style={contactCard}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(29,161,242,0.35)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  <span style={contactIcon}>𝕏</span>
  <span>X (Twitter)</span>
</a>

  </div>
</section>

    </div>
  );
};

export default Akash;

/* ===== Styles ===== */

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #0f172a, #020617 70%)",
  color: "white",
  padding: "60px 20px",
  fontFamily: "Arial, sans-serif",
  position: "relative",
  overflow: "hidden",
};

const profileImage = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #60a5fa",
  marginBottom: "20px",
};

const highlightLine = {
  color: "#a5b4fc",
  fontSize: "15px",
  marginBottom: "4px",
};

const subText = {
  color: "#c7d2fe",
  fontSize: "14px",
  lineHeight: "1.6",
};


const glowPurple = {
  position: "absolute",
  top: "80px",
  left: "60px",
  width: "260px",
  height: "260px",
  background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)",
  filter: "blur(60px)",
};

const glowBlue = {
  position: "absolute",
  bottom: "80px",
  right: "60px",
  width: "260px",
  height: "260px",
  background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)",
  filter: "blur(60px)",
};

const hero = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "90px",
};;

const name = {
  fontSize: "52px",
  margin: "0",              
  background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const tagline = {
  color: "#c7d2fe",
  letterSpacing: "1px",
  fontSize: "15px",
  margin: "0",              
};

const section = {
  marginBottom: "70px",
  maxWidth: "900px",
  marginInline: "auto",
};

const heading = {
  fontSize: "28px",
  marginBottom: "20px",
  color: "#e0e7ff",
};

const glassCard = {
  padding: "28px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.18)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  transition: "all 0.3s ease",
};


const text = {
  color: "#e5e7eb",
  lineHeight: "1.8",
  fontSize: "15px",
};

const skillWrap = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const skillPill = {
  padding: "10px 18px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  fontSize: "14px",
};

const projectGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
};


const projectCard = {
  padding: "20px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};


const cardText = {
  color: "#cbd5f5",
  marginTop: "6px",
};

const footer = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "80px",
};

const footerLink = {
  color: "#a5b4fc",
  textDecoration: "none",
  fontWeight: "500",
};
 const contactWrap = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

const contactCard = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "14px 22px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#e0e7ff",
  textDecoration: "none",
  fontSize: "15px",
  transition: "all 0.3s ease",
};

const contactIcon = {
  fontSize: "20px",
};


const nameAccent = {
  color: "#60a5fa",
};

const underline = {
  width: "140px",
  height: "4px",
  background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
  marginTop: "16px",
  marginBottom: "22px",
  borderRadius: "4px",
};

const nameWrapper = {
  display: "inline-block",
  textAlign: "center",
};

const heroInner = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};


