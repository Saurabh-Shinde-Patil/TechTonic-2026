import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass-card p-6 flex flex-col h-full border border-white/10 group transition-all duration-300 relative overflow-hidden`}
      style={{
        boxShadow: `0 0 0 rgba(0,0,0,0)`, // Reset default shadow
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${event.color}40, inset 0 0 10px ${event.color}20`;
        e.currentTarget.style.borderColor = event.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
      }}
    >
      {/* Background Glow */}
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: event.color }}
      ></div>

      <div className="flex items-center mb-4">
        <div 
          className="p-3 rounded-xl bg-dark-800 mr-4"
          style={{ color: event.color, boxShadow: `0 0 10px ${event.color}40` }}
        >
          <event.icon size={28} />
        </div>
        <h3 className="text-xl font-orbitron font-bold tracking-wide" style={{ textShadow: `0 0 5px ${event.color}80` }}>
          {event.name}
        </h3>
      </div>
      
      <p className="text-gray-400 flex-grow mb-6">
        {event.description}
      </p>
      
      <a 
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full py-3 rounded-lg font-bold transition-all duration-300 border-2"
        style={{ 
          borderColor: event.color,
          color: event.color,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = event.color;
          e.currentTarget.style.color = '#000';
          e.currentTarget.style.boxShadow = `0 0 15px ${event.color}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = event.color;
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <span>Register Now</span>
        <ExternalLink size={18} className="ml-2" />
      </a>
    </motion.div>
  );
}
