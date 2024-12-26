<template>
  <div>
    <p>共享計數器：{{ counter }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initGlobalState } from "qiankun";
import { useGlobalStore } from "@/store/globalStore"; // 引入 Pinia Store

const globalStore = useGlobalStore();
const { counter } = globalStore; // 從 Pinia 中獲取響應式的 counter

onMounted(() => {
  const { onGlobalStateChange, setGlobalState } = initGlobalState();

  onGlobalStateChange((state: any) => {
    if (state.counter !== undefined) {
      console.log("[共享計數器aaa] 收到新的計數器狀態:", state);
      globalStore.setCounter(state.counter);
    }
  }, true);
});
</script>

<style scoped>
div {
  margin: 20px 0;
}
</style>
