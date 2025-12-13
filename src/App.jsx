import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebsiteDesignProjects from './pages/WebsiteDesignProjects';
import LogoDesignProjects from './pages/LogoDesignProjects';
import Presentations from './pages/Presentations';
import InterfacePrototype from './pages/InterfacePrototype';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-design" element={<WebsiteDesignProjects />} />
        <Route path="/logo-design" element={<LogoDesignProjects />} />
        <Route path="/presentations" element={<Presentations />} />
        <Route path="/interface-prototype" element={<InterfacePrototype />} />
      </Routes>
    </Router>
  );
}

export default App;

