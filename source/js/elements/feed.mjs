import { postsSubject } from '../subjects/posts.mjs';

const rootElement = document.getElementById('feed');

postsSubject.addCreatePostListener(function (event) {
  const data = event.detail;
  const date = new Date();

  const el = document.createElement('app-post');
  el.setAttribute('data-id', date.getTime().toString());
  el.setAttribute('data-author', data['author']);
  el.setAttribute('data-date', date.toISOString().split('T')[0]);
  el.setAttribute('data-likes', '0');
  el.innerText = data['text-content-input'];

  rootElement.appendChild(el);
});

export default rootElement;
