import { motion } from 'framer-motion';
import { features } from '../data/siteData';

export default function KeyHighlights() {
  return (
    <section id="highlights" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-neon-purple dark:to-neon-pink dark:neon-text-purple">
            Key Highlights of the Event
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-6 flex flex-col items-center text-center border-gray-200 dark:border-white/5 transition-all duration-300`}
            >
              <div className={`p-4 rounded-full bg-slate-100 dark:bg-dark-800 mb-4 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-orbitron font-semibold tracking-wide text-slate-800 dark:text-white">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
