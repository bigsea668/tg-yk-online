import{d as y,u as lt,a as $,c as M,o as d,b as C,r as R,n as L,e as v,_ as q,f as _e,w as Ve,g as Y,E as V,h as S,i as b,m as rt,T as ut,j as pe,k as Ce,l as it,p as Ee,q as le,s as fe,t as I,v as ct,x as dt,y as Se,z as H,A as ke,B as re,C as Le,D as O,F as se,G as Pe,H as Ke,I as pt,J as j,K as Te,L as De,M as he,N as mt,O as ft,P as ht,Q as vt,R as Re,S as gt,U as ze,V as _t,W as bt,X as We,Y as E,Z as Be,$ as W,a0 as ve,a1 as be,a2 as Ge,a3 as Ae,a4 as A,a5 as Oe,a6 as At,a7 as Mt,a8 as Ct,a9 as yt,aa as wt,ab as It,ac as je,ad as kt}from"./index-2a2bri-d.js";import"./el-tooltip-l0sNRNKZ.js";import{t as me,a as ge,E as ue,b as Ne}from"./el-scrollbar-CXPZY7Bs.js";import{I as J}from"./iconify-BO38E5Xh.js";import{E as xt}from"./index-pWt2P3Cb.js";import{T as Et,E as St}from"./el-button-D_fjb_vJ.js";import{C as Tt}from"./el-tag-BySgfF3p.js";import{f as Bt,E as Ot}from"./index-rGSOovlF.js";import{_ as $e}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as qe,a as Ue,b as Xe,_ as Nt}from"./locale.vue_vue_type_script_setup_true_lang-Hlj5Q-Vi.js";/* empty css                        */import{E as $t}from"./el-switch-BmvWbz2I.js";import{u as Qt}from"./im-DDAOu1MQ.js";import{t as Fe}from"./translations-DaIsc1a6.js";import"./index-3_ES5SxW.js";import"./dropdown-UYyG-Mb0.js";import"./refs-CTMQh0bL.js";import"./validator-ngAJDs0Q.js";const Dt=y({name:"ElContainer"}),Rt=y({...Dt,props:{direction:{type:String}},setup(e){const n=e,t=lt(),a=$("container"),o=M(()=>n.direction==="vertical"?!0:n.direction==="horizontal"?!1:t&&t.default?t.default().some(l=>{const r=l.type.name;return r==="ElHeader"||r==="ElFooter"}):!1);return(p,l)=>(d(),C("section",{class:L([v(a).b(),v(a).is("vertical",v(o))])},[R(p.$slots,"default")],2))}});var Ft=q(Rt,[["__file","container.vue"]]);const Vt=y({name:"ElAside"}),Lt=y({...Vt,props:{width:{type:String,default:null}},setup(e){const n=e,t=$("aside"),a=M(()=>n.width?t.cssVarBlock({width:n.width}):{});return(o,p)=>(d(),C("aside",{class:L(v(t).b()),style:_e(v(a))},[R(o.$slots,"default")],6))}});var Ze=q(Lt,[["__file","aside.vue"]]);const Pt=y({name:"ElFooter"}),Kt=y({...Pt,props:{height:{type:String,default:null}},setup(e){const n=e,t=$("footer"),a=M(()=>n.height?t.cssVarBlock({height:n.height}):{});return(o,p)=>(d(),C("footer",{class:L(v(t).b()),style:_e(v(a))},[R(o.$slots,"default")],6))}});var He=q(Kt,[["__file","footer.vue"]]);const zt=y({name:"ElHeader"}),Wt=y({...zt,props:{height:{type:String,default:null}},setup(e){const n=e,t=$("header"),a=M(()=>n.height?t.cssVarBlock({height:n.height}):{});return(o,p)=>(d(),C("header",{class:L(v(t).b()),style:_e(v(a))},[R(o.$slots,"default")],6))}});var Je=q(Wt,[["__file","header.vue"]]);const Gt=y({name:"ElMain"}),jt=y({...Gt,setup(e){const n=$("main");return(t,a)=>(d(),C("main",{class:L(v(n).b())},[R(t.$slots,"default")],2))}});var Ye=q(jt,[["__file","main.vue"]]);const qt=Ve(Ft,{Aside:Ze,Footer:He,Header:Je,Main:Ye}),Ut=Y(Ze);Y(He);const Xt=Y(Je),Zt=Y(Ye);let Ht=class{constructor(n,t){this.parent=n,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(n){n===this.subMenuItems.length?n=0:n<0&&(n=this.subMenuItems.length-1),this.subMenuItems[n].focus(),this.subIndex=n}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,t=>{t.addEventListener("keydown",a=>{let o=!1;switch(a.code){case V.down:{this.gotoSubIndex(this.subIndex+1),o=!0;break}case V.up:{this.gotoSubIndex(this.subIndex-1),o=!0;break}case V.tab:{me(n,"mouseleave");break}case V.enter:case V.numpadEnter:case V.space:{o=!0,a.currentTarget.click();break}}return o&&(a.preventDefault(),a.stopPropagation()),!1})})}},Jt=class{constructor(n,t){this.domNode=n,this.submenu=null,this.submenu=null,this.init(t)}init(n){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${n}-menu`);t&&(this.submenu=new Ht(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",n=>{let t=!1;switch(n.code){case V.down:{me(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break}case V.up:{me(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break}case V.tab:{me(n.currentTarget,"mouseleave");break}case V.enter:case V.numpadEnter:case V.space:{t=!0,n.currentTarget.click();break}}t&&n.preventDefault()})}},Yt=class{constructor(n,t){this.domNode=n,this.init(t)}init(n){const t=this.domNode.childNodes;Array.from(t).forEach(a=>{a.nodeType===1&&new Jt(a,n)})}};const en=y({name:"ElMenuCollapseTransition",setup(){const e=$("menu");return{listeners:{onBeforeEnter:t=>t.style.opacity="0.2",onEnter(t,a){pe(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",a()},onAfterEnter(t){Ce(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),it(t,e.m("collapse"))?(Ce(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),pe(t,e.m("collapse"))):(pe(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),Ce(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(t){pe(t,"horizontal-collapse-transition"),t.style.width=`${t.dataset.scrollWidth}px`}}}}});function tn(e,n,t,a,o,p){return d(),S(ut,rt({mode:"out-in"},e.listeners),{default:b(()=>[R(e.$slots,"default")]),_:3},16)}var nn=q(en,[["render",tn],["__file","menu-collapse-transition.vue"]]);function et(e,n){const t=M(()=>{let o=e.parent;const p=[n.value];for(;o.type.name!=="ElMenu";)o.props.index&&p.unshift(o.props.index),o=o.parent;return p});return{parentMenu:M(()=>{let o=e.parent;for(;o&&!["ElMenu","ElSubMenu"].includes(o.type.name);)o=o.parent;return o}),indexPath:t}}function sn(e){return M(()=>{const t=e.backgroundColor;return t?new Et(t).shade(20).toString():""})}const tt=(e,n)=>{const t=$("menu");return M(()=>t.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":sn(e).value||"","active-color":e.activeTextColor||"",level:`${n}`}))},on=Ee({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:le},expandOpenIcon:{type:le},collapseCloseIcon:{type:le},collapseOpenIcon:{type:le}}),ye="ElSubMenu";var Qe=y({name:ye,props:on,setup(e,{slots:n,expose:t}){const a=Te(),{indexPath:o,parentMenu:p}=et(a,M(()=>e.index)),l=$("menu"),r=$("sub-menu"),s=fe("rootMenu");s||ge(ye,"can not inject root menu");const h=fe(`subMenu:${p.value.uid}`);h||ge(ye,"can not inject sub menu");const i=I({}),g=I({});let u;const B=I(!1),T=I(),Q=I(null),D=M(()=>X.value==="horizontal"&&z.value?"bottom-start":"right-start"),G=M(()=>X.value==="horizontal"&&z.value||X.value==="vertical"&&!s.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?K.value?e.expandOpenIcon:e.expandCloseIcon:ct:e.collapseCloseIcon&&e.collapseOpenIcon?K.value?e.collapseOpenIcon:e.collapseCloseIcon:dt),z=M(()=>h.level===0),U=M(()=>{const f=e.teleported;return f===void 0?z.value:f}),P=M(()=>s.props.collapse?`${l.namespace.value}-zoom-in-left`:`${l.namespace.value}-zoom-in-top`),ie=M(()=>X.value==="horizontal"&&z.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),K=M(()=>s.openedMenus.includes(e.index)),ee=M(()=>{let f=!1;return Object.values(i.value).forEach(w=>{w.active&&(f=!0)}),Object.values(g.value).forEach(w=>{w.active&&(f=!0)}),f}),X=M(()=>s.props.mode),te=Se({index:e.index,indexPath:o,active:ee}),oe=tt(s.props,h.level+1),ce=M(()=>{var f;return(f=e.popperOffset)!=null?f:s.props.popperOffset}),ne=M(()=>{var f;return(f=e.popperClass)!=null?f:s.props.popperClass}),de=M(()=>{var f;return(f=e.showTimeout)!=null?f:s.props.showTimeout}),Me=M(()=>{var f;return(f=e.hideTimeout)!=null?f:s.props.hideTimeout}),c=()=>{var f,w,N;return(N=(w=(f=Q.value)==null?void 0:f.popperRef)==null?void 0:w.popperInstanceRef)==null?void 0:N.destroy()},m=f=>{f||c()},_=()=>{s.props.menuTrigger==="hover"&&s.props.mode==="horizontal"||s.props.collapse&&s.props.mode==="vertical"||e.disabled||s.handleSubMenuClick({index:e.index,indexPath:o.value,active:ee.value})},k=(f,w=de.value)=>{var N;if(f.type!=="focus"){if(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"||e.disabled){h.mouseInChild.value=!0;return}h.mouseInChild.value=!0,u==null||u(),{stop:u}=De(()=>{s.openMenu(e.index,o.value)},w),U.value&&((N=p.value.vnode.el)==null||N.dispatchEvent(new MouseEvent("mouseenter")))}},x=(f=!1)=>{var w;if(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"){h.mouseInChild.value=!1;return}u==null||u(),h.mouseInChild.value=!1,{stop:u}=De(()=>!B.value&&s.closeMenu(e.index,o.value),Me.value),U.value&&f&&((w=h.handleMouseleave)==null||w.call(h,!0))};H(()=>s.props.collapse,f=>m(!!f));{const f=N=>{g.value[N.index]=N},w=N=>{delete g.value[N.index]};ke(`subMenu:${a.uid}`,{addSubMenu:f,removeSubMenu:w,handleMouseleave:x,mouseInChild:B,level:h.level+1})}return t({opened:K}),re(()=>{s.addSubMenu(te),h.addSubMenu(te)}),Le(()=>{h.removeSubMenu(te),s.removeSubMenu(te)}),()=>{var f;const w=[(f=n.title)==null?void 0:f.call(n),O(Pe,{class:r.e("icon-arrow"),style:{transform:K.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&s.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>se(G.value)?O(a.appContext.components[G.value]):O(G.value)})],N=s.isMenuPopup?O(ue,{ref:Q,visible:K.value,effect:"light",pure:!0,offset:ce.value,showArrow:!1,persistent:!0,popperClass:ne.value,placement:D.value,teleported:U.value,fallbackPlacements:ie.value,transition:P.value,gpuAcceleration:!1},{content:()=>{var F;return O("div",{class:[l.m(X.value),l.m("popup-container"),ne.value],onMouseenter:Z=>k(Z,100),onMouseleave:()=>x(!0),onFocus:Z=>k(Z,100)},[O("ul",{class:[l.b(),l.m("popup"),l.m(`popup-${D.value}`)],style:oe.value},[(F=n.default)==null?void 0:F.call(n)])])},default:()=>O("div",{class:r.e("title"),onClick:_},w)}):O(j,{},[O("div",{class:r.e("title"),ref:T,onClick:_},w),O(xt,{},{default:()=>{var F;return Ke(O("ul",{role:"menu",class:[l.b(),l.m("inline")],style:oe.value},[(F=n.default)==null?void 0:F.call(n)]),[[pt,K.value]])}})]);return O("li",{class:[r.b(),r.is("active",ee.value),r.is("opened",K.value),r.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:K.value,onMouseenter:k,onMouseleave:()=>x(),onFocus:k},[N])}}});const an=Ee({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:he(Array),default:()=>mt([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:le,default:()=>ft},popperEffect:{type:he(String),default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),we=e=>ze(e)&&e.every(n=>se(n)),ln={close:(e,n)=>se(e)&&we(n),open:(e,n)=>se(e)&&we(n),select:(e,n,t,a)=>se(e)&&we(n)&&vt(t)&&(a===void 0||a instanceof Promise)};var rn=y({name:"ElMenu",props:an,emits:ln,setup(e,{emit:n,slots:t,expose:a}){const o=Te(),p=o.appContext.config.globalProperties.$router,l=I(),r=$("menu"),s=$("sub-menu"),h=I(-1),i=I(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),g=I(e.defaultActive),u=I({}),B=I({}),T=M(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),Q=()=>{const c=g.value&&u.value[g.value];if(!c||e.mode==="horizontal"||e.collapse)return;c.indexPath.forEach(_=>{const k=B.value[_];k&&D(_,k.indexPath)})},D=(c,m)=>{i.value.includes(c)||(e.uniqueOpened&&(i.value=i.value.filter(_=>m.includes(_))),i.value.push(c),n("open",c,m))},G=c=>{const m=i.value.indexOf(c);m!==-1&&i.value.splice(m,1)},z=(c,m)=>{G(c),n("close",c,m)},U=({index:c,indexPath:m})=>{i.value.includes(c)?z(c,m):D(c,m)},P=c=>{(e.mode==="horizontal"||e.collapse)&&(i.value=[]);const{index:m,indexPath:_}=c;if(!(Re(m)||Re(_)))if(e.router&&p){const k=c.route||m,x=p.push(k).then(f=>(f||(g.value=m),f));n("select",m,_,{index:m,indexPath:_,route:k},x)}else g.value=m,n("select",m,_,{index:m,indexPath:_})},ie=c=>{const m=u.value,_=m[c]||g.value&&m[g.value]||m[e.defaultActive];_?g.value=_.index:g.value=c},K=c=>{const m=getComputedStyle(c),_=Number.parseInt(m.marginLeft,10),k=Number.parseInt(m.marginRight,10);return c.offsetWidth+_+k||0},ee=()=>{var c,m;if(!l.value)return-1;const _=Array.from((m=(c=l.value)==null?void 0:c.childNodes)!=null?m:[]).filter(ae=>ae.nodeName!=="#comment"&&(ae.nodeName!=="#text"||ae.nodeValue)),k=64,x=getComputedStyle(l.value),f=Number.parseInt(x.paddingLeft,10),w=Number.parseInt(x.paddingRight,10),N=l.value.clientWidth-f-w;let F=0,Z=0;return _.forEach((ae,at)=>{F+=K(ae),F<=N-k&&(Z=at+1)}),Z===_.length?-1:Z},X=c=>B.value[c].indexPath,te=(c,m=33.34)=>{let _;return()=>{_&&clearTimeout(_),_=setTimeout(()=>{c()},m)}};let oe=!0;const ce=()=>{if(h.value===ee())return;const c=()=>{h.value=-1,_t(()=>{h.value=ee()})};oe?c():te(c)(),oe=!1};H(()=>e.defaultActive,c=>{u.value[c]||(g.value=""),ie(c)}),H(()=>e.collapse,c=>{c&&(i.value=[])}),H(u.value,Q);let ne;ht(()=>{e.mode==="horizontal"&&e.ellipsis?ne=gt(l,ce).stop:ne==null||ne()});const de=I(!1);{const c=x=>{B.value[x.index]=x},m=x=>{delete B.value[x.index]};ke("rootMenu",Se({props:e,openedMenus:i,items:u,subMenus:B,activeIndex:g,isMenuPopup:T,addMenuItem:x=>{u.value[x.index]=x},removeMenuItem:x=>{delete u.value[x.index]},addSubMenu:c,removeSubMenu:m,openMenu:D,closeMenu:z,handleMenuItemClick:P,handleSubMenuClick:U})),ke(`subMenu:${o.uid}`,{addSubMenu:c,removeSubMenu:m,mouseInChild:de,level:0})}re(()=>{e.mode==="horizontal"&&new Yt(o.vnode.el,r.namespace.value)}),a({open:m=>{const{indexPath:_}=B.value[m];_.forEach(k=>D(k,_))},close:G,handleResize:ce});const Me=tt(e,0);return()=>{var c,m;let _=(m=(c=t.default)==null?void 0:c.call(t))!=null?m:[];const k=[];if(e.mode==="horizontal"&&l.value){const w=Bt(_),N=h.value===-1?w:w.slice(0,h.value),F=h.value===-1?[]:w.slice(h.value);F!=null&&F.length&&e.ellipsis&&(_=N,k.push(O(Qe,{index:"sub-menu-more",class:s.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>O(Pe,{class:s.e("icon-more")},{default:()=>O(e.ellipsisIcon)}),default:()=>F})))}const x=e.closeOnClickOutside?[[Tt,()=>{i.value.length&&(de.value||(i.value.forEach(w=>n("close",w,X(w))),i.value=[]))}]]:[],f=Ke(O("ul",{key:String(e.collapse),role:"menubar",ref:l,style:Me.value,class:{[r.b()]:!0,[r.m(e.mode)]:!0,[r.m("collapse")]:e.collapse}},[..._,...k]),x);return e.collapseTransition&&e.mode==="vertical"?O(nn,()=>f):f}}});const un=Ee({index:{type:he([String,null]),default:null},route:{type:he([String,Object])},disabled:Boolean}),cn={click:e=>se(e.index)&&ze(e.indexPath)},Ie="ElMenuItem",dn=y({name:Ie,components:{ElTooltip:ue},props:un,emits:cn,setup(e,{emit:n}){const t=Te(),a=fe("rootMenu"),o=$("menu"),p=$("menu-item");a||ge(Ie,"can not inject root menu");const{parentMenu:l,indexPath:r}=et(t,bt(e,"index")),s=fe(`subMenu:${l.value.uid}`);s||ge(Ie,"can not inject sub menu");const h=M(()=>e.index===a.activeIndex),i=Se({index:e.index,indexPath:r,active:h}),g=()=>{e.disabled||(a.handleMenuItemClick({index:e.index,indexPath:r.value,route:e.route}),n("click",i))};return re(()=>{s.addSubMenu(i),a.addMenuItem(i)}),Le(()=>{s.removeSubMenu(i),a.removeMenuItem(i)}),{parentMenu:l,rootMenu:a,active:h,nsMenu:o,nsMenuItem:p,handleClick:g}}});function pn(e,n,t,a,o,p){const l=We("el-tooltip");return d(),C("li",{class:L([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:e.handleClick},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(d(),S(l,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:b(()=>[R(e.$slots,"title")]),default:b(()=>[E("div",{class:L(e.nsMenu.be("tooltip","trigger"))},[R(e.$slots,"default")],2)]),_:3},8,["effect"])):(d(),C(j,{key:1},[R(e.$slots,"default"),R(e.$slots,"title")],64))],10,["onClick"])}var nt=q(dn,[["render",pn],["__file","menu-item.vue"]]);const mn={title:String},fn="ElMenuItemGroup",hn=y({name:fn,props:mn,setup(){return{ns:$("menu-item-group")}}});function vn(e,n,t,a,o,p){return d(),C("li",{class:L(e.ns.b())},[E("div",{class:L(e.ns.e("title"))},[e.$slots.title?R(e.$slots,"title",{key:1}):(d(),C(j,{key:0},[Be(W(e.title),1)],64))],2),E("ul",null,[R(e.$slots,"default")])],2)}var st=q(hn,[["render",vn],["__file","menu-item-group.vue"]]);const gn=Ve(rn,{MenuItem:nt,MenuItemGroup:st,SubMenu:Qe}),ot=Y(nt);Y(st);const _n=Y(Qe),bn={class:"flex items-center gap-2"},An={key:1},Mn={key:0},Cn={key:1},xe=y({__name:"menuItem",props:{route:{type:Object,required:!0}},setup(e){const n=e,t=JSON.parse(localStorage.getItem("user")||"{}"),a=typeof t.userManger=="string"?t.userManger:"";return H(()=>n.route,()=>{}),(o,p)=>{var l,r,s;return d(),C("div",bn,[(l=e.route.meta)!=null&&l.icon?(d(),S(v(J),{key:0,icon:e.route.meta.icon.toString(),style:{"font-size":"22px"}},null,8,["icon"])):ve("",!0),(r=e.route.meta)!=null&&r.label?(d(),C("span",An,[e.route.path=="/userManger"?(d(),C("span",Mn,W(o.$t(v(a))),1)):(d(),C("span",Cn,W(o.$t(((s=e.route.meta)==null?void 0:s.label).toString())),1))])):ve("",!0)])}}}),yn=y({__name:"menuChildren",props:{routeList:{type:Array,default:[]}},setup(e){const n=e,t=be(),a=I([]);return re(()=>{a.value=n.routeList.filter(o=>{var l,r,s;const p=((l=o.meta)==null?void 0:l.roles)??[];if((r=o.meta)!=null&&r.hidden)return!1;if(p.includes(t.userInfo.role)){const h=((s=o.meta)==null?void 0:s.roleList)??[];return h.length==0?!0:Ge(h)}})}),(o,p)=>{const l=ot;return d(),C("div",null,[(d(!0),C(j,null,Ae(v(a),(r,s)=>(d(),C("div",{key:s},[!r.children||r.children.length===0?(d(),S(l,{key:0,route:r,index:r.path},{default:b(()=>[A(xe,{route:r},null,8,["route"])]),_:2},1032,["route","index"])):ve("",!0)]))),128))])}}}),wn=y({__name:"menuTree",props:{routeList:{type:Array,default:[]}},setup(e){const n=e,t=be(),a=Oe(),o=I([]);re(()=>{o.value=n.routeList.filter(r=>{const s=r.meta||{},h=(s==null?void 0:s.roles)??[];if(s!=null&&s.hidden)return!1;if(h.includes(t.userInfo.role)){const i=(s==null?void 0:s.roleList)??[];return i.length==0?!0:Ge(i)}}).map(r=>{const s=r.meta||{},{label:h,...i}=s,g=h;return a.isCollapse?{...r,meta:i,menuLabel:g}:r})});const p=JSON.parse(localStorage.getItem("user")||"{}"),l=typeof p.userManger=="string"?p.userManger:"";return(r,s)=>{const h=ue,i=ot,g=_n;return d(),C("div",null,[(d(!0),C(j,null,Ae(v(o),(u,B)=>(d(),C("div",{key:B},[!u.children||!u.children&&u.meta||u.children&&u.children.length===0?(d(),S(i,{key:0,route:u,index:u.path},{default:b(()=>{var T,Q;return[A(h,{class:"box-item",effect:"dark",content:u.path=="/userManger"?r.$t(v(l)):u.menuLabel?u!=null&&u.menuLabel?r.$t(u==null?void 0:u.menuLabel.toString()):"":(T=u.meta)!=null&&T.label?r.$t((Q=u.meta)==null?void 0:Q.label.toString()):"",placement:"right"},{default:b(()=>[A(xe,{route:u},null,8,["route"])]),_:2},1032,["content"])]}),_:2},1032,["route","index"])):(d(),S(g,{key:1,index:u.path},{title:b(()=>[A(xe,{route:u},null,8,["route"])]),default:b(()=>[A(yn,{routeList:u.children},null,8,["routeList"])]),_:2},1032,["index"]))]))),128))])}}}),In={class:"rounded-md w-5/6 h-8 absolute bottom-2 left-4 flex items-center justify-center cursor-pointer hover:bg-sky-500 hover:text-white transition-colors duration-30",style:{border:"1px solid rgb(34 211 238)"}},kn={class:"w-full h-8 absolute bottom-2 left-0 flex items-center justify-center cursor-pointer hover:bg-sky-500 hover:text-white transition-colors duration-30"},xn=y({__name:"index",setup(e){const n=M(()=>{var r;const l=((r=At)==null?void 0:r[0])??null;return!l||!("children"in l)?[]:l.children??[]}),t=Oe(),a=()=>{t.setIsCollapse(!t.isCollapse)};function o(){}function p(){}return(l,r)=>{const s=gn,h=Ne,i=ue,g=Ut;return d(),S(g,{class:L([{collapsed:v(t).isCollapse},"relative mt-2 ml-5 rounded-lg flex items-center shadow-md z-10"])},{default:b(()=>[A(h,{class:"w-full mb-16 overflow-hidden",style:{height:"84.5vh","border-bottom":"1px solid #F2F3F5"}},{default:b(()=>[A(s,{uniqueOpened:"",router:"",collapse:v(t).isCollapse,defaultActive:l.$route.path,"collapse-transition":"",class:"w-full",onOpen:o,onClose:p,"popper-effect":"dark"},{default:b(()=>[A(wn,{routeList:n.value},null,8,["routeList"])]),_:1},8,["collapse","defaultActive"])]),_:1}),E("div",{onClick:a},[v(t).isCollapse?(d(),S(i,{key:1,class:"box-item",effect:"dark",content:"点击展开菜单",placement:"top"},{default:b(()=>[E("div",kn,[A(v(J),{class:"text-base",icon:"icon-park-outline:double-right"})])]),_:1})):(d(),S(i,{key:0,class:"box-item",effect:"dark",content:"点击收起菜单",placement:"top"},{default:b(()=>[E("div",In,[A(v(J),{class:"text-base",icon:"icon-park-outline:double-left"})])]),_:1}))])]),_:1},8,["class"])}}}),En=$e(xn,[["__scopeId","data-v-f843b272"]]),Sn={class:"scrollable-content -mt-4 -ml-3"},Tn=y({__name:"index",props:{refreshKey:{type:Number,required:!0}},setup(e){const n=e,t=I(0);return H(()=>n.refreshKey,a=>{t.value=a}),(a,o)=>{const p=We("router-view"),l=Zt;return d(),S(l,{class:"overflow-hidden",style:{height:"calc(100vh - 60px)"}},{default:b(()=>[E("div",Sn,[(d(),S(p,{key:v(t)},{default:b(({Component:r})=>[(d(),S(Mt,null,[(d(),S(Ct(r)))],1024))]),_:1}))])]),_:1})}}}),Bn=$e(Tn,[["__scopeId","data-v-9ed78a50"]]),On="data:image/png;base64,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",Nn={class:"flex items-center gap-2 text-lg"},$n=y({__name:"userAvatar",setup(e){const n=be(),t=M(()=>n.userInfo);return(a,o)=>{const p=qe,l=Ue,r=Xe;return d(),S(r,{trigger:"click"},{dropdown:b(()=>[A(l,null,{default:b(()=>[A(p,{onClick:v(n).logout},{default:b(()=>[A(v(J),{icon:"material-symbols:logout"}),o[0]||(o[0]=Be(" 退出登录 "))]),_:1},8,["onClick"])]),_:1})]),default:b(()=>[E("div",Nn,[A(v(J),{icon:"ep:avatar"}),E("p",null,W(v(t).username),1)])]),_:1})}}}),Qn=y({__name:"translation",setup(e){const n=be(),t=n.userInfo.role,a=I(Fe);function o(g){const u=Fe.find(B=>B.language===g);return u==null?void 0:u.country}const p=I(n.translateLanguage?n.translateLanguage:""),l=I(n.translateLanguage?o(n.translateLanguage):""),r=g=>{p.value=g.language,l.value=g.country,i()},s=I(n.enableTranslate);function h(){if(p.value===""){wt({message:"需要选择翻译语言才能开启翻译",type:"warning"}),s.value=!s.value;return}i()}function i(){if(p.value){const g={language:p.value,open:s.value};Qt(g).then(u=>{console.log("设置翻译成功",u),n.updateTranslations(g)}).catch(u=>{console.log("设置翻译失败",u)})}}return(g,u)=>{const B=St,T=ue,Q=qe,D=Ne,G=Ue,z=Xe,U=$t;return d(),C(j,null,[A(z,{trigger:"click"},{dropdown:b(()=>[A(G,null,{default:b(()=>[A(D,{class:"w-full mb-10 overflow-hidden",style:{height:"72vh","border-bottom":"1px solid #F2F3F5"}},{default:b(()=>[(d(!0),C(j,null,Ae(v(a),P=>(d(),S(Q,{disabled:v(t)=="worker",key:`locale-${P}`,onClick:ie=>r(P),"aria-hidden":"false"},{default:b(()=>[A(T,{class:"box-item",effect:"dark",content:`${v(t)=="worker"?"如需修改语言，请联系您的上级":P.language}`,placement:"right"},{default:b(()=>[Be(W(P.country),1)]),_:2},1032,["content"])]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),_:1})]),default:b(()=>[A(B,{type:"primary",plain:""},{default:b(()=>[E("p",null,"翻译语言："+W(v(l)),1),A(v(J),{icon:"ri:arrow-drop-down-line",class:"ml-2",style:{"font-size":"22px"}})]),_:1})]),_:1}),v(t)!="worker"?(d(),S(U,{key:0,modelValue:v(s),"onUpdate:modelValue":u[0]||(u[0]=P=>yt(s)?s.value=P:null),width:"60","inline-prompt":"","active-text":"已翻译","inactive-text":"未翻译",onChange:h},null,8,["modelValue"])):ve("",!0)],64)}}}),Dn={class:"flex py-2 ml-2 pb-3.5"},Rn={class:"tag-content flex items-center justify-between"},Fn={class:"tag-label"},Vn={key:0},Ln={key:1},Pn={class:"tag-actions"},Kn=y({__name:"Tag",props:{navTags:{}},emits:["close","openMenu","refresh"],setup(e,{emit:n}){const t=e,a=n,o=It(),p=je(),l=I();H(()=>o.path,i=>{l.value=i},{immediate:!0});const r=i=>{p.push(i.path)},s=(i,g,u)=>{a("close",i,g,u)},h=()=>{a("refresh")};return(i,g)=>{const u=Ot,B=Ne;return d(),S(B,{always:""},{default:b(()=>[E("div",Dn,[(d(!0),C(j,null,Ae(t.navTags,(T,Q)=>(d(),S(u,{key:T.name,class:"ml-2 cursor-pointer flex-shrink-0",effect:l.value===T.path?"dark":void 0,type:"primary",size:"large",hit:!0,closable:T.path!="/"&&T.name!=="welcome.welcome",onClick:D=>r(T),onContextmenu:kt(D=>a("openMenu",D,Q),["prevent"]),onClose:D=>s(Q,T.path,l.value)},{default:b(()=>[E("div",Rn,[E("div",Fn,[T.path=="/userManger"?(d(),C("div",Vn,W(i.$t("userMarger.userManger")),1)):(d(),C("div",Ln,W(i.$t(T.name)),1))]),E("div",Pn,[A(v(J),{icon:"mi:refresh",style:{"font-size":"14px"},class:"ml-1 -mr-1",onClick:h})])]),R(i.$slots,"default",{item:T,currentPath:l.value,index:Q})]),_:2},1032,["effect","closable","onClick","onContextmenu","onClose"]))),128))])]),_:3})}}}),zn=y({__name:"index",emits:["refresh"],setup(e,{emit:n}){const t=n,a=je(),o=Oe(),p=(r,s,h)=>{if(console.log("关闭信息",r,s,h),s==="/welcome"){console.log("不能关闭 /welcome 标签");return}o.navTags.splice(r,1);const i=o.navTags.length;if(!i){a.replace("/index");return}if(s===h&&i>0){const g=o.navTags[i-1];g&&g.path&&a.replace(g.path)}},l=()=>{t("refresh")};return(r,s)=>(d(),C("div",{class:L(["transition-width fixed left-50 z-10 shadow-sm bg-white rounded-md",{"custom-width-collapsed":v(o).isCollapse,"custom-width-expanded":!v(o).isCollapse}]),style:{"max-width":"63vw"}},[A(Kn,{"nav-tags":v(o).navTags,onClose:p,onRefresh:l},null,8,["nav-tags"])],2))}}),Wn=$e(zn,[["__scopeId","data-v-d912e8b8"]]),Gn={class:"h-full flex justify-between items-center"},jn={class:"flex items-center h-full"},qn={class:"flex items-center mr-32"},Un={class:"text-2xl font-bold"},Xn={class:"flex items-center h-full"},Zn={class:"space-x-8 items-center"},Hn=y({__name:"index",emits:["refresh"],setup(e,{emit:n}){const t=n,a=()=>{t("refresh")},o="TGYK Prod";return(p,l)=>{const r=Nt;return d(),C("div",Gn,[E("div",jn,[E("div",qn,[l[0]||(l[0]=E("img",{src:On,alt:"",class:"w-10 h-10"},null,-1)),E("p",Un,W(v(o)),1)]),A(Wn,{onRefresh:a,class:"ml-52"})]),E("div",Xn,[E("div",Zn,[A(Qn),A(r),A($n)])])])}}}),Jn="/tg-yk-online/assets/bg-jfR3pIwr.jpg",As=y({__name:"home",setup(e){const n=I(0),t=()=>{n.value++};return(a,o)=>{const p=Xt,l=qt;return d(),S(l,{class:"h-full",style:_e({"background-image":`url(${v(Jn)})`,"background-size":"cover","background-repeat":"no-repeat",height:"100%",overflow:"hidden"})},{default:b(()=>[A(p,{class:"shadow-md z-10 rounded-lg"},{default:b(()=>[A(Hn,{onRefresh:t,class:"rounded-lg",style:{"background-color":"#fff"}})]),_:1}),A(l,null,{default:b(()=>[A(En),A(Bn,{refreshKey:v(n)},null,8,["refreshKey"])]),_:1})]),_:1},8,["style"])}}});export{As as default};
