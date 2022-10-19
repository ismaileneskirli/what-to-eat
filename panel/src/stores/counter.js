import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});


export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
  }),
  getters: {
    userId(state) {
      // autocompletion! ✨
      return state.user.uid
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