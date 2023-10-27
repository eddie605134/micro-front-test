import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
let root:any;

const render = (container:HTMLElement | undefined) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  
  root = root || ReactDOM.createRoot(container ? container.querySelector("#root") : document.getElementById("root") );
  console.log(qiankunWindow.__POWERED_BY_QIANKUN__)
  root.render(
      <BrowserRouter basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? "/react-vite-app" : "/"}>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </BrowserRouter>
  );
}

const initQianKun = () => {
  renderWithQiankun({
    // 当前应用在主应用中的生命周期
    // 文档 https://qiankun.umijs.org/zh/guide/getting-started#

    mount(props) {
      render(props.container)
      //  可以通过props读取主应用的参数：msg
      // 监听主应用传值
      props.onGlobalStateChange((res) => {
        console.log(res.count)
      })
    },
    bootstrap() { },
    unmount() { },
  })
}


// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(undefined)