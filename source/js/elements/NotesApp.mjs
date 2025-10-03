import { BaseCustomElement } from '../elements.mjs';
import { EventHandler } from '../events.mjs';
import { NotesList } from './NotesList.mjs';

class CreateNoteHandler extends EventHandler {
  handleEvent(event) {
    const detail = event?.detail;
    const text = detail?.text;

    if (typeof text !== 'string' || text.trim() === '') return;

    const listElement = this.host.shadowRoot.querySelector('notes-list');

    if (listElement instanceof NotesList === false) return;

    listElement.addNote(text);
  }
}

export class NotesApp extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-app';

  constructor() {
    super();
    this.createNoteHandler = new CreateNoteHandler(this);
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
    this.addEventListener('note.create', this.createNoteHandler);
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
    this.removeEventListener('note.create', this.createNoteHandler);
  }

}

NotesApp.htmlString = `
  <section>
    <div>
      <h1>Notes App</h1>
      <notes-creator data-form-method="post" data-form-action="#"></notes-creator>
    </div>
    <notes-list></notes-list>
  </section>
`;

NotesApp.cssString = `
  :host h1 {
    margin: 0;
    padding: 0;
  }
  :host section {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
`;