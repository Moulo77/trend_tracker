<template>
  <Themes></Themes>
</template>

<script>
import Themes from './components/Themes.vue';


export default {
  name: 'App',
  components: {
    Themes,
},
  data() {
    return {

    };
  },
  methods: {
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
