import { BaseCustomElement } from '../elements.mjs';

export class NoteItem extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'note-item';

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

NoteItem.htmlString = `
  <li>
    <slot></slot>
    <action-button class="danger">&times;</action-button>
  </li>
`;

NoteItem.cssString = ``;