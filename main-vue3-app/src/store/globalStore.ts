import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    counter: 0,
    userId: ''
  }),
  actions: {
    setCounter(newCounter: number) {
      this.counter = newCounter
    },
    setUserId(newUserId: string) {
      this.userId = newUserId
    }
  }
})
