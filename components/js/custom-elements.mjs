export class BaseCustomElement extends HTMLElement {

  /**
   * @type {string|null}
   */
  static htmlString = null;

  /**
   * @type {string|null}
   */
  static cssString = null;

  /**
   * @constructor
   */
  constructor() {
    super();

    if (new.target === BaseCustomElement) {
      throw new TypeError('BaseCustomElement is an abstract class and cannot be instantiated directly.');
    }

    // shadow
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.constructor.htmlString;

    // styles
    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(this.constructor.cssString);
    this.shadowRoot.adoptedStyleSheets.push(stylesheet);
  }

}

/**
 * @param {string} tagName
 * @param {CustomElementConstructor} constructor
 * @param {object|null|undefined} sources
 * @param {string|undefined} sources.html
 * @param {string|undefined} sources.css
 * @param {ElementDefinitionOptions|undefined} options
 */
export async function defineCustomElement(tagName, constructor, sources, options) {

  const proms = [];

  if (sources?.html !== null) {
    proms.push(fetch(sources.html).then(res => {
      if (res.ok === false) throw new Error(res.statusText);
      return res.text();
    })
    .then(content => {
      constructor.htmlString = content;
    }));
  }

  if (sources?.css !== null) {
    proms.push(fetch(sources.css).then(res => {
      if (res.ok === false) throw new Error(res.statusText);
      return res.text();
    })
    .then(content => {
      constructor.cssString = content;
    }));
  }

  await Promise.all(proms);

  customElements.define(tagName, constructor, options);
}

