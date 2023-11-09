<template>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Enter your search query" />
      <button @click="searchVideos">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      searchVideos() {
        this.$emit('search-videos', this.searchQuery);
      },
    },
  };
  </script>
  