import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import WorksGrid from './sections/WorksGrid';
import CaseStudy from './sections/CaseStudy';
import Contact from './sections/Contact';
import { projects } from './data/projects';

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <WorksGrid />
      {projects.map((project) => (
        <CaseStudy key={project.id} project={project} />
      ))}
      <Contact />
    </MainLayout>
  );
}

export default App;

