import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    lng: 'en',
    react: {
      wait: true,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: 'locales/add/{{lng}}/{{ns}}',
    },
  });
export default i18next;