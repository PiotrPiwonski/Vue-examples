<template>
  <section class="list">
    <router-link
        :to="{name: 'ItemPage', params: {id: index + 1}}"
        v-for="(item, index) in items"
        :key="index"
        class="list__item">
      <SingleItem :item="item"/>
    </router-link>

  </section>
</template>

<script>
import SingleItem from "@/components/SingleItem.vue";
import {ref} from "vue";

export default {
  name: 'ItemsList',
  components: {
    SingleItem,

  },
  async setup() {
    const items = ref(null);
    const response = await fetch('https://swapi.dev/api/people');
    const parseResponse = await response.json();

    items.value = [...parseResponse.results];
    console.log(items);
    return {
      items
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  align-items: center;
  &__item {
    text-decoration: none;
    width: 100%;
  }
}
</style>
