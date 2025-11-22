import { postsSubject } from '../subjects/posts.mjs';

const rootElement = document.getElementById('new-post-form');

rootElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(rootElement);
  const plainData = Object.fromEntries(formData);

  postsSubject.createPost(plainData);

  rootElement.reset();
});

export default rootElement;
