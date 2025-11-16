import { BaseCustomElement } from './elements.mjs';

/**
 * @template {import('./elements.mjs').BaseCustomElement} E
 * @implements {EventListenerObject}
 */
export class EventHandler {

  /**
   * @type {E}
   */
  host;

  /**
   * @param {E} host
   */
  constructor(host) {

    if (new.target === EventHandler) {
      throw new TypeError('Cannot construct EventHandler instances directly');
    }

    if ((host instanceof HTMLElement) === false) {
      throw new TypeError('host must be an instance of HTMLElement');
    }

    this.host = host;
  }

  /**
   * @param {Event} event
   * @abstract
   */
  handleEvent(event) {
    throw new Error('Not implemented');
  }
}
