import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import Home from './pages/Home';
import WebsiteDesignProjects from './pages/WebsiteDesignProjects';
import LogoDesignProjects from './pages/LogoDesignProjects';
import Presentations from './pages/Presentations';
import InterfacePrototype from './pages/InterfacePrototype';
import HealthReportWireframe from './pages/HealthReportWireframe';
import BrandStore from './pages/BrandStore';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-design" element={<WebsiteDesignProjects />} />
        <Route path="/logo-design" element={<LogoDesignProjects />} />
        <Route path="/presentations" element={<Presentations />} />
        <Route path="/interface-prototype" element={<InterfacePrototype />} />
        <Route path="/health-report-wireframe" element={<HealthReportWireframe />} />
        <Route path="/brand-store" element={<BrandStore />} />
      </Routes>
    </Router>
  );
}

export default App;

