(
  /**
   * @param {Window} window Browser window object
   * @param {NodeList} nodeList Nodes with the trait-clock attribute
   * @param {NodeList} templateNodeList Nodes with the trait-clock-template attribute
   */
  (window, nodeList, templateNodeList) => {
    'use strict';

    const templates = Object.freeze(
      Array.from(templateNodeList)
        .filter(template => template.hasAttribute('id'))
        .reduce((acc, tem) => (acc[tem.getAttribute('id')] = tem) && acc, {})
    );

    nodeList.forEach((node) => {
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
