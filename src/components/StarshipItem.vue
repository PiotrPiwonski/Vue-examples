<template>
  <p class="ship">{{ship.name}}</p>
</template>

<script>

export default {
  name: "StarshipItem",
  components: {},
  props:{
    ship: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.ship {
  color: white;
}
</style>
