import { motion } from 'framer-motion';
import Section from '../components/Section';
import Tag from '../components/Tag';

const CaseStudy = ({ project, index }) => {
  const { title, subtitle, tags, images, description, category } = project;
  const num = String(index + 1).padStart(2, '0');

  return (
    <Section className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-soft-gray/40 text-5xl font-bold leading-none select-none">{num}</span>
              <span className="text-xs text-soft-gray uppercase tracking-widest font-medium">{category}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{title}</h2>
            <p className="text-lg text-soft-gray">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </div>
        </div>

        {description && (
          <p className="text-light-gray text-base leading-relaxed mb-10 max-w-2xl">{description}</p>
        )}

        {/* Screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {(images || [1, 2, 3]).map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[260px] bg-white rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-dark-gray rounded-[2.5rem] aspect-[9/19] overflow-hidden border-[6px] border-black">
                  {image ? (
                    <img
                      src={image}
                      alt={`${title} screen ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-soft-gray text-sm p-4">
                        <div className="mb-2 text-2xl">📱</div>
                        <div>Screen {i + 1}</div>
                        <div className="text-xs mt-2 opacity-60">{title}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default CaseStudy;
