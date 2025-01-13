import * as p from "./McBlock/component.js";
import * as r from "./McCarousel/component.js";
import * as a from "./McContainer/component.js";
import * as l from "./McCube/component.js";
import * as f from "./McImage/component.js";
import * as u from "./McNotice/component.js";
import * as j from "./McTab/component.js";
import * as d from "./McTitle/component.js";
import { reactive as M } from "vue";
function h() {
  const t = M({
    fields: {},
    // 字段配置项
    initializing: []
    // 提取字段组成组件属性
  }), o = /* @__PURE__ */ Object.assign({
    "./McBlock/component.js": p,
    "./McCarousel/component.js": r,
    "./McContainer/component.js": a,
    "./McCube/component.js": l,
    "./McImage/component.js": f,
    "./McNotice/component.js": u,
    "./McTab/component.js": j,
    "./McTitle/component.js": d
  });
  return Object.keys(o).forEach((n) => {
    const [, c] = n.split("/"), i = o[n];
    let e = {
      component: c,
      ...i.default
    };
    t.fields[c] = e.fields, t.initializing.push($(e));
  }), t;
}
function $(t) {
  let {
    component: o,
    name: n,
    icon: c,
    fields: i,
    children: e
  } = t, m = {
    component: o,
    name: n,
    icon: c,
    children: e
  };
  return s(i, m), m;
}
function s(t, o) {
  for (let n in t) {
    let {
      type: c,
      value: i,
      child: e
    } = t[n];
    c == "object" ? (o[n] = {}, e && s(e, o[n])) : o[n] = i;
  }
  return o;
}
export {
  $ as initDefaulValue,
  s as setDefaultValue,
  h as useSchema
};
