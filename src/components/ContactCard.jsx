import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCard({ contact, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card p-5 border border-white/5 hover:border-neon-pink/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]"
    >
      <h4 className="text-neon-cyan text-sm font-semibold mb-1 uppercase tracking-wider">{contact.role}</h4>
      <h3 className="text-xl font-orbitron font-bold text-white mb-4">{contact.name}</h3>
      
      <div className="flex space-x-3">
        <a 
          href={`tel:${contact.phone}`}
          className="flex-1 flex items-center justify-center py-2 bg-dark-800 rounded-md border border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-black transition-colors"
        >
          <Phone size={16} className="mr-2" />
          Call
        </a>
        <a 
          href={`https://wa.me/91${contact.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center py-2 bg-dark-800 rounded-md border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
