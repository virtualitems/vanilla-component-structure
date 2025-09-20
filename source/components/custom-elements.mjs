class IdGenerator {
  constructor(start = 0) {
    this.current = start;
    this.map = new WeakMap();
  }
  getId(obj) {
    return this.map.get(obj);
  }
  setId(obj) {
    if (this.map.has(obj)) {
      return this.map.get(obj);
    }
    this.current += 1;
    this.map.set(obj, this.current);

    return this.current;
  }
}

const idGenerator = new IdGenerator();

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

    this.dataset.key = idGenerator.setId(this);

    const { htmlString, cssString } = this.constructor;

    // shadow
    this.attachShadow({ mode: 'open' });

    if (typeof htmlString === 'string' && htmlString.length > 0) {
      this.shadowRoot.innerHTML = htmlString;
    }

    // styles
    if (typeof cssString === 'string' && cssString.length > 0) {
      const stylesheet = new CSSStyleSheet();
      stylesheet.replace(cssString);
      this.shadowRoot.adoptedStyleSheets.push(stylesheet);
    }
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

  if (sources?.html !== undefined) {
    proms.push(
      fetch(sources.html)
        .then(r => r.ok ? r.text() : Promise.reject(r.statusText))
        .then(content => constructor.htmlString = content)
    );
  }

  if (sources?.css !== undefined) {
    proms.push(
      fetch(sources.css)
        .then(r => r.ok ? r.text() : Promise.reject(r.statusText))
        .then(content => constructor.cssString = content)
    );
  }

  await Promise.all(proms).catch(console.error);

  customElements.define(tagName, constructor, options);
}
