import { createModel } from "@rematch/core";
import { RootModel } from ".";
import OfficeApi from "../../sevices/office";

export interface Office{}

export const office = createModel<RootModel>()({
  state: [],
  reducers: {
    set(_, payload) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async getAsync() {
      try {
        const { data } = await OfficeApi.get();
        dispatch.office.set(data);
        return true;
      } catch (error) {
          return false;
      }
    },
  }),
});