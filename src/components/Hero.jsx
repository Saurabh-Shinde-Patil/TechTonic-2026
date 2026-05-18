import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { GLOBAL_DEADLINE } from '../data/siteData';

export default function Hero() {
  const targetDate = GLOBAL_DEADLINE.timer; 

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-4 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/30 dark:bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/30 dark:bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
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
            className="text-pink-600 dark:text-neon-pink font-semibold tracking-widest uppercase mb-4 text-sm md:text-base leading-relaxed"
          >
            CSMSS Chh. Shahu College of Engineering<br/>
            <span className="text-slate-700 dark:text-gray-300">Department of Electronics & Computer Engineering</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-neon-blue dark:via-neon-purple dark:to-neon-pink mb-4 dark:neon-text-blue"
          >
            TECHTONIC<br />2K26
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-slate-600 dark:text-gray-300 font-light italic mb-6"
          >
            “Unleash the Ultimate Tech Arena”
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-500 dark:text-gray-400 max-w-lg mb-8"
          >
            A National Level Technical Event Organized by the Department of Electronics & Computer Engineering.
            <br />
            <span className="text-slate-900 dark:text-white font-semibold">18th - 19th May 2026</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#events" className="px-8 py-3 bg-transparent border-2 border-indigo-600 dark:border-neon-blue text-indigo-600 dark:text-neon-blue font-bold rounded-lg hover:bg-indigo-600 dark:hover:bg-neon-blue hover:text-white dark:hover:text-black transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(0,243,255,0.8)]">
              Register Now
            </a>
            <a href="#events" className="px-8 py-3 bg-transparent border-2 border-purple-600 dark:border-neon-purple text-purple-600 dark:text-neon-purple font-bold rounded-lg hover:bg-purple-600 dark:hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(188,19,254,0.4)] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(188,19,254,0.8)]">
              Explore Events
            </a>
            <a href="https://drive.google.com/file/d/1dWLbijP1Jo10UpbeD9H7BMmB51aFGPkd/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-transparent border-2 border-pink-600 dark:border-neon-pink text-pink-600 dark:text-neon-pink font-bold rounded-lg hover:bg-pink-600 dark:hover:bg-neon-pink hover:text-white dark:hover:text-black transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(255,0,255,0.8)]">
              Event Concept Handbook
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


          <div className="w-full flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-4 py-2 px-6 rounded-full bg-red-500/10 border border-red-500/50 text-red-500 font-orbitron font-bold text-sm uppercase tracking-widest animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)] flex items-center"
            > 
            {/* registration date extended message  */}
              <span className="mr-2">🔥</span> Registration Date Extended!
            </motion.div>
            <h3 className="text-center text-purple-600 dark:text-neon-purple font-orbitron mb-2 tracking-widest">Registration Closes In</h3>
            <CountdownTimer targetDate={targetDate} />
            {GLOBAL_DEADLINE.isRegistrationClosed && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 py-2 px-6 rounded-xl bg-red-500/20 border border-red-500 text-red-600 dark:text-red-500 font-orbitron font-bold text-xl uppercase tracking-[0.2em]"
              >
                Registration Closed
              </motion.div>
            )}
            {GLOBAL_DEADLINE.showSpotEntry && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${GLOBAL_DEADLINE.isRegistrationClosed ? 'mt-4' : 'mt-6'} py-2 px-6 rounded-xl bg-red-400/10 border border-red-500/30 text-red-600 dark:text-red-500 font-orbitron font-bold text-xl uppercase tracking-[0.2em] animate-bounce`}
              >
                📍 Spot Entry Also Available
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
