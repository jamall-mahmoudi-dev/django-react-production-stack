import client from "./client";

export const getTest = async () => {
  return await client.get("/test/");
};


export const createItem = (data) => {
  return client.post("/create/", data);
};