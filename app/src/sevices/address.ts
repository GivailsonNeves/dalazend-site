import api from './api-client';

export default class AddressApi {
  static async get() {
    return api.get(`v1/address`);
  }
}