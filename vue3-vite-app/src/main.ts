import { createApp } from 'vue';
import './public-path';
import App from './App.vue';
import router from './router';
import pinia from './store';
import { useGlobalStore } from './store/globalStore';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let app: any;

function initializeApp(container?: HTMLElement, props?: any) {
  app = createApp(App);

  app.use(router).use(pinia);

  const globalStore = useGlobalStore();
  console.log('我到這裡了');
  console.log('props:', props.actions.getGlobalState());
  if (props?.actions && typeof props.actions.getGlobalState === 'function') {
    globalStore.setGlobalActions(props.actions);

    // 初始化共享狀態
    const sharedState = props.actions.getGlobalState()?.sharedState || {};
    globalStore.syncFromGlobalState(sharedState);

    console.log('我到這裡了');

    // 註冊全局狀態監聽
    props.actions.onGlobalStateChange((state: any, prev: any) => {
      console.log('[Vue 子應用] main全局狀態變化:', state, prev);
      globalStore.syncFromGlobalState(state.sharedState);
    });
  } else {
    console.error('[Vue 子應用] actions 未傳遞或格式不正確');
  }

  app.mount(container ? container.querySelector('#app') : '#app');
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  initializeApp();
} else {
  renderWithQiankun({
    bootstrap() {
      console.log('[Vue 子應用] Bootstrap');
    },
    mount(props: any) {
      console.log('[Vue 子應用] Mount:', props);
      initializeApp(props.container, props);
    },
    unmount() {
      console.log('[Vue 子應用] Unmount');
      app.unmount();
      app = null;
    },
  });
}
