<template>
  <div class="main-container">
    <div
      id="home-img"
      :style="{ 'background-image': 'url( https://image.tmdb.org/t/p/w500' + movieInfo.backdrop_path + ')' }"
    ></div>
    <div id="background"></div>
    <div class="center-content">
      <h1 class="movie-title">{{movieInfo.title}}</h1>
      <span>&nbsp; {{movieInfo.release_date.slice(0,4)}}</span>
      <br />
      <Genres :genres="movieInfo.genres"></Genres>
      <p class="overview">{{movieInfo.overview}}</p>
      <PopularCards cardsType="movies" cardsCategory="similar"></PopularCards>
    </div>
  </div>
</template>

<script>
import PopularCards from "./PopularCards";
import Genres from "./Genres";
export default {
  components: {
    PopularCards,
    Genres
  },
  mounted() {
    this.$store.dispatch("setSelectedMovie", this.$route.params.id);
    this.$store.dispatch("setMovieInfo");
    this.$store.dispatch("setSimilarMovies");
    this.$store.dispatch("setMovieReviews");
  },
  computed: {
    movieInfo() {
      return this.$store.getters.getMovieInfo;
    },
    movieReviews() {
      return this.$store.getters.getMovieReviews;
    }
  }
};
</script>

<style scoped>
#home-img {
  /* background-image: url("/assets/movies-tiles.jpg"); */
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
.movie-title {
  display: inline-block;
  color: black;
}
.center-content {
  text-align: center;
  padding-top: 120px;
}
.genres {
  background-color: cadetblue;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  color: white;
}
.overview {
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 50px;
}
</style>
