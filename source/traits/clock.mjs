(
  /**
   * @param {Window} window Browser window object
   * @param {NodeList} nodeList Nodes with the trait-clock attribute
   * @param {NodeList} templateNodeList Nodes with the trait-clock-template attribute
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
    /**
     *
     * @param {Window} window
     * @param {Node} node
     * @param {Record<string, HTMLTemplateElement>} templates
     */
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
