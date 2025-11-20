import { motion } from 'framer-motion';
import Section from '../components/Section';
import profilePic from '../assets/profile_pic.png';

const Hero = () => {
  return (
    <Section id="home" className="pt-20 md:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Nichapat.T</h1>
          <p className="text-xl md:text-2xl text-soft-gray mb-8">Product Design</p>
          <p className="text-lg text-light-gray leading-relaxed max-w-2xl">
            I&apos;m a Product Designer based in Chiang Mai with 2+ years of experience creating user-friendly digital products. I specialize in UI/UX design, focusing on intuitive interfaces and seamless user experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img
              src={profilePic}
              alt="Nichapat"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;

