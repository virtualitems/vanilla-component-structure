export class BaseCustomElement extends HTMLElement {

  static tagName = null;

  static htmlString = null;

  static cssString = null;

  static eventNames = Object.freeze({});

  constructor() {
    super();

    if (new.target === BaseCustomElement) {
      throw new TypeError('BaseCustomElement is an abstract class and cannot be instantiated directly.');
    }

    // shadow
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.constructor.htmlString;

    // css
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(this.constructor.cssString);
    this.shadowRoot.adoptedStyleSheets.push(stylesheet);

  }
}
