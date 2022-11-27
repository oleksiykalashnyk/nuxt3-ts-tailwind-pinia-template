import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: (): { count: number } => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++
    },
    setCount(value: number) {
      this.count = value
    },
  },
})
