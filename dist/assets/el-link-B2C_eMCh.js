import{p as m,q as y,d as f,a as h,c as b,o as a,b as o,h as r,i as v,a7 as g,e as t,G as C,$ as l,n as d,r as c,_ as E,w as B}from"./index-SkQIWFxF.js";const $=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:y}}),w={click:i=>i instanceof MouseEvent},S=f({name:"ElLink"}),L=f({...S,props:$,emits:w,setup(i,{emit:u}){const s=i,n=h("link"),p=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||u("click",e)}return(e,_)=>(a(),o("a",{class:d(t(p)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(a(),r(t(C),{key:0},{default:v(()=>[(a(),r(g(e.icon)))]),_:1})):l("v-if",!0),e.$slots.default?(a(),o("span",{key:1,class:d(t(n).e("inner"))},[c(e.$slots,"default")],2)):l("v-if",!0),e.$slots.icon?c(e.$slots,"icon",{key:2}):l("v-if",!0)],10,["href","target"]))}});var P=E(L,[["__file","link.vue"]]);const N=B(P);export{N as E};