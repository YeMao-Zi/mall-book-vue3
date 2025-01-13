/* empty css                                                                                                                                        */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                                     */
import { defineComponent as J, mergeModels as O, useModel as $, watch as L, ref as N, computed as q, resolveComponent as C, openBlock as h, createElementBlock as b, createElementVNode as V, toDisplayString as I, createVNode as i, withCtx as R, Fragment as M, renderList as U, normalizeClass as E, withModifiers as A, normalizeStyle as G, createBlock as H, Teleport as Q, createCommentVNode as X } from "vue";
import Y from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/input-number/index.js";
import Z from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/icon/icon-plus/index.js";
import ee from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/icon/icon-close-circle-fill/index.js";
const te = {
  class: "mb-5"
}, le = {
  class: "p-3 bg-slate-200 text-slate-600"
}, oe = {
  class: "cube"
}, ne = ["data-k", "data-c", "data-r"], ae = ["onClick"], ue = ["onClick"], fe = /* @__PURE__ */ J({
  __name: "index",
  props: /* @__PURE__ */ O({
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(j) {
    const B = {
      borderWidth: 0,
      borderColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: 0
    }, s = $(j, "modelValue");
    L([() => {
      var e;
      return (e = s.value) == null ? void 0 : e.row;
    }, () => {
      var e;
      return (e = s.value) == null ? void 0 : e.column;
    }], () => {
      s.value.list = [], f = void 0, v.value = [], y.value = void 0;
    });
    let f;
    const v = N([]), y = N(), T = (e) => {
      const t = s.value.column, l = s.value.row, n = (r, a) => {
        const u = r - 1;
        return u === 0 ? 0 : u / a * 100 + "%";
      };
      return {
        top: n(e.top, l),
        left: n(e.left, t),
        width: e.width / t * 100 + "%",
        height: e.height / l * 100 + "%"
      };
    }, k = q(() => {
      const e = s.value.column, t = s.value.row, l = e * t, n = [];
      for (let r = 1; r <= l; r += e) {
        const a = [];
        for (let u = 0; u < e && r + u <= l; u++)
          a.push(r + u);
        n.push(a);
      }
      return n;
    }), w = (e) => {
      const t = k.value;
      for (let l = 0; l < t.length; l++)
        for (let n = 0; n < t[l].length; n++)
          if (t[l][n] === e)
            return {
              r: l + 1,
              c: n + 1
            };
    }, K = (e, t, l) => {
      const [n, r] = [l.length, l[0].length];
      let a, u, m, g;
      for (let c = 0; c < n; c++) {
        const d = l[c].indexOf(e);
        d !== -1 && (a = c, u = d);
        const P = l[c].indexOf(t);
        if (P !== -1 && (m = c, g = P), a !== void 0 && m !== void 0)
          break;
      }
      if (a === void 0 || m === void 0 || u === void 0 || g === void 0)
        return [];
      let x = Math.min(a, m), S = Math.min(u, g), o = Math.max(a, m), _ = Math.max(u, g);
      const p = [];
      for (let c = x; c <= o; c++)
        for (let d = S; d <= _; d++)
          p.push(l[c][d]);
      return p;
    }, W = (e) => {
      var l;
      const t = Number(e.currentTarget.dataset.k);
      if (!f)
        f = t, v.value.push(t);
      else {
        if (!v.value.includes(t)) return;
        t === f && (v.value = [t]);
        const n = v.value[0], r = v.value.slice(-1)[0], a = {
          c: w(n).c,
          r: w(n).r
        }, u = {
          c: w(r).c,
          r: w(r).r
        }, m = {
          top: Math.min(a.r, u.r),
          left: Math.min(a.c, u.c),
          width: Math.abs(a.c - u.c) + 1,
          height: Math.abs(a.r - u.r) + 1,
          startKey: n,
          endKey: r,
          styles: {
            ...B
          }
        };
        (l = s.value) == null || l.list.push(m), y.value = m, f = void 0;
      }
    }, z = (e) => {
      if (!f) return;
      const t = f, l = Number(e.currentTarget.dataset.k), n = K(t, l, k.value), r = s.value.list.map((a) => K(a.startKey, a.endKey, k.value)).flat();
      n.filter((a) => r.includes(a)).length || (v.value = n);
    }, D = (e) => {
      f || (y.value = e);
    }, F = (e) => {
      var t;
      (t = s.value) == null || t.list.splice(e, 1), y.value = void 0;
    };
    return (e, t) => {
      var S;
      const l = Y, n = C("config-item"), r = Z, a = ee, u = C("SchemaUpload"), m = C("SchemaJump"), g = C("SchemaColor"), x = C("SchemaNumber");
      return h(), b("div", te, [V("div", le, [V("span", null, I(e.label), 1)]), V("div", null, [i(n, {
        label: "行数"
      }, {
        default: R(() => [i(l, {
          modelValue: s.value.row,
          "onUpdate:modelValue": t[0] || (t[0] = (o) => s.value.row = o),
          mode: "button",
          min: 1,
          max: 20
        }, null, 8, ["modelValue"])]),
        _: 1
      }), i(n, {
        label: "列数"
      }, {
        default: R(() => [i(l, {
          modelValue: s.value.column,
          "onUpdate:modelValue": t[1] || (t[1] = (o) => s.value.column = o),
          mode: "button",
          min: 1,
          max: 20
        }, null, 8, ["modelValue"])]),
        _: 1
      })]), V("div", oe, [(h(!0), b(M, null, U(k.value, (o, _) => (h(), b("div", {
        class: "cube_bar",
        key: _
      }, [(h(!0), b(M, null, U(o, (p, c) => (h(), b("div", {
        class: E(["cube_box", {
          cube_box_move: v.value.includes(p)
        }]),
        key: p,
        "data-k": p,
        "data-c": c,
        "data-r": _,
        onClick: W,
        onMouseover: A(z, ["self"])
      }, [i(r, {
        class: "ico"
      })], 42, ne))), 128))]))), 128)), (h(!0), b(M, null, U((S = s.value) == null ? void 0 : S.list, (o, _) => {
        var p, c;
        return h(), b("div", {
          style: G(T(o)),
          class: E(["edited_bar", {
            edited_bar_active: ((p = y.value) == null ? void 0 : p.startKey) === o.startKey
          }]),
          key: _,
          onClick: (d) => D(o)
        }, [V("div", {
          class: "ico_close",
          onClick: (d) => F(_)
        }, [i(a)], 8, ue), V("div", null, I(o.imagePath ? "编辑" : "空"), 1), ((c = y.value) == null ? void 0 : c.startKey) === o.startKey ? (h(), H(Q, {
          key: 0,
          to: "#activeEdit"
        }, [i(u, {
          label: "魔方图片",
          modelValue: o.imagePath,
          "onUpdate:modelValue": (d) => o.imagePath = d
        }, null, 8, ["modelValue", "onUpdate:modelValue"]), i(m, {
          label: "跳转链接",
          modelValue: o.jumpPath,
          "onUpdate:modelValue": (d) => o.jumpPath = d
        }, null, 8, ["modelValue", "onUpdate:modelValue"]), i(g, {
          label: "边框颜色",
          modelValue: o.styles.borderColor,
          "onUpdate:modelValue": (d) => o.styles.borderColor = d
        }, null, 8, ["modelValue", "onUpdate:modelValue"]), i(x, {
          label: "边框宽度",
          modelValue: o.styles.borderWidth,
          "onUpdate:modelValue": (d) => o.styles.borderWidth = d
        }, null, 8, ["modelValue", "onUpdate:modelValue"]), i(x, {
          label: "边框圆角",
          modelValue: o.styles.borderRadius,
          "onUpdate:modelValue": (d) => o.styles.borderRadius = d
        }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : X("", !0)], 14, ae);
      }), 128))]), t[2] || (t[2] = V("div", {
        id: "activeEdit"
      }, null, -1))]);
    };
  }
});
export {
  fe as default
};
