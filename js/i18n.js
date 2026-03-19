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

    // Update logo with special handling for Chinese
    const logoEl = document.getElementById('site-logo');
    if (logoEl && selected.nav.logo) {
      logoEl.innerHTML = selected.nav.logo;
    }

    // Update dynamic download links
    const sailorsLink = document.getElementById('sailors-gdd-link');
    if (sailorsLink && selected.projects.project7.gddDownloadPath) {
      sailorsLink.href = selected.projects.project7.gddDownloadPath;
    }

    localStorage.setItem(STORAGE_KEY, selected.meta.lang);
  };

  const boot = async () => {
    try {
      console.log('Loading translations...');
      const response = await fetch('i18n/translations.json');
      console.log('Fetch response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const translations = await response.json();
      console.log('Translations loaded:', Object.keys(translations));

      const stored = localStorage.getItem(STORAGE_KEY);
      const initialLang = translations[stored] ? stored : DEFAULT_LANG;
      setLanguage(translations, initialLang);
      console.log('Initial language set to:', initialLang);

      const toggle = document.getElementById(TOGGLE_ID);
      console.log('Toggle element found:', !!toggle);
      
      if (!toggle) {
        console.error('Language toggle element not found!');
        return;
      }

      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        const current = document.documentElement.lang;
        const nextLang = current === 'en' ? 'zh-Hans' : 'en';
        console.log('Switching language from', current, 'to', nextLang);
        setLanguage(translations, nextLang);
      });
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  };

  document.addEventListener('DOMContentLoaded', boot);
})();
