import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import catsnapPrototype from '../assets/catsnap_prototype.mov';
import { useLanguage } from '../i18n/LanguageContext';

const InterfacePrototype = () => {
  const { t, lang } = useLanguage();

  const subtitle =
    lang === 'th'
      ? 'โปรเจกต์เกม — Interface Prototype'
      : 'Game Project — Interface Prototype';
  const description =
    lang === 'th'
      ? 'วิดีโอสาธิตอินเทอร์เฟซและโฟลว์ของ Catsnap'
      : 'Screen recording of the Catsnap interface prototype and interaction flow';

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
              <span>{t('common.backHome')}</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Catsnap</h1>
            <p className="text-lg text-soft-gray mb-2">{subtitle}</p>
            <p className="text-base text-light-gray max-w-2xl">{description}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-dark-gray rounded-xl border border-soft-gray/20 overflow-hidden">
              <video
                src={catsnapPrototype}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
                aria-label="Catsnap interface prototype screen recording"
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default InterfacePrototype;
