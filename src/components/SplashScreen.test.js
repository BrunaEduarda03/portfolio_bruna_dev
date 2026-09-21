import React, { act, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SplashScreen from "./SplashScreen";
import { useIntroSequence, INTRO_HOLD, INTRO_REVEAL, INTRO_SESSION_KEY } from "../hooks/use-intro-sequence";

jest.mock("../i18n/LanguageContext", () => ({ useLanguage: () => ({ t: key => key }) }));

let container, root, preference;
beforeEach(() => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
  jest.useFakeTimers();
  sessionStorage.clear();
  window.history.replaceState(null, "", "/");
  document.body.style.overflow = "";
  preference = { matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() };
  window.matchMedia = jest.fn(() => preference);
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute("open", ""); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute("open"); };
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
  jest.useRealTimers();
  jest.restoreAllMocks();
});
function SequenceHarness() {
  const { phase, reveal } = useIntroSequence();
  return <><div data-testid="hero" data-ready={phase !== "intro"} /><SplashScreen phase={phase} onSkip={reveal} /></>;
}
const render = () => act(() => root.render(<StrictMode><SequenceHarness /></StrictMode>));
const finishSequence = () => {
  act(() => jest.advanceTimersByTime(INTRO_HOLD));
  act(() => jest.advanceTimersByTime(INTRO_REVEAL));
};

test("opens once and releases the page after the intro, including StrictMode", () => {
  render();
  expect(container.querySelector("dialog[open]")).not.toBeNull();
  expect(document.body.style.overflow).toBe("hidden");
  finishSequence();
  expect(container.querySelector("dialog")).toBeNull();
  expect(document.body.style.overflow).toBe("");
  expect(sessionStorage.getItem(INTRO_SESSION_KEY)).toBe("true");
});
test("skip begins the reveal immediately and releases the page after the fade", () => {
  render();
  act(() => container.querySelector("button").click());
  expect(container.querySelector("dialog").dataset.phase).toBe("reveal");
  act(() => jest.advanceTimersByTime(INTRO_REVEAL));
  expect(container.querySelector("dialog")).toBeNull();
  expect(document.body.style.overflow).toBe("");
});
test("Escape dismisses the intro", () => {
  render();
  act(() => container.querySelector("dialog").dispatchEvent(new Event("cancel", { bubbles: true })));
  act(() => jest.advanceTimersByTime(INTRO_REVEAL));
  expect(container.querySelector("dialog")).toBeNull();
});
test.each(["seen", "hash", "reduced motion"])("does not interrupt visitors with %s", reason => {
  if (reason === "seen") sessionStorage.setItem(INTRO_SESSION_KEY, "true");
  if (reason === "hash") window.history.replaceState(null, "", "/#projects");
  if (reason === "reduced motion") preference.matches = true;
  render();
  expect(container.querySelector("dialog")).toBeNull();
  expect(document.body.style.overflow).toBe("");
});
test("still closes when session storage is unavailable", () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("unavailable"); });
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("unavailable"); });
  render();
  finishSequence();
  expect(container.querySelector("dialog")).toBeNull();
  expect(document.body.style.overflow).toBe("");
});

test("starts the hero while the splash is still present, then removes the overlay", () => {
  render();
  expect(container.querySelector('[data-testid="hero"]').dataset.ready).toBe("false");
  act(() => jest.advanceTimersByTime(INTRO_HOLD));
  expect(container.querySelector('[data-testid="hero"]').dataset.ready).toBe("true");
  expect(container.querySelector("dialog").dataset.phase).toBe("reveal");
  expect(document.body.style.overflow).toBe("hidden");
  act(() => jest.advanceTimersByTime(INTRO_REVEAL - 1));
  expect(container.querySelector("dialog")).not.toBeNull();
  act(() => jest.advanceTimersByTime(1));
  expect(container.querySelector("dialog")).toBeNull();
  expect(document.body.style.overflow).toBe("");
});
test("a new reduced-motion preference ends the intro without waiting for animation", () => {
  render();
  const onChange = preference.addEventListener.mock.calls.find(([name]) => name === "change")[1];
  preference.matches = true;
  act(() => onChange());
  expect(container.querySelector("dialog")).toBeNull();
  expect(container.querySelector('[data-testid="hero"]').dataset.ready).toBe("true");
  expect(document.body.style.overflow).toBe("");
});
