import { BaseCustomElement } from './shared/elements.mjs';
import { EventHandler } from './shared/events.mjs';
import { notesEventTarget } from './shared/states.mjs';
import { on } from './shared/on.mjs';

class FormSubmitHandler extends EventHandler {

  constructor(host) {
    super(host);
    this.currentID = 0;
  }

  nextID() {
    this.currentID += 1;
    return this.currentID.toString();
  }

  /**
   * @param {SubmitEvent} event
   */
  handleEvent(event) {
    event.preventDefault();
    const form = this.host.shadowRoot.querySelector('form');
    const formData = new FormData(form);

    const text = formData.get('text')?.toString()?.trim();

    if (!text) {
      return;
    }

    const data = {
      id: this.nextID(),
      text,
      createdAt: new Date().toISOString()
    };

    notesEventTarget.create(data);

    form.reset();
  }
}

export class NotesCreatorForm extends BaseCustomElement {

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

  constructor() {
    super();
    this.formSubmitHandler = new FormSubmitHandler(this);
  }

  /**
   * @function
   */
  connectedCallback() {
    console.log('ƒ connectedCallback');
    this.shadowRoot.querySelector('form').addEventListener(on.submit, this.formSubmitHandler);
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
    this.shadowRoot.querySelector('form').removeEventListener(on.submit, this.formSubmitHandler);
  }

}

NotesCreatorForm.htmlString = `
  <form>
    <input type="text" name="text" placeholder="New note" />
    <button type="submit">Add</button>
  </form>
`;

NotesCreatorForm.cssString = `
  :host button {
    background-color: #008CBA;
    color: white;
    padding: 2px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    border-radius: 5px;
    border: 1px solid #91999bff;
  }

  :host button:hover,
  :host button:active {
    background-color: white;
    color: black;
    border: 1px solid #008CBA;
  }
`;