import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Clock, Heart, Terminal } from "lucide-react";

const CyberpunkFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Format date as Month DD, YYYY
  const formattedDate = currentTime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Social links
  const socialLinks = [
    {
      icon: <Github size={18} />,
      url: "https://github.com/DebrainStark",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/in/otoibhi-anthony-b-eng-gnse-970049161",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={18} />,
      url: "mailto:starkwave@outlook.com",
      label: "Email",
    },
  ];

  // Footer navigation links
  const navLinks = [
    { text: "Home", url: "#home" },
    { text: "Skills", url: "#skills" },
    { text: "Projects", url: "#projects" },
    { text: "About", url: "#about" },
    { text: "Contact", url: "#contact" },
  ];

  return (
    <footer className="neo-footer">
      <div className="neo-footer__grid"></div>
      <div className="neo-footer__gradients">
        <div className="neo-footer__gradient-primary"></div>
        <div className="neo-footer__gradient-secondary"></div>
      </div>

      <div className="neo-container">
        {/* Navigation */}
        <div className="neo-footer__nav">
          <ul className="neo-footer__nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="neo-footer__nav-item">
                <a href={link.url} className="neo-footer__nav-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Time Display */}
        <div className="neo-footer__time">
          <div className="neo-footer__time-frame">
            <div className="neo-footer__time-corner top-left"></div>
            <div className="neo-footer__time-corner top-right"></div>
            <div className="neo-footer__time-corner bottom-left"></div>
            <div className="neo-footer__time-corner bottom-right"></div>

            <div className="neo-footer__time-content">
              <div className="neo-footer__time-icon">
                <Clock size={16} />
              </div>
              <div className="neo-footer__time-info">
                <div className="neo-footer__time-main">{formattedTime}</div>
                <div className="neo-footer__time-sub">{formattedDate}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="neo-footer__divider">
          <div className="neo-footer__divider-line"></div>
        </div>

        {/* Bottom Row */}
        <div className="neo-footer__bottom">
          <div className="neo-footer__copyright">
            <div className="neo-footer__copyright-badge">
              <Terminal size={14} />
              <span>System.v1.0</span>
            </div>
            <div className="neo-footer__copyright-text">
              &copy; {new Date().getFullYear()} Akintayo Ajibola. All rights
              reserved.
            </div>
            <div className="neo-footer__made-with">
              <span>Made with</span>
              <Heart size={12} className="neo-footer__heart" />
            </div>
          </div>

          <div className="neo-footer__social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="neo-footer__social-link"
              >
                {link.icon}
                <span className="neo-footer__social-glow"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .neo-footer {
          position: relative;
          background: rgba(10, 14, 23, 0.9);
          padding: 28px 0 20px;
          color: #e2e8f0;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .neo-footer__grid,
        .neo-footer__gradients {
          display: none;
        }
        .neo-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          z-index: 1;
        }

        .neo-footer__nav {
          margin-bottom: 16px;
          display: flex;
          justify-content: center;
        }
        .neo-footer__nav-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 8px;
        }
        .neo-footer__nav-link {
          display: block;
          padding: 6px 10px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 13px;
          border-radius: 8px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .neo-footer__nav-link:hover {
          color: #e2e8f0;
          background: rgba(148, 163, 184, 0.12);
        }

        .neo-footer__time {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }
        .neo-footer__time-frame {
          position: relative;
          padding: 8px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          min-width: 220px;
        }
        .neo-footer__time-corner {
          display: none;
        }
        .neo-footer__time-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .neo-footer__time-icon {
          display: inline-flex;
          width: 28px;
          height: 28px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(148, 163, 184, 0.12);
          color: #e2e8f0;
        }
        .neo-footer__time-info {
          display: grid;
        }
        .neo-footer__time-main {
          font-size: 14px;
          font-weight: 800;
          color: #e2e8f0;
          letter-spacing: 0.04em;
        }
        .neo-footer__time-sub {
          font-size: 12px;
          color: #94a3b8;
        }

        .neo-footer__divider {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }
        .neo-footer__divider-line {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        .neo-footer__bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .neo-footer__copyright {
          display: grid;
          place-items: center;
          gap: 6px;
        }
        .neo-footer__copyright-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          font-size: 12px;
          color: #94a3b8;
        }
        .neo-footer__copyright-text {
          font-size: 12px;
          color: #94a3b8;
        }
        .neo-footer__made-with {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #64748b;
        }
        .neo-footer__heart {
          color: #f43f5e;
        }

        .neo-footer__social {
          display: flex;
          gap: 10px;
        }
        .neo-footer__social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(148, 163, 184, 0.12);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 999px;
          color: #e2e8f0;
          transition: background-color 0.2s ease;
        }
        .neo-footer__social-link:hover {
          background: rgba(148, 163, 184, 0.18);
        }
        .neo-footer__social-glow {
          display: none;
        }

        @media (min-width: 768px) {
          .neo-footer__bottom {
            flex-direction: row;
            justify-content: space-between;
          }
          .neo-footer__copyright {
            place-items: start;
          }
        }
        @media (max-width: 576px) {
          .neo-footer {
            padding: 22px 0 16px;
          }
          .neo-footer__nav-link {
            padding: 6px 8px;
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
};

export default CyberpunkFooter;
