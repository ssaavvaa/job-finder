(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{267:function(e,n,a){"use strict";a.r(n);a(11),a(20);var t=a(0),r=a.n(t),l=a(263),o=a(262),c=a(281),u=a.n(c),i=a(140),s=a(139),m=a(75),p=a(264),d=a.n(p),b=a(265),f={email:null,password:null},g=Object(b.a)((function(e){var n=e.reFetchObservableQueries,a=Object(t.useState)(f),l=a[0],o=a[1],c=function(e){var n;o(Object.assign({},l,((n={})[e.target.name]=e.target.value,n)))},p=Object(i.a)(s.j,{variables:{email:l.email,password:l.password,lang:"en"},onError:function(e){return Object(m.b)(e)},onCompleted:function(e){var a=e.signInUser;Object(m.e)("token",a.token,1),n()}}),d=p[0],b=p[1];return r.a.createElement("div",{className:u.a.background},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),d()}(e)},className:u.a.form},r.a.createElement("h1",null,"SIGN ",r.a.createElement("span",{style:{color:"coral"}},"IN")),r.a.createElement("input",{autoComplete:"on",name:"email",onChange:function(e){return c(e)},type:"text",placeholder:"email or username"}),r.a.createElement("input",{autoComplete:"on",name:"password",onChange:function(e){return c(e)},type:"password",placeholder:"password"}),r.a.createElement("p",null,!!b.loading&&r.a.createElement("p",null,"Signing in ...")),r.a.createElement("button",{disabled:!l.email||!l.password,type:"submit"},"Submit")))}));n.default=function(){return r.a.createElement(l.a,{headerStyle:d.a,lang:"en"},r.a.createElement(o.a,{title:"sign-in"}),r.a.createElement(g,null))}}}]);
//# sourceMappingURL=component---src-pages-auth-sign-in-js-e5666d8751f42af86217.js.map