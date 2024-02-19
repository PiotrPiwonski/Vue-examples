<template>
  <div class="items-list">
    <SingleItem
        v-for="(item, index) in items"
        :key="item.id"
        :index="index"
        :item="item"
        :first-name="item.firsName"
        :last-name="item.lastName"
        :age="item.age"
    />
  </div>
</template>

<script>
import SingleItem from "@/components/items/item/SingleItem.vue";

export default {
  name: "ItemsList",
  components: {
    SingleItem
  },
  props: {
    items: {
      type: Array,
      default: () => [
        {
          id: 1,
          firsName: 'Gabriel',
          lastName: 'Narutowicz',
          age: 57,
          party: null,
        },
        {
          id: 2,
          firsName: 'Stanisław',
          lastName: 'Wojciechowski',
          age: 53,
          party: 'Polskie Stronnictwo Ludowe "Piast"',
        },
        {
          id: 3,
          firsName: 'Ignacy',
          lastName: 'Mościski',
          age: 59,
          party: null,
        },
      ]
    }
  },
};

</script>

<style lang="scss" scoped>
.items-list {
  font-family: arial;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
