<template>
  <div class="container">
    <AwsomeButton text="Log in" @click="isModalVisible = true"/>
    <teleport to="#modal">
      <AwsomeModal v-show="isModalVisible"/>
    </teleport>
    <AwsomeFooter/>
  </div>
</template>

<script>
import AwsomeButton from "@/components/AwsomeButton.vue";
import AwsomeFooter from "@/components/AwsomeFooter.vue";
import AwsomeModal from "@/components/AwsomeModal.vue";
import {ref} from "vue";

export default {
  name: "MyAwsomeComponent",
  components: {
    AwsomeButton,
    AwsomeFooter,
    AwsomeModal
  },
  setup() {
    const isModalVisible = ref(false);



    return {isModalVisible}
  }
};
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 20px;
  height: 20px;
}

.squere {
  width: 50px;
  height: 50px;
  background-color: red;
}

.error {
  color: #cd3727;
}
</style>
