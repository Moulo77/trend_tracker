<template>
  <div>
    <h1><u>Détails de la vidéo:</u></h1>

    <div>
      <h2><b><u>Titre:</u></b> {{ infos.title }}</h2>
      <p></p><a :href="'https://www.youtube.com/channel/' + infos.channelId">Accéder à la chaine YouTube</a>
      <p><b>Vues</b>: {{ statistics.viewCount }}</p>
      <p><b>J'aime</b>: {{ statistics.likeCount }}</p>
    </div>
    <div>
        <h3>Tags:</h3>
        <div class="tags-container">
          <div v-for="(tag, index) in infos.tags" :key="index" class="tag">
            {{ tag }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { fetchVideoDetails } from '@/services/youtube';

export default {
  name: 'VideoDetails',
  data() {
    return {
      statistics: {},
      infos: {},
    };
  },
  mounted() {
    const videoId = this.$route.params.videoId;
    this.fetchVideoDetails(videoId);
  },
  methods: {
    async fetchVideoDetails(videoId) {
      try {
        const videoDetails = await fetchVideoDetails(videoId);
        console.log(videoDetails)

        if (videoDetails) {
          this.statistics = videoDetails.statistics;
          this.infos = videoDetails.snippet;
          console.log(this.infos.channelId)
        } else {
          console.error('Video details not available.');
        }
      } catch (error) {
        console.error('Error fetching video details', error);
      }
    },
  },
};
</script>

<style scoped>
.tags-container {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  margin: 5px;
  padding: 5px;
  background-color: #ddd;
  border-radius: 5px;
}
</style>
