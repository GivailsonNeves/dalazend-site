import api from './api-client';

export default class SocialLinksApi {
  static async get() {
    //@ts-ignore
    return api.get(`v1/social-links?${window.VERSION_HASH}`);
  }
}