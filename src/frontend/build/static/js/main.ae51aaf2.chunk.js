(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/threetree_90.8428407b.png"},54:function(e,t,a){e.exports=a(66)},61:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=a(12),l=a(0),o=a.n(l),s=a(86),u=a(13),i=a(72),d=a(90),m=a(73),p=a(74),h=a(75),f=a(88),y=a(91),E=(a(61),a(44)),v=a.n(E),g=function(e){return o.a.createElement("div",{id:"login"},o.a.createElement(i.a,{"aria-label":"header"},o.a.createElement(d.a,{href:"https://github.com/felixjchen/web-watcher",prefix:"Web"},"Watcher")),o.a.createElement(m.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,{id:"leftBox",sm:{span:4,offset:0},md:{span:4,offset:1},lg:{span:4,offset:2}},o.a.createElement("h1",{className:"bx--type-semibold"},"Sign in to your account"),o.a.createElement(f.a,{id:"email",labelText:"Email",onKeyPress:function(t){"Enter"===t.key&&e.loginHandler({})}}),o.a.createElement(f.a.PasswordInput,{id:"password",labelText:"Password",onKeyPress:function(t){"Enter"===t.key&&e.loginHandler({})}}),o.a.createElement(y.a,{size:"small",kind:"secondary",onClick:e.signupHandler},"Sign up"),o.a.createElement(y.a,{size:"small",onClick:e.loginHandler},"Log in")),o.a.createElement(h.a,{id:"rightBox",sm:{span:0},md:{span:2},lg:{span:4}},o.a.createElement("img",{src:v.a,alt:"fractel"})))))},b=a(45),w=a(46),x=a(50),O=a(47),k=a(51),T=a(76),j=a(77),S=a(78),H=a(87),B=a(33),I=a(36),C=a(37),W=a(39),P=a(31),M=a(34),J=a(35),N=a(38),R=a(32),q=a(17),L=a(83),A=a(89),z=a(81),D=a(92),F=a(84),U=a(85),_=a(67),G=a(79),K=(a(64),{everyHour:3600,every6Hours:21600,every12Hours:43200,every24Hours:86400}),Q={3600:"every hour",21600:"every 6 hours",43200:"every 12 hours",86400:"every 24 hours"},V=[{key:"url",header:"URL"},{key:"frequency",header:"Frequency"},{key:"last_run",header:"Last Run"},{key:"options",header:""}],X=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(x.a)(this,Object(O.a)(t).call(this,e))).updateWatchers=Object(c.a)(r.a.mark(function e(){var t,n,c,l,o,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={credentials:"include"},e.next=3,fetch("".concat(a.props.gatewayAddress,"/user"),t);case 3:return n=e.sent,e.next=6,n.text();case 6:c=e.sent,l=JSON.parse(c),(o=l.watchers).forEach(function(e){var t=new Date(0);t.setUTCSeconds(e.last_run),e.last_run=String(t).slice(0,24)}),(s=a.state).watchers=o,a.setState(s);case 12:case"end":return e.stop()}},e)})),a.deleteWatcher=function(){var e=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({watcherId:t}),redirect:"follow"},e.next=3,fetch("".concat(a.props.gatewayAddress,"/watcher"),n);case 3:a.updateWatchers();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.openModal=function(){var e=a.state;e.addWatcherModalOpen=!0,a.setState(e)},a.closeModal=function(){var e=a.state;e.addWatcherModalOpen=!1,a.setState(e)},a.submitModal=Object(c.a)(r.a.mark(function e(){var t,n,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("modalUrl").value,n=K[window.RadioButtonGroup.state.selected],c={method:"POST",credentials:"include",body:JSON.stringify({url:t,frequency:n}),headers:{"Content-Type":"application/json"},redirect:"follow"},(l=a.state).addWatcherModalOpen=!1,a.setState(l),e.next=8,fetch("https://bwaexdxnvc.execute-api.us-east-2.amazonaws.com/prod/watcher",c);case 8:a.updateWatchers();case 9:case"end":return e.stop()}},e)})),a.state={addWatcherModalOpen:!1,watchers:[]},a.updateWatchers(),a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"page"},o.a.createElement(T.a,{render:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{"aria-label":"IBM Platform Name"},o.a.createElement(d.a,{prefix:"Web"},"Watcher"),o.a.createElement(j.a,null,o.a.createElement(S.a,{id:"logoutIcon","aria-label":"Logout",onClick:e.props.logoutHandler},o.a.createElement(G.a,null)))))}}),o.a.createElement(H.a,{rows:this.state.watchers,headers:V,isSortable:!0},function(t){var a=t.rows,n=t.headers,r=t.getHeaderProps,c=t.getRowProps,l=t.getTableProps,s=t.getToolbarProps,u=t.onInputChange,i=t.getTableContainerProps;return o.a.createElement(B.a,Object.assign({title:"Welcome ".concat(e.props.email)},i()),o.a.createElement(I.a,Object.assign({},s(),{"aria-label":"data table toolbar"}),o.a.createElement(C.a,null,o.a.createElement(W.a,{onChange:u}),o.a.createElement(y.a,{onClick:e.openModal},"Add Watcher"))),o.a.createElement(P.a,l(),o.a.createElement(M.a,null,o.a.createElement(J.a,null,n.map(function(e){return o.a.createElement(N.a,Object.assign({key:e.key},r({header:e,isSortable:"options"!==e.key})),e.header)}))),o.a.createElement(R.a,null,a.map(function(t){return o.a.createElement(J.a,Object.assign({key:t.id},c({row:t})),o.a.createElement(q.a,{key:t.cells[0].id},o.a.createElement("p",{style:{display:"none"}},t.cells[0].value),o.a.createElement(L.a,{href:t.cells[0].value},t.cells[0].value)),o.a.createElement(q.a,{key:t.cells[1].id},t.cells[1].value in Q?Q[t.cells[1].value]:t.cells[1].value),o.a.createElement(q.a,{key:t.cells[2].id},t.cells[2].value),o.a.createElement(q.a,{key:t.cells[3].id},t.cells[3].value,o.a.createElement(A.a,{flipped:!0},o.a.createElement(z.a,{itemText:"Delete",hasDivider:!0,isDelete:!0,onClick:function(){e.deleteWatcher(t.id)}}))))}))))}),o.a.createElement(D.a,{hasForm:!0,size:"sm",selectorPrimaryFocus:"#text-input-2",open:this.state.addWatcherModalOpen,primaryButtonText:"Add",secondaryButtonText:"Cancel",shouldSubmitOnEnter:!0,onRequestClose:this.closeModal,onRequestSubmit:this.submitModal,onSecondarySubmit:this.closeModal},o.a.createElement(f.a,{id:"modalUrl",labelText:"URL",placeholder:"https://www.google.com/",style:{marginBottom:"1rem"}}),o.a.createElement(F.a,{legendText:"Frequency"},o.a.createElement(U.a,{defaultSelected:"everyHour",name:"frequency",ref:function(e){window.RadioButtonGroup=e}},o.a.createElement(_.a,{labelText:"every hour",value:"everyHour",id:"radio-1"}),o.a.createElement(_.a,{labelText:"every 6 hours",value:"every6Hours",id:"radio-2"}),o.a.createElement(_.a,{labelText:"every 12 hours",value:"every12Hours",id:"radio-3"}),o.a.createElement(_.a,{labelText:"every 24 hours",value:"every24Hours",id:"radio-4"})))))}}]),t}(o.a.Component),Y="https://bwaexdxnvc.execute-api.us-east-2.amazonaws.com/prod",Z=null,$=function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n,c,l,i,d,m,p;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,null==a&&(a=document.getElementById("email").value),null==n&&(n=document.getElementById("password").value),console.log(a,n),Object(u.render)(o.a.createElement(s.a,null),document.getElementById("root")),c={method:"POST",credentials:"include",body:JSON.stringify({email:a,password:n}),headers:{"Content-Type":"application/json"},redirect:"follow"},e.next=8,fetch("".concat(Y,"/login"),c);case 8:return l=e.sent,e.next=11,l.text();case 11:i=e.sent,d=JSON.parse(i),m=d.success,p=d.accessTokenExpiry,console.log(i),m?(Z=setTimeout(ae,1e3*(p-2)),Object(u.render)(o.a.createElement(X,{email:a,gatewayAddress:Y,logoutHandler:ee}),document.getElementById("root"))):(alert("Login failed: username/password error"),Object(u.render)(o.a.createElement(g,{signupHandler:te,loginHandler:$}),document.getElementById("root")));case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(c.a)(r.a.mark(function e(){var t,a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow"},e.next=3,fetch("".concat(Y,"/logout"),t);case 3:return a=e.sent,e.next=6,a.text();case 6:return n=e.sent,Object(u.render)(o.a.createElement(g,{signupHandler:te,loginHandler:$}),document.getElementById("root")),clearTimeout(Z),e.abrupt("return",JSON.parse(n).success);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(c.a)(r.a.mark(function e(){var t,a,n,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("email").value,a=document.getElementById("password").value,Object(u.render)(o.a.createElement(s.a,null),document.getElementById("root")),n={method:"POST",credentials:"include",body:JSON.stringify({email:t,password:a}),headers:{"Content-Type":"application/json"},redirect:"follow"},e.next=6,fetch("".concat(Y,"/user"),n);case 6:return c=e.sent,e.next=9,c.text();case 9:l=e.sent,console.log(l),$({email:t,password:a});case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(c.a)(r.a.mark(function e(){var t,a,n,c,l,s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",credentials:"include"},e.next=3,fetch("".concat(Y,"/refresh"),t);case 3:return a=e.sent,e.next=6,a.text();case 6:if(n=e.sent,c=JSON.parse(n),l=c.success,s=c.accessTokenExpiry,i=c.email,l){e.next=13;break}return e.next=11,ee();case 11:e.next=15;break;case 13:Z=setTimeout(ae,1e3*(s-2)),Object(u.render)(o.a.createElement(X,{email:i,gatewayAddress:Y,logoutHandler:ee}),document.getElementById("root"));case 15:return e.abrupt("return",l);case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Initial silent refresh fail "+e.t0);case 8:case"end":return e.stop()}},e,null,[[0,5]])}));return function(){return e.apply(this,arguments)}}();Object(u.render)(o.a.createElement(s.a,null),document.getElementById("root")),ne()}},[[54,1,2]]]);
//# sourceMappingURL=main.ae51aaf2.chunk.js.map