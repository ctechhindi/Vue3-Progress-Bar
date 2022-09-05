import { reactive } from 'vue';
import Vue3ProgressBar from "./vue3-progress-bar.vue";

function install(app, options = {}) {

  // Default Bar Style
  let styleBar = {
    height: "10px",
    display: "none",
  };

  // Bar Height
  if (options.height) styleBar.height = options.height;

  let progress = {
    start: () => {
      VUE3_PROGRESS_BAR_DATA.styleBar.display = "block";
    },
    finish: () => {
      VUE3_PROGRESS_BAR_DATA.styleBar.display = "none";
    },
  };

  const VUE3_PROGRESS_BAR_DATA = reactive({
    styleBar: styleBar,
    options: options
  });

  // Vue Component
  app.provide('VUE3_PROGRESS_BAR_DATA', VUE3_PROGRESS_BAR_DATA);
  app.provide('progress', progress)
  app.component("Vue3ProgressBar", Vue3ProgressBar);
}

export default { install };