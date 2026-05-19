import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Medal, Award, Sparkles, Star, Crown, Users } from 'lucide-react';
import { eventData } from '../data/siteData';
import { useEffect } from 'react';

const podiumConfig = {
  first: {
    bg: 'from-amber-500/30 via-yellow-500/20 to-amber-600/30',
    border: 'border-amber-400/70',
    text: 'text-amber-700 dark:text-amber-300',
    glow: 'shadow-[0_0_40px_rgba(251,191,36,0.4)]',
    icon: Crown,
    label: '🥇 Winner',
    labelBg: 'bg-gradient-to-r from-amber-500 to-yellow-400',
  },
  second: {
    bg: 'from-slate-400/30 via-gray-300/15 to-slate-500/30',
    border: 'border-slate-300/60',
    text: 'text-slate-700 dark:text-slate-200',
    glow: 'shadow-[0_0_30px_rgba(148,163,184,0.3)]',
    icon: Medal,
    label: '🥈 Runner-Up',
    labelBg: 'bg-gradient-to-r from-slate-400 to-gray-300',
  },
  third: {
    bg: 'from-orange-600/30 via-amber-700/15 to-orange-700/30',
    border: 'border-orange-400/60',
    text: 'text-orange-700 dark:text-orange-300',
    glow: 'shadow-[0_0_30px_rgba(234,88,12,0.3)]',
    icon: Award,
    label: '🏅 Appreciation',
    labelBg: 'bg-gradient-to-r from-orange-500 to-amber-600',
  },
};

function WinnerCard({ place, winner, delay }) {
  const style = podiumConfig[place];
  const IconComponent = style.icon;

  // Special case: appreciation note only (no members)
  if (!winner.members && winner.note) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`relative p-6 rounded-2xl bg-gradient-to-br ${style.bg} border ${style.border} ${style.glow} backdrop-blur-sm`}
      >
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full ${style.labelBg} text-black font-orbitron font-black text-[10px] tracking-wider uppercase whitespace-nowrap`}>
          {style.label}
        </div>
        <div className="flex flex-col items-center mt-4">
          <IconComponent className={`w-8 h-8 ${style.text} mb-3`} strokeWidth={2} />
          <p className={`text-sm font-medium text-center ${style.text}`}>{winner.note}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -5 }}
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${style.bg} border ${style.border} ${style.glow} backdrop-blur-sm transition-all duration-300`}
    >
      {/* Place badge */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full ${style.labelBg} text-black font-orbitron font-black text-[10px] tracking-wider uppercase whitespace-nowrap`}>
        {winner.note || style.label}
      </div>

      <div className="flex flex-col items-center mt-4 gap-2">
        <IconComponent className={`w-8 h-8 ${style.text} mb-1`} strokeWidth={2} />

        {/* Team Name */}
        {winner.teamName && (
          <h4 className={`font-orbitron font-black text-lg md:text-xl ${style.text} text-center leading-tight`}>
            {winner.teamName}
          </h4>
        )}

        {/* College */}
        {winner.college && (
          <span className="text-[11px] text-slate-500 dark:text-gray-500 font-medium text-center">
            {winner.college}
          </span>
        )}

        {/* Members */}
        {winner.members && winner.members.length > 0 && (
          <div className="mt-2 w-full">
            {winner.memberRole && (
              <p className="text-[10px] text-slate-400 dark:text-gray-500 uppercase tracking-widest font-bold text-center mb-1">{winner.memberRole}</p>
            )}
            <div className="space-y-1">
              {winner.members.map((member, i) => (
                <p key={i} className="text-sm text-slate-700 dark:text-gray-200 text-center font-bold">
                  {i === 0 && winner.members.length > 1 && (
                    <span className="text-[9px] text-amber-500 dark:text-amber-400 font-bold mr-1">★</span>
                  )}
                  {member}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function EventWinnerSection({ event, index }) {
  const w = event.winners;
  if (!w) return null;

  const hasWinners = w.first || w.second || w.third;
  const cards = [];
  if (w.first) cards.push({ place: 'first', winner: w.first });
  if (w.second) cards.push({ place: 'second', winner: w.second });
  if (w.third) cards.push({ place: 'third', winner: w.third });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative p-8 md:p-10 rounded-3xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 backdrop-blur-sm hover:border-gray-400 dark:hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-xl">
        {/* Event color accent bar */}
        <div
          className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: event.color }}
        ></div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="p-3 rounded-xl bg-white/10 border border-white/10"
            style={{ color: event.color }}
          >
            <event.icon size={28} strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-orbitron font-black text-slate-900 dark:text-white uppercase tracking-tight">
              {event.name}
            </h3>
            <span className="text-[10px] font-orbitron font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-gray-500">
              {event.category}
            </span>
          </div>
        </div>

        {/* Winners Grid */}
        {hasWinners ? (
          <div className={`grid grid-cols-1 ${cards.length >= 3 ? 'sm:grid-cols-3' : cards.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' : 'max-w-sm mx-auto'} gap-6`}>
            {cards.map((card, i) => (
              <WinnerCard key={card.place} place={card.place} winner={card.winner} delay={0.1 + i * 0.1} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center py-8 text-center"
          >
            <Trophy className="w-12 h-12 text-slate-300 dark:text-gray-600 mb-3" />
            <p className="text-slate-400 dark:text-gray-500 font-medium text-sm">
              Winners will be announced soon
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Winners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32 min-h-screen bg-slate-50 dark:bg-dark-900"
    >
      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[200px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-neon-blue mb-10 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
            className="inline-flex mb-6"
          >
            <div className="relative">
              <Trophy
                className="w-16 h-16 md:w-20 md:h-20 text-amber-400"
                strokeWidth={1.5}
                style={{ filter: 'drop-shadow(0 0 15px rgba(251,191,36,0.5))' }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 border-2 border-dashed border-amber-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <span className="text-amber-500 dark:text-amber-400 font-orbitron text-sm tracking-widest uppercase mb-4 block">
            TECHTONIC 2K26
          </span>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-amber-300 dark:via-yellow-200 dark:to-amber-400">
            Event Winners
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-amber-400/60"></div>
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-amber-400/60"></div>
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
          </div>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Celebrating the champions of TECHTONIC 2K26! Here are the winners from each event.
          </p>
        </motion.div>

        {/* Winners List */}
        <div className="space-y-10">
          {eventData.map((event, index) => (
            <EventWinnerSection key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Bottom Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-amber-600/10 border border-amber-400/20 shadow-lg">
            <p className="text-xl md:text-2xl font-bold text-amber-500 dark:text-amber-300 mb-2">
              🙏 Thank You For Participating!
            </p>
            <p className="text-slate-500 dark:text-gray-400 text-sm">
              Thank you for being part of TECHTONIC 2K26. See you next year!
            </p>
            <p className="text-amber-400 dark:text-amber-300 font-orbitron font-bold text-xs mt-3 tracking-widest">
              पुढच्या वर्षी भेटूया! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
