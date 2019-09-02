<template>
  <div class="main-container">
    <div id="home-img"></div>
    <div id="background"></div>
    <div class="center-content">
      <!-- <h2 class="bold-text-style" style="margin-bottom:80px;">A hobby a day keeps the doldrums away.</h2> -->
      <PopularCards cardsType="movies" cardsCategory="popular"></PopularCards>
      <PopularCards cardsType="movies" cardsCategory="latest"></PopularCards>
    </div>
  </div>
</template>

<script>
import PopularCards from "./PopularCards";
export default {
  components: {
    PopularCards
  },
  mounted() {
    this.$store.dispatch("setPopularMovies");
    this.$store.dispatch("setLatestMovies");
  }
};
</script>

<style>
#home-img {
  background-image: url("../assets/movies-tiles.jpg");
  position: absolute;
  width: 100%;
  height: 99.95%;
  opacity: 0.3;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: -100;
}
#background {
  background-color: aliceblue;
  position: fixed;
  width: 100%;
  height: 99.95%;
  opacity: 3.3;
  z-index: -200;
}
.bold-text-style {
  display: block;
  color: black;
}
.center-content {
  text-align: center;
  padding-top: 30px;
}
</style>
