<template>
  <div class="vue3-progress-bar" :style="styleBar">
    <div class="loaderBox" :style="customStyle"></div>
  </div>
</template>

<script>
import cthBus from "./cthBus";

export default {
  name: "Vue3ProgressBar",
  data() {
    return {
      customStyle: "",
      styleBar: {
        height: "5px",
        display: "none",
      },
    };
  },
  created() {
    cthBus.setEventHandlers({
      start: () => {
        this.styleBar.display = "block";
      },
      finish: () => {
        this.styleBar.display = "none";
      },
      customization: (options) => {
        this.modifyBar(options);
      },
    });
  },
  methods: {
    modifyBar(options) {
      if (options.height) this.styleBar.height = options.height
      if (options.customStyle) this.customStyle = options.customStyle
    },
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
