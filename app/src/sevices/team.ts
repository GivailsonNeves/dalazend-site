import api from './api-client';

export default class TeamApi {
  static async get() {
    return api.get(`v1/team`);
  }
}