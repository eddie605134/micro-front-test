import { useState, useEffect } from 'react';

function Home({ actions }: { actions: any }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!actions) {
      console.error('[React 子應用] actions 未正確傳遞');
      return;
    }

    // 初始化共享狀態
    const globalState = actions.getGlobalState();
    setCounter(globalState?.counter || 0);

    // 註冊狀態變化監聽
    actions.onGlobalStateChange((state: any) => {
      console.log('[React 子應用] home狀態變化:', state);
      if (state?.counter !== undefined) {
        console.log('[React 子應用] counter 更新本地狀態:', state.counter);
        setCounter(state.counter); // 更新本地狀態
      }
    }, true);
  }, []);

  const increment = () => {
    if (!actions) {
      console.error('[React 子應用] actions 未定義，無法執行 increment');
      return;
    }

    // 增加計數器
    const updatedCounter = counter + 1;

    // 更新本地狀態
    setCounter(updatedCounter);

    // 更新共享狀態
    // console.log('[React 子應用] actions.getGlobalState();:', actions.getGlobalState());
    console.log('updatedCounter', updatedCounter);
    actions.setGlobalState({
      counter: updatedCounter,
    });
  };

  return (
    <div>
      <h1>React 子應用</h1>
      <p>Counter: {counter}</p>
      <button onClick={increment}>增加計數器</button>
    </div>
  );
}

export default Home;