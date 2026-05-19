import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Sparkles, Heart } from 'lucide-react';
import { EVENT_STATUS } from '../data/siteData';

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
          Designed with <Heart className="w-3 h-3 text-pink-600 dark:text-neon-pink mx-0.5 animate-pulse" fill="currentColor" /> by
          <a href="https://www.linkedin.com/in/saurabh-shinde-110437280" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-600 dark:text-neon-cyan font-semibold hover:underline transition-colors">
            Saurabh Shinde
          </a>
          <span className="text-slate-400">&amp;</span>
          <a href="https://www.linkedin.com/in/manthankharote" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 dark:text-neon-blue font-semibold hover:underline transition-colors">
            Manthan Kharote
          </a>
        </p>
      </div>
    </section>
  );
}

