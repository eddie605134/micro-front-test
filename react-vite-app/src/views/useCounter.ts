import { useState, useEffect } from 'react';

function useCounter(actions: any) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!actions) {
      console.warn('[React 子應用] actions 未傳遞');
      return;
    }

    // 初始化共享狀態
    const globalState = actions.getGlobalState();
    if (globalState?.counter !== undefined) {
      setCounter(globalState.counter);
    } else {
      console.warn('[React 子應用] 無法初始化 counter，檢查主應用共享狀態');
    }

    // 註冊全局狀態變化監聽
    const onStateChange = (state: any) => {
      if (state?.counter !== undefined) {
        setCounter(state.counter);
      }
    };

    actions.onGlobalStateChange(onStateChange);

    // 清理狀態變化監聽
    return () => {
      actions.offGlobalStateChange?.(onStateChange);
    };
  }, [actions]);

  const increment = () => {
    if (!actions) {
      console.error('[React 子應用] actions 未定義，無法執行 increment');
      return;
    }

    const currentState = actions.getGlobalState();
    const updatedCounter = (currentState.sharedState.counter || 0) + 1;

    // 更新共享狀態
    actions.setGlobalState({
      ...currentState,
      counter: updatedCounter,
    });
  };

  return { counter, increment };
}

export default useCounter;