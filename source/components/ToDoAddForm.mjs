import { BaseCustomElement } from './BaseCustomElement.mjs';

export class ToDoAddForm extends BaseCustomElement {

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
    this.shadowRoot.querySelector('to-do-add-button').addEventListener('click', (event) => {
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

ToDoAddForm.htmlString = `
  <form type="button">
    <input type="text" name="new-task" placeholder="New task" />
    <to-do-add-button>Add</to-do-add-button>
  </form>
`;

ToDoAddForm.cssString = `
  :host button {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    border-radius: 15px;
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
