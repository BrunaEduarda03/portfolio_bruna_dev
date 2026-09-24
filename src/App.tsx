import React, { useEffect } from "react";
// @ts-ignore
import "./App.css";
import "./cases.css";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { ThemeProvider } from "./i18n/ThemeContext";
import { initAnalytics } from "./lib/analytics";
import { MotionConfig } from "framer-motion";
import { useIntroSequence, INTRO_REVEAL } from "./hooks/use-intro-sequence";
import SplashScreen from "./components/SplashScreen";
import CaseStudyPage from "./components/CaseStudyPage";
import { usePortfolioRoute } from "./hooks/use-portfolio-route";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function SkipLink() {
  const { t } = useLanguage();
  return <a className="skip-link" href="#main-content">{t("identity.skipContent")}</a>;
}

function HomePortfolio() {
  const { phase, reveal } = useIntroSequence();
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div data-intro-phase={phase} style={{ "--intro-reveal-duration": `${INTRO_REVEAL}ms` } as React.CSSProperties} className="App bg-[var(--page-bg)] min-h-screen transition-colors duration-300">
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero introReady={phase !== "intro"} />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <SplashScreen phase={phase} onSkip={reveal} />
    </div>
  );
}

function PortfolioRouter() {
  const route = usePortfolioRoute();
  return route.page === "case" ? <CaseStudyPage key={route.slug} slug={route.slug} /> : <HomePortfolio />;
}

function App() {
  useEffect(() => { initAnalytics(); }, []);
  return <MotionConfig reducedMotion="user"><ThemeProvider><LanguageProvider><PortfolioRouter /></LanguageProvider></ThemeProvider></MotionConfig>;
}

export default App;
