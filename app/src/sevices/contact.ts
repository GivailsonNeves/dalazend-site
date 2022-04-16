import api from './api-client';

export default class ContactApi {
  static async get() {
    return api.get(`v1/contact`);
  }
  static async send(data: any) {
    const formData = new FormData();
    formData.append("your-name", data.name);
    formData.append("your-email", data.email);
    formData.append("your-phone", data.phone);
    formData.append("your-message", data.message);
    return api.post(
      `${process.env.REACT_APP_BASE_DOMAIN}/wp-json/contact-form-7/v1/contact-forms/169/feedback`, 
    formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
}