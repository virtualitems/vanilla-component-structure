/**
 * @type {WeakMap<Function, Subject>}
 */
const singletons = new WeakMap();


/**
 * @description A base class that extends EventTarget for creating event subjects.
 */
export class Subject extends EventTarget {

  // attributes

  // static attributes

  // Constructor

  // getters/setters

  // static getters/setters

  // methods

  // static methods

} //:: class


/**
 * @description A base class that extends EventTarget for creating event subjects.
 */
export class SingletonSubject extends EventTarget {

  // attributes

  // static attributes

  // Constructor

  // getters/setters

  // static getters/setters

  static getInstance() {
    if (singletons.has(this) === false) {
      singletons.set(this, new this());
    }
    return singletons.get(this);
  }

  // methods

  // static methods

  static dispatchEvent(event) {
    return this.getInstance().dispatchEvent(event);
  }

  static addEventListener(type, listener, options) {
    return this.getInstance().addEventListener(type, listener, options);
  }

  static removeEventListener(type, listener, options) {
    return this.getInstance().removeEventListener(type, listener, options);
  }

} //:: class