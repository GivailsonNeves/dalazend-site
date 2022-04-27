import api from './api-client';

export default class ActionsApi {
  static async get() {
    //@ts-ignore
    return api.get(`v1/actions?${window.VERSION_HASH}`);
  }
}