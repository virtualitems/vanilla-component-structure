import { BaseCustomElement } from './shared/elements.mjs';
import { EventHandler } from './shared/events.mjs';
import { notesEventTarget } from './shared/states.mjs';
import { on } from './shared/on.mjs';

class DeleteButtonClickHandler extends EventHandler {

  /**
   * @param {MouseEvent} event
   */
  handleEvent() {
    const item = this.host;
    const id = item.getAttribute('data-note-id');

    notesEventTarget.dispatchCustomEvent({ id }, notesEventTarget.actions.DELETE);
  }
}

export class NoteItem extends BaseCustomElement {

  /**
   * @type {string}
   */
  static tagName = 'note-item';

  constructor() {
    super();
    this.deleteButtonClickHandler = new DeleteButtonClickHandler(this);
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
    this.shadowRoot.querySelector('button').addEventListener(on.click, this.deleteButtonClickHandler);
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
    this.shadowRoot.querySelector('button').removeEventListener(on.click, this.deleteButtonClickHandler);
  }

}

NoteItem.htmlString = `
  <li>
    <button>&times;</button>
    <slot></slot>
  </li>
`;

NoteItem.cssString = `
  :host button {
    background-color: #f44336;
    color: white;
    padding: 2px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    border-radius: 5px;
    border: 1px solid #f44336;
    user-select: none;
  }

  :host button:hover,
  :host button:active {
    background-color: white;
    color: black;
    border: 1px solid #f44336;
  }
`;