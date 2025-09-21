import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoList extends BaseCustomElement {

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

ToDoList.htmlString = `
  <ul>
    <to-do-item>Item 1</to-do-item>
    <to-do-item>Item 2</to-do-item>
    <to-do-item>Item 3</to-do-item>
  </ul>
`;

ToDoList.cssString = ``;
