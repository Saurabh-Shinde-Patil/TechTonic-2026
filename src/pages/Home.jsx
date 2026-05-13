import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Events from '../components/Events';
import Prizes from '../components/Prizes';
import KeyHighlights from '../components/KeyHighlights';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Timeline />
      <Events />
      <Prizes />
      <KeyHighlights />
      <Contact />
      <FAQ />
    </motion.div>
  );
}
