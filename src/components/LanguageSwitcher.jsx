import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-lg border border-soft-gray/20 bg-dark-gray px-1.5 py-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 text-xs font-semibold uppercase tracking-wide rounded-md transition-colors ${
          lang === 'en'
            ? 'bg-white text-dark'
            : 'text-soft-gray hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('th')}
        className={`px-2.5 py-1 text-xs font-semibold uppercase tracking-wide rounded-md transition-colors ${
          lang === 'th'
            ? 'bg-white text-dark'
            : 'text-soft-gray hover:text-white'
        }`}
      >
        TH
      </button>
    </div>
  );
};

export default LanguageSwitcher;
