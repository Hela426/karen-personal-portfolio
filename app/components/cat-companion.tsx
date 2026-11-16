"use client";

import { useState, useId } from "react";
import { PawPrint } from "lucide-react";
import { useLanguage } from "./language-provider";

export default function CatCompanion() {
  const { language } = useLanguage();
  const [pets, setPets] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const panelId = useId();

  const es = language === "es";

  const messages = es
    ? [
        "Soy la jefa de este portafolio.",
        "¡Miauuu! ♡",
        "Apruebo este código.",
        "Necesito más croquetas.",
        "Contrata a mi humana.",
        "Las caricias son obligatorias.",
        "Estoy supervisando los commits.",
        "¿Ya viste nuestros proyectos?",
      ]
    : [
        "I'm the boss of this portfolio.",
        "Meow! ♡",
        "I approve this code.",
        "I need more treats.",
        "Hire my human.",
        "Head pats are mandatory.",
        "I'm supervising the commits.",
        "Have you seen our projects?",
      ];

  return (
    <aside className="cat-companion">
      {expanded && (
        <div className="cat-panel" id={panelId}>
          <span className="cat-caption">
            {es ? "SUPERVISORA FELINA" : "FELINE SUPERVISOR"}
          </span>

          <button
            type="button"
            className="cat-pet-button"
            onClick={() => setPets((value) => value + 1)}
            aria-label={es ? "Acariciar a Molly" : "Pet Molly"}
          >
            <svg
              viewBox="0 0 240 240"
              className="cat-illustration"
              aria-hidden="true"
            >
              <ellipse
                cx="120" cy="222" rx="82" ry="7"
                fill="#888888" opacity=".15"
              />

              {/* Cola */}
              <path
                className="cat-tail"
                d="M155 202 C226 226 233 153 199 168"
                fill="none"
                stroke="#292929"
                strokeWidth="15"
                strokeLinecap="round"
              />

              {/* Cuerpo */}
              <ellipse
                cx="120" cy="164" rx="48" ry="53"
                fill="#292929"
              />

              {/* Pecho blanco */}
              <path
                d="M89 137 Q114 129 147 144
                   Q151 193 121 215
                   Q82 211 83 174Z"
                fill="#F5F2EF"
              />

              {/* Mancha naranja */}
              <path
                d="M151 153 Q174 168 159 194
                   L140 186 Q131 168 151 153"
                fill="#C5A17F"
              />

              {/* Cabeza */}
              <path
                d="M59 87 L55 22 Q57 16 65 21
                   L100 49 Q119 43 141 49
                   L176 21 Q183 16 185 25
                   L182 89 Q193 135 151 142
                   Q113 159 77 137 Q50 122 59 87Z"
                fill="#292929"
              />

              {/* Orejitas */}
              <path
                d="M65 36 L70 71 L88 57Z
                   M174 36 L152 57 L174 70Z"
                fill="#BFA3A2"
              />

              {/* Mancha de la frente */}
              <path
                d="M112 47 Q131 43 145 52
                   L125 75 L108 67Z"
                fill="#C5A17F"
              />

              {/* Franja blanca */}
              <path
                d="M112 47 L127 48
                   Q121 76 132 96
                   Q156 107 164 128
                   Q122 166 79 132
                   Q78 110 108 98
                   Q119 72 112 47Z"
                fill="#F5F2EF"
              />

              <ellipse
                cx="99" cy="122" rx="13" ry="10"
                fill="#C5A17F"
              />

              {/* Patitas */}
              <ellipse
                cx="91" cy="206" rx="23" ry="12"
                fill="#F5F2EF"
              />

              <ellipse
                cx="144" cy="206" rx="23" ry="12"
                fill="#F5F2EF"
              />

              {/* Ojitos */}
              {pets % 2 === 0 ? (
                <g className="cat-open-eyes">
                  <ellipse
                    cx="91" cy="90" rx="10" ry="12"
                    fill="#A5B184"
                  />
                  <ellipse
                    cx="148" cy="90" rx="10" ry="12"
                    fill="#B88B58"
                  />
                  <ellipse
                    cx="92" cy="90" rx="4" ry="9"
                    fill="#171717"
                  />
                  <ellipse
                    cx="147" cy="90" rx="4" ry="9"
                    fill="#171717"
                  />
                  <circle cx="88" cy="86" r="2.5" fill="white" />
                  <circle cx="144" cy="86" r="2.5" fill="white" />
                </g>
              ) : (
                <path
                  d="M82 94 Q91 82 101 94
                     M138 94 Q148 82 157 94"
                  stroke="#BEBEBE"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              )}

              {/* Naricita */}
              <path
                d="M107 108 Q120 102 132 108 L120 120Z"
                fill="#292929"
              />

              <path
                d="M120 118 Q113 130 106 124
                   M120 118 Q127 130 134 124"
                stroke="#292929"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Bigotes */}
              <g stroke="#AAAAAA" strokeWidth="1.3">
                <path
                  d="M95 116 L52 107
                     M94 121 L48 122
                     M95 126 L57 138
                     M144 116 L188 107
                     M145 121 L193 122
                     M144 126 L185 138"
                />
              </g>

              {/* Corazoncito */}
              {pets % 2 === 1 && (
                <path
                  className="molly-heart"
                  d="M202 51 C182 42 187 26 197 31
                     L204 38 Q216 24 224 35
                     Q231 46 202 60Z"
                  fill="#C5A17F"
                />
              )}
            </svg>
          </button>

          <span className="cat-name">Molly.</span>

          <p className="cat-message" aria-live="polite">
            {messages[pets % messages.length]}
          </p>

          <span className="cat-counter">
            {pets} {es ? "caricias" : "head pats"}
          </span>
        </div>
      )}

      <button
        type="button"
        className="cat-toggle"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        aria-controls={expanded ? panelId : undefined}
        aria-label={
          es ? "Mostrar u ocultar a Molly" : "Show or hide Molly"
        }
      >
        <PawPrint size={20} />
      </button>
    </aside>
  );
}