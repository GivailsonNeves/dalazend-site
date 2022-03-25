import { createModel } from "@rematch/core";
import { RootModel } from ".";
import SocialLinksApi from "../../sevices/social-links";

export interface SocialLinks{
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
    whatsapp?: string;
    calendly?: string;
}

export const socialLinks = createModel<RootModel>()({
  state: {
    instagram: 'a',
    linkedin: 'q',
    youtube: 's'
  } as SocialLinks,
  reducers: {
    set(_, payload: SocialLinks) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async getAsync() {
      try {
        const { data } = await SocialLinksApi.get();
        dispatch.socialLinks.set(data);
        return true;
      } catch (error) {
          return false;
      }
    },
  }),
});