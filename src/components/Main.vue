<template>
  <main class="industry-wrapper">
    <section class="header">
      <Header />
      <section class="statistics">
        <ul>
          <li>
            <p class="stat-number">2012</p>
            <p class="stat-name">Earliest Kill</p>
          </li>
          <li>
            <p class="stat-number">Toys (prehistoric)</p>
            <p class="stat-name">Oldest Industry</p>
          </li>
          <li>
            <p class="stat-number">Business Insider</p>
            <p class="stat-name">Most Millennial Obsessed</p>
          </li>
          <li>
            <p class="stat-number">74</p>
            <p class="stat-name">Media Outlets</p>
          </li>
        </ul>
        <ul>
          <li>
            <p class="stat-number">{{ valueCount("type", "product") }}</p>
            <p class="stat-name">Products</p>
          </li>
          <li>
            <p class="stat-number">{{ valueCount("type", "tradition") }}</p>
            <p class="stat-name">Traditions</p>
          </li>
          <li>
            <p class="stat-number">{{ valueCount("type", "activity") }}</p>
            <p class="stat-name">Activities</p>
          </li>
          <li>
            <p class="stat-number">{{ valueCount("type", "location") }}</p>
            <p class="stat-name">Locations</p>
          </li>
        </ul>
      </section>
    </section>

    <div class="filters">
      <p class="filter-label">Filters:</p>
      <button v-on:click="type = 'all'">All</button>
      <button v-on:click="type = 'product'">Products</button>
      <button v-on:click="type = 'activity'">Activities</button>
      <button v-on:click="type = 'location'">Locations</button>
      <button v-on:click="type = 'tradition'">Traditions</button>
    </div>

    <ul class="card-container">
      <li v-for="item in filtered" :key="item.name" class="card">
        <h2>{{ item.name }}</h2>
        <div class="img-wrapper">
          <img
            :src="require(`../assets/${item.image}.png`)"
            :alt="`${unSlugify(item.image)} emoji`"
          />
        </div>
        <p class="summary">{{ item.summary }}</p>
        <p class="created">
          Created
          <span class="origin-link"
            ><a
              :href="`${item.origin.link}`"
              target="_blank"
              :aria-label="`Go to article about origin of ${item.name}`"
              >{{ item.origin.year }}</a
            ></span
          >, killin' it since
          <span class="source-start"
            ><a
              :href="`${earliestSource(item.sources).link}`"
              target="_blank"
              :aria-label="`Go to ${earliestSource(item.sources).year} ${
                earliestSource(item.sources).name
              } ${item.name} article`"
            >
              {{ earliestSource(item.sources).year }}</a
            ></span
          >.
        </p>
        <ul class="sources">
          <li v-for="(source, index) in item.sources" :key="index">
            <a
              :href="`${source.link}`"
              target="_blank"
              :aria-label="`Go to ${source.name} ${item.name} article`"
              >{{ source.name
              }}<img
            v-if="source.reaction"
            :src="require(`../assets/eye-roll.png`)"
            :alt="`eye roll emoji`"
          /></a
            >
          </li>
        </ul>
      </li>
    </ul>
    <div class="gen-z">
      <header>
        <h3>Gen Z, they're comin' for ya too...</h3>
        <img
          :src="require('../assets/smirking-face.png')"
          alt="Smirking face emoji"
        />
      </header>
      <ul>
        <li>
          <a
            href="https://www.inputmag.com/style/has-gen-z-killed-skinny-jeans-millennials-tiktok-fashion-drama/amp"
            target="_blank"
            >Has Gen Z Killed Skinny Jeans? (2021)</a
          >
        </li>
        <li>
          <a
            href="https://www.dailymail.co.uk/femail/food/article-10157233/Are-Gen-Z-killing-Brussels-sprouts.html"
            target="_blank"
            >Are Gen Z killing Brussels sprouts? (2021)</a
          >
        </li>
        <li>
          <a
            href="https://financialpost.com/personal-finance/young-money/millennials-are-old-news-now-its-gen-zs-turn-to-kill-industries"
            target="_blank"
            >Millennials are old news - now it's Gen Z's turn to kill industries
            (2018)</a
          >
        </li>
      </ul>
      <p>
        Created by
        <a href="https://musicalwebdev.com" target="_blank">Brittany Walker</a>.
      </p>
    </div>
  </main>
</template>

<script>
import { industries } from "../data/data";
import Header from "./Header.vue";

export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    Header,
  },
  data() {
    return {
      type: "all",
      items: industries,
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
      return this.filter("product");
    },
    tradition() {
      return this.filter("tradition");
    },
    activity() {
      return this.filter("activity");
    },
    location() {
      return this.filter("location");
    },
  },
  methods: {
    filter(type) {
      return this.items.filter((item) => item.type == type);
    },
    earliestSource(sources) {
      const earliest = sources.reduce(function (res, obj) {
        return obj.year < res.year ? obj : res;
      });
      return earliest;
    },
    unSlugify(imageName) {
      var text = imageName.split("-");
      return text
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        })
        .join(" ");
    },
    valueCount(key, value) {
      return this.items.filter((item) => item[key] === value).length;
    },
  },
};
</script>

<style lang="scss" scoped>
$black: #2c3e50;
$gray: #ccc;

h2 {
  font-size: 1.17em;
}

.header {
  @media screen and (min-width: 991px) {
    display: flex;
  }
}

.filters {
  padding: 30px;
  background-color: $black;
  color: white;
}

.filters button:hover {
  cursor: pointer;
}

.filters p {
  display: inline-block;
  margin-right: 10px;
}

.origin-link a {
  text-decoration: none;
  color: $black;
}

.card span {
  border-bottom: 1px solid $gray;
  text-decoration: none;
}

.origin-link a:hover,
.source-start a:hover {
  font-weight: bold;
}

button {
  border: 1px solid $gray;
  padding: 5px 10px;
  border-radius: 3px;
  margin: 5px;
  background-color: white;
}

button:hover,
button:focus {
  color: white;
  background-color: $black;
}

span {
  text-decoration: line-through;
}

.filters .filter {
  border: 1px solid $gray;
  padding: 5px 10px;
  border-radius: 3px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}

.card-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  max-width: 1300px;
  margin: 30px auto;
  padding: 20px;
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

li a {
  text-decoration: none;
  color: $black;
}

.sources li:hover {
  transition: 0.5s;
  background-color: $black;
  cursor: pointer;
  a {
    color: white;
    display: flex;
  }
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

@media screen and (min-width: 668px) {
  .card-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 991px) {
  .card-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.sources {
  padding: 0;
  list-style: none;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
      img {
    height: 20px;
    width: 20px;
    margin-left: 5px;
  }
  }
}

.statistics {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top: 1px solid $black;
  width: 100%;
  @media screen and (min-width: 998px) {
    border-top: 0;
    border-left: 1px solid $black;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li {
    margin: 15px 10px;
  }
  p {
    margin: 0;
  }
  .stat-number {
    font-weight: bold;
    font-size: 20px;
    span {
      text-decoration: none;
      display: block;
      font-size: 16px;
    }
  }
}

.sources li {
  display: inline-block;
  // font-size: 13px;
  border: 1px solid $gray;
  padding: 5px 10px;
  border-radius: 3px;
  margin: 5px;
}

.card .created {
  line-height: 2;
}

.gen-z {
  background-color: $black;
  padding: 20px;
  // border-radius: 0 0 8px 8px;
}

.gen-z p,
a {
  color: white;
}

.gen-z header {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.gen-z header img {
  height: 20px;
  width: 20px;
}

.gen-z ul li {
  display: inline-block;
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 3px;
  margin: 5px;
  color: white;
  border: 1px solid $gray;
  a {
    color: white;
  }
}
</style>
