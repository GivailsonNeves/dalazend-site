import api from './api-client';

export default class OfficeApi {
  static async get() {
    //@ts-ignore
    return api.get(`v1/office?${window.VERSION_HASH}`);
  }
}