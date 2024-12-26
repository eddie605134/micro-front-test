import { initGlobalState } from 'qiankun'

// 初始化全局狀態
const state = {
  // userId: null, // 用戶 ID
  counter: 0, // 計數器
  vvCounter: 0
}

// 創建全局狀態管理對象
const actions = initGlobalState(state)

actions.onGlobalStateChange((state, prev) => {
  console.log('主应用检测到全局状态变化:', state, prev)
})

actions.getGlobalState = () => {
  return state
}

export default actions
