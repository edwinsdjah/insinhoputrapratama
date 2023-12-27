(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{5297:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio-colorful-masonry",function(){return t(8487)}])},4902:function(e,r){"use strict";r.Z=function(){var e,r=document.querySelectorAll(".gallery"),t=document.querySelector(".filtering"),i=document.querySelectorAll(".filtering");if(r.length>=1&&r.forEach((function(r){e=new Isotope(r,{itemSelector:".items"})})),t){t.addEventListener("click",(function(r){if(matchesSelector(r.target,"span")){var t=r.target.getAttribute("data-filter");t=t,e.arrange({filter:t})}}));for(var n=function(e){e.addEventListener("click",(function(r){matchesSelector(r.target,"span")&&(e.querySelector(".active").classList.remove("active"),r.target.classList.add("active"))}))},a=0,l=i.length;a<l;a++){n(i[a])}}}},3169:function(e,r,t){"use strict";var i=t(5893);r.Z=function(e){var r=e.title,t=e.subTitle;return(0,i.jsx)("header",{className:"pg-header-sipm pg-work gr-purple-light-bg valign",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,i.jsxs)("div",{className:"caption text-center",children:[(0,i.jsx)("span",{className:"fz-16 mb-10 gr-purple-red-text",children:t}),(0,i.jsx)("h1",{className:"fz-60",children:r})]})})})})})}},8487:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var i=t(5893),n=t(7294),a=t(9008),l=t.n(a),o=t(3693),s=t(1874),c=t(9408),d=t(3169),f=t(1664),m=t.n(f),u=t(4902),g=JSON.parse('{"u":[{"name":"All","operator":"*"},{"name":"Branding","operator":".brand"},{"name":"Mobile App","operator":".web"},{"name":"Creative","operator":".graphic"}],"l":[{"filter":"graphic","image":"img/portfolio/1/1.jpg","title":"Creativity Demand","type":"Photography"},{"filter":"web","image":"img/portfolio/1/2.jpg","title":"Through The Breaking","type":"Web design"},{"filter":"brand","image":"img/portfolio/1/3.jpg","title":"Create With Creatives","type":"Branding"},{"filter":"graphic","image":"img/portfolio/1/4.jpg","title":"Energies of Love","type":"graphic"},{"filter":"web","image":"img/portfolio/1/5.jpg","title":"See It Yourself","type":"Design"},{"filter":"brand","image":"img/portfolio/1/7.jpg","title":"Blast From The Past","type":"Branding"},{"filter":"web","image":"img/portfolio/1/6.jpg","title":"See It Yourself","type":"Design"},{"filter":"brand","image":"img/portfolio/1/8.jpg","title":"Blast From The Past","type":"Branding"}]}'),p=function(){return(0,n.useEffect)((function(){setTimeout((function(){(0,u.Z)()}),500)}),[]),(0,i.jsx)("section",{className:"portfolio section-padding pt-0",children:(0,i.jsxs)("div",{className:"container-fluid",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"filtering d-flex justify-content-center col-12 mb-10",children:(0,i.jsx)("div",{className:"filter",children:g.u.map((function(e,r){return(0,i.jsx)("span",{"data-filter":e.operator,className:0==r?"active":"",children:e.name},r)}))})})}),(0,i.jsx)("div",{className:"gallery col-12 rest",children:(0,i.jsx)("div",{className:"row",children:g.l.map((function(e,r){return(0,i.jsx)("div",{className:"col-lg-3 col-md-6 items mt-30 md-getter ".concat(e.filter," wow fadeInUp"),"data-wow-delay":".4s",children:(0,i.jsxs)("div",{className:"item-img colorful-cont",children:[(0,i.jsx)(m(),{href:"/project-details",children:(0,i.jsxs)("a",{className:"imago wow",children:[(0,i.jsx)("img",{src:e.image,alt:"image"}),(0,i.jsx)("div",{className:"item-img-overlay"})]})}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)(m(),{href:"/project-details",children:(0,i.jsx)("a",{className:"icon",children:(0,i.jsx)("i",{className:"fas fa-long-arrow-alt-right"})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:e.type}),(0,i.jsx)("h6",{className:"fw-500",children:(0,i.jsx)(m(),{href:"/project-details",children:(0,i.jsx)("a",{children:e.title})})})]}),(0,i.jsx)("div",{className:"bg-gr gr-purple-red-bg"})]})]})},r)}))})})]})})},h=t(4774);function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}function x(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(){return(0,n.useEffect)((function(){var e;(e=document.body.classList).remove.apply(e,x(["index-main","index-bus1","index-corporate","index-restaurant","index-arch","index-freelancer","cr-agency","land-demo2","mobile-app","gr-orange-bg","nft-market"]))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:"Ravo - Portfolio Colorful | Masonry"})}),(0,i.jsxs)(o.Z,{defaultTheme:"dark",defaultLogoTheme:"dark",children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(d.Z,{title:"Portfolio Colorful.",subTitle:"Portfolio Colorful Masonry"}),(0,i.jsxs)("main",{className:"position-re",children:[(0,i.jsx)(p,{}),(0,i.jsx)(h.Z,{footerClass:"main-footer bg-dark-blue"})]})]})]})}}},function(e){e.O(0,[664,645,774,888,179],(function(){return r=5297,e(e.s=r);var r}));var r=e.O();_N_E=r}]);