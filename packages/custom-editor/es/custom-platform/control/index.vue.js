import { defineComponent as F, ref as z, computed as p, provide as U, openBlock as a, createElementBlock as f, createElementVNode as n, createVNode as m, unref as i, withCtx as g, Fragment as j, renderList as B, toDisplayString as v, isRef as h, createBlock as x } from "vue";
import { VueDraggable as E } from "../../node_modules/.pnpm/vue-draggable-plus@0.5.4_@types_sortablejs@1.15.8/node_modules/vue-draggable-plus/dist/vue-draggable-plus.js";
import { Icon as N } from "../../node_modules/.pnpm/@iconify_vue@4.1.2_vue@3.5.12_typescript@5.7.3_/node_modules/@iconify/vue/dist/iconify.js";
import "../../packages/custom-components/es/McBlock/index.js";
import "../../packages/custom-components/es/McCarousel/index.js";
import "../../packages/custom-components/es/McContainer/index.js";
import "../../packages/custom-components/es/McCube/index.js";
import "../../packages/custom-components/es/McTab/index.js";
import "../../packages/custom-components/es/McImage/index.js";
import "../../packages/custom-components/es/McNotice/index.js";
import "../../packages/custom-components/es/McTitle/index.js";
import "../../packages/custom-components/es/Preview/index.js";
import "../../packages/custom-components/es/customComponent/index.js";
import { useSchema as D } from "../../packages/custom-components/es/config.js";
import { deepClone as _, randomString as I } from "../../utils/index.js";
import { ControlInject as P } from "../../types/platform.js";
import w from "../../custom-schema-template/index.vue2.js";
import { page as u, pageShemaField as R } from "../pageConfig/config.js";
import L from "../pageConfig/index.vue.js";
import W from "./ControlNestWidget.vue.js";
import { widgets as d } from "./config.js";
const $ = {
  class: "flex h-full text-[16px]"
}, q = {
  class: "w-[236px] bg-white p-5"
}, A = {
  class: "text-[12px]"
}, G = {
  class: "flex justify-center flex-1 h-full overflow-auto"
}, H = {
  class: "w-full"
}, J = {
  class: "w-[375px] my-[50px] mx-auto bg-white shadow-lg"
}, K = {
  class: "control-config w-[360px] overflow-y-scroll p-5 bg-white"
}, M = {
  class: "pb-5 mb-5 font-bold text-[20px] border-b-2"
}, ve = /* @__PURE__ */ F({
  __name: "index",
  setup(O) {
    const r = D(), t = z(), b = p(() => t != null && t.value ? r.fields[t == null ? void 0 : t.value.component] : void 0), y = (l) => {
      const {
        children: o
      } = l;
      return {
        ..._(l),
        id: I(),
        children: _(o)
      };
    }, V = (l) => {
      t.value = l;
    }, c = (l, o = d.value) => {
      let s = o.reduce((e, S, k) => S.id == l ? k : e, -1);
      s >= 0 ? o.splice(s, 1) : o.filter((e) => e.children).forEach((e) => {
        c(l, e.children);
      }), t.value = void 0;
    }, C = () => {
      t.value = void 0;
    };
    return U(P, {
      initial: r,
      widgets: p(() => d.value),
      curComponent: p(() => t.value),
      setCurComponent: V,
      deleteComponent: c
    }), (l, o) => {
      var s;
      return a(), f("div", $, [n("div", q, [m(i(E), {
        ref: "draggableRef",
        modelValue: i(r).initializing,
        "onUpdate:modelValue": o[0] || (o[0] = (e) => i(r).initializing = e),
        group: {
          name: "itxst",
          pull: "clone"
        },
        sort: !1,
        animation: 300,
        clone: y
      }, {
        default: g(() => [(a(!0), f(j, null, B(i(r).initializing, (e) => (a(), f("div", {
          key: e.name,
          class: "p-3 inline-flex flex-col items-center justify-center gap-1 w-6/12 cursor-pointer hover:bg-blue-600 hover:text-white"
        }, [m(i(N), {
          style: {
            "font-size": "26px"
          },
          icon: e.icon
        }, null, 8, ["icon"]), n("span", A, v(e.name), 1)]))), 128))]),
        _: 1
      }, 8, ["modelValue"])]), n("div", G, [n("div", H, [n("div", J, [m(L, {
        styles: i(u).styles,
        onPageSetting: C
      }, {
        default: g(() => [m(W, {
          widgets: i(d),
          "onUpdate:widgets": o[1] || (o[1] = (e) => h(d) ? d.value = e : null)
        }, null, 8, ["widgets"])]),
        _: 1
      }, 8, ["styles"])])])]), n("div", K, [n("div", M, v(((s = t.value) == null ? void 0 : s.name) || "页面"), 1), t.value ? (a(), x(w, {
        key: 0,
        modelValue: t.value,
        "onUpdate:modelValue": o[2] || (o[2] = (e) => t.value = e),
        "shema-field": b.value
      }, null, 8, ["modelValue", "shema-field"])) : (a(), x(w, {
        key: 1,
        modelValue: i(u),
        "onUpdate:modelValue": o[3] || (o[3] = (e) => h(u) ? u.value = e : null),
        "shema-field": i(R)
      }, null, 8, ["modelValue", "shema-field"]))])]);
    };
  }
});
export {
  ve as default
};
