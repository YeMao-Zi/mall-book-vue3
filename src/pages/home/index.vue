<template>
  <div>
    <div class="page">
      <!-- <div class="page-header">
      <nav-bar />
    </div> -->
      <div class="page-body">
        <control />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page {
  background-color: #f7f8fa;
  height: 100%;
  width: 100%;
  .page-header {
    height: 56px;
  }
  .page-body {
    height: calc(100vh - 56px);
    width: 100%;
    margin-top: 56px;
    overflow: auto;
  }
}
</style>
