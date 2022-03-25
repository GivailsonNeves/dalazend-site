import { createModel } from "@rematch/core";
import { RootModel } from ".";
import ContactApi from "../../sevices/contact";

export interface Contact{}

export const contact = createModel<RootModel>()({
  state: [],
  reducers: {
    set(_, payload) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async getAsync() {
      try {
        const { data } = await ContactApi.get();
        dispatch.contact.set(data);
        return true;
      } catch (error) {
          return false;
      }
    },
    async sendAsync(payload: any) {
      try {
        const { data } = await ContactApi.send(payload);
        return data;
      } catch (error) {
        console.log(error)
          return false;
      }
    },
  }),
});