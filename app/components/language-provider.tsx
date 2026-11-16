"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";

type Language = "es" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext =
  createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "moonveil-language";
const LANGUAGE_EVENT = "moonveil-language-change";

function subscribe(callback: () => void) {
  window.addEventListener(LANGUAGE_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(LANGUAGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getLanguage(): Language {
  return localStorage.getItem(STORAGE_KEY) === "en"
    ? "en"
    : "es";
}

function getServerLanguage(): Language {
  return "es";
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    getLanguage,
    getServerLanguage
  );

  function toggleLanguage() {
    const nextLanguage = language === "es" ? "en" : "es";

    localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;

    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  }

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}