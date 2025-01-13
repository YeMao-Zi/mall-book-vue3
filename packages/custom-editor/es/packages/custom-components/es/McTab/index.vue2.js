import { defineComponent as u, computed as i, openBlock as a, createElementBlock as s, normalizeStyle as l, Fragment as d, renderList as y, createCommentVNode as m, toDisplayString as g } from "vue";
import { getMainStyle as b } from "../utils.js";
const h = ["src"], x = {
  key: 1,
  class: ""
}, k = /* @__PURE__ */ u({
  name: "McTab",
  __name: "index",
  props: {
    tabList: {},
    attrs: {},
    styles: {
      default: () => ({})
    },
    children: {}
  },
  setup(r) {
    const o = i(() => ({
      ...b(r.styles)
    })), c = i(() => {
      const {
        itemGap: t
      } = r.attrs;
      return {
        gap: `${t}px`
      };
    }), p = i(() => {
      const {
        imageWidth: t,
        imageHeight: n,
        imageRadius: e
      } = r.attrs;
      return {
        width: `${t}px`,
        height: `${n}px`,
        borderRadius: `${e}px`
      };
    });
    return (t, n) => (a(), s("div", {
      class: "McTab",
      style: l(o.value)
    }, [(a(!0), s(d, null, y(t.tabList, (e) => (a(), s("div", {
      class: "mc-tab-item",
      key: e.id,
      style: l(c.value)
    }, [t.attrs.type !== "text" ? (a(), s("img", {
      key: 0,
      style: l(p.value),
      src: e.imagePath
    }, null, 12, h)) : m("", !0), t.attrs.type !== "image" ? (a(), s("span", x, g(e.label), 1)) : m("", !0)], 4))), 128))], 4));
  }
});
export {
  k as default
};
