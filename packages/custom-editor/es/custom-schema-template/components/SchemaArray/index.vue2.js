/* empty css                                                                                                                                        */
/* empty css                                                                                                                                               */
import { defineComponent as C, mergeModels as b, useModel as h, openBlock as n, createElementBlock as d, createElementVNode as a, toDisplayString as B, createVNode as i, unref as p, withCtx as c, renderSlot as x, Fragment as f, renderList as v, createBlock as D, resolveDynamicComponent as M, mergeProps as N, createTextVNode as S } from "vue";
import { VueDraggable as U } from "../../../node_modules/.pnpm/vue-draggable-plus@0.5.4_@types_sortablejs@1.15.8/node_modules/vue-draggable-plus/dist/vue-draggable-plus.js";
import { getComponents as E } from "../../config.js";
import { randomString as I } from "../../../utils/index.js";
import $ from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/button/index.js";
const w = {
  class: "p-3 bg-slate-200 text-slate-600"
}, F = {
  class: "p-1 my-2"
}, L = ["onClick"], H = /* @__PURE__ */ C({
  __name: "index",
  props: /* @__PURE__ */ b({
    label: {},
    edit: {
      default: !1
    },
    schema: {}
  }, {
    modelValue: {
      default: []
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(V) {
    const l = h(V, "modelValue"), g = () => {
      l.value.push({
        id: I()
      });
    }, _ = (t) => {
      var e;
      l.value = (e = l.value) == null ? void 0 : e.filter((r) => r.id !== t);
    };
    return (t, e) => {
      const r = $;
      return n(), d("div", null, [a("div", w, [a("span", null, B(t.label), 1)]), a("div", F, [i(p(U), {
        modelValue: l.value,
        "onUpdate:modelValue": e[0] || (e[0] = (o) => l.value = o)
      }, {
        default: c(() => [t.edit ? x(t.$slots, "default", {
          key: 0
        }, void 0, !0) : (n(!0), d(f, {
          key: 1
        }, v(l.value, (o) => {
          var s;
          return n(), d("div", {
            key: o.id,
            class: "nav-item"
          }, [(n(!0), d(f, null, v((s = t.schema) == null ? void 0 : s.child, (u, m, k) => (n(), D(M(p(E)(u.type)), N({
            key: k,
            modelValue: o[m],
            "onUpdate:modelValue": (y) => o[m] = y,
            ref_for: !0
          }, u), null, 16, ["modelValue", "onUpdate:modelValue"]))), 128)), a("div", {
            class: "nav-delete",
            onClick: (u) => _(o.id)
          }, "x", 8, L)]);
        }), 128))]),
        _: 3
      }, 8, ["modelValue"]), i(r, {
        long: "",
        type: "outline",
        onClick: g
      }, {
        default: c(() => e[1] || (e[1] = [S("新增数据")])),
        _: 1
      })])]);
    };
  }
});
export {
  H as default
};
