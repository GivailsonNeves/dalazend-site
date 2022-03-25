import api from './api-client';

export default class SocialLinksApi {
  static async get() {
    return api.get(`v1/social-links`);
  }
}