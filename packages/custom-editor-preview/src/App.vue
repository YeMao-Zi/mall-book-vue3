<script setup lang="ts">
import { onMounted } from "vue";
import { widgets, page } from "./test";
import customPlatform from "@mobilecustom/editor";
// import customPlatform from "../../custom-editor/src/index";
import { customComponent } from "@mobilecustom/components";
// import { customComponent } from "../../custom-components/src/customComponent/index";
</script>

<template>
  <customComponent :widgets="widgets" :page="page" />
  <!-- <customPlatform /> -->
</template>

<style scoped></style>
