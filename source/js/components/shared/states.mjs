export class NotesEventTarget extends EventTarget {

  static actions = Object.freeze({
    CREATE: 'notes.create',
    DELETE: 'notes.delete'
  });

  static create(detail) {
    this.dispatchCustomEvent(detail, NotesEventTarget.actions.CREATE);
  }

  static onCreate(listener) {
    this.addEventListener(NotesEventTarget.actions.CREATE, listener);
  }

  static removeOnCreate(listener) {
    this.removeEventListener(NotesEventTarget.actions.CREATE, listener);
  }

  static delete(detail) {
    this.dispatchCustomEvent(detail, NotesEventTarget.actions.DELETE);
  }

  static onDelete(listener) {
    this.addEventListener(NotesEventTarget.actions.DELETE, listener);
  }

  static removeOnDelete(listener) {
    this.removeEventListener(NotesEventTarget.actions.DELETE, listener);
  }

  static dispatchCustomEvent(detail, eventName) {
    const payload = {
      detail,
      bubbles: true,
      composed: true
    };

    const event = new CustomEvent(eventName, payload);

    return this.dispatchEvent(event);
  }
}
