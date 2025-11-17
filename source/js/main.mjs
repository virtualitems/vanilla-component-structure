import { NoteItem } from './components/NoteItem.mjs';
import { NotesApp } from './components/NotesApp.mjs';
import { NotesCreatorForm } from './components/NotesCreatorForm.mjs';
import { NotesList } from './components/NotesList.mjs';

customElements.define(NoteItem.tagName, NoteItem);
customElements.define(NotesApp.tagName, NotesApp);
customElements.define(NotesCreatorForm.tagName, NotesCreatorForm);
customElements.define(NotesList.tagName, NotesList);
