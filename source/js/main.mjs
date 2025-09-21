import { ToDoCreator } from '../components/ToDoCreator.mjs';
import { ToDoApp } from '../components/ToDoApp.mjs';
import { ToDoButton } from '../components/ToDoButton.mjs';
import { ToDoItem } from '../components/ToDoItem.mjs';
import { ToDoList } from '../components/ToDoList.mjs';

customElements.define('todo-creator', ToDoCreator);
customElements.define('todo-app', ToDoApp);
customElements.define('todo-button', ToDoButton);
customElements.define('todo-item', ToDoItem);
customElements.define('todo-list', ToDoList);
