import { useEffect, useState } from "react";

export function parsePortfolioRoute(hash: string): { page: "home" } | { page: "case"; slug: string } {
  if (!hash.startsWith("#/cases")) return { page: "home" };
  const match = /^#\/cases\/([a-z0-9-]+)\/?$/.exec(hash);
  return { page: "case", slug: match?.[1] ?? "" };
}

// Hash routes preserve direct links on static hosts without rewrite rules.
export function usePortfolioRoute() {
  const [route, setRoute] = useState(() => parsePortfolioRoute(window.location.hash));
  useEffect(() => {
    const update = () => setRoute(parsePortfolioRoute(window.location.hash));
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return route;
}
