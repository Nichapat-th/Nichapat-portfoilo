import { motion } from 'framer-motion';
import resume from '../assets/Nichapat_Resume.pdf';

const Header = () => {
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
    { label: 'WORKS', href: '#works' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-dark/80 backdrop-blur-sm border-b border-dark-gray"
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-6">
          <div className="text-2xl font-bold">
            <a href="#home" className="hover:opacity-80 transition-opacity">
              Nichapat.T
            </a>
          </div>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resume}
                download="Nichapat_Resume.pdf"
                className="text-sm font-medium px-4 py-2 bg-dark-gray hover:bg-soft-gray/20 rounded-lg border border-soft-gray/20 hover:border-soft-gray transition-all uppercase tracking-wide"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

