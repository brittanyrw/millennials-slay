<template>
  <div class="hero">
    <h1>Millennials Slay</h1>
    <p>A directory of industries, traditions and products that millenials have <span>killed</span> slayed over the years.</p>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hero span {
  text-decoration: line-through;
}
</style>
