import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import { navLinks } from '../data/siteData';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neon-blue/20 shadow-lg shadow-gray-200/50 dark:shadow-neon-blue/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center group">
              <img
                src="/ecesa-logo.png"
                alt="ECESA Logo"
                className="h-8 w-8 mr-3 object-contain rounded-full bg-white p-0.5 border-2 border-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.4)] group-hover:shadow-[0_0_15px_rgba(0,243,255,0.8)] transition-shadow duration-300"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span className="text-2xl font-orbitron font-bold neon-text-blue">
                TECHTONIC<span className="text-neon-purple neon-text-purple">2K26</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-10">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-neon-blue transition-colors px-3 py-2 rounded-md text-sm font-medium hover:dark:neon-text-blue"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6 text-pink-500 dark:text-neon-pink" /> : <Menu className="h-6 w-6 text-indigo-600 dark:text-neon-blue" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-neon-blue/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
