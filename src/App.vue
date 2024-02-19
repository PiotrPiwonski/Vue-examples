<template>
  <siemaApp/>
  <MyAwsomeComponet/>
</template>

<script>
import MyAwsomeComponet from './components/MyAwsomeComponet.vue';
import siemaApp from "@/components/siemaApp.vue";

export default {
  name: 'App',
  components: {
    MyAwsomeComponet,
    siemaApp
  }
}
</script>


