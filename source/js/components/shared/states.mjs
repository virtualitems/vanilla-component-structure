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
  dispatchCustomEvent(eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    return this.dispatchEvent(event);
  }
}

export const notesEventTarget = new CustomEventTarget({
  CREATE: 'notes.create',
  DELETE: 'notes.delete',
});
