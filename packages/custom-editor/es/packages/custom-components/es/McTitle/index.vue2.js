import { defineComponent as m, computed as l, openBlock as i, createElementBlock as r, normalizeStyle as n, createElementVNode as p, toDisplayString as s, createCommentVNode as d } from "vue";
import { getMainStyle as f } from "../utils.js";
const S = /* @__PURE__ */ m({
  name: "McTitle",
  __name: "index",
  props: {
    value: {
      default: () => ({
        title: "大标题"
      })
    },
    styles: {
      default: () => ({})
    },
    children: {},
    attrs: {}
  },
  setup(o) {
    const a = l(() => ({
      ...f(o.styles)
    })), c = l(() => {
      const {
        titleSize: e,
        titleColor: t
      } = o.styles;
      return {
        fontSize: `${e}px`,
        color: t
      };
    }), u = l(() => {
      const {
        infoSize: e,
        infoColor: t
      } = o.styles;
      return {
        fontSize: `${e}px`,
        color: t
      };
    });
    return (e, t) => (i(), r("div", {
      class: "McTitle",
      style: n(a.value)
    }, [p("div", {
      style: n(c.value)
    }, s(e.value.title), 5), e.value.info ? (i(), r("div", {
      key: 0,
      style: n(u.value)
    }, s(e.value.info), 5)) : d("", !0)], 4));
  }
});
export {
  S as default
};
