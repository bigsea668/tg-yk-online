import{av as Pe,ai as be,p as Ue,ah as _e,M as Q,q as xe,N as Ye,F as Z,c as m,b_ as Xe,K as ke,aP as _,t as M,z as Y,aR as ee,as as we,V,d as Ne,b9 as qe,u as Ge,a as Ce,bH as Je,b$ as Qe,c0 as Ze,R as et,S as tt,B as ot,W as at,o as v,b as S,a0 as h,J as te,n as g,e as t,r as W,Y as N,h as E,i as B,a8 as j,G as L,m as Se,a4 as nt,b7 as st,ad as lt,aW as it,$ as U,f as Ie,Q as Ee,_ as rt,w as ut}from"./index-DNkZCZKw.js";import{u as ct,U as oe,e as ze}from"./el-scrollbar-CNZ0YxQa.js";import{d as dt,e as pt,b as ft,c as vt}from"./index-Bw2kdCwP.js";const mt=()=>Pe&&/firefox/i.test(window.navigator.userAgent);let C;const ht=`
  height:0 !important;
  visibility:hidden !important;
  ${mt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,gt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function yt(a){const u=window.getComputedStyle(a),s=u.getPropertyValue("box-sizing"),o=Number.parseFloat(u.getPropertyValue("padding-bottom"))+Number.parseFloat(u.getPropertyValue("padding-top")),i=Number.parseFloat(u.getPropertyValue("border-bottom-width"))+Number.parseFloat(u.getPropertyValue("border-top-width"));return{contextStyle:gt.map(r=>`${r}:${u.getPropertyValue(r)}`).join(";"),paddingSize:o,borderSize:i,boxSizing:s}}function Fe(a,u=1,s){var o;C||(C=document.createElement("textarea"),document.body.appendChild(C));const{paddingSize:i,borderSize:d,boxSizing:r,contextStyle:l}=yt(a);C.setAttribute("style",`${l};${ht}`),C.value=a.value||a.placeholder||"";let c=C.scrollHeight;const b={};r==="border-box"?c=c+d:r==="content-box"&&(c=c-i),C.value="";const f=C.scrollHeight-i;if(be(u)){let w=f*u;r==="border-box"&&(w=w+i+d),c=Math.max(w,c),b.minHeight=`${w}px`}if(be(s)){let w=f*s;r==="border-box"&&(w=w+i+d),c=Math.min(w,c)}return b.height=`${c}px`,(o=C.parentNode)==null||o.removeChild(C),C=void 0,b}const bt=Ue({id:{type:String,default:void 0},size:_e,disabled:Boolean,modelValue:{type:Q([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:Q([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:xe},prefixIcon:{type:xe},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:Q([Object,Array,String]),default:()=>Ye({})},autofocus:Boolean,rows:{type:Number,default:2},...ct(["ariaLabel"])}),xt={[oe]:a=>Z(a),input:a=>Z(a),change:a=>Z(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},wt=["class","style"],Ct=/^on[A-Z]/,St=(a={})=>{const{excludeListeners:u=!1,excludeKeys:s}=a,o=m(()=>((s==null?void 0:s.value)||[]).concat(wt)),i=ke();return i?m(()=>{var d;return Xe(Object.entries((d=i.proxy)==null?void 0:d.$attrs).filter(([r])=>!o.value.includes(r)&&!(u&&Ct.test(r))))}):m(()=>({}))};function It(a,{beforeFocus:u,afterFocus:s,beforeBlur:o,afterBlur:i}={}){const d=ke(),{emit:r}=d,l=_(),c=M(!1),b=y=>{we(u)&&u(y)||c.value||(c.value=!0,r("focus",y),s==null||s())},f=y=>{var x;we(o)&&o(y)||y.relatedTarget&&((x=l.value)!=null&&x.contains(y.relatedTarget))||(c.value=!1,r("blur",y),i==null||i())},w=()=>{var y,x;(y=l.value)!=null&&y.contains(document.activeElement)&&l.value!==document.activeElement||(x=a.value)==null||x.focus()};return Y(l,y=>{y&&y.setAttribute("tabindex","-1")}),ee(l,"focus",b,!0),ee(l,"blur",f,!0),ee(l,"click",w,!0),{isFocused:c,wrapperRef:l,handleFocus:b,handleBlur:f}}const Et=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a);function zt({afterComposition:a,emit:u}){const s=M(!1),o=l=>{u==null||u("compositionstart",l),s.value=!0},i=l=>{var c;u==null||u("compositionupdate",l);const b=(c=l.target)==null?void 0:c.value,f=b[b.length-1]||"";s.value=!Et(f)},d=l=>{u==null||u("compositionend",l),s.value&&(s.value=!1,V(()=>a(l)))};return{isComposing:s,handleComposition:l=>{l.type==="compositionend"?d(l):i(l)},handleCompositionStart:o,handleCompositionUpdate:i,handleCompositionEnd:d}}function Ft(a){let u;function s(){if(a.value==null)return;const{selectionStart:i,selectionEnd:d,value:r}=a.value;if(i==null||d==null)return;const l=r.slice(0,Math.max(0,i)),c=r.slice(Math.max(0,d));u={selectionStart:i,selectionEnd:d,value:r,beforeTxt:l,afterTxt:c}}function o(){if(a.value==null||u==null)return;const{value:i}=a.value,{beforeTxt:d,afterTxt:r,selectionStart:l}=u;if(d==null||r==null||l==null)return;let c=i.length;if(i.endsWith(r))c=i.length-r.length;else if(i.startsWith(d))c=d.length;else{const b=d[l-1],f=i.indexOf(b,l-1);f!==-1&&(c=f+1)}a.value.setSelectionRange(c,c)}return[s,o]}const Pt=Ne({name:"ElInput",inheritAttrs:!1}),kt=Ne({...Pt,props:bt,emits:xt,setup(a,{expose:u,emit:s}){const o=a,i=qe(),d=St(),r=Ge(),l=m(()=>[o.type==="textarea"?ae.b():n.b(),n.m(y.value),n.is("disabled",x.value),n.is("exceed",Le.value),{[n.b("group")]:r.prepend||r.append,[n.m("prefix")]:r.prefix||o.prefixIcon,[n.m("suffix")]:r.suffix||o.suffixIcon||o.clearable||o.showPassword,[n.bm("suffix","password-clear")]:K.value&&q.value,[n.b("hidden")]:o.type==="hidden"},i.class]),c=m(()=>[n.e("wrapper"),n.is("focus",D.value)]),{form:b,formItem:f}=dt(),{inputId:w}=pt(o,{formItemContext:f}),y=ft(),x=vt(),n=Ce("input"),ae=Ce("textarea"),A=_(),I=_(),X=M(!1),H=M(!1),ne=M(),O=_(o.inputStyle),F=m(()=>A.value||I.value),{wrapperRef:Ve,isFocused:D,handleFocus:Te,handleBlur:$e}=It(F,{beforeFocus(){return x.value},afterBlur(){var e;o.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"blur").catch(p=>ze()))}}),se=m(()=>{var e;return(e=b==null?void 0:b.statusIcon)!=null?e:!1}),T=m(()=>(f==null?void 0:f.validateState)||""),le=m(()=>T.value&&Je[T.value]),Re=m(()=>H.value?Qe:Ze),Be=m(()=>[i.style]),ie=m(()=>[o.inputStyle,O.value,{resize:o.resize}]),z=m(()=>et(o.modelValue)?"":String(o.modelValue)),K=m(()=>o.clearable&&!x.value&&!o.readonly&&!!z.value&&(D.value||X.value)),q=m(()=>o.showPassword&&!x.value&&!!z.value&&(!!z.value||D.value)),P=m(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!x.value&&!o.readonly&&!o.showPassword),G=m(()=>z.value.length),Le=m(()=>!!P.value&&G.value>Number(o.maxlength)),Me=m(()=>!!r.suffix||!!o.suffixIcon||K.value||o.showPassword||P.value||!!T.value&&se.value),[re,ue]=Ft(A);tt(I,e=>{if(Ae(),!P.value||o.resize!=="both")return;const p=e[0],{width:k}=p.contentRect;ne.value={right:`calc(100% - ${k+15+6}px)`}});const $=()=>{const{type:e,autosize:p}=o;if(!(!Pe||e!=="textarea"||!I.value))if(p){const k=Ee(p)?p.minRows:void 0,ge=Ee(p)?p.maxRows:void 0,ye=Fe(I.value,k,ge);O.value={overflowY:"hidden",...ye},V(()=>{I.value.offsetHeight,O.value=ye})}else O.value={minHeight:Fe(I.value).minHeight}},Ae=(e=>{let p=!1;return()=>{var k;if(p||!o.autosize)return;((k=I.value)==null?void 0:k.offsetParent)===null||(e(),p=!0)}})($),R=()=>{const e=F.value,p=o.formatter?o.formatter(z.value):z.value;!e||e.value===p||(e.value=p)},J=async e=>{re();let{value:p}=e.target;if(o.formatter&&(p=o.parser?o.parser(p):p),!de.value){if(p===z.value){R();return}s(oe,p),s("input",p),await V(),R(),ue()}},ce=e=>{s("change",e.target.value)},{isComposing:de,handleCompositionStart:pe,handleCompositionUpdate:fe,handleCompositionEnd:ve}=zt({emit:s,afterComposition:J}),He=()=>{re(),H.value=!H.value,setTimeout(ue)},Oe=()=>{var e;return(e=F.value)==null?void 0:e.focus()},De=()=>{var e;return(e=F.value)==null?void 0:e.blur()},Ke=e=>{X.value=!1,s("mouseleave",e)},We=e=>{X.value=!0,s("mouseenter",e)},me=e=>{s("keydown",e)},je=()=>{var e;(e=F.value)==null||e.select()},he=()=>{s(oe,""),s("change",""),s("clear"),s("input","")};return Y(()=>o.modelValue,()=>{var e;V(()=>$()),o.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(p=>ze()))}),Y(z,()=>R()),Y(()=>o.type,async()=>{await V(),R(),$()}),ot(()=>{!o.formatter&&o.parser,R(),V($)}),u({input:A,textarea:I,ref:F,textareaStyle:ie,autosize:at(o,"autosize"),isComposing:de,focus:Oe,blur:De,select:je,clear:he,resizeTextarea:$}),(e,p)=>(v(),S("div",{class:g([t(l),{[t(n).bm("group","append")]:e.$slots.append,[t(n).bm("group","prepend")]:e.$slots.prepend}]),style:Ie(t(Be)),onMouseenter:We,onMouseleave:Ke},[h(" input "),e.type!=="textarea"?(v(),S(te,{key:0},[h(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:g(t(n).be("group","prepend"))},[W(e.$slots,"prepend")],2)):h("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Ve,class:g(t(c))},[h(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:g(t(n).e("prefix"))},[N("span",{class:g(t(n).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(v(),E(t(L),{key:0,class:g(t(n).e("icon"))},{default:B(()=>[(v(),E(j(e.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),N("input",Se({id:t(w),ref_key:"input",ref:A,class:t(n).e("inner")},t(d),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?H.value?"text":"password":e.type,disabled:t(x),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,role:e.containerRole,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:J,onChange:ce,onKeydown:me}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role","onCompositionstart","onCompositionupdate","onCompositionend"]),h(" suffix slot "),t(Me)?(v(),S("span",{key:1,class:g(t(n).e("suffix"))},[N("span",{class:g(t(n).e("suffix-inner"))},[!t(K)||!t(q)||!t(P)?(v(),S(te,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(v(),E(t(L),{key:0,class:g(t(n).e("icon"))},{default:B(()=>[(v(),E(j(e.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),t(K)?(v(),E(t(L),{key:1,class:g([t(n).e("icon"),t(n).e("clear")]),onMousedown:lt(t(it),["prevent"]),onClick:he},{default:B(()=>[nt(t(st))]),_:1},8,["class","onMousedown"])):h("v-if",!0),t(q)?(v(),E(t(L),{key:2,class:g([t(n).e("icon"),t(n).e("password")]),onClick:He},{default:B(()=>[(v(),E(j(t(Re))))]),_:1},8,["class"])):h("v-if",!0),t(P)?(v(),S("span",{key:3,class:g(t(n).e("count"))},[N("span",{class:g(t(n).e("count-inner"))},U(t(G))+" / "+U(e.maxlength),3)],2)):h("v-if",!0),t(T)&&t(le)&&t(se)?(v(),E(t(L),{key:4,class:g([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(T)==="validating")])},{default:B(()=>[(v(),E(j(t(le))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:g(t(n).be("group","append"))},[W(e.$slots,"append")],2)):h("v-if",!0)],64)):(v(),S(te,{key:1},[h(" textarea "),N("textarea",Se({id:t(w),ref_key:"textarea",ref:I,class:[t(ae).e("inner"),t(n).is("focus",t(D))]},t(d),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(x),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ie),"aria-label":e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,role:e.containerRole,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:J,onFocus:t(Te),onBlur:t($e),onChange:ce,onKeydown:me}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","role","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),t(P)?(v(),S("span",{key:0,style:Ie(ne.value),class:g(t(n).e("count"))},U(t(G))+" / "+U(e.maxlength),7)):h("v-if",!0)],64))],38))}});var Nt=rt(kt,[["__file","input.vue"]]);const Bt=ut(Nt);export{Bt as E,It as a,zt as b,St as u};
