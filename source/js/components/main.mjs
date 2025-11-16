import { NoteItem } from './NoteItem.mjs';
import { NotesApp } from './NotesApp.mjs';
import { NotesCreatorForm } from './NotesCreatorForm.mjs';
import { NotesList } from './NotesList.mjs';

customElements.define(NoteItem.tagName, NoteItem);
customElements.define(NotesApp.tagName, NotesApp);
customElements.define(NotesCreatorForm.tagName, NotesCreatorForm);
customElements.define(NotesList.tagName, NotesList);
