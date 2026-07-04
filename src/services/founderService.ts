import { api } from "./api";

export const getFounders = async () => {
  const response = await api.get("/founders");
  return response.data;
};