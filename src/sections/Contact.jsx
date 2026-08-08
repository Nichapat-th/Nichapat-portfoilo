import { motion } from 'framer-motion';
import Section from '../components/Section';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      label: t('contact.email'),
      value: 'nthammawit@gmail.com',
      link: 'mailto:nthammawit@gmail.com',
    },
    {
      label: t('contact.phone'),
      value: '099 271 1089',
      link: 'tel:0992711089',
    },
    {
      label: 'Line',
      value: 'nichapat33592',
      link: 'https://line.me/ti/p/~nichapat33592',
    },
    {
      label: 'GitHub',
      value: 'Nichapat-th',
      link: 'https://github.com/Nichapat-th',
    },
    {
      label: 'Dribbble',
      value: 'Meeraimai',
      link: 'https://dribbble.com/Meeraimai',
    },
  ];

  return (
    <Section id="contact" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-soft-gray uppercase tracking-widest font-medium mb-4">
          {t('contact.eyebrow')}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="text-xl text-soft-gray mb-14 max-w-xl">{t('contact.subtitle')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-0 divide-y divide-dark-gray">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex items-center justify-between py-5"
              >
                <span className="text-soft-gray text-sm font-medium w-24 uppercase tracking-wider">
                  {item.label}
                </span>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-white font-medium hover:text-soft-gray transition-colors flex items-center gap-2 group"
                >
                  {item.value}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-dark-gray rounded-2xl p-8 border border-soft-gray/10"
          >
            <p className="text-3xl font-bold mb-4 leading-snug">{t('contact.ctaTitle')}</p>
            <p className="text-light-gray mb-8 leading-relaxed">{t('contact.ctaBody')}</p>
            <a
              href="mailto:nthammawit@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dark font-semibold rounded-lg text-sm hover:bg-soft-gray transition-colors"
            >
              {t('contact.sendEmail')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
