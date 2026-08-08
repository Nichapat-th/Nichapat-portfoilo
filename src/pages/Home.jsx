import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import WorksGrid from '../sections/WorksGrid';
import CaseStudy from '../sections/CaseStudy';
import Photography from '../sections/Photography';
import Contact from '../sections/Contact';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <WorksGrid />
      {projects.map((project, index) => (
        <CaseStudy key={project.id} project={project} index={index} />
      ))}
      <Photography />
      <Contact />
    </MainLayout>
  );
};

export default Home;

