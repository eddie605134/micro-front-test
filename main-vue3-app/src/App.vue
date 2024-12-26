<template>
  <div id="app">
    <SharedCounter />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/vue2-webpack-app">webpack+vue2App</router-link> |
      <router-link to="/vue3-vite-app">vite+vue3App</router-link> |
      <router-link to="/vue3-webpack-app">webpack+vue3App</router-link> |
      <router-link to="/react-webpack-app">webpack+reactApp</router-link> |
      <router-link to="/react-vite-app">vite+reactApp</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import SharedCounter from "@/components/SharedCounter.vue";
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
