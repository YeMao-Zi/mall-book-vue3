<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-10-10 13:52:04
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-10-17 17:54:25
 * @FilePath: \mall-book-vue3\src\custom-components\index.vue
 * @Description: 页面预览
-->
<template>
  <customComponents :widgets="widgets" :page="page" :onClick="onClick" />
</template>

<script setup lang="ts">
import type { ComponentOptions, onClick } from "@mobilecustom/components";
import customComponents from "@mobilecustom/components";

interface Props {
  widgets: ComponentOptions[];
  page: ComponentOptions;
  onClick?: onClick;
}
const { page, widgets } = defineProps<Props>();
</script>

<style></style>
