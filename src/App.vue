<template>
  <div id="app">
    <Hero/>
    <Card/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Card
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
