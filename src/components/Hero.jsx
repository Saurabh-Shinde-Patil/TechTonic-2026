import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

export default function Hero() {
  const targetDate = "2026-05-17T23:59:59"; // 17 May 2026 Midnight

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left mb-10 md:mb-0"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neon-pink font-semibold tracking-widest uppercase mb-4"
          >
            CSMSS Chhatrapati Shahu College of Engineering
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mb-4 neon-text-blue"
          >
            TECHTONIC<br/>2K26
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-gray-300 font-light italic mb-6"
          >
            “Unleash the Ultimate Tech Arena”
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 max-w-lg mb-8"
          >
            Organized by the Department of Electronics & Computer Engineering.
            <br />
            <span className="text-white font-semibold">18th - 19th May 2026</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#events" className="px-8 py-3 bg-transparent border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.8)]">
              Register Now
            </a>
            <a href="#about" className="px-8 py-3 bg-transparent border-2 border-neon-purple text-neon-purple font-bold rounded-lg hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(188,19,254,0.4)] hover:shadow-[0_0_25px_rgba(188,19,254,0.8)]">
              Explore Events
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Countdown & Poster */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <div className="glass-card p-6 rounded-2xl border-neon-pink/30 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/src/assets/techtonic-poster.jpg" 
              alt="Techtonic 2K26 Poster" 
              className="w-full max-w-sm rounded-lg object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Fallback dummy image
              }}
            />
          </div>
          
          <div className="w-full">
            <h3 className="text-center text-neon-cyan font-orbitron mb-2 tracking-widest">Registration Closes In</h3>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
