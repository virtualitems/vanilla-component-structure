import { Post } from './components/post.mjs';
import { Comment } from './components/comment.mjs';

customElements.define(Post.tagName, Post);
customElements.define(Comment.tagName, Comment);
