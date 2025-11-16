import { BaseCustomElement } from './shared/elements.mjs';
import { NotesEventTarget } from './shared/states.mjs';
import { EventHandler } from './shared/events.mjs';

import { NoteItem } from './NoteItem.mjs';

class NotesCreateHandler extends EventHandler {
  constructor(host) {
    super(host);
  }

  /**
   * @param {CustomEvent} event
   */
  handleEvent(event) {
    const note = event.detail;
    const ul = this.host.shadowRoot.querySelector('ul');

    const li = document.createElement(NoteItem.tagName);
    li.setAttribute('data-note-id', note.id);
    li.textContent = note.text;
    ul.appendChild(li);
  }
}

class NotesDeleteHandler extends EventHandler {
  constructor(host) {
    super(host);
  }

  /**
   * @param {CustomEvent} event
   */
  handleEvent(event) {
    const { id } = event.detail;
    const ul = this.host.shadowRoot.querySelector('ul');
    const existingElement = ul.querySelector(`[data-note-id="${id}"]`);

    if (existingElement) {
      existingElement.remove();
    }
  }
}

export class NotesList extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-list';

  constructor() {
    super();
    this.notesCreateHandler = new NotesCreateHandler(this);
    this.notesDeleteHandler = new NotesDeleteHandler(this);
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
    NotesEventTarget.onCreate(this.notesCreateHandler);
    NotesEventTarget.onDelete(this.notesDeleteHandler);
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
    NotesEventTarget.removeOnCreate(this.notesCreateHandler);
    NotesEventTarget.removeOnDelete(this.notesDeleteHandler);
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