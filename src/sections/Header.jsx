import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import resume from '../assets/Nichapat_Resume.pdf';
import cv from '../assets/Nichapat_CV.pdf';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-3.5-3.5M12 15l3.5-3.5M5 21h14" />
  </svg>
);

const DocLink = ({ viewHref, downloadHref, downloadName, label, downloadLabel }) => (
  <div className="inline-flex items-center gap-1.5">
    <a
      href={viewHref}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-soft-gray hover:text-white transition-colors uppercase tracking-wide whitespace-nowrap"
    >
      {label}
    </a>
    <a
      href={downloadHref}
      download={downloadName}
      aria-label={downloadLabel}
      title={downloadLabel}
      className="inline-flex items-center justify-center text-soft-gray/50 hover:text-white transition-colors"
    >
      <DownloadIcon />
    </a>
  </div>
);

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
          <div className="flex items-center gap-3">
            {!isHome && (
              <Link
                to="/"
                aria-label={t('common.backHome')}
                title={t('common.backHome')}
                className="inline-flex items-center justify-center w-9 h-9 text-soft-gray hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </Link>
            )}
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
          </div>

          <ul className="flex items-center gap-5 md:gap-7 flex-wrap justify-end">
            {navItems.map((item) => (
              <li key={item.href} className="hidden sm:block">
                <a
                  href={resolveHref(item.href)}
                  className="text-sm font-medium text-soft-gray hover:text-white transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="hidden sm:block h-3 w-px bg-soft-gray/20" aria-hidden="true" />

            <li>
              <LanguageSwitcher />
            </li>

            <li className="h-3 w-px bg-soft-gray/20" aria-hidden="true" />

            <li>
              <DocLink
                viewHref={cv}
                downloadHref={cv}
                downloadName="Nichapat_Thammawit_CV.pdf"
                label={t('nav.downloadCv')}
                downloadLabel={`${t('nav.downloadFile')} ${t('nav.downloadCv')}`}
              />
            </li>
            <li>
              <DocLink
                viewHref={resume}
                downloadHref={resume}
                downloadName="Nichapat_Resume.pdf"
                label={t('nav.downloadResume')}
                downloadLabel={`${t('nav.downloadFile')} ${t('nav.downloadResume')}`}
              />
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
