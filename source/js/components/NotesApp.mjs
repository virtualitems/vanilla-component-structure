import { BaseCustomElement } from './shared/elements.mjs';
import { NotesList } from './NotesList.mjs';

export class NotesApp extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'notes-app';

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