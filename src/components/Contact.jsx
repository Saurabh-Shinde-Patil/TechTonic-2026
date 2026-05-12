import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ContactCard from './ContactCard';
import { contacts } from '../data/siteData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
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
          className="glass-card p-8 md:p-12 border-neon-blue/40 shadow-[0_0_30px_rgba(0,243,255,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="flex items-start mb-8 md:mb-0 md:mr-8">
              <div className="p-4 rounded-full bg-dark-800 text-neon-blue border border-neon-blue/30 mr-6 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Venue</h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  CSMSS Chhatrapati Shahu College of Engineering,<br />
                  Kanchanwadi, Paithan Road,<br />
                  Chhatrapati Sambhajinagar, Maharashtra - 431011
                </p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=CSMSS+Chhatrapati+Shahu+College+of+Engineering+Kanchanwadi+Chhatrapati+Sambhajinagar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-neon-blue text-black font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.6)] whitespace-nowrap"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
