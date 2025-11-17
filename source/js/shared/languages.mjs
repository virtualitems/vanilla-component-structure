import { createInstance } from 'https://esm.sh/i18next@25.6.2';

const i18n = createInstance();

i18n.init({
  lng: 'es',
  resources: {
    es: {
      translation: {
        'app.title': 'Aplicación de Notas',
        'form.placeholder': 'Nueva nota',
        'form.button': 'Agregar',
        'note.delete': '×'
      }
    },
    en: {
      translation: {
        'app.title': 'Notes App',
        'form.placeholder': 'New note',
        'form.button': 'Add',
        'note.delete': '×'
      }
    }
  }
});

export { i18n };
