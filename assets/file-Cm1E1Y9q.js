import{d as me,t as p,y as U,B as fe,X as ge,b,Y as i,a4 as t,i as n,e as a,a9 as D,H as G,h as L,T as _e,J as T,o as m,$ as z,Z as f,a0 as B,a3 as ve,aa as F}from"./index-CGWrNWMP.js";import{b as he,v as be,c as ye,e as we}from"./el-select-wyDkdJ0x.js";import{E as xe,a as ze}from"./el-form-item-DSTzwjso.js";import{E as ke}from"./el-upload-MlMccyn5.js";import"./el-tag-DcQ8E_gC.js";import{E as Ce}from"./el-scrollbar-B1CdvwA6.js";import{E as Ee}from"./el-pagination--R32rUkv.js";import{E as Se}from"./el-input-D6S8Wxsl.js";import{a as Fe,E as Ie}from"./el-table-column-DRIoJKxM.js";import"./el-checkbox-xYdKsulB.js";import"./el-tooltip-l0sNRNKZ.js";import{E as Ve}from"./el-popover-2zqKrKOX.js";import{E as Ne}from"./el-button-COkJ7dDD.js";import{I as v}from"./iconify-BJI3uSh1.js";import{d as Pe,c as $e,o as Ue,p as De}from"./material-BU3yysrW.js";import{_ as Ge}from"./group.vue_vue_type_script_setup_true_lang-CSfbmgVY.js";import{_ as Le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DN8L5-8F.js";import"./index-Cbvrzi_3.js";import"./refs-DQ3eI1PF.js";import"/tg-yk-online/_Uint8Array-Dp_aYPW3.js";import"./_initCloneObject-B3rnf7rt.js";const Te={class:"grid grid-cols-12 gap-4 mt-1"},Be={class:"col-span-2 bg-white rounded-md p-4"},Me={class:"mr-4",style:{width:"100%"}},Re={class:"mt-2"},je={class:"col-span-10 bg-white rounded-md p-4"},Oe={style:{height:"82.5vh",overflow:"auto"}},Ae=["onClick"],Ye={key:0},He=["href"],Je={class:"mt-4"},Xe={class:"mx-auto max-w-full"},Ze=["src"],qe=me({__name:"file",setup(Ke){const u=p(!1),y=p([{value:0,label:"默认分组"}]);function I(){Pe({type:0}).then(e=>{try{y.value=e.data.data.data.map(s=>({value:s.id,label:s.name})),y.value.unshift({value:0,label:"默认分组"})}catch{}}).catch(e=>{})}function M(l){const e=y.value.find(s=>s.value==l);return e?e.label:"未知分组"}const g=p(!1),d=U({group:"默认分组",desc:""});function R(){g.value=!0,I()}function j(){u.value=!0;const l=new FormData;h.value.forEach(e=>{e instanceof File&&l.append("Files",e)}),d.group=="默认分组"?l.append("GroupId",String(0)):l.append("GroupId",String(d.group)),l.append("Description",d.desc),Ue(l).then(e=>{e.data.data,g.value=!1,F({message:"上传文件成功",type:"success"}),_()}).catch(e=>{}).finally(()=>{u.value=!1}),k()}function k(){C.value.clearFiles(),d.desc="",d.group="默认分组",g.value=!1,h.value=[]}const C=p(),h=p([]);function O(l,e){C.value.clearFiles(),h.value=[]}const A=l=>{},Y=(l,e)=>{const s=l.raw;h.value.push(s)},w=p(""),V=p([]);function _(){u.value=!0;const l={GroupId:d.group==="默认分组"?null:Number(d.group),Like:w.value,pageNum:r.pageNum,pageSize:r.pageSize};$e(l).then(e=>{try{V.value=e.data.data.data,r.pageNum=e.data.data.pageNumber,r.pageSize=e.data.data.pageSize,r.total=e.data.data.totalCount}catch{}}).catch(e=>{}).finally(()=>{u.value=!1})}function H(l){u.value=!0;const e={ids:l.id};De(e).then(s=>{F({message:"删除文件成功",type:"error"}),_()}).catch(s=>{}).finally(()=>{u.value=!1})}const J=()=>{},r=U({pageSizes:[1,10,20,50],pageSize:10,pageNum:1,total:400}),X=l=>{_()},Z=l=>{_()},q=p(),K=p([]),Q=l=>{K.value=l};function W(l){if(l){if(l=="账号异常，文件保存失败！")return"error";const e=l.lastIndexOf(".");if(e!==-1){const s=l.substring(e+1).toLowerCase();return["jpg","jpeg","png","gif","bmp","tiff","webp"].includes(s)?"image":"file"}}}function ee(l){let e="https://tg-worker-files.oss-cn-hongkong.aliyuncs.com/"+l;navigator.clipboard.writeText(e).then(()=>{F({message:"成功复制到剪贴板",type:"success"})}).catch(s=>{console.error("复制文本失败:",s)})}const E=p(!1),N=p(""),te=l=>{N.value=l,E.value=!0},le=()=>{E.value=!1};return fe(()=>{_(),I()}),(l,e)=>{const s=Ne,S=Se,c=Ie,oe=Ce,ae=ge("spen"),ne=Ve,se=Fe,ie=Ee,re=ye,de=we,x=xe,pe=ke,ue=ze,ce=he,P=be;return m(),b(T,null,[i("div",Te,[i("div",Be,[i("div",null,[e[11]||(e[11]=i("div",{class:"mb-4 px-2 py-2",style:{"border-bottom":"1px dashed #ccc"}}," 文件素材 ",-1)),i("div",null,[i("div",Me,[t(S,{modelValue:a(w),"onUpdate:modelValue":e[0]||(e[0]=o=>D(w)?w.value=o:null),style:{"max-width":"230px"},placeholder:"Please input",class:"input-with-select"},{append:n(()=>[t(s,{type:"primary",plain:"",onClick:_},{default:n(()=>[t(a(v),{icon:"mingcute:search-fill",style:{"font-size":"22px"}})]),_:1})]),_:1},8,["modelValue"])]),i("div",Re,[t(s,{type:"primary",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis",onClick:e[1]||(e[1]=o=>R())},{default:n(()=>[t(a(v),{icon:"tabler:message-plus",style:{"font-size":"22px"}}),e[9]||(e[9]=i("span",{class:"hidden lg:inline-block ml-2"},"新增文件",-1)),e[10]||(e[10]=i("span",{class:"hidden md:inline-block lg:hidden ml-2"},"新增文件",-1))]),_:1})])])]),t(Ge,{typeId:0})]),G((m(),b("div",je,[i("div",null,[i("div",Oe,[G((m(),L(se,{ref_key:"tableRef",ref:q,data:a(V),style:{width:"100%"},border:"",onSelectionChange:Q,height:"full"},{default:n(()=>[t(c,{type:"selection",width:"55"}),t(c,{prop:"name",label:"文件名"}),t(c,{prop:"description",label:"文件描述"}),t(c,{prop:"filePath",label:"文件路径"},{default:n(o=>[t(oe,{class:"box-item",effect:"dark",content:"点击复制文件路径",placement:"top"},{default:n(()=>[i("div",{class:"cursor-pointer",onClick:$=>ee(o.row.filePath)},z(o.row.filePath),9,Ae)]),_:2},1024)]),_:1}),t(c,{prop:"groupId",label:"分组"},{default:n(o=>[i("span",null,z(M(o.row.groupId)),1)]),_:1}),t(c,{prop:"createTime",label:"文件创建时间"}),t(c,null,{header:n(()=>e[12]||(e[12]=[i("div",{class:"must"},[i("span",{class:"red"}),f("操作")],-1)])),default:n(o=>[W(o.row.filePath)=="image"?(m(),b("div",Ye,[t(s,{type:"primary",size:"small",plain:""},{default:n(()=>[t(a(v),{icon:"mdi-light:delete",style:{"font-size":"18px"}}),t(ae,{onClick:$=>te(`https://tg-worker-files.oss-cn-hongkong.aliyuncs.com/${o.row.filePath}`)},{default:n(()=>e[13]||(e[13]=[f(" 预览文件 ")])),_:2},1032,["onClick"])]),_:2},1024)])):B("",!0),t(s,{type:"primary",size:"small",plain:""},{default:n(()=>[t(a(v),{icon:"mdi-light:delete",style:{"font-size":"18px"}}),i("a",{href:`https://tg-worker-files.oss-cn-hongkong.aliyuncs.com/${o.row.filePath}`,target:"_blank"},"下载文件",8,He)]),_:2},1024),t(ne,{"confirm-button-text":"Yes","cancel-button-text":"No","icon-color":"#626AEF",title:l.$t("userMarger.user.areSureDel"),onConfirm:$=>H(o.row),onCancel:J},{reference:n(()=>[t(s,{size:"small",type:"danger",plain:""},{default:n(()=>[t(a(v),{icon:"mdi-light:delete",style:{"font-size":"18px"}}),e[14]||(e[14]=f(" 删除文件 "))]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"])),[[P,a(u)]])]),i("div",Je,[t(ie,{"current-page":a(r).pageNum,"onUpdate:currentPage":e[2]||(e[2]=o=>a(r).pageNum=o),"page-size":a(r).pageSize,"onUpdate:pageSize":e[3]||(e[3]=o=>a(r).pageSize=o),"page-sizes":a(r).pageSizes,"onUpdate:pageSizes":e[4]||(e[4]=o=>a(r).pageSizes=o),total:a(r).total,"onUpdate:total":e[5]||(e[5]=o=>a(r).total=o),size:"default",background:!0,layout:"total, sizes, prev, pager, next, jumper","default-current-page":1,onSizeChange:X,onCurrentChange:Z},null,8,["current-page","page-size","page-sizes","total"])])])])),[[P,a(u)]]),t(ce,{modelValue:a(g),"onUpdate:modelValue":e[8]||(e[8]=o=>D(g)?g.value=o:null),title:"新增文件",width:"600","destroy-on-close":"",onClose:k},{default:n(()=>[t(ue,{inline:!0,model:a(d),class:"demo-form-inline"},{default:n(()=>[t(x,{label:"选择分组",prop:"group","label-width":"100px"},{default:n(()=>[t(de,{modelValue:a(d).group,"onUpdate:modelValue":e[6]||(e[6]=o=>a(d).group=o),placeholder:"选择分组",style:{width:"300px"},filterable:""},{default:n(()=>[(m(!0),b(T,null,ve(a(y),o=>(m(),L(re,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(x,{label:"文件描述",prop:"desc","label-width":"100px"},{default:n(()=>[t(S,{modelValue:a(d).desc,"onUpdate:modelValue":e[7]||(e[7]=o=>a(d).desc=o),placeholder:"请输入文件描述",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),t(x,{label:"导入文件","label-width":"100px"},{default:n(()=>[t(pe,{ref_key:"uploadRef",ref:C,class:"upload-demo","file-list":a(h),"auto-upload":!1,"on-preview":A,"on-remove":O,"on-change":Y,multiple:!0,limit:10,drag:"",style:{width:"420px"}},{default:n(()=>[t(a(v),{class:"w-1/2 mx-auto el-icon--upload",icon:"uiw:cloud-upload",style:{"font-size":"50px"}}),e[15]||(e[15]=i("div",{class:"el-upload__text"},[f(" 请"),i("em",null,"点击或拖拽"),f("上传文件 ")],-1))]),_:1},8,["file-list"])]),_:1}),t(x,{class:"ml-96"},{default:n(()=>[t(s,{onClick:k},{default:n(()=>[f(z(l.$t("btn.cancel")),1)]),_:1}),t(s,{type:"primary",onClick:j},{default:n(()=>[f(z(l.$t("btn.confirm")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),t(_e,{name:"zoom-fade",mode:"out-in"},{default:n(()=>[a(E)?(m(),b("div",{key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",style:{"z-index":"100"},onClick:le},[i("div",Xe,[i("img",{src:a(N),class:"object-cover w-full"},null,8,Ze)])])):B("",!0)]),_:1})],64)}}}),yt=Le(qe,[["__scopeId","data-v-58097393"]]);export{yt as default};
