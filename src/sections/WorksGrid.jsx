import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Grid from '../components/Grid';
import { worksGrid } from '../data/projects';

const WorksGrid = () => {
  const navigate = useNavigate();

  const handleWorkClick = (work) => {
    if (work.title === 'Website Design') {
      navigate('/website-design');
    } else if (work.title === 'Logo Design') {
      navigate('/logo-design');
    } else if (work.title === 'Present Slide') {
      navigate('/presentations');
    } else if (work.title === 'Interface Prototype') {
      navigate('/interface-prototype');
    }
  };

  return (
    <Section id="works" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">WORKS</h2>
        <p className="text-xl text-soft-gray mb-12">
          Turning ideas into seamless user experiences
        </p>
      </motion.div>

      <Grid cols={3} gap={6}>
        {worksGrid.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => handleWorkClick(work)}
            className={`group cursor-pointer ${work.title === 'Website Design' || work.title === 'Logo Design' || work.title === 'Present Slide' || work.title === 'Interface Prototype' ? 'hover:opacity-90' : ''}`}
          >
            <div className="bg-dark-gray rounded-lg overflow-hidden aspect-[4/3] mb-4 flex items-center justify-center group-hover:bg-opacity-80 transition-all">
              <div className="w-full h-full bg-gradient-to-br from-dark-gray to-dark flex items-center justify-center text-soft-gray">
                <span className="text-sm">Placeholder</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors">{work.title}</h3>
            <p className="text-sm text-soft-gray">{work.category}</p>
          </motion.div>
        ))}
      </Grid>
    </Section>
  );
};

export default WorksGrid;

