import{aV as r,aB as e}from"./index-SkQIWFxF.js";const s=()=>{r()},a=t=>e({url:"/AccountSubset/GetSubSetList",method:"get",params:t}),n=t=>e({url:"/Account/GetAccountsList",method:"get",params:t}),u=t=>e({url:"/Chat/GetAccountDilogs",method:"get",params:t,timeout:1e3*60*2}),c=t=>e({url:"/Chat/GetAccountAndUserIdHistoryMsg",method:"get",params:t}),p=t=>e({url:"/Account/GetAccountHistoryMsg",method:"get",params:t}),m=t=>e({url:"/Account/GetGetGroupMsgHistoryMsg",method:"get",params:t}),d=async t=>e({url:"/Chat/SentMessageToDilogUser",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}),l=t=>e({url:"/Chat/SentMessageToPhone",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}),h=t=>e({url:"/Chat/SentMessageToUserName",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}),g=t=>e({url:"/Chat/DeleteMsg",method:"delete",data:t,headers:{"Content-Type":"multipart/form-data"}}),G=t=>e({url:"/Chat/TranslateText",method:"get",params:t}),C=t=>e({url:"/Chat/SentMessageToChat",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}),i=t=>e({url:"/AccountContact/GetContactList",method:"get",params:t}),A=t=>e({url:"/AccountGroups/CreateNewGroup",method:"post",data:t}),M=t=>e({url:"/AccountGroups/LeaveGroup",method:"get",params:t}),y=t=>e({url:"/AccountGroups/GetMyManageGroup",method:"get",params:t}),T=t=>e({url:"/AccountGroups/GetGroupMemberList",method:"get",params:t}),f=t=>e({url:"/AccountGroups/AddUserToGroup",method:"post",data:t}),L=t=>e({url:"/AccountGroups/RemoveUserByGroup",method:"put",data:t,headers:{"Content-Type":"multipart/form-data"}}),U=t=>e({url:"/AccountGroups/UpdateGroupInfo",method:"put",data:t,headers:{"Content-Type":"multipart/form-data"}}),S=t=>e({url:"/User/SetMyLanguage",method:"put",params:t}),R=t=>e({url:"/AccountContact/RemoveContactByUserId",method:"delete",params:t}),b=t=>e({url:"/Account/UpdateAutomaticReply",method:"put",data:t,headers:{"Content-Type":"multipart/form-data"}}),q=t=>e({url:"/Chat/SetDialogChatNote",method:"put",data:t,headers:{"Content-Type":"multipart/form-data"}}),v=t=>e({url:"/Chat/ForwardMessages",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}});export{a,R as b,i as c,M as d,y as e,h as f,n as g,A as h,s as i,u as j,C as k,d as l,g as m,v as n,c as o,p,m as q,b as r,l as s,G as t,S as u,q as v,f as w,L as x,U as y,T as z};
