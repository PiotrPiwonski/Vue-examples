<template>
 <section class="wrapper">
   <div v-if="error">
     {{error}}
   </div>
   <Suspense v-else>
     <template #default>
       <div>
         <ItemsList/>
       </div>
     </template>
     <template #fallback>
      <BaseLoader/>
     </template>
   </Suspense>
 </section>
</template>

<script>
import ItemsList from "@/components/ItemsList.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import {onErrorCaptured, ref} from "vue";

export default {
  name: 'HomePage',
  components: {
    BaseLoader,
    ItemsList

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
