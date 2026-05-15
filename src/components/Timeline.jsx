import { motion } from 'framer-motion';
import { timelineEvents } from '../data/siteData';

export default function Timeline() {
  return (
    <section id="timeline" className="pt-8 pb-0 relative">
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
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 dark:bg-dark-700/50 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center justify-between w-full mb-12 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Empty Space for layout (hidden on mobile) */}
              <div className="hidden md:block md:w-5/12"></div>

              {/* Icon */}
              <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-dark-900 border-2 ${event.borderColor} ${event.shadow} shrink-0`}>
                <event.icon className={event.color} size={24} />
              </div>

              {/* Content Card */}
              <div className={`w-[calc(100%-4rem)] md:w-5/12 ml-4 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`glass-card p-4 md:p-6 border-t-2 ${event.borderColor} hover:scale-105 transition-transform duration-300 overflow-hidden break-words`}>
                  <span className={`inline-block px-3 rounded-full bg-slate-100 dark:bg-dark-800 text-xs font-bold mb-3 ${event.color}`}>
                    {event.date}
                  </span>
                  <h3 className="text-base md:text-xl font-orbitron font-semibold mb-2 text-slate-800 dark:text-white leading-tight">{event.title}</h3>
                  <p className="text-xs md:text-base text-slate-600 dark:text-gray-400">{event.description}</p>
                  
                  {event.flow && (
                    <ul className="mt-3 space-y-1.5 border-l border-slate-200 dark:border-dark-700 ml-1 pl-3">
                      {event.flow.map((step, i) => (
                        <li key={i} className="text-[10px] md:text-[11px] text-slate-500 dark:text-gray-500 font-medium flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-dark-600 mt-1 mr-2 flex-shrink-0"></span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
