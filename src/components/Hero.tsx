import React from "react";
import { personalInfo } from "../data/mock";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { HeroScene } from "./Scene3D";
import { trackEvent } from "../lib/analytics";

const CV_FILES: Record<string, string> = {
  en: "/cv/Bruna-Eduarda-Maciel-CV-EN.pdf",
  es: "/cv/Bruna-Eduarda-Maciel-CV-ES.pdf",
};
const CV_DEFAULT = "/cv/Bruna-Eduarda-Maciel-CV.pdf";

const Hero = () => {
  const { t, language } = useLanguage();
  const cvHref = CV_FILES[language] ?? CV_DEFAULT;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {t("hero.availability")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-zinc-100">Bruna </span>
          <span className="relative">
            <span className="text-amber-400">Maciel</span>
            <span className="absolute -bottom-0 left-0 w-full h-[3px] bg-amber-500/40 rounded-full" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 font-mono"
        >
          {t("hero.role")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.tagline")}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("social_click", { network: "github", location: "hero" })}
            className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("social_click", { network: "linkedin", location: "hero" })}
            className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => trackEvent("social_click", { network: "email", location: "hero" })}
            className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mb-12 -mt-8"
        >
          <a
            href={cvHref}
            download
            onClick={() => trackEvent("cv_download", { location: "hero", language })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-500/30 text-amber-400 text-sm font-mono hover:bg-amber-500/10 transition-all duration-300"
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
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          className="inline-flex flex-col items-center gap-2 cursor-pointer group mx-auto"
          aria-label={t("hero.scroll")}
        >
          <span className="text-xs font-mono text-zinc-600 group-hover:text-amber-400 tracking-widest uppercase transition-colors duration-300">
            {t("hero.scroll")}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-amber-500/40 group-hover:text-amber-400 transition-colors duration-300" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
