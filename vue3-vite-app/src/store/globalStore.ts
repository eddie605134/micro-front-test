import { defineStore } from 'pinia';

interface SharedState {
  // userId: string | null;
  vvCounter: number;
}

export const useGlobalStore = defineStore('global', {
  state: () => ({
    vvCounter: 0,
    globalActions: null, // 存儲從主應用傳遞的 actions
  }),
  actions: {
    setGlobalActions(actions: any) {
      this.globalActions = actions;
    },
    syncFromGlobalState(sharedState: SharedState) {
      // this.sharedState2 = { ...this.sharedState2, ...sharedState };
    },
    incrementCounter() {
      // 增加計數器並更新共享狀態
      this.vvCounter += 1;
      this.globalActions?.setGlobalState({
        vvCounter: this.vvCounter 
      });
    },
  },
});
