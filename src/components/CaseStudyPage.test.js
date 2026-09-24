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
test("Horus exposes both deliveries with real screenshots and a pending checklist", () => {
  window.matchMedia = jest.fn(() => ({ matches: true }));
  Element.prototype.scrollIntoView = jest.fn();
  act(() => root.render(<CaseStudyPage slug="horus" />));
  expect(container.querySelector('a[href="https://horusfat.com/"]')).not.toBeNull();
  expect(container.querySelector('a[href="https://app.horusfat.com/auth/login"]')).not.toBeNull();
  expect(container.querySelectorAll(".case-subproject")).toHaveLength(2);
  expect(container.textContent).not.toContain("MOCK DE INTERFACE");
  expect(container.textContent).toContain("Microsoft Clarity");
  expect(container.textContent).toContain("Snyk");
  expect(container.textContent).toContain("Jest e Playwright");
  const [website, app] = container.querySelectorAll(".feature-gallery");
  expect(website.querySelector(".feature-image-link img").getAttribute("src")).toContain("landing.png");
  expect(app.querySelector(".feature-image-link img").getAttribute("src")).toContain("login.png");
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
test("Dental Uni presents the new app, pending backend and publication, and a softened home", () => {
  act(() => root.render(<CaseStudyPage slug="dental-uni" />));
  expect(container.textContent).toContain('Backend e publicação pendentes');
  expect(container.textContent).toContain('Existe um app em produção');
  expect(container.textContent).toContain('Base white label reutilizável');
  expect(container.textContent).toContain('React Native 0.81');
  expect(container.textContent).not.toContain('Zustand');
  expect(container.textContent).not.toContain('MOCK DE INTERFACE');
  act(() => container.querySelectorAll('.feature-thumbnails button')[1].click());
  expect(container.querySelector('.feature-image-softened img').getAttribute('src')).toContain('/dental-uni/home.png');
  expect(container.querySelector('.case-metrics')).toBeNull();
});
test("Evoluir groups PNLD with website and system without Coopanest-specific labels", () => {
  act(() => root.render(<CaseStudyPage slug="evoluir" />));
  expect(container.querySelectorAll('.case-subproject')).toHaveLength(3);
  expect(container.textContent).toContain('Nuxt 3');
  expect(container.textContent).toContain('Vue 2 · Vue 3 · PHP · Laravel');
  expect(container.querySelector('.case-project-grid').textContent).not.toContain('COOPANESTRIO');
  expect(container.querySelector('.case-draft').textContent).toContain('3 subprojetos');
  expect(container.querySelector('a[href="https://mvcpnld.com.br/"]')).not.toBeNull();
  expect(container.querySelector('#case-stack h2').textContent).toContain('EVOLUIR');
  act(() => root.render(<CaseStudyPage slug="pnld" />));
  expect(container.querySelector('h1').textContent).toBe('EVOLUIR.');
});
