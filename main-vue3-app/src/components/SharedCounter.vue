<template>
  <div>
    <p>共享計數器：{{ counters }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { initGlobalState } from "qiankun";
import { useGlobalStore } from "@/store/globalStore"; // 引入 Pinia Store

const globalStore = useGlobalStore();
const { counter, vvCounter } = globalStore; // 從 Pinia 中獲取響應式的 counter
console.log("🚀 ~ vvCounter:", vvCounter);

onMounted(() => {
  const { onGlobalStateChange, setGlobalState } = initGlobalState({
    counter: globalStore.counter,
    vvCounter: globalStore.vvCounter,
  });

  onGlobalStateChange((state: any) => {
    if (state.counter !== undefined) {
      globalStore.setCounter(state.counter);
    }

    if (state.vvCounter !== undefined) {
      globalStore.setVVCounter(state.vvCounter);
    }
  }, true);
});

const counters = computed(() => {
  return vvCounter + counter;
});
</script>

<style scoped>
div {
  margin: 20px 0;
}
</style>
