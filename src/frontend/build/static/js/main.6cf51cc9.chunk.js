(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a){e.exports={setCookie:function(e,a,t){var n=new Date;n.setTime(n.getTime()+1e3*t);var r="expires="+n.toUTCString();document.cookie=e+"="+a+";"+r+";path=/; HttpOnly; Secure; SameSite=None"},getCookie:function(e){for(var a=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var r=t[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(a))return r.substring(a.length,r.length)}return""}}},19:function(e,a,t){e.exports=t.p+"static/media/threetree_90.8428407b.png"},23:function(e,a,t){e.exports=t(35)},30:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t.n(n),c=t(15),i=t(0),l=t.n(i),o=t(16),s=t(37),m=t(38),u=t(39),d=t(40),p=t(41),f=t(51),h=t(52),E=(t(30),t(19)),k=t.n(E),g=function(e){return l.a.createElement("div",{id:"login"},l.a.createElement(s.a,{"aria-label":"header"},l.a.createElement(m.a,{href:"#",prefix:"FC"},"Watcher")),l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{id:"leftBox",sm:{span:4,offset:0},md:{span:4,offset:1},lg:{span:4,offset:2}},l.a.createElement("h1",{className:"bx--type-semibold"},"Sign in to your account"),l.a.createElement(f.a,{id:"email",labelText:"Email"}),l.a.createElement(f.a.PasswordInput,{id:"password",labelText:"Password"}),l.a.createElement(h.a,{size:"small",onClick:e.handler},"Log in")),l.a.createElement(p.a,{id:"rightBox",sm:{span:0},md:{span:2},lg:{span:4}},l.a.createElement("img",{src:k.a,alt:"fractel"})))))},x=t(42),v=t(53),b=t(43),w=t(44),y=t(45),S=t(54),C=t(46),O=t(47),T=t(48),j=t(50),L=t(55),I=t(49),N=(t(34),function(){return l.a.createElement("div",{id:"page"},l.a.createElement(x.a,{render:function(e){var a=e.isSideNavExpanded,t=e.onClickSideNavExpand;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{"aria-label":"IBM Platform Name"},l.a.createElement(v.a,{"aria-label":"Open menu",isCollapsible:!0,onClick:t,isActive:a}),l.a.createElement(m.a,{href:"#",prefix:"FC"},"Watcher"),l.a.createElement(b.a,{"aria-label":"FC Watcher"},l.a.createElement(w.a,{href:"#"},"Link 1"),l.a.createElement(w.a,{href:"#"},"Link 2"),l.a.createElement(y.a,{"aria-label":"Link 3",menuLinkName:"Link 3"},l.a.createElement(w.a,{href:"#one"},"Sub-link 1"),l.a.createElement(w.a,{href:"#two"},"Sub-link 2"),l.a.createElement(w.a,{href:"#three"},"Sub-link 3"))),l.a.createElement(S.a,null,"Welcome"),l.a.createElement(C.a,{"aria-label":"Side navigation",isRail:!0,expanded:a},l.a.createElement(O.a,null,l.a.createElement(T.a,{renderIcon:I.a,title:"Category title"},l.a.createElement(j.a,{"aria-current":"page",href:"javascript:void(0)"},"Link"),l.a.createElement(j.a,{href:"javascript:void(0)"},"Link"),l.a.createElement(j.a,{href:"javascript:void(0)"},"Link")),l.a.createElement(L.a,{"aria-current":"page",renderIcon:I.a,href:"javascript:void(0)"},"Link"),l.a.createElement(L.a,{renderIcon:I.a,href:"javascript:void(0)"},"Link")))))}}))}),B=t(17),J="https://bwaexdxnvc.execute-api.us-east-2.amazonaws.com/prod",F=function(){var e=Object(c.a)(r.a.mark(function e(){var a,t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={credentials:"include"},e.next=3,fetch("".concat(J,"/user"),a);case 3:return t=e.sent,e.next=6,t.text();case 6:return n=e.sent,e.abrupt("return",JSON.parse(n));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.a)(r.a.mark(function e(){var a,t,n,c,i,s,m,u,d;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("email").value,document.getElementById("password").value,"felixchen1998@gmail.com","dude",a={email:"felixchen1998@gmail.com",password:"dude"},t={method:"POST",credentials:"include",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},redirect:"follow"},e.next=8,fetch("".concat(J,"/login"),t);case 8:return n=e.sent,e.next=11,n.text();case 11:if(c=e.sent,i=JSON.parse(c),s=i.success,i.accessToken,i.accessTokenExpiry,m=i.refreshTokenExpiry,u=i.refreshToken,console.log(c),s){e.next=18;break}alert("Bad Login"),e.next=24;break;case 18:return Object(B.setCookie)("refreshToken",u,m),e.next=21,F();case 21:d=e.sent,console.log(d),Object(o.render)(l.a.createElement(N,null),document.getElementById("root"));case 24:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(B.getCookie)("refreshToken")&&alert("I have a refresh token..."),Object(o.render)(l.a.createElement(g,{handler:P}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6cf51cc9.chunk.js.map