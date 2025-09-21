import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoItem extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'todo-item';

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

ToDoItem.htmlString = `
  <li>
    <slot></slot>
    <todo-button class="danger">&times;</todo-button>
  </li>
`;

ToDoItem.cssString = ``;
