import React from "react";

/** Decorative software layers, connected like a small constellation. */
export default function CodeConstellation() {
  return (
    <div className="code-constellation" aria-hidden="true">
      <svg viewBox="0 0 600 400" fill="none" className="code-connections">
        <path d="M108 105L240 76L480 114L518 285L342 330L95 286Z" />
        <path d="M108 105L300 200L518 285M480 114L300 200L95 286" strokeDasharray="3 9" />
        <g fill="currentColor"><circle cx="108" cy="105" r="3" /><circle cx="480" cy="114" r="3" /><circle cx="518" cy="285" r="3" /><circle cx="95" cy="286" r="3" /></g>
      </svg>
      <span className="code-node node-ui"><b>&lt;UI /&gt;</b><small>components</small></span>
      <span className="code-node node-api"><b>{'{ API }'}</b><small>connections</small></span>
      <span className="code-node node-logic"><b>{'() => {}'}</b><small>logic</small></span>
      <span className="code-node node-cloud"><b>cloud.connect()</b><small>infrastructure</small></span>
    </div>
  );
}
