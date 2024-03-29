<template>
  <div>
    <!-- Header Section -->
    <div class="header">
      <div class="theme-selector">
        <label for="themeSelect" class="select-label">Choisir un thème:</label>
        <div class="custom-select">
          <select id="themeSelect" v-model="selectedTheme" @change="fetchVideosForTheme" class="select-box">
            <option value="" disabled>Sélectionner un thème</option>
            <option v-for="category in videoCategories" :key="category.id" :value="category.id">{{ category.snippet.title }}</option>
          </select>
          <div class="select-arrow"></div>
        </div>
      </div>
    </div>

    <!-- Videos Section -->
    <div v-if="filteredVideos.length > 0">
      <p>Vidéos en tendance pour la catégorie "{{ selectedThemeTitle }}"</p>
      <div class="video-grid">
        <div v-for="video in filteredVideos" :key="video.id" class="video-card">
          <iframe
            width="300"
            height="200"
            :src="'https://www.youtube.com/embed/' + video.id"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <router-link :to="{ path: '/videos/'+ video.id}">{{ video.snippet.title }}</router-link>
        </div>
      </div>
    </div>

    <!-- No Videos Message -->
    <p v-else>Aucune vidéos disponible pour cette catégorie</p>
  </div>
</template>

<script>
import { fetchVideos, fetchVideoCategories } from '@/services/youtube';

export default {
  name: 'App',
  data() {
    return {
      videos: [],
      selectedTheme: '',
      selectedThemeTitle: '', 
      videoCategories: [],
    };
  },
  methods: {
    // Fetch videos based on the selected theme
    async fetchVideosForTheme() {
      if (this.selectedTheme) {
        try {
          const videos = await fetchVideos(this.selectedTheme);
          this.videos = videos;

          // Set the selectedThemeTitle when the theme is selected
          const selectedCategory = this.videoCategories.find(category => category.id === this.selectedTheme);
          this.selectedThemeTitle = selectedCategory ? selectedCategory.snippet.title : '';
        } catch (error) {
          console.error('Error fetching videos for theme', error);
        }
      } else {
        this.videos = [];
        this.selectedThemeTitle = ''; // Clear the title when no theme is selected
      }
    },
    // Fetch video categories during component initialization
    async fetchVideoCategories() {
      try {
        const categories = await fetchVideoCategories();
        this.videoCategories = categories;
      } catch (error) {
        console.error('Error fetching video categories', error);
      }
    },
    // Navigate to video details page
    goToVideoDetails(videoId) {
      this.$router.push(`/videos/${videoId}`);
    },
  },
  computed: {
    // Use a computed property for filtered videos
    filteredVideos() {
      return this.videos;
    },
  },
  // Fetch video categories and videos during component mount
  mounted() {
    this.fetchVideoCategories();
    this.fetchVideosForTheme();
  },
};
</script>

<style scoped>
/* Add some styles to enhance the appearance */
.theme-selector {
  margin-bottom: 20px;
}

.select-label {
  margin-right: 10px;
  font-weight: bold;
}

.custom-select {
  position: relative;
  display: inline-block;
}

.select-box {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  outline: none;
}

.select-arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0;
  border-color: #333 transparent transparent transparent;
  pointer-events: none;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.video-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  /* Add some box shadow for a lifted appearance */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 8px;
}
</style>
