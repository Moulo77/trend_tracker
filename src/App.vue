<template>
  <div id="app">
    <SearchVideo @search-videos="updateVideos" />
    <ShowVideo :searchQuery="searchQuery" />
  </div>
</template>

<script>
import ShowVideo from './components/ShowVideo.vue';
import SearchVideo from './components/SearchVideo.vue';

export default {
  name: 'App',
  components: {
    ShowVideo,
    SearchVideo,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    updateVideos(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
