export class State extends EventTarget {

  /**
   * @type {Object|null}
   */
  #data;

  /**
   * @param {Object|null} initial
   */
  constructor(initial = null) {
    super();
    this.data = Object.freeze(Object.assign({}, initial));
  }

  get data() {
    return this.#data;
  }

  /**
   * @param {Object|null} value
   */
  set data(values) {
    if (values === undefined) throw new TypeError('values cannot be undefined');

    if (values === this.#data) return;

    if ((values !== null) && (values.constructor !== Object)) {
      throw new TypeError('values must be a plain Object or null');
    }

    this.#data = Object.freeze(Object.assign({}, values));
    this.#dispatch('statechange', this.#data);
  }

  /**
   * @param {string} eventName
   * @param {Object} detail
   */
  #dispatch(eventName, detail = {}) {
    const payload = { detail };
    this.dispatchEvent(new CustomEvent(eventName, payload));
  }

}