// import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
  }),
  getters: {
    getUserId(state) {
      return state.user.uid;
    },
    getUserName(state) {
      return state.user.displayName || state.user.email;
    },
  },
});
