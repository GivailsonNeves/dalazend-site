import api from './api-client';

export default class ContactApi {
  static async get() {
    return api.get(`v1/contact`);
  }
  static async send(data: any) {
    console.log(data)
    return api.post(`v1/subscribe`, {
      ...data,
      name: data.name.substring(0, data.name.indexOf(' ')),
      lastName: data.name.substring(data.name.indexOf(' '))
    });
  }
}