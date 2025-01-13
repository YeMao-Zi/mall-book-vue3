import { defineComponent as d, computed as n, openBlock as a, createElementBlock as s, normalizeStyle as i, Fragment as y, renderList as p, createCommentVNode as o, toDisplayString as g } from "vue";
import { getMainStyle as h } from "../utils.js";
const S = ["src"], b = {
  key: 1,
  class: ""
}, v = /* @__PURE__ */ d({
  name: "McTab",
  __name: "index",
  props: {
    tabList: {},
    attrs: {},
    styles: { default: () => ({}) },
    children: {}
  },
  setup(r) {
    const m = n(() => ({
      ...h(r.styles)
    })), c = n(() => {
      const { itemGap: t } = r.attrs;
      return {
        gap: `${t}px`
      };
    }), u = n(() => {
      const { imageWidth: t, imageHeight: l, imageRadius: e } = r.attrs;
      return {
        width: `${t}px`,
        height: `${l}px`,
        borderRadius: `${e}px`
      };
    });
    return (t, l) => (a(), s("div", {
      class: "McTab",
      style: i(m.value)
    }, [
      (a(!0), s(y, null, p(t.tabList, (e) => (a(), s("div", {
        class: "mc-tab-item",
        key: e.id,
        style: i(c.value)
      }, [
        t.attrs.type !== "text" ? (a(), s("img", {
          key: 0,
          style: i(u.value),
          src: e.imagePath
        }, null, 12, S)) : o("", !0),
        t.attrs.type !== "image" ? (a(), s("span", b, g(e.label), 1)) : o("", !0)
      ], 4))), 128))
    ], 4));
  }
});
export {
  v as default
};
