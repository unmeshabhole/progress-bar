(this["webpackJsonpprogress-bar"]=this["webpackJsonpprogress-bar"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),i=(n(12),n(2)),u=(n(13),n(6)),b=(n(14),n(15),n(0)),o=function(e){var t=e.limit>0?e.limit:100;return Object(b.jsx)("div",{className:"range",style:{width:"".concat(e.percentRange>t?100:e.percentRange/t*100,"%"),background:"".concat(e.percentRange>t?"red":"#abdbe3")}})},j=function(e){return Object(b.jsxs)("div",{className:"progress-bar",children:[Object(b.jsx)(o,{percentRange:e.percentRange,limit:e.limit}),Object(b.jsxs)("div",{className:"percentage-text",children:[e.percentRange,"%"]})]})},l=function(e){return Object(b.jsx)(b.Fragment,{children:e.progressPercentagesPerBar&&e.progressPercentagesPerBar.map((function(t,n){return Object(b.jsx)(j,{limit:e.limit,percentRange:t},n)}))})},d=(n(17),function(e){return Object(b.jsx)("div",{className:"grid dropdownalign",children:Object(b.jsx)("select",{onChange:function(t){return e.setCurrentBar(parseInt(t.currentTarget.value))},children:e.bars&&e.bars.map((function(e,t){return Object(b.jsxs)("option",{value:t,children:["#progress",t+1]},t)}))})})}),O=(n(18),function(e){return Object(b.jsx)("div",{className:"grid",children:e.buttons&&e.buttons.map((function(t,n){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){e.setClickedButtonRange(t),e.setButtonClicked(Math.random())},children:t})},n)}),undefined)})}),f=function(e){var t=Object(r.useState)([0]),n=Object(i.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(0),o=Object(i.a)(a,2),j=o[0],f=o[1],p=Object(r.useState)(0),g=Object(i.a)(p,2),m=g[0],h=g[1],x=Object(r.useState)(!1),v=Object(i.a)(x,2),B=v[0],k=v[1],C=Object(r.useCallback)((function(){var e=Object(u.a)(c);if(e){var t=e[j]+m;e[j]=t>=0?t:0}s(e)}),[m,B]);return Object(r.useEffect)((function(){e.bars&&s(Object(u.a)(e.bars))}),[e.bars]),Object(r.useEffect)((function(){m&&0!==m&&C(m)}),[m,C,B]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(l,{limit:e.limit,progressPercentagesPerBar:c}),Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)(d,{setCurrentBar:f,bars:e.bars}),Object(b.jsx)(O,{buttons:e.buttons,setClickedButtonRange:h,setButtonClicked:k,currentBar:j})]})]})},p=function(){return fetch("http://pb-api.herokuapp.com/bars").then((function(e){return e.json()}))};var g=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=!0;return p().then((function(t){e&&c(t)})),function(){return e=!1}}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(f,{limit:n&&n.limit?n.limit:100,buttons:n&&n.buttons?n.buttons:null,bars:n&&n.bars?n.bars:null})})};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.4111fd2c.chunk.js.map