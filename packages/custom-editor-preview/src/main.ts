import { createApp } from "vue";
import App from "./App.vue";
import "@mobilecustom/components/lib/style.css";
import { initCustomPlatform } from "@mobilecustom/editor";
// import { initCustomPlatform } from "../../custom-editor/src/index";
import install from "@mobilecustom/components";
// import install from "../../custom-components/src/index";
createApp(App).use(initCustomPlatform).use(install).mount("#app");
