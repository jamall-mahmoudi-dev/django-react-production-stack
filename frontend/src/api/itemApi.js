import client from "./client";

export const createPost = (data) => {
  return client.post("/create_post/", data);
};