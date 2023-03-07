import {Base} from "../base";
import {NewPost, Post} from "./types";

/**
 * - The types.ts file contains the TypeScript interfaces for resources likePost, NewPost.
 * - These objects will be used throughout the SDK. These interfaces provide a blueprint
 *   for what kind of data each object should contain.
 */

const resourceName = 'posts';

export class Posts extends Base {
  getPostById(id: number): Promise<Post> {
    return this.request(`/${resourceName}/${id}`);
  }

  getPosts(): Promise<Post[]> {
    return this.request(`/${resourceName}`);
  }

  createPost(newPost: NewPost): Promise<Post> {
    return this.request(`/${resourceName}`, {
      method: 'POST',
      body: JSON.stringify(newPost),
    });
  }
}