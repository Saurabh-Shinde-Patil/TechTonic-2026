import { motion } from 'framer-motion';
import { Trophy, Coins, Award } from 'lucide-react';

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-purple-300/30 dark:bg-neon-purple/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-16 border-purple-200 dark:border-neon-purple/50 shadow-xl dark:shadow-[0_0_50px_rgba(188,19,254,0.2)]"
        >
          <div className="flex justify-center mb-6">
            <Trophy className="text-neon-pink w-20 h-20 animate-pulse" style={{ filter: 'drop-shadow(0 0 15px #ff00ff)' }} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-neon-purple dark:via-neon-pink dark:to-neon-blue dark:neon-text-purple">
            Rewards & Recognition
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-10 font-light">
            Compete with the best and claim your victory!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-100/80 dark:bg-dark-800/50 p-8 rounded-2xl border border-indigo-200 dark:border-neon-blue/30 flex flex-col items-center shadow-md dark:shadow-[0_0_20px_rgba(0,243,255,0.1)]"
            >
              <Coins className="text-indigo-600 dark:text-neon-blue w-12 h-12 mb-4" />
              <h3 className="text-3xl font-orbitron font-bold text-indigo-600 dark:text-neon-blue mb-2">₹10K+</h3>
              <p className="text-slate-500 dark:text-gray-400">Total Cash Prizes</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-100/80 dark:bg-dark-800/50 p-8 rounded-2xl border border-pink-200 dark:border-neon-pink/30 flex flex-col items-center shadow-md dark:shadow-[0_0_20px_rgba(255,0,255,0.1)]"
            >
              <Award className="text-pink-600 dark:text-neon-pink w-12 h-12 mb-4" />
              <h3 className="text-3xl font-orbitron font-bold text-pink-600 dark:text-neon-pink mb-2">Trophies</h3>
              <p className="text-slate-500 dark:text-gray-400">For Winners & Runners-up</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
