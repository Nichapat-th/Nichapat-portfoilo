import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-2 text-sm tracking-wide ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`uppercase transition-colors ${
          lang === 'en' ? 'text-white font-medium' : 'text-soft-gray hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-soft-gray/40 select-none" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setLang('th')}
        className={`uppercase transition-colors ${
          lang === 'th' ? 'text-white font-medium' : 'text-soft-gray hover:text-white'
        }`}
      >
        TH
      </button>
    </div>
  );
};

export default LanguageSwitcher;
