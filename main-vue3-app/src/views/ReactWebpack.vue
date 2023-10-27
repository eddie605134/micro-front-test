<template>
    <div id="react-webpack-app" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { registerMicroApps, start } from 'qiankun';

const loading = ref(false);
registerMicroApps([
    {
        name: 'react-webpack-app',
        entry: '//localhost:3000/',
        container: '#react-webpack-app',
        activeRule: '/react-webpack-app',
        props: {

        }
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