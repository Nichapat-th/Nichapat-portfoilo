import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { presentations } from '../data/presentations';

const Presentations = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Presentations</h1>
            <p className="text-xl text-soft-gray">A collection of UX/UI design presentations</p>
          </div>

          {presentations.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-dark-gray rounded-full flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <p className="text-soft-gray text-lg">No presentations added yet</p>
              <p className="text-light-gray text-sm mt-2">Add your presentation screenshots and links in the data file</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {presentations.map((presentation, index) => (
                <motion.div
                  key={presentation.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-dark-gray rounded-xl overflow-hidden border border-dark-gray hover:border-soft-gray transition-all h-full flex flex-col">
                    {/* Preview Image */}
                    {presentation.previewImage ? (
                      <div className="relative overflow-hidden aspect-[16/9] bg-dark">
                        <motion.img
                          src={presentation.previewImage}
                          alt={presentation.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-2 text-white text-sm">
                            <span>View Presentation</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-gradient-to-br from-dark-gray to-dark flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-soft-gray/20 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">📊</span>
                          </div>
                          <p className="text-soft-gray text-sm">Preview</p>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <p className="text-xs text-soft-gray mb-2 uppercase tracking-wider">
                          {presentation.category || 'UX/UI Design'}
                        </p>
                        <h2 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                          {presentation.title}
                        </h2>
                        {presentation.description && (
                          <p className="text-light-gray text-sm leading-relaxed">
                            {presentation.description}
                          </p>
                        )}
                      </div>

                      {/* Link Button */}
                      {presentation.url && (
                        <a
                          href={presentation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-dark rounded-lg border border-soft-gray/20 hover:border-soft-gray hover:text-white transition-all text-sm w-full justify-center"
                        >
                          <span>View Presentation</span>
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </Section>
    </div>
  );
};

export default Presentations;

