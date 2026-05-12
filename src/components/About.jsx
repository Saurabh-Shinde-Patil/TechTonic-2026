import { motion } from 'framer-motion';
import { features } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 neon-text-purple text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
            About TECHTONIC 2K26
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            TECHTONIC 2K26 is a mega technical and fun event organized by the Department of Electronics & Computer Engineering at CSMSS Chhatrapati Shahu College of Engineering.
            The event brings together innovation, creativity, AI, strategy, technical skills, and entertainment through exciting competitions designed for students.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-6 flex flex-col items-center text-center border border-white/5 transition-all duration-300 ${feature.border} ${feature.shadow} group`}
            >
              <div className={`p-4 rounded-full bg-dark-800 mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-orbitron font-semibold tracking-wide">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
