<template>
  <section v-if="item">
    <h2>Basic Information</h2>
    <p>Name: {{item.name}}</p>
    <p>Birth year: {{item.birth_year}}</p>
    <p>Height: {{item.height}}</p>
    <p>Mass: {{item.mass}}</p>
  </section>
  <section v-else class="not-found-page">
    <h2 class="not-found-page__header">OOOPS!</h2>
    <p>
      For some reason the resorce you looking for does not exist or is unavailable.
      Please try something else.
    </p>
  </section>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'ItemDetails',
  props: {
    id: {
      type: String,
      required: true,
    }
  },

  async setup(props) {
    const item = ref(null);
    
    try {
      const response = await fetch(`https://swapi.dev/api/people/${props.id}`);
      if (response.status !== 200) {
        throw new Error('Response status is different than 200.')
      }
      const parseResponse = await response.json();
      item.value = parseResponse;
    } catch (error) {
      console.log(error);
    }

    return {
      item
    }
  },
}
</script>

<style lang="scss" scoped>
.not-found-page {
  text-align: center;

  &__header {
    color: #fcd711;
  }
}
</style>
