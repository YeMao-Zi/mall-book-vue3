import * as p from "./McBlock/component.js";
import * as r from "./McCarousel/component.js";
import * as u from "./McContainer/component.js";
import * as a from "./McCube/component.js";
import * as l from "./McImage/component.js";
import * as f from "./McNotice/component.js";
import * as d from "./McTab/component.js";
import * as M from "./McTitle/component.js";
import { reactive as v, defineAsyncComponent as j } from "vue";
function b() {
  const o = v({
    fields: {},
    // 字段配置项
    initializing: []
    // 提取字段组成组件属性
  }), e = /* @__PURE__ */ Object.assign({ "./McBlock/component.js": p, "./McCarousel/component.js": r, "./McContainer/component.js": u, "./McCube/component.js": a, "./McImage/component.js": l, "./McNotice/component.js": f, "./McTab/component.js": d, "./McTitle/component.js": M });
  return Object.keys(e).forEach((n) => {
    const [, c] = n.split("/"), i = e[n];
    let t = { component: c, ...i.default };
    o.fields[c] = t.fields, o.initializing.push(x(t));
  }), o;
}
function x(o) {
  let { component: e, name: n, icon: c, fields: i, children: t } = o, m = { component: e, name: n, icon: c, children: t };
  return s(i, m), m;
}
function s(o, e) {
  for (let n in o) {
    let { type: c, value: i, child: t } = o[n];
    c == "object" ? (e[n] = {}, t && s(t, e[n])) : e[n] = i;
  }
  return e;
}
function $(o) {
  const e = /* @__PURE__ */ Object.assign({ "./McBlock/index.vue": () => import("./McBlock/index.vue.js"), "./McCarousel/index.vue": () => import("./McCarousel/index.vue.js"), "./McContainer/index.vue": () => import("./McContainer/index.vue.js"), "./McCube/index.vue": () => import("./McCube/index.vue.js"), "./McImage/index.vue": () => import("./McImage/index.vue.js"), "./McNotice/index.vue": () => import("./McNotice/index.vue.js"), "./McTab/index.vue": () => import("./McTab/index.vue.js"), "./McTitle/index.vue": () => import("./McTitle/index.vue.js"), "./Preview/index.vue": () => import("./Preview/index.vue.js"), "./customComponent/index.vue": () => import("./customComponent/index.vue.js") });
  for (const n in e) {
    const [, c] = n.split("./"), i = c.replace("/index.vue", ""), t = e[n];
    o.component(i, j(t));
  }
}
const h = (o, ...e) => {
  o(...e);
};
export {
  $ as initCustomComponents,
  x as initDefaulValue,
  s as setDefaultValue,
  h as useOperabilityCall,
  b as useSchema
};
