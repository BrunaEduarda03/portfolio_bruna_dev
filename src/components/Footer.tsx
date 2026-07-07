import React from "react";
import { personalInfo } from "../data/mock";
import { useLanguage } from "../i18n/LanguageContext";
import { Github, Linkedin, Mail, Heart, Terminal, ArrowUp } from "lucide-react";
import { trackEvent } from "../lib/analytics";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.techstack"), href: "#techstack" },
    { name: t("nav.certifications"), href: "#certifications" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-amber-400" />
              </div>
              <span className="font-mono text-sm text-zinc-300">
                {personalInfo.name.split(" ")[0].toLowerCase()}.dev
              </span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-zinc-600 hover:text-amber-400 transition-colors duration-300 font-mono"
                    onClick={(e) => {
                      e.preventDefault();
                      trackEvent("nav_click", { section: link.href.replace("#", ""), location: "footer" });
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">
              {t("footer.connect")}
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", { network: "github", location: "footer" })}
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", { network: "linkedin", location: "footer" })}
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => trackEvent("social_click", { network: "email", location: "footer" })}
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-zinc-600 font-mono">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700 font-mono flex items-center gap-1">
            {t("footer.madeWith")}{" "}
            <Heart className="w-3 h-3 text-amber-500/50" /> {t("footer.by")}{" "}
            {personalInfo.name}
          </p>
          <p className="text-xs text-zinc-700 font-mono">
            &copy; {new Date().getFullYear()} {t("footer.rights")}
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-zinc-800 text-zinc-600 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
