import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/style/index.css";
import "tailwindcss/tailwind.css";
import { globalComponents } from "@/utils/config";
// import { test } from "./utils/index";

// test();
createApp(App).use(router).use(globalComponents).mount("#app");
