<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-10-10 13:52:04
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-10-10 16:25:29
 * @FilePath: \mall-book-vue3\src\custom-components\index.vue
 * @Description: 页面预览
-->
<template>
  <div class="page" :style="page.styles">
    <Preview :widgets="widgets" />
  </div>
</template>

<script setup lang="ts">
import type { ComponentOptions } from "./type";
interface Props {
  widgets: ComponentOptions[];
  page: ComponentOptions;
}
const { page, widgets } = defineProps<Props>();
</script>

<style>
.page {
  width: 100%;
  height: 100%;
}
</style>
