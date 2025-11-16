export class NotesEventTarget extends EventTarget {

  static actions = Object.freeze({
    CREATE: 'notes.create',
    DELETE: 'notes.delete'
  });

  constructor() {
    super();
    this.state = new Map();

    this.addEventListener(NotesEventTarget.actions.CREATE, (event) => {
      const { id, text, createdAt } = event.detail;
      this.state.set(id, { id, text, createdAt });
    });

    this.addEventListener(NotesEventTarget.actions.DELETE, (event) => {
      const { id } = event.detail;
      this.state.delete(id);
    });
  }

  create(detail) {
    this.dispatchEvent(detail, NotesEventTarget.actions.CREATE);
  }

  delete(detail) {
    this.dispatchEvent(detail, NotesEventTarget.actions.DELETE);
  }

  dispatchEvent(detail, eventName) {
    const payload = {
      detail,
      bubbles: true,
      composed: true
    };

    const event = new CustomEvent(eventName, payload);

    return super.dispatchEvent(event);
  }
}

export const notesEventTarget = new NotesEventTarget();
window.notesEventTarget = notesEventTarget;