import { createModel } from "@rematch/core";
import { RootModel } from ".";
import TeamApi from "../../sevices/team";

export interface Team{}

export const team = createModel<RootModel>()({
  state: [],
  reducers: {
    set(_, payload) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async getAsync() {
      try {
        const { data } = await TeamApi.get();
        dispatch.team.set(data);
        return true;
      } catch (error) {
          return false;
      }
    },
  }),
});