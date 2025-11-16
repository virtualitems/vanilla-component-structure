export class CustomEventTarget extends EventTarget {
  constructor(actions) {
    super();

    if (actions === undefined || actions === null || actions.constructor !== Object) {
      throw new TypeError('actions must be an object.');
    }

    this.actions = Object.freeze(actions);
  }

  /**
   * Dispatches a custom event.
   *
   * @param {unknown} detail
   * @param {string} eventName
   * @returns {boolean}
   */
  dispatchCustomEvent(detail, eventName) {
    const payload = {
      detail,
      bubbles: true,
      composed: true,
    };

    const event = new CustomEvent(eventName, payload);

    return this.dispatchEvent(event);
  }
}

export const notesEventTarget = new CustomEventTarget({
  CREATE: 'notes.create',
  DELETE: 'notes.delete',
});
