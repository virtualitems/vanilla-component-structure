import { PostsSubject } from '../subjects/posts.mjs';

const rootElement = document.getElementById('new-post-form');

rootElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(rootElement);
  const plainData = Object.fromEntries(formData);

  const payload = { detail: plainData };
  const type = PostsSubject.events.CREATE_POST;
  const customEvent = new CustomEvent(type, payload);
  PostsSubject.dispatchEvent(customEvent);

  rootElement.reset();
});

export default rootElement;
