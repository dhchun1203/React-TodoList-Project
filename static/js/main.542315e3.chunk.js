(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(11),s=n.n(r),i=(n(28),n(15)),a=n(17),u=n(13),d=(n(29),n(5)),l=function(e){var t=e.onInsert,n=Object(c.useState)(""),o=Object(i.a)(n,2),r=o[0],s=o[1],a=Object(c.useCallback)((function(e){s(e.target.value)}),[]),l=Object(c.useCallback)((function(e){t(r),s(""),e.preventDefault()}),[t,r]);return Object(d.jsxs)("form",{className:"TodoInsert",onSubmit:l,children:[Object(d.jsx)("input",{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:r,onChange:a}),Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)(u.a,{})})]})},j=(n(31),function(e){var t=e.children;return Object(d.jsxs)("div",{className:"TodoTemplate",children:[Object(d.jsx)("div",{className:"app-title",children:"\uc77c\uc815 \uad00\ub9ac"}),Object(d.jsx)("div",{className:"content",children:t})]})}),b=n(20),O=n.n(b),h=(n(32),function(e){var t=e.todo,n=e.onRemove,c=e.onToggle,o=e.style,r=t.id,s=t.text,i=t.checked;return Object(d.jsx)("div",{className:"TodoListItem-virtualized",style:o,children:Object(d.jsxs)("div",{className:"TodoListItem",children:[Object(d.jsxs)("div",{className:O()("checkbox",{checked:i}),onClick:function(){return c(r)},children:[i?Object(d.jsx)(u.b,{}):Object(d.jsx)(u.c,{}),Object(d.jsx)("div",{className:"text",children:s})]}),Object(d.jsx)("div",{className:"remove",onClick:function(){return n(r)},children:Object(d.jsx)(u.d,{})})]})})}),f=o.a.memo(h,(function(e,t){return e.todo===t.todo})),v=(n(33),n(23)),m=function e(t){var n=t.todos,o=t.onRemove,r=t.onToggle,s=Object(c.useCallback)((function(e){var t=e.index,c=e.key,s=e.style,i=n[t];return Object(d.jsx)(f,{todo:i,onRemove:o,onToggle:r,style:s},c)}),[o,r,n]);return Object(d.jsx)(v.a,{className:e,width:489.492,height:518,rowCount:n.length,rowHeight:71.48,rowRenderer:s,list:n,style:{outline:"none"}})},x=o.a.memo(m);function p(){for(var e=[],t=1;t<=2500;t++)e.push({id:t,text:"\ud560 \uc77c ".concat(t),checked:!1});return e}function g(e,t){switch(t.type){case"INSERT":return e.concat(t.todo);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(a.a)(Object(a.a)({},e),{},{checked:!e.checked}):e}));default:return e}}var k=function(){var e=Object(c.useReducer)(g,void 0,p),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useRef)(2501),s=Object(c.useCallback)((function(e){var t={id:r.current,text:e,checked:!1};o({type:"INSERT",todo:t}),r.current+=1}),[]),a=Object(c.useCallback)((function(e){o({type:"REMOVE",id:e})}),[]),u=Object(c.useCallback)((function(e){o({type:"TOGGLE",id:e})}),[]);return Object(d.jsxs)(j,{children:[Object(d.jsx)(l,{onInsert:s}),Object(d.jsx)(x,{todos:n,onRemove:a,onToggle:u})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),T()}},[[46,1,2]]]);
//# sourceMappingURL=main.542315e3.chunk.js.map