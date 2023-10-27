<template>
    <div id="vue2-webpack-app"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { registerMicroApps, start } from 'qiankun';

const loading = ref(false);
registerMicroApps([
    {
        name: 'vue2-webpack-app',
        entry: '//localhost:8081/',
        container: '#vue2-webpack-app',
        activeRule: '/vue2-webpack-app',
       
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