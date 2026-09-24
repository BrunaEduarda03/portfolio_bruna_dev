import React, { useState } from "react";
import SectionPagination, { SECTION_PAGE_SIZE } from "./SectionPagination";
import CasePreview from "./CasePreview";
import { findCaseByProject, localize } from "../data/caseStudies";
import { caseStudyCopy } from "../data/caseStudyCopy";
import { projects } from "../data/mock";
import { useLanguage } from "../i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, ArrowUpRight } from "lucide-react";
import { trackEvent } from "../lib/analytics";

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const projectItems = t("projects.items");
  const items: { title: string; subtitle: string; description: string }[] = Array.isArray(projectItems) ? projectItems : [];
  const totalPages = Math.ceil(items.length / SECTION_PAGE_SIZE);
  const pageStart = (page - 1) * SECTION_PAGE_SIZE;
  const visibleItems = items.slice(pageStart, pageStart + SECTION_PAGE_SIZE);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-3xl" />

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
              {t("projects.sectionNum")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              {t("projects.title")}
            </h2>
            <div className="flex-1 min-w-[2rem] h-[1px] bg-zinc-800 ml-4" />
          </div>
          <p className="text-zinc-500 text-sm max-w-lg">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 scroll-mt-28">
          {visibleItems.map((item, localIndex) => {
              const index = pageStart + localIndex;
              const project = projects[index];
              const study = project ? findCaseByProject(project.id) : undefined;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: localIndex * 0.1 }}
                  onMouseEnter={() => setHoveredId(index)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm hover:border-amber-500/20 hover:bg-amber-500/[0.02] transition-all duration-500 flex flex-col"
                >
                  {study && <a href={`#/cases/${study.slug}`} className="project-case-preview" aria-label={`${localize(caseStudyCopy.open, language)}: ${study.title}`} style={{ "--case-accent": study.accent } as React.CSSProperties}>
                    <CasePreview study={study} compact />
                    <span className="project-mock-tag">{localize(caseStudyCopy[study.subprojects ? "subprojects" : study.gallery ? "productScreen" : "mock"], language)}</span>
                  </a>}
                  {/* Project icon area */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/15 transition-colors duration-300">
                      <Code2 className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      {project?.wip && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono border border-amber-500/25 bg-amber-500/5 text-amber-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          {t("projects.wipLabel")}
                        </span>
                      )}
                      {project && (
                        <>
                          {project.github && (
                            <a
                              href={project.github}
                              aria-label={`${item.title} — GitHub`}
                              className="p-2 rounded-lg text-zinc-600 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                trackEvent("project_click", { project: item.title, type: "github" });
                              }}
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              aria-label={`${item.title} — website`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 rounded-lg text-zinc-600 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                trackEvent("project_click", { project: item.title, type: "live" });
                              }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors duration-300 mb-1 font-mono">
                    {study ? <a href={`#/cases/${study.slug}`}>{item.title}</a> : item.title}
                  </h3>
                  <p className={`text-xs font-mono text-amber-500/60 ${project?.wip ? "mb-1" : "mb-3"}`}>
                    {item.subtitle}
                  </p>
                  {project?.wip && (
                    <p className="text-[10px] font-mono text-zinc-600 mb-3">
                      Auclan Design · Freelancer
                    </p>
                  )}
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5 flex-1">
                    {item.description}
                  </p>

                  {project && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-zinc-800/70 text-zinc-500 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {study && <a className="project-case-link" href={`#/cases/${study.slug}`} onClick={() => trackEvent("case_open", { project: study.title })}>{localize(caseStudyCopy.open, language)}<ArrowUpRight size={18} /></a>}
                  {/* Hover glow effect */}
                  <AnimatePresence>
                    {hoveredId === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
        </div>
        <SectionPagination page={page} totalPages={totalPages} controlsId="projects-grid" label={t("projects.title")} onChange={next => { setPage(next); setHoveredId(null); }} />
      </div>
    </section>
  );
};

export default Projects;
