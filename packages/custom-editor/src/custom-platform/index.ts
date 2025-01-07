import customPlatform from "./index.vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "@mobilecustom/components/lib/style.css";
import install from "@mobilecustom/components";
import { initCustomSchemaTemplate } from "../custom-schema-template";
import type { App } from "vue";

const initCustomPlatform = (app: App<Element>) => {
  initCustomSchemaTemplate(app);
  install(app);
  ArcoVue.install(app, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: "arco",
  });
};

export default customPlatform;

export { initCustomPlatform };
