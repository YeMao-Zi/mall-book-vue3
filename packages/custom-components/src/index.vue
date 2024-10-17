<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-10-10 13:52:04
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-10-11 14:19:54
 * @FilePath: \mall-book-vue3\src\custom-components\index.vue
 * @Description: 页面预览
-->
<template>
  <div class="page" :style="page.styles">
    <Preview :widgets="widgets" :onClick="onClick" />
  </div>
</template>

<script setup lang="ts">
import type { ComponentOptions, onClick } from "./type";
interface Props {
  widgets: ComponentOptions[];
  page: ComponentOptions;
  onClick?: onClick;
}
const { page, widgets, onClick } = defineProps<any>();
</script>

<style>
.page {
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
