"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label={
        language === "es"
          ? "Cambiar tema"
          : "Switch theme"
      }
      onClick={() =>
        setTheme(
          resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      <Moon size={19} className="moon-icon" />
      <Sun size={19} className="sun-icon" />
    </button>
  );
}