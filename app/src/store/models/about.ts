import { createModel } from "@rematch/core";
import { RootModel } from ".";
import AboutApi from "../../sevices/about";

export interface About{}

export const about = createModel<RootModel>()({
  state: {},
  reducers: {
    set(_, payload) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async getAsync() {
      try {
        const { data } = await AboutApi.get();
        dispatch.about.set(data);
        return true;
      } catch (error) {
          return false;
      }
    },
  }),
});