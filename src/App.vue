<template>
  <div id="app">
    <div id="nav">
      <a href="/" class="site-logo">HobbySpot</a>
      <!-- <span style="float: right;">
        <router-link to="/">Movies</router-link>|
        <router-link to="/">TV Shows</router-link>
      </span> -->
    </div>
    <div id="router-view">
      <router-view />
    </div>
    <footer>Made with ❤ on Planet Earth.</footer>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 18px;
  background-color: cadetblue;
  position: fixed;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#router-view{
  min-height: 85vh;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
footer {
  background-color: cadetblue;
  padding: 2rem;
  display: block;
  margin-top: 6rem;
}
.site-logo{
  font-size: 30px;
  font-weight: bold;
  color: white !important;
  text-decoration: none;
  font-family: sans-serif;
  text-shadow: 0 0 10px rgba(0,0,0,.95);
}
.site-logo:hover{
  text-decoration: none;
}
</style>
