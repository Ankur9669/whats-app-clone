(this["webpackJsonpwhats-app-clone"]=this["webpackJsonpwhats-app-clone"]||[]).push([[0],{62:function(e,s,t){},63:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},72:function(e,s,t){},75:function(e,s,t){},76:function(e,s,t){},77:function(e,s,t){},96:function(e,s,t){},98:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t.n(c),n=t(22),i=t.n(n),r=(t(62),t(55)),j=t(18),l=(t(63),t(64),t(65),t(49)),d=t.n(l),o=t(50),b=t.n(o),h=t(33),m=t.n(h),O=t(112),u=t(34),x=t.n(u),f=(t(66),t(1));var g=function(){return Object(f.jsxs)("div",{className:"sidebar-left-header-container",children:[Object(f.jsxs)("div",{className:"sidebar-left-header",children:[Object(f.jsx)("div",{className:"sidebar-left-header-img-container",children:Object(f.jsx)("img",{className:"sidebar-left-header-img",src:"https://d27jswm5an3efw.cloudfront.net/app/uploads/2020/12/Casey2-150x150.jpg",alt:"no-image"})}),Object(f.jsxs)("div",{className:"sidebar-left-header-icons-container",children:[Object(f.jsx)(O.a,{children:Object(f.jsx)(d.a,{className:"icons"})}),Object(f.jsx)(O.a,{children:Object(f.jsx)(b.a,{className:"icons"})}),Object(f.jsx)(O.a,{children:Object(f.jsx)(m.a,{className:"icons"})})]})]}),Object(f.jsxs)("div",{className:"sidebar-left-search-bar-container",children:[Object(f.jsx)(x.a,{className:"sidebar-left-search-bar-icon"}),Object(f.jsx)("textarea",{className:"sidebar-left-search-bar",placeholder:"Search Or Start A New Chat"})]})]})},p=(t(72),t(4));var v=function(){var e=Object(p.f)(),s=Object(c.useState)(window.innerWidth),t=Object(j.a)(s,2),a=t[0];return t[1],Object(f.jsxs)("div",{className:"sidebar-left-message",onClick:function(){a<700&&(console.log("YEs here"),e.push("/chat"))},children:[Object(f.jsx)("div",{className:"sidebar-left-message-img",children:Object(f.jsx)("img",{className:"sidebar-left-header-img",src:"https://d27jswm5an3efw.cloudfront.net/app/uploads/2020/12/Casey2-150x150.jpg",alt:"no-image"})}),Object(f.jsxs)("div",{className:"sidebar-left-message-msg",children:[Object(f.jsx)("p",{style:{color:"white",fontWeight:"600"},children:"Ankur gupta"}),Object(f.jsx)("p",{style:{color:"white",fontWeight:"400"},children:"Yes i am online"})]}),Object(f.jsx)("div",{className:"sidebar-left-message-time",children:Object(f.jsx)("p",{style:{color:"white"},children:"7:03PM"})})]})};var N=function(){return Object(f.jsxs)("div",{className:"sidebar-left",children:[Object(f.jsx)(g,{}),Object(f.jsxs)("div",{className:"sidebar-left-message-container",children:[Object(f.jsx)(v,{}),Object(f.jsx)("hr",{style:{opacity:"0.1"}}),Object(f.jsx)(v,{}),Object(f.jsx)("hr",{style:{opacity:"0.1"}}),Object(f.jsx)(v,{}),Object(f.jsx)("hr",{style:{opacity:"0.1"}})]})]})};t(75),t(76);var w=function(e){var s=Object(c.useRef)();return Object(c.useEffect)((function(){s&&(s.current.scrollTop=s.current.scrollHeight)}),[e.messages]),Object(f.jsx)("div",{className:"sidebar-right-chat",ref:s,children:e.messages.map((function(e){return Object(f.jsxs)("div",{className:e.received?"chat-msg-received":"chat-msg-sent",children:[Object(f.jsx)("span",{className:"chat-sender-name",children:Object(f.jsx)("p",{children:null===e||void 0===e?void 0:e.name})}),Object(f.jsx)("span",{className:"chat-msg",children:Object(f.jsx)("p",{children:null===e||void 0===e?void 0:e.message})}),Object(f.jsx)("span",{className:"chat-date-time",children:Object(f.jsx)("p",{children:null===e||void 0===e?void 0:e.timestamp})})]})}))})},y=(t(77),t(52)),C=t.n(y),S=t(53),k=t.n(S),E=t(51),W=t.n(E).a.create({baseURL:"http://localhost:8000"});var A=function(){var e=Object(c.useState)(""),s=Object(j.a)(e,2),t=s[0],a=s[1];function n(){console.log(t),t.length>0&&(W.post("/v3/messages/60cee248d5513403805c8d11",{message:t,name:"Ankur",timestamp:(new Date).toUTCString(),received:!1}),a(""))}return Object(f.jsxs)("div",{className:"sidebar-right-footer",children:[Object(f.jsx)(O.a,{children:Object(f.jsx)(C.a,{className:"icons"})}),Object(f.jsx)("input",{className:"chat-bar",placeholder:"Send chat",onChange:function(e){return a(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&n()},value:t}),Object(f.jsx)(O.a,{onClick:n,children:Object(f.jsx)(k.a,{className:"icons"})})]})};t(96);var F=function(){return Object(f.jsxs)("div",{className:"sidebar-right-header",children:[Object(f.jsx)("div",{className:"sidebar-right-header-img-container",children:Object(f.jsx)("img",{className:"sidebar-right-header-img",src:"https://d27jswm5an3efw.cloudfront.net/app/uploads/2020/12/Casey2-150x150.jpg",alt:"no-image"})}),Object(f.jsxs)("div",{className:"sidebar-right-header-name-container",children:[Object(f.jsx)("p",{style:{color:"white",fontWeight:"600"},children:"Ankur gupta"}),Object(f.jsx)("p",{style:{color:"white",fontWeight:"400"},children:"online"})]}),Object(f.jsxs)("div",{className:"sidebar-right-header-icons-container",children:[Object(f.jsx)(O.a,{children:Object(f.jsx)(x.a,{className:"icons"})}),Object(f.jsx)(O.a,{children:Object(f.jsx)(m.a,{className:"icons"})})]})]})};var L=function(e){return Object(f.jsxs)("div",{className:"sidebar-right",children:[Object(f.jsx)(F,{}),Object(f.jsx)(w,{messages:e.messages}),Object(f.jsx)(A,{})]})},P=t(54),T=t.n(P),B=t(36);var D=function(){var e=Object(c.useState)([]),s=Object(j.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)(window.innerWidth),i=Object(j.a)(n,2),l=i[0],d=i[1];function o(){d(window.innerWidth)}return Object(c.useEffect)((function(){W.get("/v3/messages/60cee248d5513403805c8d11").then((function(e){e?a(e.data):alert("Some Error in fetching")})),window.addEventListener("resize",o)}),[]),Object(c.useEffect)((function(){var e=new T.a("4cee5d7aff5e3596cb6c",{cluster:"ap2"}),s=e.subscribe("rooms");return s.bind("inserted",(function(e){a([].concat(Object(r.a)(t),[e]))})),function(){e.unsubscribe(),s.unbind_all()}}),[t]),l>700?Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(N,{}),Object(f.jsx)(L,{messages:t})]}):Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(B.a,{children:Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{path:"/chat",children:Object(f.jsx)(L,{messages:t})}),Object(f.jsx)(p.a,{path:"/",children:Object(f.jsx)(N,{})})]})})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,113)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root")),I()}},[[98,1,2]]]);
//# sourceMappingURL=main.85af819b.chunk.js.map