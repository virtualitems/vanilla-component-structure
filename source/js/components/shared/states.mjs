import { BehaviorSubject } from 'https://esm.sh/rxjs@7.8.2';

export class NotesEventTarget extends EventTarget {

  static actions = Object.freeze({
    CREATE: 'notes.create',
    DELETE: 'notes.delete'
  });

  constructor() {
    super();
    this.state = new BehaviorSubject(new Map());

    this.addEventListener(NotesEventTarget.actions.CREATE, (event) => {
      const { id, text, createdAt } = event.detail;
      this.state.getValue().set(id, { id, text, createdAt });
      this.state.next(this.state.getValue());
    });

    this.addEventListener(NotesEventTarget.actions.DELETE, (event) => {
      const { id } = event.detail;
      this.state.getValue().delete(id);
      this.state.next(this.state.getValue());
    });
  }

  create(detail) {
    this.dispatchCustomEvent(detail, NotesEventTarget.actions.CREATE);
  }

  delete(detail) {
    this.dispatchCustomEvent(detail, NotesEventTarget.actions.DELETE);
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
