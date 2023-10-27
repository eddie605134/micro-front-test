<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/vue2-webpack-app">wepback+vue2App</router-link> |
    <router-link to="/vue3-vite-app">vite+vue3App</router-link> |
    <router-link to="/vue3-webpack-app">wepback+vue3App</router-link> |
    <router-link to="/react-webpack-app">wepback+reactApp</router-link> |
    <router-link to="/react-vite-app">vite+reactApp</router-link> 



  </nav>
  <router-view/>
</template>

<style>
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
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
