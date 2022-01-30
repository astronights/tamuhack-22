import { subscription } from "./subscription";

export type contact = {
  id: string;
};

export type user = {
  displayName: string;
  user_id: string;
  password: string;
  subscriptions: subscription[];
  contacts: contact[];
};
