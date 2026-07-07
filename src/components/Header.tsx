import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/mock";
import { useLanguage, LANGUAGES } from "../i18n/LanguageContext";
import { Menu, X, Terminal, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "../lib/analytics";

const Header = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.certifications"), href: "#certifications" },
    { name: t("nav.techstack"), href: "#techstack" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuOpen && !(e.target as Element).closest(".lang-switcher")) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [langMenuOpen]);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    trackEvent("nav_click", { section: href.replace("#", ""), location: "header" });
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-amber-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
            <Terminal className="w-4 h-4 text-amber-400" />
          </div>
          <span className="font-mono text-sm text-zinc-300 group-hover:text-amber-400 transition-colors duration-300">
            {personalInfo.name.split(" ")[0].toLowerCase()}.dev
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <motion.ul
          className="hidden md:flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="relative px-4 py-2 text-sm font-mono text-zinc-400 hover:text-amber-400 transition-colors duration-300 group"
              >
                <span className="text-amber-500/60 text-xs mr-1">
                  0{index + 1}.
                </span>
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-amber-500/50 group-hover:w-3/4 transition-all duration-300" />
              </button>
            </li>
          ))}
        </motion.ul>

        {/* Right side: Language switcher + CTA */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Language Switcher */}
          <div className="relative lang-switcher">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-zinc-800 text-zinc-400 rounded-lg hover:border-amber-500/30 hover:text-amber-400 transition-all duration-300"
            >
              <Globe className="w-3.5 h-3.5" />
              {language.toUpperCase()}
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 bg-[#141414] border border-zinc-800 rounded-lg overflow-hidden shadow-xl shadow-black/40 min-w-[140px]"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        trackEvent("language_change", { language: lang.code });
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-mono flex items-center justify-between transition-all duration-200 ${
                        language === lang.code
                          ? "text-amber-400 bg-amber-500/5"
                          : "text-zinc-400 hover:text-amber-400 hover:bg-amber-500/5"
                      }`}
                    >
                      <span>{lang.fullLabel}</span>
                      <span className="text-zinc-600">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-amber-500/30 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            {t("nav.contact")}
          </a>
        </motion.div>

        {/* Mobile: Language + Menu */}
        <div className="md:hidden flex items-center gap-2">
          <div className="relative lang-switcher">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 px-2 py-1.5 text-xs font-mono border border-zinc-800 text-zinc-400 rounded-lg"
            >
              <Globe className="w-3 h-3" />
              {language.toUpperCase()}
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute right-0 top-full mt-2 bg-[#141414] border border-zinc-800 rounded-lg overflow-hidden shadow-xl shadow-black/40 min-w-[130px] z-50"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        trackEvent("language_change", { language: lang.code });
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-mono ${
                        language === lang.code
                          ? "text-amber-400 bg-amber-500/5"
                          : "text-zinc-400 hover:text-amber-400"
                      }`}
                    >
                      {lang.fullLabel}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-amber-400 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-amber-500/10 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-mono text-zinc-400 hover:text-amber-400 hover:bg-amber-500/5 rounded-lg transition-all duration-300"
                  >
                    <span className="text-amber-500/60 mr-2">
                      0{index + 1}.
                    </span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
