import { postsSubject } from '../subjects/posts.mjs';

const rootElement = document.getElementById('feed');

    // <app-post
    //   data-id="1"
    //   data-content="Nisi nostrud sint ipsum nisi laboris labore dolor anim sit. Et elit eiusmod tempor sunt tempor aute incididunt aute magna aute proident ea. Adipisicing id irure sint dolor nisi ex excepteur. Proident minim sint magna cupidatat duis culpa labore sunt dolor reprehenderit occaecat do ea. Consectetur voluptate excepteur nisi voluptate id ut. Sunt proident dolore magna fugiat dolor ea veniam amet fugiat aute duis."
    //   data-author="Alejandro Carrasco"
    //   data-date="2025-10-24"
    //   data-likes="0"
    // ></app-post>

postsSubject.addCreatePostListener(function (event) {
  const data = event.detail;
  const date = new Date();

  const el = document.createElement('app-post');
  el.setAttribute('data-id', date.getTime().toString());
  el.setAttribute('data-content', data['text-content-area']);
  el.setAttribute('data-author', data['author']);
  el.setAttribute('data-date', date.toISOString().split('T')[0]);
  el.setAttribute('data-likes', '0');

  rootElement.appendChild(el);
});

export default rootElement;
