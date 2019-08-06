<template>
  <div id="app">
    <div id="nav">
      <a href="/" class="site-logo">HobbySpot</a>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
    <footer>Made with ❤ on Planet Earth.</footer>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 18px;
  background-color: cadetblue;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
footer {
  background-color: cadetblue;
  padding: 2rem;
  display: block;
  margin-top: 8rem;
}
.site-logo{
  font-size: 30px;
  font-weight: bold;
  color: white !important;
  text-decoration: none;
  font-family: sans-serif;
  text-shadow: 0 0 10px rgba(0,0,0,.95);
}
</style>
