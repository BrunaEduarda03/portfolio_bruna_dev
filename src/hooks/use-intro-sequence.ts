import { useCallback, useEffect, useState } from "react";

export type IntroPhase = "intro" | "reveal" | "complete";
export const INTRO_HOLD = 2200;
export const INTRO_REVEAL = 1100;
export const INTRO_DURATION = INTRO_HOLD + INTRO_REVEAL;
export const INTRO_SESSION_KEY = "bm-space-code-intro-v4";

function initialPhase(): IntroPhase {
  if (window.location.hash || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "complete";
  try { if (sessionStorage.getItem(INTRO_SESSION_KEY) === "true") return "complete"; }
  catch { /* The intro also works with storage disabled. */ }
  return "intro";
}

export function useIntroSequence() {
  const [phase, setPhase] = useState<IntroPhase>(initialPhase);
  const complete = useCallback(() => {
    try { sessionStorage.setItem(INTRO_SESSION_KEY, "true"); } catch { /* Optional storage. */ }
    setPhase("complete");
  }, []);
  const reveal = useCallback(() => setPhase(current => current === "intro" ? "reveal" : current), []);

  useEffect(() => {
    if (phase === "complete") return;
    const timer = window.setTimeout(phase === "intro" ? reveal : complete, phase === "intro" ? INTRO_HOLD : INTRO_REVEAL);
    return () => window.clearTimeout(timer);
  }, [phase, reveal, complete]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => { if (preference.matches) complete(); };
    preference.addEventListener("change", onChange);
    return () => preference.removeEventListener("change", onChange);
  }, [complete]);

  return { phase, reveal };
}
