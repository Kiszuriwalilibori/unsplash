"use strict";(self.webpackChunkunsplash=self.webpackChunkunsplash||[]).push([[186],{2186:function(e,a,n){n.r(a),n.d(a,{default:function(){return B}});var t=n(2791),i=n(4431),s=n(4233),r=n(184),o=function(e){var a=e.author,n=e.profileImageLink,t=e.twitter;return(0,r.jsx)("div",{className:"modal-content__header-author",children:(0,r.jsxs)("div",{className:"author-data",children:[(0,r.jsx)("img",{className:"author-data__image",src:n,alt:a}),(0,r.jsxs)("div",{className:"author-data__personal",children:[(0,r.jsx)("div",{className:"author-data__name",children:a}),t&&(0,r.jsx)("div",{className:"author-data__twitter",children:"@"+t})]})]})})},c=n(6032),l=t.memo((function(){return(0,r.jsx)("div",{className:"modal-content__button-wrapper",children:(0,r.jsx)("button",{className:"modal-content__button","aria-label":"Add",children:(0,r.jsx)(c.Z.Add,{})})})})),d=n(589),u=function(){var e=(0,d.WZ)().hideModal,a=t.useCallback((function(){return e()}),[e]);return(0,r.jsx)("div",{className:"modal-close__wrapper",children:(0,r.jsx)("button",{"aria-label":"Close",className:"modal-close__button",type:"button",onClick:a,children:(0,r.jsx)(c.Z.Close,{})})})},m=function(e){var a=e.author,n=e.urls;return(0,r.jsx)("img",{alt:a,className:"modal-content__image fade-in",sizes:"(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 521px) 500px, (min-aspect-ratio: 3711/2562) calc((calc(100vh - 175px)) * 1.44848), calc(100vw - 32px)",srcSet:n})},h=t.memo((function(){return(0,r.jsx)("div",{className:"modal-content__button-wrapper",children:(0,r.jsxs)("button",{className:"modal-content__button","aria-label":"Inforamtions",children:[(0,r.jsx)(c.Z.Info,{}),(0,r.jsx)("span",{className:"icon-button__text",children:"Info"})]})})})),x=t.memo((function(){return(0,r.jsx)("div",{className:"modal-content__button-wrapper",children:(0,r.jsx)("button",{className:"modal-content__button","aria-label":"Like",children:(0,r.jsx)(c.Z.Like,{})})})})),f=function(e){var a=e.location;return(0,r.jsx)("div",{className:"modal-content__location",children:a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z.Location,{}),(0,r.jsx)("span",{className:"icon-button__text",children:a})]})})},p=n(763),g=n(8813),j=n(9232),b=function(){var e=(0,s.v9)(j.H_),a=(0,g.Z)().setImageIdForModal,n=t.useCallback((0,p.debounce)((function(){e&&a(e)}),100),[e]);return(0,r.jsx)("aside",{className:"modal-content__aside right",onClick:n,children:(0,r.jsx)("div",{className:"modal-content__arrow-box",children:(0,r.jsx)(c.Z.Next,{className:e?"modal-content__arrow-svg visible":"modal-content__arrow-svg"})})})},_=function(){var e=(0,s.v9)(j.eK),a=(0,g.Z)().setImageIdForModal,n=t.useCallback((0,p.debounce)((function(){e&&a(e)}),100),[e]);return(0,r.jsx)("aside",{className:"modal-content__aside left",onClick:n,children:(0,r.jsx)("div",{className:"modal-content__arrow-box",children:(0,r.jsx)(c.Z.Previous,{className:e?"modal-content__arrow-svg visible":"modal-content__arrow-svg"})})})},v=t.memo((function(){return(0,r.jsx)("div",{className:"modal-content__button-wrapper",children:(0,r.jsxs)("button",{className:"modal-content__button","aria-label":"Share",children:[(0,r.jsx)(c.Z.Share,{}),(0,r.jsx)("span",{className:"icon-button__text",children:"Share"})]})})})),w=t.forwardRef((function(e,a){var n=(0,s.v9)(j.L4),t=n.location,i=n.author,c=n.twitter,d=n.urls,p=n.profileImage;return d?(0,r.jsxs)("div",{className:"modal-content__container fade-in",children:[(0,r.jsx)(u,{}),(0,r.jsx)(_,{}),(0,r.jsxs)("article",{className:"modal-content",children:[(0,r.jsxs)("header",{className:"modal-content__header",children:[(0,r.jsx)(o,{profileImageLink:p,author:i,twitter:c}),(0,r.jsx)(x,{}),(0,r.jsx)(l,{})]}),(0,r.jsx)(m,{author:i,urls:d}),(0,r.jsxs)("footer",{className:"modal-content__footer",children:[(0,r.jsx)(f,{location:t}),(0,r.jsx)(v,{}),(0,r.jsx)(h,{})]})]}),(0,r.jsx)(b,{})]}):null}));var N=(0,s.$j)((function(e){return{isModalVisible:e.modal.isVisible}}),{})((function(e){var a=e.isModalVisible;return(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{open:a,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",id:"my-modal",children:(0,r.jsx)(w,{})})})})),k=n(1413),Z=n(1762),L=n(6666),C=n.n(L),I=n(4554),R=n(7630),P=(0,R.ZP)("button")((function(e){var a=e.theme;return{backgroundColor:"#eee",paddingRight:a.spacing(1),paddingLeft:a.spacing(1),borderRadius:"2px",textDecoration:"none",fontSize:"14px",transition:"all 0.1s ease-in-out",textTransform:"capitalize",height:a.spacing(3.25),display:"inline-block",color:"#767676",border:"none",cursor:"pointer","&:disabled, &[disabled]":{opacity:.34,cursor:"default"},"&:hover:enabled":{backgroundColor:"#e1e1e1",color:"#111"}}})),S=(0,R.ZP)("figcaption")((function(e){return{visibility:"hidden",display:"flex",flexWrap:"wrap",gap:e.theme.spacing(1)}})),y=(0,R.ZP)(I.Z)((function(e){e.theme;return{textAlign:"center",fontSize:"2rem","&:after":{content:'" ."',animation:"dots 1s steps(5, end) infinite"},"@keyframes dots":{"0%, 20%":{color:"rgba(0, 0, 0, 0)",textShadow:"0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)"},"40%":{color:"black",textShadow:"0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)"},"60%":{textShadow:"0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0)"},"80%,   100%":{textShadow:"0.25em 0 0 black, 0.5em 0 0 black"}}}})),M=(0,R.ZP)("section")((function(e){var a=e.theme;return{paddingLeft:a.spacing(1.5),paddingRight:a.spacing(1.5),maxWidth:"1320px",marginLeft:"auto",marginRight:"auto"}})),A=((0,R.ZP)(I.Z)((function(e){var a=e.theme;return{paddingLeft:a.spacing(1.5),paddingRight:a.spacing(1.5),maxWidth:"1320px",marginLeft:"auto",marginRight:"auto",paddingTop:"12px"}})),n(8038)),W=(0,s.$j)(null,(function(e){return{fetchImages:function(a,n){return e((0,A._6)(a,n))}}}))((function(e){var a=e.id,n=e.user,i=e.description,o=e.urls,c=e.tags,l=e.loadHandler,u=e.fetchImages,m=t.useRef(null),h=(0,d.WZ)(),x=h.setImageIdForModal,f=h.showModal,g=(0,s.v9)(j.LA),b=(0,d.UD)(),_=t.useCallback((0,p.debounce)((function(){x(a),f()}),100),[a]);return(0,r.jsxs)("figure",{className:"fotos__box visible fade-in","data-user":"Author: ".concat(n),"data-description":i,children:[(0,r.jsx)("div",{className:"image-container","data-user":"Author: ".concat(n),"data-description":i,onClick:_,children:(0,r.jsx)("img",{className:"fotos__image",alt:i||"Image description",sizes:"(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw",srcSet:o,itemProp:"thumbnailUrl",onLoad:function(){var e;null===(e=m.current)||void 0===e||e.classList.add("visible"),l&&l()},onError:function(){return l&&l()}})}),(0,r.jsx)(S,{ref:m,children:c.map((function(e,a){return(0,r.jsx)(P,{disabled:!g,tabIndex:0,onClick:function(){u(e.title,b)},children:" "+e.title||0},a)}))})]})})),z=n(1573),F=function(){var e=(0,z.i)((function(e){return e.images.subject}),s.wU);return(0,r.jsxs)("div",{className:"images__header",children:[(0,r.jsx)("h2",{className:"images__subject",children:e})," "]})},H=function(e){var a=e.forwardedRef;return(0,r.jsx)("div",{ref:a})},V=n(6333),E=(0,Z.ZP)(H),T=(0,s.$j)((function(e){return{subject:e.images.subject}}),(function(e){return{fetchImages:function(a,n){return e((0,A._6)(a,n))}}}))((function(e){var a=e.fetchImages,n=e.subject,i=(0,s.v9)(j.pk),o=(0,V.Z)(),c=(0,t.useRef)(null),l=(0,t.useRef)(null),d=(0,t.useCallback)((0,p.debounce)((function(){a(n,o)}),300),[a,n]),u=(0,t.useCallback)((0,p.after)(i.length,(function(){var e,a;null===(e=c.current)||void 0===e||e.classList.add("active"),null===(a=l.current)||void 0===a||a.classList.add("hidden")})),[i]);return!i||(0,p.isEmpty)(i)?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{}),(0,r.jsxs)(M,{children:[(0,r.jsx)(y,{ref:l,children:"Loading images"}),(0,r.jsxs)("article",{className:"fotos__grid",ref:c,children:[i.map((function(e){return(0,r.jsx)(W,(0,k.Z)((0,k.Z)({},e),{},{loadHandler:u}),C()())})),(0,r.jsx)(E,{onEnterViewport:d})]})]})]})})),U=(0,R.ZP)(I.Z)((function(e){var a=e.theme;return{paddingLeft:a.spacing(1.5),paddingRight:a.spacing(1.5),paddingTop:a.spacing(1.5),maxWidth:"1320px",marginLeft:"auto",marginRight:"auto"}})),$=(0,R.ZP)(I.Z)((function(e){return{margin:"0",padding:"0",width:"100%",minHeight:"100vh",backgroundColor:e.theme.palette.common.white}})),D=n(5138),B=function(){return(0,d.P0)(),(0,r.jsxs)($,{children:[(0,r.jsx)(D.X8,{text:"Matching images"}),(0,r.jsx)(D.Bc,{}),(0,r.jsx)(U,{children:(0,r.jsx)(D.l0,{})}),(0,r.jsx)(N,{}),(0,r.jsx)(T,{})]})}}}]);
//# sourceMappingURL=186.e67253f7.chunk.js.map