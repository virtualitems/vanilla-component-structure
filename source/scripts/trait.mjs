'use strict';

/**
 * @param {(node: Element, templates: Record<string, HTMLTemplateElement>) => void} callback - The callback function to execute for each element with the specified trait.
 * @param {string} traitName - The name of the trait to search for in the DOM.
 */
export function trait(callback, traitName) {
  const nodeList = document.querySelectorAll(`[${traitName}]`);
  const templateNodeList = document.querySelectorAll(`[${traitName}-template]`);

  const templates = {};

  for (const tem of templateNodeList)
    if (tem.hasAttribute('id'))
      templates[tem.getAttribute('id')] = tem;

  Object.freeze(templates);

  for (const node of nodeList) callback(node, templates);
}
