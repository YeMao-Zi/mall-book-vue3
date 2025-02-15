import { reactive, defineAsyncComponent, type App } from "vue";
import type { Initial, Fields, InitializingItem, Schema } from "./type";

// 获取所有自定义组件schema
export function useSchema() {
  const initial = reactive<Initial>({
    fields: {}, // 字段配置项
    initializing: [], // 提取字段组成组件属性
  });
  const files = import.meta.glob("./Mc*/component.js", { eager: true });
  Object.keys(files).forEach((key) => {
    const [, name] = key.split("/");
    const module = files[key] as any;
    let config = { component: name, ...module.default };
    initial.fields[name] = config.fields;
    initial.initializing.push(initDefaulValue(config));
  });
  return initial;
}

// 初始化组件初始数据
// 将 fields 中的属性提取出来向上合并
export function initDefaulValue(config: Schema & { component: string }) {
  let { component, name, icon, fields, children } = config;
  let temp = { component, name, icon, children };
  setDefaultValue(fields, temp);
  return temp;
}

// 递归设置各层级初始数据
// 将 fields 中 type 为 object 的对象中的 child 属性合并到该对象中
export function setDefaultValue(
  fields: Fields,
  initializing: InitializingItem,
) {
  for (let key in fields) {
    let { type, value, child } = fields[key];
    if (type == "object") {
      initializing[key] = {};
      child && setDefaultValue(child, initializing[key]);
    } else {
      initializing[key] = value;
    }
  }
  return initializing;
}

// 注册组件
export function initCustomComponents(app: App<Element>) {
  const requireModules = import.meta.glob("../src/**/index.vue");
  for (const path in requireModules) {
    const [, name] = path.split("./");
    const result = name.replace("/index.vue", "");
    const modulesConent: any = requireModules[path];
    app.component(result, defineAsyncComponent(modulesConent));
  }
}

export const useOperabilityCall: <T extends (...args: any[]) => void>(
  fn: T,
  ...args: Parameters<T>
) => void = (fn, ...args) => {
  fn(...args);
};
