import React, { useState, useEffect, useRef } from "react";
import { 
  Code, 
  Server, 
  Database, 
  Wrench,
  Terminal,
  Zap,
  Cpu,
  HardDrive,
  Globe,
  Shield,
  Rocket,
  Coffee,
} from "lucide-react";

const CyberpunkSkills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [scanningPhase, setScanningPhase] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const skillsRef = useRef(null);

  const skillCategories = {
    frontend: {
      icon: <Code size={20} />,
      color: "#06ffa5",
      skills: [
        { name: "React", level: 95, icon: <Code size={16} /> },
        { name: "TypeScript", level: 90, icon: <Code size={16} /> },
        { name: "Next.js", level: 88, icon: <Code size={16} /> },
        { name: "CSS/SCSS", level: 92, icon: <Code size={16} /> },
        { name: "Tailwind", level: 90, icon: <Code size={16} /> },
        { name: "Redux", level: 85, icon: <Code size={16} /> },
      ],
    },
    backend: {
      icon: <Server size={20} />,
      color: "#ff006e",
      skills: [
        { name: "Node.js", level: 90, icon: <Server size={16} /> },
        { name: "Express", level: 88, icon: <Server size={16} /> },
        { name: "GraphQL", level: 85, icon: <Server size={16} /> },
        { name: "REST APIs", level: 92, icon: <Server size={16} /> },
        { name: "Python", level: 82, icon: <Server size={16} /> },
        { name: "Java", level: 80, icon: <Server size={16} /> },
      ],
    },
    database: {
      icon: <Database size={20} />,
      color: "#ff9500",
      skills: [
        { name: "MongoDB", level: 90, icon: <Database size={16} /> },
        { name: "PostgreSQL", level: 86, icon: <Database size={16} /> },
        { name: "Redis", level: 82, icon: <Database size={16} /> },
        { name: "Firebase", level: 84, icon: <Database size={16} /> },
        { name: "MySQL", level: 80, icon: <Database size={16} /> },
        { name: "Elasticsearch", level: 75, icon: <Database size={16} /> },
      ],
    },
    devops: {
      icon: <Wrench size={20} />,
      color: "#7209b7",
      skills: [
        { name: "Git", level: 92, icon: <Wrench size={16} /> },
        { name: "Docker", level: 85, icon: <Wrench size={16} /> },
        { name: "CI/CD", level: 86, icon: <Wrench size={16} /> },
        { name: "AWS", level: 80, icon: <Wrench size={16} /> },
        { name: "Linux", level: 88, icon: <Wrench size={16} /> },
        { name: "Kubernetes", level: 75, icon: <Wrench size={16} /> },
      ],
    },
  };

  const scanningMessages = [
    "Initializing skill matrix...",
    "Scanning neural pathways...",
    "Analyzing code repositories...",
    "Detecting expertise levels...",
    "Calibrating skill meters...",
    "Matrix ready for display",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScanningPhase((prev) => {
        if (prev < scanningMessages.length - 1) {
          return prev + 1;
        } else {
          setIsScanning(false);
          clearInterval(interval);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsScanning(true);
    setScanningPhase(0);

    setTimeout(() => {
      setIsScanning(false);
    }, 1000);
  };

  return (
    <section id="skills" className="cyber-skills">
      {/* Cyberpunk background elements */}
      <div className="cyber-grid" />
      <div className="floating-particles" />

      <div className="cyber-container">
        {/* Header */}
        <div className="cyber-header">
          <div className="title-prefix">SKILL_MATRIX.exe</div>
          <h2 className="title-main">Technical Arsenal</h2>
          <div className="cyber-subtitle">
            {isScanning
              ? scanningMessages[scanningPhase]
              : "Matrix operational"}
          </div>
      </div>
      
        {/* Category Navigation */}
        <div className="cyber-tabs">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`cyber-tab ${
                activeCategory === key ? "is-active" : ""
              }`}
              onClick={() => handleCategoryChange(key)}
              style={{
                borderColor:
                  activeCategory === key
                    ? category.color
                    : "rgba(0, 255, 204, 0.1)",
                color: activeCategory === key ? category.color : "#94a3b8",
              }}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-label">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="skills-matrix" ref={skillsRef}>
          {isScanning ? (
            <div className="scanning-overlay">
              <div className="scanning-spinner" />
              <div className="scanning-text">
                Analyzing {activeCategory} skills...
              </div>
            </div>
          ) : (
            <div className="skills-content">
              {/* Skill Tracks */}
              <div className="skill-tracks">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-track"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="skill-header">
                      <div
                        className="skill-icon"
                        style={{ color: skillCategories[activeCategory].color }}
                      >
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-level">{skill.level}%</div>
          </div>
        </div>
                    <div className="skill-meter">
                      <div
                        className="skill-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skillCategories[activeCategory].color}, rgba(255, 255, 255, 0.8))`,
                        }}
                      />
                    </div>
                </div>
                ))}
              </div>
              
              {/* Skill Stats */}
              <div className="skill-stats">
                <div className="stat-card">
                  <div
                    className="stat-icon"
                    style={{ color: skillCategories[activeCategory].color }}
                  >
                    <Zap size={20} />
                            </div>
                  <div className="stat-content">
                    <div className="stat-value">
                      {Math.round(
                        skillCategories[activeCategory].skills.reduce(
                          (acc, skill) => acc + skill.level,
                          0
                        ) / skillCategories[activeCategory].skills.length
                      )}
                      %
                          </div>
                    <div className="stat-label">Average Proficiency</div>
                        </div>
                      </div>

                <div className="stat-card">
                  <div
                    className="stat-icon"
                    style={{ color: skillCategories[activeCategory].color }}
                  >
                    <Rocket size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">
                      {skillCategories[activeCategory].skills.length}
                    </div>
                    <div className="stat-label">Skills Mastered</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .cyber-skills {
          background: linear-gradient(
            135deg,
            #0a0e17 0%,
            #1a0b2e 50%,
            #16213e 100%
          );
          color: #d1e3ff;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              rgba(0, 255, 204, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 255, 204, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 0;
          opacity: 0.5;
          animation: gridPulse 4s ease-in-out infinite;
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #ff006e,
              transparent
            ),
            radial-gradient(2px 2px at 40px 70px, #06ffa5, transparent),
            radial-gradient(1px 1px at 90px 40px, #ff9500, transparent),
            radial-gradient(1px 1px at 130px 80px, #7209b7, transparent);
          background-size: 200px 200px;
          animation: float 20s linear infinite;
          opacity: 0.3;
          z-index: 0;
        }
        
        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
          }
        }

        .cyber-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .cyber-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .title-prefix {
          display: block;
          font-size: 1rem;
          font-family: "Courier New", monospace;
          color: #06ffa5;
          margin-bottom: 0.5rem;
          opacity: 0.8;
          animation: typewriter 3s steps(30) infinite;
        }

        @keyframes typewriter {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0.5;
          }
        }

        .title-main {
          background: linear-gradient(
            90deg,
            #ff006e,
            #06ffa5,
            #ff9500,
            #7209b7
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          animation: gradientShift 3s ease-in-out infinite;
          text-shadow: 0 0 20px rgba(255, 0, 110, 0.5);
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .cyber-subtitle {
          color: #94a3b8;
          font-family: "Courier New", monospace;
          margin-top: 1rem;
          animation: pulse 2s ease-in-out infinite;
          min-height: 1.5rem;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        .cyber-tabs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 4px;
          border: 1px solid rgba(0, 255, 204, 0.1);
        }

        .cyber-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 255, 204, 0.1);
          border-radius: 4px;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: "Courier New", monospace;
          font-weight: 600;
        }

        .cyber-tab:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 255, 204, 0.3);
        }

        .cyber-tab.is-active {
          background: rgba(0, 0, 0, 0.9);
          box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
        }

        .tab-icon {
          display: flex;
          align-items: center;
        }

        .tab-label {
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .skills-matrix {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 8px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          min-height: 400px;
          position: relative;
        }
        
        .scanning-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          gap: 1rem;
        }

        .scanning-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(0, 255, 204, 0.3);
          border-top: 3px solid #06ffa5;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .scanning-text {
          color: #06ffa5;
          font-family: "Courier New", monospace;
          font-size: 1.1rem;
        }

        .skills-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .skills-content {
            grid-template-columns: 1fr;
          }
        }

        .skill-tracks {
          display: grid;
          gap: 1.5rem;
        }

        .skill-track {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 255, 204, 0.1);
          border-radius: 6px;
          padding: 1rem;
          animation: slideInUp 0.6s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(0, 255, 204, 0.1);
          border-radius: 6px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
        }
        
        .skill-name {
          font-weight: 700;
          font-size: 1.1rem;
          color: #e2e8f0;
        }

        .skill-level {
          font-family: "Courier New", monospace;
          color: #06ffa5;
          font-weight: 600;
        }

        .skill-meter {
          height: 8px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        
        .skill-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1.5s ease-out;
          position: relative;
        }
        
        .skill-fill::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .skill-stats {
          display: grid;
          gap: 1rem;
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 255, 204, 0.1);
          border-radius: 6px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(0, 255, 204, 0.1);
          border-radius: 8px;
        }

        .stat-content {
          display: grid;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: #e2e8f0;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  );
};

export default CyberpunkSkills;
