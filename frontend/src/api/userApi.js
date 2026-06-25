import client from "./client";

export const getUsers = async () => {
  return await client.get("/users/");
};

export const createUser = async (data) => {
  return await client.post("/users/", data);
};