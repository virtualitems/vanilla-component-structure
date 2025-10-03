import { BaseCustomElement } from '../elements.mjs';
import { EventHandler } from '../events.mjs';

class DeleteNoteHandler extends EventHandler {
  handleEvent(event) {
    event.stopPropagation();
    this.host.remove();
  }
}

export class NotesList extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-list';

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

  addNote(text) {
    const listElement = this.shadowRoot.querySelector('ul');

    if (listElement instanceof Node === false) return;

    const item = document.createElement('note-item');
    item.textContent = text;

    const button = item.shadowRoot.querySelector('action-button');
    button?.addEventListener('click', new DeleteNoteHandler(item));

    listElement.appendChild(item);
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