import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { Monitor, Server, Smartphone, Database, Layers, Cloud } from "lucide-react";

const parseTags = (desc: string): string[] => {
  if (typeof desc !== "string") return [];
  if (desc.includes(" • ")) return desc.split(" • ");
  if (desc.includes(", ")) return desc.split(", ");
  return [desc];
};

const TECH_KEYWORDS = ["React Native", "React", "Vue", "Node.js", "PHP/Laravel", "AWS"];

const renderRich = (
  text: string,
  rules: { keyword: string; className: string }[]
) => {
  const activeRules = rules.filter((r) => r.keyword);
  if (!activeRules.length) return text;
  const pattern = new RegExp(
    `(${activeRules
      .map((r) => r.keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "g"
  );
  return text.split(pattern).map((part, i) => {
    const rule = activeRules.find((r) => r.keyword === part);
    return rule ? (
      <span key={i} className={rule.className}>
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    );
  });
};

const labelClass =
  "font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-medium block mb-2";

const About = () => {
  const { t } = useLanguage();

  const skillCards = [
    { id: 1, icon: Monitor, title: t("about.frontend"), description: t("about.frontendDesc") },
    { id: 2, icon: Server, title: t("about.backend"), description: t("about.backendDesc") },
    { id: 3, icon: Smartphone, title: t("about.mobile"), description: t("about.mobileDesc") },
    { id: 4, icon: Database, title: t("about.databases"), description: t("about.databasesDesc") },
    { id: 5, icon: Layers, title: t("about.architecture"), description: t("about.architectureDesc") },
    { id: 6, icon: Cloud, title: t("about.devops"), description: t("about.devopsDesc") },
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

        {/* Profile + meta rail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 mb-16"
        >
          <div>
            <span className={labelClass}>{t("about.whoAmI")}</span>
            <p className="text-xl md:text-2xl leading-snug text-zinc-100/95">
              {renderRich(t("about.bioIntro"), [
                { keyword: t("about.bioRole"), className: "font-semibold text-amber-400" },
              ])}
            </p>
            <p className="mt-5 text-sm leading-7 text-zinc-500 max-w-[62ch]">
              {renderRich(
                t("about.bioDetails"),
                TECH_KEYWORDS.map((k) => ({ keyword: k, className: "text-amber-400" }))
              )}
            </p>
          </div>

          <div className="lg:border-l lg:border-zinc-800/80 lg:pl-8 flex flex-col gap-6">
            <span className="inline-flex self-start items-center gap-2 pl-2.5 pr-3 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/20 font-mono text-[11px] text-amber-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
              </span>
              {t("about.availablePill")}
            </span>

            <div>
              <span className={labelClass}>{t("about.basedIn")}</span>
              <span className="text-sm text-zinc-200">{t("about.location")}</span>
            </div>

            <div>
              <span className={labelClass}>{t("about.studying")}</span>
              <span className="text-sm text-zinc-200 leading-snug">
                {t("about.currentStudy")}
              </span>
            </div>

            <div>
              <span className={labelClass}>{t("about.languages")}</span>
              <div className="space-y-3 mt-1">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-300 font-medium">{lang.name}</span>
                      <span className="text-zinc-500 font-mono">{lang.level}</span>
                    </div>
                    <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-amber-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className={labelClass}>{t("about.techStackLabel")}</span>
          <div>
            {skillCards.map((card) => {
              const tags = parseTags(card.description as string);
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-3 sm:gap-6 py-4 px-3 -mx-3 border-t border-zinc-800/70 rounded-lg transition-colors duration-200 hover:bg-amber-500/[0.03]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 shrink-0 grid place-items-center rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <IconComponent className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                      {card.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 content-start">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[12.5px] leading-none text-zinc-300 transition-all duration-150 hover:border-amber-500/50 hover:text-amber-300 hover:bg-amber-500/10 hover:-translate-y-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="border-t border-zinc-800/70" />
          </div>
        </motion.div>

        {/* Education timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <span className={`${labelClass} mb-6`}>{t("about.educationLabel")}</span>
          <div className="relative pl-[30px]">
            <div className="absolute left-[4px] top-2 bottom-3.5 w-[2px] bg-gradient-to-b from-amber-500 to-amber-500/10" />
            {educationItems.map((edu) => (
              <div key={edu.degree} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[30px] top-[3px] w-[11px] h-[11px] rounded-full bg-[#0a0a0a] border-2 border-amber-500" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 mb-2">
                  <span className="text-base sm:text-lg font-semibold text-zinc-100 tracking-tight">
                    {edu.degree}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-500">
                    {edu.institution}
                  </span>
                  <span className="font-mono text-[11px] text-amber-500">
                    {edu.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {Array.isArray(edu.highlights) &&
                    edu.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[13.5px] leading-relaxed text-zinc-500"
                      >
                        <span className="text-amber-500 shrink-0">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
