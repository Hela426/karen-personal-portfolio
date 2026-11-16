"use client";

import Kamon from "./kamon";

export default function Footer() {


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