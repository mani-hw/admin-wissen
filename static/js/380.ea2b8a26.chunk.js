"use strict";(self.webpackChunkwissen_dashboard=self.webpackChunkwissen_dashboard||[]).push([[380],{4380:function(e,t,n){n.r(t);var a=n(5861),r=n(9439),s=n(4687),c=n.n(s),o=n(2791),u=n(2721),i=n(4015),d=n(4975),l=n(184),h=[{name:"User Name"},{name:"Email"},{name:"Location"},{name:"User Role"},{name:"Blocked Reason"},{name:"Actions"}];t.default=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,o.useState)(),g=(0,r.Z)(f,2),p=g[0],m=g[1],v=(0,o.useState)(),k=(0,r.Z)(v,2),w=k[0],Z=k[1],B=(0,o.useState)(0),x=(0,r.Z)(B,2),y=x[0],P=x[1],S=(0,o.useState)(0),b=(0,r.Z)(S,2),A=b[0],L=b[1],C=(0,o.useState)(!1),U=(0,r.Z)(C,2),R=U[0],j=U[1],E=(0,o.useState)(10),T=(0,r.Z)(E,2),_=T[0],D=T[1],N=d.ZP.firestore().collection("Users");function q(){return z.apply(this,arguments)}function z(){return z=(0,a.Z)(c().mark((function e(){var t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:_,j(!0),N.orderBy("createdAt","desc").limit(t).where("isBlocked","==",!0).get().then((function(e){var t=e.docs.map((function(e){return e.data()})),n=e.docs[e.docs.length-1];m(n),s(t),j(!1)})),e.next=5,N.where("isBlocked","==",!0).get();case 5:n=e.sent.docs.length,L(n);case 7:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var F=function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(t.target.value);case 3:D(t.target.value),P(0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){q()}),[]),(0,l.jsx)(i.Z,{title:"BlackListed Users",children:(0,l.jsx)(u.Z,{columns:h,data:n&&n,setTableData:s,type:"BlackListed",page:y,setPage:P,handleChangePage:function(e,t){j(!0);var n=y;P(t),t>n?N.orderBy("createdAt","desc").limit(_).startAfter(p).where("isBlocked","==",!0).get().then((function(e){var t=e.docs.map((function(e){return e.data()})),n=e.docs[e.docs.length-1],a=e.docs[0];Z(a),m(n),s(t),j(!1)})):N.orderBy("createdAt","desc").limitToLast(_+1).endBefore(w).where("isBlocked","==",!0).get().then((function(e){var t=e.docs.map((function(e){return e.data()})),n=e.docs[e.docs.length-1],a=e.docs[0];Z(a),m(n),s(t),j(!1)}))},length:A,setLoading:j,loading:R,rowsPerPage:_,handleChangeRowsPerPage:F})})}}}]);
//# sourceMappingURL=380.ea2b8a26.chunk.js.map