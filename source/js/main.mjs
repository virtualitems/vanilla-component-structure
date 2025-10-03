import { ActionButton } from '../components/ActionButton.mjs';
import { NoteItem } from '../components/NoteItem.mjs';
import { NotesApp } from '../components/NotesApp.mjs';
import { NotesCreator } from '../components/NotesCreator.mjs';
import { NotesList } from '../components/NotesList.mjs';

customElements.define(ActionButton.tagName, ActionButton);
customElements.define(NoteItem.tagName, NoteItem);
customElements.define(NotesApp.tagName, NotesApp);
customElements.define(NotesCreator.tagName, NotesCreator);
customElements.define(NotesList.tagName, NotesList);
