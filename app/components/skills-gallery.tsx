"use client";

import { useState } from "react";
import { PawPrint } from "lucide-react";
import { useLanguage } from "./language-provider";

type Category = "all" | "frontend" | "backend" | "tools";

const skills = [
  {
    name: "HTML5",
    icon: "devicon-html5-plain",
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    category: "frontend",
  },
  {
    name: "React",
    icon: "devicon-react-original",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "devicon-nextjs-plain",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-original",
    category: "frontend",
  },
  {
    name: "Angular",
    icon: "devicon-angularjs-plain",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain",
    category: "frontend",
  },
  {
    name: "SASS",
    icon: "devicon-sass-original",
    category: "frontend",
  },
  {
    name: "VTEX IO",
    icon: "",
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain",
    category: "backend",
  },
  {
    name: "Firebase",
    icon: "devicon-firebase-plain",
    category: "backend",
  },
  {
    name: "Supabase",
    icon: "devicon-supabase-plain",
    category: "backend",
  },
  {
    name: "Git",
    icon: "devicon-git-plain",
    category: "tools",
  },
  {
    name: "GitHub",
    icon: "devicon-github-original",
    category: "tools",
  },
  {
    name: "Figma",
    icon: "devicon-figma-plain",
    category: "tools",
  },
  {
    name: "Photoshop",
    icon: "devicon-photoshop-plain",
    category: "tools",
  },
  {
    name: "Jest",
    icon: "devicon-jest-plain",
    category: "tools",
  },
  {
    name: "VS Code",
    icon: "devicon-vscode-plain",
    category: "tools",
  },
];

export default function SkillsGallery() {
  const { language } = useLanguage();
  const [category, setCategory] = useState<Category>("all");

  const es = language === "es";

  const categories = [
    { id: "all" as const, label: es ? "Todos" : "All" },
    { id: "frontend" as const, label: "Frontend" },
    { id: "backend" as const, label: "Backend" },
    {
      id: "tools" as const,
      label: es ? "Herramientas" : "Tools",
    },
  ];

  const visibleSkills = skills.filter(
    (skill) =>
      category === "all" || skill.category === category
  );

  return (
    <div className="skills-gallery">
      <p className="skills-intro">
        {es
          ? "Una colección de tecnologías y herramientas que he utilizado durante mi formación, experiencia profesional y proyectos personales."
          : "A collection of technologies and tools I have used throughout my education, professional experience and personal projects."}
      </p>

      <div
        className="skills-filters"
        aria-label={es ? "Filtrar tecnologías" : "Filter technologies"}
      >
        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={category === item.id}
            className={`skill-filter ${
              category === item.id ? "active" : ""
            }`}
            onClick={() => setCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="skills-count" aria-live="polite">
        {visibleSkills.length}{" "}
        {es ? "tecnologías" : "technologies"}
      </div>

      <div className="skills-grid">
        {visibleSkills.map((skill) => (
          <article
            className="skill-card"
            key={skill.name}
          >
            {skill.icon ? (
              <i
                className={`${skill.icon} colored skill-icon`}
                aria-hidden="true"
              />
            ) : (
              <span className="skill-wordmark">VTEX</span>
            )}

            <span className="skill-name">
              {skill.name}
            </span>

            <span className="skill-category">
              {skill.category === "tools"
                ? es
                  ? "Herramientas"
                  : "Tools"
                : skill.category}
            </span>
          </article>
        ))}
      </div>

      <div className="skills-signature">
        <PawPrint size={15} />

        <span>
          {es
            ? "Siempre aprendiendo. Siempre creando."
            : "Always learning. Always creating."}
        </span>

        <small>— Molly approved.</small>
      </div>
    </div>
  );
}