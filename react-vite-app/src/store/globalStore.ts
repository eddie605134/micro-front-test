import { create } from 'zustand';

interface SharedState {
  userId: string | null;
  counter: number;
}

interface GlobalState {
  sharedState: SharedState;
  globalActions: any; // Qiankun 全局 actions
  setGlobalActions: (actions: any) => void;
  syncFromGlobalState: (sharedState: SharedState) => void;
  incrementCounter: () => void;
}

export const useGlobalStore = create<GlobalState>((set, get) => ({
  sharedState: {
    userId: null,
    counter: 0,
  },
  globalActions: null,

  // 設置全局 actions
  setGlobalActions: (actions: any) => set({ globalActions: actions }),

  // 同步共享狀態
  syncFromGlobalState: (sharedState: SharedState) => {
    set({ sharedState });
  },

  // 增加計數器並通知主應用
  incrementCounter: () => {
    const currentCounter = get().sharedState.counter + 1;
    set((state) => ({
      sharedState: { ...state.sharedState, counter: currentCounter },
    }));
    get().globalActions?.setGlobalState({
      sharedState: { counter: currentCounter },
    });
  },
}));
