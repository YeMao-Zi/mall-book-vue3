<script setup lang="ts">
import { widgets, page } from "./test";
import customPlatform from "@mobilecustom/editor";
// import customPlatform from "../../custom-editor/src/index";
import { customComponent } from "@mobilecustom/components";
// import { customComponent } from "../../custom-components/src/customComponent/index";
</script>

<template>
  <div class="pb-5 bg-cyan-200">123</div>
  <!-- <customComponent :widgets="widgets" :page="page" /> -->
  <customPlatform />
</template>

<style scoped></style>
