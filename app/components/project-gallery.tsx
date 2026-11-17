"use client";

import { useState } from "react";
import Image from "next/image";

import {
  ArrowUpRight,
  Code,
  PawPrint,
} from "lucide-react";

import {
  projects,
  type ProjectCategory,
  type Project,
} from "../data/projects";

import ProjectModal from "./project-modal";

import { useLanguage } from "./language-provider";

type Filter = "all" | ProjectCategory;

export default function ProjectGallery() {
  const { language } = useLanguage();
  const es = language === "es";

  const [filter, setFilter] = useState<Filter>("all");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: {
    id: Filter;
    label: string;
  }[] = [
    { id: "all", label: es ? "Todos" : "All" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full-stack" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "design", label: es ? "Diseño" : "Design" },
  ];

  const visibleProjects = projects.filter(
    (project) =>
      filter === "all" ||
      project.category === filter
  );

  const statusLabels = {
    completed: es ? "Completado" : "Completed",
    development: es ? "En desarrollo" : "In development",
    planned: es ? "Planeado" : "Planned",
  };

  return (
    <div className="project-gallery">
      <div className="skills-filters">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            className={`skill-filter ${
              filter === item.id ? "active" : ""
            }`}
            onClick={() => {
              setFilter(item.id);
              setSelectedProject(null);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="project-gallery-count"
        aria-live="polite"
      >
        {visibleProjects.length}{" "}
        {visibleProjects.length === 1 ? (es ? "proyecto" : "project") : (es ? "proyectos" : "projects")}
      </div>

      <div className="project-gallery-grid">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="portfolio-project"
          >
            <div className="portfolio-project-image">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 800px) 90vw, 45vw"
              />

              <span className="project-status">
                {statusLabels[project.status]}
              </span>
            </div>

            <div className="portfolio-project-content">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description[language]}</p>

              <div className="stack-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <button
                type="button"
                className="project-details-button"
                aria-haspopup="dialog"
                onClick={() => setSelectedProject(project)}
              >
                {es ? "Ver detalles" : "View details"}
                <ArrowUpRight size={18} />
              </button>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code size={17} />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {es ? "Demostración" : "Live demo"}
                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <div className="empty-projects">
          <PawPrint size={35} />

          <h3>
            {es ? "Molly está trabajando..." : "Molly is working..."}
          </h3>

          <p>
            {es
              ? "Pronto habrá nuevos proyectos en esta categoría."
              : "New projects are coming to this category soon."}
          </p>
        </div>
      )}
      {selectedProject && (
        <ProjectModal
          key={selectedProject.id}
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}