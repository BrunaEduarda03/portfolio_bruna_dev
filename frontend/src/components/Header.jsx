import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/mock';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-amber-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
            <Terminal className="w-4 h-4 text-amber-400" />
          </div>
          <span className="font-mono text-sm text-zinc-300 group-hover:text-amber-400 transition-colors duration-300">
            {personalInfo.name.split(' ')[0].toLowerCase()}.dev
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <motion.ul
          className="hidden md:flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="relative px-4 py-2 text-sm font-mono text-zinc-400 hover:text-amber-400 transition-colors duration-300 group"
              >
                <span className="text-amber-500/60 text-xs mr-1">0{index + 1}.</span>
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-amber-500/50 group-hover:w-3/4 transition-all duration-300" />
              </button>
            </li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-mono border border-amber-500/30 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#contact');
          }}
        >
          Contacto
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-amber-400 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-amber-500/10"
          >
            <ul className="px-6 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-mono text-zinc-400 hover:text-amber-400 hover:bg-amber-500/5 rounded-lg transition-all duration-300"
                  >
                    <span className="text-amber-500/60 mr-2">0{index + 1}.</span>
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full text-center px-4 py-3 text-sm font-mono border border-amber-500/30 text-amber-400 rounded-lg mt-2"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
