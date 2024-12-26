import React from 'react';
import ReactDOM from 'react-dom/client';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let root: any;

const render = (props: { container?: HTMLElement; actions?: any }) => {
  const { container, actions } = props;

  root =
    root ||
    ReactDOM.createRoot(
      container
        ? container.querySelector('#root')
        : document.getElementById('root')
    );

  // 使用 actions 初始化共享狀態
  if (actions) {
    console.log('[React 子應用] 接收到 actions:', actions);

    // 註冊全局狀態監聽
    actions.onGlobalStateChange((state: any, prev: any) => {
      console.log('[React 子應用] main狀態變化:', state, prev);
    });
  } else {
    console.warn('[React 子應用] 未傳遞 actions');
  }

  root.render(
    <BrowserRouter
      basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/react-vite-app' : '/'}
    >
      <React.StrictMode>
        <App actions={actions} />
      </React.StrictMode>
    </BrowserRouter>
  );
};

renderWithQiankun({
  bootstrap: async () => {
    console.log('[React 子應用] Bootstrap');
    return Promise.resolve();
  },
  mount: async (props) => {
    console.log('[React 子應用] Mount', props);
    render(props);
    return Promise.resolve();
  },
  unmount: async () => {
    console.log('[React 子應用] Unmount');
    root?.unmount();
    root = null;
    return Promise.resolve();
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
