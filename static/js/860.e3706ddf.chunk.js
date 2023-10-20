"use strict";(self.webpackChunkunsplash=self.webpackChunkunsplash||[]).push([[860],{3860:function(e,a,n){n.r(a),n.d(a,{default:function(){return K}});var i=n(2791),r=n(4431),t=n(4233),s=n(184),o=function(e){return(0,s.jsx)("div",{className:"modalbody__header-icons",children:e.children})},d=n(6032),l=function(e){var a=e.author,n=e.urls;return(0,s.jsx)("img",{alt:a,className:"modalbody__image fade-in",sizes:"(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 521px) 500px, (min-aspect-ratio: 3711/2562) calc((calc(100vh - 175px)) * 1.44848), calc(100vw - 32px)",srcSet:n})},c=function(e){return(0,s.jsx)("div",{className:"modalbody__header-author",children:(0,s.jsx)("div",{className:"author-data",children:e.children})})},u=function(e){var a=e.author,n=e.twitter;return(0,s.jsxs)("div",{className:"modalbody__header-name-twitter",children:[(0,s.jsx)("div",{className:"modalbody__header-name",children:a}),n&&(0,s.jsx)("div",{className:"modalbody__header-twitter",children:"@"+n})]})},m=function(e){return(0,s.jsx)("div",{className:"modalbody__header-face",children:(0,s.jsx)("img",{className:"modalbody__header-image",src:e.profileImageLink,alt:e.author})})},h=function(e){return(0,s.jsx)("div",{className:"modalbody__header-author footer",children:e.children})},x=n(1680),f=function(e){var a=e.location;return(0,s.jsx)(h,{children:a&&(0,x.nw)(d.Z.Location,a)})},g=function(){var e=(0,t.I0)();return(0,s.jsx)("div",{className:"modal-close__wrapper",children:(0,s.jsx)("button",{"aria-label":"Close",className:"modal-close__button",type:"button",onClick:function(){return e({type:"MODAL_HIDE"})},children:(0,s.jsx)(d.Z.Close,{})})})},b=function(e){return(0,s.jsx)("div",{className:"modalbody__container fade-in",children:e.children})},p=n(763),j=n(8813),v=n(9232),_=function(){var e=(0,t.v9)(v.H_),a=(0,j.Z)().setImageIdForModal,n=i.useCallback((0,p.debounce)((function(){e&&a(e)}),100),[e]);return(0,s.jsx)("aside",{className:"modalbody__aside right",onClick:n,children:(0,s.jsx)("div",{className:"modalbody__arrow-box",children:(0,s.jsx)(d.Z.Next,{className:e?"modalbody__arrow-svg visible":"modalbody__arrow-svg"})})})},w=function(){var e=(0,t.v9)(v.eK),a=(0,j.Z)().setImageIdForModal,n=i.useCallback((0,p.debounce)((function(){e&&a(e)}),100),[e]);return(0,s.jsx)("aside",{className:"modalbody__aside left",onClick:n,children:(0,s.jsx)("div",{className:"modalbody__arrow-box",children:(0,s.jsx)(d.Z.Previous,{className:e?"modalbody__arrow-svg visible":"modalbody__arrow-svg"})})})},y=i.forwardRef((function(e,a){var n=(0,t.v9)(v.L4),i=n.location,r=n.author,h=n.twitter,p=n.urls,j=n.profileImage;return p?(0,s.jsxs)(b,{children:[(0,s.jsx)(g,{}),(0,s.jsx)(w,{}),(0,s.jsxs)("article",{className:"modalbody",children:[(0,s.jsxs)("header",{className:"modalbody__header",children:[(0,s.jsxs)(c,{children:[(0,s.jsx)(m,{profileImageLink:j,author:r}),(0,s.jsx)(u,{author:r,twitter:h})]}),(0,s.jsxs)(o,{children:[(0,s.jsx)(x.UO,{ariaLabel:"Like",children:(0,s.jsx)(d.Z.Like,{})}),(0,s.jsx)(x.UO,{ariaLabel:"Add",children:(0,s.jsx)(d.Z.Add,{})})]})]}),(0,s.jsx)(l,{author:r,urls:p}),(0,s.jsxs)("footer",{className:"modalbody__header footer",children:[(0,s.jsx)(f,{location:i}),(0,s.jsx)(x.UO,{ariaLabel:"Share",children:(0,x.nw)(d.Z.Share,"Share")}),(0,s.jsx)(x.UO,{ariaLabel:"Info",children:(0,x.nw)(d.Z.Info,"Info")})]})]}),(0,s.jsx)(_,{})]}):null}));var k=(0,t.$j)((function(e){return{isModalVisible:e.modal.isVisible}}),{})((function(e){var a=e.isModalVisible;return(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{open:a,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",id:"my-modal",children:(0,s.jsx)(y,{})})})})),N=n(1413),Z=n(1762),L=n(6666),I=n.n(L),C=n(6747),R=n(7630),P=(0,R.ZP)("button")((function(e){var a=e.theme;return{backgroundColor:"#eee",paddingRight:a.spacing(1),paddingLeft:a.spacing(1),marginBottom:a.spacing(1),marginLeft:a.spacing(1),borderRadius:"2px",textDecoration:"none",fontSize:"14px",transition:"all 0.1s ease-in-out",textTransform:"capitalize",height:a.spacing(3.25),display:"inline-block",color:"#767676",border:"none",cursor:"pointer","&:disabled, &[disabled]":{opacity:.34,cursor:"default"},"&:hover:enabled":{backgroundColor:"#e1e1e1",color:"#111"}}})),S=(0,R.ZP)("figcaption")((function(e){return{position:"absolute",bottom:"0",marginLeft:e.theme.spacing(-1),left:"0",visibility:"hidden"}})),M=(0,R.ZP)("article")((function(e){e.theme;return{fontSize:"15px",fontWeight:400,lineHeight:1.6,color:"$color-dark-1",display:"none"}})),z=(0,R.ZP)(C.Z)((function(e){e.theme;return{textAlign:"center",fontSize:"2rem","&:after":{content:'" ."',animation:"dots 1s steps(5, end) infinite"},"@keyframes dots":{"0%, 20%":{color:"rgba(0, 0, 0, 0)",textShadow:"0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)"},"40%":{color:"black",textShadow:"0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)"},"60%":{textShadow:"0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0)"},"80%,   100%":{textShadow:"0.25em 0 0 black, 0.5em 0 0 black"}}}})),A=(0,R.ZP)("section")((function(e){var a=e.theme;return{paddingLeft:a.spacing(1.5),paddingRight:a.spacing(1.5),maxWidth:"1320px",marginLeft:"auto",marginRight:"auto"}})),H=((0,R.ZP)(C.Z)((function(e){var a=e.theme;return{paddingLeft:a.spacing(1.5),paddingRight:a.spacing(1.5),maxWidth:"1320px",marginLeft:"auto",marginRight:"auto",paddingTop:"12px"}})),n(8038)),U=(0,t.$j)(null,(function(e){return{fetchImages:function(a){return e((0,H._6)(a))}}}))((function(e){var a=e.id,n=e.user,r=e.description,o=e.urls,d=e.tags,l=e.loadHandler,c=e.fetchImages,u=i.useRef(null),m=(0,j.Z)(),h=m.setImageIdForModal,x=m.showModal,f=(0,t.v9)(v.LA),g=i.useCallback((0,p.debounce)((function(){h(a),x()}),100),[a]);return(0,s.jsxs)("figure",{className:"fotos__box visible fade-in","data-user":"Author: ".concat(n),"data-description":r,children:[(0,s.jsx)("img",{className:"fotos__image",alt:r,sizes:"(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw",srcSet:o,itemProp:"thumbnailUrl",onLoad:function(){var e;null===(e=u.current)||void 0===e||e.classList.add("visible"),l&&l()},onError:function(){return l&&l()},onClick:g}),(0,s.jsx)(S,{ref:u,children:d.map((function(e,a){return(0,s.jsx)(P,{disabled:!f,tabIndex:0,onClick:function(){c(e.title)},children:" "+e.title||0},a)}))})]})})),O=n(1573),V=function(){var e=(0,O.i)((function(e){return e.images.subject}),t.wU);return(0,s.jsxs)("div",{className:"images__header",children:[(0,s.jsx)("h2",{className:"images__subject",children:e})," "]})},E=function(e){e.inViewport;var a=e.forwardedRef;return(0,s.jsx)("div",{className:"viewport-block",ref:a,children:(0,s.jsx)("div",{style:{width:"400px",height:"200px"}})})},F=(0,Z.ZP)(E),W=(0,t.$j)((function(e){return{subject:e.images.subject}}),(function(e){return{fetchImages:function(a){return e((0,H._6)(a))}}}))((function(e){var a=e.fetchImages,n=e.subject,r=(0,t.v9)(v.pk),o=(0,i.useRef)(null),d=(0,i.useRef)(null),l=(0,i.useCallback)((0,p.debounce)((function(){a(n)}),300),[a,n]),c=(0,i.useCallback)((0,p.after)(r.length,(function(){var e,a;null===(e=o.current)||void 0===e||e.classList.add("active"),null===(a=d.current)||void 0===a||a.classList.add("hidden")})),[r]);return!r||(0,p.isEmpty)(r)?null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(V,{}),(0,s.jsxs)(A,{children:[(0,s.jsx)(z,{ref:d,children:"Loading images"}),(0,s.jsx)("div",{className:"fotos__grid",children:(0,s.jsxs)(M,{ref:o,children:[r.map((function(e){return(0,s.jsx)(U,(0,N.Z)((0,N.Z)({},e),{},{loadHandler:c}),I()())})),(0,s.jsx)(F,{onEnterViewport:function(){return l()}})]})})]})]})})),$=(0,R.ZP)(C.Z)((function(e){var a=e.theme;return{paddingLeft:a.spacing(1.5),paddingRight:a.spacing(1.5),paddingTop:a.spacing(1.5),maxWidth:"1320px",marginLeft:"auto",marginRight:"auto"}})),D=(0,R.ZP)(C.Z)((function(e){return{margin:"0",padding:"0",width:"100%",minHeight:"100vh",backgroundColor:e.theme.palette.common.white}})),T=n(7768),B=n(589),K=function(){return(0,B.P0)(),(0,s.jsxs)(D,{children:[(0,s.jsx)(T.X8,{text:"Matching images"}),(0,s.jsx)(T.Bc,{}),(0,s.jsx)($,{children:(0,s.jsx)(T.l0,{})}),(0,s.jsx)(k,{}),(0,s.jsx)(W,{})]})}}}]);
//# sourceMappingURL=860.e3706ddf.chunk.js.map