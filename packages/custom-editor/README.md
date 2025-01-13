# Vue 3 可视化搭建移动端页面

```js
import "@mobilecustom/editor/lib/editor.css";
import CustomEditor from "@mobilecustom/editor";

createApp(App).use(CustomEditor).mount("#app");
```

```vue
<script setup lang="ts">
import CustomEditor from "@mobilecustom/editor";
</script>

<template>
  <CustomEditor />
</template>

<style scoped></style>
```
