# Vue3 Progress Bar

![npm license](https://img.shields.io/npm/l/@ctechhindi/vue3-progress-bar.svg)
![npm download](https://img.shields.io/npm/dm/@ctechhindi/vue3-progress-bar.svg)
![GitHub top language](https://img.shields.io/github/languages/top/ctechhindi/vue3-progress-bar.svg)
![GitHub issues](https://img.shields.io/github/issues/ctechhindi/vue3-progress-bar.svg)
[![npm package](https://img.shields.io/npm/v/@ctechhindi/vue3-progress-bar.svg)](https://www.npmjs.com/package/@ctechhindi/vue3-progress-bar)

> A infinite progress bar for vue 3

- [Demo](https://vue3-progress-bar.netlify.app/)
- [GitHub](https://github.com/ctechhindi/Vue3-Progress-Bar)

## Requirements

- Vue.js `^3.0.0`

## Installation

### npm

```
npm i @ctechhindi/vue3-progress-bar
```

## Usage

**`main.js`**

```js
// Load
import Vue3ProgressBar from "@ctechhindi/vue3-progress-bar";
app.use(Vue3ProgressBar, {
  // "height": "5px",
  // "customStyle": {
  //   width: "100 %",
  //   height: "100 %",
  //   position: "absolute",
  //   background: "linear-gradient(45deg, #da7748, #d11111)",
  //   left: "0 %",
  // },
});
```

**`App.vue`**

```vue
<!-- Composition API -->

<script setup>
import { onMounted, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const progress = inject("progress");

router.beforeEach((to, from, next) => {
  progress.start();
  next();
});

router.afterEach((to, from) => {
  // progress.finish();
});

onMounted(async () => {
  // progress.finish();
});
</script>

<template>
  <Vue3ProgressBar></Vue3ProgressBar>
  <RouterView />
</template>
```

```vue
<!-- Options API -->
<template>
  <div id="app">
    <Vue3ProgressBar></Vue3ProgressBar>
    <RouterView />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$progress.finish();
  },
  created() {
    this.$progress.start();

    this.$router.beforeEach((to, from, next) => {
      this.$progress.start();
      next();
    });

    this.$router.afterEach((to, from) => {
      this.$progress.finish();
    });
  },
};
</script>
```

# License

[MIT License](https://opensource.org/licenses/MIT)
