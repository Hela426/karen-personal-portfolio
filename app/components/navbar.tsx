"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Kamon from "./kamon";
import ThemeToggle from "./theme-toggle";
import { useLanguage } from "./language-provider";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#home", es: "Inicio", en: "Home" },
    { href: "#about", es: "Sobre mí", en: "About" },
    { href: "#projects", es: "Proyectos", en: "Projects" },
    { href: "#skills", es: "Habilidades", en: "Skills" },
    { href: "#experience", es: "Experiencia", en: "Experience" },
    { href: "#services", es: "Servicios", en: "Services" },
    { href: "#resume", es: "Mi CV", en: "Resume" },
    { href: "#contact", es: "Contacto", en: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="navbar">
        <Link
          href="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <Kamon size={40} />

          <div className="brand-text">
            <span>KAREN</span>
            <small>PERSONAL PORTFOLIO</small>
          </div>
        </Link>

        <nav
          id="site-navigation"
          aria-label={
            language === "es"
              ? "Navegación principal"
              : "Main navigation"
          }
          className={`navigation ${menuOpen ? "open" : ""}`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link[language]}
            </Link>
          ))}
        </nav>

        <div className="nav-controls">
          <button
            type="button"
            className="language-button"
            onClick={toggleLanguage}
            aria-label={
              language === "es"
                ? "Switch to English"
                : "Cambiar a español"
            }
          >
            <span className={language === "es" ? "active" : ""}>
              ES
            </span>
            <span className="language-divider">/</span>
            <span className={language === "en" ? "active" : ""}>
              EN
            </span>
          </button>

          <ThemeToggle />

          <button
            type="button"
            className="icon-button mobile-menu"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={language === "es" ? "Menú" : "Menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}