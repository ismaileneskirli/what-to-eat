import { useQuery } from "vue-query";
import { getUserData } from "../lib/user.api";
export const useUsersIngredients = (userId) =>
  useQuery(["getUserData", userId], () => getUserData(userId), {
    select(userData) {
      console.log("userData: ", userData);
      return userData.ingredients_list;
    },
  });
