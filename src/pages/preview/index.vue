<template>
  <div class="preview">
    <customComponent :page="page" :widgets="widgets" :onClick="onClick" />
  </div>
</template>

<script setup lang="ts">
import type { ComponentOptions } from "@/types/control";
import customComponent from "@/custom-components/index.vue";
import { onBeforeMount, ref } from "vue";

const page = ref<ComponentOptions>({
  id: "pageconfig",
  styles: {},
  component: "",
});
const widgets = ref<ComponentOptions[]>([]);

onBeforeMount(() => {
  window.addEventListener("message", (event) => {
    page.value = event.data.page;
    widgets.value = event.data.widgets;
  });
});

const onClick = (options: any) => {
  console.log(options, "options");
  //   const { item = {}, type } = options;
  //   const { jumpPath } = item;
  //   if (!jumpPath) return;
  //   if (jumpPath.startsWith("http")) {
  //     location.href = jumpPath;
  //   } else {
  //     location.href =
  //       location.origin + location.pathname + location.hash.slice(0, -1); + jumpPath;
  //   }
};
</script>

<style>
.preview {
  width: 100vw;
  height: 0;
  min-height: 100vh;
  min-height: 100dvh;
}
</style>
