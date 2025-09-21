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
    this.shadowRoot.querySelector('to-do-delete-button').addEventListener('click', (event) => {
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
    <to-do-delete-button>&times;</to-do-delete-button>
  </li>
`;

ToDoItem.cssString = ``;