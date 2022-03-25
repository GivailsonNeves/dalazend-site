import { createModel } from "@rematch/core";
import { RootModel } from ".";
import ActionsApi from "../../sevices/actions";

export interface Actions{}

export const actions = createModel<RootModel>()({
  state: {},
  reducers: {
    set(_, payload) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async getAsync() {
      try {
        const { data } = await ActionsApi.get();
        dispatch.actions.set(data);
        return true;
      } catch (error) {
          return false;
      }
    },
  }),
});