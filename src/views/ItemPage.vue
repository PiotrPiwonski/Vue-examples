<template>
  <section class="wrapper">
    <div v-if="error">
      {{error}}
    </div>
    <Suspense v-else>
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
import {onErrorCaptured, ref} from "vue";

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
    const error = ref(null);

    onErrorCaptured((e) => {
      error.value = e
    })

    return { error }
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
