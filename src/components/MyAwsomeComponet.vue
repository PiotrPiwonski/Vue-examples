<template>
  <div class="container">
    <div v-if="error" class="error">
      Something went wrong <br>
      {{error}}
    </div>
    <Suspense v-else>
      <template #default>
        <StarshipsList/>
      </template>
      <template #fallback>
        <AppLoader/>
      </template>
    </Suspense>

  </div>
</template>

<script>
import StarshipsList from "@/components/StarshipsList.vue";
import AppLoader from "@/components/AppLoader.vue";
import {onErrorCaptured, ref} from "vue";

export default {
  name: "MyAwsomeComponent",
  components: {
    StarshipsList,
    AppLoader
  },
  setup() {
    const error = ref(null);

    onErrorCaptured(e => {
      error.value = e;
      return true;
    })

    return {error}
  }
};
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fcd711;
}
.image {
  width: 20px;
  height: 20px;
}

.squere {
  width: 50px;
  height: 50px;
  background-color: red;
}

.error {
  color: #cd3727;
}
</style>
