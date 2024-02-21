<template>
  <div class="container">
    <button
        class="button"
    @click="handleMouseEvent"
    @dblclick="handleMouseEvent"
    @mousedown="handleMouseEvent"
    @mouseup="handleMouseEvent"
    @mousemove.once="handleMouseEvent"
    @mouseover="handleMouseEvent"
    @mouseleave="handleMouseEvent"
    @mousewheel="handleMouseEvent"
    @mouseout="handleMouseEvent"
    @contextmenu.prevent="handleMouseEvent"
    >Button</button>
    <form class="form" @submit.prevent="sendMessage">
      <input
          type="text"
          class="input"
          placeholder="Type something"
          @keypress="handleKeyEvent"
          @keydown.shift.alt.exact="handleKeyEvent"
          @keyup="handleKeyEvent"
      >
      <button class="button">Submit</button>
    </form>
    <p v-show="isMessageSend">Message Send</p>

    <div class="outer" @click="handleMouseEvent">
      <div class="inner" @click.stop="handleMouseEvent"></div>
    </div>
    <ul>
      <li v-for="(event, index) in mouseEventsArray" :key="index">{{event}}</li>
    </ul>
    <ul>
      <li v-for="({key, type}, index) in keyEventsArray" :key="index">{{key}} {{type}}</li>
    </ul>
  </div>
</template>

<script>


import {ref} from "vue";

export default {
  name: "MyAwsomeComponent",
  components: {

  },
  setup() {
    const mouseEventsArray = ref([]);
    const keyEventsArray = ref([]);
    const isMessageSend = ref(false);

    function sendMessage() {
      isMessageSend.value = true
    }

    function handleKeyEvent({type, key}) {
      keyEventsArray.value = [...keyEventsArray.value, {key, type}]
    }

    function handleMouseEvent({type}) {
      mouseEventsArray.value = [...mouseEventsArray.value, type]
    }

    return {handleMouseEvent, mouseEventsArray, keyEventsArray, handleKeyEvent, sendMessage, isMessageSend}
  }
};
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.input {
  margin-top: 10px;
}
.button {
  cursor: pointer;
  background-color: transparent;
  color: #000;
  border: 3px solid #000;
  padding: 10px 20px;
  font-size: 24px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s ease-in, color 0.1s ease-in,
  border-color 0.1s ease-in;
  margin-top: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
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
