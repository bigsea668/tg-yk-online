import{p as X,q as g,M as Z,aj as V,F as w,ai as T,d as L,a as _,c as d,t as S,af as x,z as K,B as ee,o as i,b as v,Y as E,e as a,n as u,au as ae,h as c,i as p,a8 as y,G as m,a0 as r,$ as C,a4 as ie,aq as te,r as M,f as ne,ad as se,V as oe,aT as O,_ as le,w as ce}from"./index-DUuzFvel.js";import{i as re}from"./validator-CxPjRm4f.js";import{u as ue,U as N,C as P,I as B,e as de,a as ve}from"./el-scrollbar-D7aVC6wy.js";import{d as fe,b as pe,e as me,c as he}from"./index-D8Vd93mq.js";const ye=X({modelValue:{type:[Boolean,String,Number],default:!1},disabled:Boolean,loading:Boolean,size:{type:String,validator:re},width:{type:[String,Number],default:""},inlinePrompt:Boolean,inactiveActionIcon:{type:g},activeActionIcon:{type:g},activeIcon:{type:g},inactiveIcon:{type:g},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Z(Function)},id:String,tabindex:{type:[String,Number]},...ue(["ariaLabel"])}),be={[N]:o=>V(o)||w(o)||T(o),[P]:o=>V(o)||w(o)||T(o),[B]:o=>V(o)||w(o)||T(o)},U="ElSwitch",Ie=L({name:U}),ke=L({...Ie,props:ye,emits:be,setup(o,{expose:$,emit:f}){const n=o,{formItem:b}=fe(),q=pe(),t=_("switch"),{inputId:G}=me(n,{formItemContext:b}),I=he(d(()=>n.loading)),A=S(n.modelValue!==!1),h=S(),j=S(),H=d(()=>[t.b(),t.m(q.value),t.is("disabled",I.value),t.is("checked",s.value)]),R=d(()=>[t.e("label"),t.em("label","left"),t.is("active",!s.value)]),W=d(()=>[t.e("label"),t.em("label","right"),t.is("active",s.value)]),Y=d(()=>({width:x(n.width)}));K(()=>n.modelValue,()=>{A.value=!0});const z=d(()=>A.value?n.modelValue:!1),s=d(()=>z.value===n.activeValue);[n.activeValue,n.inactiveValue].includes(z.value)||(f(N,n.inactiveValue),f(P,n.inactiveValue),f(B,n.inactiveValue)),K(s,e=>{var l;h.value.checked=e,n.validateEvent&&((l=b==null?void 0:b.validate)==null||l.call(b,"change").catch(Q=>de()))});const k=()=>{const e=s.value?n.inactiveValue:n.activeValue;f(N,e),f(P,e),f(B,e),oe(()=>{h.value.checked=s.value})},D=()=>{if(I.value)return;const{beforeChange:e}=n;if(!e){k();return}const l=e();[O(l),V(l)].includes(!0)||ve(U,"beforeChange must return type `Promise<boolean>` or `boolean`"),O(l)?l.then(F=>{F&&k()}).catch(F=>{}):l&&k()},J=()=>{var e,l;(l=(e=h.value)==null?void 0:e.focus)==null||l.call(e)};return ee(()=>{h.value.checked=s.value}),$({focus:J,checked:s}),(e,l)=>(i(),v("div",{class:u(a(H)),onClick:se(D,["prevent"])},[E("input",{id:a(G),ref_key:"input",ref:h,class:u(a(t).e("input")),type:"checkbox",role:"switch","aria-checked":a(s),"aria-disabled":a(I),"aria-label":e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(I),tabindex:e.tabindex,onChange:k,onKeydown:ae(D,["enter"])},null,42,["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"]),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),v("span",{key:0,class:u(a(R))},[e.inactiveIcon?(i(),c(a(m),{key:0},{default:p(()=>[(i(),c(y(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),v("span",{key:1,"aria-hidden":a(s)},C(e.inactiveText),9,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0),E("span",{ref_key:"core",ref:j,class:u(a(t).e("core")),style:ne(a(Y))},[e.inlinePrompt?(i(),v("div",{key:0,class:u(a(t).e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),c(a(m),{key:0,class:u(a(t).is("icon"))},{default:p(()=>[(i(),c(y(a(s)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(i(),v("span",{key:1,class:u(a(t).is("text")),"aria-hidden":!a(s)},C(a(s)?e.activeText:e.inactiveText),11,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0),E("div",{class:u(a(t).e("action"))},[e.loading?(i(),c(a(m),{key:0,class:u(a(t).is("loading"))},{default:p(()=>[ie(a(te))]),_:1},8,["class"])):a(s)?M(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(i(),c(a(m),{key:0},{default:p(()=>[(i(),c(y(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(s)?r("v-if",!0):M(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(i(),c(a(m),{key:0},{default:p(()=>[(i(),c(y(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),v("span",{key:1,class:u(a(W))},[e.activeIcon?(i(),c(a(m),{key:0},{default:p(()=>[(i(),c(y(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(i(),v("span",{key:1,"aria-hidden":!a(s)},C(e.activeText),9,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0)],10,["onClick"]))}});var ge=le(ke,[["__file","switch.vue"]]);const Ee=ce(ge);export{Ee as E};
