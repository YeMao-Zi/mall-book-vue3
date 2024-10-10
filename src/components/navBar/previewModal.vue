<template>
  <Teleport to="body">
    <div class="preview-modal" v-if="visible">
      <div class="preview-modal-mask" @click="visible = false"></div>
      <div class="preview-modal-wrap">
        <div class="viewBox">
          <div class="safeTop"></div>
          <div class="phoneContent">
            <customComponent :page="page" :widgets="widgets" />
          </div>
          <div class="safeBottom"></div>
        </div>

        <div class="p-1 flex justify-end gap-1 bg-white">
          <a-button @click="visible = false">取消</a-button>
          <a-button type="primary" @click="handleConfirm">确定</a-button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { provide } from "vue";
import customComponent from "@/custom-components/index.vue";
import { widgets } from "../control/config";
import { page } from "../pageConfig/config";

const visible = defineModel<boolean>();

const handleConfirm = () => {
  console.log(page, "page", widgets);
};

provide("operability", false);
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar:hover {
  display: block;
}

.preview-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1001;
}

.preview-modal-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-mask-bg);
}

.preview-modal-wrap {
  position: relative;
  padding: 10px;
  border-radius: 25px;
  background-color: #fff;
}

.viewBox {
  border-radius: 25px;
  border: 10px solid #000;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .safeTop {
    width: 100%;
    height: 10px;
    background-color: #fff;
  }

  .phoneContent {
    width: 375px;
    height: 700px;
    overflow-y: auto;
  }

  .safeBottom {
    width: 100%;
    height: 10px;
    background-color: #fff;
  }
}
</style>
