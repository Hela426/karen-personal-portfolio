"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./language-provider";
import { useLanguage } from "./language-provider";
import { useEffect } from "react";

function LanguageSync() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      storageKey="moonveil-theme"
      disableTransitionOnChange
    >
      <LanguageProvider>
        <LanguageSync />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}