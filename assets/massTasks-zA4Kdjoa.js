import{g as ze,c as De,d as Ue,e as Pe,f as He,p as je,h as Qe,_ as Be,s as Ge,E as Oe,a as Je}from"./el-step-CtlFkP6V.js";import{d as P,z as te,t as m,H as U,e,o,h as f,i as a,a4 as t,Z as i,$ as h,Y as d,b as N,B as ce,J,a3 as ee,a0 as T,aa as X,aB as qe,a9 as ve,I as W,n as ke,ad as be,V as Ye}from"./index-B8CaIlcO.js";import{v as Y,b as Ze}from"./el-select-BevDt7DJ.js";import{E as Ke,a as We}from"./el-form-item-CCQqXnM1.js";import"./el-tooltip-l0sNRNKZ.js";import{b as pe,E as Xe}from"./el-scrollbar-DZ1CksSo.js";import{E as et}from"./el-input-D8jvQ1tV.js";/* empty css                        */import{E as me}from"./el-empty-DPJDDb-j.js";import{E as ae,a as ge}from"./el-button-BsBPLb-i.js";import{E as se,a as le}from"./el-table-column-Do6tERMY.js";import"./el-checkbox-BAxQbUqN.js";import"./el-tag-CpEJY6LF.js";import{c as tt}from"./im-Hvf4yXSe.js";import{_ as at}from"./accountList.vue_vue_type_script_setup_true_lang-C1ovIU9g.js";import{a as st,e as lt}from"./material-B-TxkPyF.js";import{a as A,g as F,b as ue,c as de}from"./task.StatusEnum-B3ZLYy5u.js";import{E as ne}from"./index-D0sfNV1K.js";import{E as nt}from"./el-link-Hdrs4ZoO.js";import{c as ot}from"./utils-c1oMQxtU.js";import{I as q}from"./iconify-DIoiMvOm.js";import{_ as rt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./el-upload-CdydaNJc.js";import"./index-D5W6IqEd.js";import"./refs-B78UAK1t.js";import"./_Uint8Array-eSuOIDTt.js";import"./_initCloneObject-BtN4nXO_.js";import"./account.StatusEnum-HJ87c6Td.js";const it=P({__name:"contactList",props:["currentAccId"],emits:["listPhones"],setup(M,{emit:V}){const L=M,b=V;te(()=>L.currentAccId,()=>{$()});const g=m(!1),C=m([]);function $(){g.value=!0;const l={id:L.currentAccId};tt(l).then(n=>{try{C.value=n.data.data}catch{}}).catch(n=>{}).finally(()=>{g.value=!1})}const c=m(),u=m([]),y=l=>{u.value=l;const n=l.map(v=>v.phone);b("listPhones",n)},r=l=>{u.value.some(v=>v===l)?c.value.toggleRowSelection(l,!1):c.value.toggleRowSelection(l,!0)};return(l,n)=>{const v=se,S=le,w=Y;return U((o(),f(S,{ref_key:"conListRef",ref:c,"empty-text":"请先选择账号","element-loading-text":"正在获取联系人列表...",data:e(C),style:{width:"210px"},onSelectionChange:y,onRowClick:r},{default:a(()=>[t(v,{type:"selection",width:"30"}),t(v,null,{default:a(_=>[i(" 昵称："+h(_.row.userName?_.row.userName:_.row.firstName??""+_.row.lastName??"")+" ",1),n[0]||(n[0]=d("br",null,null,-1)),i(" 号码："+h(_.row.phone),1)]),_:1})]),_:1},8,["data"])),[[w,e(g)]])}}}),ut=P({__name:"contactMaterial",props:["currentAccId"],emits:["materialPhone"],setup(M,{emit:V}){const L=M,b=V;te(()=>L.currentAccId,()=>{C()});const g=m([]);function C(){st({GroupId:0}).then(l=>{try{g.value=l.data.data.data}catch{}}).catch(l=>{})}const $=m(),c=m([]),u=r=>{c.value=r;const l=r.map(n=>String(n.phone));b("materialPhone",l)},y=r=>{c.value.some(n=>n===r)?$.value.toggleRowSelection(r,!1):$.value.toggleRowSelection(r,!0)};return(r,l)=>{const n=se,v=le;return o(),N("div",null,[t(v,{ref_key:"conMaterialRef",ref:$,"empty-text":"请先选择账号",data:e(g),style:{width:"200px"},onSelectionChange:u,onRowClick:y},{default:a(()=>[t(n,{type:"selection",width:"30"}),t(n,null,{default:a(S=>[i(" 昵称："+h(S.row.userName)+" ",1),l[0]||(l[0]=d("br",null,null,-1)),i(" 号码："+h(S.row.phone),1)]),_:1})]),_:1},8,["data"])])}}}),dt={class:"my-2 p-1",style:{border:"1px dashed #ccc"}},ct={class:"w-1/4 ml-1"},pt=P({__name:"historyTask",emits:["historyTaskId","getHistoryTaskList"],setup(M,{emit:V}){const L=V,b=m(!1),g="https://t.me/",C=m([]);function $(){b.value=!0,ze({taskType:0}).then(r=>{try{C.value=r.data.data.map(l=>({id:l.id,name:l.name,type:l.type,userId:l.userId,status:l.status,createTime:l.createTime,endTime:l.endTime,totalMumberTasks:l.totalMumberTasks,completedQuantity:l.completedQuantity,task_data:l.task_data?JSON.parse(l.task_data):null,userNameURL:l.task_data?g+JSON.parse(l.task_data).MainUsername:null}))}catch{}}).catch(r=>{}).finally(()=>{b.value=!1})}function c(y){L("historyTaskId",y.id),L("getHistoryTaskList")}function u(y,r){if(r===0)return"0%";const l=Number(y)/Number(r)*100;return Number.isNaN(l)?"0%":l===100?F(A.Completed):`${l.toFixed(2)}%`}return ce(()=>{$()}),(y,r)=>{const l=ae,n=ne,v=pe,S=me,w=Y;return o(),N("div",null,[r[0]||(r[0]=d("div",{class:"mb-4 p-2 px-4",style:{"border-left":"5px solid #409eff"}},"历史群发任务列表",-1)),U((o(),N("div",dt,[e(C).length!==0?(o(),f(v,{key:0,class:"w-full overflow-y-auto",style:{height:"35vh"}},{default:a(()=>[(o(!0),N(J,null,ee(e(C),(_,z)=>(o(),N("div",{key:z,class:"p-0.5 flex justify-between"},[t(l,{type:"primary",plain:"",onClick:I=>c(_),class:"w-3/4"},{default:a(()=>[i(h(_.name),1)]),_:2},1032,["onClick"]),d("div",ct,[_.status===e(A).Stop?(o(),f(n,{key:0,type:"danger"},{default:a(()=>[i(h(e(F)(_.status)),1)]),_:2},1024)):T("",!0),_.status===e(A).Run?(o(),f(n,{key:1,type:"primary"},{default:a(()=>[i(h(u(_.completedQuantity,_.totalMumberTasks)),1)]),_:2},1024)):T("",!0),_.status===e(A).Pause?(o(),f(n,{key:2,type:"warning"},{default:a(()=>[i(h(e(F)(_.status)),1)]),_:2},1024)):T("",!0),_.status===e(A).Completed?(o(),f(n,{key:3,type:"success"},{default:a(()=>[i(h(e(F)(_.status)),1)]),_:2},1024)):T("",!0),_.status===e(A).DoesNotExist?(o(),f(n,{key:4,type:"warning"},{default:a(()=>[i(h(e(F)(_.status)),1)]),_:2},1024)):T("",!0),_.status===e(A).Error?(o(),f(n,{key:5,type:"danger"},{default:a(()=>[i(h(e(F)(_.status)),1)]),_:2},1024)):T("",!0)])]))),128))]),_:1})):T("",!0),e(C).length===0?(o(),f(S,{key:1,description:"暂无数据"})):T("",!0)])),[[w,e(b)]])])}}}),mt={class:"flex justify-between items-center"},ft=P({__name:"taskTable",props:["taskId"],setup(M){const V=M,L="https://t.me/",b=m(!1);te(()=>V.taskId,()=>{C()});const g=m([]);function C(){b.value=!0;const c={id:V.taskId};De(c).then(u=>{try{g.value=u.data.data}catch{}}).catch(u=>{}).finally(()=>{b.value=!1})}function $(c){ot(L,c)}return(c,u)=>{const y=se,r=ne,l=nt,n=ae,v=le,S=Y;return o(),N("div",null,[u[5]||(u[5]=d("div",{class:"mb-4 p-2 px-4",style:{"border-left":"5px solid #409eff"}},"数据表单",-1)),U((o(),f(v,{data:e(g),border:"",style:{width:"100%"}},{default:a(()=>[t(y,{prop:"userName",label:"名称",width:"180"},{default:a(w=>[i(h(w.row.userName),1)]),_:1}),t(y,{prop:"isActive",label:"是否活跃",width:"100"},{default:a(w=>[w.row.isActive?(o(),f(r,{key:0,type:"success",size:"large"},{default:a(()=>u[0]||(u[0]=[i("活跃")])),_:1})):(o(),f(r,{key:1,type:"info",size:"large"},{default:a(()=>u[1]||(u[1]=[i("不活跃")])),_:1}))]),_:1}),t(y,{prop:"isFriend",label:"是否为好友",width:"100"},{default:a(w=>[w.row.isFriend?(o(),f(r,{key:0,type:"success",size:"large"},{default:a(()=>u[2]||(u[2]=[i("是")])),_:1})):(o(),f(r,{key:1,type:"info",size:"large"},{default:a(()=>u[3]||(u[3]=[i("否")])),_:1}))]),_:1}),t(y,{prop:"sendStatus",label:"发送状态",width:"90"},{default:a(w=>[w.row.sendStatus===e(ue).Fail?(o(),f(r,{key:0,type:"danger",size:"large"},{default:a(()=>[i(h(e(de)(w.row.sendStatus)),1)]),_:2},1024)):w.row.sendStatus===e(ue).Success?(o(),f(r,{key:1,type:"success",size:"large"},{default:a(()=>[i(h(e(de)(w.row.sendStatus)),1)]),_:2},1024)):w.row.sendStatus===e(ue).Default?(o(),f(r,{key:2,type:"warning",size:"large"},{default:a(()=>[i(h(e(de)(w.row.sendStatus)),1)]),_:2},1024)):T("",!0)]),_:1}),t(y,{prop:"phone",label:"手机号码",width:"140"}),t(y,{prop:"mainName",label:"用户链接"},{default:a(w=>[d("div",mt,[t(l,{type:"primary",href:`${e(L)}${w.row.mainName}`,target:"_blank"},{default:a(()=>[i(h(w.row.mainName),1)]),_:2},1032,["href"]),t(n,{onClick:_=>$(w.row.mainName)},{default:a(()=>u[4]||(u[4]=[i("复制用户链接")])),_:2},1032,["onClick"])])]),_:1}),t(y,{prop:"last5eenAgo",label:"最近活跃时间",width:"180"}),t(y,{prop:"createTime",label:"创建时间",width:"180"})]),_:1},8,["data"])),[[S,e(b)]])])}}}),_t=P({__name:"historyTaskTable",props:["historyTaskId"],setup(M,{expose:V}){const L=M;V({tsaskDetailFun:C});const b=m(!1),g=m([]);function C(){b.value=!0;const $={id:L.historyTaskId};Ue($).then(c=>{try{g.value=c.data.data.massSendings}catch{}}).catch(c=>{}).finally(()=>{b.value=!1})}return($,c)=>{const u=se,y=ne,r=le,l=Y;return o(),N("div",null,[c[4]||(c[4]=d("div",{class:"mb-4 p-2 px-4",style:{"border-left":"5px solid #409eff"}},"数据表单",-1)),U((o(),f(r,{data:e(g),border:"",style:{width:"100%"}},{default:a(()=>[t(u,{prop:"userName",label:"名称"}),t(u,{prop:"phone",label:"手机号码"}),t(u,{prop:"mainName",label:"用户链接"}),t(u,{prop:"isActive",label:"是否活跃"},{default:a(n=>[n.row.isActive?(o(),f(y,{key:0,type:"success",size:"large"},{default:a(()=>c[0]||(c[0]=[i("活跃")])),_:1})):(o(),f(y,{key:1,type:"info",size:"large"},{default:a(()=>c[1]||(c[1]=[i("不活跃")])),_:1}))]),_:1}),t(u,{prop:"isFriend",label:"是否为好友"},{default:a(n=>[n.row.isFriend?(o(),f(y,{key:0,type:"success",size:"large"},{default:a(()=>c[2]||(c[2]=[i("是")])),_:1})):(o(),f(y,{key:1,type:"info",size:"large"},{default:a(()=>c[3]||(c[3]=[i("否")])),_:1}))]),_:1}),t(u,{prop:"sendStatus",label:"发送状态"}),t(u,{prop:"lastSeenAgo",label:"近期活跃"}),t(u,{prop:"status",label:"状态"}),t(u,{prop:"createTime",label:"创建时间"})]),_:1},8,["data"])),[[l,e(b)]])])}}}),yt={class:"my-2 p-1",style:{border:"1px dashed #ccc"}},vt={class:"flex justify-between items-center"},kt=P({__name:"runningTask",emits:["taskQueueId"],setup(M,{emit:V}){const L=V,b=m(!1),g=m([]);function C(){b.value=!0,Pe({taskType:0}).then(l=>{try{g.value=Object.values(l.data.data).map(n=>({taskId:n.taskId,minCount:n.minCount,maxCount:n.maxCount,maxTime:n.maxTime,taskStatus:n.taskStatus,createTime:n.createTime,maxEndTime:n.maxEndTime,taskName:n.taskName}))}catch{}}).catch(l=>{}).finally(()=>{b.value=!1})}function $(r){L("taskQueueId",r.taskId)}function c(r){const l={Id:r.taskId};He(l).then(n=>{X.success("运行任务成功"),C()}).catch(n=>{})}function u(r){const l={Id:r.taskId};je(l).then(n=>{X.success("暂停任务成功"),C()}).catch(n=>{})}function y(r){const l={Id:r.taskId};Qe(l).then(n=>{X.success("停止任务成功"),C()}).catch(n=>{})}return ce(()=>{C()}),(r,l)=>{const n=ae,v=ne,S=ge,w=pe,_=me,z=Y;return o(),N("div",null,[l[3]||(l[3]=d("div",{class:"mb-4 p-2 px-4",style:{"border-left":"5px solid #409eff"}},"运行中的任务列表",-1)),U((o(),N("div",yt,[e(g).length!==0?(o(),f(w,{key:0,class:"w-full overflow-y-auto",style:{height:"35vh"}},{default:a(()=>[(o(!0),N(J,null,ee(e(g),(I,Q)=>(o(),N("div",{key:Q,class:"p-0.5 mb-1"},[d("div",vt,[t(n,{type:"primary",plain:"",onClick:B=>$(I)},{default:a(()=>[i(h(I.taskName?I.taskName:"未知名称"),1)]),_:2},1032,["onClick"]),d("div",null,[I.taskStatus===e(A).Stop?(o(),f(v,{key:0,type:"danger"},{default:a(()=>[i(h(e(F)(I.taskStatus)),1)]),_:2},1024)):T("",!0),I.taskStatus===e(A).Run?(o(),f(v,{key:1,type:"primary"},{default:a(()=>[i(h(e(F)(I.taskStatus)),1)]),_:2},1024)):T("",!0),I.taskStatus===e(A).Pause?(o(),f(v,{key:2,type:"warning"},{default:a(()=>[i(h(e(F)(I.taskStatus)),1)]),_:2},1024)):T("",!0),I.taskStatus===e(A).Completed?(o(),f(v,{key:3,type:"success"},{default:a(()=>[i(h(e(F)(I.taskStatus)),1)]),_:2},1024)):T("",!0),I.taskStatus===e(A).DoesNotExist?(o(),f(v,{key:4,type:"warning"},{default:a(()=>[i(h(e(F)(I.taskStatus)),1)]),_:2},1024)):T("",!0),I.taskStatus===e(A).Error?(o(),f(v,{key:5,type:"danger"},{default:a(()=>[i(h(e(F)(I.taskStatus)),1)]),_:2},1024)):T("",!0)])]),d("div",null,[t(S,{class:"w-full"},{default:a(()=>[t(n,{type:"primary",size:"small",class:"w-1/3",onClick:B=>c(I)},{default:a(()=>[t(e(q),{icon:"bxs:file"}),l[0]||(l[0]=i(" 运行 "))]),_:2},1032,["onClick"]),t(n,{type:"primary",size:"small",class:"w-1/3",onClick:B=>u(I)},{default:a(()=>[t(e(q),{icon:"bxs:file"}),l[1]||(l[1]=i(" 暂停 "))]),_:2},1032,["onClick"]),t(n,{type:"primary",size:"small",class:"w-1/3",onClick:B=>y(I)},{default:a(()=>[t(e(q),{icon:"bxs:file"}),l[2]||(l[2]=i(" 停止 "))]),_:2},1032,["onClick"])]),_:2},1024)])]))),128))]),_:1})):T("",!0),e(g).length===0?(o(),f(_,{key:1,description:"暂无数据"})):T("",!0)])),[[z,e(b)]])])}}}),bt={class:"grid grid-cols-12 gap-4 mt-1"},gt={class:"col-span-2 bg-white rounded-md p-4"},ht={class:"col-span-10 bg-white rounded-md p-4",style:{height:"91vh"}},wt={class:"mb-2 pb-2",style:{"border-bottom":"1px dashed #ccc"}},xt={key:0,class:"mt-4"},Tt={class:"mt-4 pt-4",style:{"border-top":"1px dashed #ccc"}},St={class:"mt-4"},It={class:"w-full"},Ct={class:"font-bold mb-1 mt-1 pb-2"},Et={class:"flex w-full"},Nt={class:"w-1/2 mr-2 h-full",style:{"border-right":"1px solid #ccc"}},Lt={class:"w-1/2 mr-2",style:{"border-right":"1px solid #ccc"}},$t={class:"mt-4 pt-4",style:{"border-top":"1px dashed #ccc"}},Vt={class:"mt-4"},At={class:"w-full"},Ft={class:"flex justify-between"},Mt={class:"flex items-center mt-2 relative"},Rt={style:{"word-wrap":"break-word"}},zt=["onClick"],Dt={class:""},Ut={class:"ml-4"},Pt={class:"flex items-center h-8 w-64 overflow-hidden whitespace-nowrap truncate"},Ht=["onClick"],jt={class:"mt-4 pt-4",style:{"border-top":"1px dashed #ccc"}},Qt=P({__name:"massTasks",setup(M){const V=m();function L(){Ye(()=>{V.value.tsaskDetailFun()})}const b=m(null),g=m(null);function C(p){g.value=p,g.value}function $(p){b.value=p,b.value}const c=m(0),u=m();function y(p){u.value=p}const r=m(!1);function l(){r.value=!0,c.value=0}function n(){r.value=!1,S.value=0,c.value=0}const v=m("conSend"),S=m(0);function w(){S.value++,c.value=u.value}const _=m(""),z=m([]);function I(){S.value++;const p=[...z.value,...Q.value,...oe.value,..._.value.split(/\r?\n/).map(k=>k.trim()).filter(k=>k!=="")],s=Array.from(new Set(p));z.value=s,z.value}const Q=m([]);function B(p){Q.value=p}const oe=m([]);function he(p){oe.value=p}const E=m({remark:"",maxSendNumber:"",text:"",minIntervalTime:0,maxIntervalTime:0}),re=m(!1);function we(){re.value=!0}const R=m(),D=m();function xe(p,s,k,Z){re.value=p,k.length>0&&Z.length>0&&(Array.isArray(R.value)||(R.value=[]),Array.isArray(D.value)||(D.value=[]),R.value=[...R.value,...k],D.value=[...D.value,...Z])}function Te(p){R.value&&D.value&&(R.value.splice(p,1),D.value.splice(p,1))}const H=m(!0);function Se(){H.value=!H.value}function fe(){H.value=!0}function _e(p){p.target.closest("#emoji-input")||p.target.closest('label[for="emoji-label"]')||fe()}te(()=>H.value,()=>{H.value===!1&&Ie()});const ye=m([]);function Ie(){lt({GroupId:0}).then(s=>{ye.value=s.data.data.data}).catch(s=>{})}function Ce(p){E.value.text=E.value.text+p,fe()}function Ee(){var s;const p=new FormData;p.append("id",u.value),p.append("maxSendNumber",E.value.maxSendNumber),p.append("remark",E.value.remark),p.append("msg",E.value.text),p.append("minIntervalTime",String(E.value.minIntervalTime)),p.append("maxIntervalTime",String(E.value.maxIntervalTime)),R.value&&R.value.forEach(k=>{p.append("files.UrlFiles",k)}),D.value&&D.value.forEach(k=>{p.append("files.UrlFileTypes",k)}),(s=z.value)==null||s.forEach(k=>{p.append("phones",k)}),Ge(p).then(k=>{k.data,X.success("群发成功")}).catch(k=>{}),Ne()}function Ne(){u.value=null,E.value={text:"",maxSendNumber:"",remark:"",minIntervalTime:0,maxIntervalTime:0},R.value=[],D.value=[],z.value=[],r.value=!1,S.value=0}return ce(()=>{document.addEventListener("click",_e)}),qe(()=>{document.removeEventListener("click",_e)}),(p,s)=>{const k=ae,Z=me,ie=Oe,Le=Je,G=pe,$e=ge,j=et,O=Ke,Ve=Xe,Ae=We,Fe=Ze,Me=Be;return o(),N(J,null,[d("div",bt,[d("div",gt,[t(pt,{onHistoryTaskId:C,onGetHistoryTaskList:L}),t(kt,{onTaskQueueId:$})]),d("div",ht,[d("div",wt,[t(k,{type:"primary",plain:"",onClick:l},{default:a(()=>s[12]||(s[12]=[i("发起任务")])),_:1})]),d("div",null,[e(b)?(o(),f(ft,{key:0,taskId:e(b)},null,8,["taskId"])):T("",!0),e(g)?(o(),f(_t,{key:1,ref_key:"historyTaskRef",ref:V,historyTaskId:e(g)},null,8,["historyTaskId"])):T("",!0),!e(b)&&!e(g)?(o(),f(Z,{key:2,description:"暂无数据"})):T("",!0)])])]),t(Fe,{modelValue:e(r),"onUpdate:modelValue":s[11]||(s[11]=x=>ve(r)?r.value=x:null),title:"发起任务",width:"600",onClose:n},{default:a(()=>[t(Le,{style:{"max-width":"600px"},active:e(S),"finish-status":"success"},{default:a(()=>[t(ie,{title:"选择账号"}),t(ie,{title:"选择联系人"}),t(ie,{title:"任务参数"})]),_:1},8,["active"]),e(S)===0?(o(),N("div",xt,[t(G,{class:"w-full overflow-y-auto",style:{height:"30vh"}},{default:a(()=>[t(at,{onAccountId:y})]),_:1}),d("div",Tt,[t(k,{type:"primary",plain:"",onClick:w,disabled:!e(u)},{default:a(()=>s[13]||(s[13]=[i("下一步")])),_:1},8,["disabled"])])])):T("",!0),U(d("div",St,[t($e,{class:"w-full mb-2 pb-2",style:{"border-bottom":"1px solid #ccc"}},{default:a(()=>[t(k,{class:ke(["w-1/2",{active:e(v)==="conSend"}]),type:"primary",plain:"",onClick:s[0]||(s[0]=x=>v.value="conSend")},{default:a(()=>s[14]||(s[14]=[i(" 手动输入 ")])),_:1},8,["class"]),t(k,{class:ke(["w-1/2",{active:e(v)==="conList"}]),type:"primary",plain:"",onClick:s[1]||(s[1]=x=>v.value="conList")},{default:a(()=>s[15]||(s[15]=[i(" 从文件导入 ")])),_:1},8,["class"])]),_:1}),U(d("div",It,[d("div",Ct,[s[16]||(s[16]=d("span",{class:"mb-1"},"电话号码",-1)),t(j,{type:"textarea",rows:5,modelValue:e(_),"onUpdate:modelValue":s[2]||(s[2]=x=>ve(_)?_.value=x:null),placeholder:"请输入手机号，一行一个手机号码"},null,8,["modelValue"])])],512),[[W,e(v)==="conSend"]]),U(d("div",Et,[d("div",Nt,[s[17]||(s[17]=d("div",{class:"font-bold mb-2"},"联系人列表",-1)),t(G,{class:"w-full overflow-y-auto",style:{height:"22vh"}},{default:a(()=>[t(it,{currentAccId:e(c),onListPhones:B},null,8,["currentAccId"])]),_:1})]),d("div",Lt,[s[18]||(s[18]=d("div",{class:"font-bold mb-2"},"联系人素材",-1)),t(G,{class:"w-full overflow-y-auto",style:{height:"22vh"}},{default:a(()=>[t(ut,{currentAccId:e(c),onMaterialPhone:he},null,8,["currentAccId"])]),_:1})])],512),[[W,e(v)==="conList"]]),d("div",$t,[t(k,{type:"primary",plain:"",onClick:s[3]||(s[3]=x=>S.value--)},{default:a(()=>s[19]||(s[19]=[i("上一步")])),_:1}),t(k,{type:"primary",plain:"",onClick:I,disabled:!(e(Q).length||e(oe).length||e(_))},{default:a(()=>s[20]||(s[20]=[i("下一步")])),_:1},8,["disabled"])])],512),[[W,e(S)===1]]),U(d("div",Vt,[d("div",At,[t(Ae,{model:e(E),"status-icon":"","label-width":"auto",class:"demo-ruleForm"},{default:a(()=>[t(O,{label:"任务备注"},{default:a(()=>[t(j,{modelValue:e(E).remark,"onUpdate:modelValue":s[4]||(s[4]=x=>e(E).remark=x),type:"text"},null,8,["modelValue"])]),_:1}),t(O,{label:"最大发送人数"},{default:a(()=>[t(j,{modelValue:e(E).maxSendNumber,"onUpdate:modelValue":s[5]||(s[5]=x=>e(E).maxSendNumber=x),type:"text"},null,8,["modelValue"])]),_:1}),t(O,{label:"消息间隔时间（随机）","label-width":"180px"},{default:a(()=>[d("div",Ft,[t(j,{modelValue:e(E).minIntervalTime,"onUpdate:modelValue":s[6]||(s[6]=x=>e(E).minIntervalTime=x),placeholder:"请输入间隔最小时间",clearable:"",style:{width:"150px"}},null,8,["modelValue"]),s[21]||(s[21]=d("span",{class:"mx-2"}," 秒~",-1)),t(j,{modelValue:e(E).maxIntervalTime,"onUpdate:modelValue":s[7]||(s[7]=x=>e(E).maxIntervalTime=x),placeholder:"请输入间隔最大时间",clearable:"",style:{width:"150px"}},null,8,["modelValue"]),s[22]||(s[22]=d("span",{class:"mx-2"}," 秒",-1))])]),_:1}),t(O,{label:"消息内容"},{default:a(()=>[t(j,{modelValue:e(E).text,"onUpdate:modelValue":s[8]||(s[8]=x=>e(E).text=x),type:"textarea",rows:4},null,8,["modelValue"]),d("div",Mt,[t(k,{type:"primary",class:"text-sm",onClick:be(Se,["stop"])},{default:a(()=>s[23]||(s[23]=[i("选择快捷消息")])),_:1}),e(H)?T("",!0):(o(),N("div",{key:0,id:"emoji-input",class:"absolute -bottom-32 -left-20 h-32 bg-white border border-gray-300 rounded-lg shadow-lg z-10",style:{width:"580px"},onClick:s[9]||(s[9]=be(()=>{},["stop"]))},[t(G,{style:{height:"18vh"}},{default:a(()=>[d("div",Rt,[(o(!0),N(J,null,ee(e(ye),(x,K)=>(o(),N("div",{key:K,class:"inline-block text-xs mx-1 px-2 py-1 my-1 rounded-md shadow-md duration-300 cursor-pointer hover:bg-sky-500",style:{border:"1px solid #ccc",display:"inline-block"},onClick:Re=>Ce(x.msg)},[d("span",Dt,h(x.msg),1)],8,zt))),128))])]),_:1})])),d("div",Ut,[t(k,{type:"success"},{default:a(()=>s[24]||(s[24]=[i("选择名片")])),_:1})])])]),_:1}),t(O,{label:"选择文件"},{default:a(()=>[d("div",null,[t(k,{type:"primary",plain:"",onClick:we},{default:a(()=>s[25]||(s[25]=[i("选择文件")])),_:1}),d("div",null,[t(G,{class:"w-full overflow-hidden",style:{height:"10vh"}},{default:a(()=>[(o(!0),N(J,null,ee(e(R),(x,K)=>(o(),N("div",{key:K,class:"flex items-center justify-between font-thin text-cyan-500",style:{border:"1px dashed #ccc"}},[t(e(q),{icon:"bxs:file"}),t(Ve,{class:"box-item",effect:"dark",content:x,placement:"bottom"},{default:a(()=>[d("span",Pt,h(x),1)]),_:2},1032,["content"]),d("span",{type:"danger",plain:"",onClick:Re=>Te(K)},[t(e(q),{icon:"mynaui:delete-solid",class:"hover:text-red-500 cursor-pointer",style:{"font-size":"22px"}})],8,Ht)]))),128))]),_:1})])])]),_:1})]),_:1},8,["model"])]),d("div",jt,[t(k,{type:"primary",plain:"",onClick:s[10]||(s[10]=x=>S.value--)},{default:a(()=>s[26]||(s[26]=[i("上一步")])),_:1}),t(k,{type:"primary",plain:"",onClick:Ee},{default:a(()=>s[27]||(s[27]=[i("启动任务")])),_:1})])],512),[[W,e(S)===2]])]),_:1},8,["modelValue"]),t(Me,{show:e(re),isLocal:!1,onDeliver:xe},null,8,["show"])],64)}}}),ka=rt(Qt,[["__scopeId","data-v-2d7b5d0b"]]);export{ka as default};
