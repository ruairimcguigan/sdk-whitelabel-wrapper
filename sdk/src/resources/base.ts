import fetch from 'isomorphic-unfetch'

/**
 * - Base.ts provides common functionality for all resources in our SDK.
 * - It takes a Config object with apiKey and baseUrl properties in its
 *   constructor which is common and needed for API invocation.
 * - The request() func is used to make HTTP requests to the API.
 *   This method takes in an endpoint and an optional RequestInit the object
 *   for additional configuration. The method returns a Promise with the
 *   response data of the type T.
 */

type Config = {
  apiKey: string;
  baseUrl?: string
}

export abstract class Base {
  private apiKey: string;
  private baseUrl?: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://jsonplaceholder.typicode.com';
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.apiKey
    }
    const config = {
      ...options,
      headers
    }

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText)
    })
  }
}

