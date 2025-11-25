import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { logoProjects } from '../data/logoProjects';

const LogoDesignProjects = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Logo Design Projects</h1>
            <p className="text-xl text-soft-gray">A collection of logo designs I&apos;ve created</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-dark-gray rounded-xl p-6 border border-dark-gray hover:border-soft-gray transition-all mb-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden flex items-center justify-center mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-center group-hover:text-white transition-colors">
                    {project.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default LogoDesignProjects;

