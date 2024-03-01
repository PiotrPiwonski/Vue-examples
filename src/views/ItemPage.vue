<template>
  <section class="wrapper">
    <Suspense>
      <template #default>
        <div>
          <ItemDetails :id="id"/>
        </div>
      </template>
      <template #fallback>
        <BaseLoader/>
      </template>
    </Suspense>
  </section>
</template>

<script>
import ItemDetails from "@/components/ItemDetails.vue";
import BaseLoader from "@/components/BaseLoader.vue";

export default {
  name: 'ItemPage',
  components: {
    ItemDetails,
    BaseLoader,
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },

  setup() {

    return {  }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  min-height: 100vh;
}
</style>
