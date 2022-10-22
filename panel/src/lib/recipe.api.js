import axios from "axios";

const api = axios.create({
  //TODO: for testing on mobile change it to network
  // baseURL: "http://localhost:5005/api/v1/recipes",
  baseURL: "http://192.168.1.103:5005/api/v1/recipes",
});

const extractData = async (promise) => {
  const { data } = await promise;
  console.log("response: ", data);
  return data;
};

export const fetchRandomRecipeWithIngredients = async (ingredients) => {
  console.log("in recipe api ", ingredients);
  return extractData(api.post("/recipe-with-ingredients", ingredients));
};
