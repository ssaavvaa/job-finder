(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(e,n,t){"use strict";t.r(n);t(11),t(19);var a=t(0),r=t.n(a),l=t(263),o=t(262),u=t(280),i=t.n(u),c=t(140),s=t(139),m=t(93),p=t(264),b={email:null,password:null},d=Object(p.a)((function(e){var n=e.reFetchObservableQueries,t=Object(a.useState)(b),l=t[0],o=t[1],u=function(e){var n;o(Object.assign({},l,((n={})[e.target.name]=e.target.value,n)))},p=Object(c.a)(s.j,{variables:{email:l.email,password:l.password,lang:"en"},onError:function(e){return Object(m.b)(e)},onCompleted:function(e){var t=e.signInUser;Object(m.e)("token",t.token,1),n()}}),d=p[0],f=p[1];return r.a.createElement("div",{className:i.a.background},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),d()}(e)},className:i.a.form},r.a.createElement("h1",null,"SIGN IN"),r.a.createElement("input",{autoComplete:"on",name:"email",onChange:function(e){return u(e)},type:"text",placeholder:"email or username"}),r.a.createElement("input",{autoComplete:"on",name:"password",onChange:function(e){return u(e)},type:"password",placeholder:"password"}),r.a.createElement("p",null,!!f.loading&&r.a.createElement("p",null,"Signing in ...")),r.a.createElement("button",{disabled:!l.email||!l.password,type:"submit"},"Submit")))}));n.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"sign-in"}),r.a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-auth-sign-in-js-ec79a4bddf637adc4384.js.map