# Vue 3 可视化搭建移动端页面

![image-20250115094235431](https://s2.loli.net/2025/01/15/GVrxZJUYSMip3nq.png)

```js
import "@mobilecustom/editor/lib/editor.css";
import CustomEditor from "@mobilecustom/editor";

createApp(App).use(CustomEditor).mount("#app");
```

```vue
<script setup lang="ts">
import { CustomEditor } from "@mobilecustom/editor";

const onEventClick = (value) => {
  console.log(value, "onEventClick");
};

const handleConfirm = (value) => {
  console.log(value, "handleConfirm");
};
</script>

<template>
  <CustomEditor :onEventClick="onEventClick" @confirm="handleConfirm" />
</template>

<style scoped></style>
```
