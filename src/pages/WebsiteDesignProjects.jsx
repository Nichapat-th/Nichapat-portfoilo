import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { websiteProjects } from '../data/websiteProjects';

const WebsiteDesignProjects = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Section className="pt-32 pb-20">
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
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Website Design Projects</h1>
            <p className="text-xl text-soft-gray">A collection of website designs I&apos;ve created</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-gray rounded-xl p-8 border border-dark-gray hover:border-soft-gray transition-all group"
              >
                {project.image && (
                  <div className="mb-6 overflow-hidden rounded-lg border border-soft-gray/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-soft-gray mb-3 uppercase tracking-wider">{project.type}</p>
                  <p className="text-light-gray leading-relaxed">{project.description}</p>
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-dark rounded-lg border border-soft-gray/20 hover:border-soft-gray hover:text-white transition-all text-sm"
                  >
                    <span>Visit Website</span>
                    <span>→</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default WebsiteDesignProjects;

