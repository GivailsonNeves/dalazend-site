import api from './api-client';

export default class AboutApi {
  static async get() {
    return api.get(`v1/about`);
  }
}