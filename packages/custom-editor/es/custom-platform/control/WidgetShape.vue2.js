import { defineComponent as w, inject as h, ref as C, useTemplateRef as c, onMounted as y, openBlock as s, createElementBlock as r, withModifiers as f, unref as d, createCommentVNode as v, createElementVNode as k, normalizeStyle as S, createBlock as $, toDisplayString as b, renderSlot as z } from "vue";
import { Icon as B } from "../../node_modules/.pnpm/@iconify_vue@4.1.2_vue@3.5.12_typescript@5.7.3_/node_modules/@iconify/vue/dist/iconify.js";
import { ControlInject as N } from "../../types/platform.js";
const R = {
  key: 0,
  class: "shape-solid event-none"
}, E = {
  key: 1
}, D = /* @__PURE__ */ w({
  __name: "WidgetShape",
  props: {
    widget: {}
  },
  setup(I) {
    const o = h(N), p = C(!1), a = c("shape"), l = (e) => {
      var t, i;
      return e === ((i = (t = o == null ? void 0 : o.curComponent) == null ? void 0 : t.value) == null ? void 0 : i.id);
    }, g = () => {
      if (!a.value) return;
      let [e] = window.getComputedStyle(a.value).width.split("px");
      return `${-(380 - Number(e)) / 2 - 86}px`;
    };
    return y(() => {
      p.value = !0;
    }), (e, t) => (s(), r("div", {
      ref: "shape",
      class: "shape",
      onClick: t[1] || (t[1] = f((i) => {
        var n;
        return (n = d(o)) == null ? void 0 : n.setCurComponent(e.widget);
      }, ["stop"]))
    }, [l(e.widget.id) ? (s(), r("div", R)) : v("", !0), t[2] || (t[2] = k("div", {
      class: "shape-dashed event-none"
    }, null, -1)), p.value ? (s(), r("div", {
      key: 1,
      class: "shape-tab",
      style: S({
        right: g(),
        zIndex: l(e.widget.id) ? 200 : 100
      })
    }, [l(e.widget.id) ? (s(), $(d(B), {
      key: 0,
      class: "cursor-pointer hover:text-blue-600",
      style: {
        "font-size": "16px"
      },
      icon: "ep:delete",
      onClick: t[0] || (t[0] = f((i) => {
        var n, u, m;
        return (m = d(o)) == null ? void 0 : m.deleteComponent(e.widget.id, (u = (n = d(o)) == null ? void 0 : n.widgets) == null ? void 0 : u.value);
      }, ["stop"]))
    })) : (s(), r("span", E, b(e.widget.name), 1))], 4)) : v("", !0), z(e.$slots, "default", {}, void 0, !0)], 512));
  }
});
export {
  D as default
};
