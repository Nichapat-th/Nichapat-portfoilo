import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import { worksGrid } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const routeMap = {
  5: '/brand-store',
  1: '/website-design',
  3: '/logo-design',
  6: '/interface-prototype',
  7: '/health-report-wireframe',
};

const WorksGrid = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleWorkClick = (work) => {
    const route = routeMap[work.id];
    if (route) navigate(route);
  };

  return (
    <Section id="works" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-sm text-soft-gray uppercase tracking-widest mb-3 font-medium">
          {t('works.eyebrow')}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">{t('works.title')}</h2>
        <p className="text-xl text-soft-gray">{t('works.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {worksGrid.map((work, index) => {
          const hasRoute = !!routeMap[work.id];
          const itemCopy = t(`works.items.${work.id}`);
          const title = itemCopy?.title || work.title;
          const category = itemCopy?.category || work.category;

          return (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => handleWorkClick(work)}
              className={`group relative rounded-xl overflow-hidden bg-dark-gray border border-dark-gray hover:border-soft-gray/40 transition-all duration-300 ${hasRoute ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={work.image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {hasRoute && (
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm tracking-wider flex items-center gap-2">
                    {t('works.viewWork')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              )}

              <div className="p-4">
                <p className="text-xs text-soft-gray uppercase tracking-widest mb-1 font-medium">
                  {category}
                </p>
                <h3 className="text-base font-semibold text-white group-hover:text-white transition-colors">
                  {title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default WorksGrid;
