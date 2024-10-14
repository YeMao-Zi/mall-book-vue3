import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import "@/style/index.css";
import "tailwindcss/tailwind.css";
import "@arco-design/web-vue/dist/arco.css";
import { initCustomPlatform } from "@/custom-platform";
// import { test } from "./utils/index";

// test();
createApp(App)
  .use(router)
  .use(initCustomPlatform)

  .use(ArcoVue, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: "arco",
  })
  .mount("#app");
