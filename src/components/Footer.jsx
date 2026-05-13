import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-dark-900 pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-orbitron font-bold text-indigo-600 dark:text-neon-blue dark:neon-text-blue mb-2">
              TECHTONIC<span className="text-purple-600 dark:text-neon-purple dark:neon-text-purple">2K26</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm">Unleash the Ultimate Tech Arena</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-neon-pink transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-neon-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-neon-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TECHTONIC 2K26. All rights reserved.
          </p>
          <p className="flex items-center flex-wrap justify-center md:justify-end text-center md:text-right mt-4 md:mt-0 leading-relaxed gap-1">
            Designed with <Heart size={16} className="text-pink-600 dark:text-neon-pink mx-1 animate-pulse" /> by
            <a href="https://www.linkedin.com/in/saurabh-shinde-110437280" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-600 dark:text-neon-cyan font-semibold hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline transition-colors bg-cyan-50 dark:bg-cyan-900/20 px-2 py-0.5 rounded-md border border-cyan-100 dark:border-cyan-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Saurabh Shinde
            </a>
            <span className="text-slate-400">&amp;</span>
            <a href="https://www.linkedin.com/in/manthankharote" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 dark:text-neon-blue font-semibold hover:text-indigo-700 dark:hover:text-blue-300 hover:underline transition-colors bg-indigo-50 dark:bg-indigo-900/20 px-2 py-0.5 rounded-md border border-indigo-100 dark:border-indigo-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Manthan Kharote
            </a>
            <br className="hidden sm:block md:hidden" /><span className="text-slate-500 dark:text-gray-500">(ECE Department)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
