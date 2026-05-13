import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';
import ContactCard from './ContactCard';
import { contacts, leadership } from '../data/siteData';

export default function Contact() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-neon-cyan dark:to-neon-blue">
            Honorable Dignitaries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {leadership.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 border border-gray-200 hover:border-indigo-300 dark:border-white/10 dark:hover:border-neon-blue/40 text-center relative overflow-hidden group hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(0,243,255,0.2)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 dark:from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-indigo-100 dark:bg-neon-blue/20 text-indigo-600 dark:text-neon-blue group-hover:scale-110 transition-transform duration-300">
                <Award size={32} />
              </div>
              
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-cyan-600 dark:text-neon-cyan">
                {person.role}
              </h4>
              <h3 className="text-xl font-orbitron font-bold text-slate-800 dark:text-white mb-2">{person.name}</h3>
              {person.details && (
                <p className="text-slate-600 dark:text-gray-400 text-sm">{person.details}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 scroll-mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-slate-900 dark:text-white">
            Organizing Committee
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions? Reach out to our core team members.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>

        {/* Venue Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 border-indigo-200 dark:border-neon-blue/40 shadow-xl dark:shadow-[0_0_30px_rgba(0,243,255,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 dark:bg-neon-blue/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="flex items-start mb-8 md:mb-0 md:mr-8">
              <div className="p-4 rounded-full bg-slate-100 dark:bg-dark-800 text-indigo-600 dark:text-neon-blue border border-indigo-200 dark:border-neon-blue/30 mr-6 shadow-md dark:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-slate-900 dark:text-white mb-2">Venue</h3>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed max-w-md">
                  B building, 5th floor, ECE department,<br />
                  CSMSS Chh. Shahu College of Engineering,<br />
                  Kanchanwadi, Paithan Road,<br />
                  Chhatrapati Sambhajinagar, Maharashtra - 431011
                </p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=CSMSS+Chhatrapati+Shahu+College+of+Engineering+Kanchanwadi+Chhatrapati+Sambhajinagar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 text-white dark:bg-neon-blue dark:text-black font-bold rounded-lg hover:bg-indigo-700 dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md dark:shadow-[0_0_20px_rgba(0,243,255,0.6)] whitespace-nowrap"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
