<template>
  <div>
    <p>Count: {{count}}</p>
    <button @click="increment">Increment</button>
    <MyAwesomeComponentChild v-if="count < 3"/>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
  onRenderTracked, onRenderTriggered
} from "vue";
import MyAwesomeComponentChild from "@/components/MyAwesomeComponentChild.vue";

export default {
  name: 'MyAwsomeComponet',
  components: {
    MyAwesomeComponentChild
  },

  setup() {

    const count = ref(0);

    function increment () {
      count.value++;
    }

    console.log('setup')

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    //onActivated
    //onDeactivated

    //onErrorCaptured

    onRenderTracked((e) => {
      console.log('onRenderTracked', e)
    });

    onRenderTriggered((e) => {
      console.log('onRenderTriggered', e)
    });

    return {count, increment};
  }


}
</script>


<!--Jak mamy do styli dodany scoped wtedy style obowiązują tylko w tym komponencie-->
<style lang="scss">

</style>
