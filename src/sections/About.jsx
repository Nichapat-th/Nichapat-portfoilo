import { motion } from 'framer-motion';
import Section from '../components/Section';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const experience = t('about.experienceItems');
  const education = t('about.educationItems');

  return (
    <Section id="about" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-soft-gray uppercase tracking-widest font-medium mb-4">
          {t('about.eyebrow')}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-12">{t('about.title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-soft-gray">{t('about.experience')}</h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-soft-gray pl-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">
                      {item.title}
                      {item.type && (
                        <span className="font-normal text-soft-gray"> · {item.type}</span>
                      )}
                    </h4>
                    <p className="text-sm text-soft-gray ml-4 whitespace-nowrap">{item.period}</p>
                  </div>
                  {item.company && (
                    <p className="text-light-gray mb-2">{item.company}</p>
                  )}
                  {item.details && (
                    <ul className="list-disc list-inside text-light-gray space-y-1 mb-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  {item.link && (
                    <a
                      href={item.link.startsWith('http') ? item.link : `https://${item.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-soft-gray hover:text-white transition-colors text-sm underline"
                    >
                      {item.link}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-soft-gray">{t('about.education')}</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-soft-gray pl-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-soft-gray ml-4 whitespace-nowrap">{item.period}</p>
                  </div>
                  {item.description && (
                    <p className="text-light-gray mb-1">{item.description}</p>
                  )}
                  {item.institution && (
                    <p className="text-light-gray mb-1">{item.institution}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
