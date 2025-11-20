import { motion } from 'framer-motion';

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
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

