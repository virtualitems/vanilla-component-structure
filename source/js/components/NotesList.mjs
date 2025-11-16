import { BaseCustomElement } from './shared/elements.mjs';
import { notes } from './shared/storages.mjs';

import { NoteItem } from './NoteItem.mjs';

class NotesListObserver {
  constructor(host) {
    this.host = host;
  }

  next(values) {
    if (!(values instanceof Map)) {
      return;
    }

    const ul = this.host.shadowRoot.querySelector('ul');

    ul.innerHTML = '';

    if (values.size === 0) {
      return;
    }

    Array.from(values.values()).forEach(note => {
      const li = document.createElement(NoteItem.tagName);
      li.setAttribute('data-note-id', note.id);
      li.textContent = note.text;
      ul.appendChild(li);
    });
  }

  error(err) {
    console.error(err);
  }

  complete() {
    console.info('NotesListObserver: complete');
  }
}

export class NotesList extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-list';

  constructor() {
    super();
    this.notesListObserver = new NotesListObserver(this);
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
    notes.subscribe(this.notesListObserver);
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
    notes.unsubscribe(this.notesListObserver);
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