<template>
  <div class="card-container">
      <div v-for="(item, index) in sortedArray" v-bind:key="index" class="card">
        <h3>{{item.name}}</h3>
        <img v-bind:src="require('../assets/' + item.image)" v-bind:alt="item.name">
        <p>{{item.summary}}</p>
        <p>{{item.why}}</p>
            <ul v-for="(source, index) in item.sources" v-bind:key="index" class="sources">
              <li>{{source.name}}</li>
            </ul>
      </div>
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
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }

      return dataList.sort(compare);
    }
  },
}

</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  max-width: 1000px;
  margin: auto;
}
.card img {
  width: 100%;
}
</style>