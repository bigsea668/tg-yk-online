import{U as te,g as re,c as ue,a as ie,S as $,b as He,k as We}from"./_Uint8Array-eSuOIDTt.js";import{bN as qe,bn as N,bO as Qe,bP as se,bp as Je,bt as q,bq as oe,bQ as _e,bR as xe,bw as Xe,bS as Ye,bT as Ze,ah as Le,F as de,ai as ce,aj as Q,s as w,c as x,ax as J,z as Ee,V as Ae,K as Se,t as X,U as B,aN as Y,Q as je,bG as fe,d as I,u as ke,a as j,o as k,h as Te,i as Ie,Y as ve,n as S,e as b,H as F,b as T,a9 as D,ad as V,bU as G,r as ee,J as en,Z as Oe,$ as Pe,a0 as Z,a8 as Be,_ as ne,f as nn,p as an,M as ln,A as tn,at as rn,w as un,g as we}from"./index-B8CaIlcO.js";import{p as sn,k as on,u as Re,U,e as $e,q as dn}from"./el-scrollbar-DZ1CksSo.js";import{c as cn,d as ae,b as be,e as Ne,u as K}from"./index-D5W6IqEd.js";var fn=/\s/;function vn(e){for(var n=e.length;n--&&fn.test(e.charAt(n)););return n}var bn=/^\s+/;function mn(e){return e&&e.slice(0,vn(e)+1).replace(bn,"")}var me=NaN,gn=/^[-+]0x[0-9a-f]+$/i,hn=/^0b[01]+$/i,pn=/^0o[0-7]+$/i,yn=parseInt;function ge(e){if(typeof e=="number")return e;if(qe(e))return me;if(N(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=N(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=mn(e);var l=hn.test(e);return l||pn.test(e)?yn(e.slice(2),l?2:8):gn.test(e)?me:+e}var Cn="__lodash_hash_undefined__";function _n(e){return this.__data__.set(e,Cn),this}function xn(e){return this.__data__.has(e)}function M(e){var n=-1,l=e==null?0:e.length;for(this.__data__=new Qe;++n<l;)this.add(e[n])}M.prototype.add=M.prototype.push=_n;M.prototype.has=xn;function Ln(e,n){for(var l=-1,a=e==null?0:e.length;++l<a;)if(n(e[l],l,e))return!0;return!1}function En(e,n){return e.has(n)}var An=1,Sn=2;function Fe(e,n,l,a,s,t){var i=l&An,r=e.length,d=n.length;if(r!=d&&!(i&&d>r))return!1;var c=t.get(e),o=t.get(n);if(c&&o)return c==n&&o==e;var v=-1,m=!0,C=l&Sn?new M:void 0;for(t.set(e,n),t.set(n,e);++v<r;){var u=e[v],g=n[v];if(a)var h=i?a(g,u,v,n,e,t):a(u,g,v,e,n,t);if(h!==void 0){if(h)continue;m=!1;break}if(C){if(!Ln(n,function(f,p){if(!En(C,p)&&(u===f||s(u,f,l,a,t)))return C.push(p)})){m=!1;break}}else if(!(u===g||s(u,g,l,a,t))){m=!1;break}}return t.delete(e),t.delete(n),m}function kn(e){var n=-1,l=Array(e.size);return e.forEach(function(a,s){l[++n]=[s,a]}),l}function Tn(e){var n=-1,l=Array(e.size);return e.forEach(function(a){l[++n]=a}),l}var In=1,On=2,Pn="[object Boolean]",Bn="[object Date]",wn="[object Error]",Rn="[object Map]",$n="[object Number]",Nn="[object RegExp]",Fn="[object Set]",Dn="[object String]",Vn="[object Symbol]",Gn="[object ArrayBuffer]",Mn="[object DataView]",he=se?se.prototype:void 0,H=he?he.valueOf:void 0;function Un(e,n,l,a,s,t,i){switch(l){case Mn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Gn:return!(e.byteLength!=n.byteLength||!t(new te(e),new te(n)));case Pn:case Bn:case $n:return Je(+e,+n);case wn:return e.name==n.name&&e.message==n.message;case Nn:case Dn:return e==n+"";case Rn:var r=kn;case Fn:var d=a&In;if(r||(r=Tn),e.size!=n.size&&!d)return!1;var c=i.get(e);if(c)return c==n;a|=On,i.set(e,n);var o=Fe(r(e),r(n),a,s,t,i);return i.delete(e),o;case Vn:if(H)return H.call(e)==H.call(n)}return!1}var zn=1,Kn=Object.prototype,Hn=Kn.hasOwnProperty;function Wn(e,n,l,a,s,t){var i=l&zn,r=re(e),d=r.length,c=re(n),o=c.length;if(d!=o&&!i)return!1;for(var v=d;v--;){var m=r[v];if(!(i?m in n:Hn.call(n,m)))return!1}var C=t.get(e),u=t.get(n);if(C&&u)return C==n&&u==e;var g=!0;t.set(e,n),t.set(n,e);for(var h=i;++v<d;){m=r[v];var f=e[m],p=n[m];if(a)var E=i?a(p,f,m,n,e,t):a(f,p,m,e,n,t);if(!(E===void 0?f===p||s(f,p,l,a,t):E)){g=!1;break}h||(h=m=="constructor")}if(g&&!h){var _=e.constructor,A=n.constructor;_!=A&&"constructor"in e&&"constructor"in n&&!(typeof _=="function"&&_ instanceof _&&typeof A=="function"&&A instanceof A)&&(g=!1)}return t.delete(e),t.delete(n),g}var qn=1,pe="[object Arguments]",ye="[object Array]",R="[object Object]",Qn=Object.prototype,Ce=Qn.hasOwnProperty;function Jn(e,n,l,a,s,t){var i=q(e),r=q(n),d=i?ye:ue(e),c=r?ye:ue(n);d=d==pe?R:d,c=c==pe?R:c;var o=d==R,v=c==R,m=d==c;if(m&&ie(e)){if(!ie(n))return!1;i=!0,o=!1}if(m&&!o)return t||(t=new $),i||He(e)?Fe(e,n,l,a,s,t):Un(e,n,d,l,a,s,t);if(!(l&qn)){var C=o&&Ce.call(e,"__wrapped__"),u=v&&Ce.call(n,"__wrapped__");if(C||u){var g=C?e.value():e,h=u?n.value():n;return t||(t=new $),s(g,h,l,a,t)}}return m?(t||(t=new $),Wn(e,n,l,a,s,t)):!1}function z(e,n,l,a,s){return e===n?!0:e==null||n==null||!oe(e)&&!oe(n)?e!==e&&n!==n:Jn(e,n,l,a,z,s)}var Xn=1,Yn=2;function Zn(e,n,l,a){var s=l.length,t=s;if(e==null)return!t;for(e=Object(e);s--;){var i=l[s];if(i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++s<t;){i=l[s];var r=i[0],d=e[r],c=i[1];if(i[2]){if(d===void 0&&!(r in e))return!1}else{var o=new $,v;if(!(v===void 0?z(c,d,Xn|Yn,a,o):v))return!1}}return!0}function De(e){return e===e&&!N(e)}function jn(e){for(var n=We(e),l=n.length;l--;){var a=n[l],s=e[a];n[l]=[a,s,De(s)]}return n}function Ve(e,n){return function(l){return l==null?!1:l[e]===n&&(n!==void 0||e in Object(l))}}function ea(e){var n=jn(e);return n.length==1&&n[0][2]?Ve(n[0][0],n[0][1]):function(l){return l===e||Zn(l,e,n)}}var na=1,aa=2;function la(e,n){return _e(e)&&De(n)?Ve(xe(e),n):function(l){var a=Xe(l,e);return a===void 0&&a===n?sn(l,e):z(n,a,na|aa)}}function ta(e){return function(n){return n==null?void 0:n[e]}}function ra(e){return function(n){return Ye(n,e)}}function ua(e){return _e(e)?ta(xe(e)):ra(e)}function Ta(e){return typeof e=="function"?e:e==null?on:typeof e=="object"?q(e)?la(e[0],e[1]):ea(e):ua(e)}var W=function(){return Ze.Date.now()},ia="Expected a function",sa=Math.max,oa=Math.min;function Ia(e,n,l){var a,s,t,i,r,d,c=0,o=!1,v=!1,m=!0;if(typeof e!="function")throw new TypeError(ia);n=ge(n)||0,N(l)&&(o=!!l.leading,v="maxWait"in l,t=v?sa(ge(l.maxWait)||0,n):t,m="trailing"in l?!!l.trailing:m);function C(y){var L=a,P=s;return a=s=void 0,c=y,i=e.apply(P,L),i}function u(y){return c=y,r=setTimeout(f,n),o?C(y):i}function g(y){var L=y-d,P=y-c,le=n-L;return v?oa(le,t-P):le}function h(y){var L=y-d,P=y-c;return d===void 0||L>=n||L<0||v&&P>=t}function f(){var y=W();if(h(y))return p(y);r=setTimeout(f,g(y))}function p(y){return r=void 0,m&&a?C(y):(a=s=void 0,i)}function E(){r!==void 0&&clearTimeout(r),c=0,a=d=s=r=void 0}function _(){return r===void 0?i:p(W())}function A(){var y=W(),L=h(y);if(a=arguments,s=this,d=y,L){if(r===void 0)return u(d);if(v)return clearTimeout(r),r=setTimeout(f,n),C(d)}return r===void 0&&(r=setTimeout(f,n)),i}return A.cancel=E,A.flush=_,A}function da(e,n){return z(e,n)}const Ge={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:Le,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...Re(["ariaControls"])},Me={[U]:e=>de(e)||ce(e)||Q(e),change:e=>de(e)||ce(e)||Q(e)},O=Symbol("checkboxGroupContextKey"),ca=({model:e,isChecked:n})=>{const l=w(O,void 0),a=x(()=>{var t,i;const r=(t=l==null?void 0:l.max)==null?void 0:t.value,d=(i=l==null?void 0:l.min)==null?void 0:i.value;return!J(r)&&e.value.length>=r&&!n.value||!J(d)&&e.value.length<=d&&n.value});return{isDisabled:cn(x(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},fa=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:s,isLabeledByFormItem:t})=>{const i=w(O,void 0),{formItem:r}=ae(),{emit:d}=Se();function c(u){var g,h,f,p;return[!0,e.trueValue,e.trueLabel].includes(u)?(h=(g=e.trueValue)!=null?g:e.trueLabel)!=null?h:!0:(p=(f=e.falseValue)!=null?f:e.falseLabel)!=null?p:!1}function o(u,g){d("change",c(u),g)}function v(u){if(l.value)return;const g=u.target;d("change",c(g.checked),u)}async function m(u){l.value||!a.value&&!s.value&&t.value&&(u.composedPath().some(f=>f.tagName==="LABEL")||(n.value=c([!1,e.falseValue,e.falseLabel].includes(n.value)),await Ae(),o(n.value,u)))}const C=x(()=>(i==null?void 0:i.validateEvent)||e.validateEvent);return Ee(()=>e.modelValue,()=>{C.value&&(r==null||r.validate("change").catch(u=>$e()))}),{handleChange:v,onClickRoot:m}},va=e=>{const n=X(!1),{emit:l}=Se(),a=w(O,void 0),s=x(()=>J(a)===!1),t=X(!1),i=x({get(){var r,d;return s.value?(r=a==null?void 0:a.modelValue)==null?void 0:r.value:(d=e.modelValue)!=null?d:n.value},set(r){var d,c;s.value&&B(r)?(t.value=((d=a==null?void 0:a.max)==null?void 0:d.value)!==void 0&&r.length>(a==null?void 0:a.max.value)&&r.length>i.value.length,t.value===!1&&((c=a==null?void 0:a.changeEvent)==null||c.call(a,r))):(l(U,r),n.value=r)}});return{model:i,isGroup:s,isLimitExceeded:t}},ba=(e,n,{model:l})=>{const a=w(O,void 0),s=X(!1),t=x(()=>Y(e.value)?e.label:e.value),i=x(()=>{const o=l.value;return Q(o)?o:B(o)?je(t.value)?o.map(fe).some(v=>da(v,t.value)):o.map(fe).includes(t.value):o!=null?o===e.trueValue||o===e.trueLabel:!!o}),r=be(x(()=>{var o;return(o=a==null?void 0:a.size)==null?void 0:o.value}),{prop:!0}),d=be(x(()=>{var o;return(o=a==null?void 0:a.size)==null?void 0:o.value})),c=x(()=>!!n.default||!Y(t.value));return{checkboxButtonSize:r,isChecked:i,isFocused:s,checkboxSize:d,hasOwnLabel:c,actualValue:t}},Ue=(e,n)=>{const{formItem:l}=ae(),{model:a,isGroup:s,isLimitExceeded:t}=va(e),{isFocused:i,isChecked:r,checkboxButtonSize:d,checkboxSize:c,hasOwnLabel:o,actualValue:v}=ba(e,n,{model:a}),{isDisabled:m}=ca({model:a,isChecked:r}),{inputId:C,isLabeledByFormItem:u}=Ne(e,{formItemContext:l,disableIdGeneration:o,disableIdManagement:s}),{handleChange:g,onClickRoot:h}=fa(e,{model:a,isLimitExceeded:t,hasOwnLabel:o,isDisabled:m,isLabeledByFormItem:u});return(()=>{function p(){var E,_;B(a.value)&&!a.value.includes(v.value)?a.value.push(v.value):a.value=(_=(E=e.trueValue)!=null?E:e.trueLabel)!=null?_:!0}e.checked&&p()})(),K({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},x(()=>s.value&&Y(e.value))),K({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},x(()=>!!e.trueLabel)),K({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},x(()=>!!e.falseLabel)),{inputId:C,isLabeledByFormItem:u,isChecked:r,isDisabled:m,isFocused:i,checkboxButtonSize:d,checkboxSize:c,hasOwnLabel:o,model:a,actualValue:v,handleChange:g,onClickRoot:h}},ma=I({name:"ElCheckbox"}),ga=I({...ma,props:Ge,emits:Me,setup(e){const n=e,l=ke(),{inputId:a,isLabeledByFormItem:s,isChecked:t,isDisabled:i,isFocused:r,checkboxSize:d,hasOwnLabel:c,model:o,actualValue:v,handleChange:m,onClickRoot:C}=Ue(n,l),u=j("checkbox"),g=x(()=>[u.b(),u.m(d.value),u.is("disabled",i.value),u.is("bordered",n.border),u.is("checked",t.value)]),h=x(()=>[u.e("input"),u.is("disabled",i.value),u.is("checked",t.value),u.is("indeterminate",n.indeterminate),u.is("focus",r.value)]);return(f,p)=>(k(),Te(Be(!b(c)&&b(s)?"span":"label"),{class:S(b(g)),"aria-controls":f.indeterminate?f.ariaControls:null,onClick:b(C)},{default:Ie(()=>{var E,_,A,y;return[ve("span",{class:S(b(h))},[f.trueValue||f.falseValue||f.trueLabel||f.falseLabel?F((k(),T("input",{key:0,id:b(a),"onUpdate:modelValue":L=>D(o)?o.value=L:null,class:S(b(u).e("original")),type:"checkbox",indeterminate:f.indeterminate,name:f.name,tabindex:f.tabindex,disabled:b(i),"true-value":(_=(E=f.trueValue)!=null?E:f.trueLabel)!=null?_:!0,"false-value":(y=(A=f.falseValue)!=null?A:f.falseLabel)!=null?y:!1,onChange:b(m),onFocus:L=>r.value=!0,onBlur:L=>r.value=!1,onClick:V(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[G,b(o)]]):F((k(),T("input",{key:1,id:b(a),"onUpdate:modelValue":L=>D(o)?o.value=L:null,class:S(b(u).e("original")),type:"checkbox",indeterminate:f.indeterminate,disabled:b(i),value:b(v),name:f.name,tabindex:f.tabindex,onChange:b(m),onFocus:L=>r.value=!0,onBlur:L=>r.value=!1,onClick:V(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[G,b(o)]]),ve("span",{class:S(b(u).e("inner"))},null,2)],2),b(c)?(k(),T("span",{key:0,class:S(b(u).e("label"))},[ee(f.$slots,"default"),f.$slots.default?Z("v-if",!0):(k(),T(en,{key:0},[Oe(Pe(f.label),1)],64))],2)):Z("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var ha=ne(ga,[["__file","checkbox.vue"]]);const pa=I({name:"ElCheckboxButton"}),ya=I({...pa,props:Ge,emits:Me,setup(e){const n=e,l=ke(),{isFocused:a,isChecked:s,isDisabled:t,checkboxButtonSize:i,model:r,actualValue:d,handleChange:c}=Ue(n,l),o=w(O,void 0),v=j("checkbox"),m=x(()=>{var u,g,h,f;const p=(g=(u=o==null?void 0:o.fill)==null?void 0:u.value)!=null?g:"";return{backgroundColor:p,borderColor:p,color:(f=(h=o==null?void 0:o.textColor)==null?void 0:h.value)!=null?f:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}}),C=x(()=>[v.b("button"),v.bm("button",i.value),v.is("disabled",t.value),v.is("checked",s.value),v.is("focus",a.value)]);return(u,g)=>{var h,f,p,E;return k(),T("label",{class:S(b(C))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?F((k(),T("input",{key:0,"onUpdate:modelValue":_=>D(r)?r.value=_:null,class:S(b(v).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:b(t),"true-value":(f=(h=u.trueValue)!=null?h:u.trueLabel)!=null?f:!0,"false-value":(E=(p=u.falseValue)!=null?p:u.falseLabel)!=null?E:!1,onChange:b(c),onFocus:_=>a.value=!0,onBlur:_=>a.value=!1,onClick:V(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[G,b(r)]]):F((k(),T("input",{key:1,"onUpdate:modelValue":_=>D(r)?r.value=_:null,class:S(b(v).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:b(t),value:b(d),onChange:b(c),onFocus:_=>a.value=!0,onBlur:_=>a.value=!1,onClick:V(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[G,b(r)]]),u.$slots.default||u.label?(k(),T("span",{key:2,class:S(b(v).be("button","inner")),style:nn(b(s)?b(m):void 0)},[ee(u.$slots,"default",{},()=>[Oe(Pe(u.label),1)])],6)):Z("v-if",!0)],2)}}});var ze=ne(ya,[["__file","checkbox-button.vue"]]);const Ca=an({modelValue:{type:ln(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Le,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...Re(["ariaLabel"])}),_a={[U]:e=>B(e),change:e=>B(e)},xa=I({name:"ElCheckboxGroup"}),La=I({...xa,props:Ca,emits:_a,setup(e,{emit:n}){const l=e,a=j("checkbox"),{formItem:s}=ae(),{inputId:t,isLabeledByFormItem:i}=Ne(l,{formItemContext:s}),r=async c=>{n(U,c),await Ae(),n("change",c)},d=x({get(){return l.modelValue},set(c){r(c)}});return tn(O,{...dn(rn(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:d,changeEvent:r}),Ee(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(c=>$e()))}),(c,o)=>{var v;return k(),Te(Be(c.tag),{id:b(t),class:S(b(a).b("group")),role:"group","aria-label":b(i)?void 0:c.ariaLabel||"checkbox-group","aria-labelledby":b(i)?(v=b(s))==null?void 0:v.labelId:void 0},{default:Ie(()=>[ee(c.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Ke=ne(La,[["__file","checkbox-group.vue"]]);const Oa=un(ha,{CheckboxButton:ze,CheckboxGroup:Ke});we(ze);const Pa=we(Ke);export{Oa as E,Pa as a,Ta as b,Ia as d,da as i};
