"use strict";;/* empty css                                                                                                                                         */;/* empty css                                                                                                                                                 */;/* empty css                                                                                                                                                 */const e=require("vue"),n=require("../../../node_modules/.pnpm/@iconify_vue@4.1.2_vue@3.5.12_typescript@5.7.3_/node_modules/@iconify/vue/dist/iconify.js"),r=require("../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/tooltip/index.js"),c={class:"flex p-2 bg-white"},i={class:"text-base"},s={class:"flex-1 ml-5"},l=e.defineComponent({__name:"index",props:{label:{},tip:{}},setup(a){return(t,p)=>{const o=r;return e.openBlock(),e.createElementBlock("div",c,[e.createElementVNode("div",i,e.toDisplayString(t.label),1),t.tip?(e.openBlock(),e.createBlock(o,{key:0,content:t.tip},{default:e.withCtx(()=>[e.createVNode(e.unref(n.Icon),{icon:"prime:exclamation-circle"})]),_:1},8,["content"])):e.createCommentVNode("",!0),e.createElementVNode("div",s,[e.renderSlot(t.$slots,"default")])])}}});module.exports=l;
