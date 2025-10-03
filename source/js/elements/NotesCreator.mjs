import { BaseCustomElement } from '../elements.mjs';
import { EventHandler } from '../events.mjs';
import { notesState } from '../states/notes.mjs';

class ButtonClickHandler extends EventHandler {
  handleEvent(event) {
    this.host.shadowRoot.querySelector('form').requestSubmit();
  }
}

class SubmitFormHandler extends EventHandler {
  handleEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target;

    const currentState = notesState.value;

    notesState.next([
      ...currentState,
      { text: form.elements['text'].value }
    ]);

    form.reset();
  }
}

export class NotesCreator extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-creator';

    /**
   * @type {ButtonClickHandler}
   */
  #buttonClickHandler;

  /**
   * @type {SubmitFormHandler}
   */
  #submitFormHandler;

  constructor() {
    super();
    this.#buttonClickHandler = new ButtonClickHandler(this);
    this.#submitFormHandler = new SubmitFormHandler(this);
  }


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

    this.shadowRoot
      .querySelector('form')
      ?.addEventListener('submit', this.#submitFormHandler);

    this.shadowRoot
      .querySelector('action-button')
      ?.addEventListener('click', this.#buttonClickHandler);
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

    this.shadowRoot
      .querySelector('form')
      ?.removeEventListener('submit', this.#submitFormHandler);

    this.shadowRoot
      .querySelector('action-button')
      ?.removeEventListener('click', this.#buttonClickHandler);
  }

}

NotesCreator.htmlString = `
  <form>
    <input type="text" name="text" placeholder="New note" />
    <action-button>Add</action-button>
  </form>
`;

NotesCreator.cssString = ``;