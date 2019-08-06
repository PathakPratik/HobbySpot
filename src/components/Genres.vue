<template>
  <div>
    <a v-for="genre in genres" :key="genre.id" class="genres">{{genre.name}}</a>
  </div>
</template>

<script>
export default {
  name: "Genres",
  props: ["genres"],
  computed: {
    latestMovies() {
      return this.$store.getters.getLatestMovies;
    }
  }
};
</script>

<style>
.genres {
  background-color: cadetblue;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  color: white !important;
  margin: 5px;
  font-size: 16px;
}
</style>
