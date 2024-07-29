<template>
  <div class="control">
    <!-- 物料面板 -->
    <div class="control-material">
      <VueDraggable></VueDraggable>
    </div>
    <!-- 展示区域 -->
    <div class="control-page">
      <div class="panel">1</div>
    </div>
    <!-- 物料配置 -->
    <div class="control-config">2</div>
  </div>
</template>

<script setup lang="ts">
import { registerComponentsSchema } from "@/custom-components/config";
registerComponentsSchema();
</script>

<style lang="scss" scoped>
.control {
  display: flex;
  height: 100%;
  .control-material {
    width: 236px;
    padding: 10px 20px;
    background: #fff;
  }
  .control-page {
    display: flex;
    justify-content: center;
    flex: 1;
    height: 100%;
    overflow: auto;
    .panel {
      width: 375px;
      margin: 50px auto;
      background: #fff;
      box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
    }
  }
  .control-config {
    width: 360px;
    overflow: auto;
    animation-duration: 0.2s;
    padding: 10px;
    background: #fff;
  }
}
</style>
