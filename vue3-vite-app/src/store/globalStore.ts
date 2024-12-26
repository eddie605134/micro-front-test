import { defineStore } from 'pinia';

interface SharedState {
  userId: string | null;
  counter: number;
}

export const useGlobalStore = defineStore('global', {
  state: () => ({
    sharedState: {
      userId: null,
      counter: 0,
    },
    globalActions: null, // 存儲從主應用傳遞的 actions
  }),
  actions: {
    setGlobalActions(actions: any) {
      this.globalActions = actions;
    },
    syncFromGlobalState(sharedState: SharedState) {
      this.sharedState = { ...this.sharedState, ...sharedState };
    },
    incrementCounter() {
      // 增加計數器並更新共享狀態
      this.sharedState.counter += 1;
      this.globalActions?.setGlobalState({
        sharedState: { counter: this.sharedState.counter },
      });
    },
  },
});
