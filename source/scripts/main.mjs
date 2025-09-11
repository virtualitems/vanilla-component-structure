import { trait } from './trait.mjs';

trait((root, templates) => {
  'use strict';

  console.debug('trait-clock', root, templates);

  let date = new Date();

  root.textContent = date.toLocaleTimeString();

  setInterval(() => {
    date = new Date();
    root.textContent = date.toLocaleTimeString();
  }, 1000);

}, 'trait-clock', 'trait-clock-template');
