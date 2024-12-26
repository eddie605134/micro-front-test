<template>
  <div id="vue3-vite-app" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { registerMicroApps, start } from "qiankun";
import globalActions from "@/store/globalState";

const loading = ref(false);
console.log("loading", globalActions);
registerMicroApps([
  {
    name: "vue3-vite-app",
    entry: "//localhost:5174/",
    container: "#vue3-vite-app",
    activeRule: "/vue3-vite-app",
    props: { actions: globalActions },
  },
]);
onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    start();
  }
});
</script>

<style scoped></style>
