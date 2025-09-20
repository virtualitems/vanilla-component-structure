import { defineCustomElement } from './custom-elements.mjs';
import { WebComponent } from './WebComponent.mjs';

defineCustomElement('web-component', WebComponent, {
  html: './components/WebComponent/index.html',
  css: './components/WebComponent/index.css',
  lang: {
    es: './components/WebComponent/lang/es.json',
    en: './components/WebComponent/lang/en.json'
  }
});
