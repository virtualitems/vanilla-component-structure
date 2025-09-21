import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoApp extends BaseCustomElement {

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

ToDoApp.htmlString = `
  <div>
    <h1>To-Do App</h1>
    <to-do-add-form></to-do-add-form>
    <to-do-list></to-do-list>
  </div>
`;

ToDoApp.cssString = `
  :host h1 {
    margin: 0;
    padding: 0;
  }
`;
