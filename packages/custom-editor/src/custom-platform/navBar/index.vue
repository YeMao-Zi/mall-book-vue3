<template>
  <div class="w-full h-full flex flex-row-reverse gap-1 items-center px-2">
    <a-button type="primary" @click="onSave">保存</a-button>
  </div>

  <previewModal v-model="previewVisible" />
</template>

<script setup lang="ts">
import previewModal from "./previewModal.vue";
import { ref } from "vue";

const previewVisible = ref(false);
const onSave = () => {
  previewVisible.value = true;
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
