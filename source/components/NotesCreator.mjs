import { BaseCustomElement } from './BaseCustomElement.mjs';

export class NotesCreator extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-creator';

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
    const formMethod = this.getAttribute('data-form-method');
    const formAction = this.getAttribute('data-form-action');

    const formElement = this.shadowRoot.querySelector('form');

    if (formElement) {
      formElement.method = formMethod;
      formElement.action = formAction;
    }
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

NotesCreator.htmlString = `
  <form>
    <input type="text" name="new-task" placeholder="New note" />
    <action-button>Add</action-button>
  </form>
`;

NotesCreator.cssString = ``;