"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3608,9514],{3012:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(7294),a=r(4581),i=r(9960),l=r(5999);function c(e){var t=e.year,r=e.posts;return n.createElement(n.Fragment,null,n.createElement("h3",null,t),n.createElement("ul",null,r.map((function(e){return n.createElement("li",{key:e.metadata.date},n.createElement(i.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function o(e){var t=e.years;return n.createElement("section",{className:"margin-vert--lg"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},n.createElement(c,e))})))))}function s(e){var t,r,i=e.archive,c=(0,l.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,l.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(t=i.blogPosts,r=t.reduceRight((function(e,t){var r=t.metadata.date.split("-")[0],n=e.get(r)||[];return e.set(r,[t].concat(n))}),new Map),Array.from(r,(function(e){return{year:e[0],posts:e[1]}})));return n.createElement(a.Z,{title:c,description:s},n.createElement("header",{className:"hero hero--primary"},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},c),n.createElement("p",{className:"hero__subtitle"},s))),n.createElement("main",null,m.length>0&&n.createElement(o,{years:m})))}},5643:function(e,t,r){r.d(t,{Z:function(){return g}});var n,a,i,l,c=r(1880),o=r(7462),s=r(3366),m=r(2690),d=r(6010),f=r(9960),u=r(2263),p=r(4996),h=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,r=e.href,n=e.label,a=e.prependBaseUrlToHref,i=(0,s.Z)(e,h),l=(0,p.Z)(t),c=(0,p.Z)(r,{forcePrependBaseUrl:!0});return(0,m.tZ)(f.Z,(0,o.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:a?c:r}:{to:l},i),n)}var g=function(){var e=(0,u.Z)().siteConfig,t=(void 0===e?{}:e).themeConfig,r=(void 0===t?{}:t).footer,o=r||{},s=o.copyright,f=o.links,p=void 0===f?[]:f;return(0,m.tZ)("footer",{className:(0,d.Z)("footer",{"footer--dark":"dark"===r.style})},(0,m.tZ)("div",null,(0,m.tZ)("div",{css:(0,m.iv)(n||(n=(0,c.Z)(["\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-content: center;\n          "])))},p.map((function(e,t){return(0,m.tZ)("div",{css:(0,m.iv)(a||(a=(0,c.Z)(["\n                margin: 20px;\n              "]))),key:t},null!=e.title?(0,m.tZ)("h4",{className:"footer__title"},e.title):null,(0,m.tZ)("ul",{css:(0,m.iv)(i||(i=(0,c.Z)(["\n                  padding: 0 30px 0 00px;\n                  list-style: none;\n                "])))},e.items.map((function(e,t){return(0,m.tZ)("li",{key:e.href||e.to},(0,m.tZ)(v,e))}))))}))),(0,m.tZ)("div",{css:(0,m.iv)(l||(l=(0,c.Z)(["\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            > div {\n              padding-right: 30px;\n            }\n          "])))},(0,m.tZ)("div",{dangerouslySetInnerHTML:{__html:s}}),(0,m.tZ)("a",{href:"https://www.freeprivacypolicy.com/live/ada70892-c887-4a1d-8d0e-29801fe215b2"},"Privacy Policy"))))}}}]);