<template>
  <div style="margin-top:40px;">
    <h3 v-show="movies.length" class="bold-text-style card-title">{{cardsCategory}} {{cardsType}}</h3>
    <a
      v-for="movie in movies.slice(0,6)"
      :key="movie.id"
      :href="'/movies/'+movie.id"
      class="cover-wrapper"
    >
      <img
        class="cover"
        :alt="movie.title"
        :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
      />
      <div class="cover-overlay">
        <strong>{{movie.title}}</strong>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "PopularCards",
  props: ["cardsType","cardsCategory"],
  computed: {
    movies(){
      if( this.cardsCategory == 'latest')
        return this.latestMovies;
      else if( this.cardsCategory == 'similar' )
        return this.similarMovies;
      else
        return this.popularMovies;
    },
    popularMovies() {
      return this.$store.getters.getPopularMovies;
    },
    latestMovies() {
      return this.$store.getters.getLatestMovies;
    },
    similarMovies() {
      return this.$store.getters.getSimilarMovies;
    }
  }
};
</script>

<style>
.cover-wrapper {
  margin: 1rem 0.5rem 0;
  width: 135px;
  height: 192px;
  display: inline-flex;
  overflow: hidden;
  /* box-shadow: 0 0 0 1px #303840; */
  border-radius: 0.3125rem;
  cursor: pointer;
}
.cover {
  box-shadow: 0 0 0 1px #303840;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
.cover-overlay {
  position: absolute;
  opacity: 0;
  flex-shrink: 0;
  display: block;
  z-index: 2;
  width: 135px;
  height: 192px;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.3125rem;
}
.card-title{
    font-family: monospace;
    margin: 0px;
    text-transform: capitalize;
}
</style>
