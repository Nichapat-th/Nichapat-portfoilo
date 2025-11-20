import { motion } from 'framer-motion';
import Section from '../components/Section';
import Tag from '../components/Tag';

const CaseStudy = ({ project }) => {
  const { title, subtitle, tags, images } = project;

  return (
    <Section className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-soft-gray mb-6">{subtitle}</p>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {(images || [1, 2, 3]).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[280px] bg-white rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-dark-gray rounded-[2.5rem] aspect-[9/19] overflow-hidden border-[6px] border-black">
                  {image ? (
                    <img
                      src={image}
                      alt={`${title} screen ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-soft-gray text-sm p-4">
                        <div className="mb-2">📱</div>
                        <div>Screen {index + 1}</div>
                        <div className="text-xs mt-2">{title}</div>
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

