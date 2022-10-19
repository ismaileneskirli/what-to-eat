import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth "
import HomeView from "../views/HomeView.vue";
import RandomRecipe from "../views/RandomRecipe.vue";
import Ingredients from "../views/Ingredients.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import { useUserStore } from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/random-recipe",
      name: "randomRecipe",
      component: RandomRecipe,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/ingredients",
      name: "ingredients",
      component: Ingredients,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});


const getCurrentUser = () => {
  return new Promise ((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  userStore.user
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser()
    if (user) {
      console.log(user);
      userStore.user = user
      next();
    } else {
      alert("You dont have access");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
