import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoButton extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'todo-button';

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

ToDoButton.htmlString = `
  <button>
    <slot></slot>
  </button>
`;

ToDoButton.cssString = `
  :host button {
    background-color: #008CBA;
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
    border: 1px solid #008CBA;
  }

  :host button:hover,
  :host button:active {
    background-color: white;
    color: black;
    border: 1px solid #008CBA;
  }

  :host(.danger) button {
    background-color: #f44336;
    border: 1px solid #f44336;
    color: white;
  }

  :host(.danger) button:hover,
  :host(.danger) button:active {
    background-color: white;
    color: black;
    border: 1px solid #f44336;
  }
`;
