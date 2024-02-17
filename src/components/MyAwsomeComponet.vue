<template>
  <div>
    <p>You have <strong>{{shares}}</strong> shares and their value <strong>{{sharesValue}}$</strong>, because share price is <strong>{{sharePrice}}$</strong></p>
    <button @click="changeNumberOfShares(1)">Buy one share</button>
    <button @click="changeNumberOfShares(5)">Buy five shares</button>
    <button @click="changeNumberOfShares(-1)">Sell one share</button>
    <button @click="changeNumberOfShares(-5)">Sell five shares</button>
  </div>
</template>

<script>
import {computed, ref, watch} from "vue";

export default {
  name: 'MyAwsomeComponet',
  setup() {
    const shares = ref(15);
    const sharePrice = ref(20);
    const sharesValue = computed(() => shares.value * sharePrice.value);

    function changeNumberOfShares(number) {
      if(shares.value + number >= 0) {
        shares.value += number;
      }

    }
    // Obserwuje czy coś się zmienia dynamicznie
    // w nawiasach [] możemy podać więcej niż 1 zmienną
    watch([shares], ([shares], [prevShares])  => {
      console.log('You sell or buy shares');
      console.log(shares, prevShares);
      shares > prevShares ? getPrice(1, 5) : getPrice(-5, -1);
    })

    function getPrice(min, max) {
      const priceDiff = Math.floor(Math.random() * (max - min) + min);
      if(sharePrice.value + priceDiff >= 0) {
        sharePrice.value += priceDiff;
      }


    }

    return {shares, sharePrice, sharesValue, changeNumberOfShares};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

