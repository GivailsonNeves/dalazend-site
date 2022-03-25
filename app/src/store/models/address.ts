import { createModel } from "@rematch/core";
import { RootModel } from ".";
import AddressApi from "../../sevices/address";

export interface Address{}

export const address = createModel<RootModel>()({
  state: {},
  reducers: {
    set(_, payload) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async getAsync() {
      try {
        const { data } = await AddressApi.get();
        dispatch.address.set(data);
        return true;
      } catch (error) {
          return false;
      }
    },
  }),
});