import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoCreator extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'todo-creator';

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

ToDoCreator.htmlString = `
  <form>
    <input type="text" name="new-task" placeholder="New task" />
    <todo-button>Add</todo-button>
  </form>
`;

ToDoCreator.cssString = ``;
