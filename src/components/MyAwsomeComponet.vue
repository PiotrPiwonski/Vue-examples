<template>
  <div>
 <button v-on:click="sayHello">Say hello</button>
 <button @click="sayHello">Say hello</button>
  </div>
</template>

<script>
export default {
  name: 'MyAwsomeComponet',
  setup() {
    function sayHello() {
      const welcomeText = 'Siema, co tam ?'
      console.log(addExclamationMark(welcomeText));
    }

    function addExclamationMark(text) {
      return `${text}!`;
    }

    return {sayHello}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

