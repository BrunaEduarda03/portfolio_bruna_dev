import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { translations } from "./translations";

type LanguageCode = "pt" | "en" | "es";

interface LanguageOption {
  code: LanguageCode;
  label: string;
  fullLabel: string;
}

interface LanguageContextType {
  language: LanguageCode;
  changeLanguage: (lang: LanguageCode) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LANGUAGES: LanguageOption[] = [
  { code: "pt", label: "PT", fullLabel: "Português" },
  { code: "en", label: "EN", fullLabel: "English" },
  { code: "es", label: "ES", fullLabel: "Español" },
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem("portfolio_language");
    return saved &&
      (["pt", "en", "es"] as LanguageCode[]).includes(saved as LanguageCode)
      ? (saved as LanguageCode)
      : "en";
  });

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  }, [language]);

  const changeLanguage = useCallback((lang: LanguageCode) => {
    setLanguage(lang);
    localStorage.setItem("portfolio_language", lang);
  }, []);

  const t = useCallback(
    (key: string): any => {
      const keys = key.split(".");
      let value: any = (translations as Record<string, any>)[language];
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          return key;
        }
      }
      return value;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
