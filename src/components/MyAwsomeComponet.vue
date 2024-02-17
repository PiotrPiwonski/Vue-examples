<template>
  <div>
    <h1>{{price}}$</h1>
    <button @click="makeOrder">Make naext order</button>
    <p>Quantity: {{quantity}}</p>
    <p>Order total price: {{totalPrice}}</p>
    <p>Tax: {{tax}}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { reactive, toRefs } from "vue";

export default {
  name: 'MyAwsomeComponet',
  setup() {

    // const quantity = ref(0);
    // const price = ref(100);
    // const totalPrice = computed(() => price.value * quantity.value);
    // const tax = computed(() => totalPrice.value * 0.23);

    const state = reactive({
      quantity: 0,
      price: 100,
      totalPrice: computed(() => state.price * state.quantity),
      tax: computed(() => state.totalPrice * 0.23)
    })

    function makeOrder() {
      state.quantity++;
      //totalPrice.value = quantity.value * price.value;
      //tax.value = totalPrice.value * 0.23;
    }

    return { makeOrder, ...toRefs(state) };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

