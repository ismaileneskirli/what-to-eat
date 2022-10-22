import axios from "axios";

const api = axios.create({
  //TODO: for testing on mobile change it to network
  // baseURL: "http://localhost:5003/api/v1",
  baseURL: "http://192.168.1.103:5003/api/v1",
});

const extractData = async (promise) => {
  const { data } = await promise;
  console.log(data);
  return data;
};

export const getUserData = async (userId) => {
  console.log("get user api çalıştı", userId);
  return extractData(api.get(`/user/${userId}`));
};

export const createUser = async (data) => {
  console.log("create user api çalıştı");
  return extractData(api.post(`/user`, data));
};

export const updateIngredientList = async (data) => {
  console.log("update ingredient api çalıştı");
  return extractData(api.post("/user/ingredient-list", data));
};
//TODO: update buy list
export const updateBuyList = async (data) => {
  console.log("update ingredient api çalıştı");
  return extractData(api.post("/user/ingredient-list", data));
};
