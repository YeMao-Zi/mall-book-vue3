import customPlatform from "./index.vue";
import { initCustomComponents } from "@mobilecustom/components";
import { initCustomSchemaTemplate } from "../custom-schema-template";
import type { App } from "vue";

const initCustomPlatform = (app: App<Element>) => {
  initCustomComponents(app);
  initCustomSchemaTemplate(app);
};

export default customPlatform;

export { initCustomPlatform };
