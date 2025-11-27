import { motion } from 'framer-motion';
import Section from '../components/Section';
import { photography } from '../data/photography';

const Photography = () => {
  // If no photos, show placeholder grid
  const displayPhotos = photography.length > 0 
    ? photography 
    : Array(9).fill(null).map((_, i) => ({ id: `placeholder-${i}`, image: null, alt: `Photo ${i + 1}` }));

  return (
    <Section id="photography" className="pt-20 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <p className="text-sm text-soft-gray mb-1">Aside from design...</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">I dabble in photography and film</h2>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {displayPhotos.map((photo, index) => {
            // Define heights based on row position
            let height;
            if (index < 3) {
              // Row 1: 240px
              height = 'h-[240px]';
            } else if (index < 6) {
              // Row 2: 300px
              height = 'h-[300px]';
            } else {
              // Row 3: 240px for first two, 260px for last
              height = index === 8 ? 'h-[260px]' : 'h-[240px]';
            }

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`${height} rounded-3xl overflow-hidden bg-dark-gray border border-soft-gray/30`}
              >
                {photo.image ? (
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-dark-gray flex items-center justify-center">
                    <span className="text-soft-gray text-xs">Photo {index + 1}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Photography;

