import { defineComponent as p, ref as d, watch as g, computed as n, openBlock as a, createElementBlock as i, normalizeStyle as c, createCommentVNode as y, createBlock as f, mergeProps as h, withCtx as k, createElementVNode as v, toDisplayString as x } from "vue";
import { getMainStyle as V } from "../utils.js";
import N from "./noticeBar.vue.js";
const S = ["src"], C = /* @__PURE__ */ p({
  name: "McNotice",
  __name: "index",
  props: {
    imageValue: {},
    attrs: {},
    styles: {},
    children: {}
  },
  setup(s) {
    const r = () => Math.random().toString(36).slice(2), l = d(r()), t = s;
    g(() => t, () => {
      l.value = r();
    }, {
      deep: !0
    });
    const m = n(() => {
      const {
        styles: e = {}
      } = t;
      return {
        ...V(e)
      };
    }), u = n(() => {
      const {
        styles: e = {}
      } = t, {
        fontSize: o
      } = e;
      return {
        width: `${o + 4}px`,
        height: `${o + 4}px`
      };
    });
    return (e, o) => (a(), i("div", {
      class: "McNotice",
      style: c(m.value)
    }, [e.imageValue.icon ? (a(), i("img", {
      key: 0,
      class: "notice-ico",
      src: e.imageValue.icon,
      style: c(u.value)
    }, null, 12, S)) : y("", !0), (a(), f(N, h({
      key: l.value
    }, t.attrs), {
      default: k(() => [v("div", null, x(e.imageValue.text), 1)]),
      _: 1
    }, 16))], 4));
  }
});
export {
  C as default
};
