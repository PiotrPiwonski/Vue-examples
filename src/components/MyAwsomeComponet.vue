<template>
  <div class="container">
    <AddToCardButton @add-item-to-cart="increaseTheNumberOfItems" />
    <BaseNotification
        :isVisible="isNotificationVisible"
        :message="notificationText"
        @hide-notification="hideNotification"
    />
  </div>
</template>

<script>
import BaseNotification from './BaseNotification';
import AddToCardButton from './AddToCardButton';
import { computed, ref } from 'vue';
export default {
  name: 'MyAwesomeComponent',
  components: {
    BaseNotification,
    AddToCardButton,
  },
  setup() {
    const isNotificationVisible = ref(false);
    const numberOfItems = ref(0);
    const notificationText = computed(
        () => `Number of items in cart: ${numberOfItems.value}`
    );
    function increaseTheNumberOfItems({ qty }) {
      // numberOfItems.value++;
      numberOfItems.value += qty;
      isNotificationVisible.value = true;
    }
    function hideNotification() {
      isNotificationVisible.value = false;
    }
    return {
      isNotificationVisible,
      increaseTheNumberOfItems,
      notificationText,
      hideNotification,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.input {
  margin-top: 10px;
}
.outer {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42b883;
  margin-top: 10px;
}
.inner {
  width: 50px;
  height: 50px;
  background-color: #35495e;
}
.form {
  display: flex;
  flex-direction: column;
}
</style>
