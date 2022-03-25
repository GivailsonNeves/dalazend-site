import { Models } from "@rematch/core";
import { about } from "./about";
import { contact } from "./contact";
import { socialLinks } from "./social-links";
import { team } from "./team";
import { actions } from "./actions";
import { office } from "./office";
import { address } from "./address";
export interface RootModel extends Models<RootModel> {
  socialLinks: typeof socialLinks;
  contact: typeof contact
  about: typeof about;
  address: typeof address;
  team: typeof team;
  office: typeof office;
  actions: typeof actions;
}
export const models: RootModel = { socialLinks, about, address, contact, team, actions, office };