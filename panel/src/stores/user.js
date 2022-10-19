// import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
  }),
  getters: {
    getUserId(state) {
      return state.user.uid
    },
    getUserName(state) {
      return state.user.displayName
    },
  },
  // actions: {
  //   // any amount of arguments, return a promise or not
  //   addTodo(text) {
  //     // you can directly mutate the state
  //     this.todos.push({ text, id: this.nextId++, isFinished: false })
  //   },
  // },
})