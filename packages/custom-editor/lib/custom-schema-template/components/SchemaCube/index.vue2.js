"use strict";;/* empty css                                                                                                                                         */;/* empty css                                                                                                                                               */;/* empty css                                                                                                                                                      */const e=require("vue"),K=require("../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/input-number/index.js"),P=require("../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/icon/icon-plus/index.js"),R=require("../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/icon/icon-close-circle-fill/index.js"),q={class:"mb-5"},j={class:"p-3 bg-slate-200 text-slate-600"},I={class:"cube"},$=["data-k","data-c","data-r"],z=["onClick"],D=["onClick"],F=e.defineComponent({__name:"index",props:e.mergeModels({label:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(x){const E={borderWidth:0,borderColor:"rgba(255, 255, 255, 0.5)",borderRadius:0},s=e.useModel(x,"modelValue");e.watch([()=>{var t;return(t=s.value)==null?void 0:t.row},()=>{var t;return(t=s.value)==null?void 0:t.column}],()=>{s.value.list=[],v=void 0,f.value=[],V.value=void 0});let v;const f=e.ref([]),V=e.ref(),w=t=>{const o=s.value.column,l=s.value.row,a=(u,r)=>{const d=u-1;return d===0?0:d/r*100+"%"};return{top:a(t.top,l),left:a(t.left,o),width:t.width/o*100+"%",height:t.height/l*100+"%"}},b=e.computed(()=>{const t=s.value.column,o=s.value.row,l=t*o,a=[];for(let u=1;u<=l;u+=t){const r=[];for(let d=0;d<t&&u+d<=l;d++)r.push(u+d);a.push(r)}return a}),k=t=>{const o=b.value;for(let l=0;l<o.length;l++)for(let a=0;a<o[l].length;a++)if(o[l][a]===t)return{r:l+1,c:a+1}},C=(t,o,l)=>{const[a,u]=[l.length,l[0].length];let r,d,m,_;for(let i=0;i<a;i++){const c=l[i].indexOf(t);c!==-1&&(r=i,d=c);const N=l[i].indexOf(o);if(N!==-1&&(m=i,_=N),r!==void 0&&m!==void 0)break}if(r===void 0||m===void 0||d===void 0||_===void 0)return[];let g=Math.min(r,m),y=Math.min(d,_),n=Math.max(r,m),h=Math.max(d,_);const p=[];for(let i=g;i<=n;i++)for(let c=y;c<=h;c++)p.push(l[i][c]);return p},B=t=>{var l;const o=Number(t.currentTarget.dataset.k);if(!v)v=o,f.value.push(o);else{if(!f.value.includes(o))return;o===v&&(f.value=[o]);const a=f.value[0],u=f.value.slice(-1)[0],r={c:k(a).c,r:k(a).r},d={c:k(u).c,r:k(u).r},m={top:Math.min(r.r,d.r),left:Math.min(r.c,d.c),width:Math.abs(r.c-d.c)+1,height:Math.abs(r.r-d.r)+1,startKey:a,endKey:u,styles:{...E}};(l=s.value)==null||l.list.push(m),V.value=m,v=void 0}},S=t=>{if(!v)return;const o=v,l=Number(t.currentTarget.dataset.k),a=C(o,l,b.value),u=s.value.list.map(r=>C(r.startKey,r.endKey,b.value)).flat();a.filter(r=>u.includes(r)).length||(f.value=a)},M=t=>{v||(V.value=t)},U=t=>{var o;(o=s.value)==null||o.list.splice(t,1),V.value=void 0};return(t,o)=>{var y;const l=K,a=e.resolveComponent("config-item"),u=P,r=R,d=e.resolveComponent("SchemaUpload"),m=e.resolveComponent("SchemaJump"),_=e.resolveComponent("SchemaColor"),g=e.resolveComponent("SchemaNumber");return e.openBlock(),e.createElementBlock("div",q,[e.createElementVNode("div",j,[e.createElementVNode("span",null,e.toDisplayString(t.label),1)]),e.createElementVNode("div",null,[e.createVNode(a,{label:"行数"},{default:e.withCtx(()=>[e.createVNode(l,{modelValue:s.value.row,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value.row=n),mode:"button",min:1,max:20},null,8,["modelValue"])]),_:1}),e.createVNode(a,{label:"列数"},{default:e.withCtx(()=>[e.createVNode(l,{modelValue:s.value.column,"onUpdate:modelValue":o[1]||(o[1]=n=>s.value.column=n),mode:"button",min:1,max:20},null,8,["modelValue"])]),_:1})]),e.createElementVNode("div",I,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(b.value,(n,h)=>(e.openBlock(),e.createElementBlock("div",{class:"cube_bar",key:h},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n,(p,i)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["cube_box",{cube_box_move:f.value.includes(p)}]),key:p,"data-k":p,"data-c":i,"data-r":h,onClick:B,onMouseover:e.withModifiers(S,["self"])},[e.createVNode(u,{class:"ico"})],42,$))),128))]))),128)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList((y=s.value)==null?void 0:y.list,(n,h)=>{var p,i;return e.openBlock(),e.createElementBlock("div",{style:e.normalizeStyle(w(n)),class:e.normalizeClass(["edited_bar",{edited_bar_active:((p=V.value)==null?void 0:p.startKey)===n.startKey}]),key:h,onClick:c=>M(n)},[e.createElementVNode("div",{class:"ico_close",onClick:c=>U(h)},[e.createVNode(r)],8,D),e.createElementVNode("div",null,e.toDisplayString(n.imagePath?"编辑":"空"),1),((i=V.value)==null?void 0:i.startKey)===n.startKey?(e.openBlock(),e.createBlock(e.Teleport,{key:0,to:"#activeEdit"},[e.createVNode(d,{label:"魔方图片",modelValue:n.imagePath,"onUpdate:modelValue":c=>n.imagePath=c},null,8,["modelValue","onUpdate:modelValue"]),e.createVNode(m,{label:"跳转链接",modelValue:n.jumpPath,"onUpdate:modelValue":c=>n.jumpPath=c},null,8,["modelValue","onUpdate:modelValue"]),e.createVNode(_,{label:"边框颜色",modelValue:n.styles.borderColor,"onUpdate:modelValue":c=>n.styles.borderColor=c},null,8,["modelValue","onUpdate:modelValue"]),e.createVNode(g,{label:"边框宽度",modelValue:n.styles.borderWidth,"onUpdate:modelValue":c=>n.styles.borderWidth=c},null,8,["modelValue","onUpdate:modelValue"]),e.createVNode(g,{label:"边框圆角",modelValue:n.styles.borderRadius,"onUpdate:modelValue":c=>n.styles.borderRadius=c},null,8,["modelValue","onUpdate:modelValue"])])):e.createCommentVNode("",!0)],14,z)}),128))]),o[2]||(o[2]=e.createElementVNode("div",{id:"activeEdit"},null,-1))])}}});module.exports=F;
