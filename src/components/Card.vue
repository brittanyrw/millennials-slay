<template>
  <div class="card-container">
      <div v-for="(item, index) in sortedArray" v-bind:key="index" class="card">
        <h3>{{item.name}}</h3>
        <div class="img-wrapper">
          <img v-bind:src="require('../assets/' + item.image)" v-bind:alt="item.name">
        </div>
        <p>{{item.summary}}</p>
        <!-- <p>{{item.why}}</p> -->
            <!-- <ul v-for="(source, index) in item.sources" v-bind:key="index" class="sources">
              <li>{{source.name}}</li>
            </ul> -->
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
      function compare(itemOne, itemTwo) {
        if (itemOne.name < itemTwo.name)
          return -1;
        if (itemOne.name > itemTwo.name)
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
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  max-width: 1000px;
  margin: auto;
}
.card img {
  width: 100%;
}
.img-wrapper {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card:nth-child(1n) .img-wrapper {
  background-color: #fae6e9;
}

.card:nth-child(2n) .img-wrapper {
  background-color: #e6f6fa;
}

.card:nth-child(3n) .img-wrapper {
  background-color: lavender;
}

.card:nth-child(5n) .img-wrapper {
  background-color: #effae6;
}

.card:nth-child(6n) .img-wrapper {
  background-color: #faefe6;
}

.img-wrapper img {
  height: 75px;
  width: 75px;
}

@media screen and (min-width: 776px){
  .card-container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 992px){
  .card-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>