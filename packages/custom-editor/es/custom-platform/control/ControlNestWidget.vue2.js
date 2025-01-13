import { defineComponent as p, mergeModels as c, useModel as m, resolveComponent as f, openBlock as t, createBlock as r, unref as w, normalizeClass as _, withCtx as s, createElementBlock as n, Fragment as C, renderList as h, resolveDynamicComponent as v, mergeProps as k, createCommentVNode as d } from "vue";
import W from "./WidgetShape.vue.js";
import { VueDraggable as y } from "../../node_modules/.pnpm/vue-draggable-plus@0.5.4_@types_sortablejs@1.15.8/node_modules/vue-draggable-plus/dist/vue-draggable-plus.js";
const B = {
  key: 0,
  class: "placeBox"
}, M = /* @__PURE__ */ p({
  __name: "ControlNestWidget",
  props: /* @__PURE__ */ c({
    isWidget: {
      type: Boolean,
      default: !1
    }
  }, {
    widgets: {
      required: !0
    },
    widgetsModifiers: {}
  }),
  emits: ["update:widgets"],
  setup(a) {
    const o = m(a, "widgets");
    return (i, l) => {
      const u = f("ControlNestWidget", !0);
      return t(), r(w(y), {
        modelValue: o.value,
        "onUpdate:modelValue": l[0] || (l[0] = (e) => o.value = e),
        group: "itxst",
        sort: !0,
        animation: 500,
        class: _([i.isWidget ? "nest-child" : "nest-area"])
      }, {
        default: s(() => [(t(!0), n(C, null, h(o.value, (e) => (t(), r(W, {
          key: e.id,
          widget: e
        }, {
          default: s(() => [(t(), r(v(e.component), k({
            ref_for: !0
          }, e), {
            default: s(() => [e.children ? (t(), r(u, {
              key: 0,
              widgets: e.children,
              "onUpdate:widgets": (g) => e.children = g,
              "is-widget": ""
            }, null, 8, ["widgets", "onUpdate:widgets"])) : d("", !0)]),
            _: 2
          }, 1040))]),
          _: 2
        }, 1032, ["widget"]))), 128)), o.value.length ? d("", !0) : (t(), n("div", B))]),
        _: 1
      }, 8, ["modelValue", "class"]);
    };
  }
});
export {
  M as default
};
