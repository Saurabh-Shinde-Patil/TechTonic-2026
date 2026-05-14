import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles, FileText, ChevronRight } from 'lucide-react';

export default function EventCard({ event, index }) {
  // Theme styling based on category
  const getThemeStyles = () => {
    switch (event.category) {
      case 'tech': // Prompt X
        return {
          bg: 'bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950',
          border: 'border-indigo-500/30',
          accent: 'text-indigo-400',
          pattern: "bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20",
          glow: 'rgba(99, 102, 241, 0.4)'
        };
      case 'creative': // Canvas X / Reel
        return {
          bg: 'bg-gradient-to-br from-rose-900 via-slate-900 to-purple-900',
          border: 'border-pink-500/30',
          accent: 'text-pink-400',
          pattern: "bg-[url('https://www.transparenttextures.com/patterns/binding-dark.png')] opacity-30",
          glow: 'rgba(236, 72, 153, 0.4)'
        };
      case 'innovation': // Project X
        return {
          bg: 'bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950',
          border: 'border-cyan-500/30',
          accent: 'text-cyan-400',
          pattern: "bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-20",
          glow: 'rgba(6, 182, 212, 0.4)'
        };
      case 'gaming': // Squid Game
        return {
          bg: 'bg-gradient-to-br from-red-950 via-slate-900 to-pink-950',
          border: 'border-red-500/30',
          accent: 'text-red-400',
          pattern: "bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10",
          glow: 'rgba(239, 68, 68, 0.4)'
        };
      case 'business': // Pitch Craft
        return {
          bg: 'bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950',
          border: 'border-emerald-500/30',
          accent: 'text-emerald-400',
          pattern: "bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-40",
          glow: 'rgba(16, 185, 129, 0.4)'
        };
      case 'sports': // Cricket
        return {
          bg: 'bg-gradient-to-br from-green-950 via-slate-900 to-emerald-950',
          border: 'border-green-500/30',
          accent: 'text-green-400',
          pattern: "bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30",
          glow: 'rgba(34, 197, 94, 0.4)'
        };
      default:
        return {
          bg: 'bg-slate-900',
          border: 'border-white/10',
          accent: 'text-white',
          pattern: "",
          glow: 'rgba(255, 255, 255, 0.1)'
        };
    }
  };

  const theme = getThemeStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group p-8 rounded-[2rem] border-2 ${theme.border} ${theme.bg} relative overflow-hidden flex flex-col h-full shadow-2xl transition-all duration-500`}
    >
      {/* Pattern Overlay */}
      <div className={`absolute inset-0 z-0 pointer-events-none mix-blend-overlay ${theme.pattern}`}></div>

      {/* Dynamic Glow Effect */}
      <div 
        className="absolute -inset-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${theme.glow} 0%, transparent 70%)`
        }}
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div 
            className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl"
            style={{ color: event.color }}
          >
            <event.icon size={32} strokeWidth={2.5} />
          </div>
            <div className="flex flex-col items-end">
              <span className={`text-[10px] font-orbitron font-black uppercase tracking-[0.2em] ${theme.accent} mb-1`}>
                {event.category}
              </span>
              <div className="flex space-x-2 mt-2">
                {event.rulebook && (
                  <a 
                    href={event.rulebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white transition-colors"
                    title="View Rulebook"
                  >
                    <FileText size={16} />
                  </a>
                )}
                <div className="py-1 px-3 rounded-full bg-white/5 border border-white/10 flex items-center space-x-2">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Closes:</span>
                  <span className="text-[10px] font-black text-white">{event.registrationDeadline.split(' till')[0]}</span>
                </div>
              </div>
            </div>
        </div>
        
        <h3 className="text-2xl font-orbitron font-black text-white mb-4 tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-500">
          {event.name}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
          {event.description}
        </p>
        
        <div className="flex items-center justify-between mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
          <span className="text-xs font-orbitron font-bold text-gray-400 uppercase tracking-widest">Entry Fee</span>
          <span className={`text-lg font-orbitron font-black ${theme.accent}`}>{event.registrationFee}</span>
        </div>

        <div className="space-y-4 mt-auto">
          <Link 
            to={`/event/${event.id}`}
            className="w-full flex items-center justify-between py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-orbitron font-bold text-xs group/btn hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="flex items-center uppercase tracking-widest font-black group-hover/btn:text-black transition-colors">
              <Sparkles size={14} className="mr-2 text-yellow-500" />
              {event.name}&nbsp;<span className={`${theme.accent} group-hover/btn:text-indigo-900 dark:group-hover/btn:text-indigo-900`}>Details</span>
            </span>
            <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
          </Link>

          <a 
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-4 rounded-2xl bg-transparent border-2 font-orbitron font-black text-xs tracking-widest transition-all duration-500 shadow-lg"
            style={{ 
              borderColor: event.color,
              color: event.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = event.color;
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.boxShadow = `0 0 30px ${event.color}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = event.color;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            REGISTER NOW
            <ExternalLink size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
