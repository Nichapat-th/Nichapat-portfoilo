import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import CatsnapVideo from '../assets/Catsnap.mp4';

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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Interface Prototype</h1>
            <p className="text-lg text-soft-gray">Interactive prototype showcase</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-dark-gray rounded-xl p-6 border border-dark-gray hover:border-soft-gray transition-all">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-1">Catsnap</h2>
                <p className="text-sm text-soft-gray">Interface Prototype</p>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-soft-gray/20">
                <video
                  src={CatsnapVideo}
                  controls
                  className="w-full h-auto max-h-[70vh] object-contain"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default InterfacePrototype;

