import { defineComponent as m, computed as o, openBlock as i, createElementBlock as r, normalizeStyle as n, createElementVNode as y, toDisplayString as a, createCommentVNode as f } from "vue";
import { getMainStyle as d } from "../utils.js";
const p = /* @__PURE__ */ m({
  name: "McTitle",
  __name: "index",
  props: {
    value: { default: () => ({ title: "大标题" }) },
    styles: { default: () => ({}) },
    children: {},
    attrs: {}
  },
  setup(l) {
    const s = o(() => ({
      ...d(l.styles)
    })), c = o(() => {
      const { titleSize: e, titleColor: t } = l.styles;
      return {
        fontSize: `${e}px`,
        color: t
      };
    }), u = o(() => {
      const { infoSize: e, infoColor: t } = l.styles;
      return {
        fontSize: `${e}px`,
        color: t
      };
    });
    return (e, t) => (i(), r("div", {
      class: "McTitle",
      style: n(s.value)
    }, [
      y("div", {
        style: n(c.value)
      }, a(e.value.title), 5),
      e.value.info ? (i(), r("div", {
        key: 0,
        style: n(u.value)
      }, a(e.value.info), 5)) : f("", !0)
    ], 4));
  }
});
export {
  p as default
};
