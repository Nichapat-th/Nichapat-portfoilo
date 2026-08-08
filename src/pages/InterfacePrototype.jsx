import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const FIGMA_EMBED_URL = ''; // Paste Figma prototype embed URL here

const InterfacePrototype = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Section className="pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-soft-gray hover:text-white transition-colors mb-6"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Catsnap</h1>
            <p className="text-lg text-soft-gray">Game Project — Interface Prototype</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-dark-gray rounded-xl border border-soft-gray/20 overflow-hidden">
              {FIGMA_EMBED_URL ? (
                <iframe
                  src={FIGMA_EMBED_URL}
                  className="w-full"
                  style={{ height: '75vh', border: 'none' }}
                  allowFullScreen
                  title="Catsnap Figma Prototype"
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-32 text-center px-8">
                  <div className="w-16 h-16 rounded-full bg-soft-gray/10 flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-soft-gray">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold mb-2">Catsnap</h2>
                  <p className="text-soft-gray max-w-md">
                    Interactive Figma prototype coming soon.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default InterfacePrototype;
