import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, ArrowRight, Layers, ExternalLink, Check, Code2 } from "lucide-react";
import Brand from "./Brand";
import CaseFeatureGallery from "./CaseFeatureGallery";
import CaseSubprojects from "./CaseSubprojects";
import CasePreview from "./CasePreview";
import { CaseCopy, caseStudies, localize } from "../data/caseStudies";
import { caseStudyCopy } from "../data/caseStudyCopy";
import { LANGUAGES, useLanguage } from "../i18n/LanguageContext";
import { trackEvent } from "../lib/analytics";

export default function CaseStudyPage({ slug }: { slug: string }) {
  const { language, changeLanguage } = useLanguage();
  const [selectedLayer, setSelectedLayer] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const study = caseStudies.find(item => item.slug === (slug === "pnld" ? "evoluir" : slug));
  const text = (value: CaseCopy) => localize(value, language);
  const ui = (key: string) => text(caseStudyCopy[key]);

  useEffect(() => {
    setSelectedLayer(0);
    const oldTitle = document.title;
    document.title = `${study?.title ?? "Case"} — Bruna Maciel`;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    heading.current?.focus({ preventScroll: true });
    if (study) trackEvent("case_view", { project: study.title });
    return () => { document.title = oldTitle; };
  }, [study]);

  const sectionHeading = (number: string, title: string) => <div className="case-section-heading"><span>{number}</span><h2>{title}</h2></div>;
  const next = study ? caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length] : undefined;
  const activeLayer = study?.layers[selectedLayer];

  return (
    <div className="case-page App" style={{ "--case-accent": study?.accent ?? "#fbbf24" } as React.CSSProperties}>
      <button type="button" className="skip-link" onClick={() => heading.current?.focus()}>{ui("summary")}</button>
      <header className="case-header"><a href="#projects" aria-label="Bruna Maciel"><Brand /></a><div className="case-header-actions"><a href="#projects" className="case-back"><ArrowLeft size={15} /><span>{ui("back")}</span></a><div className="case-languages" aria-label="Language">{LANGUAGES.map(item => <button type="button" key={item.code} onClick={() => changeLanguage(item.code)} aria-pressed={language === item.code} aria-label={item.fullLabel}>{item.label}</button>)}</div></div></header>
      {!study ? <main className="case-not-found"><h1 ref={heading} tabIndex={-1}>{ui("notFound")}</h1><a href="#projects">{ui("back")} <ArrowRight size={18} /></a></main> : (
        <main id="case-content" className="case-content">
          <div className="case-breadcrumb"><a href="#projects">{ui("back")}</a><span>/</span><span>{study.title}</span></div>
          <section className="case-hero">
            <div><p className="case-eyebrow">CASE STUDY / {String(caseStudies.indexOf(study) + 1).padStart(2, "0")}</p><h1 ref={heading} tabIndex={-1}>{study.title}<span>.</span></h1><p className="case-category">{text(study.category)}</p><p className="case-summary">{text(study.summary)}</p>{!study.subprojects && <div className="case-hero-tags">{study.layers.flatMap(layer => layer.tech.split(" · ")).slice(0, 6).map(tech => <span key={tech}>{tech}</span>)}</div>}</div>
            <aside className="case-brief"><span className="case-draft">{study.status ? text(study.status) : study.subprojects ? `${ui("documented")} · ${study.subprojects.length} ${ui("subprojects").toLowerCase()}` : ui("draft")}</span><div><small>{ui("role")}</small><p>{study.role}</p></div><button type="button" onClick={() => document.getElementById("case-stack")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}>{study.subprojects ? `${ui("stackSummary")} · ${study.title}` : ui("stack")}<ArrowRight size={17} /></button></aside>
          </section>

          {study.subprojects ? <CaseSubprojects projects={study.subprojects} clientName={study.title} /> : study.gallery ? <CaseFeatureGallery project={study.gallery} /> : <figure className="case-main-preview"><div className="case-figure-top"><span><Code2 size={15} />{ui("preview")}</span><span className="case-mock-label">{ui("mock")}</span></div><CasePreview study={study} /><figcaption>{ui("mockNote")}</figcaption></figure>}

          <section className="case-section">{sectionHeading("01", ui("scope"))}<div className="case-context-grid"><div><h3>{ui("challenge")}</h3><p>{text(study.challenge)}</p></div><div><h3>{ui("contribution")}</h3><ul className="case-contributions">{study.contributions.map((item, i) => <li key={i}><Check size={16} /><span>{text(item)}</span></li>)}</ul></div></div></section>

          <section className="case-section" id="case-stack">{sectionHeading("02", study.subprojects ? `${ui("stackSummary")} · ${study.title}` : ui("stack"))}<div className="case-table-scroll"><table className="case-stack-table"><thead><tr><th>{ui("layer")}</th><th>{ui("technology")}</th></tr></thead><tbody>{study.layers.map(layer => <tr key={layer.name}><th scope="row">{layer.name}</th><td><strong>{layer.tech}</strong><p>{text(layer.detail)}</p></td></tr>)}</tbody></table></div></section>

          {!study.subprojects && !study.gallery && <section className="case-section">{sectionHeading("03", ui("architecture"))}<p className="case-section-note">{ui(study.subprojects ? "verifiedArchitecture" : "architectureNote")}</p><div className="case-architecture"><div className="architecture-core"><Layers size={20} /><span>{study.title}</span><small>LAYERS / {String(study.layers.length).padStart(2, "0")}</small></div><div className="architecture-layers">{study.layers.map((layer, i) => <button key={layer.name} type="button" onClick={() => setSelectedLayer(i)} aria-pressed={selectedLayer === i} aria-controls="layer-detail"><span>{String(i + 1).padStart(2, "0")}</span>{layer.name}<ArrowUpRight size={15} /></button>)}</div></div>{activeLayer && <div className="architecture-detail" id="layer-detail" aria-live="polite"><strong>{activeLayer.tech}</strong><p>{text(activeLayer.detail)}</p></div>}</section>}

          {!study.subprojects && <section className="case-section">{sectionHeading("04", ui("decisions"))}<div className="case-decisions">{study.decisions.map((item, i) => <article key={i}><span className="case-decision-number">{String(i + 1).padStart(2, "0")}</span><h3>{text(item.title)}</h3><p>{text(item.detail)}</p></article>)}</div></section>}

          {study.status && <section className="case-section case-release-status"><h2>{ui("releaseStatus")}</h2><p>{text(study.status)}</p><ul>{study.pending.map((item, i) => <li key={i}>{text(item)}</li>)}</ul></section>}

          {!study.subprojects && !study.status && <section className="case-section">{sectionHeading("05", ui("validation"))}<p className="case-section-note">{ui("metricsNote")}</p><div className="case-metrics">{["performance", "quality", "impact"].map(key => <div key={key}><span>{ui(key)}</span><strong>—</strong><small>{ui("measure")}</small></div>)}</div><div className="case-review"><h3>{ui("pending")}</h3><ul>{study.pending.map((item, i) => <li key={i}>{text(item)}</li>)}</ul></div></section>}

          {study.subprojects && !study.status && study.pending.length > 0 && <section className="case-section">{sectionHeading("03", ui("pending"))}<div className="case-review"><ul>{study.pending.map((item, i) => <li key={i}>{text(item)}</li>)}</ul></div></section>}

          <section className="case-sources"><h2>{ui("sources")}</h2><p>{study.sourceNote ? text(study.sourceNote) : ui(study.subprojects ? "repositoryNote" : "sourceNote")}</p>{study.sources.length > 0 && <div>{study.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}<ExternalLink size={14} /></a>)}</div>}</section>
          {next && <a className="case-next" href={`#/cases/${next.slug}`}><div><small>{ui("next")}</small><strong>{next.title}</strong></div><ArrowUpRight size={35} /></a>}
        </main>
      )}
      <footer className="case-footer"><span>BRUNA MACIEL / SOFTWARE ENGINEER</span><a href="#projects">{ui("back")}<ArrowLeft size={14} /></a></footer>
    </div>
  );
}
