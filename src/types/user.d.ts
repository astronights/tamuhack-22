import { subscription } from "./subscription";
export type user = {
  displayName: string;
  auth: string;
  subscriptions: subscription[];
  contacts: string[];
};
