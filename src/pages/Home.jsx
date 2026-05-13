import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

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
