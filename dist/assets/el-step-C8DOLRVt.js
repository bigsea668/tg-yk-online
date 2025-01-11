import{aP as Se,au as Ce,p as ne,ah as re,d as O,a as ie,z as R,A as Te,o as r,b as g,r as Q,n as m,e,_ as ue,K as ce,q as Ee,t as v,s as Ve,B as $e,C as Fe,c as E,y as xe,$ as z,X as b,f as ae,h as S,i as f,a7 as Ne,G as te,a3 as d,aU as Ge,af as Ie,Z as J,Y as N,w as Ue,g as Be,aB as V,H as oe,a8 as le,J as q,a2 as K}from"./index-SkQIWFxF.js";import{C as pe,E as ze}from"./el-scrollbar-B_RdZN1g.js";import{f as Le,E as De}from"./index-DMdzZa0p.js";import{b as Pe,c as Me,e as Re,v as Oe}from"./el-select-aoHRwLzr.js";import"./el-form-item-DjY6-g6w.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-tag-C-Ar2SHx.js";import{E as je}from"./el-upload-BngSqAe8.js";/* empty css                        */import{E as Ae,a as He}from"./el-button-CaCwkDis.js";import{b as We,c as qe}from"./material-Co1NEuoq.js";import{I as M}from"./iconify-BwnrVFpF.js";import{i as Ke}from"./utils-DqIM6Gu8.js";import{E as Qe}from"./index-CduaMGvE.js";import{_ as Je}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Xe=(o,w,l)=>Le(o.subTree).filter(n=>{var a;return Ce(n)&&((a=n.type)==null?void 0:a.name)===w&&!!n.component}).map(n=>n.component.uid).map(n=>l[n]).filter(n=>!!n),Ye=(o,w)=>{const l={},c=Se([]);return{children:c,addChild:a=>{l[a.uid]=a,c.value=Xe(o,w,l)},removeChild:a=>{delete l[a],c.value=c.value.filter(p=>p.uid!==a)}}},Ze=ne({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),et={[pe]:(o,w)=>[o,w].every(re)},tt=O({name:"ElSteps"}),lt=O({...tt,props:Ze,emits:et,setup(o,{emit:w}){const l=o,c=ie("steps"),{children:h,addChild:n,removeChild:a}=Ye(ce(),"ElStep");return R(h,()=>{h.value.forEach((p,y)=>{p.setIndex(y)})}),Te("ElSteps",{props:l,steps:h,addStep:n,removeStep:a}),R(()=>l.active,(p,y)=>{w(pe,p,y)}),(p,y)=>(r(),g("div",{class:m([e(c).b(),e(c).m(p.simple?"simple":p.direction)])},[Q(p.$slots,"default")],2))}});var st=ue(lt,[["__file","steps.vue"]]);const at=ne({title:{type:String,default:""},icon:{type:Ee},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),ot=O({name:"ElStep"}),nt=O({...ot,props:at,setup(o){const w=o,l=ie("step"),c=v(-1),h=v({}),n=v(""),a=Ve("ElSteps"),p=ce();$e(()=>{R([()=>a.props.active,()=>a.props.processStatus,()=>a.props.finishStatus],([s])=>{T(s)},{immediate:!0})}),Fe(()=>{a.removeStep(F.uid)});const y=E(()=>w.status||n.value),X=E(()=>{const s=a.steps.value[c.value-1];return s?s.currentStatus:"wait"}),L=E(()=>a.props.alignCenter),j=E(()=>a.props.direction==="vertical"),C=E(()=>a.props.simple),$=E(()=>a.steps.value.length),A=E(()=>{var s;return((s=a.steps.value[$.value-1])==null?void 0:s.uid)===(p==null?void 0:p.uid)}),G=E(()=>C.value?"":a.props.space),H=E(()=>[l.b(),l.is(C.value?"simple":a.props.direction),l.is("flex",A.value&&!G.value&&!L.value),l.is("center",L.value&&!j.value&&!C.value)]),I=E(()=>{const s={flexBasis:re(G.value)?`${G.value}px`:G.value?G.value:`${100/($.value-(L.value?0:1))}%`};return j.value||A.value&&(s.maxWidth=`${100/$.value}%`),s}),Y=s=>{c.value=s},k=s=>{const x=s==="wait",D={transitionDelay:`${x?"-":""}${150*c.value}ms`},W=s===a.props.processStatus||x?0:100;D.borderWidth=W&&!C.value?"1px":0,D[a.props.direction==="vertical"?"height":"width"]=`${W}%`,h.value=D},T=s=>{s>c.value?n.value=a.props.finishStatus:s===c.value&&X.value!=="error"?n.value=a.props.processStatus:n.value="wait";const x=a.steps.value[c.value-1];x&&x.calcProgress(n.value)},F=xe({uid:p.uid,currentStatus:y,setIndex:Y,calcProgress:k});return a.addStep(F),(s,x)=>(r(),g("div",{style:ae(e(I)),class:m(e(H))},[z(" icon & line "),b("div",{class:m([e(l).e("head"),e(l).is(e(y))])},[e(C)?z("v-if",!0):(r(),g("div",{key:0,class:m(e(l).e("line"))},[b("i",{class:m(e(l).e("line-inner")),style:ae(h.value)},null,6)],2)),b("div",{class:m([e(l).e("icon"),e(l).is(s.icon||s.$slots.icon?"icon":"text")])},[Q(s.$slots,"icon",{},()=>[s.icon?(r(),S(e(te),{key:0,class:m(e(l).e("icon-inner"))},{default:f(()=>[(r(),S(Ne(s.icon)))]),_:1},8,["class"])):e(y)==="success"?(r(),S(e(te),{key:1,class:m([e(l).e("icon-inner"),e(l).is("status")])},{default:f(()=>[d(e(Ge))]),_:1},8,["class"])):e(y)==="error"?(r(),S(e(te),{key:2,class:m([e(l).e("icon-inner"),e(l).is("status")])},{default:f(()=>[d(e(Ie))]),_:1},8,["class"])):e(C)?z("v-if",!0):(r(),g("div",{key:3,class:m(e(l).e("icon-inner"))},J(c.value+1),3))])],2)],2),z(" title & description "),b("div",{class:m(e(l).e("main"))},[b("div",{class:m([e(l).e("title"),e(l).is(e(y))])},[Q(s.$slots,"title",{},()=>[N(J(s.title),1)])],2),e(C)?(r(),g("div",{key:0,class:m(e(l).e("arrow"))},null,2)):(r(),g("div",{key:1,class:m([e(l).e("description"),e(l).is(e(y))])},[Q(s.$slots,"description",{},()=>[N(J(s.description),1)])],2))],2)],6))}});var de=ue(nt,[["__file","item.vue"]]);const xt=Ue(st,{Step:de}),Nt=Be(de),Gt=o=>V({url:"/Tasks/GatherGroupMembers",method:"get",params:o}),It=o=>V({url:"/Tasks/OneClickGroupSending",method:"post",data:o,headers:{"Content-Type":"multipart/form-data"}}),Ut=o=>V({url:"/AccountContact/ImportContacts",method:"post",data:o,headers:{"Content-Type":"application/json"}}),Bt=o=>V({url:"/Tasks/GetTaskList",method:"get",params:o}),zt=o=>V({url:"/Tasks/GetTaskGatherGroupMembersData",method:"get",params:o}),Lt=o=>V({url:"/Tasks/GetTaskData",method:"get",params:o}),Dt=o=>V({url:"/Tasks/GetTaskQueue",method:"get",params:o}),Pt=o=>V({url:"/Tasks/RunTask",method:"get",params:o}),Mt=o=>V({url:"/Tasks/PauseTask",method:"get",params:o}),Rt=o=>V({url:"/Tasks/StopTask",method:"get",params:o}),rt={key:0},it={key:1},ut={class:"mt-4"},ct={class:"h-6 w-72 overflow-hidden whitespace-nowrap truncate"},pt={class:"flex mt-4",style:{width:"100%"}},dt={class:"mt-4 flex items-center justify-center h-full",style:{border:"1px solid #ccc"}},vt=O({__name:"uploadFile",props:["show","isLocal"],emits:["deliver"],setup(o,{emit:w}){const l=o,c=w;R(()=>l.show,()=>{l.show===!0&&(T.value=[],k.value=[],s.value="",$.value="",I.value="",F.value=[],G(),Y())});const h=v(!1),n=v("storage"),a=v(),p=v([]),y=v(),X=i=>{};function L(i,t){a.value.clearFiles(),p.value=[],y.value=null}function j(i,t){p.value=[],y.value=[];for(const _ of t)if(_.raw){const U=_.raw;p.value.push(U),y.value.push(U)}}const C=v([]),$=v("");function A(i){return i.substring(i.lastIndexOf("/")+1)}function G(){h.value=!0,We().then(i=>{try{C.value=i.data.data.data.map(t=>({value:t.fileName,label:A(t.fileName)}))}catch{}}).catch(i=>{}).finally(()=>{h.value=!1})}const H=v([]),I=v("");function Y(){h.value=!0,qe({GroupId:0}).then(t=>{try{t.data.data,H.value=t.data.data.data.map(_=>({value:_.filePath,label:_.name}))}catch{}}).catch(t=>{}).finally(()=>{h.value=!1})}const k=v([]),T=v([]),F=v(k.value.map(()=>"file"));R(()=>k.value,()=>{F.value=k.value.map((i,t)=>t<F.value.length?F.value[t]:"file")},{deep:!0});const s=v(""),x=v([{value:"file",label:"文件"},{value:"image",label:"图片"}]);function D(i){let t="https://tg-worker-files.oss-cn-hongkong.aliyuncs.com/"+i;k.value.push(t),T.value.push("file"),$.value=""}function W(i){let t="https://tg-worker-files.oss-cn-hongkong.aliyuncs.com/"+i;k.value.push(t),T.value.push("file"),I.value=""}function ve(){k.value.push(s.value),T.value.push(s.value),s.value=""}function me(i,t){T.value.forEach((_,U)=>{U===t&&T.value.splice(U,1,i)})}function fe(i){T.value.splice(i,1),k.value.splice(i,1)}function he(){c("deliver",!1,p.value,k.value,T.value)}function ye(){c("deliver",!1,[],[],[])}return(i,t)=>{const _=Ae,U=He,_e=je,Z=Pe,ee=Me,ge=De,ke=ze,be=Qe,we=Re,se=Oe;return r(),S(we,{modelValue:l.show,"onUpdate:modelValue":t[5]||(t[5]=u=>l.show=u),title:"发送文件",width:"600",onClose:ye},{default:f(()=>[d(U,{class:"w-full mb-2 pb-2",style:{"border-bottom":"1px solid #ccc"}},{default:f(()=>[d(_,{class:m(["w-1/2",{active:e(n)==="storage"}]),type:"primary",plain:"",onClick:t[0]||(t[0]=u=>n.value="storage")},{default:f(()=>[d(e(M),{icon:"material-symbols:storage-rounded",style:{"font-size":"22px"}}),t[6]||(t[6]=N(" 从存储资源发送图片 "))]),_:1},8,["class"]),l.isLocal?(r(),S(_,{key:0,class:m(["w-1/2",{active:e(n)==="local"}]),type:"primary",plain:"",onClick:t[1]||(t[1]=u=>n.value="local")},{default:f(()=>[d(e(M),{icon:"mdi:local-area-network",style:{"font-size":"22px"}}),t[7]||(t[7]=N(" 从本地发送图片 "))]),_:1},8,["class"])):z("",!0)]),_:1}),e(n)==="local"?(r(),g("div",rt,[d(_e,{ref_key:"uploadRef",ref:a,class:"upload-demo w-full","file-list":e(p),"auto-upload":!1,"on-preview":X,"on-remove":L,"on-change":j,multiple:!0,limit:10,drag:""},{default:f(()=>[d(e(M),{class:"w-1/2 mx-auto el-icon--upload",icon:"uiw:cloud-upload",style:{"font-size":"50px"}}),t[8]||(t[8]=b("div",{class:"el-upload__text"},[N(" 请"),b("em",null,"点击或拖拽"),N("上传文件 ")],-1))]),_:1},8,["file-list"])])):z("",!0),e(n)==="storage"?(r(),g("div",it,[oe((r(),S(ee,{"element-loading-text":"正在获取资料库...",modelValue:e($),"onUpdate:modelValue":t[2]||(t[2]=u=>le($)?$.value=u:null),placeholder:"从聊天记录文件中选择",style:{width:"50%"},filterable:"",onChange:D},{default:f(()=>[(r(!0),g(q,null,K(e(C),u=>(r(),S(Z,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])),[[se,e(h)]]),oe((r(),S(ee,{"element-loading-text":"正在获取资料库...",modelValue:e(I),"onUpdate:modelValue":t[3]||(t[3]=u=>le(I)?I.value=u:null),placeholder:"从素材库中选择",style:{width:"50%"},filterable:"",onChange:W},{default:f(()=>[(r(!0),g(q,null,K(e(H),u=>(r(),S(Z,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])),[[se,e(h)]]),b("div",ut,[(r(!0),g(q,null,K(e(k),(u,P)=>(r(),g("div",{key:P,class:"flex items-center justify-between mt-0.5 p-0.5",style:{border:"1px dashed #ccc"}},[d(ge,{type:"primary",size:"large"},{default:f(()=>t[9]||(t[9]=[N("文件")])),_:1}),d(ke,{class:"box-item",effect:"dark",content:u,placement:"bottom"},{default:f(()=>[b("span",ct,J(e(Ke)(u)),1)]),_:2},1032,["content"]),b("div",null,[d(ee,{modelValue:e(F)[P],"onUpdate:modelValue":B=>e(F)[P]=B,clearable:"",placeholder:"选择类型",style:{width:"100px"},filterable:""},{default:f(()=>[(r(!0),g(q,null,K(e(x),B=>(r(),S(Z,{key:B.value,label:B.label,value:B.value,onClick:mt=>me(B.value,P)},null,8,["label","value","onClick"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]),d(_,{type:"danger",class:"ml-2",onClick:B=>fe(P)},{default:f(()=>[d(e(M),{icon:"ic:baseline-delete",style:{"font-size":"22px"}})]),_:2},1032,["onClick"])])]))),128))]),b("div",pt,[d(be,{modelValue:e(s),"onUpdate:modelValue":t[4]||(t[4]=u=>le(s)?s.value=u:null),placeholder:"手动添加一条图片URL",clearable:"",style:{width:"88%"}},null,8,["modelValue"]),d(_,{type:"primary",class:"ml-2",onClick:ve},{default:f(()=>[d(e(M),{icon:"mingcute:add-fill",style:{"font-size":"22px"}})]),_:1})])])):z("",!0),b("div",dt,[d(_,{type:"primary",onClick:he,style:{width:"100%"}},{default:f(()=>t[10]||(t[10]=[N(" 确认 ")])),_:1})])]),_:1},8,["modelValue"])}}}),Ot=Je(vt,[["__scopeId","data-v-36d51dd4"]]);export{Nt as E,Ot as _,xt as a,Bt as b,zt as c,Lt as d,Dt as e,Pt as f,Gt as g,Rt as h,Ut as i,Mt as p,It as s};
