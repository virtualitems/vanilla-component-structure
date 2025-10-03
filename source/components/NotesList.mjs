import { BaseCustomElement } from './BaseCustomElement.mjs';

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

}

NotesList.htmlString = `
  <ul>
    <note-item>Note 1</note-item>
    <note-item>Note 2</note-item>
    <note-item>Note 3</note-item>
  </ul>
`;

NotesList.cssString = ``;