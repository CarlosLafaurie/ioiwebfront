import { api } from "./api";

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPost = async (slug: string) => {
  const response = await api.get(`/posts/${slug}`);
  return response.data;
};