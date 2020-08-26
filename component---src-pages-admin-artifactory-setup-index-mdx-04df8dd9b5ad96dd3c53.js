(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{WnB4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return A}));var i=a("k1TG"),n=a("8o2o"),r=(a("q1tI"),a("7ljp")),s=a("013z"),o=a("T0C+"),c=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=b("PageDescription"),l=b("InlineNotification"),d=b("ArtDirection"),m={_frontmatter:c},g=s.a;function A(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(g,Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(p,{mdxType:"PageDescription"},Object(r.b)("p",null,"Complete the steps for setting up the Artifactory tool")),Object(r.b)(l,{mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": As of v1.9.0 of the Artifactory module, these steps have been automated and should not be required after a ",Object(r.b)(o.a,{name:"tinyName",mdxType:"Globals"})," install. The\ninstructions are provided here to understand what steps are required to manually integrate the Artifactory instance into the pipelines.")),Object(r.b)("h2",null,"Overview"),Object(r.b)("p",null,"Artifactory is the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/tools/artifact-management"}),Object(r.b)(o.a,{name:"env",mdxType:"Globals"}),"’s artifact repository manager"),".\nBefore you can use it as part of the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/tools/continuous-integration"}),"continuous integration pipeline"),",\nit first must be configured as part of the environment."),Object(r.b)("h2",null,"Configuration"),Object(r.b)("p",null,"Set up Artifactory in the ",Object(r.b)(o.a,{name:"env",mdxType:"Globals"})," with a Helm repository.\nAlso, set up the ",Object(r.b)(o.a,{name:"env",mdxType:"Globals"})," to access Artifactory."),Object(r.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning:")," The version of Artifactory that is installed into the cluster is\nnot configured for high availability. It is limited to the\nstorage size of your cluster. It is highly recommended you integrate your\npipelines with an enterprise grade Helm repository or artifact\nmanagement\nsystem.  ")),Object(r.b)("h3",null,"Set up Artifactory"),Object(r.b)("p",null,"Create a repository in Artifactory for storing Helm charts."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the Artifactory dashboard from the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/getting-started/dashboard"}),Object(r.b)(o.a,{name:"dashboard",mdxType:"Globals"}))," and login")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Log into Artifactory using the default userid and password, ",Object(r.b)("inlineCode",{parentName:"p"},"igc credentials")," can show these values. The first time\nyou log in the Welcome Page will prompt you to configure Artifactory using the Onboarding Wizard.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("strong",{parentName:"p"},"Get Started")),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB30lEQVQoz52SS2tTURSF7w9yoiMRzbMJ2A7UNjd9hLbaNxiDiIqdCHGgo1LakXSk1nmrA8EfIBRx4APTqFQjpq0B2xvjvTf3/Xly2iQVjI9uWOxzNnsv1jr7KLHTAzQQ7x4klFTpHZzCsm0aEQQB/xtKrPvPhP+KZr8iFQqyeM8QoYRK3/DhFDZ7FUmW6KcrOUC4RyU1PYnl2PtdYHs2plunLmC4hrg78my6Zivrot5WeEYoy04QyY4TUVOkLh8gFPFFL/N65w3F6juZP9Y+UdDWJd7uFnhf/UBZ32wTRs9lODGf4+TCJSJjKdTZiV8Idy2NUu0zW/q2RPnHJl/1ChWzwpaxjWZrtOxIy2qG6MURYjfOE832kb41juXuv6H0LA4NRybUay5VzcDQbRzLw3cCHNuTb25ZDr7vo3SpaRIjKsmcWM61XtTFaSyvrXCt8pz7xYfcKy5T2FmXNc8XZIEv8h58P5Bk0nJ8RizleoZEXii9nSZ9dxLbbRO+/PaK1dJjVkqP2Pi+IWsNso7/MDw/Q+TOBWJzY8QX+xlaGpab7TTYrHX6j8qppSzhhSlCD3Icf3KFs09nhWWnNbRnzWvZPEj2W4Wh/CjHVq9ydC3PkWc3ib6Yw/Kdjir+Fj8B/uY8t5qQBeUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/static/172c192d1918479d1859274b4c7f78fe/3cbba/1-jfrog.png",srcSet:["/static/172c192d1918479d1859274b4c7f78fe/7fc1e/1-jfrog.png 288w","/static/172c192d1918479d1859274b4c7f78fe/a5df1/1-jfrog.png 576w","/static/172c192d1918479d1859274b4c7f78fe/3cbba/1-jfrog.png 1152w","/static/172c192d1918479d1859274b4c7f78fe/0b124/1-jfrog.png 1728w","/static/172c192d1918479d1859274b4c7f78fe/ee6ee/1-jfrog.png 2088w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The first step of the setup wizard is to change the default password. It is\nrecommend you use a password generated by a password manager. ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://1password.com"}),"1Password\n")," is the tool IBM recommends to its employees."),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1005px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABcklEQVQ4y52SbU7CQBiEezFECBSKLR9ioQgaPhLjGfzhgUy8gfEQRv+rgVI0AkIJtHQ77m4LtkgbwyaTbDbZZ2feWUFUm0gXNSSlGlKyhiNRhVLtQh+OELdc1/0jtgSl0YNYbVFoA+mShkTuDPJpF8boE+PxFwaDAfr9PnRd3+4taxX5iCBVesiX2sgpl8gUmkhkKJA6NIwPrFYWJpNvqhmm0xnmc5OLndv2moJ/RQjxHJa0a+TLHYjKBaRyG+nCOQcOKZC9aC4WcNbOHyeEhLWNLKtXHMhghUoHSbHuAf0Z2rYNx3GoyPZS3FyFYt1zmDmh5UgNJLJq2KG5wHK5hEt84J4yQqVkadSs3OLAVF7jwGDLzB3xYZtLcU6FpFjDca7OFQRuIrP5BCHxoSmQQYLadei150b+vV1FAochYPTH3uwdl47GJf9zGFXAvnkeDGTn3D3lTawJHoxHPE9fDovMI9J/6fjAV/MNN0+3uHu/xw+pNV9QswRuPwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Reset Password",title:"Reset Password",src:"/static/144cf83a48b366e08a6c246d0bf918ec/0ba0f/2-resetpassword.png",srcSet:["/static/144cf83a48b366e08a6c246d0bf918ec/7fc1e/2-resetpassword.png 288w","/static/144cf83a48b366e08a6c246d0bf918ec/a5df1/2-resetpassword.png 576w","/static/144cf83a48b366e08a6c246d0bf918ec/0ba0f/2-resetpassword.png 1005w"],sizes:"(max-width: 1005px) 100vw, 1005px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Save the password somewhere safe or in your password manager; you will need to\nmanually update the password in the  ",Object(r.b)("inlineCode",{parentName:"p"},"secret")," that is stored in the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace/project\ncalled ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access"),". There are more detailed instructions after you\nhave completed the setup wizard."))),Object(r.b)("p",null,"The next step is to define the base url that will be used by the server. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"From the browser you are currently using copy the ",Object(r.b)("inlineCode",{parentName:"p"},"URL")," from the address bar."),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABIElEQVQoz62Sy06DQBSG56mqLjSl0JYWuTQaBC0ajTE+hC5046K+iInP494VJnUniA4z88ttCAYtjfEkXw4hJx/zc4Zo9hxDc46xGWDinGCzb+PqZoG8OOcQQqCr5Ew+T4beETTHh2r4GGXijR0L17f3xUAYvmSEWC5fi2HORdXlc0nzo0R3A6gzD4rlQjMOS2F1wiiKEcfvSJIPUJq2ScsuhXkntnuJ6ewURsbu3hm2FKeOnCQJPin9Fq0LYuyfY2QFRVzdPkZv26yF6whaQtO9gJ4tI487mHhF5HopQqy1lGYRJZMMKtSpj15D+KcT9scuJP8iVPQDSH4Tdt3BGnQI5R1bRfsfrhTyHyX5e8YYUpaCUYaH50fcPS3wlkb4As2v5FUGCWXdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/static/57b6570fd198faa11ab380c6dfada830/3cbba/3-baseurl.png",srcSet:["/static/57b6570fd198faa11ab380c6dfada830/7fc1e/3-baseurl.png 288w","/static/57b6570fd198faa11ab380c6dfada830/a5df1/3-baseurl.png 576w","/static/57b6570fd198faa11ab380c6dfada830/3cbba/3-baseurl.png 1152w","/static/57b6570fd198faa11ab380c6dfada830/0b124/3-baseurl.png 1728w","/static/57b6570fd198faa11ab380c6dfada830/9ae98/3-baseurl.png 2082w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Past the URL into the ",Object(r.b)("strong",{parentName:"p"},"Select Base URL")," form and remove any trailing\ncontext roots, similar to the one in this view."),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABSElEQVQoz52S207CQBCG961QLzifii0tmtAiJUhMTHwEvcBLNT6LiU/jA5ggNzU1QEG63f3dg1WJRouT/TrdzeTLzGZJ1fZRs3w0rAEMZ4jdooPz8TVkMMbElyNLcM5VPal5fVSdHipmD3Wrj52CjYvLG1U0nU4xmTwhCAJV/B2ukLI0SNMdoNrpoWy7qJlHWjjWwsUiQhQt8bpeI6YUlCYqp8i9RAu5WsR2z9ByRjDsIfYPRtgrdcTIWhi8PCOchZgv55hFkpn61yze0ftVvBI+DtI6PEG9PRDj+miKnMu3P4RxEoMyqvLviG6Z7pRY3VMYnWPUTR+Vlodc4VP49W6yBikbHiSlpouKsSlknCnpNpBio4sU1WF+s8OthbKzlJ9GzjK2nCThyd9C+daydLVxh/8RyvMkYeINUkCsu8d7XD3cIlyHeANfdOJKwtPYmAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/static/7b0f9f8ea40e638e35b4fd8d256d3598/3cbba/3-baseurl-complete.png",srcSet:["/static/7b0f9f8ea40e638e35b4fd8d256d3598/7fc1e/3-baseurl-complete.png 288w","/static/7b0f9f8ea40e638e35b4fd8d256d3598/a5df1/3-baseurl-complete.png 576w","/static/7b0f9f8ea40e638e35b4fd8d256d3598/3cbba/3-baseurl-complete.png 1152w","/static/7b0f9f8ea40e638e35b4fd8d256d3598/0b124/3-baseurl-complete.png 1728w","/static/7b0f9f8ea40e638e35b4fd8d256d3598/d33b7/3-baseurl-complete.png 2076w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The next page in the wizard is the Configure a Proxy Server page. This is to\nsetup a proxy for external resources. You can click ",Object(r.b)("strong",{parentName:"p"},"Next")," to skip this\nstep."),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABWElEQVQoz32SW06DQBiF2VX1xd4spU0BS9TWFGnUxC3og8/2wbWYuBoX4AOQaMUa2zIMw3FmEEQs/OFkLmE+zvkZ5dCcoafPoI5saKaD/dYRbu7uISpJEhRLrOvEGIOiHjtQzXP09VR7EriQANf14Ps+PC8dl8sl33MRRRGqStGmc6iWzaE2OqMpGk0Dtz/A17cAQfAp9R6ssFp9YbMJQSKKiMagXBGfE0LlXAIN5xI96wzN0Qm6Yw5sG7nD9XojX2QsAY1jhCGRcxFNKI2ZKmuPMrSueFQHmuFgYM7ROPgFykOlXhZ7Vi6xpxiTawzGF1B1G91hGjkDEt6rcuPrSgI7gymE2tpEjkVgFazqL8vIrf4pMpUdbsMQMe9ddoAQ8me9EyicZfoXmZC8+ULiuhTXWbGEIU7SD9UCdzmocpbfwzpg0U1RIrZwTykF+PP48oTF8wMC8oFvAjnhyYCOGaEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/static/b568c150189a10c0137c612fdeb67ed8/3cbba/4-proxy.png",srcSet:["/static/b568c150189a10c0137c612fdeb67ed8/7fc1e/4-proxy.png 288w","/static/b568c150189a10c0137c612fdeb67ed8/a5df1/4-proxy.png 576w","/static/b568c150189a10c0137c612fdeb67ed8/3cbba/4-proxy.png 1152w","/static/b568c150189a10c0137c612fdeb67ed8/0b124/4-proxy.png 1728w","/static/b568c150189a10c0137c612fdeb67ed8/87d20/4-proxy.png 2078w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The next page in the wizard is the Create Repositories page. Since the open source release of\nArtifactory doesn’t provide a package for Helm repositories, we will use a generic repository to hold the helm\nartifacts.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Generic"),", then press ",Object(r.b)("strong",{parentName:"p"},"Next")),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABpElEQVQoz32TS0/CUBCF+V8axRbl4bMaXkqUpSzcuvCfGZcmrly49rUhEIOhQFv7ur09ztzWhiIwycn0PvLdM5NpQd9vQ6+1sXtwgc3SGeoXPUgpsSriOM7yvDiiKEKhbFyiZnRRPelia7eugHwwGo0wGAyUhsMh+v0+fN/LQZc9Vtg77qBydAmt1sKGZqDRSYAzy4Y5mWFCMlP5fpBzJeV/lwnwkFySw+29Bjm8zkoWBA7DEDFlDt5PFGd3EnCyp4C60ULxqA7tpIkN/TTrIWs8HmM6nWL840LEDIhzJZu2AyGj3F6hYlyhdHiOnRoBNQJ2EiCX/fb2Ctv18DD4hhMGMK0vBMKHRY/EdOf+8Qkz207dp8DS/jn0ahtapbUAlLAsS5X84ziQtBZCJGdpFkGgwH/9VMBiuQGWVs0DWb7vw/O8ud6tUwrcqTTBWgTyqw45s6mkdXOpyqX+stTYLANyuRzskCOg0hjqum7mnLOagIWZXAGM1MWsZ7Sezwzib1YgArxa7/iwP5XLlSWv+yMYGIoQUkiY3gS95xvcvtzRCAn8AiUoNEOSUdRmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Select Repo Type",title:"Select Repo Type",src:"/static/25b90936408bd8860843b8c66e9b253e/3cbba/5-selectrepotype.png",srcSet:["/static/25b90936408bd8860843b8c66e9b253e/7fc1e/5-selectrepotype.png 288w","/static/25b90936408bd8860843b8c66e9b253e/a5df1/5-selectrepotype.png 576w","/static/25b90936408bd8860843b8c66e9b253e/3cbba/5-selectrepotype.png 1152w","/static/25b90936408bd8860843b8c66e9b253e/0b124/5-selectrepotype.png 1728w","/static/25b90936408bd8860843b8c66e9b253e/671e2/5-selectrepotype.png 2072w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The next page in the wizard is the Onboarding Complete page. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("strong",{parentName:"p"},"Finish")),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABY0lEQVQoz52SS0/CQBSF+8N88GgLBUwB0SLy2sjGtQt/oxuXGmOCG+yGh5R2Ou1MjzMDEsAKxElO7iQz+eacuVfTKy3opRaMyi3OjAZqzh18P8ChlSTJluRijEEr1Lqw7B6Kdhfn5tUaOJ1MMBx+wHVdjEYjVRnjW4C0BzSz2lEwvdzCSb6OenOggL5PMB7PMJ3OMZ7MlDwvwGJBQEKKOGYIRfU8D5zzNVQz7DbMizasag+ZorN0GASgNAIhoapRFCuArJwvnXApAZIxN6Nrpt1BqdqHVevjVL9UwIAQ4dBXr1MaClj8Eyz17zb3mtFoIVtxkC/diMgC2Exvyi4oTQqYLTsi6jWyIu4ucPfyMZ3XMgUBKzjIWfuBxzssLh3+B4gEqwZxJeVQAqVyf0TeGxG/z1OBixVQjkWaM9l1NS5i/Egc4uXrFW/zdzDODjtME6UU0WqUPgMXg6d7PDw/wo99fAO7mzZ8IvUnygAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Setup Complete",title:"Setup Complete",src:"/static/a77a04de8b5f3da43762e4473f31c591/3cbba/5-createcomplete.png",srcSet:["/static/a77a04de8b5f3da43762e4473f31c591/7fc1e/5-createcomplete.png 288w","/static/a77a04de8b5f3da43762e4473f31c591/a5df1/5-createcomplete.png 576w","/static/a77a04de8b5f3da43762e4473f31c591/3cbba/5-createcomplete.png 1152w","/static/a77a04de8b5f3da43762e4473f31c591/0b124/5-createcomplete.png 1728w","/static/a77a04de8b5f3da43762e4473f31c591/c0f60/5-createcomplete.png 2074w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("h3",null,"Allow Anonymous Access to Artifactory"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the Artifactory dashboard from the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/getting-started/dashboard"}),Object(r.b)(o.a,{name:"dashboard",mdxType:"Globals"}))," and login")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on the ",Object(r.b)("strong",{parentName:"p"},"Settings")," tab on the left menu (the one with the gear icon), and then select\n",Object(r.b)("strong",{parentName:"p"},"Security"),"\n",Object(r.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABGElEQVQY05WPS0sCYRiFx1XrQCiCiJFWYqViYk0ZZVj4C6pVZBCtc9GVCFrVzwnTHIoWRX+kpDY1d8ZmnKe5LAwyogOHj/fwfg/vERLiFMmJPOLoJOtrVeTbe67qTa4bLVryHTd93GjKPDw+cXB0Rio9g1RcobhYoSAtI+R3F8htzyOWU9QuT9BUk+eXNu3XNxRNR9MN1D4OckXVeFfUnj8UhMyGxOxmiUQlxd7FIYFMywztOA7/lZBNL5HLlhDHMtRqp2FomRaG4UP917ZtOp0Onuf9acdxEQrFVabnyown8+wfn4dA3TD8CyOY67p0u93wQ6DfYIGCXWEwPkR8eIRYbICt6k5U2TT59OtGoF4d7/vAzzwAfgGRfpDk5fSQEQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Security Configuration",title:"Security Configuration",src:"/static/b732ce47a32934a5207a5e33dcb5b15a/3cbba/securitysettings.png",srcSet:["/static/b732ce47a32934a5207a5e33dcb5b15a/7fc1e/securitysettings.png 288w","/static/b732ce47a32934a5207a5e33dcb5b15a/a5df1/securitysettings.png 576w","/static/b732ce47a32934a5207a5e33dcb5b15a/3cbba/securitysettings.png 1152w","/static/b732ce47a32934a5207a5e33dcb5b15a/a3d24/securitysettings.png 1241w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check the ",Object(r.b)("inlineCode",{parentName:"p"},"Allow Anonymous Access")," check box and press ",Object(r.b)("strong",{parentName:"p"},"Save")))),Object(r.b)("h3",null,"Obtain the encrypted password"),Object(r.b)("p",null,"To enable the CI pipelines (",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/tools/continuous-integration"}),"Jenkins"),", ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/tools/continuous-integration-tekton"}),"Tekton"),", etc.)\nto store the Helm artifacts in the Artifactory repository, we need to obtain\nArtifactory’s encrypted password and save it where the pipeline can access the password — in the ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access"),"\nKubernetes secret in the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace in the Development Tools environment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Artifactory console, press the ",Object(r.b)("strong",{parentName:"p"},"Welcome, admin")," menu button in the top right corner of the console and select ",Object(r.b)("strong",{parentName:"p"},"Edit profile"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the User Profile: admin page, enter you Artifactory password and press ",Object(r.b)("strong",{parentName:"p"},"Unlock")),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"601px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQoz62SPUsEMRCG89Os7Kyu8gcKlofgR2Uj/gqvUG69bWRvk83ka5O8TjZkucpT8IUnM8yECbwT0R16ND72Hb6GI1yYYX04i/F+pdWEJoMKYdIEYx3CHH9FjliJMXFthsg5wzkHz1hr4fm1UjtHygl61pBBQgWFkAKKREoJlYyW/zQocr9oTx2uXjbYvF7j4vkSN++3dSD+rLycFAkP/RPu+0dsP+/wNu3qwIE8jozzvAjH5jo2m+Mp9oRW83wf7N1CqvjiYS8NDiMvxDjIiSC1waio5sy4RLNSezUflGKmJZZNl98hinf/oebxN7cKbCzUay83AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"API Key",title:"API Key",src:"/static/13e529470af59505b57fc76d0586f5ab/577a7/jfrogapikey.png",srcSet:["/static/13e529470af59505b57fc76d0586f5ab/7fc1e/jfrogapikey.png 288w","/static/13e529470af59505b57fc76d0586f5ab/a5df1/jfrogapikey.png 576w","/static/13e529470af59505b57fc76d0586f5ab/577a7/jfrogapikey.png 601w"],sizes:"(max-width: 601px) 100vw, 601px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("p",null,"Below, in the ",Object(r.b)("strong",{parentName:"p"},"Authentication Settings")," section, is the ",Object(r.b)("strong",{parentName:"p"},"Encrypted Password")," field."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("strong",{parentName:"p"},"Eye")," icon to view the encrypted password and press the ",Object(r.b)("strong",{parentName:"p"},"Cut & Paste")," icon to copy it"),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"550px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuElEQVQoz5WRiQqEMAxE+/+fKYi3iPc9yyukqMiyG3iQtE0607p93zWOo6Zp0jzPIs7z1HEct/wNC84YjoFFUSjLMuV5rjRNfQ1JkqiqKg3DoL7vA13Xib44jhVFURhKOBKUofAKqhlEvq6rlmXxWI7Ctm3VNM1NpWNj27Ybdtu/ESzXde0tYq8sS1+bujdQj0p6EcBasIxCe5crrNH4Bpdh3WoEMDy84TcL/+x5y89vv/LLmz3PfwCY9XOdnlac2wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/static/a9126a60fc81ab00711dd5e2212845b5/50322/viewapikey.png",srcSet:["/static/a9126a60fc81ab00711dd5e2212845b5/7fc1e/viewapikey.png 288w","/static/a9126a60fc81ab00711dd5e2212845b5/50322/viewapikey.png 550w"],sizes:"(max-width: 550px) 100vw, 550px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now we have obtained the ",Object(r.b)("strong",{parentName:"p"},"Encrypt")," key and had kept a copy of the\nPassword we changed on the initial setup wizard. We need to update the\nsecrets that stores these inside the cluster."))),Object(r.b)("h3",null,"Update the secret - OpenShift 4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the OpenShift 4 console, go to ",Object(r.b)("strong",{parentName:"p"},"Administrator")," > ",Object(r.b)("strong",{parentName:"p"},"Workloads")," > ",Object(r.b)("strong",{parentName:"p"},"Secrets"),". At the top, select the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," project and filter for ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory"),". Select ",Object(r.b)("strong",{parentName:"p"},"Edit Secret")," on ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access"),". (You do not need to base encode these values the OpenShift console does this for you.)\n",Object(r.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1006px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.09722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACeElEQVQ4y52S208TQRTGtzxJ0tAnMUiBtPSyhdZiAykXCVgsF6mtDQSJRh8UMSbG+FfwxAO3f9BoTHpju93d2d3ubj/nDGUjAV6c5JczczL7zTnfWWkiGkFmeBjL+Tym02mER0cRDocxODiIgYEBQSAQ8Pc+PBeg+CCIoVAIoaEhBINBSNFYHHJSRnYmh4ScwujYOBYWl3B2doajoyMcHx/j9PRUcHJy0oefKVL+/BwXFxc+UjqbQ35xGdncHCIxGcMjY6ju7OF/l5ScyiCZSmM8EkM0LuPR4zGUKlUwxlCv16EoisCyLNi2DYtj30G32xVI8vQT5GbzQoygCkvlKhynC13XfRHTNG9AD17HTqeDVqslzkIwlc5iIhrHZCLlC3qeh1qthkaj4dNsNv09iRAkQpVRB47jQCKxqcwMJiYTQpBa3i6/Fn6oqgrdMKBpmoAq1jRdRKOfp06uV6/Xg5Tg/snTGeFhJJbEw5EwXr6qiAtUJV26Dy4B03bBLIdHB67rQlp4toJCcUNMmYjzB/bfvqfn4PBW6MP7hGlppos2c9Hh0fV4hRvlHZSqe1heLWClUMTc/BIODr/CtmzuWUu0TYaTP0L8H0Hao18p+jmpUNwULa6urXPRNeTm5vHx4JALmtx0lUeLG27CMpmAMUNg+jAYuga13eZ/hAXpxfoWqrtvsFWq4DkXfTp7JWiYDn7+ruHXn/oNas026i0VqmZB1W10OG3NRKttQGf8PySx/XcfsLldFqJU6bfvP7gnQONSE5eVDoOiMhHNbg98Brfgs+Fe8paLm9uoVHdFddcefvr8BbYHKLoLlXmcXh8PiuHeyaV+NZi/GdxN6SR/E6cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/static/baf099ff7e1e093f55729f5d7260fd22/72da9/settingskeys.png",srcSet:["/static/baf099ff7e1e093f55729f5d7260fd22/7fc1e/settingskeys.png 288w","/static/baf099ff7e1e093f55729f5d7260fd22/a5df1/settingskeys.png 576w","/static/baf099ff7e1e093f55729f5d7260fd22/72da9/settingskeys.png 1006w"],sizes:"(max-width: 1006px) 100vw, 1006px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Update the values that you retrieved for the encrypt key and updated the admin password"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Add a key/value for ",Object(r.b)("inlineCode",{parentName:"li"},"ARTIFACTORY_ENCRYPT")," and set the value to your encrypt key value"),Object(r.b)("li",{parentName:"ul"},"Update the ",Object(r.b)("inlineCode",{parentName:"li"},"ARTIFACTORY_PASSWORD")," value with thew new admin password"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Save")," in OpenShift console ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"View the secret in the console and confirm that the visible value of ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRYPT")," matches the encrypted password shown in the Artifactory console")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On the command line, run ",Object(r.b)("inlineCode",{parentName:"p"},"igc credentials")," and verify that the Artifactory details have been updated"))),Object(r.b)("h3",null,"Update the secret - Kubernetes and OpenShift 3"),Object(r.b)("p",null,"To update the secret in Kuberentes or Openshift 3, navigate to the ",Object(r.b)("inlineCode",{parentName:"p"},"secret")," called ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access"),"\nin the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace and update the following values. You will need encode these value in base64 key before\nediting the secret."),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually"}),"Kubernetes secrets"),"\nstore data in base64 format. So to store Artifactory’s encrypted password in a secret, it needs to be encoded into\nbase64."),Object(r.b)("p",null,"Any base64 encoding tool will work. For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.base64encode.org/"}),"Base64 Encode")," website")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Paste the encrypted password into the online tool and press the ",Object(r.b)("strong",{parentName:"p"},"Encode")," button")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the field below, copy the encoded value into you clipboard or store it somewhere safe")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find the ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRYPT")," value (under ",Object(r.b)("inlineCode",{parentName:"p"},"data"),") and paste in the Artifactory base64 key into the field")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find the ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_PASSWORD")," value (under ",Object(r.b)("inlineCode",{parentName:"p"},"data"),") and paste in the"))),Object(r.b)("h2",null,"Rerun the Pipeline"),Object(r.b)("p",null,"Previously, when you deployed you first app, the pipeline’s Package Helm Chart stage didn’t store the chart because\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRYPT")," property was not set. Now that it has been set, rerun your pipeline and check that the Helm\nchart for your app is stored correctly in Artifactory with matching semantic version information."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Artifactory console, select the Artifacts page and expand the ",Object(r.b)("inlineCode",{parentName:"p"},"generic-local")," repository"),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABW0lEQVQoz41Qy0rDQBTNF7kSBUGhVFyoWBARty5qq0KluhEX7gSXfoMI/oJ9i78iVGybZJLpZCbJJMe5Y6MLW/DC4b7PPTPO0vIadvcPUSrvYHvvCJWDY9zdP6DXf8VLq4tOd4B2p4+WQXsGilvtHvqDNzw+PWNzq4LV9TJWNkpwmte38IMQ78MhPscTBHyKcCoQhBxBwOF5DNzkIpJzwWezPgvADI/TuLpBrDOMfQahYsRZDplqyCSFSASYYtC5xn8syzI49fNLaBNwzpGmKfI8t6CmVBKJTmyuzZEkSeYTmf7EiJGm79TOmrZQEJJZQoMoiqCksjXqe54HpRSklL/ezPjTCL0P17zIEFbrF0i1BmMMcRxbsm/5uc1pkYzIiaCokS/iQrk2PM7J6YUtjEajH5UFaEEIYQcpJ7/ISEhqvsWp1hq2QNfDMLRK7FMNGR1wXffPdywCEX4BfnBMl/B0Y7UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/static/198eae5ba5dc1fb394205d3f2167cd39/3cbba/artifact-repo-browser.png",srcSet:["/static/198eae5ba5dc1fb394205d3f2167cd39/7fc1e/artifact-repo-browser.png 288w","/static/198eae5ba5dc1fb394205d3f2167cd39/a5df1/artifact-repo-browser.png 576w","/static/198eae5ba5dc1fb394205d3f2167cd39/3cbba/artifact-repo-browser.png 1152w","/static/198eae5ba5dc1fb394205d3f2167cd39/46052/artifact-repo-browser.png 1382w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("p",null,"You will see a folder named after your resource group containing the tar file for a Helm chart."),Object(r.b)("h2",null,"Conclusion"),Object(r.b)("p",null,"Artifactory is now set up in your ",Object(r.b)(o.a,{name:"env",mdxType:"Globals"})," and CI pipelines can\nstore Helm charts in Artifactory repository. Artifactory can now be used as a\nHelm repository for CD tools like ArgoCD and IBM Cloud Pak for Multi\nCloud\nManagement."))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-artifactory-setup-index-mdx-04df8dd9b5ad96dd3c53.js.map