(() => {
  const DEFAULT_LANG = 'en';
  const TOGGLE_ID = 'language-toggle';
  const STORAGE_KEY = 'site-language';

  const getByPath = (obj, path) => path.split('.').reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);

  const setLanguage = (translations, lang) => {
    const selected = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = selected.meta.lang;
    document.title = selected.meta.title;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = getByPath(selected, key);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    localStorage.setItem(STORAGE_KEY, selected.meta.lang);
  };

  const boot = async () => {
    try {
      const response = await fetch('i18n/translations.json');
      const translations = await response.json();

      const stored = localStorage.getItem(STORAGE_KEY);
      const initialLang = translations[stored] ? stored : DEFAULT_LANG;
      setLanguage(translations, initialLang);

      const toggle = document.getElementById(TOGGLE_ID);
      if (!toggle) return;

      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        const current = document.documentElement.lang;
        const nextLang = current === 'en' ? 'zh-Hans' : 'en';
        setLanguage(translations, nextLang);
      });
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  };

  document.addEventListener('DOMContentLoaded', boot);
})();
