import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers, Maximize2 } from "lucide-react";
import { CaseSubproject, localize } from "../data/caseStudies";
import { caseStudyCopy } from "../data/caseStudyCopy";
import { useLanguage } from "../i18n/LanguageContext";

export default function CaseFeatureGallery({ project }: { project: CaseSubproject }) {
  const { language } = useLanguage();
  const [selected, setSelected] = useState(0);
  const touchStart = useRef<number | null>(null);
  const feature = project.features[selected];
  const ui = (key: string) => localize(caseStudyCopy[key], language);
  const move = (step: number) => setSelected(current => (current + step + project.features.length) % project.features.length);
  if (!feature) return null;

  return <section className="feature-gallery" aria-label={`${ui("gallery")}: ${localize(project.title, language)}`}>
    <div className="feature-gallery-top"><span>{ui("gallery")}</span><span>{String(selected + 1).padStart(2, "0")} / {String(project.features.length).padStart(2, "0")}</span></div>
    <div className="feature-gallery-stage" id={`${project.id}-feature`}>
      <div className="feature-gallery-visual" onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={event => {
        if (touchStart.current !== null) {
          const distance = touchStart.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 50) move(distance > 0 ? 1 : -1);
        }
        touchStart.current = null;
      }}>
        {feature.image ? <div className="feature-browser"><div className="feature-browser-bar"><span aria-hidden="true">● ● ●</span><small>{new URL(project.url).hostname}</small>{!feature.softened && <a href={`${process.env.PUBLIC_URL}${feature.image}`} target="_blank" rel="noreferrer" aria-label={`${ui("expand")}: ${localize(feature.title, language)}`}><Maximize2 size={15} /></a>}</div>{feature.softened ? <div className="feature-image-link feature-image-softened"><img src={`${process.env.PUBLIC_URL}${feature.image}`} alt={localize(feature.title, language)} width="1440" height="960" draggable={false} /></div> : <a className="feature-image-link" href={`${process.env.PUBLIC_URL}${feature.image}`} target="_blank" rel="noreferrer" aria-label={`${ui("expand")}: ${localize(feature.title, language)}`}><img src={`${process.env.PUBLIC_URL}${feature.image}`} alt={localize(feature.title, language)} width="1440" height="960" /></a>}</div> : <div className="feature-module"><span className="feature-module-icon"><Layers size={30} /></span><small>{ui("functionalOverview")}</small><strong>{localize(feature.title, language)}</strong><div>{feature.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer">{ui("visit")}<ArrowUpRight size={15} /></a></div>}
      </div>
      <div className="feature-gallery-description"><div aria-live="polite" aria-atomic="true"><span className="feature-overline">{ui(feature.image ? "productScreen" : "functionalOverview")}</span><h3>{localize(feature.title, language)}</h3><p>{localize(feature.description, language)}</p><div className="feature-tags">{feature.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="feature-gallery-controls"><span>{ui("browseFeatures")}</span><div><button type="button" onClick={() => move(-1)} aria-label={ui("previousFeature")} aria-controls={`${project.id}-feature`}><ArrowLeft size={18} /></button><button type="button" onClick={() => move(1)} aria-label={ui("nextFeature")} aria-controls={`${project.id}-feature`}><ArrowRight size={18} /></button></div></div></div>
    </div>
    <div className="feature-thumbnails" role="group" aria-label={ui("chooseFeature")}>
      {project.features.map((item, index) => <button key={item.title[0]} type="button" aria-pressed={selected === index} aria-controls={`${project.id}-feature`} onClick={() => setSelected(index)}>
        {item.image ? <img className={item.softened ? "feature-thumbnail-softened" : undefined} src={`${process.env.PUBLIC_URL}${item.image}`} alt="" loading="lazy" width="96" height="64" /> : <span className="feature-thumbnail-icon"><Layers size={20} /></span>}
        <span><small>{String(index + 1).padStart(2, "0")}</small><strong>{localize(item.title, language)}</strong></span>
      </button>)}
    </div>
  </section>;
}
