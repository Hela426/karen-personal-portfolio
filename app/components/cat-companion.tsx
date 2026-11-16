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
        "¡Hola, visitante!",
        "¡Miau! ♡",
        "Me gustan las caricias.",
        "¿Ya viste los proyectos?",
        "Superviso el código.",
        "Todo funciona a la perfección... creo.",
      ]
    : [
        "Hello, visitor!",
        "Meow! ♡",
        "I love head pats.",
        "Have you seen the projects?",
        "I supervise the code.",
        "Everything works perfectly... I think.",
      ];

  return (
    <aside className="cat-companion">
      {expanded && (
        <div className="cat-panel" id={panelId}>
          <span className="cat-caption">
            {es ? "ASISTENTE FELINA" : "FELINE ASSISTANT"}
          </span>

          <button
            type="button"
            className="cat-pet-button"
            onClick={() => setPets((value) => value + 1)}
            aria-label={es ? "Acariciar a Moon" : "Pet Moon"}
          >
            <svg
              viewBox="0 0 240 240"
              className="cat-illustration"
              aria-hidden="true"
            >
              <ellipse
                cx="120"
                cy="219"
                rx="78"
                ry="7"
                fill="currentColor"
                opacity=".08"
              />

              <g fill="currentColor">
                <path
                  className="cat-tail"
                  d="M155 202 C226 226 233 153 199 168"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="15"
                  strokeLinecap="round"
                />

                <ellipse
                  cx="120"
                  cy="164"
                  rx="48"
                  ry="53"
                />

                <path
                  d="M59 87 L55 22 Q57 16 65 21
                     L100 49 Q119 43 141 49
                     L176 21 Q183 16 185 25
                     L182 89 Q193 135 151 142
                     Q113 159 77 137 Q50 122 59 87Z"
                />

                <ellipse cx="91" cy="206" rx="23" ry="12"/>
                <ellipse cx="144" cy="206" rx="23" ry="12"/>
              </g>

              <g
                className={
                  pets % 2 === 0 ? "cat-open-eyes" : ""
                }
                fill="var(--surface)"
              >
                {pets % 2 === 0 ? (
                  <>
                    <ellipse cx="91" cy="90" rx="6" ry="10"/>
                    <ellipse cx="148" cy="90" rx="6" ry="10"/>
                  </>
                ) : (
                  <path
                    d="M82 94 Q91 82 101 94
                       M138 94 Q148 82 157 94"
                    stroke="var(--surface)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                )}
              </g>

              <path
                d="M114 106 Q120 102 126 106 L120 112Z"
                fill="var(--surface)"
              />
            </svg>
          </button>

          <span className="cat-name">Moon</span>

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
          es ? "Mostrar u ocultar a Moon" : "Show or hide Moon"
        }
      >
        <PawPrint size={20} />
      </button>
    </aside>
  );
}