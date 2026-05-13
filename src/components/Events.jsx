import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { eventData } from '../data/siteData';

export default function Events() {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pink-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-600 dark:text-neon-blue font-orbitron text-sm tracking-widest uppercase mb-4 block">Event Arenas</span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8 text-slate-900 dark:text-white">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-neon-blue dark:to-neon-pink">Challenge</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Step into the ultimate tech arena. From AI prompt battles to glowing cricket fields, explore each unique challenge and find your stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {eventData.map((event, index) => (
            <EventCard key={event.id || index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
