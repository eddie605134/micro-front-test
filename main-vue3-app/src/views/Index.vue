<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SharedCounter />
    <h1>主應用</h1>
  </div>
</template>

<script setup lang="ts">
import SharedCounter from "@/components/SharedCounter.vue";
</script>

<style scoped>
.home {
  text-align: center;
}

h1 {
  color: #42b983;
}
</style>
