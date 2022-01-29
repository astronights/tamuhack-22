import { request } from "./request";
import { subscription } from "../types/subscription";
import { AxiosResponse } from "axios";

export const getSubscriptions = async (
  user: string
): Promise<subscription[]> => {
  const response: AxiosResponse = await request(
    "POST",
    "/susbcription/user",
    null,
    {
      user: user,
    }
  );
  return response.data;
};
