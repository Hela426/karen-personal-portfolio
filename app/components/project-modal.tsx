"use client";

import { useEffect, useRef, useState, useId } from "react";
import Image from "next/image";
import { ArrowUpRight, Code, X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import type { Project } from "../data/projects";

type Props = { project: Project; language: "es" | "en"; onClose: () => void };

export default function ProjectModal({ project, language, onClose }: Props) {
  const es = language === "es";
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const headingId = useId();
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const photos = project.gallery?.length ? project.gallery : [{ src: project.image, caption: { es: "Vista del proyecto", en: "Project preview" } }];
  const photo = photos[index];

  useEffect(() => {
    const dialog = ref.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    if (!dialog) return;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  function navigate(step: number) {
    setIndex((current) => (current + step + photos.length) % photos.length);
  }

  const status = { completed: es ? "Completado" : "Completed", development: es ? "En desarrollo" : "In development", planned: es ? "Planeado" : "Planned" }[project.status];
  const labels = es ? ["Rendimiento", "Accesibilidad", "Buenas prácticas", "SEO"] : ["Performance", "Accessibility", "Best practices", "SEO"];

  return (
    <dialog ref={ref} className="showcase-dialog" aria-labelledby={headingId}
      onCancel={(event) => { event.preventDefault(); if (zoom) setZoom(false); else onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="showcase-panel">
        <header className="showcase-header">
          <span className="eyebrow">{es ? "PROYECTO SELECCIONADO" : "SELECTED PROJECT"}</span>
          <button ref={closeRef} type="button" className="showcase-icon" onClick={onClose} aria-label={es ? "Cerrar detalles" : "Close details"}><X size={23} /></button>
        </header>
        <div className="showcase-body">
          <div className="project-meta"><span>{project.category} · {project.year}</span><span>{status}</span></div>
          <h2 id={headingId}>{project.title}</h2>
          <p className="showcase-intro">{project.description[language]}</p>
          <section aria-label={es ? "Galería de imágenes" : "Image gallery"} className="showcase-gallery" onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); navigate(event.key === "ArrowLeft" ? -1 : 1); }
          }}>
            <div className={`showcase-photo ${zoom ? "showcase-zoom" : ""}`}>
              <Image src={photo.src} alt={`${project.title} — ${photo.caption[language]}`} width={1400} height={875} sizes="(max-width: 700px) 92vw, 1000px" />
              <button type="button" className="showcase-icon showcase-enlarge" aria-label={zoom ? (es ? "Reducir imagen" : "Reduce image") : (es ? "Ampliar imagen" : "Enlarge image")} aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? <Minimize2 size={20} /> : <Maximize2 size={20} />}</button>
            </div>
            <div className="showcase-caption">
              <span aria-live="polite">{photo.caption[language]} · {index + 1}/{photos.length}</span>
              {photos.length > 1 && <div className="showcase-controls">
                <button type="button" className="showcase-icon" onClick={() => navigate(-1)} aria-label={es ? "Imagen anterior" : "Previous image"}><ChevronLeft size={20} /></button>
                <button type="button" className="showcase-icon" onClick={() => navigate(1)} aria-label={es ? "Imagen siguiente" : "Next image"}><ChevronRight size={20} /></button>
              </div>}
            </div>
            {photos.length > 1 && <div className="showcase-thumbnails">
              {photos.map((item, i) => <button key={item.src} type="button" aria-pressed={index === i} aria-label={item.caption[language]} onClick={() => setIndex(i)}><Image src={item.src} alt="" width={240} height={150} sizes="140px" /><span>{item.caption[language]}</span></button>)}
            </div>}
          </section>
          <section className="showcase-section"><h3>{es ? "Sobre el proyecto" : "About the project"}</h3><p>{(project.details ?? project.description)[language]}</p></section>
          <section className="showcase-section"><h3>{es ? "Funcionalidades" : "Features"}</h3><ul>{project.features[language].map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          {project.quality && <section className="showcase-section"><h3>{es ? "Calidad y rendimiento" : "Quality and performance"}</h3><p>{project.quality.tests}/{project.quality.tests} {es ? "pruebas unitarias aprobadas" : "unit tests passed"}</p><div className="showcase-metrics">{Object.values(project.quality.lighthouse).map((score, i) => <div key={labels[i]}><strong>{score}/100</strong><span>{labels[i]}</span></div>)}</div><p>{es ? "Auditoría Lighthouse móvil local · Noviembre de 2026." : "Local mobile Lighthouse audit · November 2026."}</p></section>}
          <section className="showcase-section"><h3>{es ? "Tecnologías" : "Technologies"}</h3><div className="stack-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></section>
          <div className="project-links">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Code size={17} /> GitHub</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">{es ? "Ver proyecto" : "Live demo"}<ArrowUpRight size={17} /></a>}
            {project.id === "gema-brillante" && <p className="showcase-private">{es ? "Proyecto de acceso privado." : "Private-access project."}</p>}
          </div>
        </div>
      </div>
    </dialog>
  );
}
