import{cf as h,cl as K,K as I,s as r,e as d,t as c,c as v,B as j,z as y,W as F,aB as S,bm as _}from"./index-DNkZCZKw.js";const f=Symbol("formContextKey"),b=Symbol("formItemContextKey"),p={prefix:Math.floor(Math.random()*1e4),current:0},D=Symbol("elIdInjection"),R=()=>I()?r(D,p):p,$=s=>{const e=R(),o=h();return K(()=>d(s)||`${o.value}-id-${e.prefix}-${e.current++}`)},B=()=>{const s=r(f,void 0),e=r(b,void 0);return{form:s,formItem:e}},E=(s,{formItemContext:e,disableIdGeneration:o,disableIdManagement:n})=>{o||(o=c(!1)),n||(n=c(!1));const t=c();let u;const a=v(()=>{var l;return!!(!(s.label||s.ariaLabel)&&e&&e.inputIds&&((l=e.inputIds)==null?void 0:l.length)<=1)});return j(()=>{u=y([F(s,"id"),o],([l,m])=>{const i=l??(m?void 0:$().value);i!==t.value&&(e!=null&&e.removeInputId&&(t.value&&e.removeInputId(t.value),!(n!=null&&n.value)&&!m&&i&&e.addInputId(i)),t.value=i)},{immediate:!0})}),S(()=>{u&&u(),e!=null&&e.removeInputId&&t.value&&e.removeInputId(t.value)}),{isLabeledByFormItem:a,inputId:t}},z=s=>{const e=I();return v(()=>{var o,n;return(n=(o=e==null?void 0:e.proxy)==null?void 0:o.$props)==null?void 0:n[s]})},N=(s,e={})=>{const o=c(void 0),n=e.prop?o:z("size"),t=e.global?o:_(),u=e.form?{size:void 0}:r(f,void 0),a=e.formItem?{size:void 0}:r(b,void 0);return v(()=>n.value||d(s)||(a==null?void 0:a.size)||(u==null?void 0:u.size)||t.value||"")},L=s=>{const e=z("disabled"),o=r(f,void 0);return v(()=>e.value||d(s)||(o==null?void 0:o.disabled)||!1)},P=({from:s,replacement:e,scope:o,version:n,ref:t,type:u="API"},a)=>{y(()=>d(a),l=>{},{immediate:!0})};export{$ as a,N as b,L as c,B as d,E as e,R as f,b as g,f as h,P as u};