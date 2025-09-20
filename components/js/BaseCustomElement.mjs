export class BaseCustomElement extends HTMLElement {

  static tagName = null;

  static eventNames = Object.freeze({});

  constructor() {
    super();

    if (new.target === BaseCustomElement) {
      throw new TypeError('BaseCustomElement is an abstract class and cannot be instantiated directly.');
    }

    // shadow
    this.attachShadow({ mode: 'open' });

    // render
    this.render();
  }

  async loadHtml() {
    const response = await fetch(this.getAttribute('data-html'));
    const content = await response.text();

    this.shadowRoot.innerHTML = content;
  }

  async loadCss() {
    const response = await fetch(this.getAttribute('data-css'));

    if (response.ok === false) {
      throw new Error(response.statusText);
    }

    const content = await response.text();

    const stylesheet = new CSSStyleSheet();
    await stylesheet.replace(content);
    this.shadowRoot.adoptedStyleSheets.push(stylesheet);
  }

  async render() {
    this.loadCss();
    await this.loadHtml();

    if (this.readyCallback instanceof Function) {
      this.readyCallback();
    }
  }
}
