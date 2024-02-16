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
import { reactive, toRefs } from "vue";

export default {
  name: 'MyAwsomeComponet',
  setup() {

    // const quantity = ref(0);
    // const price = ref(100);
    // const totalPrice = ref(0);
    // const tax = ref(0);

    const state = reactive({
      quantity: 0,
      price: 100,
      totalPrice: 0,
      tax: 0
    })

    function makeOrder() {
      state.quantity++;
      state.totalPrice = state.quantity * state.price;
      state.tax = state.totalPrice * 0.23;
    }

    return { makeOrder, ...toRefs(state) };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

