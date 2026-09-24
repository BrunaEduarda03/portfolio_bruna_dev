import React, { act } from "react";
import { createRoot } from "react-dom/client";
import CaseStudyPage from "./CaseStudyPage";

jest.mock("../i18n/LanguageContext", () => ({
  useLanguage: () => ({ language: "pt", changeLanguage: jest.fn() }),
  LANGUAGES: [{ code: "pt", label: "PT", fullLabel: "Português" }],
}));
let container, root;
beforeEach(() => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
  window.scrollTo = jest.fn();
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => { act(() => root.unmount()); container.remove(); });
test("Horus shows public sources, mock labels and no invented outcome metrics", () => {
  act(() => root.render(<CaseStudyPage slug="horus" />));
  expect(container.querySelector('a[href="https://horusfat.com/"]')).not.toBeNull();
  expect(container.querySelector('a[href="https://app.horusfat.com/auth/login"]')).not.toBeNull();
  expect(container.textContent).toContain("MOCK DE INTERFACE");
  expect(container.textContent).toContain("Node.js/PostgreSQL");
  expect([...container.querySelectorAll(".case-metrics strong")].map(item => item.textContent)).toEqual(["—", "—", "—"]);
  expect(container.querySelector("form")).toBeNull();
});
test("architecture selection shows the matching technical detail", () => {
  act(() => root.render(<CaseStudyPage slug="horus" />));
  const buttons = container.querySelectorAll(".architecture-layers button");
  act(() => buttons[2].click());
  expect(buttons[2].getAttribute("aria-pressed")).toBe("true");
  expect(container.querySelector("#layer-detail").textContent).toContain("PHP · Laravel · REST");
});
test("an unknown case provides a working return link", () => {
  act(() => root.render(<CaseStudyPage slug="unknown" />));
  expect(container.querySelector("h1").textContent).toBe("Estudo de caso não encontrado");
  expect(container.querySelector('.case-not-found a').getAttribute("href")).toBe("#projects");
});
test("CoopanestRIO exposes both deliveries and navigates to the chosen subproject", () => {
  window.matchMedia = jest.fn(() => ({ matches: true }));
  Element.prototype.scrollIntoView = jest.fn();
  act(() => root.render(<CaseStudyPage slug="coopanestrio" />));
  expect(container.querySelector('a[href="https://www.coopanestrio.org.br/"]')).not.toBeNull();
  expect(container.querySelector('a[href="https://portal-cooperado.coopanestrio.org.br/auth/login"]')).not.toBeNull();
  expect(container.querySelectorAll(".case-subproject")).toHaveLength(2);
  expect(container.textContent).not.toContain("MOCK DE INTERFACE");
  expect(container.textContent).not.toContain("Horus: fontes públicas");
  act(() => container.querySelectorAll(".case-project-grid button")[1].click());
  expect(document.activeElement.id).toBe("portal-cooperado");
});
test("feature gallery changes the screenshot, wraps and keeps project galleries independent", () => {
  act(() => root.render(<CaseStudyPage slug="coopanestrio" />));
  const [website, portal] = container.querySelectorAll('.feature-gallery');
  act(() => website.querySelector('[aria-label="Próxima funcionalidade"]').click());
  expect(website.querySelector('.feature-image-link img').getAttribute('src')).toContain('agreements.png');
  expect(website.querySelector('.feature-gallery-description h3').textContent).toBe('Rede de convênios');
  expect(portal.querySelector('.feature-gallery-description h3').textContent).toBe('Acesso ao portal');
  expect(portal.querySelector('.feature-image-link img').getAttribute('src')).toContain('portal-login.png');
  act(() => portal.querySelector('[aria-label="Próxima funcionalidade"]').click());
  expect(portal.querySelector('.feature-image-link img').getAttribute('src')).toContain('portal-dashboard.png');
  expect(portal.querySelector('.feature-browser-bar small').textContent).toBe('portal-cooperado.coopanestrio.org.br');
  act(() => website.querySelectorAll('.feature-thumbnails button')[3].click());
  expect(website.querySelectorAll('.feature-thumbnails button')[3].getAttribute('aria-pressed')).toBe('true');
  act(() => website.querySelector('[aria-label="Próxima funcionalidade"]').click());
  expect(website.querySelector('.feature-image-link img').getAttribute('src')).toContain('landing-page.png');
  act(() => website.querySelector('[aria-label="Funcionalidade anterior"]').click());
  expect(website.querySelector('.feature-image-link img').getAttribute('src')).toContain('newsletter.png');
});
