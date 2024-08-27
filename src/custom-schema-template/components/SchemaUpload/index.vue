<template>
  <config-item :label="label">
    <div
      class="relative w-[100px] h-[100px] flex justify-center items-center uploader-content"
    >
      <template v-if="model">
        <div class="file-hover">
          <Icon
            style="color: #fff"
            icon="ep:delete"
            @click="handleRemove"
          ></Icon>
        </div>
        <img :src="model" class="avatar" />
      </template>
      <el-upload
        v-else
        :show-file-list="false"
        action="#"
        :accept="accept"
        :http-request="uploadpromise"
        :on-remove="handleRemove"
      >
        <div class="w-[100px] h-[100px] flex justify-center items-center">
          <Icon icon="ep:plus" />
        </div>
      </el-upload>
    </div>
  </config-item>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ConfigItem from "@/components/ConfigItem.vue";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import type { UploadProps, UploadRawFile, UploadUserFile } from "element-plus";

const props = defineProps<{ label: string }>();

const model = defineModel<string>();

// 限制大小
const sizeLimit = ref(8);
// 限制格式
const accept = ref("image/jpeg,image/png,image/gif,image/jpg,image/bmp");

// 检查格式、大小
const listLimit = (file: UploadRawFile) => {
  const typeLimitBool = accept.value
    .split(",")
    .some((_type) => file.type === _type);
  if (!typeLimitBool) {
    ElMessage.error("请上传格式正确的图片");
  }

  const sizeLimitBool = file.size / 1024 / 1024 < sizeLimit.value;
  if (!sizeLimitBool) {
    ElMessage.error(`请使用小于${sizeLimit.value}MB的图片!`);
  }
  let result = sizeLimitBool && typeLimitBool;
  return result;
};

const getBase64 = (file: UploadRawFile): Promise<any> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    let fileResult = "";
    reader.readAsDataURL(file);
    //开始转
    reader.onload = function () {
      //这里其实就是需要的base64格式了
      let Result = reader.result as string;
      //base64数据去头
      // let head = Result.indexOf("4") + 2;
      // fileResult = Result.substring(head, Result.length - head);
      fileResult = Result;
    };
    //转 失败
    reader.onerror = function (error) {
      reject(error);
    };
    //转 结束  咱就 resolve 出去
    reader.onloadend = function () {
      resolve(fileResult);
    };
  });
};

const getFilePath = async (file: UploadRawFile) => {
  model.value = await getBase64(file);
};

const uploadpromise: UploadProps["httpRequest"] = (param) => {
  const file = param.file;
  return new Promise((resolve, reject) => {
    if (listLimit(file)) {
      getFilePath(file);
    } else {
      reject(new Error("格式不正确"));
    }
  });
};

const handleRemove = (file: any) => {
  model.value = "";
};
</script>

<style lang="scss" scoped>
.uploader-content {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);

  .file-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--el-overlay-color-lighter);
    display: none;
  }
}

.uploader-content:hover {
  border-color: var(--el-color-primary);

  .file-hover {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
