/**
 * @description Base class for custom HTML elements.
 * @abstract
 */
export class BaseCustomElement extends HTMLElement {

  // attributes

  // static attributes

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

  // Constructor

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

    if (('string' === typeof html) && (html.length > 0)) {
      this.shadowRoot.innerHTML = html;
    }

    // styles
    if (('string' === typeof css) && (css.length > 0)) {
      const stylesheet = new CSSStyleSheet();
      stylesheet.replace(css);
      this.shadowRoot.adoptedStyleSheets.push(stylesheet);
    }
  }

  // getters/setters

  // static getters/setters

  // methods

  /**
   * @param {string} eventName
   * @param {Object} detail
   */
  dispatchCustomEvent(eventName, detail) {
    const payload = { detail, bubbles: true, composed: true };
    this.dispatchEvent(new CustomEvent(eventName, payload));
  }

  /**
   * @param {string} elementId
   * @param {string|null|undefined} content
   */
  replaceTextContent(elementId, content) {
    this.shadowRoot.getElementById(elementId).textContent = content ?? '';
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

  // static methods

} //:: class
