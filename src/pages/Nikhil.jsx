import { useEffect, useMemo, useRef, useState } from "react";
import "./Nikhil.css";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform, easeInOut, easeOut } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";





export default function Nikhil() {

  // ================= INTRO ANIMATION =================
  const greetings = useMemo(
    () => [
      "Hi, I'm Nikhil",
      "Welcome to My Space",
      "I Build for the Web",
      "Let’s Create Something Cool",
      "Scroll to Explore",
    
    ],
    []
  );
  const [introIndex, setIntroIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (!showIntro) return;

    if (introIndex < greetings.length - 1) {
      const id = setInterval(() => {
        setIntroIndex((i) => i + 1);
      }, 900);
      return () => clearInterval(id);
    } else {
      const t = setTimeout(() => {
        setShowIntro(false);
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [introIndex, greetings.length, showIntro]);

  
  
//==================about=====================

const aboutRef = useRef(null);

const { scrollYProgress: aboutProgress } = useScroll({
  target: aboutRef,
  offset: ["start end", "end start"], 
});
const aboutScale = useTransform(aboutProgress, [0.2, 0.6], [1, 0.95]);
const imgClip = useTransform(
  aboutProgress,
  [0.25, 0.45],
  [
    "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ]
);


// ================= project  =================
  const sceneRef = useRef(null);
  const projects = useMemo(
  () => [
    {
      title: "Weather APP",
      link: "https://weather-app-two-mocha-26.vercel.app/",
      bgColor: "#5a7588",
      image: "/Nikhil_project_2.png",
    },
    {
      title: "Todo APP",
      link: "https://todo-list-qd8k.vercel.app/",
      bgColor: "#dc4c3e",
      image: "/Nikhil_project_1.png",
    },
    {
      title: "Spylt clone",
      link: "https://spylt-clone-chi.vercel.app/",
      bgColor: "#a26833",
      image: "/Nikhil_project_3.png",
    },
  ],
  []
);

const {scrollYProgress} = useScroll({
    target:sceneRef,
    offset: ["start start", "end end" ]
})

const [activeIdx, setActiveIdx] = useState(0);

useMotionValueEvent(scrollYProgress, "change", (v)=>{
  if (v < 0.65) {
    setActiveIdx(0); 
  } else if (v < 0.73) {
    setActiveIdx(1); 
  } else {
    setActiveIdx(2); 
  }
});

const activeProject = projects[activeIdx]

// ================= SOCIAL LINKS =================
  const socialLinks = [ 
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nikhil-goyal-346740322/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/Niktechh",
    },
  ];

//================= GLOW VARIANT =================
  const glowVariant = {
    initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
    hover: {
      scale: 1.2,
      y: -3,
      filter:
        "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
  };

// ================= ROLES =================
  const roles = useMemo(() => ["Web Developer", "MERN Stack Developer"], []);

  const [index, setIndex] = useState(0);
  const [subindex, setSubindex] = useState(0);
  const [deleting, setDeleting] = useState(false);

// ================= REFS =================
  const cursorRef = useRef(null);
  const canvasRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

// ================= SKILLS SCROLL ANIMATION =================
  const skillsCards = [
    { id: 1, img: "/Nikhil_react.png", x: -380, r: -10 },
    { id: 2, img: "/Nikhil_nodejs.png", x: -190, r: -6 },
    { id: 3, img: "/Nikhil_mongodb.png", x: 0, r: 0 },
    { id: 4, img: "/Nikhil_tailwind.png", x: 190, r: 6 },
    { id: 5, img: "/Nikhil_gsap.png", x: 380, r: 10 },
  ];

  const { scrollYProgress: skillsProgress } = useScroll({
    target: skillsRef,
    offset: ["start start", "end end"]
  });

// Create transform values for each card - appear from bottom, stay at center
// Cards appear sequentially with overlapping ranges so they stay visible
  const card1Y = useTransform(skillsProgress, [0, 0.15, 0.85], [400, 0, 0]);
  const card2Y = useTransform(skillsProgress, [0.12, 0.27, 0.85], [400, 0, 0]);
  const card3Y = useTransform(skillsProgress, [0.24, 0.39, 0.85], [400, 0, 0]);
  const card4Y = useTransform(skillsProgress, [0.36, 0.51, 0.85], [400, 0, 0]);
  const card5Y = useTransform(skillsProgress, [0.48, 0.63, 0.85], [400, 0, 0]);

  const card1Opacity = useTransform(skillsProgress, [0, 0.15, 0.85], [0, 1, 1]);
  const card2Opacity = useTransform(skillsProgress, [0.12, 0.27, 0.85], [0, 1, 1]);
  const card3Opacity = useTransform(skillsProgress, [0.24, 0.39, 0.85], [0, 1, 1]);
  const card4Opacity = useTransform(skillsProgress, [0.36, 0.51, 0.85], [0, 1, 1]);
  const card5Opacity = useTransform(skillsProgress, [0.45, 0.50, 0.85], [0, 1, 1]);

  const cardTransforms = [
    { y: card1Y, opacity: card1Opacity },
    { y: card2Y, opacity: card2Opacity },
    { y: card3Y, opacity: card3Opacity },
    { y: card4Y, opacity: card4Opacity },
    { y: card5Y, opacity: card5Opacity },
  ];

  const [showParticles, setShowParticles] = useState(false);

// ================= TYPING EFFECT =================
  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!deleting && subindex < current.length) {
      timeout = setTimeout(() => setSubindex((v) => v + 1), 60);
    } else if (!deleting && subindex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && subindex > 0) {
      timeout = setTimeout(() => setSubindex((v) => v - 1), 40);
    } else if (deleting && subindex === 0) {
      setDeleting(false);
      setIndex((v) => (v + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [subindex, index, deleting, roles]);

//================== CUSTOM CURSOR =================
  useEffect(() => {
    const moveHandler = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

//================= OBSERVER =================
  useEffect(() => {
    // Only set up observer after intro is done
    if (showIntro) return;

    let homeVisible = false;
    let contactVisible = false;

    const checkVisibility = () => {
      if (!homeRef.current || !contactRef.current) return;

      const homeRect = homeRef.current.getBoundingClientRect();
      const contactRect = contactRef.current.getBoundingClientRect();

      homeVisible = homeRect.top < window.innerHeight && homeRect.bottom > 0;
      contactVisible = contactRect.top < window.innerHeight && contactRect.bottom > 0;

      setShowParticles(homeVisible || contactVisible);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === homeRef.current) {
            homeVisible = entry.isIntersecting;
          }
          if (entry.target === contactRef.current) {
            contactVisible = entry.isIntersecting;
          }
        });
        setShowParticles(homeVisible || contactVisible);
      },
      { threshold: 0.1 }
    );

  //== Small delay to ensure refs are available
    setTimeout(() => {
      if (homeRef.current) observer.observe(homeRef.current);
      if (contactRef.current) observer.observe(contactRef.current);
      checkVisibility(); // Check immediately
    }, 100);

  // Also check on scroll
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [showIntro]); // Re-run when intro finishes

//================== PARTICLES =================
  useEffect(() => {
    if (!showParticles || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 50;
    let animationId;

    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(255,255,255,0.8)";

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        this.draw();
      }
    }

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [showParticles]);

//================= CLEAR CANVAS =================
  useEffect(() => {
    if (!showParticles && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [showParticles]);

  return (
    <>
      {/* ================= INTRO ================= */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro-overlay"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <motion.h1
              key={introIndex}
              className="intro-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.12 }}
            >
              {greetings[introIndex]}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN CONTENT ================= */}
      {!showIntro && (
        <>
          {showParticles && <canvas ref={canvasRef} className="particles-canvas" />}

          {/*  =================homesection ================= */}

          <section ref={homeRef} id="home" className="home-section">
            <div className="home-gradients">
              <div className="home-gradient-top" />
              <div className="home-gradient-bottom" />
            </div>

            <div className="home-inner">
              <div className="home-text-container">
                <div className="home-text-inner">

                  <motion.div
                    className="role-wrapper"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="role-text-offset">
                      {roles[index].substring(0, subindex)}
                      <span className="animate-pulse">|</span>
                    </span>
                  </motion.div>

                  <motion.h1
                    className="home-title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <span className="hello-prefix">Hello I'm&nbsp;</span>
                    <br />
                    <span className="home-name">Nikhil Goyal</span>
                  </motion.h1>

                  <motion.p
                    className="home-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    A MERN stack developer focused on building modern, scalable,
                    and interactive web applications. Always learning,
                    experimenting, and improving through hands-on projects.
                  </motion.p>

                  <motion.div
                    className="home-button-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <a href="#projects" className="home-button">
                      View My Work
                    </a>
                  </motion.div>

                  <div className="home-social-links">
                    {socialLinks.map(({ icon, label, href }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        variants={glowVariant}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        className="home-social-icon"
                      >
                        {icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="home-image-container">
                <motion.img
                  src="/Nikhil_spaceman.png"
                  alt="spaceman"
                  className="home-image"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: [0, -20, 0] }}
                  transition={{
                    opacity: { delay: 0.6, duration: 0.8 },
                    y: {
                      delay: 0.6,
                      duration: 2.4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    },
                  }}
                />
              </div>
            </div>
          </section>
          {/* ================= About section ================= */}
<section ref={aboutRef} id="about" className="section nikhil-full-section about-section">
  <motion.div
    className="about-inner"
    style={{ scale: aboutScale }}
  >
    <motion.h2
      className="about-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      About Me
    </motion.h2>

    <div className="about-content">
      <motion.img
        src="/Nikhil_image.png"
        alt="about"
        className="about-img"
        style={{ clipPath: imgClip }}
      />

      <div className="about-text-wrapper">
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Obsessed with building fast, intuitive apps—from pixel-perfect React UIs
          to bulletproof serverless backends. Every line of code is a promise: quality that
          users feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="about-hobbies-title">When I'm not shipping:</h3>
          <ul className="about-hobbies-list">
            <li>⚡ Open-sourcing my latest experiment (or hacking on yours)</li>
            <li>🧗 Rock climbing (problem-solving with real stakes)</li>
            <li>🎮 🕹️ Clutching rounds while CI pipelines pass (multitasking at its finest)</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>

          {/* ================= Skills section ================= */}

          <section className="section nikhil-full-section skills-section-wrapper">
            <div ref={skillsRef} className="skillsWrapper">
              <div className="skillsSticky">
                <div className="skillsBgText">MY SKILLS</div>
                <div className="skillsCards">
                  {skillsCards.map((card, idx) => (
                    <motion.div
                      key={card.id}
                      className="skillsCard"
                      style={{
                        x: card.x,
                        y: cardTransforms[idx].y,
                        opacity: cardTransforms[idx].opacity,
                        rotate: card.r,
                      }}
                    >
                      <img src={card.img} alt={`Skill ${card.id}`} className="skillsImg" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>


          

         

          {/* ================= Projects section ================= */}
          <section id="projects" ref={sceneRef} className="section nikhil-full-section"
          style={{
            height:"300vh",
            backgroundColor:activeProject.bgColor,
            transition: "background-color 400ms ease",
            color: "#ffffff",
            position: "relative"
          }}
          >
            <div className="projects-sticky-container">
              <h2 className="projects-title">
                My work
              </h2>
            <div className="projects-content-wrapper">
              {projects.map((project,idx)=> (
                <div key={project.title}
                className={`project-item ${activeIdx === idx ? "project-item-active" : "project-item-inactive"}`}
                  style={{
                    width:"85%",
                    maxWidth:"12000px"
                  }}
                >
                  <AnimatePresence mode="wait">
                    {activeIdx === idx && (
                      <motion.h3
                      key={project.title}
                      initial= {{opacity:0, y:-30}}
                      animate= {{opacity:1, y:0}}
                      exit = {{opacity:0, y:30}}
                      transition={{duration:0.5, ease:easeOut}}
                      className="project-title-text"
                      style={{
                        zIndex:5,
                        textAlign:"left",

                      }}
                      >
                        {project.title}
                      </motion.h3>
                    )}

                  </AnimatePresence>
                  <div className="project-image-container"
                  style={{
                    zIndex:10,
                  }}
                  >
                    <img src={project.image} alt={project.title } 
                    className="project-image"
                    style={{
                      position:"relative",
                      zIndex:10,
                      filter:"drop-shadow(0, 16px 40px rgba(0,0,0,0.65))",
                    }}
                    loading="lazy"
                     />

                     
                  </div>

                </div>
              ))}
            </div>
              <motion.div 
                className="project-button-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <motion.a
                  href={activeProject?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${activeProject?.title}`}
                  className="project-view-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </motion.div>
            </div>

          </section>


          {/* ================= Contact section ================= */}

          <section ref={contactRef} id="contact" className="section Nikhil-contact">
            <div className="contact-container">
              <div className="contact-header">
                <div className="contact-title-wrapper">
                  <h2 className="contact-title">CONTACT</h2>
                </div>
                  <div className="contact-title-line"></div>
                <div className="contact-intro">
                  <p className="contact-intro-line">GOT A QUESTION, HOW OR PROJECT IDEA?</p>
                  <p className="contact-intro-line">WE'D LOVE TO HEAR FROM YOU AND DISCUSS FURTHER!</p>
                </div>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-label">E-MAIL:</div>
                  <div className="contact-value">nikhilgoyal5252@gmail.com</div>
                </div>
                <div className="contact-title-line"></div>

                <div className="contact-item">
                  <div className="contact-label">PHONE:</div>
                  <div className="contact-value">+91 9355789345</div>
                </div>
                <div className="contact-title-line"></div>

                <div className="contact-item">
                  <div className="contact-label">SOCIAL MEDIA:</div>
                  <div className="contact-social-list">
                    <a href="https://www.linkedin.com/in/nikhil-goyal-346740322/" target="_blank" rel="noopener noreferrer" className="contact-social-item">
                      {"{ LINKEDIN }"}
                    </a>
                    <a href="https://github.com/Niktechh" target="_blank" rel="noopener noreferrer" className="contact-social-item">
                      {"{ GITHUB }"}
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </section>

          <div ref={cursorRef} className="custom-cursor">
            <div className="cursor-glow" />
          </div>
        </>
      )}
    </>
  );
}
