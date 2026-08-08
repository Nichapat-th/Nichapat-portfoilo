import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import resume from '../assets/Nichapat_Resume.pdf';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
    { label: t('nav.works'), href: '#works' },
  ];

  const resolveHref = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-dark/80 backdrop-blur-sm border-b border-dark-gray"
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-6 gap-4">
          <div className="text-2xl font-bold">
            {isHome ? (
              <a href="#home" className="hover:opacity-80 transition-opacity">
                Nichapat.T
              </a>
            ) : (
              <Link to="/" className="hover:opacity-80 transition-opacity">
                Nichapat.T
              </Link>
            )}
          </div>
          <ul className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-wrap justify-end">
            {navItems.map((item) => (
              <li key={item.href} className="hidden sm:block">
                <a
                  href={resolveHref(item.href)}
                  className="text-sm font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <a
                href={resume}
                download="Nichapat_Resume.pdf"
                className="text-sm font-medium px-4 py-2 bg-dark-gray hover:bg-soft-gray/20 rounded-lg border border-soft-gray/20 hover:border-soft-gray transition-all uppercase tracking-wide whitespace-nowrap"
              >
                {t('nav.downloadResume')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
