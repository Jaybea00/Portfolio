import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Server,
  Database,
  Briefcase,
  Download,
  Monitor,
  Globe,
  HardDrive,
  Clock,
  Terminal,
} from "lucide-react";
import "./hero.css";

// Custom hook for matrix animation
const useMatrixAnimation = (canvasId) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 10, 20, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0fc";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [canvasId]);
};

// Custom hook for typing animation
const useTypingEffect = (text, speed = 30) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

// Custom hook for glitch effect
const useGlitchEffect = (interval = 5000, duration = 200) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      const timeout = setTimeout(() => setIsGlitching(false), duration);
      return () => clearTimeout(timeout);
    }, interval);

    return () => clearInterval(glitchInterval);
  }, [interval, duration]);

  return isGlitching;
};

// Skill item component
const SkillItem = React.memo(({ icon: Icon, label, variant }) => (
  <div className="skill-item">
    <div className={`icon-container ${variant}`}>
      <Icon size={18} aria-hidden="true" />
    </div>
    <span>{label}</span>
  </div>
));

SkillItem.displayName = "SkillItem";

// Stat card component
const StatCard = React.memo(({ number, label }) => (
  <div className="stat-card">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
));

StatCard.displayName = "StatCard";

// Social link component
const SocialLink = React.memo(
  ({ href, icon: Icon, variant, label, ...props }) => (
    <a href={href} className="social-link" aria-label={label} {...props}>
      <div className={`social-icon ${variant}`}>
        <Icon size={18} aria-hidden="true" />
      </div>
    </a>
  )
);

SocialLink.displayName = "SocialLink";

