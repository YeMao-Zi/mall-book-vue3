"use strict";const e=require("vue"),o=require("../utils.js"),i=["src"],m={key:1,class:""},u=e.defineComponent({name:"McTab",__name:"index",props:{tabList:{},attrs:{},styles:{default:()=>({})},children:{}},setup(a){const n=e.computed(()=>({...o.getMainStyle(a.styles)})),r=e.computed(()=>{const{itemGap:t}=a.attrs;return{gap:`${t}px`}}),c=e.computed(()=>{const{imageWidth:t,imageHeight:s,imageRadius:l}=a.attrs;return{width:`${t}px`,height:`${s}px`,borderRadius:`${l}px`}});return(t,s)=>(e.openBlock(),e.createElementBlock("div",{class:"McTab",style:e.normalizeStyle(n.value)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.tabList,l=>(e.openBlock(),e.createElementBlock("div",{class:"mc-tab-item",key:l.id,style:e.normalizeStyle(r.value)},[t.attrs.type!=="text"?(e.openBlock(),e.createElementBlock("img",{key:0,style:e.normalizeStyle(c.value),src:l.imagePath},null,12,i)):e.createCommentVNode("",!0),t.attrs.type!=="image"?(e.openBlock(),e.createElementBlock("span",m,e.toDisplayString(l.label),1)):e.createCommentVNode("",!0)],4))),128))],4))}});module.exports=u;
