import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoCreator extends BaseCustomElement {

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
    this.shadowRoot.querySelector('todo-button').addEventListener('click', (event) => {
      this.shadowRoot.querySelector('form').submit();
    });

    this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      const input = this.shadowRoot.querySelector('input');
      alert(`New to-do: ${input.value}`);
      input.value = '';
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

ToDoCreator.htmlString = `
  <form method="post" action="#">
    <input type="text" name="new-task" placeholder="New task" />
    <todo-button>Add</todo-button>
  </form>
`;

ToDoCreator.cssString = ``;
