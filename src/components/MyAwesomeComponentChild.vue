<template>
  <div>
    <p>Hi, I'm Child Component</p>
    <p>Window size: Width: {{width}} Height: {{height}}</p>
  </div>
</template>

<script>

import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from "vue";

export default {
  name: 'MyAwsomeComponentChild',
  setup() {
    console.log('Child setup');

    const width = ref(0);
    const height = ref(0);

    function changeWindowSize() {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }

    onBeforeMount(() => {
      console.log('Child onBeforeMount');
    });
    onMounted(() => {
      console.log('Child onMounted');
      window.addEventListener('resize', changeWindowSize)
    });
    onBeforeUpdate(() => {
      console.log('Child onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('Child onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('Child onBeforeUnmount');
      window.removeEventListener('resize', changeWindowSize);
    });
    onUnmounted(() => {
      console.log('Child onUnmounted');
    });


    return {height, width}
  }
};

</script>

<style lang="scss" scoped>

</style>
