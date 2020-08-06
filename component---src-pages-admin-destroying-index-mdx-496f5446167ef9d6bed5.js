(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"b+mk":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return j}));var a=n("k1TG"),o=n("8o2o"),r=(n("q1tI"),n("7ljp")),l=n("013z"),b=n("T0C+"),c=(n("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=i("PageDescription"),s=i("InlineNotification"),m={_frontmatter:c},d=l.a;function j(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(p,{mdxType:"PageDescription"},Object(r.b)("p",null,"Use the ",Object(r.b)(b.a,{name:"env",mdxType:"Globals"})," to delete itself")),Object(r.b)(s,{mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": An ",Object(r.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/admin/plan-installation#roles"}),"Plan Installation > Roles")," for the overview of the roles involved.")),Object(r.b)("p",null,"Not only can the ",Object(r.b)(b.a,{name:"shortName",mdxType:"Globals"})," create the ",Object(r.b)(b.a,{name:"env",mdxType:"Globals"}),", the environment can also delete itself. The environment is installed using Terraform, which stores the state of the creation in the ",Object(r.b)("inlineCode",{parentName:"p"},"workspace")," folder. Terraform can use that state to delete what it installed."),Object(r.b)("p",null,"Destroy a ",Object(r.b)(b.a,{name:"env",mdxType:"Globals"})," following these steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run the following command to launch a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/tools-image"}),"Developer Tools container"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the container, change to the ",Object(r.b)("inlineCode",{parentName:"p"},"workspace")," directory:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd workspace\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the container, run the Terraform tool with the ",Object(r.b)("inlineCode",{parentName:"p"},"destroy")," option:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"terraform destroy\n")))),Object(r.b)("p",null,"This will remove the development cluster and all the services that were created previously."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-destroying-index-mdx-496f5446167ef9d6bed5.js.map