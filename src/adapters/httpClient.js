import axios from 'axios';
import { config } from '../config/index.js';

export class HttpClient {
  constructor() {
    this.client = axios.create({
      baseURL: config.baseUrl,
      headers: { 'x-access-token': config.apiKey }
    });
  }

  async get(path, params = {}) {
    return this.client.get(path, { params });
  }

  async post(path, body = {}) {
    return this.client.post(path, body);
  }
}
