<template>
    <div id="vue3-webpack-app"  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { registerMicroApps, start } from 'qiankun';

const loading = ref(false);
registerMicroApps([
    {
        name: 'vue3-webpack-app',
        entry: '//localhost:8082/',
        container: '#vue3-webpack-app',
        activeRule: '/vue3-webpack-app',
        
    }
]);
onMounted(() => {
    if (!window['qiankunStarted']) {
        window['qiankunStarted'] = true;
        start({
            prefetch:false,
            sandbox:{experimentalStyleIsolation:true}
        });
    }
});
</script>

<style scoped></style>