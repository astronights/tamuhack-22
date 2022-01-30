import { request } from "./request";
import { user } from "../types/user";
import { AxiosResponse } from "axios";
import { subscription } from "../types/subscription";

export const getUser = async (user_id: string): Promise<user> => {
  const response: AxiosResponse = await request("POST", "/getUserData", null, {
    user_id: user_id,
  });
  return response.data;
};

export const addSubscription = async (
  user_id: string,
  subscription: subscription
): Promise<user> => {
  const response: AxiosResponse = await request(
    "POST",
    "/addUserSubscription",
    null,
    {
      user_id: user_id,
      subscription: subscription,
    }
  );
  return response.data;
};

export const deleteSubscription = async (
  user_id: string,
  subscription: subscription
): Promise<user> => {
  const response: AxiosResponse = await request(
    "POST",
    "/deleteUserSubscription",
    null,
    {
      user_id: user_id,
      subscription: subscription,
    }
  );
  return response.data;
};
