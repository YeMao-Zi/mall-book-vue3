import { defineAsyncComponent, type App } from "vue";
import customSchemaTemplate from "./index.vue";

// 注册组件
export function globalComponents(app: App<Element>) {
  const requireModules = import.meta.glob(
    "@/custom-schema-template/**/index.vue",
  );

  for (const path in requireModules) {
    const name = path.split("/index.vue")[0].split("/").slice(-1)[0];
    const modulesConent: any = requireModules[path];
    console.log(name, "name", modulesConent);
    app.component(name, defineAsyncComponent(modulesConent));
  }
  app.component("CustomSchemaTemplate", customSchemaTemplate);
}
