import React, { useState, useMemo } from "react";
import {
  Code,
  Coffee,
  BookOpen,
  Terminal,
  Github,
  Award,
  Server,
  Database,
  Cpu,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Flame,
  Compass,
  Zap,
  Heart,
} from "lucide-react";

const PlayfulAbout = () => {
  const [mode, setMode] = useState("serious");

  const modes = useMemo(
    () => ({
      serious: {
        title: "Professional Mode",
        description:
          "Full-stack developer focused on crafting fast, accessible products with thoughtful DX. I enjoy turning ambiguous ideas into reliable systems and delightful UIs.",
        highlight:
          "Recently: designing scalable frontends with React and TypeScript, building Node/Express APIs, and shipping features end-to-end.",
      },
      fun: {
        title: "Banter Mode",
        description:
          "Friendly neighborhood bug whisperer. I write code, drink coffee, and negotiate peace treaties between frontend and backend on a daily basis.",
        highlight:
          "Known to refactor things for 'just five minutes' and emerge three hours later with a new component library and a strong opinion about spacing.",
      },
    }),
    []
  );

  const stats = useMemo(
    () => [
      {
        label: "Coffee Level",
        value: "Refilled",
        icon: <Coffee size={14} />,
        color: "#ff7a59",
      },
      {
        label: "Ship Mode",
        value: "ON",
        icon: <Zap size={14} />,
        color: "#22c55e",
      },
      {
        label: "Fun Meter",
        value: "78%",
        icon: <Heart size={14} />,
        color: "#f43f5e",
      },
    ],
    []
  );

  const superpowers = useMemo(
    () => [
      { name: "Debugging", level: 95, icon: <Code size={16} /> },
      { name: "Refactoring", level: 88, icon: <Server size={16} /> },
      { name: "DX Design", level: 92, icon: <Database size={16} /> },
    ],
    []
  );

  const currentProject = useMemo(
    () => ({
      name: "React + TS Dashboard",
      status: "Shipping",
      progress: 78,
      tech: ["React", "TypeScript", "Tailwind", "tRPC"],
    }),
    []
  );

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <div className="title-prefix">ABOUT.bio</div>
          <h2 className="title-main">The Developer Behind the Code</h2>
          <p className="cyber-subtitle">
            Two modes. One developer. Infinite possibilities.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="mode-toggle">
          <div className="toggle-label">
            <Terminal size={16} />
            <span>Output Mode:</span>
          </div>
          <div className="toggle-buttons">
            <button
              className={`toggle-btn ${mode === "serious" ? "is-active" : ""}`}
              onClick={() => setMode("serious")}
            >
              <span>Serious</span>
            </button>
            <button
              className={`toggle-btn ${mode === "fun" ? "is-active" : ""}`}
              onClick={() => setMode("fun")}
            >
              <span>Banter</span>
            </button>
          </div>
        </div>

        <div className="about-content">
          {/* Left: Bio + Stats */}
          <div className="left-panel">
            <div className="bio-card">
              <h3 className="bio-title">{modes[mode].title}</h3>
              <p className="bio-description">{modes[mode].description}</p>
              <p className="bio-highlight">{modes[mode].highlight}</p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-value">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Widgets */}
          <div className="right-panel">
            {/* Superpowers */}
            <div className="widget">
              <div className="widget-head">
                <Sparkles size={16} />
                <span>Superpowers</span>
              </div>
              <div className="widget-body">
                {superpowers.map((power, i) => (
                  <div key={i} className="power-item">
                    <div className="power-header">
                      <span className="power-icon">{power.icon}</span>
                      <span className="power-name">{power.name}</span>
                      <span className="power-level">{power.level}%</span>
                    </div>
                    <div className="power-bar">
                      <div
                        className="power-fill"
                        style={{ width: `${power.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Project */}
            <div className="widget">
              <div className="widget-head">
                <Compass size={16} />
                <span>Current Project</span>
              </div>
              <div className="widget-body">
                <div className="project-info">
                  <div className="project-name">{currentProject.name}</div>
                  <div className="project-status">
                    <span className="status-badge">
                      {currentProject.status}
                    </span>
                  </div>
                  <div className="project-progress">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${currentProject.progress}%` }}
                      />
                    </div>
                    <span className="progress-text">
                      {currentProject.progress}%
                    </span>
                  </div>
                  <div className="project-tech">
                    {currentProject.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="widget">
              <div className="widget-head">
                <Flame size={16} />
                <span>Fun Facts</span>
              </div>
              <div className="widget-body">
                <div className="fact-item">
                  <span className="fact-label">Longest Debug</span>
                  <span className="fact-value">3 days (missing semicolon)</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Stack Overflow</span>
                  <span className="fact-value">Lower than my self-esteem</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Coffee Count</span>
                  <span className="fact-value">∞ (refillable)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          background: #0c0f1a;
          color: #eef2ff;
          padding: 72px 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .about-header {
          text-align: center;
          margin-bottom: 24px;
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
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border: 1px solid rgba(124, 132, 168, 0.18);
          border-radius: 999px;
          color: #b6c0e0;
          background: rgba(124, 132, 168, 0.12);
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
          margin: 8px 0 6px;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.01em;
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
          margin: 0;
          color: #b6c0e0;
          font-family: "Courier New", monospace;
          animation: pulse 2s ease-in-out infinite;
          min-height: 1.25rem;
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

        .mode-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .toggle-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #b6c0e0;
        }
        .toggle-buttons {
          display: inline-flex;
          gap: 8px;
        }
        .toggle-btn {
          padding: 8px 16px;
          border: 1px solid rgba(124, 132, 168, 0.18);
          background: rgba(124, 132, 168, 0.08);
          color: #b6c0e0;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .toggle-btn.is-active {
          color: #0c0f1a;
          background: #ff7a59;
          border-color: rgba(255, 122, 89, 0.28);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 992px) {
          .about-content {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 20px;
          }
        }

        .left-panel {
          display: grid;
          gap: 16px;
        }
        .bio-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 16px;
        }
        .bio-title {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 800;
          color: #ff7a59;
        }
        .bio-description {
          margin: 0 0 8px;
          color: #eef2ff;
          line-height: 1.7;
        }
        .bio-highlight {
          margin: 0;
          color: #b6c0e0;
          font-size: 14px;
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 12px;
        }
        .stat-icon {
          display: inline-flex;
        }
        .stat-content {
          display: grid;
        }
        .stat-label {
          color: #b6c0e0;
          font-size: 12px;
        }
        .stat-value {
          color: #eef2ff;
          font-weight: 800;
          font-size: 14px;
        }

        .right-panel {
          display: grid;
          gap: 12px;
        }
        .widget {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 14px;
        }
        .widget-head {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #b6c0e0;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .widget-body {
          display: grid;
          gap: 10px;
        }

        .power-item {
          display: grid;
          gap: 6px;
        }
        .power-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .power-icon {
          display: inline-flex;
          color: #ff7a59;
        }
        .power-name {
          color: #eef2ff;
          font-weight: 700;
          font-size: 14px;
        }
        .power-level {
          color: #b6c0e0;
          font-size: 12px;
        }
        .power-bar {
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }
        .power-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff7a59, #6366f1);
        }

        .project-info {
          display: grid;
          gap: 8px;
        }
        .project-name {
          color: #eef2ff;
          font-weight: 800;
          font-size: 14px;
        }
        .project-status {
          display: flex;
        }
        .status-badge {
          padding: 4px 8px;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.28);
          border-radius: 999px;
          color: #22c55e;
          font-size: 12px;
        }
        .project-progress {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .progress-bar {
          flex: 1;
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff7a59, #6366f1);
        }
        .progress-text {
          color: #b6c0e0;
          font-size: 12px;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tech-tag {
          padding: 4px 8px;
          background: rgba(124, 132, 168, 0.12);
          border: 1px solid rgba(124, 132, 168, 0.18);
          border-radius: 999px;
          font-size: 11px;
          color: #eef2ff;
        }

        .fact-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .fact-label {
          color: #b6c0e0;
          font-size: 12px;
        }
        .fact-value {
          color: #eef2ff;
          font-weight: 700;
          font-size: 12px;
        }

        @media (max-width: 576px) {
          .title {
            font-size: 24px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default PlayfulAbout;
