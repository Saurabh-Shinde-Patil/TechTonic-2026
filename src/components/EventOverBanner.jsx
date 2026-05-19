import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Sparkles, Heart } from 'lucide-react';
import { EVENT_STATUS } from '../data/siteData';

const LinkedinIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


export default function EventOverBanner() {
  if (!EVENT_STATUS.isCompleted) return null;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-8">
        {/* Trophy Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
          className="mb-6 inline-flex"
        >
          <div className="relative">
            <Trophy 
              className="w-16 h-16 md:w-20 md:h-20 text-amber-400" 
              strokeWidth={1.5}
              style={{ filter: 'drop-shadow(0 0 15px rgba(251,191,36,0.5))' }} 
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 border-2 border-dashed border-amber-400/20 rounded-full"
            />
          </div>
        </motion.div>

        {/* Marathi Message - Simple Font */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-slate-700 dark:text-gray-200">
            {EVENT_STATUS.marathiMessage}
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-amber-400/40"></div>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-amber-400/40"></div>
        </motion.div>

        {/* English message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-slate-500 dark:text-gray-400 text-sm md:text-base mb-8 max-w-xl mx-auto"
        >
          {EVENT_STATUS.englishMessage}
        </motion.p>

        {/* TECHTONIC 2K26 + Hearts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
          <span className="text-slate-600 dark:text-gray-300 font-semibold text-sm tracking-widest uppercase">
            TECHTONIC 2K26
          </span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
        </motion.div>

        {/* See Winners Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            to="/winners"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 text-black font-orbitron font-black text-sm md:text-base rounded-2xl shadow-[0_10px_40px_-10px_rgba(251,191,36,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(251,191,36,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest"
          >
            <Trophy size={22} />
            🏆 See Winners
            <Sparkles size={18} className="animate-pulse" />
          </Link>
        </motion.div>
      </div>

      {/* Developer Credit - pinned to bottom */}
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <p className="flex items-center flex-wrap justify-center text-center text-xs text-slate-500 dark:text-gray-500 leading-relaxed gap-1">
          Designed and Developed by
          <a href="https://www.linkedin.com/in/saurabh-shinde-110437280" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-100/80 dark:bg-neon-cyan/10 text-cyan-700 dark:text-neon-cyan font-semibold hover:bg-cyan-200 dark:hover:bg-neon-cyan/20 hover:shadow-[0_0_12px_rgba(8,247,254,0.4)] transition-all duration-300 cursor-pointer">
            <LinkedinIcon size={12} />
            Saurabh Shinde
          </a>
          <span className="text-slate-400">&amp;</span>
          <a href="https://www.linkedin.com/in/manthankharote" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-100/80 dark:bg-neon-blue/10 text-indigo-700 dark:text-neon-blue font-semibold hover:bg-indigo-200 dark:hover:bg-neon-blue/20 hover:shadow-[0_0_12px_rgba(0,243,255,0.4)] transition-all duration-300 cursor-pointer">
            <LinkedinIcon size={12} />
            Manthan Kharote
          </a>
        </p>
      </div>
    </section>
  );
}

