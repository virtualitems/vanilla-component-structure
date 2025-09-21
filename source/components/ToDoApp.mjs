import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoApp extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'todo-app';

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
  <section>
    <h1>To-Do App</h1>
    <todo-creator data-form-method="post" data-form-action="#"></todo-creator>
    <todo-list></todo-list>
  </section>
`;

ToDoApp.cssString = `
  :host h1 {
    margin: 0;
    padding: 0;
  }
`;
