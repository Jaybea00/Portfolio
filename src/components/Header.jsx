import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Menu,
  X,
  Home,
  Code,
  FolderOpen,
  User,
  Mail,
  Terminal,
} from "lucide-react";

// Navigation configuration
const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", icon: <Home size={20} /> },
  { id: "skills", label: "Skills", icon: <Code size={20} /> },
  { id: "projects", label: "Projects", icon: <FolderOpen size={20} /> },
  { id: "about", label: "About", icon: <User size={20} /> },
  { id: "contact", label: "Contact", icon: <Mail size={20} /> },
];

// Throttle helper function
const throttle = (callback, delay = 100) => {
  let timeoutId = null;
  return (...args) => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        callback(...args);
        timeoutId = null;
      }, delay);
    }
  };
};

const CyberpunkHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const mobileNavRef = useRef(null);
  const bottomNavRef = useRef(null);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Determine active section based on scroll position
  const updateActiveSection = useCallback(() => {
    const currentSection =
      NAVIGATION_ITEMS.find(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 0;
        }
        return false;
      })?.id || "home";

    setActiveSection(currentSection);
  }, []);

  // Handle scroll with requestAnimationFrame for better performance
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
      updateActiveSection();
    });
  }, [updateActiveSection]);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  // Handle navigation item click
  const handleNavClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Add scroll event listener with throttling
  useEffect(() => {
    const throttledScrollHandler = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScrollHandler);

    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);

  return (
    <header className="cp-header">
      <div
        className={`cp-header__background ${
          isScrolled ? "cp-header__background--scrolled" : ""
        }`}
      >
        <div className="cp-header__grid"></div>
        <div className="cp-header__blur"></div>
      </div>

      <div className="cp-container">
        {/* Logo */}
        <div
          className={`cp-logo__wrapper ${
            isLoaded ? "cp-logo__wrapper--loaded" : ""
          }`}
        >
          <a
            href="#home"
            className="cp-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <div className="cp-logo__text">
              <span className="cp-logo__prefix">&lt;dev&gt;</span>
              <span className="cp-logo__main">Anthony</span>
            </div>
            <div className="cp-logo__badge">
              <Terminal size={16} className="cp-logo__icon" />
              <span>v1.0</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="cp-nav">
          <ul className="cp-nav__list">
            {NAVIGATION_ITEMS.map((item, index) => (
              <li
                key={item.id}
                className={`cp-nav__item ${
                  isLoaded ? "cp-nav__item--loaded" : ""
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <a
                  href={`#${item.id}`}
                  className={`cp-nav__link ${
                    activeSection === item.id ? "cp-nav__link--active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <span className="cp-nav__text">{item.label}</span>
                  {activeSection === item.id && (
                    <span className="cp-nav__indicator"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={`cp-btn ${isLoaded ? "cp-btn--loaded" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            <Mail size={16} className="cp-btn__icon" />
            <span>Connect</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`cp-toggle ${isLoaded ? "cp-toggle--loaded" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="cp-toggle__icon">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
          <div className="cp-toggle__glow"></div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`cp-mobile ${isMenuOpen ? "cp-mobile--open" : ""}`}
          ref={mobileNavRef}
        >
          <div className="cp-mobile__container" ref={bottomNavRef}>
            {NAVIGATION_ITEMS.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cp-mobile__item ${
                  activeSection === item.id ? "cp-mobile__item--active" : ""
                } ${isMenuOpen ? "cp-mobile__item--animate" : ""}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <div className="cp-mobile__icon">{item.icon}</div>
                <div className="cp-mobile__label">{item.label}</div>

                {activeSection === item.id && (
                  <div className="cp-mobile__indicator"></div>
                )}
              </a>
            ))}
            <div className="cp-mobile__glow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main header styling */
        .cp-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          z-index: 1000;
        }

        /* Background effects */
        .cp-header__background {
          position: absolute;
          inset: 0;
          z-index: -1;
          transition: background-color 0.3s ease, border-color 0.3s ease,
            backdrop-filter 0.3s ease;
          backdrop-filter: blur(8px);
          background-color: rgba(10, 14, 23, 0.35);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cp-header__background--scrolled {
          background-color: rgba(10, 14, 23, 0.6);
          border-bottom-color: rgba(255, 255, 255, 0.12);
        }

        .cp-header__grid,
        .cp-header__blur {
          display: none;
        }

        /* Container */
        .cp-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Logo */
        .cp-logo__wrapper {
          transform: none;
          opacity: 1;
        }
        .cp-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .cp-logo__text {
          display: flex;
          flex-direction: column;
        }
        .cp-logo__prefix {
          font-size: 10px;
          color: #94a3b8;
          font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto,
            Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }
        .cp-logo__main {
          font-size: 18px;
          font-weight: 700;
          color: #eef2ff;
        }
        .cp-logo__badge {
          display: none;
        }

        /* Desktop Navigation */
        .cp-nav {
          display: flex;
          align-items: center;
        }
        .cp-nav__list {
          display: flex;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .cp-nav__item {
          margin: 0;
          transform: none;
          opacity: 1;
        }
        .cp-nav__link {
          display: block;
          padding: 8px 10px;
          color: #b6c0e0;
          text-decoration: none;
          border-radius: 8px;
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        .cp-nav__link:hover {
          color: #eef2ff;
          background-color: rgba(124, 132, 168, 0.12);
        }
        .cp-nav__link--active {
          color: #eef2ff;
          background-color: rgba(124, 132, 168, 0.18);
        }
        .cp-nav__indicator {
          display: none;
        }

        /* Contact button */
        .cp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          margin-left: 8px;
          background-color: #ff7a59;
          color: #0c0f1a;
          text-decoration: none;
          border-radius: 10px;
          border: none;
          transform: none;
          opacity: 1;
          box-shadow: 0 8px 20px rgba(255, 122, 89, 0.22);
        }
        .cp-btn:hover {
          background-color: #ff8f74;
        }
        .cp-btn__icon {
          margin: 0;
        }

        /* Mobile toggle */
        .cp-toggle {
          display: none;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          position: relative;
          z-index: 5;
          transform: none;
          opacity: 1;
        }
        .cp-toggle__icon {
          color: #eef2ff;
        }
        .cp-toggle__glow {
          display: none;
        }

        /* Mobile navigation */
        .cp-mobile {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          overflow: hidden;
          transition: height 0.3s ease;
          z-index: 4;
        }
        .cp-mobile--open {
          height: 88px;
        }
        .cp-mobile__container {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 24px);
          max-width: 440px;
          height: 56px;
          background-color: rgba(18, 22, 35, 0.85);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          opacity: 0;
          transform: translateX(-50%) translateY(16px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .cp-mobile--open .cp-mobile__container {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .cp-mobile__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #b6c0e0;
          text-decoration: none;
          width: 20%;
          transition: color 0.2s ease;
        }
        .cp-mobile__item:hover {
          color: #eef2ff;
        }
        .cp-mobile__item--active {
          color: #ff7a59;
        }
        .cp-mobile__icon {
          margin-bottom: 4px;
        }
        .cp-mobile__label {
          font-size: 11px;
          font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto,
            Helvetica, Arial;
        }
        .cp-mobile__indicator {
          display: none;
        }
        .cp-mobile__glow {
          display: none;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .cp-nav {
            display: none;
          }
          .cp-toggle {
            display: block;
          }
        }
        @media (max-width: 576px) {
          .cp-header {
            height: 56px;
          }
          .cp-container {
            padding: 0 12px;
          }
          .cp-logo__main {
            font-size: 16px;
          }
        }
      `}</style>
    </header>
  );
};

export default CyberpunkHeader;
