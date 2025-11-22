import { SingletonSubject } from '../shared/subjects.mjs';

/**
 * @description Observable subject for posts
 */
export class PostsSubject extends SingletonSubject
{
  // attributes

  // static attributes

  static events = Object.freeze({
    CREATE_POST: 'create-post',
  });

  // Constructor

  // getters/setters

  // static getters/setters

  // methods

  // static methods

} //:: class

export const postsSubject = new PostsSubject();
