<template>
  <div id="app">
    <!-- Header Section -->
    <header class="app-header">
      <div class="container">
        <h1>Trend Tracker</h1>
      </div>
    </header>

    <!-- Router View for Content -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ecf0f1; /* Soft grayish background color */
  padding-top: 60px; /* Adjusted margin-top */
}

.app-header {
  background: linear-gradient(to bottom, #3498db, #2980b9); /* Gradient background */
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  text-align: center; /* Center text within the header */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.app-header h1,
.app-header p {
  margin: 0;
}

.app-header h1 {
  font-size: 2em;
}

.app-header p {
  margin-top: 10px;
  font-size: 1.2em;
}
</style>
