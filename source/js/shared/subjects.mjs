let instance;

/**
 * @description A base class that extends EventTarget for creating event subjects.
 */
export class Subject extends EventTarget {

  // attributes

  // static attributes

  // Constructor

  // getters/setters

  // static getters/setters

  static getInstance() {
    if (!(instance instanceof this)) {
      instance = new this();
    }
    return instance;
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
