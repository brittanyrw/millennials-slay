<template>
  <div class="hero">
    <h1>Millennials Slay</h1>
    <p>A directory of industries, traditions and products that millenials have <span>killed</span> slayed over the years.</p>
    <div class="filters">
      <p class="filter-label">Filters: </p>
      <p class="filter">Products</p>
      <p class="filter">Places</p>
      <p class="filter">Traditions</p>
      <p class="filter">Activities</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.filters p {
  display: inline-block;
  margin-right: 10px;
}

.filters .filter {
  border: 1.5px solid #ccc;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>
