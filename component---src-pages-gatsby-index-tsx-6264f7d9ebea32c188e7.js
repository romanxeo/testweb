(self.webpackChunkwebia_front=self.webpackChunkwebia_front||[]).push([[60],{8983:function(e,t,r){"use strict";r.d(t,{S:function(){return T}});var a={};r.r(a),r.d(a,{action:function(){return i},auto:function(){return o},button:function(){return s},clear:function(){return l},clearBlack:function(){return m},clearRed:function(){return c},clearWhite:function(){return u},content:function(){return d},disabled:function(){return _},editButton:function(){return p},full:function(){return f},idle:function(){return b},l:function(){return g},m:function(){return y},none:function(){return C},outline:function(){return E},outlineWhite:function(){return v},primary:function(){return N},span:function(){return h},standard:function(){return S}});var n=r(6540),i="style-module__action___L26os",o="style-module__auto___5WBhn",s="style-module__button___Xa4xz",l="style-module__clear___lOnVp",m="style-module__clearBlack___gFBVL",c="style-module__clearRed___jQTj6",u="style-module__clearWhite___JRtCB",d="style-module__content___w0PrX",_="style-module__disabled___ZJn3m",p="style-module__editButton___QsG0I",f="style-module__full___Aqh2C",b="style-module__idle___mra-A",g="style-module__l___4sspp",y="style-module__m___yEupx",C="style-module__none___1iRbh",E="style-module__outline___jguXj",v="style-module__outlineWhite___AhgZX",N="style-module__primary___nwU2g",h="style-module__span___tHIG5",S="style-module__standard___FiXSn",I=a;const T=e=>{const{text:t,style:r,variant:a="primary",size:i="l",image:o,imagePos:s,width:l="full",isEdit:m=!1,onClick:c,className:u,...d}=e,_=I.button+" "+I[a]+" "+I[i]+" "+I[l]+" "+(m&&I.editButton)+" "+u;return n.createElement("button",Object.assign({style:r,className:_,onClick:c},d),"start"===s&&o&&n.createElement(o,null),t&&n.createElement("span",{className:I.span},t),"end"===s&&o&&n.createElement(o,null))}},7859:function(e,t,r){"use strict";r.d(t,{a:function(){return v}});var a={};r.r(a),r.d(a,{body:function(){return n},body_title:function(){return i},isClosing:function(){return o},l:function(){return s},m:function(){return l},modal:function(){return m},opened:function(){return c},overlay:function(){return u},s:function(){return d},title:function(){return _},wrapper:function(){return p},xl:function(){return f},xs:function(){return b}});var n="style-module__body___2jiv1",i="style-module__body_title___wdbJK",o="style-module__isClosing___8FRTI",s="style-module__l___y4cy4",l="style-module__m___+BYlD",m="style-module__modal___qs1vR",c="style-module__opened___tUou7",u="style-module__overlay___TDcRO",d="style-module__s___2tTyd",_="style-module__title___ai1KJ",p="style-module__wrapper___cabw0",f="style-module__xl___WuIff",b="style-module__xs___UoXtq",g=a,y=r(6540),C=r(961);const E=e=>{const{children:t,element:r=document.body}=e;return(0,C.createPortal)(t,r)},v=e=>{const{className:t,title:r,widthSize:a="m",children:n,isOpen:i,onClose:o,onOverlay:s,onEscape:l,triggerClosing:m,onTriggerClosing:c,triggerClosingCallback:u,isLoading:d}=e,{0:_,1:p}=(0,y.useState)(!1),{0:f,1:b}=(0,y.useState)(!1),C=(0,y.useRef)(null),v=(0,y.useCallback)((e=>{e&&(b(!0),C.current=setTimeout((()=>{e(),b(!1),p(!1)}),200))}),[]);return(0,y.useEffect)((()=>(i&&p(!0),()=>{C.current&&clearTimeout(C.current)})),[l,v,i]),(0,y.useEffect)((()=>{m&&c&&(v(u||o),c())}),[m,v,c,u,o]),i?y.createElement(E,null,y.createElement("div",{className:g.modal+" "+(_&&g.opened)+" "+(f&&g.isClosing)+" "+t},y.createElement("div",{className:g.overlay,onClick:()=>v(s)},y.createElement("div",{className:g.wrapper+" "+g[a],onClick:e=>{e.stopPropagation()}},r&&y.createElement("div",{className:g.title},r),y.createElement("div",{className:g.body+" "+(r&&g.body_title)},d?y.createElement("div",null,"loading"):n))))):null}},9414:function(e,t,r){"use strict";var a=r(6540),n=r(4794);t.A=function(e){var t,r;const{description:i,title:o,children:s}=e,{site:l}=(0,n.useStaticQuery)("63159454"),m=i||l.siteMetadata.description,c=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,c?o+" | "+c:o),a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:m}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r?void 0:r.author)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:m}),s)}},658:function(e,t,r){"use strict";r.d(t,{e:function(){return n}});var a=r(6540);function n(e){const{0:t,1:r}=(0,a.useState)(e);return[t,()=>{r((e=>!e))}]}},7003:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return s}});var a=r(6540),n=r(9414),i=r(8479),o=r(1628);const s=()=>a.createElement(n.A,{title:"Using TypeScript 1"});t.default=e=>{let{data:t,location:r}=e;return a.createElement("div",{className:"mainContainer"},a.createElement(i.L,o.dataMini))}},5817:function(e,t,r){"use strict";r.d(t,{S:function(){return a}});let a=function(e){return e.MAIN="/",e.SIGNIN="/signin",e.SIGNUP="/signup",e.FORGOT_PASSWORD="/forgot-password",e.RECOVER_PASSWORD="/recover-password",e.RESET_PASSWORD="/reset-password",e.PAYMENT_PAGE="/payment/:subscriptionId",e.PRICING_PAGE="/pricing",e.HOME="/home",e.SEARCH="/search",e.MAILBOX="/mailbox",e.PHONE="/phone",e.PROFILE="/profile",e.SETTINGS_TAB_GENERAL="/settings",e.SETTINGS_TAB_PROFILE="/settings/profile",e.SETTINGS_TAB_PASSWORD="/settings/password",e.SETTINGS_TAB_PLAN="/settings/plan",e.MINI_SITE="/mini",e.MINI_SITE_REVIEWS="/mini/reviews",e.MINI_SITE_SHOP="/mini/shop",e.MINI_SITE_GALLERY="/mini/gallery",e.MINI_SITE_TEAM="/mini/team",e.MINI_SITE_CONTACT_US="/mini/contact_us",e.NOT_FOUND="/404",e}({})},4673:function(e,t,r){"use strict";r.d(t,{S:function(){return a.S}});r(6540);var a=r(5817)},1628:function(e,t,r){"use strict";r.r(t),r.d(t,{dataMini:function(){return i},default:function(){return o}});var a=r(8479),n=r.p+"static/miniSiteAboutImage-f9c2227b74b1783a43cde871b3083521.png";const i={id:"74c8c1dc-a55d-4c1b-a38b-e1e64d50f41d",isPremium:!0,isEdit:!1,name:"Pizzeria à Angers",domain:"google.com",address:"7 Bell Yard near blue Valley Corporate, W976655, New York city, England",formCode:"test",apeCode:"test",contactNumber:"8000000",ownerId:"74c8c1dc-a55d-4c1b-a38b-e1e64d50f40d",imageUrl:n,logoUrl:n,creationDate:"2024-03-05",fullName:"Pizzahot",industry:"test",docsLink:"https://google.com/",locationLat:42,locationLong:0,vatNumber:"test",description:"À propos de nous and the text : Pizzahot, située au cœur d'Angers, offre une expérience gustative inégalée avec sa sélection de pizzas savoureuses à emporter. Notre équipe passionnée concocte chaque pizza avec des ingrédients frais et de qualité supérieure. Du classique pepperoni à l'exotique ananas et jambon, nos créations répondent à tous les goûts. Soucieux de la satisfaction de nos clients, nous garantissons une préparation rapide et un service amical. Notre emplacement central facilite la commodité pour les habitants et les visiteurs. Chez Pizzahot, nous sommes dévoués à offrir une expérience gastronomique exceptionnelle à chaque bouchée.",emailDomain:"test@gmail.com",detailedDescription:["test"],photos:[{id:"1",comment:"galery item 1",imageUrl:n,date:new Date},{id:"2",comment:"galery item 2",imageUrl:n,date:new Date},{id:"3",comment:"galery item 3",imageUrl:n,date:new Date},{id:"4",comment:"galery item 3",imageUrl:n,date:new Date},{id:"5",comment:"galery item 3",imageUrl:n,date:new Date},{id:"6",comment:"galery item 3",imageUrl:n,date:new Date},{id:"7",comment:"galery item 3",imageUrl:n,date:new Date}],products:[{id:"1",name:"shop item 1",description:"shop item 1",imageUrl:n,price:199},{id:"2",name:"shop item 2",description:"shop item 1",imageUrl:n,price:211},{id:"3",name:"shop item 3",description:"shop item 1",imageUrl:n,price:54},{id:"4",name:"shop item 3",description:"shop item 1",imageUrl:n,price:54},{id:"5",name:"shop item 3",description:"shop item 1",imageUrl:n,price:54},{id:"6",name:"shop item 3",description:"shop item 1",imageUrl:n,price:54},{id:"7",name:"shop item 3",description:"shop item 1",imageUrl:n,price:54}],reviews:[{id:"1",firstName:"Jhon",lastName:"Smeet",email:"Smeet",role:"CEO",text:"Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.r",rating:3,isPosted:!0},{id:"2",firstName:"Shop",lastName:"Smeet",email:"Smeet",role:"SMM",text:"smart review 2 grab stor",rating:5,isPosted:!1},{id:"3",firstName:"Top",lastName:"Smeet",email:"Smeet",role:"Author",text:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",rating:2,isPosted:!0},{id:"4",firstName:"Top",lastName:"Smeet",email:"Smeet",role:"Author",text:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",rating:2,isPosted:!0},{id:"5",firstName:"Top",lastName:"Smeet",email:"Smeet",role:"Author",text:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",rating:2,isPosted:!0},{id:"6",firstName:"Top",lastName:"Smeet",email:"Smeet",role:"Author",text:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",rating:2,isPosted:!0},{id:"7",firstName:"Top",lastName:"Smeet",email:"Smeet",role:"Author",text:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",rating:2,isPosted:!0},{id:"8",firstName:"Top ",lastName:"Smeet",email:"Smeet",role:"Author",text:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",rating:2,isPosted:!0},{id:"9",firstName:"Top",lastName:"Smeet",email:"Smeet",role:"Author",text:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",rating:2,isPosted:!0},{id:"10",firstName:"Top",lastName:"Smeet",email:"Smeet",role:"Author",text:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",rating:2,isPosted:!0}],members:[{id:"1",firstName:"Jhon",lastName:"Smeet",role:"CEO",bio:"Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.r",avatarUrl:n},{id:"2",firstName:"Shop",lastName:"Smeet",role:"SMM",bio:"smart review 2 grab stor",avatarUrl:n},{id:"3",firstName:"Top",lastName:"Smeet",role:"Author",bio:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",avatarUrl:n},{id:"4",firstName:"Top",lastName:"Smeet",role:"Author",bio:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",avatarUrl:n},{id:"5",firstName:"Top",lastName:"Smeet",role:"Author",bio:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",avatarUrl:n},{id:"6",firstName:"Top",lastName:"Smeet",role:"Author",bio:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",avatarUrl:n},{id:"7",firstName:"Top",lastName:"Smeet",role:"Author",bio:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",avatarUrl:n},{id:"8",firstName:"Top ",lastName:"Smeet",role:"Author",bio:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",avatarUrl:n},{id:"9",firstName:"Top",lastName:"Smeet",role:"Author",bio:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",avatarUrl:n},{id:"10",firstName:"Top",lastName:"Smeet",role:"Author",bio:"smar ipsum dolor sit amet, consectetur adipi 3 grab stor",avatarUrl:n}],contacts:[{id:"1",type:"instagram",link:"https://instagram.com",companyId:"string"},{id:"2",type:"facebook",link:"https://instagram.com",companyId:"string"},{id:"3",type:"x",link:"https://instagram.com",companyId:"string"},{id:"4",type:"web",link:"https://instagram.com",companyId:"string"}]};var o=()=>React.createElement(a.L,i)},4664:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});const a=(0,r(6540).createContext)({})},4646:function(e,t,r){"use strict";var a=r(4506),n=r(6540),i=r(4664);t.A=e=>{let{children:t}=e;const{0:r,1:o}=(0,n.useState)({}),s=(0,n.useCallback)(((e,t)=>{o({...r,imageUrl:e,logoUrl:t})}),[o,r]),l=(0,n.useCallback)((e=>{o({...r,products:[].concat((0,a.A)(r.products),[e])})}),[o,r]),m=(0,n.useCallback)(((e,t)=>{const a=r.products.map((r=>r.id===e?t:r));o({...r,products:a})}),[o,r]),c=(0,n.useCallback)((e=>{const t=r.products.filter((t=>t.id!==e));o({...r,products:t})}),[o,r]),u=(0,n.useCallback)((e=>{o({...r,photos:[].concat((0,a.A)(r.photos),[e])})}),[o,r]),d=(0,n.useCallback)(((e,t)=>{const a=r.photos.map((r=>r.id===e?t:r));o({...r,photos:a})}),[o,r]),_=(0,n.useCallback)((e=>{const t=r.photos.filter((t=>t.id!==e));o({...r,photos:t})}),[o,r]),p=(0,n.useCallback)((e=>{o({...r,reviews:[].concat((0,a.A)(r.reviews),[e])})}),[o,r]),f=(0,n.useCallback)(((e,t)=>{const a=r.reviews.map((r=>r.id===e?t:r));o({...r,reviews:a})}),[o,r]),b=(0,n.useCallback)((e=>{const t=r.reviews.filter((t=>t.id!==e));o({...r,reviews:t})}),[o,r]),g=(0,n.useCallback)((e=>{o({...r,members:[].concat((0,a.A)(r.members),[e])})}),[o,r]),y=(0,n.useCallback)(((e,t)=>{const a=r.members.map((r=>r.id===e?t:r));o({...r,members:a})}),[o,r]),C=(0,n.useCallback)((e=>{const t=r.members.filter((t=>t.id!==e));o({...r,members:t})}),[o,r]),E={data:r,setData:o,editImages:s,addProductItem:l,editProductItem:m,removeProductItem:c,addPhotoItem:u,editPhotoItem:d,removePhotoItem:_,addReviewItem:p,editReviewItem:f,removeReviewItem:b,addMemberItem:g,editMemberItem:y,removeMemberItem:C};return n.createElement(i.g.Provider,{value:E},t)}},208:function(e,t,r){"use strict";r.d(t,{w:function(){return _}});var a={};r.r(a),r.d(a,{body:function(){return n},button_block:function(){return i},button_item:function(){return o},container:function(){return s},frame:function(){return l},title:function(){return m}});var n="style-module__body___CDt4W",i="style-module__button_block___G4k7z",o="style-module__button_item___UYVnZ",s="style-module__container___p+KpN",l="style-module__frame___TfWIo",m="style-module__title___zQHat",c=a,u=r(6540);const d=[{label:"Home",path:"/mini_website"},{label:"Contact us",path:"/mini_website/contact_us"},{label:"FAQ",path:"/mini_website/faq"},{label:"Help",path:"/mini_website/help"}],_=(0,u.memo)((e=>{const{background:t}=e,r=d.map((e=>u.createElement("div",{key:e.path,className:c.button_item},e.label)));return u.createElement("div",{className:c.body,style:{background:""+t}},u.createElement("div",{className:c.container},u.createElement("h1",{className:c.title},"WEBIA"),u.createElement("div",{className:c.frame},u.createElement("div",{className:c.button_block},r))))}))},247:function(e,t,r){"use strict";r.d(t,{w:function(){return a.w}});var a=r(208)},5935:function(e,t,r){"use strict";r.d(t,{Y:function(){return F}});var a={};r.r(a),r.d(a,{body:function(){return l},button_block:function(){return m},container:function(){return c},editContainer:function(){return u},editText:function(){return d},frame:function(){return _},image:function(){return p},imageContainer:function(){return f},title:function(){return b}});var n={};r.r(n),r.d(n,{active:function(){return C},body:function(){return E},disabled:function(){return v}});var i={};r.r(i),r.d(i,{body:function(){return T}});var o={};r.r(o),r.d(o,{body:function(){return U},buttonContainer:function(){return M},description:function(){return L}});var s=r(6540),l="style-module__body___5UFXg",m="style-module__button_block___YuL2w",c="style-module__container___tTgMq",u="style-module__editContainer___eEWZ1",d="style-module__editText___eERYq",_="style-module__frame___6RPv3",p="style-module__image___IPqAV",f="style-module__imageContainer___qotSk",b="style-module__title___4Z1BK",g=a,y=r(8983),C="style-module__active___qfXhU",E="style-module__body___Bknrl",v="style-module__disabled___0JTHz",N=n,h=r(4794);console.log(!1);var S=h.Link,I=r(961),T="style-module__body___NPCqQ",w=i;const A=e=>{const{text:t,children:r}=e,{0:a,1:n}=(0,s.useState)({top:0,left:0}),{0:i,1:o}=(0,s.useState)(!1);return t?s.createElement(s.Fragment,null,s.createElement("span",{onMouseEnter:e=>{const t=e.target.getBoundingClientRect();n({top:t.bottom+5,left:t.left}),o(!0)},onMouseLeave:()=>o(!1)},r),i&&I.createPortal(s.createElement("div",{style:{position:"fixed",top:a.top,left:a.left},className:w.body},t),document.body)):r},P=(0,s.memo)((e=>{const{label:t,path:r,isDisabled:a=!1}=e,n=N.body+" "+(a&&N.disabled)+" "+N.active;return s.createElement(A,{text:a?"Only for premium users":void 0},s.createElement(S,{className:n,to:r,onClick:e=>{a&&e.preventDefault()}},t))}));var k=r(7859),x=r(658),U="style-module__body___Osg6C",M="style-module__buttonContainer___I8jAx",L="style-module__description___xjjxx",O=o,R=r(1559),D=r.n(R);const q=(0,s.memo)((e=>{const{onClose:t}=e;return s.createElement("div",{className:O.body},s.createElement(D(),null),s.createElement("span",{className:O.description},"You have to purchase a subscription plan to use this feature"),s.createElement("div",{className:O.buttonContainer},s.createElement(y.S,{text:"No, thanks",variant:"outline",size:"l",width:"full",onClick:t}),s.createElement(y.S,{text:"Buy premium",variant:"action",size:"l",width:"full"})))})),z=e=>{const{className:t,isOpen:r,onClose:a,onOverlay:n,onEscape:i}=e,[o,l]=(0,x.e)(!1);return s.createElement(k.a,{className:t,title:"Premium feature",widthSize:"xs",isOpen:r,onClose:a,onOverlay:n,onEscape:i,triggerClosing:o,onTriggerClosing:l},s.createElement(q,{onClose:l}))};var B=r(4664),W=r(4673);const G=[{label:"Home",path:W.S.MINI_SITE,onlyPremium:!1},{label:"Reviews",path:W.S.MINI_SITE_REVIEWS,onlyPremium:!0},{label:"Shop",path:W.S.MINI_SITE_SHOP,onlyPremium:!0},{label:"Gallery",path:W.S.MINI_SITE_GALLERY,onlyPremium:!0},{label:"Team",path:W.S.MINI_SITE_TEAM,onlyPremium:!0},{label:"Contacts",path:W.S.MINI_SITE_CONTACT_US,onlyPremium:!1}],F=(0,s.memo)((()=>{const{data:e}=(0,s.useContext)(B.g),{0:t,1:r}=(0,s.useState)(!1),a=()=>r(!1),n=G.map((t=>s.createElement(P,{key:t.label,label:t.label,path:t.path,isDisabled:t.onlyPremium&&!e.isPremium})));return s.createElement(s.Fragment,null,s.createElement("div",{className:g.body},e.isEdit&&s.createElement("div",{className:g.editContainer},s.createElement("span",{className:g.editText},"Edit Mode")),s.createElement("div",{className:g.container},s.createElement("div",{className:g.frame},s.createElement("div",{className:g.imageContainer},s.createElement("img",{className:g.image,src:e.logoUrl,alt:"logo"})),s.createElement("h1",{className:g.title},"fullName")),s.createElement("div",{className:g.frame},s.createElement("div",{className:g.button_block},n),!e.isPremium&&s.createElement(y.S,{text:"Upgrade to Premium",variant:"action",size:"l",onClick:()=>r(!0)})))),s.createElement(z,{isOpen:t,onClose:a,onEscape:a,onOverlay:a}))}))},6192:function(e,t,r){"use strict";r.d(t,{o:function(){return l}});var a={};r.r(a),r.d(a,{body:function(){return n},text:function(){return i}});var n="style-module__body___dGff7",i="style-module__text___Wx0TA",o=a,s=r(6540);const l=(0,s.memo)((()=>s.createElement("div",{className:o.body},s.createElement("span",{className:o.text},"2024 Webia.fr All rights reserved."))))},985:function(e,t,r){"use strict";r.d(t,{o:function(){return a.o}});var a=r(6192)},8479:function(e,t,r){"use strict";r.d(t,{L:function(){return c}});var a=r(6540),n=r(338),i=r(5935),o=r(247),s=r(985),l=r(4646),m=r(4664);const c=(0,a.memo)((e=>a.createElement(l.A,null,a.createElement(u,e),"."))),u=(0,a.memo)((e=>{const{setData:t}=(0,a.useContext)(m.g);return(0,a.useEffect)((()=>{t&&t(e)}),[e]),a.createElement("main",{className:n.body},a.createElement(i.Y,null),a.createElement(o.w,null),a.createElement(s.o,null))}))},338:function(e,t,r){"use strict";r.r(t),r.d(t,{body:function(){return a}});var a="style-module__body___+Lqyj"},1559:function(e,t,r){var a=r(6540);function n(e){return a.createElement("svg",e,[a.createElement("path",{d:"M88.6394 81.5684C88.6394 81.5684 77.9843 63.2556 76.073 59.9712C78.2476 59.3078 80.5641 58.722 81.5265 57.0601C83.1306 54.291 80.2753 49.7483 81.0251 46.7802C81.7974 43.7253 86.3566 41.082 86.3566 37.9769C86.3566 34.9516 81.643 31.4174 80.8702 28.3805C80.1152 25.4129 82.962 20.8653 81.3527 18.0995C79.7435 15.3334 74.3834 15.5607 72.1769 13.4375C69.9066 11.2526 69.9136 5.90673 67.1753 4.4425C64.4259 2.97282 59.9574 5.94305 56.9047 5.23948C53.8867 4.54394 51.1905 0 48.0381 0C44.8391 0 39.7508 5.15438 38.9528 5.33988C35.9016 6.04916 31.4275 3.0862 28.6809 4.5621C25.9452 6.03126 25.962 11.3776 23.6959 13.5662C21.4931 15.6933 16.1327 15.4759 14.5284 18.245C12.9243 21.0137 15.7796 25.5553 15.0301 28.525C14.2785 31.5022 9.56053 34.5189 9.56053 37.9621C9.56053 41.0675 14.1312 43.7025 14.9082 46.7558C15.6634 49.7234 12.8166 54.2705 14.4259 57.0373C15.302 58.5433 17.2898 59.1615 19.2749 59.7559C19.5066 59.8251 19.9448 60.0843 19.648 60.5168C18.2899 62.861 7.35873 81.7266 7.35873 81.7266C6.48912 83.2272 7.19529 84.5134 8.92751 84.5863L17.4065 84.9399C19.1387 85.0128 21.3117 86.2716 22.2363 87.7382L26.7608 94.9177C27.6854 96.3842 29.1525 96.3567 30.0219 94.8564C30.0219 94.8564 42.6814 73.0004 42.6865 72.9941C42.9405 72.6974 43.1958 72.7583 43.318 72.8621C44.7031 74.0415 46.6341 75.218 48.2456 75.218C49.8261 75.218 51.2896 74.1105 52.7372 72.8753C52.855 72.7749 53.1416 72.5692 53.3513 72.9962C53.3546 73.003 66.0001 94.7394 66.0001 94.7394C66.8718 96.2379 68.3391 96.2633 69.2609 94.7949L73.7727 87.6069C74.6947 86.1393 76.8653 84.8756 78.5976 84.8001L87.0758 84.4307C88.8072 84.3546 89.5111 83.0666 88.6394 81.5684ZM62.0508 61.9084C52.676 67.3624 41.4231 66.7779 32.8282 61.3566C20.2341 53.2895 16.0902 36.6019 23.6611 23.5346C31.3185 10.3166 48.1512 5.65249 61.4883 12.9163C61.5584 12.9544 61.6276 12.9939 61.6972 13.0328C61.796 13.0875 61.8946 13.1431 61.9929 13.1991C66.1075 15.5713 69.6755 19.0142 72.2303 23.4056C80.0387 36.8276 75.4725 54.1 62.0508 61.9084Z",fill:"#00BDFF",key:0}),a.createElement("path",{d:"M59.9068 17.1491C59.8679 17.1265 59.8285 17.1055 59.7896 17.0832C52.6651 12.9598 43.5844 12.6583 35.974 17.086C24.6805 23.6564 20.8375 38.1895 27.4079 49.4828C29.4127 52.9291 32.1601 55.6801 35.3299 57.6544C35.5994 57.8251 35.8721 57.9929 36.1507 58.1543C47.4565 64.7041 61.9818 60.835 68.5314 49.5297C75.0807 38.224 71.2126 23.6989 59.9068 17.1491ZM62.7351 35.6312L58.7765 39.4897C57.5504 40.6847 56.7841 43.0434 57.0738 44.731L58.0083 50.1794C58.2978 51.867 57.2949 52.5957 55.7793 51.799L50.8861 49.2265C49.3705 48.4298 46.8906 48.4298 45.375 49.2265L40.4822 51.799C38.9666 52.5957 37.9633 51.867 38.2529 50.1794L39.1873 44.731C39.4769 43.0434 38.7105 40.6847 37.4844 39.4897L33.526 35.6312C32.2997 34.4363 32.6831 33.2569 34.3775 33.0104L39.8479 32.2155C41.5422 31.9693 43.5486 30.5116 44.3064 28.9763L46.7529 24.0193C47.5107 22.484 48.7508 22.484 49.5083 24.0193L51.955 28.9763C52.7128 30.5116 54.719 31.9693 56.4136 32.2155L61.884 33.0104C63.578 33.2569 63.9612 34.4363 62.7351 35.6312Z",fill:"#00BDFF",key:1})])}n.defaultProps={width:"96",height:"96",viewBox:"0 0 96 96",fill:"none"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-gatsby-index-tsx-6264f7d9ebea32c188e7.js.map