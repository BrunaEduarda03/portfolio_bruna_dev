import React from "react";
import { experiences } from "../data/mock";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();
  const jobs = t("experience.jobs");

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
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
              {t("experience.sectionNum")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              {t("experience.title")}
            </h2>
            <div className="flex-1 min-w-[2rem] h-[1px] bg-zinc-800 ml-4" />
          </div>
          <p className="text-zinc-500 text-sm max-w-lg">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-zinc-800" />

          <div className="space-y-12">
            {Array.isArray(jobs) &&
              jobs.map((job, index) => {
                const exp = experiences[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative pl-12 md:pl-20 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-amber-500/50 bg-[#0a0a0a] group-hover:border-amber-400 group-hover:bg-amber-500/20 transition-all duration-300">
                      <div
                        className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping"
                        style={{ animationDuration: "3s" }}
                      />
                    </div>

                    {/* Content Card */}
                    <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm group-hover:border-amber-500/15 group-hover:bg-amber-500/[0.02] transition-all duration-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors duration-300">
                            {job.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase className="w-3.5 h-3.5 text-amber-500/60" />
                            <span className="text-sm text-amber-500/80 font-mono">
                              {job.company}
                            </span>
                          </div>
                        </div>
                        <span className="mt-2 sm:mt-0 text-xs font-mono text-zinc-600 bg-zinc-800/50 px-3 py-1 rounded-full">
                          {job.period}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {job.description.map((desc: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-zinc-400"
                          >
                            <ChevronRight className="w-3.5 h-3.5 text-amber-500/40 mt-0.5 flex-shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {exp && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-amber-500/5 border border-amber-500/10 text-amber-400/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
