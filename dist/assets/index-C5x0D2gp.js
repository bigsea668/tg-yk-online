import{U as E,aw as l,J as Y,bA as V,p as I,aM as O,d as B,a as z,c as G,o as m,b as w,Y as f,r as b,n as r,e as t,h as T,i as d,a4 as A,ag as k,ad as v,G as y,a0 as L,f as M,T as H,_ as K,w as U}from"./index-sqCiO8a4.js";import{b as $}from"./index-rBoM6yQ_.js";var X=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(X||{});function J(e){return l(e)&&e.type===Y}function j(e){return l(e)&&e.type===V}function F(e){return l(e)&&!J(e)&&!j(e)}const S=e=>{const u=E(e)?e:[e],a=[];return u.forEach(s=>{var n;E(s)?a.push(...S(s)):l(s)&&((n=s.component)!=null&&n.subTree)?a.push(s,...S(s.component.subTree)):l(s)&&E(s.children)?a.push(...S(s.children)):a.push(s)}),a},q=I({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:O},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Q={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},W=B({name:"ElTag"}),Z=B({...W,props:q,emits:Q,setup(e,{emit:u}){const a=e,s=$(),n=z("tag"),_=G(()=>{const{type:o,hit:i,effect:c,closable:p,round:R}=a;return[n.b(),n.is("closable",p),n.m(o||"primary"),n.m(s.value),n.m(c),n.is("hit",i),n.is("round",R)]}),C=o=>{u("close",o)},N=o=>{u("click",o)},D=o=>{var i,c,p;(p=(c=(i=o==null?void 0:o.component)==null?void 0:i.subTree)==null?void 0:c.component)!=null&&p.bum&&(o.component.subTree.component.bum=null)};return(o,i)=>o.disableTransitions?(m(),w("span",{key:0,class:r(t(_)),style:M({backgroundColor:o.color}),onClick:N},[f("span",{class:r(t(n).e("content"))},[b(o.$slots,"default")],2),o.closable?(m(),T(t(y),{key:0,class:r(t(n).e("close")),onClick:v(C,["stop"])},{default:d(()=>[A(t(k))]),_:1},8,["class","onClick"])):L("v-if",!0)],6)):(m(),T(H,{key:1,name:`${t(n).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:D},{default:d(()=>[f("span",{class:r(t(_)),style:M({backgroundColor:o.color}),onClick:N},[f("span",{class:r(t(n).e("content"))},[b(o.$slots,"default")],2),o.closable?(m(),T(t(y),{key:0,class:r(t(n).e("close")),onClick:v(C,["stop"])},{default:d(()=>[A(t(k))]),_:1},8,["class","onClick"])):L("v-if",!0)],6)]),_:3},8,["name"]))}});var x=K(Z,[["__file","tag.vue"]]);const h=U(x);export{h as E,X as P,F as a,S as f,J as i,q as t};
