<template>
  <div class="vue3-progress-bar" :style="styleBar">
    <div class="loaderBox" :style="customStyle"></div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Vue3ProgressBar",
  setup() {
    let bar = inject("VUE3_PROGRESS_BAR_DATA");
    let customStyle = "";
    if (bar.options.customStyle) customStyle = bar.options.customStyle;
    let styleBar = bar.styleBar;
    return {
      customStyle,
      styleBar,
    };
  },
};
</script>

<style scoped>
.vue3-progress-bar {
  position: relative;
  overflow: hidden;
}

.loaderBox {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(45deg, #b6b5ff, #ff9797);
  left: 0%;
}

.loaderBox {
  left: -100%;
  animation: load 3s linear infinite;
}

@keyframes load {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
