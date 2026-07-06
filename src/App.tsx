import React from "react";
// @ts-ignore
import "./App.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./i18n/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App bg-[var(--page-bg)] min-h-screen transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Certifications />
            <TechStack />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
