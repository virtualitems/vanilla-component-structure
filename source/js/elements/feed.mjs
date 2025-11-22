import { PostsSubject } from '../subjects/posts.mjs';

const rootElement = document.getElementById('feed');

PostsSubject.addEventListener(PostsSubject.events.CREATE_POST, function (event) {
  const formData = event.detail;
  const date = new Date();

  const el = document.createElement('app-post');
  el.setAttribute('data-id', date.getTime().toString());
  el.setAttribute('data-author', formData.get('author'));
  el.setAttribute('data-date', date.toISOString().split('T')[0]);
  el.setAttribute('data-likes', '0');
  el.innerText = formData.get('text-content-input');

  rootElement.appendChild(el);
});

export default rootElement;
