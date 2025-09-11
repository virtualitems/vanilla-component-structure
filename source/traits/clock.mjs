(
  /**
   * @param {Window} window Browser window object
   * @param {NodeList} nodeList Nodes with the trait-clock attribute
   * @param {NodeList} templateNodeList Nodes with the trait-clock-template attribute
   * @param {(window: Window, node: Node, templates: Record<string, HTMLTemplateElement>) => void} callback Callback function to apply the trait behavior
   */
  (window, nodeList, templateNodeList, callback) => {
    const templates = {};

    for (const tem of templateNodeList)
      if (tem.hasAttribute('id'))
        templates[tem.getAttribute('id')] = tem;

    Object.freeze(templates);

    for (const node of nodeList) callback(window, node, templates);
  })(
    window,
    document.querySelectorAll('[trait-clock]'),
    document.querySelectorAll('[trait-clock-template]'),
    (window, node, templates) => {
      'use strict';
      console.debug('trait-clock', window, node, templates);
      let date = new Date();

      node.textContent = date.toLocaleTimeString();

      setInterval(() => {
        date = new Date();
        node.textContent = date.toLocaleTimeString();
      }, 1000);
    }
  );
