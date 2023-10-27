<template>
    <div id="react-vite-app"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { registerMicroApps, start } from 'qiankun';

const loading = ref(false);
registerMicroApps([
    {
        name: 'react-vite-app',
        entry: '//localhost:5175/',
        container: '#react-vite-app',
        activeRule: '/react-vite-app',
       
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