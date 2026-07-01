import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  Layers,
  MapPin,
  GraduationCap,
  Globe,
  Sparkles,
} from "lucide-react";

const parseTags = (desc: string): string[] => {
  if (typeof desc !== "string") return [];
  if (desc.includes(" • ")) return desc.split(" • ");
  if (desc.includes(", ")) return desc.split(", ");
  return [desc];
};

const About = () => {
  const { t } = useLanguage();

  const skillCards = [
    {
      id: 1,
      title: t("about.frontend"),
      description: t("about.frontendDesc"),
      icon: Monitor,
      span: "col-span-2",
    },
    {
      id: 2,
      title: t("about.backend"),
      description: t("about.backendDesc"),
      icon: Server,
      span: "col-span-1",
    },
    {
      id: 3,
      title: t("about.mobile"),
      description: t("about.mobileDesc"),
      icon: Smartphone,
      span: "col-span-1",
    },
    {
      id: 4,
      title: t("about.databases"),
      description: t("about.databasesDesc"),
      icon: Database,
      span: "col-span-1",
    },
    {
      id: 5,
      title: t("about.architecture"),
      description: t("about.architectureDesc"),
      icon: Layers,
      span: "col-span-1",
    },
    {
      id: 6,
      title: t("about.devops"),
      description: t("about.devopsDesc"),
      icon: Cloud,
      span: "col-span-2",
    },
  ];

  const languages = [
    { name: t("about.langPt"), level: t("about.langPtLevel"), percentage: 100 },
    { name: t("about.langEn"), level: t("about.langEnLevel"), percentage: 75 },
    { name: t("about.langEs"), level: t("about.langEsLevel"), percentage: 65 },
  ];

  const educationItems = [
    {
      degree: t("about.edu1Degree"),
      institution: t("about.edu1Institution"),
      period: t("about.edu1Period"),
      highlights: t("about.edu1Highlights"),
    },
    {
      degree: t("about.edu2Degree"),
      institution: t("about.edu2Institution"),
      period: t("about.edu2Period"),
      highlights: t("about.edu2Highlights"),
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-amber-500 font-mono text-sm">
              {t("about.sectionNum")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              {t("about.title")}
            </h2>
            <div className="flex-1 min-w-[2rem] h-[1px] bg-zinc-800 ml-4" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 p-6 rounded-2xl border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-xs text-amber-400 tracking-wider uppercase font-semibold">
                {t("about.whoAmI")}
              </span>
            </div>
            <p className="text-zinc-300 leading-7 text-sm mb-6">
              {t("about.bio")}
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-zinc-300">{t("about.location")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-zinc-300">{t("about.currentStudy")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-zinc-300">
                  {t("about.availabilityText")}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                {t("about.languages")}
              </span>
              <div className="mt-4 space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-300 font-medium">{lang.name}</span>
                      <span className="text-zinc-400 font-mono">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bento Grid - Skills */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {skillCards.map((card, index) => {
              const IconComponent = card.icon;
              const tags = parseTags(card.description as string);
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`sm:${card.span} p-5 rounded-2xl border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm group hover:border-amber-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-500`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300 shrink-0">
                      <IconComponent className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="font-mono text-sm font-bold text-zinc-100 group-hover:text-amber-300 transition-colors duration-300 tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 leading-5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Education cards */}
            {educationItems.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * (skillCards.length + index),
                }}
                className={`${index === 0 ? "sm:col-span-2" : "sm:col-span-1"} p-5 rounded-2xl border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm group hover:border-amber-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-500`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-bold text-zinc-100 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{edu.institution}</p>
                    <p className="text-xs text-amber-500/70 font-mono mt-1">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5 mt-3 pl-1">
                  {Array.isArray(edu.highlights) &&
                    edu.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-amber-500/60 mt-0.5 shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
