import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import "@/style/index.css";
import "tailwindcss/tailwind.css";
import "@arco-design/web-vue/dist/arco.css";
import "@mobilecustom/components/lib/style.css";
import { initCustomPlatform } from "./custom-platform";
import install from "@mobilecustom/components";
// import { test } from "./utils/index";

// test();
createApp(App)
  .use(initCustomPlatform)
  .use(install)
  .use(ArcoVue, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: "arco",
  })
  .mount("#app");
