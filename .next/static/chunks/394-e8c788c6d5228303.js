(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{3108:function(e,i,s){var t=s(7294),n=s(5697);function a(e){if(e&&e.__esModule)return e;var i=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var t=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(i,s,t.get?t:{enumerable:!0,get:function(){return e[s]}})}})),i.default=e,Object.freeze(i)}var r=a(t),l=a(n),c=function(e){var i,s=e.bgColor,t=e.completed,n=e.baseBgColor,a=e.height,l=e.width,c=e.margin,o=e.padding,d=e.borderRadius,m=e.labelAlignment,u=e.labelColor,p=e.labelSize,g=e.isLabelVisible,h=e.transitionDuration,x=e.transitionTimingFunction,f=e.className,j=e.dir,v=e.ariaValuemin,b=e.ariaValuemax,N=e.ariaValuetext,w=e.maxCompleted,y=e.customLabel,k=e.animateOnRender,C=e.barContainerClassName,z=e.completedClassName,O=e.labelClassName,E=e.initCompletedOnAnimation,S=void 0===E?0:E,q="left"===(i=m)?"flex-start":"center"===i?"center":"right"===i?"flex-end":null,A="number"===typeof S?"".concat(S,"%"):S,P=function(e,i){if(e){var s=Number(i)/e;return s>1?"100%":"".concat(100*s,"%")}return A}(w,t),R=r.useState(A),V=R[0],I=R[1],B={height:a,background:n,borderRadius:d,padding:o,width:l,margin:c},T={height:a,width:k?V:P,background:s,transition:"width ".concat(h||"1s"," ").concat(x||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:"outside"!==m&&q?q:"normal"},Z={padding:"outside"===m?"0 0 0 5px":"5px",color:u,fontWeight:"bold",fontSize:p,display:g?"initial":"none"},D={display:"outside"===m?"flex":"initial",alignItems:"outside"===m?"center":"initial"},L="number"===typeof t?"".concat(t,"%"):"".concat(t),_=y||L;return r.useEffect((function(){k&&requestAnimationFrame((function(){return I(P)}))}),[P,k]),r.createElement("div",{style:f?void 0:D,className:f,dir:j,role:"progressbar","aria-valuenow":parseFloat(_),"aria-valuemin":v,"aria-valuemax":b,"aria-valuetext":"".concat(null===N?_:N)},r.createElement("div",{style:C?void 0:B,className:C},r.createElement("div",{style:z?void 0:T,className:z},"outside"!==m&&r.createElement("span",{style:O?void 0:Z,className:O},_))),"outside"===m&&r.createElement("span",{style:O?void 0:Z,className:O},_))};c.propTypes={completed:l.oneOfType([l.string,l.number]).isRequired,bgColor:l.string,baseBgColor:l.string,height:l.string,width:l.string,borderRadius:l.string,margin:l.string,padding:l.string,labelAlignment:l.oneOf(["left","center","right","outside"]),labelColor:l.string,labelSize:l.string,isLabelVisible:l.bool,className:l.string,dir:l.oneOf(["rtl","ltr","auto"]),maxCompleted:l.number,customLabel:l.string,animateOnRender:l.bool,barContainerClassName:l.string,completedClassName:l.string,labelClassName:l.string,initCompletedOnAnimation:l.oneOfType([l.string,l.number])},c.defaultProps={bgColor:"#6a1b9a",height:"20px",width:"100%",borderRadius:"50px",labelAlignment:"right",baseBgColor:"#e0e0de",labelColor:"#fff",labelSize:"15px",isLabelVisible:!0,dir:"ltr",ariaValuemin:0,ariaValuemax:100,ariaValuetext:null,maxCompleted:100,animateOnRender:!1,initCompletedOnAnimation:0},i.Z=c},6030:function(e,i,s){"use strict";s.d(i,{Z:function(){return u}});var t=s(5893),n=s(7294),a=s(1664),r=s.n(a),l=s(8352),c=s(1911),o=s(8028),d=function(){var e=document.querySelector(".swiper-pagination");e&&(e.innerHTML=e.innerHTML.replace(" / ",""))},m=JSON.parse('[{"bg":"img/slider/d1.jpg","title":"Insinho Putra Pratama","text":"dummy"},{"bg":"img/slider/d4.jpg","title":"Insinho Putra Pratama","text":"dummy"},{"bg":"img/slider/d3.jpg","title":"Insinho Putra Pratama","text":"dummy"}]');s(6797),s(1669);c.ZP.use([c.W_,c.tl,c.VS]);var u=function(){var e=(0,n.useState)(!0),i=e[0],s=e[1],a=(0,n.useRef)(null),c=(0,n.useRef)(null),u=(0,n.useRef)(null);return(0,n.useEffect)((function(){setTimeout((function(){s(!1),d()}))}),[]),(0,t.jsxs)("header",{className:"slider slider-prlx o-hidden",children:[i?null:(0,t.jsx)(l.tq,{className:"swiper-container parallax-slider",speed:1e3,parallax:!0,slidesPerView:1,loop:!0,navigation:{prevEl:a.current,nextEl:c.current},pagination:{type:"fraction",clickable:!0,el:u.current},onBeforeInit:function(e){e.params.navigation.prevEl=a.current,e.params.navigation.nextEl=c.current,e.params.pagination.el=u.current},onSwiper:function(e){setTimeout((function(){for(var i=0;i<e.slides.length;i++)e.slides[i].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=a.current,e.params.navigation.nextEl=c.current,e.params.pagination.el=u.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update(),e.pagination.destroy(),e.pagination.init(),e.pagination.update()}))},children:m.map((function(e,i){return(0,t.jsx)(l.o5,{children:(0,t.jsx)("div",{className:"bg-img valign",style:{backgroundImage:"url('".concat(e.bg,"')")},"data-overlay-dark":"5",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,t.jsxs)("div",{className:"caption text-center mt-30",children:[(0,t.jsx)(o.Z,{children:(0,t.jsx)("h1",{className:"fw-800","data-splitting":!0,children:e.title})}),(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-lg-10",children:(0,t.jsx)("p",{className:"fz-16",children:e.text})})}),(0,t.jsx)("div",{className:"mt-30",children:(0,t.jsx)(r(),{href:"/profile-index",children:(0,t.jsxs)("a",{className:"butn butn-md gr-sunrise-bg text-light radius-30",children:[(0,t.jsx)("span",{className:"text slide-up",children:"About Company"}),(0,t.jsx)("span",{className:"text slide-down",children:"About Company"})]})})})]})})})})})},i)}))}),(0,t.jsxs)("div",{className:"setone setwo",children:[(0,t.jsx)("div",{className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",ref:c,children:(0,t.jsx)("i",{className:"fas fa-chevron-right"})}),(0,t.jsx)("div",{className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",ref:a,children:(0,t.jsx)("i",{className:"fas fa-chevron-left"})})]}),(0,t.jsx)("div",{className:"swiper-pagination top botm",ref:u})]})}},5292:function(e,i,s){"use strict";s.d(i,{Z:function(){return n}});var t=s(5893),n=function(){return(0,t.jsxs)("section",{className:"hero section-padding position-re",children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-5",children:(0,t.jsxs)("div",{className:"main-text",children:[(0,t.jsx)("h6",{className:"sub-title gr-sunrise-text",children:"How We Are ?"}),(0,t.jsx)("h4",{className:"fw-700",children:"Ultimate xperiences with story, emotion and purpose"})]})}),(0,t.jsx)("div",{className:"col-lg-6 offset-lg-1 valign",children:(0,t.jsx)("div",{className:"hero-cont",children:(0,t.jsxs)("p",{className:"fw-500 fz-18 mb-10 text-dark",children:[(0,t.jsx)("span",{className:"fz-30",children:"W"}),"e help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic."]})})})]})}),(0,t.jsx)("div",{className:"circle-pattern bottom left"})]})}},4978:function(e,i,s){"use strict";s.d(i,{Z:function(){return c}});var t=s(5893),n=s(1664),a=s.n(n),r=s(8352),l=JSON.parse('[{"id":1,"image":"img/works/n/1.jpg","type":"Creative Design","title":"Stickers Pack"},{"id":2,"image":"img/works/n/2.jpg","type":"Creative Design","title":"Colorful Small Cards"},{"id":3,"image":"img/works/n/3.jpg","type":"Creative Design","title":"Lifestyle App"},{"id":4,"image":"img/works/n/5.jpg","type":"Creative Design","title":"Bright Captive"},{"id":5,"image":"img/works/n/4.jpg","type":"Creative Design","title":"Colorful Small Cards"}]'),c=function(){return(0,t.jsx)("section",{className:"work-carsouel crv section-padding bg-gray",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"round-head text-center mb-80",children:[(0,t.jsxs)("h6",{className:"ls2 text-u fz-12 mb-15",children:["Our Recent Works",(0,t.jsx)("span",{})]}),(0,t.jsx)("h2",{className:"fw-700",children:"Case Studies"})]})}),(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)(r.tq,{className:"work-crsol position-re",slidesPerView:"auto",spaceBetween:60,loop:!0,children:l.map((function(e){return(0,t.jsxs)(r.o5,{children:[(0,t.jsx)("figure",{children:(0,t.jsx)(a(),{href:"/project-details",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:e.image,alt:""})})})}),(0,t.jsx)("div",{className:"cont",children:(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("span",{className:"fz-13 opacity-7",children:e.type}),(0,t.jsx)("h6",{className:"fw-600 mt-5",children:(0,t.jsx)(a(),{href:"/project-details",children:(0,t.jsx)("a",{children:e.title})})})]})})]},e.id)}))})})]})})})}},1729:function(e,i,s){"use strict";s.d(i,{Z:function(){return a}});var t=s(5893),n=JSON.parse('[{"numb":"01","title":"Project research","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with a single click"},{"numb":"02","title":"Sketches and design","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with a single click"},{"numb":"03","title":"Seleted concept","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with a single click"}]'),a=function(e){var i=e.services;return(0,t.jsxs)("section",{className:"features-process section-padding position-re ".concat(i?"pb-50 bg-gray-light":"pt-0"),children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:n.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item flex",children:[(0,t.jsx)("div",{className:"fz-40 mr-20 lf-culm",children:(0,t.jsx)("span",{className:"numb",children:e.numb})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h5",{className:"mb-10 fz-20 fw-600",children:e.title}),(0,t.jsx)("p",{children:i?e.srdescription:e.description})]})]})},s)}))})}),i?null:(0,t.jsx)("div",{className:"circle-pattern bottom right"})]})}},9931:function(e,i,s){"use strict";s.d(i,{Z:function(){return o}});var t=s(5893),n=(s(7294),s(1664)),a=s.n(n),r=s(3108),l=s(8028),c=JSON.parse('[{"title":"UI / UX Design","progress":90,"description":"Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justoe."},{"title":"Development","progress":88,"description":"Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justoe."}]'),o=function(){return(0,t.jsx)("section",{className:"skills section-padding",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-5 valign",children:(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("h3",{className:"fw-700 mb-30",children:["We always ",(0,t.jsx)("br",{})," ready for a challenge."]}),(0,t.jsx)("p",{children:"Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives."}),(0,t.jsx)(a(),{href:"/profile-index",children:(0,t.jsx)("a",{className:"butn butn-md gr-sunrise-bg text-light radius-30 mt-30",children:(0,t.jsx)(l.Z,{children:(0,t.jsx)("span",{className:"text words chars splitting","data-splitting":!0,children:"About Company"})})})})]})}),(0,t.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,t.jsx)("div",{className:"skills-box full-width",children:c.map((function(e,i){return(0,t.jsxs)("div",{className:"skill-item",children:[(0,t.jsx)("h6",{className:"text-u ls3 fz-13",children:e.title}),(0,t.jsx)(r.Z,{completed:e.progress,className:"skill-progress",bgColor:"linear-gradient(-271deg, #ffcf6d, #fd8558)",baseBgColor:"#EBEBEB",height:"10px"}),(0,t.jsxs)("div",{className:"flex mt-20",children:[(0,t.jsxs)("h2",{className:"fw-200",children:[e.progress," ",(0,t.jsx)("span",{className:"fz-30",children:"%"})]}),(0,t.jsx)("p",{children:e.description})]})]},i)}))})})]})})})}},1669:function(){},6797:function(){}}]);