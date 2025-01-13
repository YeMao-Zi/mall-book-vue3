import { defineComponent as b, ref as o, useTemplateRef as s, onMounted as v, nextTick as x, openBlock as y, createElementBlock as B, createElementVNode as u, normalizeClass as C, normalizeStyle as S, renderSlot as h } from "vue";
const k = {
  ref: "noticebarScroll",
  class: "mc-noticebar-scroll",
  style: {
    width: "0px"
  }
}, w = {
  class: "mc-noticebar-box"
}, E = /* @__PURE__ */ b({
  __name: "noticeBar",
  props: {
    speed: {
      default: 100
    },
    scrollable: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const r = o(t.scrollable), d = s("noticebarContent"), f = s("noticebarScroll"), c = o(0), n = o(0);
    v(() => {
      m();
    });
    async function m() {
      var e, a;
      await x();
      const l = ((e = f.value) == null ? void 0 : e.offsetWidth) || 0, i = ((a = d.value) == null ? void 0 : a.offsetWidth) || 0;
      if (!t.scrollable) if (l <= i) r.value = !0, n.value = l;
      else return;
      n.value = l;
      const p = (i + l) / t.speed;
      c.value = Math.ceil(p);
    }
    return (e, a) => (y(), B("div", k, [u("div", w, [u("div", {
      ref: "noticebarContent",
      class: C(["mc-noticebar-content", {
        "mc-noticebar-aniBox": r.value
      }]),
      style: S({
        animationDuration: c.value + "s",
        paddingLeft: `${n.value}px`
      })
    }, [h(e.$slots, "default")], 6)])], 512));
  }
});
export {
  E as default
};
