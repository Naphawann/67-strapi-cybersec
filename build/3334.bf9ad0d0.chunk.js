"use strict";(self.webpackChunk_67_strapi_cybersec=self.webpackChunk_67_strapi_cybersec||[]).push([[3334],{13334:(V,C,s)=>{s.d(C,{ProtectedEditPage:()=>Q});var t=s(74081),c=s(27279),E=s(93415),M=s(10701),m=s(32370),h=s(48102),I=s(23298),R=s(74577),g=s(12881),L=s(39708),B=s(73354),U=s(27875),T=s(74758),W=s(79213),o=s(87006),K=s(76827),f=s(71563),p=s(61020),x=s(51447),G=s(47533),j=s(47853),e=s(88220),J=s(51950),H=s(36734),ns=s(15816),is=s(97442),Es=s(13576),rs=s(87830),ds=s(47184),es=s(364),ls=s(59461),Ms=s(49204),Ps=s(74919),Os=s(29206),Ds=s(40464),ms=s(98934),hs=s(43433),Rs=s(75719),gs=s(8175),Ls=s(6078),As=s(51943),vs=s(55783),Cs=s(92249),cs=s(41942),Is=s(22919),Bs=s(53915),Us=s(75041),Ts=s(30200),Ws=s(91379),Ks=s(33299),fs=s(33409),xs=s(63645),js=s(7988),ys=s(7055),us=s(26757),ps=s(58311),Ss=s(24840),Zs=s(29510),Fs=s(16946),Ns=s(10124),zs=s(69530),Vs=s(86961),Gs=s(51527),Js=s(19764),Hs=s(42982),Xs=s(26126),Ys=s(10131),$s=s(63799);const X=({disabled:n,role:a,values:O,errors:_,onChange:r,onBlur:A})=>{const{formatMessage:i}=(0,p.Z)();return(0,t.jsx)(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.k,{justifyContent:"space-between",children:[(0,t.jsxs)(E.x,{children:[(0,t.jsx)(E.x,{children:(0,t.jsx)(m.Z,{fontWeight:"bold",children:a?a.name:i({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(E.x,{children:(0,t.jsx)(m.Z,{textColor:"neutral500",variant:"pi",children:a?a.description:i({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.z,{disabled:!0,variant:"secondary",children:i({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(I.r,{gap:4,children:[(0,t.jsx)(R.P,{col:6,children:(0,t.jsx)(g.o,{disabled:n,name:"name",error:_.name&&i({id:_.name}),label:i({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:A,required:!0,value:O.name||""})}),(0,t.jsx)(R.P,{col:6,children:(0,t.jsx)(L.g,{disabled:n,label:i({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&i({id:_.name}),onChange:r,onBlur:A,children:O.description||""})})]})]})})},Y=j.Ry().shape({name:j.Z_().required(o.I0.required),description:j.Z_().optional()}),$=()=>{const n=(0,o.lm)(),{formatMessage:a}=(0,p.Z)(),_=(0,x.$B)("/settings/roles/:id")?.params.id,r=c.useRef(null),{lockApp:A,unlockApp:i}=(0,o.o1)(),{trackUsage:b}=(0,o.rS)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:Z}=(0,o.So)(),{isLoading:k,data:F}=(0,e.A)({role:_??""}),{roles:w,isLoading:N,refetch:q}=(0,J.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(x.l_,{to:"/settings/roles"});const os=async(y,v)=>{try{A();const{permissionsToSend:D,didUpdateConditions:u}=r.current?.getPermissions()??{},d=await _s({id:_,...y});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?v.setErrors(Z(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&D){const l=await as({id:d.data.id,permissions:D});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?v.setErrors(Z(l.error)):n({type:"warning",message:S(l.error)});return}u&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{i()}},z=!N&&P.code==="strapi-super-admin";return(0,t.jsxs)(B.o,{children:[(0,t.jsx)(o.SL,{name:"Roles"}),(0,t.jsx)(f.J9,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:Y,validateOnChange:!1,children:({handleSubmit:y,values:v,errors:D,handleChange:u,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:y,children:[(0,t.jsx)(U.T,{primaryAction:(0,t.jsx)(M.k,{gap:2,children:(0,t.jsx)(h.z,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.r,{as:G.OL,startIcon:(0,t.jsx)(K.Z,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.D,{children:(0,t.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(X,{disabled:z,errors:D,values:v,onChange:u,onBlur:d,role:P}),!k&&!N&&!ts&&F?(0,t.jsx)(E.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(H.P,{isFormDisabled:z,permissions:ss,ref:r,layout:F})}):(0,t.jsx)(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.dO,{})})]})})]})})]})},Q=()=>{const n=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:O,canUpdate:_}}=(0,o.ss)(n);return a?(0,t.jsx)(o.dO,{}):!O&&!_?(0,t.jsx)(x.l_,{to:"/"}):(0,t.jsx)($,{})}},51950:(V,C,s)=>{s.d(C,{u:()=>m});var t=s(27279),c=s(87006),E=s(61020),M=s(88220);const m=(h={},I)=>{const{locale:R}=(0,E.Z)(),g=(0,c.Xe)(R,{sensitivity:"base"}),{data:L,error:B,isError:U,isLoading:T,refetch:W}=(0,M.z)(h,I);return{roles:t.useMemo(()=>[...L??[]].sort((K,f)=>g.compare(K.name,f.name)),[L,g]),error:B,isError:U,isLoading:T,refetch:W}}}}]);
