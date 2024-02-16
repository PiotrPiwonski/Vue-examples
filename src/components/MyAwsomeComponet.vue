<template>
  <div>
 <button v-on:click="incrementPension">Increment</button>
 <button @click="sayHello">Say hello</button>
    <p>Your pension: {{pension}}</p>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'MyAwsomeComponet',
  setup() {
    const pension = ref(0);

    function incrementPension() {
      pension.value++;
    }

    return { pension, incrementPension };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

