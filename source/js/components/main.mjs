import { ActionButton } from './ActionButton.mjs';
import { NoteItem } from './NoteItem.mjs';
import { NotesApp } from './NotesApp.mjs';
import { NotesCreator } from './NotesCreator.mjs';
import { NotesList } from './NotesList.mjs';

customElements.define(ActionButton.tagName, ActionButton);
customElements.define(NoteItem.tagName, NoteItem);
customElements.define(NotesApp.tagName, NotesApp);
customElements.define(NotesCreator.tagName, NotesCreator);
customElements.define(NotesList.tagName, NotesList);
