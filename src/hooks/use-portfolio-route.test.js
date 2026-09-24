import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { parsePortfolioRoute, usePortfolioRoute } from "./use-portfolio-route";

test.each(["", "#projects", "#about", "#contact"])("preserves portfolio section %s", hash => {
  expect(parsePortfolioRoute(hash)).toEqual({ page: "home" });
});
test("opens a case from a direct static-host link", () => {
  expect(parsePortfolioRoute("#/cases/horus")).toEqual({ page: "case", slug: "horus" });
  expect(parsePortfolioRoute("#/cases/dental-uni/")).toEqual({ page: "case", slug: "dental-uni" });
});
test("keeps malformed case URLs in the case not-found flow", () => {
  expect(parsePortfolioRoute("#/cases/")).toEqual({ page: "case", slug: "" });
  expect(parsePortfolioRoute("#/cases/%invalid")).toEqual({ page: "case", slug: "" });
});
test("responds to case navigation and browser-style hash changes back to projects", () => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
  window.history.replaceState(null, "", "/#projects");
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  function Harness() {
    const route = usePortfolioRoute();
    return <span>{route.page === "case" ? route.slug : "portfolio"}</span>;
  }
  act(() => root.render(<Harness />));
  expect(container.textContent).toBe("portfolio");
  act(() => { window.history.replaceState(null, "", "/#/cases/horus"); window.dispatchEvent(new HashChangeEvent("hashchange")); });
  expect(container.textContent).toBe("horus");
  act(() => { window.history.replaceState(null, "", "/#projects"); window.dispatchEvent(new HashChangeEvent("hashchange")); });
  expect(container.textContent).toBe("portfolio");
  act(() => root.unmount());
  container.remove();
});
