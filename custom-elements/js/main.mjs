import { defineCustomElement } from '../components/custom-elements.mjs';
import { WebComponent } from '../components/WebComponent/index.mjs';

defineCustomElement('web-component', WebComponent, {
  html: './components/WebComponent/index.html',
  css: './components/WebComponent/index.css',
  lang: {
    es: './components/WebComponent/lang/es.json',
    en: './components/WebComponent/lang/en.json'
  }
});
