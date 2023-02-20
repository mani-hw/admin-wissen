"use strict";(self.webpackChunkwissen_dashboard=self.webpackChunkwissen_dashboard||[]).push([[927],{2987:function(e,t,n){var r=n(8588),i=n(2492),a=n(1153),o=n(5239),c=n(184);t.Z=function(){return(0,c.jsx)(r.Z,{children:(0,c.jsx)(i.Z,{children:(0,c.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,c.jsx)(a.ZP,{item:!0,children:(0,c.jsxs)(a.ZP,{container:!0,justifyContent:"space-between",children:[(0,c.jsx)(a.ZP,{item:!0,children:(0,c.jsx)(o.Z,{variant:"rectangular",width:44,height:44})}),(0,c.jsx)(a.ZP,{item:!0,children:(0,c.jsx)(o.Z,{variant:"rectangular",width:34,height:34})})]})}),(0,c.jsx)(a.ZP,{item:!0,children:(0,c.jsx)(o.Z,{variant:"rectangular",sx:{my:2},height:40})}),(0,c.jsx)(a.ZP,{item:!0,children:(0,c.jsx)(o.Z,{variant:"rectangular",height:30})})]})})})}},7927:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(4015),i=n(1413),a=n(5861),o=n(9439),c=n(4942),s=n(4687),h=n.n(s),d=n(2791),l=n(6934),u=n(3967),Z=n(4554),v=n(1153),x=n(220),m=n(2744),p=n(2626),j=n(4567),f=n(2987);var g=n.p+"static/media/earning.b019e86a7ee117bd6bb2e8cab90c0db5.svg",b=n(2094),z=n(1110),y=n(9543),k=n(9962),P=n(6778),C=n(4975),H=n(184),V=(0,l.ZP)(r.Z)((function(e){var t=e.theme;return{backgroundColor:t.palette.secondary.dark,color:"#fff",overflow:"hidden",position:"relative","&:after":(0,c.Z)({content:'""',position:"absolute",width:210,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-85,right:-95},t.breakpoints.down("sm"),{top:-105,right:-140}),"&:before":(0,c.Z)({content:'""',position:"absolute",width:210,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5},t.breakpoints.down("sm"),{top:-155,right:-70})}})),w=function(e){var t=e.isLoading,n=(0,u.Z)(),r=(0,d.useState)(null),c=(0,o.Z)(r,2),s=c[0],l=c[1],w=function(){l(null)},M=(0,d.useState)(),A=(0,o.Z)(M,2),L=A[0],O=A[1];(0,d.useEffect)((function(){S()}),[]);var S=function(){var e=(0,a.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.ZP.firestore().collection("QuizLeague").where("isRejected","==",!1).get().then((function(e){var t=e.docs.map((function(e){return e.data()})).length;O(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,H.jsx)(H.Fragment,{children:t?(0,H.jsx)(f.Z,{}):(0,H.jsx)(V,{border:!1,content:!1,children:(0,H.jsx)(Z.Z,{sx:{p:2.25},children:(0,H.jsxs)(v.ZP,{container:!0,direction:"column",children:[(0,H.jsx)(v.ZP,{item:!0,children:(0,H.jsxs)(v.ZP,{container:!0,justifyContent:"space-between",children:[(0,H.jsx)(v.ZP,{item:!0,children:(0,H.jsx)(x.Z,{variant:"rounded",sx:(0,i.Z)((0,i.Z)((0,i.Z)({},n.typography.commonAvatar),n.typography.largeAvatar),{},{backgroundColor:n.palette.secondary[800],mt:1}),children:(0,H.jsx)("img",{src:g,alt:"Notification"})})}),(0,H.jsxs)(v.ZP,{item:!0,children:[(0,H.jsx)(x.Z,{variant:"rounded",sx:(0,i.Z)((0,i.Z)((0,i.Z)({},n.typography.commonAvatar),n.typography.mediumAvatar),{},{backgroundColor:n.palette.secondary.dark,color:n.palette.secondary[200],zIndex:1}),"aria-controls":"menu-earning-card","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},children:(0,H.jsx)(b.Z,{fontSize:"inherit"})}),(0,H.jsxs)(m.Z,{id:"menu-earning-card",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:w,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,H.jsxs)(p.Z,{onClick:w,children:[(0,H.jsx)(z.Z,{sx:{mr:1.75}})," Import Card"]}),(0,H.jsxs)(p.Z,{onClick:w,children:[(0,H.jsx)(y.Z,{sx:{mr:1.75}})," Copy Data"]}),(0,H.jsxs)(p.Z,{onClick:w,children:[(0,H.jsx)(k.Z,{sx:{mr:1.75}})," Export"]}),(0,H.jsxs)(p.Z,{onClick:w,children:[(0,H.jsx)(P.Z,{sx:{mr:1.75}})," Archive File"]})]})]})]})}),(0,H.jsx)(v.ZP,{item:!0,children:(0,H.jsx)(v.ZP,{container:!0,alignItems:"center",children:(0,H.jsx)(v.ZP,{item:!0,children:(0,H.jsx)(j.Z,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:L})})})}),(0,H.jsx)(v.ZP,{item:!0,sx:{mb:1.25},children:(0,H.jsx)(j.Z,{sx:{fontSize:"1rem",fontWeight:500,color:n.palette.secondary[200]},children:"Total Leagues"})})]})})})})},M=function(){return(0,H.jsx)(r.Z,{title:"Reports",children:(0,H.jsx)(w,{})})}},6778:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),o=(0,i.default)((0,a.jsx)("path",{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"}),"ArchiveOutlined");t.Z=o},9543:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),o=(0,i.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"}),"FileCopyOutlined");t.Z=o},1110:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),o=(0,i.default)((0,a.jsx)("path",{d:"M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z"}),"GetAppOutlined");t.Z=o},2094:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),o=(0,i.default)((0,a.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.Z=o},9962:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),o=(0,i.default)((0,a.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm12 6V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1zm-2-3h1v3h-1V9zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1v-2zm0-2h1v1h-1V9z"}),"PictureAsPdfOutlined");t.Z=o}}]);
//# sourceMappingURL=927.8f13a130.chunk.js.map