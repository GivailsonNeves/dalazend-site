import api from './api-client';

export default class TeamApi {
  static async get() {
    //@ts-ignore
    return api.get(`v1/team?${window.VERSION_HASH}`);
  }
}