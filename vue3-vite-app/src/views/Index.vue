<template>
  <div>
    <h1>Vue 子應用</h1>
    <p>User ID: {{ userId || '未設置' }}</p>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">增加計數器</button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useGlobalStore } from '../store/globalStore';

const globalStore = useGlobalStore();

onMounted(() => {});

const userId = computed(() => globalStore.sharedState.userId);
const counter = computed(() => globalStore.sharedState.counter);

const increment = () => {
  globalStore.incrementCounter();
};
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
