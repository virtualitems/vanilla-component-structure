import { BaseCustomElement } from '../elements.mjs';
import { EventHandler } from '../events.mjs';

class CreateNoteHandler extends EventHandler {
  handleEvent(event) {
    const detail = event?.detail;
    const text = detail?.text;

    if (typeof text !== 'string' || text.trim() === '') return;

    const listElement = this.host.shadowRoot.querySelector('ul');

    if (listElement instanceof Node === false) return;

    const newListItem = document.createElement('note-item');
    newListItem.textContent = text;
    listElement.appendChild(newListItem);
  }
}

export class NotesList extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-list';

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
    const creator = this.getRootNode().querySelector('notes-creator');
    creator.addEventListener('note.create', this.createNoteHandler);
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

NotesList.htmlString = `<ul></ul>`;

NotesList.cssString = `
  :host ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;