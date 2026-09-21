import React, { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { MONOGRAM_PATHS } from "./Brand";

import { IntroPhase } from "../hooks/use-intro-sequence";
import CodeConstellation from "./CodeConstellation";

const STARS = Array.from({ length: 48 }, (_, i) => ({
  x: (i * 37 + 13) % 100, y: (i * 53 + 7) % 100, size: i % 5 === 0 ? 3 : 1.5,
}));

interface SplashScreenProps {
  phase: IntroPhase;
  onSkip: () => void;
}

export default function SplashScreen({ phase, onSkip }: SplashScreenProps) {
  const { t } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const active = phase !== "complete";

  useEffect(() => {
    if (!active) return;
    const element = dialog.current;
    element?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  if (!active) return null;
  return (
    <dialog ref={dialog} className="brand-intro" data-phase={phase} aria-labelledby="intro-name" onCancel={event => { event.preventDefault(); onSkip(); }}>
      <div className="intro-stars" aria-hidden="true">
        {STARS.map((star, index) => <i key={index} style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size, animationDelay: `${index % 6 * .2}s` }} />)}
      </div>
      <div className="intro-top"><span>BM / PORTFOLIO</span><button type="button" onClick={onSkip}>{t("identity.skip")} ↗</button></div>
      <div className="intro-center">
        <div className="orbital-stage" aria-hidden="true">
          <div className="orbital-halo" />
          <CodeConstellation />
          <svg className="orbital-tracks" viewBox="0 0 600 400" fill="none" stroke="currentColor">
            <ellipse cx="300" cy="200" rx="260" ry="104" transform="rotate(-24 300 200)" />
            <ellipse cx="300" cy="200" rx="190" ry="145" transform="rotate(48 300 200)" />
          </svg>
          <svg className="space-monogram" viewBox="0 0 320 180" fill="none">
            <g className="monogram-code-brackets" stroke="currentColor" strokeWidth="1.8"><path d="M34 68L16 90L34 112M286 68L304 90L286 112" /></g>
            {MONOGRAM_PATHS.map((path, index) => (
              <motion.path
                key={index}
                d={path}
                initial={{ pathLength: 0, opacity: 0, x: index === 0 ? -10 : 10 }}
                animate={{ pathLength: 1, opacity: 1, x: 0 }}
                transition={{ duration: 1.3, delay: .2 + index * .2, ease: "easeInOut" }}
                stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"
              />
            ))}
            <g className="constellation-nodes" fill="currentColor">
              <circle cx="58" cy="48" r="3" /><circle cx="132" cy="110" r="3" />
              <circle cx="209" cy="101" r="3" /><circle cx="262" cy="48" r="3" />
            </g>
          </svg>
          <span className="orbital-spark spark-one" /><span className="orbital-spark spark-two" />
        </div>
        <div className="intro-caption">
          <h2 id="intro-name">Bruna <span>Maciel</span></h2>
          <p>{t("identity.intro")}</p>
        </div>
      </div>
      <div className="intro-bottom"><span>SOFTWARE ENGINEER</span><span>{t("identity.signature")}</span></div>
    </dialog>
  );
}
