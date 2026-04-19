import React, { useRef } from "react";
import { techStack, type TechItem } from "../data/mock";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface MarqueeRowProps {
  items: TechItem[];
  direction?: "left" | "right";
  speed?: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction = "left",
  speed = 30,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden py-3" ref={containerRef}>
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm hover:border-amber-500/20 hover:bg-amber-500/[0.03] transition-all duration-300 group cursor-default whitespace-nowrap"
          >
            <div
              className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: tech.color }}
            />
            <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  const { t } = useLanguage();

  return (
    <section
      id="techstack"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-amber-500/[0.015] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

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
              {t("techstack.sectionNum")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              {t("techstack.title")}
            </h2>
            <div className="flex-1 min-w-[2rem] h-[1px] bg-zinc-800 ml-4" />
          </div>
          <p className="text-zinc-500 text-sm max-w-lg">
            {t("techstack.subtitle")}
          </p>
        </motion.div>

        {/* Category Labels + Marquees */}
        <div className="space-y-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3 px-1"
            >
              <div className="w-6 h-6 rounded-md bg-amber-500/10 flex items-center justify-center">
                <Cpu className="w-3 h-3 text-amber-400" />
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                {t("techstack.frontend")}
              </span>
            </motion.div>
            <MarqueeRow
              items={techStack.frontend}
              direction="left"
              speed={25}
            />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-3 px-1"
            >
              <div className="w-6 h-6 rounded-md bg-amber-500/10 flex items-center justify-center">
                <Cpu className="w-3 h-3 text-amber-400" />
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                {t("techstack.backend")}
              </span>
            </motion.div>
            <MarqueeRow
              items={techStack.backend}
              direction="right"
              speed={30}
            />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-3 px-1"
            >
              <div className="w-6 h-6 rounded-md bg-amber-500/10 flex items-center justify-center">
                <Cpu className="w-3 h-3 text-amber-400" />
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                {t("techstack.tools")}
              </span>
            </motion.div>
            <MarqueeRow items={techStack.tools} direction="left" speed={28} />
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16"
        >
          {[
            { label: t("techstack.stats.technologies"), value: "16+" },
            { label: t("techstack.stats.projects"), value: "19+" },
            {
              label: t("techstack.stats.experience"),
              value: t("techstack.stats.experienceValue"),
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 text-center hover:border-amber-500/15 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-amber-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
