import { defineComponent as a, provide as m, openBlock as p, createElementBlock as d, createElementVNode as e, createVNode as t } from "vue";
import _ from "./control/index.vue.js";
import { PageInject as l } from "../types/platform.js";
import f from "./navBar/index.vue.js";
const v = {
  class: "page"
}, u = {
  class: "page-header"
}, g = {
  class: "page-body"
}, B = /* @__PURE__ */ a({
  __name: "index",
  props: {
    onEventClick: {
      type: Function
    }
  },
  emits: ["confirm"],
  setup(n, {
    emit: c
  }) {
    const i = c, r = n, s = (o) => {
      i("confirm", o);
    };
    return m(l, {
      onEventClick: r.onEventClick,
      pageConfirm: s
    }), (o, h) => (p(), d("div", null, [e("div", v, [e("div", u, [t(f)]), e("div", g, [t(_)])])]));
  }
});
export {
  B as default
};
