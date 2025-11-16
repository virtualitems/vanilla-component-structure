import { BaseCustomElement } from './shared/elements.mjs';
import { notes } from './shared/storages.mjs';

import { NoteItem } from './NoteItem.mjs';

class NotesListObserver {
  constructor(host) {
    this.host = host;
    // Mantener registro de los IDs renderizados
    this.renderedIds = new Set();
  }

  next(values) {
    if (!(values instanceof Map)) {
      return;
    }

    const ul = this.host.shadowRoot.querySelector('ul');
    const newIds = new Set(values.keys());

    // Eliminar elementos que ya no existen
    this.renderedIds.forEach(id => {
      if (newIds.has(id)) {
        return;
      }

      const existingElement = ul.querySelector(`[data-note-id="${id}"]`);

      if (existingElement) {
        existingElement.remove();
      }

      this.renderedIds.delete(id);
    });

    // Añadir solo los elementos nuevos
    Array.from(values.values()).forEach(note => {
      if (this.renderedIds.has(note.id)) {
        return;
      }

      const li = document.createElement(NoteItem.tagName);
      li.setAttribute('data-note-id', note.id);
      li.textContent = note.text;
      ul.appendChild(li);
      this.renderedIds.add(note.id);
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