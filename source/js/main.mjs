import { defineCustomElement } from '../components/custom-elements.mjs';

import webComponent from '../components/web-component/index.mjs';
import ToDoAddButton from '../components/to-do-add-button/index.mjs';
import ToDoAddForm from '../components/to-do-add-form/index.mjs';
import ToDoDeleteButton from '../components/to-do-delete-button/index.mjs';
import ToDoItem from '../components/to-do-item/index.mjs';
import ToDoList from '../components/to-do-list/index.mjs';
import ToDoApp from '../components/to-do-app/index.mjs';

defineCustomElement('web-component', webComponent, {
  html: './components/web-component/index.html',
  css: './components/web-component/index.css',
  lang: {
    es: './components/web-component/lang/es.json',
    en: './components/web-component/lang/en.json'
  }
});

defineCustomElement('to-do-add-button', ToDoAddButton, {
  html: './components/to-do-add-button/index.html',
  css: './components/to-do-add-button/index.css',
});

defineCustomElement('to-do-add-form', ToDoAddForm, {
  html: './components/to-do-add-form/index.html',
  css: './components/to-do-add-form/index.css',
});

defineCustomElement('to-do-delete-button', ToDoDeleteButton, {
  html: './components/to-do-delete-button/index.html',
  css: './components/to-do-delete-button/index.css',
});

defineCustomElement('to-do-item', ToDoItem, {
  html: './components/to-do-item/index.html',
  css: './components/to-do-item/index.css',
});

defineCustomElement('to-do-list', ToDoList, {
  html: './components/to-do-list/index.html',
  css: './components/to-do-list/index.css',
});


defineCustomElement('to-do-app', ToDoApp, {
  html: './components/to-do-app/index.html',
  css: './components/to-do-app/index.css',
});
