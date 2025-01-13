import { defineComponent as h, ref as n, useTemplateRef as i, onMounted as v, nextTick as p, openBlock as _, createElementBlock as W, createElementVNode as d, normalizeClass as x, normalizeStyle as y, renderSlot as B } from "vue";
const C = {
  ref: "noticebarScroll",
  class: "mc-noticebar-scroll",
  style: { width: "0px" }
}, S = { class: "mc-noticebar-box" }, k = /* @__PURE__ */ h({
  __name: "noticeBar",
  props: {
    speed: { default: 100 },
    scrollable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = n(t.scrollable), u = i("noticebarContent"), f = i("noticebarScroll"), c = n(0), o = n(0);
    v(() => {
      b();
    });
    async function b() {
      var r, s;
      await p();
      const e = ((r = f.value) == null ? void 0 : r.offsetWidth) || 0, l = ((s = u.value) == null ? void 0 : s.offsetWidth) || 0;
      if (!t.scrollable)
        if (e <= l)
          a.value = !0, o.value = e;
        else
          return;
      o.value = e;
      const m = (l + e) / t.speed;
      c.value = Math.ceil(m);
    }
    return (e, l) => (_(), W("div", C, [
      d("div", S, [
        d("div", {
          ref: "noticebarContent",
          class: x(["mc-noticebar-content", { "mc-noticebar-aniBox": a.value }]),
          style: y({
            animationDuration: c.value + "s",
            paddingLeft: `${o.value}px`
          })
        }, [
          B(e.$slots, "default")
        ], 6)
      ])
    ], 512));
  }
});
export {
  k as default
};
