"use strict";;/* empty css                                                                                                                                         */;/* empty css                                                                                                                                               */const e=require("vue"),d=require("../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/input/index.js"),m=e.defineComponent({__name:"index",props:e.mergeModels({label:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const o=e.useModel(t,"modelValue");return(n,l)=>{const u=d.default,a=e.resolveComponent("ConfigItem");return e.openBlock(),e.createBlock(a,{label:n.label},{default:e.withCtx(()=>[e.createVNode(u,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=r=>o.value=r),placeholder:"请输入跳转链接或路径"},null,8,["modelValue"])]),_:1},8,["label"])}}});module.exports=m;
