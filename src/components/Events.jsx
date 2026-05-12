import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { eventData } from '../data/siteData';

export default function Events() {
  return (
    <section id="events" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
            7 Exciting Events
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Choose your arena and prove your mettle. Register for multiple events to maximize your chances of winning!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eventData.map((event, index) => (
            <div key={index} className={index === 6 ? "md:col-span-2 lg:col-span-3 xl:col-span-1" : ""}>
              <EventCard event={event} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
