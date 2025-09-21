import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoItem extends BaseCustomElement {

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
    const element = this;
    this.shadowRoot.querySelector('todo-button').addEventListener('click', (event) => {
      element.remove();
    });
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