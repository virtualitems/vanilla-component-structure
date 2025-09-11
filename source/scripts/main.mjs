import { trait } from './trait.mjs';

trait((node, templates) => {
  'use strict';

  console.debug('trait-clock', node, templates);
  let date = new Date();

  node.textContent = date.toLocaleTimeString();

  setInterval(() => {
    date = new Date();
    node.textContent = date.toLocaleTimeString();
  }, 1000);

}, 'trait-clock', 'trait-clock-template');
