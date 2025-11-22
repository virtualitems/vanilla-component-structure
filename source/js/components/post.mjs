
import { BaseCustomElement } from '../shared/elements.mjs';

/**
 * @description Represents a content post
 */
export class Post extends BaseCustomElement {

  // attributes

  // static attributes

  // Constructor

  // getters/setters

  // static getters/setters

  // methods

  connectedCallback() {
    this.replaceTextContent('text-content-view', this.getAttribute('data-content'));
    this.replaceTextContent('author', this.getAttribute('data-author'));
    this.replaceTextContent('date', this.getAttribute('data-date'));
    this.replaceTextContent('likes-count', this.getAttribute('data-likes') || '0');
  }

  // static methods

} //:: class

Post.html = `
  <div class="post-content">
    <p id="text-content-view"></p>
  </div>

  <div class="post-info">
    <div class="likes">
      <i class="like-icon">♥</i> <span id="likes-count"></span>
    </div>
    <div id="author"></div>
    <div id="date"></div>
  </div>

  <details>
    <summary class="commentss">
      <h2>Comments</h2>
    </summary>

    <form action="#" method="post" class="new-comment-form">
      <textarea
        name="content"
        placeholder="Write a comment..."
        required
        rows="3"
      ></textarea>
      <input
        name="author"
        type="text"
        placeholder="Your name"
        required
      />
      <button type="submit">Post Comment</button>
    </form>

    <app-comment
      data-author="Commenter 1"
      data-content="Great post!"
      data-date="2025-11-20"
    ></app-comment>

    <app-comment
      data-author="Commenter 2"
      data-content="Thanks for sharing!"
      data-date="2025-11-21"
    ></app-comment>
  </details>
`;

Post.css = `
  :host {
    background-color: white;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem !important;
  }

  #text-content-view {
    color: #333;
    line-height: 1.6;
  }

  #likes-count {
    color: #666;
    font-size: 0.9rem;
  }

  #author {
    color: #666;
    font-size: 0.9rem;
    font-weight: 500;
    margin-right: 1rem;
  }

  #date {
    color: #999;
    font-size: 0.85rem;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    padding-top: 0.75rem;
  }

  .post-info .likes {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    width: fit-content;
    flex: 1;
  }

  .post-info .like-icon {
    color: #999;
    font-style: normal;
    transition: color 0.2s;
  }

  .post-info .likes:hover .like-icon {
    color: var(--primary-color);
  }

  details {
    border-top: 1px solid #f0f0f0;
    padding-top: 1rem;
  }

  details summary {
    cursor: pointer;
    list-style: none;
    margin-bottom: 0.75rem;
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details summary h2 {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    display: inline-block;
  }

  details summary h2::before {
    content: "▶ ";
    display: inline-block;
    transition: transform 0.2s;
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }

  details[open] summary h2::before {
    transform: rotate(90deg);
  }

  .new-comment-form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.75rem;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 6px;
    margin-bottom: 1rem;
  }

  .new-comment-form textarea {
    grid-column: 1 / -1;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.75rem;
    font-family: inherit;
    font-size: 0.9rem;
    resize: vertical;
    min-height: 60px;
  }

  .new-comment-form textarea:focus {
    outline: none;
    border-color: var(--primary-color, #007bff);
  }

  .new-comment-form input[type="text"] {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    font-family: inherit;
    font-size: 0.9rem;
  }

  .new-comment-form input[type="text"]:focus {
    outline: none;
    border-color: var(--primary-color, #007bff);
  }

  .new-comment-form button {
    background-color: var(--primary-color, #007bff);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    white-space: nowrap;
  }

  .new-comment-form button:hover {
    background-color: var(--primary-color-dark, #0056b3);
  }

  .new-comment-form button:active {
    transform: translateY(1px);
  }
`;

Post.tagName = 'app-post';
