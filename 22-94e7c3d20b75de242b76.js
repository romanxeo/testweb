"use strict";(self.webpackChunkwebia_front=self.webpackChunkwebia_front||[]).push([[22],{2022:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var l=a(9008),c=a(8983),i=a(5715),n=a(8690),s=a.n(n),m=a(392),M=a(6540),d=a(9466);const u=[{id:1,label:"Company's name",text:"Hamidbus"},{id:2,label:"Company's domain",text:"hamidbus@gmail.com"},{id:3,label:"Username",text:"hamidali"},{id:4,label:"Plan purchased",text:"Monthly Premium Plan"},{id:5,label:"Purchase date",text:"12 Sep 2023"}];var o=()=>{const{0:e,1:t}=(0,M.useState)([]),{0:a,1:n}=(0,M.useState)(""),{0:o,1:r}=(0,M.useState)([]);return React.createElement(d.A,null,React.createElement("div",{className:l.default.plansContainer},React.createElement("div",{className:l.default.container},React.createElement("h4",{className:l.default.title},"Plan&Billing"),React.createElement("div",{className:l.default.fields},React.createElement("span",{className:l.default.subtitle},"Payment method"),React.createElement("span",{className:l.default.mediumText},e.length>0?e.join(","):"No payment method."),React.createElement(c.S,{text:"Add payment method",variant:"clearBlack",width:"content",size:"none",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NDAtNDQwSDIwMHYtODBoMjQwdi0yNDBoODB2MjQwaDI0MHY4MEg1MjB2MjQwaC04MHYtMjQwWiIvPjwvc3ZnPg==",imagePos:"start",onClick:()=>console.log("save")}),React.createElement("span",{className:l.default.subtitle},"Billing information"),React.createElement(i.w,{placeholder:"Email",value:a,onChange:n}),React.createElement(c.S,{text:"Update information",variant:"clearBlack",width:"content",size:"none",image:m.A,imagePos:"start",onClick:()=>console.log("save")}))),React.createElement("div",{className:l.default.container},React.createElement("h4",{className:l.default.title},"Subscriptions"),React.createElement("div",{className:l.default.fields},React.createElement("span",{className:l.default.subtitle},"Subscriptions"),React.createElement("span",{className:l.default.mediumText},o.length>0?o.join(", "):"No subscribtions."),React.createElement(c.S,{text:"Get premium",variant:"action",width:"content",image:s(),imagePos:"end",onClick:()=>console.log("premium")}))),React.createElement("div",{className:l.default.container},React.createElement("h4",{className:l.default.title},"Details"),React.createElement("div",{className:l.default.fields},u.map((e=>React.createElement("div",{key:e.id,className:l.default.detail},React.createElement("span",null,e.label),React.createElement("span",null,e.text)))),React.createElement("div",{className:l.default.buttons},React.createElement(c.S,{text:"Switch plan",variant:"clearBlack",width:"content",size:"none",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTYgM0wyMCA3TTIwIDdMMTYgMTFNMjAgN0gxME04IDEzTDQgMTdNNCAxN0w4IDIxTTQgMTdIMTMiIHN0cm9rZT0iIzBGMTUxOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4=",imagePos:"start",onClick:()=>console.log("switch")}),React.createElement(c.S,{text:"Cancel subscribtion",variant:"clearRed",width:"content",size:"none",onClick:()=>console.log("clean")}))))))}},9466:function(e,t,a){a.d(t,{A:function(){return m}});var l={};a.r(l);var c=a(6540),i=a(4976),n=a(4673);const s=[{id:1,path:n.S.SETTINGS_TAB_GENERAL,text:"General"},{id:2,path:n.S.SETTINGS_TAB_PROFILE,text:"Profile"},{id:3,path:n.S.SETTINGS_TAB_PASSWORD,text:"Password"},{id:4,path:n.S.SETTINGS_TAB_PLAN,text:"Plan&Billing"}];var m=e=>{let{children:t}=e;return c.createElement("div",{className:l.default.container},c.createElement("h1",{className:l.default.title},"Settings"),c.createElement("div",{className:l.default.tabsContainer},s.map((e=>c.createElement(i.k2,{key:e.id,to:e.path,className:e=>{let{isActive:t}=e;return l.default.tab+" "+(t&&l.default.tabActive)}},e.text)))),t)}},9008:function(e,t,a){},392:function(e,t){t.A="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI0IDI1IiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik03IDcuNUg2QzUuNDY5NTcgNy41IDQuOTYwODYgNy43MTA3MSA0LjU4NTc5IDguMDg1NzlDNC4yMTA3MSA4LjQ2MDg2IDQgOC45Njk1NyA0IDkuNVYxOC41QzQgMTkuMDMwNCA0LjIxMDcxIDE5LjUzOTEgNC41ODU3OSAxOS45MTQyQzQuOTYwODYgMjAuMjg5MyA1LjQ2OTU3IDIwLjUgNiAyMC41SDE1QzE1LjUzMDQgMjAuNSAxNi4wMzkxIDIwLjI4OTMgMTYuNDE0MiAxOS45MTQyQzE2Ljc4OTMgMTkuNTM5MSAxNyAxOS4wMzA0IDE3IDE4LjVWMTcuNU0xNiA1LjVMMTkgOC41TTIwLjM4NSA3LjA4NTExQzIwLjc3ODggNi42OTEyNiAyMS4wMDAxIDYuMTU3MDkgMjEuMDAwMSA1LjYwMDExQzIxLjAwMDEgNS4wNDMxMiAyMC43Nzg4IDQuNTA4OTUgMjAuMzg1IDQuMTE1MTFDMTkuOTkxMiAzLjcyMTI2IDE5LjQ1NyAzLjUgMTguOSAzLjVDMTguMzQzIDMuNSAxNy44MDg4IDMuNzIxMjYgMTcuNDE1IDQuMTE1MTFMOSAxMi41MDAxVjE1LjUwMDFIMTJMMjAuMzg1IDcuMDg1MTFaIiBzdHJva2U9IiMwRjE1MTkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=22-94e7c3d20b75de242b76.js.map