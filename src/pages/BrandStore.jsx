import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { brandStoreProjects } from '../data/brandStoreProjects';
import { useLanguage } from '../i18n/LanguageContext';

const highlightText = (text, keywords) => {
  if (!text || !keywords?.length) return text;
  const escaped = keywords
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isKeyword = keywords.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    );
    if (isKeyword) {
      return (
        <span key={`${part}-${index}`} className="text-white font-semibold">
          {part}
        </span>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
};

const keywordsByLang = {
  en: {
    description: [
      'Chiang Mai',
      'original magnets',
      'embroidered hats',
      'luggage tags',
      'Thai-inspired',
      'brand store',
      'market retail',
    ],
    inspiration: [
      'ALAB',
      'Chiang Mai',
      'local culture',
      'local stories',
      'places',
      'cultural details',
      'simple',
      'playful',
      'contemporary souvenirs',
    ],
    role: [
      'CEO',
      'ALAB',
      'concept to product development',
      'product ideas',
      'Chiang Mai',
      'visual and product design',
      'local artisans',
      'authentic craft makers',
      'meaningful souvenirs',
      'branding',
      'product direction',
      'business development',
    ],
    app: [
      'custom application',
      'manage and track',
      'ALAB sales',
      'every day',
      'selling products',
      'checking stock',
      'daily sales history',
      'each store',
    ],
  },
  th: {
    description: [
      'เชียงใหม่',
      'แม่เหล็กติดตู้เย็นต้นฉบับ',
      'หมวกปัก',
      'แท็กกระเป๋า',
      'วัฒนธรรมไทย',
      'ป๊อปอัพ',
      'ตลาด',
    ],
    inspiration: [
      'ALAB',
      'เชียงใหม่',
      'วัฒนธรรมท้องถิ่น',
      'เรื่องราว',
      'สถานที่',
      'ของที่ระลึก',
      'เรียบง่าย',
      'สนุก',
      'ร่วมสมัย',
    ],
    role: [
      'CEO',
      'ALAB',
      'คอนเซ็ปต์',
      'พัฒนาผลิตภัณฑ์',
      'เชียงใหม่',
      'ช่างฝีมือท้องถิ่น',
      'ของที่ระลึก',
      'แบรนด์',
      'ทิศทางผลิตภัณฑ์',
      'พัฒนาธุรกิจ',
    ],
    app: [
      'แอปพลิเคชัน',
      'จัดการและติดตาม',
      'ยอดขาย',
      'ทุกวัน',
      'ขายสินค้า',
      'ตรวจสต็อก',
      'ประวัติยอดขาย',
      'แต่ละสาขา',
    ],
  },
};

const MediaItem = ({ item, className = '' }) => (
  <div className={`rounded-xl overflow-hidden bg-dark-gray border border-dark-gray ${className}`}>
    {item.type === 'video' ? (
      <video
        src={item.src}
        controls
        playsInline
        preload="metadata"
        className="w-full h-auto max-h-[70vh] object-contain bg-black"
        aria-label={item.alt}
      />
    ) : (
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover aspect-[4/3]"
      />
    )}
  </div>
);

const MessageOutline = ({ label, children, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-3 left-5 z-10 bg-dark px-2">
      <span className="text-xs text-soft-gray uppercase tracking-widest font-medium">{label}</span>
    </div>
    <div className="relative rounded-2xl border border-dashed border-soft-gray/50 bg-dark-gray/40 px-6 py-7 md:px-8 md:py-8">
      <div className="absolute top-4 right-5 flex gap-1.5" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-soft-gray/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-soft-gray/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-soft-gray/60" />
      </div>
      {children}
    </div>
  </div>
);

const BrandStore = () => {
  const { t, lang } = useLanguage();
  const project = brandStoreProjects[0];
  const keywords = keywordsByLang[lang] || keywordsByLang.en;

  return (
    <div className="min-h-screen bg-dark">
      <Section className="pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-soft-gray hover:text-white transition-colors mb-8"
            >
              <span>←</span>
              <span>{t('common.backHome')}</span>
            </Link>
            <p className="text-sm text-soft-gray uppercase tracking-widest font-medium mb-3">
              {project.brand}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('brandStore.title')}</h1>

            <MessageOutline label={t('brandStore.descriptionLabel')} className="max-w-3xl mb-10 mt-8">
              <p className="text-xl text-soft-gray leading-relaxed pr-8">
                {highlightText(t('brandStore.description'), keywords.description)}
              </p>
            </MessageOutline>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-5xl">
              <MessageOutline label={t('brandStore.inspirationLabel')} className="mt-2">
                <p className="text-lg text-soft-gray leading-relaxed pr-8">
                  {highlightText(t('brandStore.inspiration'), keywords.inspiration)}
                </p>
              </MessageOutline>
              <MessageOutline label={t('brandStore.roleLabel')} className="mt-2">
                <p className="text-lg text-soft-gray leading-relaxed pr-8">
                  {highlightText(t('brandStore.role'), keywords.role)}
                </p>
              </MessageOutline>
            </div>

            {project.locations?.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-soft-gray uppercase tracking-widest font-medium mb-3">
                  {t('brandStore.storeLocation')}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {project.locations.map((location) => {
                    const copy = t(`brandStore.locations.${location.id}`);
                    return (
                      <li key={location.id}>
                        <a
                          href={`#${location.id}`}
                          className="text-lg text-white font-semibold hover:text-soft-gray transition-colors"
                        >
                          {copy?.name || location.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-16">
            {project.locations.map((location, locationIndex) => {
              const copy = t(`brandStore.locations.${location.id}`);
              return (
                <motion.section
                  key={location.id}
                  id={location.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: locationIndex * 0.05 }}
                  className="scroll-mt-28"
                >
                  <div className="mb-6 border-l-2 border-soft-gray pl-5">
                    <p className="text-sm text-soft-gray uppercase tracking-widest font-medium mb-1">
                      {t('brandStore.storeBranch')}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {copy?.label || location.label || location.name}
                    </h2>
                  </div>

                  {location.media?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {location.media.map((item) => (
                        <MediaItem
                          key={item.id}
                          item={item}
                          className={item.type === 'video' ? 'md:col-span-2' : ''}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-soft-gray">{t('brandStore.photosSoon')}</p>
                  )}
                </motion.section>
              );
            })}
          </div>

          {project.app && (
            <motion.section
              id="sales-app"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 scroll-mt-28"
            >
              <div className="mb-6 border-l-2 border-soft-gray pl-5">
                <p className="text-sm text-soft-gray uppercase tracking-widest font-medium mb-1">
                  {t('brandStore.appSubtitle')}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {t('brandStore.appTitle')}
                </h2>
              </div>

              <MessageOutline label={t('brandStore.aboutApp')} className="max-w-3xl mb-10 mt-8">
                <p className="text-lg text-soft-gray leading-relaxed pr-8">
                  {highlightText(t('brandStore.appDescription'), keywords.app)}
                </p>
              </MessageOutline>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">
                {project.app.screens.map((screen, index) => (
                  <motion.div
                    key={screen.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-full max-w-[260px] rounded-[1.75rem] border border-soft-gray/40 bg-dark-gray p-2 shadow-lg">
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        className="w-full h-auto rounded-[1.35rem] object-cover"
                      />
                    </div>
                    <p className="mt-4 text-sm text-soft-gray uppercase tracking-widest font-medium">
                      {t(`brandStore.screens.${screen.id}`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {project.media?.length > 0 && (
            <div className="mt-16">
              <div className="mb-6 border-l-2 border-soft-gray pl-5">
                <p className="text-sm text-soft-gray uppercase tracking-widest font-medium mb-1">
                  {t('brandStore.brandStoreLabel')}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {t('brandStore.videos')}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {project.media.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <MediaItem item={item} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </Section>
    </div>
  );
};

export default BrandStore;
