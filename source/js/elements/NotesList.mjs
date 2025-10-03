import { BaseCustomElement } from '../elements.mjs';
import { notesState } from '../states/notes.mjs';

class StateChangeHandler {

  /**
   * @param {import('../elements.mjs').BaseCustomElement} host
   */
  constructor(host) {
    this.host = host;
  }

  next(data) {
    const ul = this.host.shadowRoot.querySelector('ul');
    console.log('next', data);
  }

  error(err) {
    console.error(err);
  }

  complete() {
    console.log('complete');
  }
}

export class NotesList extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-list';

  constructor() {
    super();

    this.notesStateChangeHandler = new StateChangeHandler(this);
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
    notesState.subscribe(this.notesStateChangeHandler);
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
    notesState.unsubscribe(this.notesStateChangeHandler);
  }

}

NotesList.htmlString = `
  <ul>
    <note-item>Note 1</note-item>
    <note-item>Note 2</note-item>
    <note-item>Note 3</note-item>
  </ul>
`;

NotesList.cssString = ``;