/**
 * @description Base class for event handlers.
 * @template {import('./elements.mjs').BaseCustomElement | null} E
 * @extends {EventListenerObject}
 */
export class EventHandler {

  // attributes

  // static attributes

  // Constructor

  /**
   * @param {E} target
   */
  constructor(target) {

    if (new.target === EventHandler) {
      throw new TypeError('Cannot construct EventHandler instances directly');
    }

    /** @type {E} */
    this.target = target;
  }

  // getters/setters

  // static getters/setters

  // methods

  /**
   * @param {Event} event
   * @abstract
   */
  handleEvent(event) {
    throw new Error('Not implemented');
  }

  // static methods

} //:: class
