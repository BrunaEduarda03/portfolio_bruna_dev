import React from "react";
import { CaseStudy } from "../data/caseStudies";

export default function CasePreview({ study, compact = false }: { study: CaseStudy; compact?: boolean }) {
  const photo = study.coverImage ? { src: study.coverImage } : study.subprojects?.flatMap(project => project.images)[0];
  if (photo) return <img className={`case-real-preview${study.gallery?.portrait ? " case-real-preview-mobile" : ""}`} src={`${process.env.PUBLIC_URL}${photo.src}`} alt="" loading="lazy" />;
  return (
    <div className={`case-product-visual visual-${study.kind} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <div className="mock-orbit" />
      {study.kind === "mobile" ? (
        <div className="mock-phone"><div className="phone-island" /><div className="phone-brand">DENTAL UNI<span>+</span></div><div className="phone-card"><small>DEMO</small><strong>Meu plano</strong><span>•••• •••• 0000</span></div><div className="phone-actions"><span>⊕</span><span>⌕</span><span>▤</span></div><div className="mock-lines"><i /><i /><i /></div><div className="phone-tabbar">⌂ <span>◉</span> ☰</div></div>
      ) : study.kind === "iot" ? (
        <div className="mock-device"><small>ECONOWISE / DEMO</small><div className="device-dial"><span>—<small>°C</small></span></div><div className="device-link"><span>APP</span><i /><span>ESP32</span></div><div className="mock-lines"><i /><i /></div></div>
      ) : (
        <div className="mock-window"><div className="mock-window-bar"><span /><span /><span /><small>{study.title.toLowerCase()} / demo</small></div><div className="mock-workspace"><aside><b>{study.title.slice(0, 2)}</b><i /><i /><i /><i /></aside><div className="mock-workspace-body"><div className="mock-page-heading"><b>{study.title}</b><span>DEMO</span></div>{study.kind === "catalog" || study.kind === "education" ? <div className="mock-books">{[1, 2, 3].map(i => <div key={i}><span>{String(i).padStart(2, "0")}</span><i /><i /></div>)}</div> : <><div className="mock-kpis"><div><i /><strong>—</strong></div><div><i /><strong>—</strong></div><div><i /><strong>—</strong></div></div><div className="mock-chart">{[30, 48, 39, 63, 52, 76, 62, 85, 72, 94].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></>}<div className="mock-table-lines"><i /><i /><i /></div></div></div></div>
      )}
    </div>
  );
}
