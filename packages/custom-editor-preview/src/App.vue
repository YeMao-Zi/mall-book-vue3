<script setup lang="ts">
import { onMounted } from "vue";
import { widgets, page } from "./test";
import { CustomEditor } from "@mobilecustom/editor";
// import { CustomEditor } from "../../custom-editor/src/index";
import { customComponent } from "@mobilecustom/components";
// import { customComponent } from "../../custom-components/src/customComponent/index";

const onEventClick = (value: any) => {
  console.log(value, "onEventClick");
};

const handleConfirm = (value: any) => {
  console.log(value, "handleConfirm");
};
</script>

<template>
  <!-- <customComponent :widgets="widgets" :page="page" /> -->
  <CustomEditor :onEventClick="onEventClick" @confirm="handleConfirm" />
</template>

<style scoped></style>
