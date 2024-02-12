"use strict";(self.webpackChunk_67_strapi_cybersec=self.webpackChunk_67_strapi_cybersec||[]).push([[1213],{91213:(x,f,s)=>{s.d(f,{ProtectedListView:()=>rs});var t=s(74081),l=s(27279),U=s(73354),I=s(27875),d=s(83),D=s(74758),o=s(87006),E=s(36938),a=s(29206),M=s(61020),e=s(51447),B=s(88220),W=s(10271),C=s(93118),K=s(45209),u=s(15816),$=s(97442),F=s(13576),Q=s(87830),V=s(47184),G=s(364),p=s(59461),J=s(71563),Y=s(49204),H=s(47853),z=s(74919),n=s(40464),r=s(98934),P=s(43433),O=s(75719),m=s(8175),T=s(6078),i=s(51943),v=s(55783),c=s(92249),y=s(41942),X=s(22919),w=s(53915),b=s(75041),q=s(30200),ss=s(91379),_=s(33299),ts=s(33409),S=s(63645),Os=s(7988),ms=s(7055),cs=s(26757),fs=s(58311),As=s(24840),Ls=s(29510),gs=s(16946),Cs=s(10124),vs=s(69530),hs=s(86961),Rs=s(51527),Us=s(19764),Is=s(42982),Bs=s(26126);const _s=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],os=()=>{(0,o.go)();const{formatMessage:A}=(0,M.Z)(),h=(0,o.lm)(),ds=(0,B.j)(g=>g.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:Es,allowedActions:{canCreate:k,canDelete:is,canUpdate:ls,canRead:R}}=(0,o.ss)(ds),{push:as}=(0,e.k6)(),{trackUsage:j}=(0,o.rS)(),{_unstableFormatAPIError:Z}=(0,o.So)();l.useEffect(()=>{as({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[as]),(0,B.b)(()=>{j("willAccessTokenList",{tokenType:C.T})});const Ms=_s.map(g=>({...g,metadatas:{...g.metadatas,label:A(g.metadatas.label)}})),{data:L=[],isLoading:Ts,error:N}=(0,W.c)(void 0,{skip:!R});l.useEffect(()=>{L&&j("didAccessTokenList",{number:L.length,tokenType:C.T})},[j,L]),l.useEffect(()=>{N&&h({type:"warning",message:Z(N)})},[N,Z,h]);const[Ds]=(0,W.d)(),Ps=async g=>{try{const ns=await Ds(g);"error"in ns&&h({type:"warning",message:Z(ns.error)})}catch{h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},es=Ts||Es;return(0,t.jsxs)(U.o,{"aria-busy":es,children:[(0,t.jsx)(o.SL,{name:"Transfer Tokens"}),(0,t.jsx)(I.T,{title:A({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:A({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:k?(0,t.jsx)(d.Q,{"data-testid":"create-transfer-token-button",startIcon:(0,t.jsx)(E.Z,{}),size:"S",onClick:()=>j("willAddTokenFromList",{tokenType:C.T}),to:"/settings/transfer-tokens/create",children:A({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),(0,t.jsxs)(D.D,{children:[!R&&(0,t.jsx)(o.ZF,{}),R&&L.length>0&&(0,t.jsx)(K.T,{permissions:{canRead:R,canDelete:is,canUpdate:ls},headers:Ms,contentType:"trasfer-tokens",isLoading:es,onConfirmDelete:Ps,tokens:L,tokenType:C.T}),R&&k&&L.length===0&&(0,t.jsx)(o.dJ,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:(0,t.jsx)(d.Q,{variant:"secondary",startIcon:(0,t.jsx)(E.Z,{}),to:"/settings/transfer-tokens/create",children:A({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})})}),R&&!k&&L.length===0&&(0,t.jsx)(o.dJ,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},rs=()=>{const A=(0,B.j)(h=>h.admin_app.permissions.settings?.["transfer-tokens"].main);return(0,t.jsx)(o.O4,{permissions:A,children:(0,t.jsx)(os,{})})}},45209:(x,f,s)=>{s.d(f,{T:()=>Q});var t=s(74081),l=s(27279),U=s(86967),I=s(93153),d=s(50086),D=s(32370),o=s(10701),E=s(93415),a=s(4987),M=s(79213),e=s(87006),B=s(78665),W=s(98264),C=s(26784),K=s(61020),u=s(51447),$=s(47533),F=s(72450);const Q=({permissions:n,headers:r=[],contentType:P,isLoading:O=!1,tokens:m=[],onConfirmDelete:T,tokenType:i})=>{const{canDelete:v,canUpdate:c,canRead:y}=n;return(0,t.jsx)(e.tM,{headers:r,contentType:P,rows:m,withBulkActions:v||c||y,isLoading:O,onConfirmDelete:T,children:(0,t.jsx)(V,{tokenType:i,permissions:n,onConfirmDelete:T})})},V=({tokenType:n,permissions:r,rows:P=[],withBulkActions:O,onConfirmDelete:m})=>{const{canDelete:T,canUpdate:i,canRead:v}=r,[{query:c}]=(0,e.Kx)(),{formatMessage:y}=(0,K.Z)(),[,X]=c&&c.sort?c.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,u.k6)(),{trackUsage:q}=(0,e.rS)(),ss=[...P].sort((_,ts)=>{const S=_.name.localeCompare(ts.name);return X==="DESC"?-S:S});return(0,t.jsx)(U.p,{children:ss.map(_=>(0,t.jsxs)(I.Tr,{...(0,e.X7)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${_.id}`)},condition:i}),children:[(0,t.jsx)(d.Td,{maxWidth:(0,e.Q1)(250),children:(0,t.jsx)(D.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(d.Td,{maxWidth:(0,e.Q1)(250),children:(0,t.jsx)(D.Z,{textColor:"neutral800",ellipsis:!0,children:_.description})}),(0,t.jsx)(d.Td,{children:(0,t.jsx)(D.Z,{textColor:"neutral800",children:(0,t.jsx)(e.ij,{timestamp:new Date(_.createdAt)})})}),(0,t.jsx)(d.Td,{children:_.lastUsedAt&&(0,t.jsx)(D.Z,{textColor:"neutral800",children:(0,t.jsx)(e.ij,{timestamp:new Date(_.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,t.jsx)(d.Td,{children:(0,t.jsxs)(o.k,{justifyContent:"end",children:[i&&(0,t.jsx)(z,{tokenName:_.name,tokenId:_.id}),!i&&v&&(0,t.jsx)(H,{tokenName:_.name,tokenId:_.id}),T&&(0,t.jsx)(Y,{tokenName:_.name,onClickDelete:()=>m?.(_.id),tokenType:n})]})})]},_.id))})},G={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},p=({tokenName:n,tokenId:r,buttonType:P="edit",children:O})=>{const{formatMessage:m}=(0,K.Z)(),{location:{pathname:T}}=(0,u.k6)();return(0,t.jsx)(J,{forwardedAs:$.OL,to:`${T}/${r}`,title:m(G[P],{target:n}),children:O})},J=(0,F.ZP)(M.r)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,Y=({tokenName:n,onClickDelete:r,tokenType:P})=>{const{formatMessage:O}=(0,K.Z)(),{trackUsage:m}=(0,e.rS)(),[T,i]=l.useState(!1),v=()=>{i(!1),m("willDeleteToken",{tokenType:P}),r()};return(0,t.jsxs)(E.x,{paddingLeft:1,onClick:c=>c.stopPropagation(),children:[(0,t.jsx)(a.h,{onClick:()=>{i(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,t.jsx)(B.Z,{})}),(0,t.jsx)(e.QH,{onToggleDialog:()=>i(!1),onConfirm:v,isOpen:T})]})},H=({tokenName:n,tokenId:r})=>(0,t.jsx)(p,{tokenName:n,tokenId:r,buttonType:"read",children:(0,t.jsx)(W.Z,{})}),z=({tokenName:n,tokenId:r})=>(0,t.jsx)(p,{tokenName:n,tokenId:r,children:(0,t.jsx)(C.Z,{width:12})})},93118:(x,f,s)=>{s.d(f,{A:()=>t,T:()=>l});const t="api-token",l="transfer-token"},10271:(x,f,s)=>{s.d(f,{a:()=>d,b:()=>o,c:()=>U,d:()=>D,u:()=>I});var t=s(88220);const l=t.m.injectEndpoints({endpoints:E=>({getTransferTokens:E.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:a=>a.data,providesTags:(a,M)=>[...a?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:E.query({query:a=>`/admin/transfer/tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:E.mutation({query:a=>({url:"/admin/transfer/tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:E.mutation({query:a=>({url:`/admin/transfer/tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:E.mutation({query:({id:a,...M})=>({url:`/admin/transfer/tokens/${a}`,method:"PUT",data:M}),transformResponse:a=>a.data,invalidatesTags:(a,M,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:U,useGetTransferTokenQuery:I,useCreateTransferTokenMutation:d,useDeleteTransferTokenMutation:D,useUpdateTransferTokenMutation:o}=l}}]);
