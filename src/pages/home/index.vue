<template>
  <div class="page">
    <div class="page-body">
      <control />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page {
  background-color: #f7f8fa;
  height: 100%;
  width: 100%;
  .page-body {
    height: calc(100vh - 56px);
    width: 100%;
    margin-top: 56px;
    overflow: auto;
  }
}
</style>
