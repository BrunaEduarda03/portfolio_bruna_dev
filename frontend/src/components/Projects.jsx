import React, { useState } from 'react';
import { projects } from '../data/mock';
import { useLanguage } from '../i18n/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState(null);
  const projectItems = t('projects.items');

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-500 font-mono text-sm">{t('projects.sectionNum')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">{t('projects.title')}</h2>
            <div className="flex-1 h-[1px] bg-zinc-800 ml-4" />
          </div>
          <p className="text-zinc-500 text-sm max-w-lg">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.isArray(projectItems) && projectItems.map((item, index) => {
            const project = projects[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(index)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm hover:border-amber-500/20 hover:bg-amber-500/[0.02] transition-all duration-500 flex flex-col"
              >
                {/* Project icon area */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/15 transition-colors duration-300">
                    <Code2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project && (
                      <>
                        <a
                          href={project.github}
                          className="p-2 rounded-lg text-zinc-600 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.link}
                          className="p-2 rounded-lg text-zinc-600 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors duration-300 mb-1 font-mono">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-amber-500/60 mb-3">{item.subtitle}</p>
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
      </div>
    </section>
  );
};

export default Projects;
