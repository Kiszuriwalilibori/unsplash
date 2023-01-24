"use strict";(self.webpackChunkunsplash=self.webpackChunkunsplash||[]).push([[736],{3736:function(e,a,s){s.r(a),s.d(a,{default:function(){return R}});var r=s(2791),i=s(4431),n=s(4233),l=s(184),o=function(e){return(0,l.jsx)("div",{className:"modalbody__header-icons",children:e.children})},t=s(3174),c=function(e){var a=e.author,s=e.urls;return(0,l.jsx)("img",{alt:a,className:"modalbody__image fade-in",sizes:"(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 521px) 500px, (min-aspect-ratio: 3711/2562) calc((calc(100vh - 175px)) * 1.44848), calc(100vw - 32px)",srcSet:s})},d=function(e){return(0,l.jsx)("div",{className:"modalbody__header-author",children:(0,l.jsx)("div",{className:"author-data",children:e.children})})},u=function(e){var a=e.author,s=e.twitter;return(0,l.jsxs)("div",{className:"modalbody__header-name-twitter",children:[(0,l.jsx)("div",{className:"modalbody__header-name",children:a}),s&&(0,l.jsx)("div",{className:"modalbody__header-twitter",children:"@"+s})]})},m=function(e){return(0,l.jsx)("div",{className:"modalbody__header-face",children:(0,l.jsx)("img",{className:"modalbody__header-image",src:e.profileImageLink,alt:e.author})})},h=function(e){return(0,l.jsx)("div",{className:"modalbody__header-author footer",children:e.children})},x=s(8013),f=function(e){var a=e.location;return(0,l.jsx)(h,{children:a&&(0,x.nw)(t.Z.Location,a)})},j=function(){var e=(0,n.I0)();return(0,l.jsx)("div",{className:"modal-close__wrapper",children:(0,l.jsx)("button",{"aria-label":"Close",className:"modal-close__button",type:"button",onClick:function(){return e({type:"MODAL_HIDE"})},children:(0,l.jsx)(t.Z.Close,{})})})},_=function(e){return(0,l.jsx)("div",{className:"modalbody__container fade-in",children:e.children})},b=s(763),v=s(8813),p=s(2453),g=function(){var e=(0,n.v9)(p.H_),a=(0,v.Z)().setImageIdForModal,s=r.useCallback((0,b.debounce)((function(){a(e)}),100),[e]);return(0,l.jsx)("aside",{className:"modalbody__aside right",onClick:s,children:(0,l.jsx)("div",{className:"modalbody__arrow-box",children:(0,l.jsx)(t.Z.Next,{className:e?"modalbody__arrow-svg visible":"modalbody__arrow-svg"})})})},w=function(){var e=(0,n.v9)(p.eK),a=(0,v.Z)().setImageIdForModal,s=r.useCallback((0,b.debounce)((function(){a(e)}),100),[e]);return(0,l.jsx)("aside",{className:"modalbody__aside left",onClick:s,children:(0,l.jsx)("div",{className:"modalbody__arrow-box",children:(0,l.jsx)(t.Z.Previous,{className:e?"modalbody__arrow-svg visible":"modalbody__arrow-svg"})})})},N=function(){var e=(0,n.v9)(p.L4),a=e.location,s=e.author,r=e.twitter,i=e.urls,h=e.profileImage;return i?(0,l.jsxs)(_,{children:[(0,l.jsx)(j,{}),(0,l.jsx)(w,{}),(0,l.jsxs)("article",{className:"modalbody",children:[(0,l.jsxs)("header",{className:"modalbody__header",children:[(0,l.jsxs)(d,{children:[(0,l.jsx)(m,{profileImageLink:h,author:s}),(0,l.jsx)(u,{author:s,twitter:r})]}),(0,l.jsxs)(o,{children:[(0,l.jsx)(x.UO,{ariaLabel:"Like",children:(0,l.jsx)(t.Z.Like,{})}),(0,l.jsx)(x.UO,{ariaLabel:"Add",children:(0,l.jsx)(t.Z.Add,{})})]})]}),(0,l.jsx)(c,{author:s,urls:i}),(0,l.jsxs)("footer",{className:"modalbody__header footer",children:[(0,l.jsx)(f,{location:a}),(0,l.jsx)(x.UO,{ariaLabel:"Share",children:(0,x.nw)(t.Z.Share,"Share")}),(0,l.jsx)(x.UO,{ariaLabel:"Info",children:(0,x.nw)(t.Z.Info,"Info")})]})]}),(0,l.jsx)(g,{})]}):null};var y=(0,n.$j)((function(e){return{isModalVisible:e.modal.isVisible}}),{})((function(e){var a=e.isModalVisible;return(0,l.jsx)("div",{children:(0,l.jsx)(i.Z,{open:a,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",id:"my-modal",children:(0,l.jsx)(N,{})})})})),k=s(754),I=function(e){return(0,l.jsx)("div",{className:"images__background",children:e.children})},Z=s(8144),L=s(1413),C=s(1762),M=s(6666),U=s.n(M),O=function(e){var a=e.id,s=e.user,i=e.description,n=e.urls,o=e.tags,t=r.useRef(null),c=(0,v.Z)(),d=c.setImageIdForModal,u=c.showModal,m=r.useCallback((0,b.debounce)((function(){d(a),u()}),100),[a]);return(0,l.jsxs)("figure",{className:"fotos__box visible fade-in","data-user":"Author: ".concat(s),"data-description":i,children:[(0,l.jsx)("img",{loading:"lazy",className:"fotos__image",alt:i,sizes:"(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw",srcSet:n,itemProp:"thumbnailUrl",onLoad:function(){var e;null===(e=t.current)||void 0===e||e.classList.add("active")},onClick:m}),(0,l.jsx)("figcaption",{className:"container-for-tags",ref:t,children:o.map((function(e,a){return(0,l.jsx)("span",{className:"fotos__tag","data-image_hint":e.title,children:" "+e.title||0},a)}))})]})},S=s(1573),V=function(){var e=(0,S.i)((function(e){return e.images.subject}),n.wU);return(0,l.jsxs)("div",{className:"images__header",children:[(0,l.jsx)("h2",{className:"images__subject",children:e})," "]})},A=function(e){e.inViewport;var a=e.forwardedRef;return(0,l.jsx)("div",{className:"viewport-block",ref:a,children:(0,l.jsx)("div",{style:{width:"400px",height:"200px"}})})},F=s(4446),z=(0,C.ZP)(A),E=(0,n.$j)((function(e){return{subject:e.images.subject}}),(function(e){return{fetchImages:function(a){return e((0,F._6)(a))}}}))((function(e){var a=e.fetchImages,s=e.subject,i=(0,n.v9)(p.pk),o=(0,r.useRef)(null),t=(0,r.useCallback)((0,b.debounce)((function(){a(s)}),300),[a,s]);return!i||(0,b.isEmpty)(i)?null:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(V,{}),(0,l.jsx)("section",{className:"fotos__wrapper",ref:o,children:(0,l.jsx)("div",{className:"fotos__grid",children:(0,l.jsxs)("article",{className:"fotos__container",id:"fotos__container",children:[i.map((function(e){return(0,l.jsx)(O,(0,L.Z)({},e),U()())})),(0,l.jsx)(z,{onEnterViewport:function(){return t()}})]})})})]})})),P=(0,x.uk)(k.Z),R=function(){return(0,l.jsxs)(I,{children:[(0,l.jsx)(Z.Z,{}),(0,l.jsx)(P,{}),(0,l.jsx)(y,{}),(0,l.jsx)(E,{})]})}}}]);
//# sourceMappingURL=736.b44aaf6a.chunk.js.map