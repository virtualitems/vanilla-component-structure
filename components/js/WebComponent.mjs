import { BaseCustomElement } from './BaseCustomElement.mjs';


export class WebComponent extends BaseCustomElement {

  /**
   * @property {NamedNodeMap} attributes
   * @property {ShadowRoot} shadowRoot
   */
  constructor() {
    super();
    console.log('ƒ constructor', this);

    this.addEventListener('click', this.handleClick);
  }

  static get observedAttributes() {
    return ['class', 'id', 'lang', 'style', 'title'];
  }

  connectedCallback() {
    console.log('ƒ connectedCallback');
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    console.log('ƒ attributeChangedCallback', attributeName, oldValue, newValue);
  }

  adoptedCallback() {
    console.log('ƒ adoptedCallback');
  }

  disconnectedCallback() {
    console.log('ƒ disconnectedCallback');
    // stop intervals
    // remove event listeners
    this.removeEventListener('click', this.handleClick);
    // dispose DOM elements
    // nullify references
  }

  handleClick() {
    console.log('ƒ handleClick');
    this.classList.toggle('active');
  }
}

/**
 * HTML template as string
 *
 * @type {string}
 */
WebComponent.htmlString = `
  <h1>
    <slot></slot>
  </h1>
  <p>
    <slot name="subtitle"></slot>
  </p>
`;

/**
 * CSS styles as string
 *
 * @type {string}
 */
WebComponent.cssString = `
  :host {
    display: block;
    border: 1px dashed black;
    padding: 1rem;
    margin: 1rem;
    font-family: sans-serif;
    text-align: center;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  :host(.active),
  :host(:hover) {
    background-color: beige;
  }
  ::slotted(span) {
    color: magenta;
  }
  h1 {
    color: blue;
  }
`;

/**
 * Custom element tag name
 *
 * @type {string}
 */
WebComponent.tagName = 'web-component';
