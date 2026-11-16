"use client";

import Kamon from "./kamon";
import { useLanguage } from "./language-provider";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Kamon size={28} />
        <span>KAREN — PERSONAL PORTFOLIO</span>
      </div>

      <p className="footer-tagline">
        {language === "es"
          ? "Código, diseño y personalidad."
          : "Code, design and personality."}
      </p>

      <p className="footer-copyright">
        © 2026 Karen · Moonveil Portfolio
      </p>
    </footer>
  );
}