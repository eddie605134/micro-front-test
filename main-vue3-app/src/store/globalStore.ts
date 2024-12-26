import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    counter: 0,
    vvCounter: 0
  }),
  actions: {
    setCounter(newCounter: number) {
      this.counter = newCounter
    },
    setVVCounter(newCounter: number) {
      this.vvCounter = newCounter
    }
  }
})
