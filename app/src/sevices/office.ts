import api from './api-client';

export default class OfficeApi {
  static async get() {
    return api.get(`v1/office`);
  }
}