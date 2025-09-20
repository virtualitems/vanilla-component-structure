import { BaseCustomElement } from '../custom-elements.mjs';

export class WebComponent extends BaseCustomElement {

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
    this.addEventListener('click', this.handleClick);
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
    this.removeEventListener('click', this.handleClick);
  }

  /**
   * @param {MouseEvent} event
   */
  handleClick(event) {
    console.log('ƒ handleClick');
    this.classList.toggle('active');
  }
}
