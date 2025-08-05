(window => {
  'use strict';

  /**
   * Appends the current date to the text content of the specified element.
   * @param {HTMLElement} node - The element to append the date to.
   * @param {Date} date - The date to display.
   */
  function appendDate(text, date) {
    return `${text} ${date.toLocaleTimeString()}`;
  }

  /**
   * Initializes the clock component by setting the current time and updating it every second.
   * @param {Window} window - The global window object.
   * @param {HTMLElement} root - The root element of the clock component.
   */
  function clock(baseNode) {
    const title = baseNode.querySelector('.clock__text');
    const text = title.textContent;

    title.textContent = appendDate(text, new Date());
    setInterval(() => { title.textContent = appendDate(text, new Date()); }, 1000);
  }

  document.querySelectorAll('.clock[data-component]').forEach(root => clock(root));
})(window);