import { request } from "./request";
import { service } from "../types/service";
import { AxiosResponse } from "axios";

export const getServices = async (): Promise<service[]> => {
  const response: AxiosResponse = await request(
    "GET",
    "/getService",
    null,
    null
  );
  return response.data;
};
