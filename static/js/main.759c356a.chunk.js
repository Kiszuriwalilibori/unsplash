(this.webpackJsonpunsplash=this.webpackJsonpunsplash||[]).push([[1],{11:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return u}));var a=n(13),i=function(e){return(e.thumb?e.thumb+" 200w, ":"")+(e.small?e.small+" 400w, ":"")+(e.regular?e.regular+" 1080w, ":"")},o=function(e){return e.map((function(e){var t,n={};return n.id=e.id,n.urls=i(e.urls),n.tags=e.tags,n.description=e.alt_description||e.description||"",n.user=(null===(t=e.user)||void 0===t?void 0:t.name)||e.user.first_name+" "+e.user.last_name,n.modal={name:e.user.name||e.first_name+" "+e.last_name||"",twitter:e.user.twitter_username||""},n}))},c=function(e,t){switch(e){case"/":return"".concat(t," form--search");case"/images":return"".concat(t," form--images");default:return"".concat(t," form--search")}},r=function(e){return Object(a.a)(new Set(e.map((function(e){return e.tags})).flat().map((function(e){return e.title}))))};var s=function(e){return e.map((function(e){return{value:e,label:(t=e,t[0].toUpperCase()+t.slice(1))};var t}))},u=function(e){var t=document.getElementById("root");e?(t.style.background="url(".concat(e,") no-repeat center center fixed"),t.style.backgroundSize="cover"):t.classList.add("root--fallback-background")}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a={accessKey:"DQqGbYve6sTIg4j9f9EPdU12FLtjyb4hiplBbNECOZA"},i=["flowers","wallpapers","backgrounds","happy","love"]},20:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return w})),n.d(t,"d",(function(){return S}));var a=n(13),i=n(2),o=n(10),c=n.n(o),r=n(11),s=n(15),u=Object(i.b)("IMAGES_GET"),l=Object(i.b)("HINTS_GET"),d=Object(i.b)("HINTS_CLEAR"),b=Object(i.b)("ERROR_SHOW"),f=Object(i.b)("ERROR_CLEAR"),g=Object(i.b)("COUNT_SET"),h=Object(i.b)("SUBJECT_CHOOSE"),m=Object(i.b)("IMAGES_CLEAR"),p=Object(i.b)("COLLECTION_LENGTH_SET"),j=Object(i.b)("HINTS_MESSAGE_SHOW"),O=Object(i.b)("HINTS_MESSAGE_HIDE"),v=Object(i.b)("GET_BACKGROUND_IMAGE"),y=Object(i.b)("CURRENT_IMAGE_NEIGHBOURS_CHECK"),C={images:[],hints:[],error:{value:!1,code:""},count:0,lastFetchedPage:0,subject:"",collectionLength:0,hintsMessageVisible:!1,backgroundImage:{},currentNeighbours:{}},E=Object(i.c)(C,(function(e){e.addCase(u,(function(e,t){if(t.payload){var n=Object(a.a)(e.images);n.push.apply(n,Object(r.b)(t.payload)),e.images=n,e.lastFetchedPage++}})).addCase(p,(function(e,t){t.payload&&(e.collectionLength=t.payload)})).addCase(y,(function(e,t){if(t.payload){var n=e.images.findIndex((function(e){return t.payload===e.id})),a={};a.pre=0!==n,a.post=n!==e.images.length-1,e.currentNeighbours=a}})).addCase(l,(function(e,t){t.payload&&(e.hints=t.payload),t.payload.length?e.hintsMessageVisible=C.hintsMessageVisible:e.hintsMessageVisible=!0})).addCase(g,(function(e,t){t.payload&&(e.count=t.payload)})).addCase(d,(function(e){e.hints=C.hints})).addCase(v,(function(e,t){e.backgroundImage=t.payload})).addCase(O,(function(e){e.hintsMessageVisible=C.hintsMessageVisible})).addCase(j,(function(e){e.hintsMessageVisible=!0})).addCase(m,(function(e,t){e.lastFetchedPage=C.lastFetchedPage,e.images=C.images,e.subject=t.payload})).addCase(b,(function(e,t){t.payload&&(e.error.value=!0,e.error.code=t.payload)})).addCase(f,(function(e){e.error.value=!1,e.error.code=""})).addCase(h,(function(e,t){t.payload&&(e.subject=t.payload)})).addDefaultCase((function(){}))}));function _(e){return function(t,n){e&&e.length>3?new c.a(s.a).search.photos(e,1,30).then(o.toJson).then((function(e){t(l(Object(r.c)(Object(r.d)(e.results))))})).catch((function(e){t(b(e.message))})):n().images.hints.length&&t(d())}}function w(e){return function(t,n){var a,i=!1;(n().images.subject===e?n().images.collectionLength>(a=n().images.lastFetchedPage)?i=!0:(i=!1,t(b("Nie ma wi\u0119cej zdj\u0119\u0107 w danej kategorii - nie pr\xf3buj ich pobra\u0107"))):(t(m(e)),a=C.lastFetchedPage,i=!0),i)&&new c.a(s.a).search.photos(e,a+1,30).then(o.toJson).then((function(e){t(u(e.results)),t(p(e.total_pages))})).catch((function(e){t(b(e.message))}))}}function S(){return function(e){new c.a(s.a).photos.getRandomPhoto({query:"nature",orientation:"landscape"}).then(o.toJson).then((function(e){var t,n,a,i,o,c,s,u,l=window.matchMedia("(max-width: 768px)").matches,d=document.getElementById("root");d.style.backgroundSize="cover";var b=l?(null===(t=e.urls)||void 0===t?void 0:t.small)||(null===(n=e.urls)||void 0===n?void 0:n.regular)||(null===(a=e.urls)||void 0===a?void 0:a.full)||(null===(i=e.urls)||void 0===i?void 0:i.raw):(null===(o=e.urls)||void 0===o?void 0:o.regular)||(null===(c=e.urls)||void 0===c?void 0:c.full)||(null===(s=e.urls)||void 0===s?void 0:s.raw)||(null===(u=e.urls)||void 0===u?void 0:u.small);b?(d.style.background="url(".concat(b,") no-repeat center center fixed"),d.style.backgroundSize="cover",Object(r.e)(b)):Object(r.e)()})).catch((function(t){Object(r.e)(),e(b(t.message))}))}}t.c=E},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var a=n(2),i=n(10),o=n.n(i),c=n(11),r=n(15),s=n(20),u=Object(a.b)("MODAL_SHOW"),l=Object(a.b)("MODAL_HIDE"),d=Object(a.b)("DETAILS_GET"),b=Object(a.c)({isVisible:!1,details:{},error:""},(function(e){e.addCase(u,(function(e){e.isVisible=!0})).addCase(l,(function(e){e.isVisible=!1})).addCase(d,(function(e,t){if(t.payload){var n,a=t.payload,i=a.data,o=a.neighbours,r={};r.location=(null===(n=i.location)||void 0===n?void 0:n.city)?i.location.city+", "+(i.location.country?i.location.country:""):"",r.author=i.user.name||i.user.last_name||i.user.first_name||"",r.twitter=i.user.twitter_username||"",r.profile_image=i.user.profile_image.small||"",r.urls=i.urls?Object(c.f)(i.urls):"",r.previous=o.previous,r.next=o.next,e.details=r,e.details&&(e.isVisible=!0)}})).addDefaultCase((function(){}))}));function f(e){return function(t,n){new o.a(r.a).photos.getPhoto(e).then(i.toJson).then((function(e){var a=n().images.images,i=a.findIndex((function(t){return e.id===t.id})),o={};o.previous=0===i?null:a[i-1].id,o.next=i===a.length-1?null:a[i+1].id,t(d({data:e,neighbours:o}))})).catch((function(e){t(Object(s.g)(e.message))}))}}t.a=b},44:function(e,t,n){},45:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return x}));var a=n(5),i=n(0),o=n(19),c=n.n(o),r=(n(44),n(29)),s=function(e){return function(t){return Object(a.jsx)(i.Suspense,{fallback:null,children:Object(a.jsx)(e,Object(r.a)({},t))})}},u=(n(45),n(36)),l=n(3),d=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,156))})),b=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,159))}));var f=function(){return Object(a.jsx)(u.a,{basename:"/unsplash",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:s(b)}),Object(a.jsx)(l.a,{exact:!0,path:"/images",component:s(d)})]})})},g=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))},h=n(18),m=n(27),p=n(8),j=n(2),O=n(12),v=n(37),y=n.n(v),C=n(38),E=n(20),_=n(31),w={key:"root",storage:y.a},S=Object(p.c)({images:E.c,modal:_.a}),I=Object(O.g)(w,S),x=Object(j.a)({reducer:I,middleware:function(e){return e({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}}).concat(h.a)}}),T=Object(O.h)(x);c.a.render(Object(a.jsx)(m.a,{store:x,children:Object(a.jsx)(C.a,{loading:null,persistor:T,children:Object(a.jsx)(f,{})})}),document.getElementById("root")),g()}},[[66,2,3]]]);
//# sourceMappingURL=main.759c356a.chunk.js.map