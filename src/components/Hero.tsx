import React from "react";
import { personalInfo } from "../data/mock";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import CodeConstellation from "./CodeConstellation";
import { HeroScene } from "./Scene3D";
import { trackEvent } from "../lib/analytics";

const CV_FILES: Record<string, string> = {
  en: "Bruna-Maciel-CV-EN.pdf",
  es: "Bruna-Maciel-CV-ES.pdf",
};
const CV_DEFAULT = "Bruna-Maciel-CV.pdf";

const Hero = ({ introReady = true }: { introReady?: boolean }) => {
  const { t, language } = useLanguage();
  const cvFile = CV_FILES[language] ?? CV_DEFAULT;
  const cvHref = `${process.env.PUBLIC_URL}/cv/${cvFile}`;

  return (
    <section className="space-hero relative min-h-screen flex items-center justify-center overflow-hidden bg-page">
      {/* 3D Background */}
      <div className="hero-universe absolute inset-0 z-0">
        <HeroScene />
        <div className="hero-code-system"><CodeConstellation /></div>
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-page via-transparent to-page opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-32 bg-gradient-to-t from-page to-transparent" />

      <div className="hero-content relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-gold-400 text-xs font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {t("hero.availability")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-ink-100">Bruna </span>
          <span className="relative">
            <span className="text-gold-400">Maciel</span>
            <span className="absolute -bottom-0 left-0 w-full h-[3px] bg-amber-500/40 rounded-full" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="text-base md:text-xl text-ink-400 max-w-2xl mx-auto mb-4 font-mono"
        >
          {t("hero.role")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="text-sm md:text-base text-ink-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.tagline")}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            aria-label="GitHub"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("social_click", { network: "github", location: "hero" })}
            className="p-3 rounded-xl border border-surface-800 bg-surface-900/50 text-ink-400 hover:text-gold-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            aria-label="LinkedIn"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("social_click", { network: "linkedin", location: "hero" })}
            className="p-3 rounded-xl border border-surface-800 bg-surface-900/50 text-ink-400 hover:text-gold-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${personalInfo.email}`}
            onClick={() => trackEvent("social_click", { network: "email", location: "hero" })}
            className="p-3 rounded-xl border border-surface-800 bg-surface-900/50 text-ink-400 hover:text-gold-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.8, delay: 0.58 }}
          className="mb-12 -mt-8"
        >
          <a
            href={cvHref}
            download={cvFile}
            onClick={() => trackEvent("cv_download", { location: "hero", language })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-500/30 text-gold-400 text-sm font-mono hover:bg-amber-500/10 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            {t("hero.downloadCV")}
          </a>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => {
            trackEvent("nav_click", { section: "about", location: "hero_scroll" });
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: introReady ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.68 }}
          whileHover={{ scale: 1.1 }}
          className="inline-flex flex-col items-center gap-2 cursor-pointer group mx-auto"
          aria-label={t("hero.scroll")}
        >
          <span className="text-xs font-mono text-ink-600 group-hover:text-gold-400 tracking-widest uppercase transition-colors duration-300">
            {t("hero.scroll")}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-gold-500/40 group-hover:text-gold-400 transition-colors duration-300" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
