import { motion } from 'framer-motion';
import Section from '../components/Section';
import { designTools } from '../data/designTools';
import { useLanguage } from '../i18n/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const computerSkills = t('skills.computerList');
  const frontendSkills = t('skills.frontendList');

  return (
    <Section id="skills" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-soft-gray uppercase tracking-widest font-medium mb-4">
          {t('skills.eyebrow')}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">{t('skills.title')}</h2>

        <div className="max-w-5xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-soft-gray uppercase tracking-wider">
              {t('skills.designTools')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {designTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group flex items-center gap-2.5 px-5 py-3 bg-dark-gray rounded-lg border border-dark-gray hover:border-soft-gray transition-all"
                >
                  {tool.hasLogo && (
                    <div className="w-6 h-6 rounded bg-soft-gray/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {tool.logo ? (
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <span className="text-xs font-bold text-soft-gray">{tool.name.charAt(0)}</span>
                      )}
                    </div>
                  )}
                  <span className="text-sm text-light-gray group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-soft-gray uppercase tracking-wider">
              {t('skills.computerSkills')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {computerSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-3 bg-dark-gray rounded-lg text-sm text-light-gray border border-dark-gray hover:border-soft-gray hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-soft-gray uppercase tracking-wider">
              {t('skills.frontend')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-3 bg-dark-gray rounded-lg text-sm text-light-gray border border-dark-gray hover:border-soft-gray hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
