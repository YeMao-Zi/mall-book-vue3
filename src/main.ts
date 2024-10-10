import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import "@/style/index.css";
import "tailwindcss/tailwind.css";
import "@arco-design/web-vue/dist/arco.css";
import { globalComponents as customComponents } from "@/custom-components/config";
import { globalComponents as customSchemaTemplate } from "@/custom-schema-template/config";
import { register } from "swiper/element/bundle";
register();
// import { test } from "./utils/index";

// test();
createApp(App)
  .use(router)
  .use(customComponents)
  .use(customSchemaTemplate)
  .use(ArcoVue, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: "arco",
  })
  .mount("#app");
