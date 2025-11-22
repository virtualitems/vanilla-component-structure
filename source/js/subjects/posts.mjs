import { Subject } from '../shared/subjects.mjs';

class CreatePostEvent extends CustomEvent {

  static type = 'create-post';

  /**
   * @template T
   * @param {CustomEventInit<T>} eventInitDict
   */
  constructor(eventInitDict) {
    super(CreatePostEvent.type, eventInitDict);
  }
}

/**
 * @description Observable subject for posts
 */
export class PostsSubject extends Subject
{
  // attributes

  // static attributes

  // Constructor

  // getters/setters

  // static getters/setters

  // methods

  createPost(detail) {
    const event = new CreatePostEvent({ detail });
    this.dispatchEvent(event);
  }

  addCreatePostListener(listener) {
    this.addEventListener(CreatePostEvent.type, listener);
  }

  removeCreatePostListener(listener) {
    this.removeEventListener(CreatePostEvent.type, listener);
  }

  // static methods

} //:: class

export const postsSubject = new PostsSubject();
