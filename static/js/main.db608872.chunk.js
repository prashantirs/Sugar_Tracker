(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(6),o=n.n(i),r=(n(16),n(7)),l=n(4),a=(n(17),n(0)),s=function(e){return Object(a.jsx)("li",{className:"goal-item",onClick:function(){e.onDelete(e.id)},children:e.children})},u=(n(19),function(e){return Object(a.jsx)("ul",{className:"goal-list",children:e.items.map((function(t){return Object(a.jsx)(s,{id:t.id,onDelete:e.onDeleteItem,children:t.text},t.id)}))})}),d=(n(20),function(e){return Object(a.jsx)("button",{type:e.type,className:"button",onClick:e.onClick,children:e.children})}),j=(n(21),function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],o=n[1];return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onAddGoal(i)},children:[Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{children:"Sugar Tracker"}),Object(a.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)}})]}),Object(a.jsx)(d,{type:"submit",children:"Add Sugar Value"})]})}),f=(n(22),function(){var e=Object(c.useState)(localStorage.getItem("goal")?JSON.parse(localStorage.getItem("goal")):[{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.jsx)("p",{style:{textAlign:"center"},children:"No data found. Maybe add one?"});return n.length>0&&(o=Object(a.jsx)(u,{items:n,onDeleteItem:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))}})),Object(c.useEffect)((function(){localStorage.setItem("goal",JSON.stringify(n))}),[n]),Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{id:"goal-form",children:Object(a.jsx)(j,{onAddGoal:function(e){i((function(t){var n=Object(r.a)(t);return n.unshift({text:e,id:Math.random().toString()}),n}))}})}),Object(a.jsx)("section",{id:"goals",children:o})]})});o.a.createRoot(document.getElementById("root")).render(Object(a.jsx)(f,{}))}],[[23,1,2]]]);
//# sourceMappingURL=main.db608872.chunk.js.map