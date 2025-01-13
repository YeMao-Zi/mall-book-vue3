import { defineAsyncComponent as i } from "vue";
import c from "./index.vue2.js";
function r(e) {
  const o = /* @__PURE__ */ Object.assign({ "./components/ConfigItem/index.vue": () => import("./components/ConfigItem/index.vue.js"), "./components/SchemaArray/index.vue": () => import("./components/SchemaArray/index.vue.js"), "./components/SchemaColor/index.vue": () => import("./components/SchemaColor/index.vue.js"), "./components/SchemaCube/index.vue": () => import("./components/SchemaCube/index.vue.js"), "./components/SchemaJump/index.vue": () => import("./components/SchemaJump/index.vue.js"), "./components/SchemaNumber/index.vue": () => import("./components/SchemaNumber/index.vue.js"), "./components/SchemaObject/index.vue": () => import("./components/SchemaObject/index.vue.js"), "./components/SchemaSelect/index.vue": () => import("./components/SchemaSelect/index.vue.js"), "./components/SchemaString/index.vue": () => import("./components/SchemaString/index.vue.js"), "./components/SchemaSwitch/index.vue": () => import("./components/SchemaSwitch/index.vue.js"), "./components/SchemaText/index.vue": () => import("./components/SchemaText/index.vue.js"), "./components/SchemaUpload/index.vue": () => import("./components/SchemaUpload/index.vue.js"), "./index.vue": () => import("./index.vue.js") });
  for (const n in o) {
    const m = n.split("/index.vue")[0].split("/").slice(-1)[0], t = o[n];
    e.component(m, i(t));
  }
  e.component("CustomSchemaTemplate", c);
}
const u = (e) => `schema-${e}`;
export {
  u as getComponents,
  r as initCustomSchemaTemplate
};
