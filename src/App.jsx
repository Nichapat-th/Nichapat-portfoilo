import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebsiteDesignProjects from './pages/WebsiteDesignProjects';
import LogoDesignProjects from './pages/LogoDesignProjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-design" element={<WebsiteDesignProjects />} />
        <Route path="/logo-design" element={<LogoDesignProjects />} />
      </Routes>
    </Router>
  );
}

export default App;

