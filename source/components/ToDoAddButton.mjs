import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoAddButton extends BaseCustomElement {

  /**
   * @function
   * @static
   *
   * @returns {string[]}
   */
  static get observedAttributes() {
    return ['class', 'id', 'lang', 'style', 'title'];
  }

  /**
   * @function
   */
  connectedCallback() {
    console.log('ƒ connectedCallback');
  }

  /**
   * @function
   */
  attributeChangedCallback(attributeName, oldValue, newValue) {
    console.log('ƒ attributeChangedCallback', attributeName, oldValue, newValue);
  }

  /**
   * @function
   */
  adoptedCallback() {
    console.log('ƒ adoptedCallback');
  }

  /**
   * @function
   */
  disconnectedCallback() {
    console.log('ƒ disconnectedCallback');
  }

}

ToDoAddButton.htmlString = `
  <button type="button">
    <slot></slot>
  </button>
`;

ToDoAddButton.cssString = `
  :host button {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 2px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    border-radius: 5px;
    border: 2px solid #008CBA;
  }

  :host button:hover {
    background-color: white;
    color: black;
    border: 2px solid #008CBA;
  }

  :host button:active {
    background-color: #008CBA;
  }
`;