import { defineAsyncComponent, type App } from "vue";
import customSchemaTemplate from "./index.vue";

// 注册组件
export function initCustomSchemaTemplate(app: App<Element>) {
  const requireModules = import.meta.glob(
    "../custom-schema-template/**/index.vue",
  );

  for (const path in requireModules) {
    const name = path.split("/index.vue")[0].split("/").slice(-1)[0];
    const modulesConent: any = requireModules[path];
    app.component(name, defineAsyncComponent(modulesConent));
  }
  app.component("CustomSchemaTemplate", customSchemaTemplate);
}

// 组件类型对应
export const getComponents = (type: string) => {
  return `schema-${type}`;
};
