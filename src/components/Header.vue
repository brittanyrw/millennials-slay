<template>
  <header class="main-header">
    <img
      :src="require(`../assets/headstone.png`)"
      :alt="`headstone emoji`"
    />
    <h1>Millennials Slay</h1>
    <p>
      A directory of industries, traditions and products that millenials have
      supposedly <span class="strikethrough">killed</span> slayed over the
      years.
    </p>
  </header>
</template>

<script>

export default {
  name: "Header",
};

</script>

<style lang="scss" scoped>

$black: #2c3e50;
$gray: #ccc;

.strikethrough {
  text-decoration: line-through;
}

.main-header {
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: auto;
  img {
    height: 128px;
    width: 128px;
  }
}

h1,
p {
  margin: 0;
}


</style>
