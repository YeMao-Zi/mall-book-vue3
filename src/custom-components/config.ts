import { reactive, defineAsyncComponent, type App } from "vue";
import type {
  Initial,
  Fields,
  InitializingItem,
  Schema,
} from "@/types/control";

// 获取所有自定义组件schema
export function useSchema() {
  const initial = reactive<Initial>({
    fields: {}, // 字段配置项
    initializing: [], // 提取字段组成组件属性
  });
  const files = import.meta.glob("./Mc*/component.json", { eager: true });
  Object.keys(files).forEach((key) => {
    const [, name] = key.split("/");
    const module = files[key] as any;
    let config = { component: name, ...module.default };
    initial.fields[name] = config.fields;
    initial.initializing.push(initDefaulValue(config));
  });
  console.log(initial, "initial");
  return initial;
}

// 初始化组件初始数据
function initDefaulValue(config: Schema & { component: string }) {
  let { component, name, icon, fields, children } = config;
  let temp = { component, name, icon, children };
  setDefaultValue(fields, temp);
  return temp;
}

// 递归设置各层级初始数据
function setDefaultValue(fields: Fields, initializing: InitializingItem) {
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
export function globalComponents(app: App<Element>) {
  const requireModules = import.meta.glob("@/custom-components/**/index.vue");
  for (const path in requireModules) {
    const [, name] = path.split("/custom-components/");
    const result = name.replace("/index.vue", "");
    const modulesConent: any = requireModules[path];
    app.component(result, defineAsyncComponent(modulesConent));
  }
}
