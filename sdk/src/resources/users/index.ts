import {Base} from "../base";
import {User} from "./types";

/**
 * - The types.ts file contains the TypeScript interfaces for resources likePost, NewPost.
 * - These objects will be used throughout the SDK. These interfaces provide a blueprint
 *   for what kind of data each object should contain.
 */

const resourceName = 'users';

export class Users extends Base {
  getUserById(id: number): Promise<User> {
    return this.request(`/${resourceName}/${id}`);
  }

  getUsers(): Promise<User[]> {
    return this.request(`/${resourceName}`);
  }
}