import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../i18n/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = t(isDark ? "identity.lightMode" : "identity.darkMode");

  return (
    <button type="button" onClick={toggleTheme} aria-label={label} title={label}
      className="theme-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-surface-800 text-gold-400 hover:bg-amber-500/10 transition-colors">
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
