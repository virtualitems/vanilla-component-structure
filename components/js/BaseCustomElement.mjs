export class BaseCustomElement extends HTMLElement {

  static tagName = null;

  static htmlSource = null;

  static cssSource = null;

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

    if (this.constructor.htmlSource === null) {
      throw new Error('htmlSource is not defined.');
    }

    const response = await fetch(this.constructor.htmlSource);
    const content = await response.text();

    this.shadowRoot.innerHTML = content;
  }

  async loadCss() {

    if (this.constructor.cssSource === null) {
      throw new Error('cssSource is not defined.');
    }

    const response = await fetch(this.constructor.cssSource);

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
    this.readyCallback?.();
  }

  static define(htmlSource, cssSource) {
    this.htmlSource = htmlSource;
    this.cssSource = cssSource;
    customElements.define(this.tagName, this);
  }
}
