class NotesEventTarget extends EventTarget {
  constructor(subject) {
    super();
    this.subject = subject;
  }

  create(detail) {
    this.dispatchEvent(detail, 'create');
  }

  delete(detail) {
    this.dispatchEvent(detail, 'delete');
  }

  dispatchEvent(detail, eventName) {
    const payload = {
      detail,
      bubbles: true,
      composed: true
    };

    const eventType = `${this.subject}.${eventName}`;

    const event = new CustomEvent(eventType, payload);

    return super.dispatchEvent(event);
  }
}

export const notesEventTarget = new NotesEventTarget('notes');
