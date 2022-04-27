import api from './api-client';

export default class AboutApi {
  static async get() {
    //@ts-ignore
    return api.get(`v1/about?${window.VERSION_HASH}`);
  }
}