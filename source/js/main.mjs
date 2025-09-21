import { ToDoCreator } from '../components/ToDoCreator.mjs';
import { ToDoApp } from '../components/ToDoApp.mjs';
import { ToDoButton } from '../components/ToDoButton.mjs';
import { ToDoItem } from '../components/ToDoItem.mjs';
import { ToDoList } from '../components/ToDoList.mjs';

customElements.define(ToDoApp.tagName, ToDoApp);
customElements.define(ToDoButton.tagName, ToDoButton);
customElements.define(ToDoCreator.tagName, ToDoCreator);
customElements.define(ToDoItem.tagName, ToDoItem);
customElements.define(ToDoList.tagName, ToDoList);
