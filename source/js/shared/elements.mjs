export class BaseCustomElement extends HTMLElement {

  /**
   * @type {string}
   */
  static tagName = '';

  /**
   * @type {string|null}
   */
  static htmlString = null;

  /**
   * @type {string|null}
   */
  static cssString = null;

  /**
   * @constructor
   */
  constructor() {
    super();

    if (new.target === BaseCustomElement) {
      throw new TypeError('BaseCustomElement is an abstract class and cannot be instantiated directly.');
    }

    const { htmlString, cssString } = this.constructor;

    // shadow
    this.attachShadow({ mode: 'open' });

    if (typeof htmlString === 'string' && htmlString.length > 0) {
      this.shadowRoot.innerHTML = htmlString;
    }

    // styles
    if (typeof cssString === 'string' && cssString.length > 0) {
      const stylesheet = new CSSStyleSheet();
      stylesheet.replace(cssString);
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
