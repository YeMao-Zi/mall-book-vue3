import customPlatform from "./index.vue";

import { initCustomSchemaTemplate } from "../custom-schema-template";
import type { App } from "vue";

const initCustomPlatform = (app: App<Element>) => {
  initCustomSchemaTemplate(app);
};

export default customPlatform;

export { initCustomPlatform };
