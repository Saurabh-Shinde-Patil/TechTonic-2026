import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventData, GLOBAL_DEADLINE } from '../data/siteData';
import { 
  ArrowLeft, Calendar, MapPin, Users, Info, 
  CheckCircle, Phone, ExternalLink, Trophy, 
  Clock, CreditCard, AlertCircle, MessageCircle,
  Sparkles
} from 'lucide-react';
import { useEffect } from 'react';

export default function EventDetails() {
  const { id } = useParams();
  const event = eventData.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
        <Link to="/" className="text-indigo-600 dark:text-neon-blue underline">Back to Home</Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32 min-h-screen bg-slate-50 dark:bg-dark-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/#events" 
          className="inline-flex items-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-neon-blue mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </Link>

        {/* Hero Poster */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 aspect-[16/9] md:aspect-[21/9] border border-white/10"
        >
          <img 
            src={event.poster || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'} 
            alt={event.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
          </div>
        </motion.div>

        {/* Event Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-orbitron font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            {event.name}
          </h1>
          <div className="w-24 h-2 bg-indigo-600 dark:bg-neon-blue mt-4 rounded-full"></div>
        </motion.div>

        {/* Quick Info Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={itemVariants} className="glass-card p-6 flex items-center space-x-4 border-white/5 bg-white/50 dark:bg-white/5">
            <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-neon-blue">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-500 uppercase tracking-wider font-bold">Event Date</p>
              <p className="font-orbitron font-bold dark:text-white">18-19 May 2026</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 flex items-center space-x-4 border-white/5 bg-white/50 dark:bg-white/5">
            <div className="p-3 rounded-2xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-500 uppercase tracking-wider font-bold">Deadline</p>
              <p className="font-orbitron font-bold dark:text-white text-sm">{event.registrationDeadline}</p>
              {GLOBAL_DEADLINE.showSpotEntry && (
                <div className="mt-2 py-0.5 px-2 rounded-md bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-[9px] font-black uppercase tracking-tighter animate-pulse inline-block">
                  Spot Entry Available
                </div>
              )}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 flex items-center space-x-4 border-white/5 bg-white/50 dark:bg-white/5">
            <div className="p-3 rounded-2xl bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-500 uppercase tracking-wider font-bold">Entry Fee</p>
              <p className="font-orbitron font-bold dark:text-white">{event.registrationFee}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 flex items-center space-x-4 border-white/5 bg-white/50 dark:bg-white/5">
            <div className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-500 uppercase tracking-wider font-bold">Prizes</p>
              <p className="font-orbitron font-bold dark:text-white text-xs">Cash Prizes + Trophy</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-orbitron font-bold mb-6 flex items-center dark:text-white">
                <Info className="mr-3 text-indigo-600 dark:text-neon-blue" />
                Detailed Description
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-white/5 p-8 rounded-3xl border border-white/5 shadow-inner">
                  {event.detailedDescription}
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-orbitron font-bold mb-6 flex items-center dark:text-white">
                <CheckCircle className="mr-3 text-green-500" />
                Rules & Guidelines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {event.rules.map((rule, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex items-start p-4 bg-white dark:bg-white/5 rounded-2xl border border-white/5 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600 dark:text-gray-300 text-sm font-medium">{rule}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xs italic text-slate-500 dark:text-amber-500/80 mt-4 pl-2 border-l-2 border-amber-500/30"
              >
                *Rules and guidelines for events may be modified by the organizers if required during the event.*
              </motion.p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-orbitron font-bold mb-6 flex items-center dark:text-white">
                <MapPin className="mr-3 text-red-500" />
                Venue Details
              </h2>
              <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-white/5 shadow-sm">
                <p className="text-lg text-slate-600 dark:text-gray-300 font-medium">
                  {event.venue}
                </p>
              </div>
            </motion.section>
          </div>

          <aside className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-8 border-indigo-100 dark:border-white/10 sticky top-28 shadow-2xl"
            >
              <h3 className="text-xl font-orbitron font-black mb-8 dark:text-white flex items-center">
                <Phone className="mr-3 text-indigo-600 dark:text-neon-blue" />
                For any Query / Contact us :
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Users className="mr-4 text-pink-600 dark:text-neon-pink mt-1" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500 uppercase font-bold mb-1">Participation</p>
                    <p className="font-orbitron font-bold dark:text-white">{event.teamSize}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-white/10 pt-6">
                  <div className="space-y-5">
                    {event.coordinators.map((coordinator, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-indigo-500/20 transition-all"
                      >
                        <div>
                          <p className="font-bold dark:text-white text-sm uppercase">{coordinator.name}</p>
                          <p className="text-[10px] text-slate-500 dark:text-gray-500 font-bold tracking-widest">{coordinator.role}</p>
                        </div>
                        <div className="flex space-x-2">
                          <a 
                            href={`https://wa.me/91${coordinator.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
                            title="WhatsApp"
                          >
                            <MessageCircle size={16} />
                          </a>
                          <a 
                            href={`tel:${coordinator.phone}`}
                            className="p-3 rounded-xl bg-indigo-600 dark:bg-neon-blue text-white dark:text-black shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform"
                            title="Call"
                          >
                            <Phone size={16} />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple text-white dark:text-black font-orbitron font-black rounded-2xl flex items-center justify-center group shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] dark:shadow-[0_10px_30px_-10px_rgba(0,243,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    REGISTER NOW
                    <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-start"
            >
              <AlertCircle className="text-amber-500 mr-3 mt-1 shrink-0" size={20} />
              <p className="text-xs text-amber-700 dark:text-amber-300 font-medium leading-relaxed">
                Important: Participants must report at the venue at least 30 minutes before the event start time.
              </p>
            </motion.div>
          </aside>
        </div>
      </div>

      {/* Sticky Mobile Register Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl border-t border-white/10 z-50">
        <a 
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-indigo-600 dark:bg-neon-blue text-white dark:text-black font-orbitron font-black rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all"
        >
          REGISTER NOW
          <ExternalLink size={18} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
}
