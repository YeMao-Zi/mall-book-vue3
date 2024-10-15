<script setup lang="ts">
import { onMounted } from "vue";
import customPlatform from "./custom-platform";

/* 设置 rem 函数 */
function setRem() {
  /* 当前页面宽度缩放比例，可根据自己需要修改 */
  let clientWidth =
    document.documentElement.clientWidth > 540
      ? 375
      : document.documentElement.clientWidth;
  document.documentElement.style.fontSize = clientWidth / 10 + "px";
}

onMounted(() => {
  /* 初始化 rem */
  setRem();
  window.onresize = () => {
    /* 改变窗口大小时重新设置 rem */
    setRem();
  };
});
</script>

<template>
  <customPlatform />
</template>

<style scoped></style>
