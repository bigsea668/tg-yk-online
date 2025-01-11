import{p as gt,aj as vt,d as Ce,c as j,a as ht,t as w,e as a,af as bt,o as v,h as $,i as n,b as M,n as z,$ as p,a0 as ee,r as Le,Z as C,m as yt,_ as et,am as wt,w as kt,V as ye,E as Ct,G as $t,an as Et,ao as It,y as Ue,ap as Oe,aq as je,ar as Ke,z as ze,B as Ie,C as Tt,as as Ae,F as Ge,at as Bt,X as fe,H as re,a4 as l,Y as s,f as He,ad as se,a8 as $e,au as Ee,I as Se,T as St,av as Nt,aw as tt,Q as _t,ax as Vt,ay as at,az as We,aA as qe,al as O,a9 as we,J as ce,a3 as me,aa as Y,a1 as Lt,aB as zt}from"./index-DNkZCZKw.js";import{E as At,f as Pt,g as Ut,h as Gt,b as ot,v as lt,c as nt,e as st}from"./el-select-CZyzFNTt.js";import{E as Mt}from"./el-pagination-nv7hzxsA.js";import"./el-tag-B3vrMW3X.js";import{f as Ze,g as le,E as Rt,o as Xe,c as Dt,b as Ft}from"./el-scrollbar-CNZ0YxQa.js";import{E as Me}from"./el-input-C7PQpcn4.js";import{a as Ot,E as jt}from"./el-table-column-B2N8snbp.js";import"./el-checkbox-BNrqvxQy.js";import"./el-tooltip-l0sNRNKZ.js";import{E as Re}from"./el-button-BBd7XdAz.js";import{I as q}from"./iconify-DdIyU_s5.js";import{E as Kt,a as Ht}from"./el-form-item-BzkB0thA.js";import{E as Wt}from"./el-upload-Dj4z9r4d.js";import{g as rt,i as qt,a as Zt,d as Xt,u as Jt,b as Qt,c as Yt,e as xt,f as ea,h as Je,j as ta}from"./account-D4zKK7eJ.js";import{E as it}from"./index-CdiogIwU.js";import{_ as ut}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as aa}from"./material-D0WhZkFI.js";import{g as oa}from"./user-BC-kSluI.js";import{g as Ne}from"./account.StatusEnum-D3Ud_gcQ.js";import{i as la}from"./validator-Du4r6jAO.js";import{a as Qe}from"./index-Bw2kdCwP.js";import{d as _e}from"./dropdown-BZX4dxw3.js";import"./refs-bL7SWxPl.js";import"./_Uint8Array-TKbxRT1Z.js";import"./_initCloneObject-qcFlvX_W.js";const na=gt({trigger:Ze.trigger,placement:_e.placement,disabled:Ze.disabled,visible:le.visible,transition:le.transition,popperOptions:_e.popperOptions,tabindex:_e.tabindex,content:le.content,popperStyle:le.popperStyle,popperClass:le.popperClass,enterable:{...le.enterable,default:!0},effect:{...le.effect,default:"light"},teleported:le.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),sa={"update:visible":e=>vt(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},ra="onUpdate:visible",ia=Ce({name:"ElPopover"}),ua=Ce({...ia,props:na,emits:sa,setup(e,{expose:c,emit:y}){const u=e,h=j(()=>u[ra]),b=ht("popover"),S=w(),B=j(()=>{var m;return(m=a(S))==null?void 0:m.popperRef}),E=j(()=>[{width:bt(u.width)},u.popperStyle]),f=j(()=>[b.b(),u.popperClass,{[b.m("plain")]:!!u.content}]),Z=j(()=>u.transition===`${b.namespace.value}-fade-in-linear`),_=()=>{var m;(m=S.value)==null||m.hide()},L=()=>{y("before-enter")},R=()=>{y("before-leave")},te=()=>{y("after-enter")},U=()=>{y("update:visible",!1),y("after-leave")};return c({popperRef:B,hide:_}),(m,G)=>(v(),$(a(Rt),yt({ref_key:"tooltipRef",ref:S},m.$attrs,{trigger:m.trigger,placement:m.placement,disabled:m.disabled,visible:m.visible,transition:m.transition,"popper-options":m.popperOptions,tabindex:m.tabindex,content:m.content,offset:m.offset,"show-after":m.showAfter,"hide-after":m.hideAfter,"auto-close":m.autoClose,"show-arrow":m.showArrow,"aria-label":m.title,effect:m.effect,enterable:m.enterable,"popper-class":a(f),"popper-style":a(E),teleported:m.teleported,persistent:m.persistent,"gpu-acceleration":a(Z),"onUpdate:visible":a(h),onBeforeShow:L,onBeforeHide:R,onShow:te,onHide:U}),{content:n(()=>[m.title?(v(),M("div",{key:0,class:z(a(b).e("title")),role:"title"},p(m.title),3)):ee("v-if",!0),Le(m.$slots,"default",{},()=>[C(p(m.content),1)])]),default:n(()=>[m.$slots.reference?Le(m.$slots,"reference",{key:0}):ee("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ca=et(ua,[["__file","popover.vue"]]);const Ye=(e,c)=>{const y=c.arg||c.value,u=y==null?void 0:y.popperRef;u&&(u.triggerRef=e)};var da={mounted(e,c){Ye(e,c)},updated(e,c){Ye(e,c)}};const pa="popover",fa=wt(da,pa),ma=kt(ca,{directive:fa}),Pe="_trap-focus-children",de=[],xe=e=>{if(de.length===0)return;const c=de[de.length-1][Pe];if(c.length>0&&e.code===Ct.tab){if(c.length===1){e.preventDefault(),document.activeElement!==c[0]&&c[0].focus();return}const y=e.shiftKey,u=e.target===c[0],h=e.target===c[c.length-1];u&&y&&(e.preventDefault(),c[c.length-1].focus()),h&&!y&&(e.preventDefault(),c[0].focus())}},ga={beforeMount(e){e[Pe]=Xe(e),de.push(e),de.length<=1&&document.addEventListener("keydown",xe)},updated(e){ye(()=>{e[Pe]=Xe(e)})},unmounted(){de.shift(),de.length===0&&document.removeEventListener("keydown",xe)}},va=Ce({name:"ElMessageBox",directives:{TrapFocus:ga},components:{ElButton:Re,ElFocusTrap:Dt,ElInput:Me,ElOverlay:At,ElIcon:$t,...Et},inheritAttrs:!1,props:{buttonSize:{type:String,validator:la},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:c}){const{locale:y,zIndex:u,ns:h,size:b}=It("message-box",j(()=>e.buttonSize)),{t:S}=y,{nextZIndex:B}=u,E=w(!1),f=Ue({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:Oe(je),cancelButtonLoadingIcon:Oe(je),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:B()}),Z=j(()=>{const T=f.type;return{[h.bm("icon",T)]:T&&Ke[T]}}),_=Qe(),L=Qe(),R=j(()=>f.icon||Ke[f.type]||""),te=j(()=>!!f.message),U=w(),m=w(),G=w(),K=w(),pe=w(),ie=j(()=>f.confirmButtonClass);ze(()=>f.inputValue,async T=>{await ye(),e.boxType==="prompt"&&T!==null&&ae()},{immediate:!0}),ze(()=>E.value,T=>{var P,D;T&&(e.boxType!=="prompt"&&(f.autofocus?G.value=(D=(P=pe.value)==null?void 0:P.$el)!=null?D:U.value:G.value=U.value),f.zIndex=B()),e.boxType==="prompt"&&(T?ye().then(()=>{var J;K.value&&K.value.$el&&(f.autofocus?G.value=(J=V())!=null?J:U.value:G.value=U.value)}):(f.editorErrorMessage="",f.validateError=!1))});const ue=j(()=>e.draggable),N=j(()=>e.overflow);Pt(U,m,ue,N),Ie(async()=>{await ye(),e.closeOnHashChange&&window.addEventListener("hashchange",x)}),Tt(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",x)});function x(){E.value&&(E.value=!1,ye(()=>{f.action&&c("action",f.action)}))}const X=()=>{e.closeOnClickModal&&I(f.distinguishCancelAndClose?"close":"cancel")},i=Gt(X),d=T=>{if(f.inputType!=="textarea")return T.preventDefault(),I("confirm")},I=T=>{var P;e.boxType==="prompt"&&T==="confirm"&&!ae()||(f.action=T,f.beforeClose?(P=f.beforeClose)==null||P.call(f,T,f,x):x())},ae=()=>{if(e.boxType==="prompt"){const T=f.inputPattern;if(T&&!T.test(f.inputValue||""))return f.editorErrorMessage=f.inputErrorMessage||S("el.messagebox.error"),f.validateError=!0,!1;const P=f.inputValidator;if(Ae(P)){const D=P(f.inputValue);if(D===!1)return f.editorErrorMessage=f.inputErrorMessage||S("el.messagebox.error"),f.validateError=!0,!1;if(Ge(D))return f.editorErrorMessage=D,f.validateError=!0,!1}}return f.editorErrorMessage="",f.validateError=!1,!0},V=()=>{const T=K.value.$refs;return T.input||T.textarea},H=()=>{I("close")},W=()=>{e.closeOnPressEscape&&H()};return e.lockScroll&&Ut(E),{...Bt(f),ns:h,overlayEvent:i,visible:E,hasMessage:te,typeClass:Z,contentId:_,inputId:L,btnSize:b,iconComponent:R,confirmButtonClasses:ie,rootRef:U,focusStartRef:G,headerRef:m,inputRef:K,confirmRef:pe,doClose:x,handleClose:H,onCloseRequested:W,handleWrapperClick:X,handleInputEnter:d,handleAction:I,t:S}}});function ha(e,c,y,u,h,b){const S=fe("el-icon"),B=fe("close"),E=fe("el-input"),f=fe("el-button"),Z=fe("el-focus-trap"),_=fe("el-overlay");return v(),$(St,{name:"fade-in-linear",onAfterLeave:L=>e.$emit("vanish"),persisted:""},{default:n(()=>[re(l(_,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:n(()=>[s("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:z(`${e.ns.namespace.value}-overlay-message-box`),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[l(Z,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:n(()=>[s("div",{ref:"rootRef",class:z([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:He(e.customStyle),tabindex:"-1",onClick:se(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?(v(),M("div",{key:0,ref:"headerRef",class:z([e.ns.e("header"),{"show-close":e.showClose}])},[s("div",{class:z(e.ns.e("title"))},[e.iconComponent&&e.center?(v(),$(S,{key:0,class:z([e.ns.e("status"),e.typeClass])},{default:n(()=>[(v(),$($e(e.iconComponent)))]),_:1},8,["class"])):ee("v-if",!0),s("span",null,p(e.title),1)],2),e.showClose?(v(),M("button",{key:0,type:"button",class:z(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:L=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:Ee(se(L=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[l(S,{class:z(e.ns.e("close"))},{default:n(()=>[l(B)]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):ee("v-if",!0)],2)):ee("v-if",!0),s("div",{id:e.contentId,class:z(e.ns.e("content"))},[s("div",{class:z(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(v(),$(S,{key:0,class:z([e.ns.e("status"),e.typeClass])},{default:n(()=>[(v(),$($e(e.iconComponent)))]),_:1},8,["class"])):ee("v-if",!0),e.hasMessage?(v(),M("div",{key:1,class:z(e.ns.e("message"))},[Le(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(v(),$($e(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(v(),$($e(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:n(()=>[C(p(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):ee("v-if",!0)],2),re(s("div",{class:z(e.ns.e("input"))},[l(E,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":L=>e.inputValue=L,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:z({invalid:e.validateError}),onKeydown:Ee(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),s("div",{class:z(e.ns.e("errormsg")),style:He({visibility:e.editorErrorMessage?"visible":"hidden"})},p(e.editorErrorMessage),7)],2),[[Se,e.showInput]])],10,["id"]),s("div",{class:z(e.ns.e("btns"))},[e.showCancelButton?(v(),$(f,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:z([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:L=>e.handleAction("cancel"),onKeydown:Ee(se(L=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:n(()=>[C(p(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):ee("v-if",!0),re(l(f,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:z([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:L=>e.handleAction("confirm"),onKeydown:Ee(se(L=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:n(()=>[C(p(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[Se,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[Se,e.visible]])]),_:3},8,["onAfterLeave"])}var ba=et(va,[["render",ha],["__file","index.vue"]]);const ke=new Map,ya=e=>{let c=document.body;return e.appendTo&&(Ge(e.appendTo)&&(c=document.querySelector(e.appendTo)),qe(e.appendTo)&&(c=e.appendTo),qe(c)||(c=document.body)),c},wa=(e,c,y=null)=>{const u=l(ba,e,Ae(e.message)||tt(e.message)?{default:Ae(e.message)?e.message:()=>e.message}:null);return u.appContext=y,at(u,c),ya(e).appendChild(c.firstElementChild),u.component},ka=()=>document.createElement("div"),Ca=(e,c)=>{const y=ka();e.onVanish=()=>{at(null,y),ke.delete(h)},e.onAction=b=>{const S=ke.get(h);let B;e.showInput?B={value:h.inputValue,action:b}:B=b,e.callback?e.callback(B,u.proxy):b==="cancel"||b==="close"?e.distinguishCancelAndClose&&b!=="cancel"?S.reject("close"):S.reject("cancel"):S.resolve(B)};const u=wa(e,y,c),h=u.proxy;for(const b in e)We(e,b)&&!We(h.$props,b)&&(h[b]=e[b]);return h.visible=!0,h};function ge(e,c=null){if(!Nt)return Promise.reject();let y;return Ge(e)||tt(e)?e={message:e}:y=e.callback,new Promise((u,h)=>{const b=Ca(e,c??ge._context);ke.set(b,{options:e,callback:y,resolve:u,reject:h})})}const $a=["alert","confirm","prompt"],Ea={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};$a.forEach(e=>{ge[e]=Ia(e)});function Ia(e){return(c,y,u,h)=>{let b="";return _t(y)?(u=y,b=""):Vt(y)?b="":b=y,ge(Object.assign({title:b,message:c,type:"",...Ea[e]},u,{boxType:e}),h)}}ge.close=()=>{ke.forEach((e,c)=>{c.doClose()}),ke.clear()};ge._context=null;const ne=ge;ne.install=e=>{ne._context=e._context,e.config.globalProperties.$msgbox=ne,e.config.globalProperties.$messageBox=ne,e.config.globalProperties.$alert=ne.alert,e.config.globalProperties.$confirm=ne.confirm,e.config.globalProperties.$prompt=ne.prompt};const Ve=ne,Ta={style:{float:"left"}},Ba={class:"mt-2 flex justify-between"},Sa={style:{float:"left"}},Na={class:"w-full flex"},_a={class:"flex items-center"},Va={class:"mr-1"},La={key:0,class:"w-1/4 p-4",style:{"font-size":"14px"}},za=Ce({__name:"accountImport",props:["show","type","row","proxyList"],emits:["update:show","search","upGetGroupLists"],setup(e,{emit:c}){const y=w(!1),u=e,h=c;ze(()=>u.row,()=>{u.row&&(N.value.FristName=u.row.firstName,N.value.LastName=u.row.lastName)});const b=Ue({accountGroup:O.global.t("accounts.import.defaultGrouping"),accountProxy:""}),S=w(),B=w([]);function E(i,d){b.accountGroup="默认分组"}function f(i){B.value=B.value.filter((d,I)=>I!==i)}const Z=i=>{},_=(i,d)=>{const I=i.raw;if(!(I.type==="application/zip"||I.name.endsWith(".zip"))){Y({message:O.global.t("accounts.import.tipUploadErr"),type:"error"}),S.value.clearFiles();return}B.value.push(I)},L=()=>{const i=new FormData;B.value.forEach(d=>{d instanceof File&&i.append("files",d)}),b.accountGroup=="默认分组"?i.append("groupId",String(0)):i.append("groupId",String(b.accountGroup)),i.append("proxyId",String(b.accountProxy)),qt(i).then(d=>{h("search")}).catch(d=>{}),X()},R=w([]);function te(){m.value=!1}function U(){rt().then(i=>{try{R.value=i.data.data.data.map(d=>({id:d.id,groupName:d.name}))}catch{}}).catch(i=>{i.data})}const m=w(!1),G=w(""),K=w("");function pe(){m.value=!0}function ie(){m.value=!1;const i=new FormData;i.append("Name",G.value),i.append("Description",K.value),Zt(i).then(d=>{Y({message:"新增分组成功",type:"success",plain:!0}),U(),h("upGetGroupLists")}).catch(d=>{})}function ue(i){const d=new FormData;d.append("id",String(i)),Xt(d).then(I=>{Y({message:O.global.t("accounts.import.delGropupSuccess"),type:"success",plain:!0}),U(),h("upGetGroupLists"),R.value=[],b.accountGroup="默认分组"}).catch(I=>{})}const N=w({FristName:"",LastName:"",About:""}),x=()=>{if(N.value.FristName||N.value.LastName||N.value.About){const i=new FormData;i.append("id",String(u.row.id)),i.append("firstName",N.value.FristName),i.append("lastName",N.value.LastName),i.append("about",N.value.About),Jt(i).then(d=>{h("search")}).catch(d=>{}),X()}};function X(){h("update:show",!1),B.value=[],S.value&&S.value.clearFiles(),b.accountGroup=O.global.t("accounts.import.defaultGrouping")}return Ie(()=>{U()}),(i,d)=>{const I=Re,ae=nt,V=Me,H=st,W=Kt,T=Wt,P=Ft,D=it,J=Ht,ve=ot,he=lt;return re((v(),$(ve,{modelValue:u.show,"onUpdate:modelValue":[d[7]||(d[7]=k=>u.show=k),X],title:u.type=="import"?i.$t("accounts.import.importAcc"):i.$t("accounts.import.modifyAccInfo"),width:"700",onClose:X},{footer:n(()=>[l(I,{onClick:X},{default:n(()=>[C(p(i.$t("btn.close")),1)]),_:1}),u.type=="import"?(v(),$(I,{key:0,type:"primary",onClick:L},{default:n(()=>[C(p(i.$t("btn.submit")),1)]),_:1})):(v(),$(I,{key:1,type:"primary",onClick:x},{default:n(()=>[C(p(i.$t("btn.submit")),1)]),_:1}))]),default:n(()=>[u.type=="import"?re((v(),$(J,{key:0,model:a(b),"label-width":"auto"},{default:n(()=>[l(W,{label:"选择分组/代理",prop:"accountGroup","label-width":"120px"},{default:n(()=>[l(H,{modelValue:a(b).accountGroup,"onUpdate:modelValue":d[2]||(d[2]=k=>a(b).accountGroup=k),clearable:"",placeholder:i.$t("accounts.import.selectGroup"),size:"large",style:{width:"250px"},filterable:""},{footer:n(()=>[a(m)?(v(),M(ce,{key:1},[l(V,{modelValue:a(G),"onUpdate:modelValue":d[0]||(d[0]=k=>we(G)?G.value=k:null),class:"option-input",placeholder:i.$t("accounts.import.addGroupName"),size:"default"},null,8,["modelValue","placeholder"]),l(V,{modelValue:a(K),"onUpdate:modelValue":d[1]||(d[1]=k=>we(K)?K.value=k:null),class:"option-input",placeholder:i.$t("accounts.import.addGroupDes"),size:"default"},null,8,["modelValue","placeholder"]),s("div",Ba,[l(I,{class:"w-1/2",size:"default",onClick:te},{default:n(()=>[C(p(i.$t("btn.cancel")),1)]),_:1}),l(I,{class:"w-1/2",type:"primary",size:"default",onClick:ie},{default:n(()=>[C(p(i.$t("accounts.import.addConfirm")),1)]),_:1})])],64)):(v(),$(I,{key:0,class:"w-full",type:"primary",size:"default",onClick:pe},{default:n(()=>[C(p(i.$t("accounts.import.addGropup")),1)]),_:1}))]),default:n(()=>[(v(!0),M(ce,null,me(a(R),k=>(v(),$(ae,{key:k.id,label:k.groupName,value:k.id,class:"flex justify-between items-center"},{default:n(()=>[s("div",Ta,p(k.groupName),1),s("span",null,[l(I,{type:"danger",size:"small",onClick:oe=>ue(k.id)},{default:n(()=>[C(p(i.$t("accounts.import.delGroup")),1)]),_:2},1032,["onClick"])])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),l(H,{modelValue:a(b).accountProxy,"onUpdate:modelValue":d[3]||(d[3]=k=>a(b).accountProxy=k),clearable:"",placeholder:"选择代理",size:"large",class:"ml-2",style:{width:"250px"},filterable:""},{default:n(()=>[(v(!0),M(ce,null,me(u.proxyList,k=>(v(),$(ae,{key:k.id,label:k.groupName,value:k.id,class:"flex justify-between items-center"},{default:n(()=>[s("div",Sa,p(k.groupName),1),s("span",null,[l(I,{type:"danger",size:"small",onClick:oe=>ue(k.id)},{default:n(()=>[C(p(i.$t("accounts.import.delGroup")),1)]),_:2},1032,["onClick"])])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(W,{label:i.$t("accounts.import.importFile"),"label-width":"120px"},{default:n(()=>[l(T,{ref_key:"uploadRef",ref:S,class:"upload-demo","file-list":a(B),"auto-upload":!1,"on-preview":Z,"on-remove":E,"on-change":_,multiple:!0,"show-file-list":!1,drag:"",style:{width:"100%"}},{default:n(()=>[l(a(q),{class:"w-1/2 mx-auto el-icon--upload",icon:"uiw:cloud-upload",style:{"font-size":"50px"}}),d[8]||(d[8]=s("div",{class:"el-upload__text"},[C(" 请"),s("em",null,"点击或拖拽"),C("上传"),s("em",null,"`.zip`"),C("文件 ")],-1))]),_:1},8,["file-list"]),s("div",Na,[l(P,{always:!0,"max-height":"200px",class:"w-3/4 pr-2"},{default:n(()=>[(v(!0),M(ce,null,me(a(B),(k,oe)=>(v(),M("div",{key:oe,class:"w-full flex justify-between items-center mt-2"},[s("div",_a,[l(a(q),{icon:"bxs:file",class:"text-slate-300",style:{"font-size":"20px"}}),s("span",Va,p(k.name),1)]),l(I,{type:"danger",size:"small",onClick:Te=>f(oe)},{default:n(()=>d[9]||(d[9]=[C("Delete")])),_:2},1032,["onClick"])]))),128))]),_:1}),a(B).length!==0?(v(),M("div",La,[d[10]||(d[10]=C(" 导入账号总数：")),l(D,{type:"primary"},{default:n(()=>[C(p(a(B).length),1)]),_:1})])):ee("",!0)])]),_:1},8,["label"])]),_:1},8,["model"])),[[he,a(y)]]):re((v(),$(J,{key:1,model:a(N),"label-width":"auto"},{default:n(()=>[l(W,{label:"Fist Name",prop:"FristName","label-width":"100px"},{default:n(()=>[l(V,{modelValue:a(N).FristName,"onUpdate:modelValue":d[4]||(d[4]=k=>a(N).FristName=k),placeholder:i.$t("accounts.import.enterLastName"),clearable:""},null,8,["modelValue","placeholder"])]),_:1}),l(W,{label:"Last Name",prop:"LastName","label-width":"100px"},{default:n(()=>[l(V,{modelValue:a(N).LastName,"onUpdate:modelValue":d[5]||(d[5]=k=>a(N).LastName=k),placeholder:i.$t("accounts.import.enterFirstName"),clearable:""},null,8,["modelValue","placeholder"])]),_:1}),l(W,{label:"about",prop:"About","label-width":"100px"},{default:n(()=>[l(V,{modelValue:a(N).About,"onUpdate:modelValue":d[6]||(d[6]=k=>a(N).About=k),placeholder:i.$t("accounts.import.aboutInfo"),clearable:""},null,8,["modelValue","placeholder"])]),_:1})]),_:1},8,["model"])),[[he,a(y)]])]),_:1},8,["modelValue","title"])),[[he,a(y)]])}}}),Aa=ut(za,[["__scopeId","data-v-46615b61"]]),Pa={class:"grid grid-cols-12 gap-4"},Ua={class:"col-span-2 mt-1 bg-white rounded-md p-4"},Ga={class:"mt-2 mb-6 pt-2 pb-6 flex flex-col items-center justify-center",style:{"border-bottom":"1px solid #ccc"}},Ma={class:"",style:{width:"90%"}},Ra={class:"hidden md:inline-block"},Da={class:"mt-2 flex flex-col items-center justify-center"},Fa={style:{width:"90%"}},Oa={class:"hidden lg:inline-block ml-2"},ja={class:"hidden md:inline-block lg:hidden ml-2"},Ka={style:{width:"90%"}},Ha={class:"hidden lg:inline-block ml-2"},Wa={class:"hidden md:inline-block lg:hidden ml-2"},qa={style:{width:"90%"}},Za={class:"hidden lg:inline-block ml-2"},Xa={class:"hidden md:inline-block lg:hidden ml-2"},Ja={style:{width:"90%"}},Qa={class:"hidden lg:inline-block ml-2"},Ya={class:"hidden md:inline-block lg:hidden ml-2"},xa={style:{width:"90%"}},eo={class:"hidden lg:inline-block ml-2"},to={class:"hidden md:inline-block lg:hidden ml-2"},ao={class:"mt-4 w-full flex justify-between"},oo={style:{width:"90%"}},lo={class:"hidden lg:inline-block ml-2"},no={class:"hidden md:inline-block lg:hidden ml-2"},so={style:{"border-bottom":"1px dashed #ccc"}},ro={style:{width:"90%"}},io={class:"col-span-10 mt-1 bg-white rounded-md p-4"},uo={style:{height:"82.5vh",overflow:"auto"}},co=["src"],po={class:"must"},fo={class:"mt-4"},mo=Ce({__name:"account",setup(e){const c=Lt(),y=w(!1),u=w({searchLike:"",UserId:"",GroupId:""}),h=Ue({pageSizes:[1,10,20,50],pageSize:10,pageNum:1,total:400}),b=o=>{_()},S=o=>{_()},B=w(),E=w([]),f=o=>{E.value=o},Z=w([]);function _(){V.value=!1,y.value=!0;const o={like:u.value.searchLike,UserId:u.value.UserId,GroupId:u.value.GroupId,pageNum:h.pageNum,pageSize:h.pageSize};Qt(o).then(t=>{try{Z.value=t.data.data.data.map(g=>({firstName:g.account.firstName,lastName:g.account.lastName,id:g.account.id,userId:g.account.userId,workerId:g.account.workerId,username:`${g.account.firstName} ${g.account.lastName}`,phone:g.account.phone,status:g.account.status,loginTime:g.account.loginTime,nickName:g.account.nickName,groupId:g.account.groupId,proxyId:g.account.proxyId,headPortrai:g.account.headPortrai,profiles:g.account.profiles})),h.pageNum=t.data.data.pageNumber,h.pageSize=t.data.data.pageSize,h.total=t.data.data.totalCount}catch{}}).catch(t=>{}).finally(()=>{y.value=!1})}function L(o){var t;return(t=R.value.find(g=>g.id===o))==null?void 0:t.selectName}const R=w([]),te=w([]),U=()=>{oa().then(o=>{try{c.userInfo.role==="admin"?(te.value=o.data.data.data.filter(t=>t.customerId===null).map(t=>({id:t.id,selectName:t.username})),R.value=o.data.data.data.filter(t=>t.customerId!==null).map(t=>({id:t.id,selectName:t.username}))):R.value=o.data.data.data.map(t=>({id:t.id,selectName:t.username}))}catch{}}).catch(o=>{o.data})},m=w([]);function G(){rt().then(o=>{try{m.value=o.data.data.data.map(t=>({id:t.id,groupName:t.name}))}catch{}}).catch(o=>{})}function K(o){const t=m.value.find(g=>g.id==o);return t?t.groupName:void 0}const pe=w(null),ie=w(""),ue=w(""),N=w(!1);function x(o){V.value=!1,N.value=!0,ie.value=o}function X(o,t){N.value=!0,ie.value=o,ue.value=t}function i(o){N.value=o}Ie(()=>{_(),U(),G(),ve()});function d(){V.value=!1;const o=E.value.map(g=>g.id),t=new FormData;o.forEach(g=>{t.append("ids",g)}),Yt(t).then(g=>{Y({type:"success",message:O.global.t("accounts.accountTg.batchOnlineSuccess")}),_()}).catch(g=>{g.data})}function I(){V.value=!1;const o=E.value.map(t=>t.id);Ve.confirm(O.global.t("accounts.accountTg.confirmBatchOfflineAcc"),{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",buttonSize:"large"}).then(()=>{const t=new FormData;o.forEach(g=>{t.append("ids",g)}),xt(t).then(g=>{Y({type:"success",message:O.global.t("accounts.accountTg.batchOfflineSuccess")}),_()}).catch(g=>{g.data})}).catch(()=>{})}function ae(){V.value=!1;const o=E.value.map(t=>t.id);Ve.confirm(O.global.t("accounts.accountTg.confirmBatchDelAcc"),{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"error",buttonSize:"large"}).then(()=>{ea(o).then(t=>{Y({type:"success",message:O.global.t("accounts.accountTg.BatchDelSuccess")}),_()}).catch(t=>{})}).catch(()=>{})}const V=w(!1),H=w(""),W=w(null);function T(){V.value=!1;const o={id:{workerId:H.value},data:E.value.map(t=>t.id)};ta(o).then(t=>{Y({message:`${O.global.t("accounts.accountTg.assignWorker")} ${L(H.value)} ${O.global.t("btn.success")}`,type:"success",plain:!0}),_()}).catch(t=>{})}const P=w(!1),D=w(),J=w([]);function ve(){y.value=!0;const o={GroupId:0,Like:D.value};aa(o).then(t=>{try{J.value=t.data.data.data}catch{}}).catch(t=>{}).finally(()=>{y.value=!1})}function he(){P.value=!0,ve()}function k(o){const t=J.value.find(g=>g.id==o);return t?t.remark:void 0}const oe=w(""),Te=o=>{Y({message:`选择了代理:${o.ip}`,type:"success",plain:!0}),oe.value=o.id,ct()};function ct(){P.value=!1,V.value=!1;const o={id:{proxyId:oe.value},data:E.value.map(t=>t.id)};Je(o).then(t=>{Y({message:`${O.global.t("accounts.accountTg.assignProxy")} ${L(oe.value)} ${O.global.t("btn.success")}`,type:"success",plain:!0}),_()}).catch(t=>{})}function dt(){E.value.map(t=>t.id);const o={data:E.value.map(t=>t.id)};Ve.confirm("取消代理?",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",buttonSize:"large"}).then(()=>{Je(o).then(t=>{Y({type:"success",message:"取消代理成功"}),_()}).catch(t=>{})})}return Ie(()=>{const o=g=>{const Q=g.target;Q&&(Q instanceof HTMLElement&&Q.closest(".el-button"))},t=g=>{const Q=g.target;W.value&&!W.value.$el.contains(Q)&&!Q.closest(".el-button")&&(V.value=!1)};document.addEventListener("click",o),document.addEventListener("click",t),zt(()=>{document.removeEventListener("click",o),document.removeEventListener("click",t)})}),(o,t)=>{const g=Me,Q=nt,Be=st,F=Re,A=jt,De=Ot,pt=ot,be=it,ft=Mt,Fe=lt;return v(),M("div",Pa,[s("div",Ua,[s("div",Ga,[l(g,{modelValue:a(u).searchLike,"onUpdate:modelValue":t[0]||(t[0]=r=>a(u).searchLike=r),style:{width:"90%"},placeholder:o.$t("btn.inputSearch"),clearable:""},null,8,["modelValue","placeholder"]),l(Be,{class:"mt-2",modelValue:a(u).UserId,"onUpdate:modelValue":t[1]||(t[1]=r=>a(u).UserId=r),placeholder:a(c).userInfo.role=="admin"?o.$t("accounts.accountTg.selectUser"):o.$t("accounts.accountTg.selectWorker"),style:{width:"90%"},clearable:"",filterable:""},{default:n(()=>[(v(!0),M(ce,null,me(a(c).userInfo.role=="admin"?a(te):a(R),r=>(v(),$(Q,{key:r.id,label:r.selectName,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),l(Be,{class:"mt-2",modelValue:a(u).GroupId,"onUpdate:modelValue":t[2]||(t[2]=r=>a(u).GroupId=r),placeholder:o.$t("accounts.accountTg.selectGrouping"),style:{width:"90%"},clearable:"",filterable:""},{default:n(()=>[(v(!0),M(ce,null,me(a(m),r=>(v(),$(Q,{key:r.id,label:r.groupName,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),s("div",Ma,[l(F,{type:"primary",plain:"",class:"mt-2 w-full overflow-hidden text-overflow-ellipsis",onClick:_},{default:n(()=>[l(a(q),{icon:"mingcute:search-fill",style:{"font-size":"22px"}}),s("span",Ra,p(o.$t("btn.search")),1)]),_:1})])]),s("div",Da,[s("div",Fa,[l(F,{type:"primary",plain:"",class:"mb-2 w-full overflow-hidden text-overflow-ellipsis",onClick:t[3]||(t[3]=r=>x("import"))},{default:n(()=>[l(a(q),{icon:"solar:import-broken",class:"text-2xl"}),s("span",Oa,p(o.$t("accounts.accountTg.importAccData")),1),s("span",ja,p(o.$t("btn.import")),1)]),_:1})]),s("div",Ka,[l(F,{type:"success",plain:"",class:"mb-2 w-full overflow-hidden text-overflow-ellipsis",disabled:a(E).length===0,onClick:d},{default:n(()=>[l(a(q),{icon:"streamline:user-sync-online-in-person-solid",class:"text-2xl"}),s("span",Ha,p(o.$t("accounts.accountTg.accBatchOnline")),1),s("span",Wa,p(o.$t("accounts.accountTg.online")),1)]),_:1},8,["disabled"])]),s("div",qa,[l(F,{type:"warning",plain:"",class:"mb-2 w-full overflow-hidden text-overflow-ellipsis",disabled:a(E).length===0,onClick:I},{default:n(()=>[l(a(q),{icon:"ri:logout-circle-r-line",class:"text-2xl"}),s("span",Za,p(o.$t("accounts.accountTg.accBatchOffline")),1),s("span",Xa,p(o.$t("accounts.accountTg.offline")),1)]),_:1},8,["disabled"])]),s("div",Ja,[l(F,{type:"danger",plain:"",class:"mb-2 w-full overflow-hidden text-overflow-ellipsis",disabled:a(E).length===0,onClick:ae},{default:n(()=>[l(a(q),{icon:"typcn:delete-outline",class:"text-2xl"}),s("span",Qa,p(o.$t("accounts.accountTg.accBatchDel")),1),s("span",Ya,p(o.$t("accounts.accountTg.delete")),1)]),_:1},8,["disabled"])]),s("div",xa,[l(a(ma),{ref_key:"assRef",ref:W,placement:"right",width:280,visible:a(V),trigger:"click"},{reference:n(()=>[l(F,{type:"primary",plain:"",class:"mb-2 w-full overflow-hidden text-overflow-ellipsis",disabled:a(E).length===0,onClick:t[4]||(t[4]=se(r=>V.value=!0,["stop"]))},{default:n(()=>[l(a(q),{icon:"material-symbols:assignment-ind-outline",class:"text-2xl"}),s("span",eo,p(o.$t("accounts.accountTg.accBatchSetupWorker")),1),s("span",to,p(o.$t("accounts.accountTg.worker")),1)]),_:1},8,["disabled"])]),default:n(()=>[l(Be,{modelValue:a(H),"onUpdate:modelValue":t[6]||(t[6]=r=>we(H)?H.value=r:null),placeholder:o.$t("accounts.accountTg.selectWorker"),class:"w-full",size:"large",clearable:"",filterable:"",onClick:t[7]||(t[7]=se(()=>{},["stop"]))},{default:n(()=>[(v(!0),M(ce,null,me(a(R),r=>(v(),$(Q,{key:r.id,label:r.selectName,value:r.id,onClick:t[5]||(t[5]=se(()=>{},["stop"]))},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),s("div",ao,[l(F,{class:"w-1/2",plain:"",size:"large",onClick:t[8]||(t[8]=r=>V.value=!1)},{default:n(()=>[C(p(o.$t("btn.cancel")),1)]),_:1}),l(F,{class:"w-1/2",type:"primary",size:"large",onClick:T},{default:n(()=>[C(p(o.$t("btn.confirm")),1)]),_:1})])]),_:1},8,["visible"])]),s("div",oo,[l(F,{type:"primary",plain:"",class:"mb-2 w-full overflow-hidden text-overflow-ellipsis",disabled:a(E).length===0,onClick:he},{default:n(()=>[l(a(q),{icon:"material-symbols:assignment-ind-outline",class:"text-2xl"}),s("span",lo,p(o.$t("accounts.accountTg.accBatchSetupProxy")),1),s("span",no,p(o.$t("accounts.accountTg.proxy")),1)]),_:1},8,["disabled"]),l(pt,{modelValue:a(P),"onUpdate:modelValue":t[10]||(t[10]=r=>we(P)?P.value=r:null),title:o.$t("accounts.accountTg.selectProxy")+"[可点击行进行选择]",width:"640"},{default:n(()=>[s("div",so,[l(g,{modelValue:a(D),"onUpdate:modelValue":t[9]||(t[9]=r=>we(D)?D.value=r:null),style:{"max-width":"300px"},placeholder:"Please input",class:"mb-4 px-2 py-2"},{append:n(()=>[l(F,{type:"primary",plain:"",onClick:ve},{default:n(()=>[l(a(q),{icon:"mingcute:search-fill",style:{"font-size":"22px"}})]),_:1})]),_:1},8,["modelValue"])]),re((v(),$(De,{data:a(J),style:{width:"100%"},"empty-text":"暂无数据",onRowClick:Te},{default:n(()=>[l(A,{prop:"ip",label:"IP",width:"120"}),l(A,{prop:"port",label:"端口",width:"70"}),l(A,{prop:"userName",label:"账户",width:"100"}),l(A,{prop:"userPass",label:"密码",width:"120"}),l(A,{prop:"remark",label:"备注",width:"100"}),l(A,{fixed:"right",label:"选择","min-width":"130"},{default:n(r=>[l(F,{type:"primary",onClick:se(mt=>Te(r.row),["stop"])},{default:n(()=>t[15]||(t[15]=[C("选择该代理")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Fe,a(y)]])]),_:1},8,["modelValue","title"])]),s("div",ro,[l(F,{type:"danger",plain:"",class:"mb-2 w-full overflow-hidden text-overflow-ellipsis",disabled:a(E).length===0,onClick:dt},{default:n(()=>t[16]||(t[16]=[s("span",{class:"hidden lg:inline-block ml-2"},"批量取消代理",-1),s("span",{class:"hidden md:inline-block lg:hidden ml-2"},"批量取消代理",-1)])),_:1},8,["disabled"])])])]),s("div",io,[s("div",uo,[re((v(),$(De,{ref_key:"tableRef",ref:B,data:a(Z),style:{width:"100%"},border:"",onSelectionChange:f,height:"full"},{default:n(()=>[l(A,{type:"selection",width:"55"}),l(A,{prop:"username",label:o.$t("userMarger.user.userName"),width:"150"},{default:n(r=>[r.row.workerId==null?(v(),$(be,{key:0,type:"success"},{default:n(()=>[C(p(o.$t("accounts.accountTg.notAssigned")),1)]),_:1})):(v(),$(be,{key:1,type:"warning"},{default:n(()=>[C(p(o.$t("accounts.accountTg.worker"))+": "+p(L(r.row.workerId)),1)]),_:2},1024)),t[17]||(t[17]=s("br",null,null,-1)),C(" "+p(r.row.username),1)]),_:1},8,["label"]),l(A,{prop:"nickName",label:o.$t("userMarger.user.nickName")},null,8,["label"]),l(A,{prop:"status",label:o.$t("btn.status")},{default:n(r=>[r.row.status==0?(v(),$(be,{key:0,type:"warning"},{default:n(()=>[C(p(a(Ne)(r.row.status)),1)]),_:2},1024)):r.row.status==1?(v(),$(be,{key:1,type:"success"},{default:n(()=>[C(p(a(Ne)(r.row.status)),1)]),_:2},1024)):(v(),$(be,{key:2,type:"danger"},{default:n(()=>[C(p(a(Ne)(r.row.status)),1)]),_:2},1024))]),_:1},8,["label"]),l(A,{prop:"phone",label:o.$t("accounts.accountTg.phone")},null,8,["label"]),l(A,{prop:"loginTime",label:o.$t("accounts.accountTg.loginTime")},null,8,["label"]),l(A,{prop:"groupId",label:o.$t("accounts.accountTg.groupingId")},{default:n(r=>[C(p(K(r.row.groupId)),1)]),_:1},8,["label"]),l(A,{prop:"proxyId",label:"代理"},{default:n(r=>[C(p(k(r.row.proxyId)),1)]),_:1}),l(A,{prop:"headPortrai",label:o.$t("accounts.accountTg.avatarAddress")},{default:n(r=>[s("img",{src:r.row.headPortrai},null,8,co)]),_:1},8,["label"]),l(A,{prop:"profiles",label:o.$t("accounts.accountTg.briefly")},null,8,["label"]),l(A,{label:o.$t("btn.operate"),width:"120"},{header:n(()=>[s("div",po,[t[18]||(t[18]=s("span",{class:"red"},null,-1)),C(p(o.$t("accounts.accountTg.displayName")),1)])]),default:n(r=>[l(F,{size:"small",type:"warning",plain:"",onClick:mt=>X("mod",r.row)},{default:n(()=>[l(a(q),{icon:"mdi:progress-wrench",style:{"font-size":"18px"}}),C(" "+p(o.$t("accounts.accountTg.modifyInfo")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[Fe,a(y)]])]),s("div",fo,[l(ft,{"current-page":a(h).pageNum,"onUpdate:currentPage":t[11]||(t[11]=r=>a(h).pageNum=r),"page-size":a(h).pageSize,"onUpdate:pageSize":t[12]||(t[12]=r=>a(h).pageSize=r),"page-sizes":a(h).pageSizes,"onUpdate:pageSizes":t[13]||(t[13]=r=>a(h).pageSizes=r),total:a(h).total,"onUpdate:total":t[14]||(t[14]=r=>a(h).total=r),size:"default",background:!0,layout:"total, sizes, prev, pager, next, jumper","default-current-page":1,onSizeChange:b,onCurrentChange:S},null,8,["current-page","page-size","page-sizes","total"])])]),l(Aa,{ref_key:"accountImpRef",ref:pe,show:a(N),type:a(ie),row:a(ue),proxyList:a(J),"onUpdate:show":i,onSearch:_,onUpGetGroupLists:G},null,8,["show","type","row","proxyList"])])}}}),Do=ut(mo,[["__scopeId","data-v-e9666690"]]);export{Do as default};
