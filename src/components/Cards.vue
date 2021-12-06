<template>
  <section>
    <div class="filters">
      <p class="filter-label">Filters:</p>
      <button v-on:click="type = 'all'">All</button>
      <button v-on:click="type = 'product'">Products</button>
      <button v-on:click="type = 'activity'">Activities</button>
      <button v-on:click="type = 'location'">Locations</button>
      <button v-on:click="type = 'tradition'">Traditions</button>
    </div>

    <ul class="card-container">
      <li v-for="item in filtered" v-bind:key="item.name" class="card">
        <h3>{{ item.name }}</h3>
        <div class="img-wrapper">
          <img v-bind:src="require('../assets/' + item.image)" v-bind:alt="item.name">
        </div>
        <p>{{ item.summary }}</p>
        <p v-show="item.start && item.origin">Created in <span>{{ item.start }}</span>, killin' it since <span>{{ item.origin }}</span>.</p>
        <ul class="sources">
          <li v-for="(source, index) in item.sources" v-bind:key="index">
            {{ source.name }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import { industries } from "../data/data";

export default {
  name: "Cards",
  props: {
    msg: String,
  },
  data() {
    return {
      type: "all",
      items: industries
    };
  },
  computed: {
    filtered() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }

      return this[this.type].slice().sort(compare);
    },
    all() {
      return this.items;
    },
    product() {
      return this.filter('product');
    },
    tradition() {
      return this.filter('tradition');
    },
    activity() {
      return this.filter('activity');
    },
    location() {
      return this.filter('location');
    },
  },
  methods: {
    filter(type){
      return this.items.filter((item) => item.type == type)
    }
  }
};
</script>

<style scoped>
.filters p {
  display: inline-block;
  margin-right: 10px;
}

span {
  text-decoration: line-through;
}

.filters .filter {
  border: 1.5px solid #ccc;
  padding: 5px 10px;
  border-radius: 3px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.card-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  max-width: 1200px;
  margin: 30px auto;
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
  background-color: #e6f6fa;
}

.card:nth-child(2n) .img-wrapper {
  background-color: #fae6e9;
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

@media screen and (min-width: 668px){
  .card-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 992px){
  .card-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.sources {
  padding: 0;
  list-style: none;
}

.sources li {
  display: inline-block;
  font-size: 13px;
  border: 1.5px solid #ccc;
  padding: 5px 10px;
  border-radius: 3px;
  margin: 5px;
}

.card p {
  line-height: 1.15;
}

.card span {
  border-bottom: 1.5px solid #ccc;
  text-decoration: none;
}
</style>
