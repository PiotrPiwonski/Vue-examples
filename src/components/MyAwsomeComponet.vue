<template>
  <div>
    <div>
      <p>Masks: {{masks}}</p>

      <p v-if="masks > 3">You can buy a mask!</p>
      <p v-else-if="masks > 0 && masks <=3">You can buy a mask, but hurry up!</p>
      <p v-else>You can't buy a mask, it's out of stock!</p>
      <button
          class="btn"
          v-bind:disabled="!masks"
          @click="buyMask"
          v-bind:style="btn"
      >Buy a mask</button>
      <button
          class="btn"
          :disabled="!masks"
          @click="buyMask"
          :class="{'btn--warning': masks > 0 && masks <=3}"
      >Buy a mask</button>
    </div>
    <div>
      <img
          :src="images[currentImage]"
          :alt="`Image ${currentImage + 1}`"
          class="image"
      >
      <button
          class="btn"
          @click="changeImage"
          :disabled="currentImage >= images.length -1"
      >Change Image</button>
    </div>

  </div>
</template>

<script>
import {reactive, ref, toRefs} from "vue";

export default {
  name: 'MyAwsomeComponet',
  setup() {
    const styles = reactive({
      btn: {
        backgroundColor: '#17a2b8',
        color: '#fff'
      }
    })

    const masks = ref(5);

    function buyMask() {
      masks.value--;
    }

    const images = ref([
        'https://www.fotopolis.pl/i/images/9/2/0/dz04MjU2Jmg9NTUwNA==_src_151920-DSC_0632.JPG',
        'https://www.fotopolis.pl/i/images/9/2/1/dz01NTA0Jmg9ODI1Ng==_src_151921-DSC_0508.JPG',
        'https://www.fotopolis.pl/i/images/9/2/2/dz04MjU2Jmg9NTUwNA==_src_151922-DSC_0250.JPG',
        'https://www.fotopolis.pl/i/images/9/2/3/dz04MjU2Jmg9NTUwNA==_src_151923-DSC_0514.JPG',

    ]);

    const currentImage = ref(0);

    function changeImage() {
      currentImage.value++;
    }


    return {masks, buyMask, ...toRefs(styles), images, currentImage, changeImage}
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.btn {
  color: #fff;
  background-color: #369b6d;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color;
  &--warning {
    background-color: #ffc107;
    color: #000;
  }
  &:disabled {
    cursor: default;
    background-color: #bd2130;
  }
}
.image {
  margin-top: 50px;
  width: 300px;
  display: block;
}
</style>
