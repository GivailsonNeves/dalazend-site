import api from './api-client';

export default class ActionsApi {
  static async get() {
    return api.get(`v1/actions`);
  }
}