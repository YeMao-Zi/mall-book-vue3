<template>
  <div>
    <div class="bg-cyan-200" style="color: aquamarine">333</div>
    <div class="page">
      <div class="page-header">
        <navBar />
      </div>
      <div class="page-body">
        <control />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import control from "./control/index.vue";
import navBar from "./navBar/index.vue";
</script>

<style lang="scss" scoped>
.page {
  background-color: #f7f8fa;
  height: 100%;
  width: 100%;
  .page-header {
    height: 56px;
    background-color: #fff;
    margin-bottom: 5px;
  }
  .page-body {
    height: calc(100vh - 61px);
    width: 100%;
    // margin-top: 56px;
    overflow: auto;
  }
}
</style>
