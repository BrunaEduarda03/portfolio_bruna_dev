import React from "react";
import CaseFeatureGallery from "./CaseFeatureGallery";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { CaseCopy, CaseSubproject, localize } from "../data/caseStudies";
import { caseStudyCopy } from "../data/caseStudyCopy";
import { useLanguage } from "../i18n/LanguageContext";

export default function CaseSubprojects({ projects }: { projects: CaseSubproject[] }) {
  const { language } = useLanguage();
  const text = (copy: CaseCopy) => localize(copy, language);
  const ui = (key: string) => text(caseStudyCopy[key]);
  const jumpTo = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    target?.focus({ preventScroll: true });
  };
  return <section className="case-subprojects" aria-labelledby="subprojects-title">
    <div className="case-section-heading"><span>02 / PROJECTS</span><h2 id="subprojects-title">{ui("subprojects")}</h2></div>
    <nav className="case-project-grid" aria-label={ui("subprojects")}>
      {projects.map((project, index) => <button type="button" key={project.id} onClick={() => jumpTo(project.id)}>
        <small>0{index + 1} / COOPANESTRIO</small><strong>{text(project.title)}</strong><p>{text(project.summary)}</p><span>{ui("explore")}<ArrowDown size={16} /></span>
      </button>)}
    </nav>
    {projects.map((project, index) => <article key={project.id} className="case-subproject" aria-labelledby={`${project.id}-title`}>
      <header><div><p className="case-eyebrow">COOPANESTRIO / 0{index + 1}</p><h2 id={project.id} tabIndex={-1}><span id={`${project.id}-title`}>{text(project.title)}</span></h2><p>{text(project.summary)}</p></div><a href={project.url} target="_blank" rel="noreferrer">{ui("visit")}<ArrowUpRight size={17} /></a></header>
      <CaseFeatureGallery project={project} />
      <div className="case-context-grid"><div><h3>{ui("challenge")}</h3><p>{text(project.challenge)}</p></div><div><h3>{ui("contribution")}</h3><ul className="case-contributions">{project.contributions.map((copy, i) => <li key={i}><Check size={16} /><span>{text(copy)}</span></li>)}</ul></div></div>
      <h3 className="case-subheading">{ui("decisions")}</h3><div className="case-decisions case-architecture-decisions">{project.decisions.map((decision, i) => <article key={i}><span className="case-decision-number">0{i + 1}</span><h3>{text(decision.title)}</h3><p>{text(decision.detail)}</p></article>)}</div>
    </article>)}
  </section>;
}
