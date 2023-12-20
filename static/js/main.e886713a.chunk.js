(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(10),r=c(6),l=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(16),c(17),c(7)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.currentTodo,s=e.setCurrentTodo,a=function(e){return function(){c!==e&&s(e)}};return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t&&t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:a(e),children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye-slash":c===e,"fa-eye":c!==e})})})})})]},e.id)}))})]})},m=function(e){var t=e.query,c=e.setQuery,s=e.selectedOption,a=e.setSelectedOption;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){var t=e.target.value;a(t)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){var t=e.target.value;c(t)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})},O=(c(19),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f,p=function(e){var t=e.currentTodo,c=e.setCurrentTodo,s=Object(d.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1],j=Object(d.useState)(!1),h=Object(l.a)(j,2),m=h[0],f=h[1],p=Object(d.useState)(null),v=Object(l.a)(p,2),N=v[0],y=v[1];return Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),e.prev=1,!t){e.next=7;break}return e.next=5,s=t.userId,x("/users/".concat(s));case 5:c=e.sent,i(c);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0 instanceof Error&&y("404 User Not Found");case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}var s}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(b.jsxs)("div",{className:u()("modal",{"is-active":t}),"data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),m?Object(b.jsx)(O,{}):Object(b.jsxs)("div",{className:"modal-card",children:[N&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{className:"modal-card-head",style:{borderBottomLeftRadius:6,borderBottomRightRadius:6},children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium",children:N}),Object(b.jsx)("button",{type:"button",className:"delete",onClick:function(){return c(null)}})]})}),!N&&n&&t&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(b.jsx)("strong",{className:t.completed?"has-text-success":"has-text-danger",children:t.completed?"Done":"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(f||(f={}));var v=function(){var e=Object(d.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)([]),i=Object(l.a)(a,2),j=i[0],u=i[1],v=Object(d.useState)(null),N=Object(l.a)(v,2),y=N[0],g=N[1],k=Object(d.useState)(null),C=Object(l.a)(k,2),w=C[0],S=C[1],T=Object(d.useState)(""),A=Object(l.a)(T,2),E=A[0],F=A[1],B=Object(d.useState)(f.All),L=Object(l.a)(B,2),_=L[0],I=L[1];Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,x("/todos");case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0 instanceof Error&&S("404 Not Found");case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var R=Object(d.useCallback)((function(e){return e.filter((function(e){return e.title.toLowerCase().includes(E.toLowerCase())}))}),[E]),q=Object(d.useCallback)((function(e){switch(_){case f.Active:return e.filter((function(e){return!e.completed}));case f.Completed:return e.filter((function(e){return e.completed}));case f.All:default:return e}}),[_]),J=Object(d.useMemo)((function(){var e=Object(n.a)(j);return e=R(e),e=q(e)}),[j,q,R]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{query:E,setQuery:F,selectedOption:_,setSelectedOption:I})}),Object(b.jsx)("div",{className:"block",children:c?Object(b.jsx)(O,{}):Object(b.jsxs)(b.Fragment,{children:[w&&Object(b.jsx)("p",{children:w}),j&&Object(b.jsx)(h,{todos:J,currentTodo:y,setCurrentTodo:g})]})})]})})}),y&&Object(b.jsx)(p,{currentTodo:y,setCurrentTodo:g})]})};a.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e886713a.chunk.js.map