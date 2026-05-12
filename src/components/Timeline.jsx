import { motion } from 'framer-motion';
import { timelineEvents } from '../data/siteData';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-neon-pink dark:to-neon-purple">
            Event Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 dark:bg-dark-700/50 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center justify-between w-full mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Empty Space for layout */}
              <div className="w-5/12"></div>

              {/* Center Icon */}
              <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-dark-900 border-2 ${event.borderColor} ${event.shadow}`}>
                <event.icon className={event.color} size={24} />
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className={`glass-card p-6 border-t-2 ${event.borderColor} hover:scale-105 transition-transform duration-300`}>
                  <span className={`inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-800 text-sm font-bold mb-3 ${event.color}`}>
                    {event.date}
                  </span>
                  <h3 className="text-xl font-orbitron font-semibold mb-2 text-slate-800 dark:text-white">{event.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
