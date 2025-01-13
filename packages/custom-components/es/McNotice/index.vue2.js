import { defineComponent as p, ref as d, watch as y, computed as c, openBlock as n, createElementBlock as i, normalizeStyle as s, createCommentVNode as g, createBlock as f, mergeProps as S, withCtx as h, createElementVNode as _, toDisplayString as v } from "vue";
import { getMainStyle as V } from "../utils.js";
import k from "./noticeBar.vue.js";
const w = ["src"], N = /* @__PURE__ */ p({
  name: "McNotice",
  __name: "index",
  props: {
    imageValue: {},
    attrs: {},
    styles: {},
    children: {}
  },
  setup(l) {
    const a = () => Math.random().toString(36).slice(2), r = d(a()), t = l;
    y(
      () => t,
      () => {
        r.value = a();
      },
      {
        deep: !0
      }
    );
    const m = c(() => {
      const { styles: e = {} } = t;
      return {
        ...V(e)
      };
    }), u = c(() => {
      const { styles: e = {} } = t, { fontSize: o } = e;
      return {
        width: `${o + 4}px`,
        height: `${o + 4}px`
      };
    });
    return (e, o) => (n(), i("div", {
      class: "McNotice",
      style: s(m.value)
    }, [
      e.imageValue.icon ? (n(), i("img", {
        key: 0,
        class: "notice-ico",
        src: e.imageValue.icon,
        style: s(u.value)
      }, null, 12, w)) : g("", !0),
      (n(), f(k, S({ key: r.value }, t.attrs), {
        default: h(() => [
          _("div", null, v(e.imageValue.text), 1)
        ]),
        _: 1
      }, 16))
    ], 4));
  }
});
export {
  N as default
};
