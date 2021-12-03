<template>
  <header>
    <h1>Millennials Slay</h1>
      <p>
        A directory of industries, traditions and products that millenials have
        supposedly <span>killed</span> slayed over the years.
      </p>
  </header>
  <Cards />
</template>

<script>
import Cards from './components/Cards.vue'

export default {
  name: 'App',
  components: {
    Cards
  }
}
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
