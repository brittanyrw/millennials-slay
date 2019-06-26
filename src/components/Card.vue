<template>
  <div class="card">
    <h2>Card</h2>
    <div v-for="(item) in data">
      {{item.name}}
      <img v-bind:src="require('../assets/' + item.image)" v-bind:alt="item.name">
    </div>
    <!-- <img src="../assets/divorce.jpeg"> -->
  </div>
</template>

<script>
import {dataList} from "../data/data";

export default {
  name: 'Card',
  data: function () {
    return {
      data: dataList
    }
  }
}

</script>

<style scoped>

</style>