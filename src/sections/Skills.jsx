import { motion } from 'framer-motion';
import Section from '../components/Section';
import { designTools } from '../data/designTools';

const Skills = () => {
  const computerSkills = [
    'Microsoft Word',
    'Microsoft Excel',
    'Microsoft PowerPoint',
    'Google Workspace',
    'File Management',
    'Cloud Storage (Drive / Dropbox)',
    'Basic Typing & Office Skills',
  ];

  const frontendSkills = {
    'HTML/CSS': [
      'HTML',
      'CSS',
      'CSS Flexbox',
      'CSS Grid',
      'Responsive CSS',
      'TailwindCSS (optional)',
    ],
    'Programming': [
      'Programming Basics',
      'JavaScript',
      'Event Handling',
      'JSON Basics',
    ],
    'Frontend Tools': [
      'Git / GitHub',
      'VS Code',
      'Browser DevTools',
    ],
  };

  return (
    <Section id="skills" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-16">SKILLS</h2>
        
        <div className="max-w-5xl space-y-12">
          {/* Design Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-soft-gray uppercase tracking-wider">
              Design Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {designTools.map((tool, index) => (
                <motion.div
                  key={index}
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

          {/* Computer Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-soft-gray uppercase tracking-wider">
              Computer Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {computerSkills.map((skill, index) => (
                <motion.span
                  key={index}
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

          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-soft-gray uppercase tracking-wider">
              Frontend (Basic Coding Skills)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(frontendSkills).map(([category, skills], catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                  className="space-y-4"
                >
                  <h4 className="text-base font-semibold text-light-gray">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (catIndex * 0.1) + (index * 0.03) }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-dark rounded-full text-xs text-light-gray border border-soft-gray/20 hover:border-soft-gray hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
