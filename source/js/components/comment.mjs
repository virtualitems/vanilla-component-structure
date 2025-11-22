import { BaseCustomElement } from 'shared/elements.mjs';

/**
 * @description Represents a comment on a post
 */
export class Comment extends BaseCustomElement {

  // attributes

  // static attributes

  // Constructor

  // getters/setters

  // static getters/setters

  // methods

  connectedCallback() {
    this.replaceTextContent('author', this.getAttribute('data-author'));
    this.replaceTextContent('date', this.getAttribute('data-date'));
  }

  // static methods

} //:: class

Comment.html = `
  <div id="author"></div>
  <div id="date"></div>
  <div id="content">
    <slot></slot>
  </div>
`;

Comment.css = `
  :host {
    background-color: #f9f9f9;
    border-radius: 4px;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    display: block;
  }

  #author {
    color: var(--primary-color);
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  #date {
    color: #999;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  ::slotted(*) {
    color: #555;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

Comment.tagName = 'app-comment';
