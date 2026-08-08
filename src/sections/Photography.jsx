import { motion } from 'framer-motion';
import Section from '../components/Section';
import { photography } from '../data/photography';
import { useLanguage } from '../i18n/LanguageContext';

const Photography = () => {
  const { t } = useLanguage();

  if (photography.length === 0) {
    return null;
  }

  return (
    <Section id="photography" className="pt-20 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <p className="text-sm text-soft-gray mb-1">{t('photography.eyebrow')}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">{t('photography.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {photography.map((photo, index) => {
            // Define heights - adjust based on available photos
            let height;
            if (photography.length <= 3) {
              // If 3 or fewer photos, use consistent height
              height = 'h-[300px]';
            } else if (index < 3) {
              // Row 1: 240px
              height = 'h-[240px]';
            } else if (index < 6) {
              // Row 2: 300px
              height = 'h-[300px]';
            } else {
              // Row 3: 240px for first two, 260px for last
              height = index === 8 ? 'h-[260px]' : 'h-[240px]';
            }

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`${height} rounded-3xl overflow-hidden bg-dark-gray border border-soft-gray/30`}
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Photography;

