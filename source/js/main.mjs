import { ActionButton } from './elements/ActionButton.mjs';
import { NoteItem } from './elements/NoteItem.mjs';
import { NotesApp } from './elements/NotesApp.mjs';
import { NotesCreator } from './elements/NotesCreator.mjs';
import { NotesList } from './elements/NotesList.mjs';

customElements.define(ActionButton.tagName, ActionButton);
customElements.define(NoteItem.tagName, NoteItem);
customElements.define(NotesApp.tagName, NotesApp);
customElements.define(NotesCreator.tagName, NotesCreator);
customElements.define(NotesList.tagName, NotesList);
