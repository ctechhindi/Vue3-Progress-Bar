# Vue3 Progress Bar

A infinite progress bar for vue 3

- [GitHub](https://github.com/ctechhindi/Vue3-Progress-Bar)

## Installation

### npm

```
npm i @ctechhindi/vue3-progress-bar
```

## Usage

**`main.js`**

```js
// Load
import Vue3ProgressBar from "vue3-progress-bar";
app.use(Vue3ProgressBar, {
  // "height": "5px",
  // "customStyle": {
  //   width: "100 %",
  //   height: "100 %",
  //   position: "absolute",
  //   background: "linear-gradient(45deg, #da7748, #d11111)",
  //   left: "0 %",
  // },
})
```

**`App.vue`**

```vue
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

# License

[MIT License](https://opensource.org/licenses/MIT)