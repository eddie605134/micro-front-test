<template>
    <div id="vue3-vite-app"  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { registerMicroApps, start } from 'qiankun';

const loading = ref(false);
registerMicroApps([
    {
        name: 'vue3-vite-app',
        entry: '//localhost:5173/',
        container: '#vue3-vite-app',
        activeRule: '/vue3-vite-app',
        
    }
]);
onMounted(() => {
    if (!window['qiankunStarted']) {
        window['qiankunStarted'] = true;
        start();
    }
});
</script>

<style scoped></style>