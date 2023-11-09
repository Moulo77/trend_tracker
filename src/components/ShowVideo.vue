<template>
  <div>
    <h2>YouTube Videos</h2>
    <ul v-if="videos.length">
      <li v-for="video in videos" :key="video.id.videoId">
        <iframe
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/' + video.id.videoId"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </li>
    </ul>
    <div v-else>No videos found.</div>
  </div>
</template>

<script>
import { fetchVideos } from '@/services/youtube';

export default {
  props: {
    searchQuery: String,
  },
  data() {
    return {
      videos: [],
    };
  },
  watch: {
    searchQuery: {
      immediate: true,
      handler(newQuery) {
        this.fetchVideos(newQuery);
      },
    },
  },
  methods: {
    async fetchVideos(query) {
      try {
        const videos = await fetchVideos(query);
        this.videos = videos;
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    },
  },
};
</script>
