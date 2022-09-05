"use strict";

import Vue3ProgressBar from "./vue3-progress-bar.vue";
import cthBus from "./cthBus";

function install(app, options = {}) {
  let progress = {
    start: () => {
      cthBus.__start();
    },
    finish: () => {
      cthBus.__finish();
    },
  };

  cthBus.__customization(options);
  // Vue Component
  app.component("Vue3ProgressBar", Vue3ProgressBar);
  app.provide('progress', progress)
}

export default { install };