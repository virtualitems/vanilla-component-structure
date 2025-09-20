import { defineCustomElement } from '../components/custom-elements.mjs';
import { WebComponent } from '../components/web-component/index.mjs';

defineCustomElement('web-component', WebComponent, {
  html: './components/web-component/index.html',
  css: './components/web-component/index.css',
  lang: {
    es: './components/web-component/lang/es.json',
    en: './components/web-component/lang/en.json'
  }
});
