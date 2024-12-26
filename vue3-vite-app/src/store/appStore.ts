import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: 'light',
    user: null,
  }),
  actions: {
    setTheme(theme: string) {
      this.theme = theme;
    },
    setUser(user: any) {
      this.user = user;
    },
  },
});