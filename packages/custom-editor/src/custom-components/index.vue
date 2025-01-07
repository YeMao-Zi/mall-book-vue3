<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-10-10 13:52:04
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2025-01-07 13:33:48
 * @FilePath: \mall-book-vue3\src\custom-components\index.vue
 * @Description: 页面预览
-->

<template>
  <customComponent :widgets="widgets" :page="page" :onClick="onClick" />
</template>

<script setup lang="ts">
import type { ComponentOptions, EventClick } from "@mobilecustom/components";
import { customComponent } from "@mobilecustom/components";

interface Props {
  widgets: ComponentOptions[];
  page: { styles?: Record<string, any> };
  onClick?: EventClick;
}
const { page, widgets, onClick } = defineProps<Props>();
</script>

<style></style>
