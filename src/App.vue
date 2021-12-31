<template>
  <Main />
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  padding: 30px;
}

$black: #2c3e50;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  font-size: 16px;
  max-width: 2000px;
  margin: auto;
  border: 1px solid $black;
}
</style>
