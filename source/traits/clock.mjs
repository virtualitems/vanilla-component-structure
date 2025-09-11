((window, nodes, templates) => {
  'use strict';

  nodes.forEach(node => {
    let date = new Date();

    node.textContent = date.toLocaleTimeString();

    setInterval(() => {
      date = new Date();
      node.textContent = date.toLocaleTimeString();
    }, 1000);

  });

})(
  window,
  document.querySelectorAll('[trait-clock]'),
  document.querySelectorAll('[trait-clock-template]'),
);
