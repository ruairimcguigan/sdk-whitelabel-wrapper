import {Posts} from "./resources/posts";
import {Users} from "./resources/users";

/**
 * This file is the entry point of the SDK. It exports a Library class that acts
 * as a central point of access to all the resources. The constructor of this class
 * takes a config object that contains the apiKey and baseUrl. The apiKey is used
 * for authentication and the baseUrl is used to specify the base URL for the API
 * endpoints. This class creates instances of the Posts and Users classes and makes
 * them available as properties.
 */

export class Library {
  posts: Posts;
  users: Users;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.posts = new Posts(config);
    this.users = new Users(config);
  }
}