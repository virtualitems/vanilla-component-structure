import { createInstance } from 'i18next';

const i18n = createInstance();

i18n.init({
  lng: 'es',
  resources: {
    es: {
      translation: { }
    },
    en: {
      translation: { }
    }
  }
});

export { i18n };
