export class NotesEventTarget extends EventTarget {

  static actions = Object.freeze({
    CREATE: 'notes.create',
    DELETE: 'notes.delete'
  });

  create(detail) {
    this.dispatchCustomEvent(detail, NotesEventTarget.actions.CREATE);
  }

  onCreate(listener) {
    this.addEventListener(NotesEventTarget.actions.CREATE, listener);
  }

  removeOnCreate(listener) {
    this.removeEventListener(NotesEventTarget.actions.CREATE, listener);
  }

  delete(detail) {
    this.dispatchCustomEvent(detail, NotesEventTarget.actions.DELETE);
  }

  onDelete(listener) {
    this.addEventListener(NotesEventTarget.actions.DELETE, listener);
  }

  removeOnDelete(listener) {
    this.removeEventListener(NotesEventTarget.actions.DELETE, listener);
  }

  dispatchCustomEvent(detail, eventName) {
    const payload = {
      detail,
      bubbles: true,
      composed: true
    };

    const event = new CustomEvent(eventName, payload);

    return this.dispatchEvent(event);
  }
}

export const notesEventTarget = new NotesEventTarget();
