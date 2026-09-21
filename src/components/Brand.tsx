import React from "react";

// Angular letterforms shared by the brand and the orbital introduction.
export const MONOGRAM_PATHS = [
  "M58 132V48H110L132 70V80L120 90L132 102V110L110 132H58M58 90H120",
  "M156 132V48L209 101L262 48V132",
];

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`brand-mark ${className}`} viewBox="34 24 252 132" fill="none" aria-hidden="true">
      {MONOGRAM_PATHS.map((path, index) => (
        <path key={index} d={path} stroke="currentColor" strokeWidth="7" strokeLinecap="square" strokeLinejoin="miter" />
      ))}
    </svg>
  );
}

export default function Brand() {
  return (
    <span className="brand-lockup">
      <BrandMark />
      <span className="brand-wordmark">bruna<span className="brand-dot">.</span>maciel</span>
    </span>
  );
}