const Hero = () => {
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const titleRef = useRef(null);

  // Custom hooks
  const isGlitching = useGlitchEffect(5000, 200);
  useMatrixAnimation("matrix-canvas");

  const fullText =
    "I create modern web solutions that solve real business problems. With expertise in both frontend and backend technologies, I build applications that are intuitive, scalable, and maintainable.";
  const { displayText, isComplete } = useTypingEffect(fullText, 30);

  // Memoized data
  const skills = useMemo(
    () => [
      { icon: Monitor, label: "Frontend", variant: "primary" },
      { icon: Server, label: "Backend", variant: "secondary" },
      { icon: Database, label: "Database", variant: "tertiary" },
      { icon: Terminal, label: "DevOps", variant: "quaternary" },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { number: "5+", label: "Years_XP" },
      { number: "50+", label: "Projects_Done" },
      { number: "20+", label: "Clients_Served" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        href: "https://github.com/DebrainStark",
        icon: Github,
        variant: "github",
        label: "GitHub Profile",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        href: "https://www.linkedin.com/in/otoibhi-anthony-b-eng-gnse-970049161",
        icon: Linkedin,
        variant: "linkedin",
        label: "LinkedIn Profile",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        href: "mailto:anuoluwaotoibhi@gmail.com",
        icon: Mail,
        variant: "mail",
        label: "Send Email",
      },
    ],
    []
  );

  // Event handlers
  const handleProjectsClick = useCallback((e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleDownloadCV = useCallback(() => {
    // Analytics or tracking can be added here
    console.log("CV download initiated");
  }, []);

  return (
    <section
      id="home"
      className={`hero-section ${isGlitching ? "glitch" : ""}`}
      ref={heroRef}
      aria-label="Hero section"
    >
      {/* Matrix code background */}
      <canvas
        id="matrix-canvas"
        className="matrix-background"
        aria-hidden="true"
      />

      {/* Background simplified to subtle gradient */}
      <div className="hero-background" aria-hidden="true">
        <div className="gradient-surface" />
      </div>

      <div className="container">
        <div className="hero-modern">
          {/* Profile Column */}
          <div className="hero-modern__media" ref={profileRef}>
            <div className="avatar">
              <img
                src="/logoo.png"
                alt="Akintayo Ajibola - Full Stack Developer"
                loading="eager"
                width="200"
                height="200"
              />
            </div>
            <div
              className="skill-chips"
              role="list"
              aria-label="Technical skills"
            >
              {skills.map((skill, index) => (
                <span
                  key={`${skill.label}-${index}`}
                  className={`chip chip--${skill.variant}`}
                  role="listitem"
                >
                  <skill.icon size={16} aria-hidden="true" />
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Content Column */}
          <div className="hero-modern__content">
            <div className="role-pill" role="banner">
              <span className="role-dot" aria-hidden="true"></span>
              Full-Stack Developer
            </div>

            <header className="hero-modern__title" ref={titleRef}>
              <h1>
                Hi, I'm <span className="accent">Akintayo Ajibola</span>
              </h1>
            </header>

            <div
              className="hero-modern__desc"
              role="complementary"
              aria-label="About me"
            >
              <p className="description">
                <span
                  className={`cursor ${isComplete ? "blink" : ""}`}
                  aria-hidden="true"
                >
                  █
                </span>
                <span aria-live="polite">{displayText}</span>
              </p>
            </div>

            <div
              className="stats"
              role="region"
              aria-label="Professional statistics"
            >
              {stats.map((stat, index) => (
                <div key={`${stat.label}-${index}`} className="stat">
                  <span className="stat__num">{stat.number}</span>
                  <span className="stat__label">
                    {stat.label.replace("_", " ")}
                  </span>
                </div>
              ))}
            </div>

            <div className="cta" role="navigation" aria-label="Main actions">
              <a
                href="#projects"
                className="btn btn--primary"
                onClick={handleProjectsClick}
                aria-label="View my projects"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                className="btn btn--ghost"
                download
                onClick={handleDownloadCV}
                aria-label="Download my CV/Resume"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>

            <div
              className="social"
              role="navigation"
              aria-label="Social media links"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={`social-${index}`}
                  href={link.href}
                  aria-label={link.label}
                  target={link.target}
                  rel={link.rel}
                  className={`social__item social__item--${link.variant}`}
                >
                  <link.icon size={18} aria-hidden="true" />
                </a>
              ))}
              <div
                className="availability"
                role="status"
                aria-label="Current availability"
              >
                <span className="availability__dot" aria-hidden="true" />
                <span>Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          background: #0c0f1a;
        }
        .matrix-background {
          position: absolute;
          inset: 0;
          opacity: 0.05;
        }
        .hero-background {
          position: absolute;
          inset: 0;
        }
        .gradient-surface {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              1200px 600px at 80% 20%,
              rgba(255, 122, 89, 0.2),
              transparent 60%
            ),
            radial-gradient(
              1000px 500px at 10% 80%,
              rgba(99, 102, 241, 0.18),
              transparent 60%
            );
          filter: blur(0.5px);
        }
        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 16px 72px;
        }

        .hero-modern {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .hero-modern {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 48px;
          }
        }

        /* Media */
        .hero-modern__media {
          display: grid;
          justify-items: center;
          gap: 16px;
        }
        .avatar {
          width: 200px;
          height: 200px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.06) inset;
          background: rgba(255, 255, 255, 0.02);
        }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          color: #eef2ff;
          background: rgba(124, 132, 168, 0.12);
          border: 1px solid rgba(124, 132, 168, 0.18);
        }
        .chip svg {
          opacity: 0.9;
        }
        .chip--primary {
          background: rgba(255, 122, 89, 0.14);
          border-color: rgba(255, 122, 89, 0.28);
          color: #ffd7ce;
        }
        .chip--secondary {
          background: rgba(139, 92, 246, 0.14);
          border-color: rgba(139, 92, 246, 0.28);
          color: #e9ddff;
        }
        .chip--tertiary {
          background: rgba(245, 158, 11, 0.14);
          border-color: rgba(245, 158, 11, 0.28);
          color: #fee6b7;
        }
        .chip--quaternary {
          background: rgba(99, 102, 241, 0.14);
          border-color: rgba(99, 102, 241, 0.28);
          color: #dee3ff;
        }

        /* Content */
        .hero-modern__content {
          display: grid;
          gap: 16px;
        }
        .role-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          background: rgba(124, 132, 168, 0.12);
          color: #b6c0e0;
          border-radius: 999px;
          width: fit-content;
          border: 1px solid rgba(124, 132, 168, 0.18);
        }
        .role-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff7a59;
          box-shadow: 0 0 0 4px rgba(255, 122, 89, 0.18);
        }
        .hero-modern__title h1 {
          font-size: 40px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #eef2ff;
          margin: 0;
        }
        .accent {
          color: #ff7a59;
        }
        .hero-modern__desc .description {
          color: #b6c0e0;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }
        .cursor {
          margin-right: 6px;
          color: #ff7a59;
          opacity: 0.85;
        }
        .blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .stat {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 14px 16px;
          text-align: center;
        }
        .stat__num {
          display: block;
          font-weight: 800;
          font-size: 22px;
          color: #eef2ff;
        }
        .stat__label {
          display: block;
          font-size: 12px;
          color: #b6c0e0;
          text-transform: capitalize;
        }

        .cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
        }
        .btn--primary {
          background: #ff7a59;
          color: #0c0f1a;
          box-shadow: 0 10px 25px rgba(255, 122, 89, 0.22);
        }
        .btn--primary:hover {
          background: #ff8f74;
        }
        .btn--ghost {
          background: transparent;
          color: #eef2ff;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .btn--ghost:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .social {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .social__item {
          display: inline-flex;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #b6c0e0;
          background: rgba(124, 132, 168, 0.12);
          border: 1px solid rgba(124, 132, 168, 0.18);
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .social__item:hover {
          color: #eef2ff;
          background: rgba(124, 132, 168, 0.18);
        }
        .availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #b6c0e0;
          margin-left: 4px;
        }
        .availability__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.18);
        }

        @media (max-width: 576px) {
          .container {
            padding: 96px 12px 56px;
          }
          .hero-modern__title h1 {
            font-size: 32px;
          }
          .stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
