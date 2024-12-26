/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

type AppState = {
  theme: string;
  user: any;
  setTheme: (theme: string) => void;
  setUser: (user: any) => void;
};

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  user: null,
  setTheme: (theme) => set({ theme }),
  setUser: (user) => set({ user }),
}));