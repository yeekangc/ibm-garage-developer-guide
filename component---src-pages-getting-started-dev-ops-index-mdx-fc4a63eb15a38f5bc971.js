(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),c=a.n(o),b=a("Wbzz"),i=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,r=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===r,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,c=n.subDirectory,i=o+"/edit/"+n.branch+c+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},j=a("FCXl"),h=a("9Hrx"),T=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=c()(e,{lower:!0,strict:!0}),o=n===r,i=new RegExp(r+"/?(#.*)?$"),l=a.replace(i,n);return Object(p.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=o,t),T.listItem)},Object(p.b)(b.Link,{className:T.link,to:""+l},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:T.list},n))))))},t}(n.a.Component),v=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,h=s.theme,T=s.description,k=s.keywords,P=Object(w.a)().interiorTheme,y=Object(b.useStaticQuery)("2456312558").site.pathPrefix,N=y?r.pathname.replace(y,""):r.pathname,I=m?N.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",H=h||P;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:T,pageKeywords:k,titleType:u},Object(p.b)(x,{title:n?Object(p.b)(n,null):g,label:"label",tabs:m,theme:H}),m&&Object(p.b)(f,{slug:N,tabs:m,currentTab:I}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d})),Object(p.b)(j.a,{pageContext:t,location:r,slug:N,tabs:m,currentTab:I}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Lefw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a("k1TG"),n=a("8o2o"),o=(a("q1tI"),a("7ljp")),c=a("013z"),b=a("T0C+"),i=(a("qKvR"),{}),l={_frontmatter:i},s=c.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(s,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This short video introduces the concepts of DevOps with ",Object(o.b)(b.a,{name:"ocp",mdxType:"Globals"}),":"),Object(o.b)("iframe",{width:"80%",height:"500",src:"https://www.youtube.com/embed/GOPWObjFTsI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}d.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-getting-started-dev-ops-index-mdx-fc4a63eb15a38f5bc971.js.map