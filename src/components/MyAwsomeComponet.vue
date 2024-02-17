<template>
  <div>
    <p>Masks: {{masks}}</p>

    <p v-if="masks > 3">You can buy a mask!</p>
    <p v-else-if="masks > 0 && masks <=3">You can buy a mask, but hurry up!</p>
<!--    <p v-if="masks <= 0">You can't buy a mask, it's out of stock!</p>-->
    <p v-else>You can't buy a mask, it's out of stock!</p>
    <button v-if="masks > 0 " @click="buyMask">Buy a mask</button>

    <p v-show="masks > 3">You can buy a mask!</p>
    <p v-show="masks > 0 && masks <=3">You can buy a mask, but hurry up!</p>
    <p v-show="masks <= 0">You can't buy a mask, it's out of stock!</p>
    <button v-show="masks > 0 " @click="buyMask">Buy a mask</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'MyAwsomeComponet',
  setup() {
    const masks = ref(5);

    function buyMask() {
      masks.value--;
    }


    return {masks, buyMask}
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

