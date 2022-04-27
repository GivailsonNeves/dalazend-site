import api from './api-client';

export default class AddressApi {
  static async get() {
    //@ts-ignore
    return api.get(`v1/address?${window.VERSION_HASH}`);
  }
}