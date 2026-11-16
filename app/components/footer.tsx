"use client";

import Kamon from "./kamon";
import { useLanguage } from "./language-provider";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Kamon size={28} />
      </div>

      <p className="footer-copyright">
        © 2026 Karen Baron · Moonveil Portfolio
      </p>
    </footer>
  );
}