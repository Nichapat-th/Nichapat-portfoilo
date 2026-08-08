import { motion } from 'framer-motion';
import Section from '../components/Section';
import profilePic from '../assets/profile_pic.png';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '2+', label: t('hero.years') },
    { value: '10+', label: t('hero.projects') },
    { value: '3+', label: t('hero.liveProducts') },
  ];

  return (
    <Section id="home" className="pt-24 md:pt-36 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-soft-gray text-sm uppercase tracking-widest font-medium mb-6"
          >
            {t('hero.role')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Nichapat
            <br />
            <span className="text-soft-gray">Thammawit</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-light-gray leading-relaxed max-w-lg mb-10"
          >
            {t('hero.bio')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#works"
              className="px-6 py-3 bg-white text-dark font-semibold rounded-lg text-sm hover:bg-soft-gray transition-colors"
            >
              {t('hero.viewWorks')}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-soft-gray/30 text-white font-semibold rounded-lg text-sm hover:border-soft-gray transition-colors"
            >
              {t('hero.getInTouch')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-8 mt-12 pt-10 border-t border-dark-gray"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-soft-gray mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-accent/20 scale-110" />
            <div className="absolute inset-0 rounded-full border border-soft-gray/10 scale-125" />

            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-soft-gray/20 relative z-10">
              <img
                src={profilePic}
                alt="Nichapat Thammawit"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-4 -left-6 bg-dark-gray border border-soft-gray/20 rounded-xl px-4 py-3 z-20 shadow-xl"
            >
              <p className="text-xs text-soft-gray mb-0.5">{t('hero.currentlyAt')}</p>
              <p className="text-sm font-semibold text-white">Meet Software Co., LTD.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
