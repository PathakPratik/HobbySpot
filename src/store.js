import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    api_key: "0cd3c8ffa773fa53f149fcec0a403aa7",
    movies: [],
    latestMovies: [],
    similarMovies: [],
    movieInfo: [],
    movieReviews: [],
    selectedMovie: null
  },
  getters: {
    getPopularMovies(state) {
      return state.movies;
    },
    getSimilarMovies(state) {
      return state.similarMovies;
    },
    getLatestMovies(state) {
      return state.latestMovies;
    },
    getMovieInfo(state) {
      return state.movieInfo;
    },
    getMovieReviews(state) {
      return state.movieReviews;
    },
    getSelectedMovie(state) {
      return state.selectedMovie;
    }
  },
  mutations: {
    SET_POPULAR_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_SIMILAR_MOVIES(state, movies) {
      state.similarMovies = movies;
    },
    SET_LATEST_MOVIES(state, movies) {
      state.latestMovies = movies;
    },
    SET_MOVIE_INFO(state, movieInfo) {
      state.movieInfo = movieInfo;
    },
    SET_MOVIE_REVIEWS(state, movieReviews) {
      state.movieReviews = movieReviews;
    },
    SET_SELECTED_MOVIE(state, selectedMovie) {
      state.selectedMovie = selectedMovie;
    }
  },
  actions: {
    setPopularMovies({ commit, state }) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
            state.api_key +
            "&language=en-US&sort_by=popularity.desc&include_adult=false&release_date.gte=2000-03-01&release_date.lte=2018-08-20&include_video=false&page=1"
        )
        .then(res => res.data.results)
        .then(movies => {
          commit("SET_POPULAR_MOVIES", movies);
        });
    },
    setLatestMovies({ commit, state }) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
            state.api_key +
            "&language=en-US&release_date.gte=2019-03-01&release_date.lte=2019-08-20"
        )
        .then(res => res.data.results)
        .then(movies => {
          commit("SET_LATEST_MOVIES", movies);
        });
    },
    setMovieInfo({ commit, state }) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            state.selectedMovie +
            "?api_key=" +
            state.api_key +
            "&language=en-US"
        )
        .then(res => res.data)
        .then(movieInfo => {
          commit("SET_MOVIE_INFO", movieInfo);
        });
    },
    setSimilarMovies({ commit, state }) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            state.selectedMovie +
            "/similar?api_key=" +
            state.api_key +
            "&language=en-US"
        )
        .then(res => res.data.results)
        .then(similarMovies => {
          commit("SET_SIMILAR_MOVIES", similarMovies);
        });
    },
    setMovieReviews({ commit, state }) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            state.selectedMovie +
            "/reviews?api_key=" +
            state.api_key +
            "&language=en-US"
        )
        .then(res => res.data.results)
        .then(movieReviews => {
          commit("SET_MOVIE_REVIEWS", movieReviews);
        });
    },
    setSelectedMovie({ commit }, selectedMovie) {
      commit("SET_SELECTED_MOVIE", selectedMovie);
    }
  }
});
