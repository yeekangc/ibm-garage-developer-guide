(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),u=a.n(c),d=a("QH2O"),m=a.n(d),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:s},"Edit this page on GitHub"))):null},x=a("FCXl"),O=a("9Hrx"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,s=new RegExp(n+"/?(#.*)?$"),b=a.replace(s,r);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+b},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:f.list},r))))))},t}(r.a.Component),T=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,m=c.tabs,j=c.title,O=c.theme,f=c.description,N=c.keywords,w=Object(y.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,P=k?n.pathname.replace(k,""):n.pathname,I=m?P.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",C=O||w;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:C,pageTitle:j,pageDescription:f,pageKeywords:N,titleType:d},Object(p.b)(g,{title:r?Object(p.b)(r,null):j,label:"label",tabs:m,theme:C}),m&&Object(p.b)(v,{slug:P,tabs:m,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:u})),Object(p.b)(x.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:I}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},BDBB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var n,r=a("k1TG"),o=a("8o2o"),i=(a("q1tI"),a("7ljp")),l=a("013z"),s=a("T0C+"),b=(a("qKvR"),{}),c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),u={_frontmatter:b},d=l.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the DevOps process, Artifact Management generally refers to the activities around storing and managing assets that are\nproduced during the continuous integration process. Depending upon the development language, an “asset” could be any number\nof things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Library jar file"),Object(i.b)("li",{parentName:"ul"},"NPM package"),Object(i.b)("li",{parentName:"ul"},"Helm chart"),Object(i.b)("li",{parentName:"ul"},"etc")),Object(i.b)("p",null,"Besides the contents of the asset, many of those types of artifacts also involve a particular protocol for how they are shared\nand consumed (e.g. maven repository for jar libraries)."),Object(i.b)(c,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," While container images are closely related to the other artifacts listed above, we feel the practices and tools\naround managing images is distinct enough that the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/getting-started-day-1/image-registry"}),"Image Registry")," warrents its own\ntreatment.  ")),Object(i.b)("p",null,"There are a number of tools available to handle manage artifacts, from roll-your-own file systems to enterprise-grade\nsoftware. Currently the ",Object(i.b)(s.a,{name:"shortName",mdxType:"Globals"})," supports provisioning the following Artifact Management tools:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/tools/artifactory"}),"Artifactory")),Object(i.b)("li",{parentName:"ul"},"Nexus")))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-1-artifact-management-index-mdx-0e0ee359e2a078cbf6cf.js.map