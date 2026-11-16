"use client";

import { ArrowUpRight, Mail, Code2, Globe } from "lucide-react";
import Kamon from "./components/kamon";
import { useLanguage } from "./components/language-provider";
import Image from "next/image";
import ResumeSelector from "./components/resume-selector";

export default function Home() {
  const { language } = useLanguage();
  const es = language === "es";

  const projects = [
    {
      title: "Gema Brillante",
      typeEs: "Plataforma web para rol",
      typeEn: "Roleplay web platform",
      descriptionEs:
        "Proyecto full-stack para una comunidad de rol con perfiles, publicaciones, cartas, rumores, sesiones y permisos.",
      descriptionEn:
        "Full-stack project for a roleplay community with profiles, posts, letters, rumors, sessions and permissions.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    },
    {
      title: "Moonveil",
      typeEs: "Portafolio personal",
      typeEn: "Personal portfolio",
      descriptionEs:
        "Mi espacio personal para mostrar proyectos, experiencia, servicios y estilo como desarrolladora frontend.",
      descriptionEn:
        "My personal space to showcase projects, experience, services and my style as a frontend developer.",
      stack: ["Next.js", "TypeScript", "Responsive Design"],
    },
    {
      title: "Concept Project",
      typeEs: "Proyecto conceptual",
      typeEn: "Concept project",
      descriptionEs:
        "Espacio reservado para un futuro proyecto visual que amplíe mi portafolio profesional.",
      descriptionEn:
        "Reserved space for a future visual project that expands my professional portfolio.",
      stack: ["UI Design", "Frontend", "Creative Direction"],
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Supabase",
    "Figma",
    "Responsive Design",
  ];

  const experience = [
    {
      periodEs: "Marzo 2025 — Actualidad",
      periodEn: "Noviembre 2025",
      roleEs: "Moderadora de contenido",
      roleEn: "Content Moderator",
      company: "Teleperformance",
      textEs:
        "Experiencia reciente en moderación de contenido y manejo de procesos internos en entornos de alta exigencia.",
      textEn:
        "Recent experience in content moderation and handling internal processes in demanding environments.",
    },
    {
      periodEs: "Septiembre 2024 — Marzo 2025",
      periodEn: "September 2024 — March 2025",
      roleEs: "Customer Service Representative",
      roleEn: "Customer Service Representative",
      company: "Everise",
      textEs:
        "Soporte a usuarios de un programa de beneficios farmacéuticos para healthcare insurance en EE.UU.",
      textEn:
        "Support for members of a pharmacy benefits program for a U.S. healthcare insurance provider.",
    },
    {
      periodEs: "Marzo 2024 — Septiembre 2024",
      periodEn: "March 2024 — September 2024",
      roleEs: "Customer Service Agent",
      roleEn: "Customer Service Agent",
      company: "Teleperformance",
      textEs:
        "Atención al cliente en campaña bancaria, resolución de casos complejos y mantenimiento de métricas de calidad.",
      textEn:
        "Customer service in a banking campaign, complex case handling and quality metric performance.",
    },
    {
      periodEs: "Noviembre 2022 — Octubre 2023",
      periodEn: "November 2022 — October 2023",
      roleEs: "Junior Frontend Developer",
      roleEn: "Junior Frontend Developer",
      company: "ITGlobers",
      textEs:
        "Desarrollo frontend para e-commerce utilizando HTML, CSS, JavaScript, React y VTEX.",
      textEn:
        "Frontend development for e-commerce using HTML, CSS, JavaScript, React and VTEX.",
    },
    {
      periodEs: "Julio 2022 — Noviembre 2022",
      periodEn: "July 2022 — November 2022",
      roleEs: "Junior Frontend Developer",
      roleEn: "Junior Frontend Developer",
      company: "VelaOne",
      textEs:
        "Creación de componentes reutilizables, consumo de API y trabajo sobre gestión de usuarios.",
      textEn:
        "Creation of reusable components, API consumption and work on user management.",
    },
    {
      periodEs: "Enero 2022 — Julio 2022",
      periodEn: "January 2022 — July 2022",
      roleEs: "Web Developer Training",
      roleEn: "Web Developer Training",
      company: "Laboratoria",
      textEs:
        "Formación intensiva en desarrollo web, JavaScript, React, testing y trabajo colaborativo.",
      textEn:
        "Intensive training in web development, JavaScript, React, testing and collaborative work.",
    },
  ];

  const services = [
    {
      titleEs: "Landing pages",
      titleEn: "Landing pages",
      textEs:
        "Páginas limpias y visuales para marcas personales, negocios y emprendimientos.",
      textEn:
        "Clean and visual websites for personal brands, businesses and startups.",
    },
    {
      titleEs: "Portafolios personalizados",
      titleEn: "Custom portfolios",
      textEs:
        "Sitios personales para mostrar proyectos, comisiones o trabajo creativo.",
      textEn:
        "Personal websites to showcase projects, commissions or creative work.",
    },
    {
      titleEs: "Maquetación frontend",
      titleEn: "Frontend implementation",
      textEs:
        "Conversión de diseños e ideas en interfaces funcionales y responsivas.",
      textEn:
        "Turning designs and ideas into functional, responsive interfaces.",
    },
  ];

  return (
    <main>
      <section id="home" className="hero personal-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              {es
                ? "KAREN — FRONTEND DEVELOPER & WEB DESIGNER"
                : "KAREN — FRONTEND DEVELOPER & WEB DESIGNER"}
            </span>

            <h1>
              {es ? "Hola, soy" : "Hello, I'm"} <br />
              <em>Karen.</em>
            </h1>

            <div className="gold-line" />

            <p className="hero-description">
              {es
                ? "Desarrolladora frontend y diseñadora web con interés en crear experiencias digitales elegantes, funcionales y con personalidad."
                : "Frontend developer and web designer interested in creating elegant, functional and personality-driven digital experiences."}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                {es ? "Ver proyectos" : "View projects"}
                <ArrowUpRight size={18} />
              </a>

              <a href="#resume" className="secondary-button">
                {es ? "Mi CV" : "My resume"}
              </a>

              <a href="#contact" className="secondary-button">
                {es ? "Contactarme" : "Get in touch"}
              </a>
            </div>
          </div>

                    <div className="hero-card">
            <figure className="portrait-card">
              <div className="portrait-top">
                <span className="portrait-label">
                  {es ? "UN PEQUEÑO RINCÓN DE MI VIDA" : "A LITTLE PIECE OF MY LIFE"}
                </span>
                <Kamon size={28} />
              </div>

              <div className="portrait-image">
                <Image
                  src="/images/karen-molly.png"
                  alt={
                    es
                      ? "Ilustración en acuarela de Karen y su gata Molly"
                      : "Watercolor illustration of Karen and her cat Molly"
                  }
                  width={1086}
                  height={1448}
                  priority
                  sizes="(max-width: 1100px) 90vw, 420px"
                  className="personal-illustration"
                />
              </div>

              <figcaption className="portrait-note">
                <span>Karen & Molly.</span>
                <small>
                  {es
                    ? "Desarrolladora y supervisora oficial del código."
                    : "Developer and official code supervisor."}
                </small>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="hero-bottom">
          <span></span>
          <span>01 — 07</span>
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="section-heading">
          <span className="eyebrow">
            02 — {es ? "SOBRE MÍ" : "ABOUT"}
          </span>
          <h2>{es ? "Sobre mí" : "About me"}</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              {es
                ? "Soy Karen, desarrolladora frontend colombiana. Me gusta combinar estructura, estética y personalidad al crear interfaces web."
                : "I’m Karen, a Colombian frontend developer. I enjoy combining structure, aesthetics and personality when building web interfaces."}
            </p>

            <p>
              {es
                ? "Tengo experiencia en desarrollo frontend, e-commerce, atención al cliente y entornos de trabajo exigentes. Actualmente estoy retomando con fuerza mi camino en tecnología y construyendo un portafolio que refleje tanto mis habilidades como mi estilo."
                : "I have experience in frontend development, e-commerce, customer service and demanding work environments. I’m currently reconnecting strongly with my path in tech and building a portfolio that reflects both my skills and my style."}
            </p>

            <p>
              {es
                ? "Me encantan los diseños limpios, el contraste entre blanco y negro, los pequeños detalles visuales y los gatos."
                : "I love clean design, black-and-white contrast, subtle visual details and cats."}
            </p>
          </div>

          <div className="mini-panel">
            <div className="mini-panel-line">
              <span>{es ? "Ubicación" : "Location"}</span>
              <strong>Colombia</strong>
            </div>
            <div className="mini-panel-line">
              <span>{es ? "Inglés" : "English"}</span>
              <strong>B2</strong>
            </div>
            <div className="mini-panel-line">
              <span>{es ? "Formación" : "Education"}</span>
              <strong>SENA / Laboratoria</strong>
            </div>
            <div className="mini-panel-line">
              <span>{es ? "Estilo" : "Style"}</span>
              <strong>{es ? "Minimalista" : "Minimalist"}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section alt-section">
        <div className="section-heading">
          <span className="eyebrow">
            03 — {es ? "PROYECTOS" : "PROJECTS"}
          </span>
          <h2>{es ? "Proyectos destacados" : "Selected projects"}</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-preview">
                <span className="project-preview-label">
                  {project.title}
                </span>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span>
                    {es ? project.typeEs : project.typeEn}
                  </span>
                </div>

                <p>
                  {es
                    ? project.descriptionEs
                    : project.descriptionEn}
                </p>

                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="section-heading">
          <span className="eyebrow">
            04 — {es ? "HABILIDADES" : "SKILLS"}
          </span>
          <h2>{es ? "Tecnologías y herramientas" : "Technologies & tools"}</h2>
        </div>

        <div className="chips">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="content-section alt-section">
        <div className="section-heading">
          <span className="eyebrow">
            05 — {es ? "EXPERIENCIA" : "EXPERIENCE"}
          </span>
          <h2>{es ? "Trayectoria" : "Experience"}</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.roleEn}`} className="timeline-item">
              <span className="timeline-period">
                {es ? item.periodEs : item.periodEn}
              </span>

              <h3>
                {es ? item.roleEs : item.roleEn}
                <span> — {item.company}</span>
              </h3>

              <p>{es ? item.textEs : item.textEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="content-section">
        <div className="section-heading">
          <span className="eyebrow">
            06 — {es ? "SERVICIOS" : "SERVICES"}
          </span>
          <h2>{es ? "Qué puedo hacer" : "What I can do"}</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.titleEn} className="service-card">
              <h3>{es ? service.titleEs : service.titleEn}</h3>
              <p>{es ? service.textEs : service.textEn}</p>
            </article>
          ))}
        </div>
      </section>

            <section id="resume" className="content-section">
        <div className="section-heading">
          <span className="eyebrow">
            {es ? "CURRICULUM VITAE" : "RESUME"}
          </span>

          <h2>
            {es ? "Mi perfil profesional" : "My professional profile"}
          </h2>
        </div>

        <ResumeSelector />
      </section>

      <section id="contact" className="content-section alt-section">
        <div className="section-heading">
          <span className="eyebrow">
            07 — {es ? "CONTACTO" : "CONTACT"}
          </span>
          <h2>{es ? "Hablemos" : "Let’s connect"}</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <Mail size={18} />
            <div>
              <span>Email</span>
              <p>kdbaron624@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <Code2 size={18} />
            <div>
              <span>GitHub</span>
              <p>github.com/Hela426</p>
            </div>
          </div>

          <div className="contact-card">
            <Globe size={18} />
            <div>
              <span>{es ? "Portafolio" : "Portfolio"}</span>
              <p>{es ? "Disponible pronto" : "Coming soon"}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}