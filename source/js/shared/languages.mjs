import { createInstance } from 'https://esm.sh/i18next@25.6.2';

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
