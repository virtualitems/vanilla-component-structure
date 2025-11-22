/**
 * @template {import('./elements.mjs').BaseCustomElement | null} E
 * @extends {EventListenerObject}
 */
export class EventHandler {

  /**
   * @type {E}
   */
  target;

  /**
   * @param {E} target
   */
  constructor(target) {

    if (new.target === EventHandler) {
      throw new TypeError('Cannot construct EventHandler instances directly');
    }

    this.target = target;
  }

  /**
   * @param {Event} event
   * @abstract
   */
  handleEvent(event) {
    throw new Error('Not implemented');
  }
}
