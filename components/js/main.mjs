import { defineCustomElement } from './custom-elements.mjs';
import { WebComponent } from './WebComponent.mjs';

defineCustomElement('web-component', WebComponent, {
  html: './html/WebComponent.html',
  css: './css/WebComponent.css'
});
