export class BaseCustomElement extends HTMLElement {

  /**
   * @type {string|null}
   */
  static tagName = null;

  /**
   * @type {string|null}
   */
  static html = null;

  /**
   * @type {string|null}
   */
  static css = null;

  /**
   * @constructor
   */
  constructor() {
    super();

    if (new.target === BaseCustomElement) {
      throw new TypeError('BaseCustomElement is an abstract class and cannot be instantiated directly.');
    }

    const { html, css } = this.constructor;

    // shadow
    this.attachShadow({ mode: 'open' });

    if (typeof html === 'string' && html.length > 0) {
      this.shadowRoot.innerHTML = html;
    }

    // styles
    if (typeof css === 'string' && css.length > 0) {
      const stylesheet = new CSSStyleSheet();
      stylesheet.replace(css);
      this.shadowRoot.adoptedStyleSheets.push(stylesheet);
    }
  }

  /**
   * @override
   */
  adoptedCallback() {
    //
  }

  /**
   * @override
   */
  attributeChangedCallback() {
    //
  }

  /**
   * @override
   */
  connectedCallback() {
    //
  }

  /**
   * @override
   */
  connectedMoveCallback() {
    //
  }

  /**
   * @override
   */
  disconnectedCallback() {
    //
  }

  /**
   * @override
   */
  moveBefore() {
    //
  }

  /**
   * @param {string} eventName
   * @param {Object} detail
   */
  dispatchCustomEvent(eventName, detail) {
    const payload = { detail, bubbles: true, composed: true };
    this.dispatchEvent(new CustomEvent(eventName, payload));
  }
}
