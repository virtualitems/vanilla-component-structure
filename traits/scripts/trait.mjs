/**
 * @param {(node: Element, templates: Record<string, HTMLTemplateElement>) => void} callback - The callback function to execute for each element with the specified trait.
 * @param {string} traitAttribute - The name of the attribute to search for in the DOM.
 * @param {string} traitTemplate - The name of the trait template to search for in the DOM.
 */
export function trait(callback, traitAttribute, traitTemplate) {
  const nodeList = document.querySelectorAll(`[${traitAttribute}]`);
  const templateNodeList = document.querySelectorAll(`[${traitTemplate}]`);

  const templates = {};

  for (const tem of templateNodeList)
    if (tem.hasAttribute('id'))
      templates[tem.getAttribute('id')] = tem;

  Object.freeze(templates);

  for (const node of nodeList) callback(node, templates);
}
