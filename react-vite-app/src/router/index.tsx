import React from 'react'

import Home from '../views/home'
// 导入路由依赖
import { Route,Routes} from 'react-router-dom'
 
export default function Router({ actions }: { actions: any }) {
    return (
        // 使用BrowserRouter包裹，配置路由
      <Routes >
        <Route element={<Home actions={actions}/>} path='/'></Route>
      </Routes>
    )
}