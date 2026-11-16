"use client";

import { useState } from "react";
import {
  Download,
  Code,
  Headset,
  PawPrint,
  Check,
} from "lucide-react";

import { useLanguage } from "./language-provider";

export default function ResumeSelector() {
  const { language } = useLanguage();

  const [profile, setProfile] = useState<
    "frontend" | "support"
  >("frontend");

  const [cvLanguage, setCvLanguage] = useState<
    "es" | "en"
  >(language);

  const es = language === "es";

  const profiles = [
    {
      id: "frontend" as const,
      title: "Frontend Developer",
      icon: Code,
    },
    {
      id: "support" as const,
      title: "Customer Service & Back Office",
      icon: Headset,
    },
  ];

  const file = `/cv/karen-${profile}-${cvLanguage}.pdf`;

  return (
    <div className="resume-selector">
      <div className="resume-heading">
        <span className="eyebrow">
          {es ? "PERFIL PROFESIONAL" : "PROFESSIONAL PROFILE"}
        </span>

        <PawPrint size={22} />
      </div>

      <h3>Curriculum vitae.</h3>

      <p className="resume-description">
        {es
          ? "Selecciona el perfil y el idioma de tu preferencia."
          : "Choose your preferred profile and language."}
      </p>

      <div className="resume-options">
        {profiles.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={profile === item.id}
              className={`resume-option ${
                profile === item.id ? "selected" : ""
              }`}
              onClick={() => setProfile(item.id)}
            >
              <Icon size={22} />

              <span>{item.title}</span>

              {profile === item.id && <Check size={18} />}
            </button>
          );
        })}
      </div>

      <div className="resume-languages">
        <button
          type="button"
          aria-pressed={cvLanguage === "es"}
          className={cvLanguage === "es" ? "selected" : ""}
          onClick={() => setCvLanguage("es")}
        >
          Español
        </button>

        <button
          type="button"
          aria-pressed={cvLanguage === "en"}
          className={cvLanguage === "en" ? "selected" : ""}
          onClick={() => setCvLanguage("en")}
        >
          English
        </button>
      </div>

      <a
        href={file}
        download
        className="resume-download"
      >
        <Download size={18} />
        {es ? "Descargar CV" : "Download resume"}
      </a>

      <p className="resume-molly">
        {es
          ? "Oficialmente aprobado por Molly. ♡"
          : "Officially approved by Molly. ♡"}
      </p>
    </div>
  );
}