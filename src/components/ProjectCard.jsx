import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="project-card h-100"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="card-image-wrapper">
        <div className="card-overlay"></div>
        <img src={project.image} alt={project.title} className="card-image" />
        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn demo-btn"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn github-btn"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

      <div className="card-content">
        <div className="technology-badges">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <a
          href={project.liveUrl || project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="details-link"
        >
          <span>View details</span>
          <ArrowRight size={16} />
        </a>
      </div>

      <style jsx>{`
        .project-card {
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
          position: relative;
          box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 44px -16px rgba(0, 0, 0, 0.45);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .card-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(12, 15, 26, 0),
            rgba(12, 15, 26, 0.55)
          );
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 1;
        }
        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover .card-image {
          transform: scale(1.06);
        }

        .project-links {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 12px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          backdrop-filter: blur(6px);
        }
        .demo-btn {
          background-color: rgba(255, 122, 89, 0.18);
          color: #eef2ff;
          border-color: rgba(255, 122, 89, 0.3);
        }
        .demo-btn:hover {
          background-color: rgba(255, 122, 89, 0.26);
        }
        .github-btn {
          background-color: rgba(124, 132, 168, 0.16);
          color: #eef2ff;
          border-color: rgba(124, 132, 168, 0.28);
        }
        .github-btn:hover {
          background-color: rgba(124, 132, 168, 0.24);
        }

        .card-content {
          padding: 16px;
        }

        .technology-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }
        .tech-badge {
          background-color: rgba(124, 132, 168, 0.12);
          color: #d8def1;
          border: 1px solid rgba(124, 132, 168, 0.22);
          border-radius: 999px;
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
        }

        .project-title {
          font-size: 18px;
          font-weight: 800;
          color: #eef2ff;
          margin-bottom: 8px;
        }
        .project-description {
          color: #b6c0e0;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .details-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ff7a59;
          font-weight: 600;
          text-decoration: none;
          position: relative;
          transition: color 0.2s ease;
        }
        .details-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #ff7a59;
          transition: width 0.25s ease;
        }
        .details-link:hover::after {
          width: 100%;
        }
        .details-link:hover svg {
          transform: translateX(3px);
        }
        .details-link svg {
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
