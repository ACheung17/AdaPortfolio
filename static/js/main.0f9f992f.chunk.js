(this["webpackJsonpmy-website-react"]=this["webpackJsonpmy-website-react"]||[]).push([[0],{35:function(e,t,a){e.exports=a(54)},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),s=a(7),m=a(65),o=a(66),i=a(67);var u=function(){return l.a.createElement("div",null,l.a.createElement(m.a,{expand:"md"},l.a.createElement(o.a,{className:"mx-auto",navbar:!0},l.a.createElement(i.a,{href:"#/aboutme"},"AboutMe"),l.a.createElement(i.a,{href:"#/projects"},"Projects"),l.a.createElement(i.a,{href:"AdaCheungResume.pdf"},"Resume"))))};var d=function(){return l.a.createElement("section",{id:"intro"},l.a.createElement(u,null),l.a.createElement("div",{className:"intro-div container"},l.a.createElement("h1",{style:{fontSize:"7.5rem"}},"I'm Ada"),l.a.createElement("h2",{className:"intro-sub"},"... an aspiring web developer.")))},E=a(23),p=a(33),h=a(68),b=a(69),g=a(70),N=[{src:"images/letsEat-app.png",altText:"Let's Eat",caption:"Let's Eat",location:"https://github.com/ACheung17/LetsEat-APP",appLink:"https://acheung17.github.io/LetsEat-APP/#/"},{src:"images/letsEat.jpg",altText:"Let's Eat (REST API)",caption:"Let's Eat (REST API)",location:"https://github.com/ACheung17/LetsEat",appLink:"https://infinite-dawn-76227.herokuapp.com/restaurants"},{src:"images/postNote.png",altText:"Post Notes",caption:"Post Notes",location:"https://github.com/ACheung17/PostNotes",appLink:"https://acheung17.github.io/PostNotes/"}];var v=function(){var e=Object(n.useState)(0),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(E.a)(c,2),m=s[0],o=s[1],i=function(){if(!m){var e=a===N.length-1?0:a+1;r(e)}},u=function(){if(!m){var e=0===a?N.length-1:a-1;r(e)}},d=N.map((function(e){return l.a.createElement(p.a,{onExiting:function(){return o(!0)},onExited:function(){return o(!1)},key:e.src},l.a.createElement("img",{src:e.src,alt:e.altText,className:"project-img"}),l.a.createElement("div",{className:"caption"},l.a.createElement("h5",null,e.caption),l.a.createElement(h.a,{className:"project-btn",outline:!0,color:"dark",href:e.appLink,target:"_blank"},"VIEW PROJECT"),l.a.createElement(h.a,{className:"project-btn",outline:!0,color:"dark",href:e.location,target:"_blank"},"VIEW CODE")))}));return l.a.createElement("section",{id:"projects",className:"white-section"},l.a.createElement("div",{className:"myContainer"},l.a.createElement("h2",null,"Highlights"),l.a.createElement(b.a,{activeIndex:a,next:i,previous:u},d,l.a.createElement(g.a,{direction:"prev",directionText:"Previous",onClickHandler:u}),l.a.createElement(g.a,{direction:"next",directionText:"Next",onClickHandler:i}))))},f=a(31),y=a.n(f),w=a(30),k=a.n(w),x=a(32),A=a.n(x);var C=function(){return l.a.createElement("section",{id:"connect",className:"white-section"},l.a.createElement("div",{className:"myContainer centre-text"},l.a.createElement("h2",null,"Let's connect"),l.a.createElement("p",null,"I'm currently open to any opportunities, and would love to make meaningful contributions to your team and/or projects."),l.a.createElement("p",null," Or even feedback on this website! Let me know what you liked or how I can improve it."),l.a.createElement("p",null,"Send me a message on LinkedIn, or through email."),l.a.createElement("div",{class:"socials"},l.a.createElement("a",{href:"https://www.linkedin.com/in/ada--cheung/",target:"__blank",className:"social"},l.a.createElement(k.a,null)),l.a.createElement("a",{href:"https://github.com/ACheung17",target:"__blank",className:"social"},l.a.createElement(y.a,null)),l.a.createElement("a",{href:"mailto:ada.cheung96@gmail.com",target:"__blank",className:"social"},l.a.createElement(A.a,null)))))};var P=function(e){var t=(new Date).getFullYear(),a=l.a.createElement("p",null,"This website was created with ReactJS.");return l.a.createElement("footer",{id:"footer",className:"colored-section"},l.a.createElement("div",{className:"container centre-text"},e.home&&a,l.a.createElement("p",null,"\xa9\xa0Copyright\xa0",t," Ada Cheung")))};var j=function(){return l.a.createElement("div",{id:"homepage"},l.a.createElement(d,null),l.a.createElement(v,null),l.a.createElement(C,null),l.a.createElement(P,{home:!0}))};var L=function(e){return l.a.createElement("div",null,l.a.createElement(m.a,{className:"sub-nav"},l.a.createElement(o.a,{className:"mr-auto",navbar:!0},l.a.createElement(i.a,{href:"#/"},l.a.createElement("img",{className:"logo",src:"/images/AC-dark.png",alt:"logo"}))),e.moreLinks&&l.a.createElement(i.a,{className:"subnavlink",href:"#/projects"},"More Projects")))};var I=function(){return l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement("div",{id:"aboutme",className:"myContainer"},l.a.createElement("h2",null,"About me"),l.a.createElement("p",null,"Hi there and welcome to my website! I studied Computer Science at York University and recently graduated. Currently, I'm focused on learning more and improving my ",l.a.createElement("em",null,"web development"),"skills."),l.a.createElement("p",null,"I love learning a variety of things. Here's some of the topics I've been learning about during quarantine,",l.a.createElement("ul",null,l.a.createElement("li",null,"Web Development"),l.a.createElement("li",null,"SQL & Databases"),l.a.createElement("li",null,"Digital Forensics"),l.a.createElement("li",null,"Computer Networking"))),l.a.createElement("p",null,"Besides from staring at the screen, I also enjoy,",l.a.createElement("ul",null,l.a.createElement("li",null,"Cooking"),l.a.createElement("li",null,"Exercising "),l.a.createElement("li",null,"Painting "),l.a.createElement("li",null,"DIYs")))),l.a.createElement(P,null))};a(71),a(72),a(73);var _=function(){return l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement("div",{className:"album bg-light"},l.a.createElement("div",{className:"myContainer"},l.a.createElement("h2",null,"Projects"),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card mb-4 shadow-sm"},l.a.createElement("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:"images/letsEat-app.png",alt:"Let's Eat Web App"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{class:"card-title"},"Let's Eat"),l.a.createElement("p",{className:"card-text"},"Let's Eat is a web app that helps you decide a restaurant for you next meal."),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"btn-group"},l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://acheung17.github.io/LetsEat-APP/#/",role:"button",target:"_blank",rel:"noopener noreferrer"},"App"),l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://github.com/ACheung17/LetsEat-APP",role:"button",target:"_blank",rel:"noopener noreferrer"},"Code")),l.a.createElement("small",{className:"text-muted"},"React.js"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card mb-4 shadow-sm"},l.a.createElement("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:"images/letsEat.jpg",alt:"Let's Eat REST API"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{class:"card-title"},"Let's Eat (REST API)"),l.a.createElement("p",{className:"card-text"},"Database of frequently visited restaurants. Data can be request via the RestController."),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"btn-group"},l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://infinite-dawn-76227.herokuapp.com/restaurants",role:"button",target:"_blank",rel:"noopener noreferrer"},"App"),l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://github.com/ACheung17/LetsEat-RESTAPI",role:"button",target:"_blank",rel:"noopener noreferrer"},"Code")),l.a.createElement("small",{className:"text-muted"},"Spring Boot"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card mb-4 shadow-sm"},l.a.createElement("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:"images/postNote.png",alt:"Post Notes"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{class:"card-title"},"Post Notes"),l.a.createElement("p",{className:"card-text"},"An app for users to create virtual memos to remind themselves of daily tasks."),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"btn-group"},l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://acheung17.github.io/PostNotes/",role:"button",target:"_blank",rel:"noopener noreferrer"},"App"),l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://github.com/ACheung17/PostNotes",role:"button",target:"_blank",rel:"noopener noreferrer"},"Code")),l.a.createElement("small",{className:"text-muted"},"React.js"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card mb-4 shadow-sm"},l.a.createElement("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:"images/todolist.png",alt:"To-Do List"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{class:"card-title"},"To-Do List"),l.a.createElement("p",{className:"card-text"},"A to-do list application where users can add and delete items off a virtual checklist."),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"btn-group"},l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://acheung17.github.io/PostNotes/",role:"button",target:"_blank",rel:"noopener noreferrer"},"App"),l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://github.com/ACheung17/PostNotes",role:"button",target:"_blank",rel:"noopener noreferrer"},"Code")),l.a.createElement("small",{className:"text-muted"},"Node.js"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card mb-4 shadow-sm"},l.a.createElement("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:"images/signupPage.png",alt:"Newsletter Subscription"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{class:"card-title"},"Newsletter Subscription"),l.a.createElement("p",{className:"card-text"},"A Newsletter Subscription application hosted with MailChimp."),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("div",{className:"btn-group"},l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://polar-sands-98621.herokuapp.com/",role:"button",target:"_blank",rel:"noopener noreferrer"},"App"),l.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"https://github.com/ACheung17/NewsletterSubscription",role:"button",target:"_blank",rel:"noopener noreferrer"},"Code")),l.a.createElement("small",{className:"text-muted"},"Node.js"))))))),l.a.createElement("section",{class:"jumbotron text-center"},l.a.createElement("div",{class:"container"},l.a.createElement("p",{class:"lead text-muted"},"Please visit my GitHub for more projects and their code!"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/ACheung17?tab=repositories",class:"btn btn-primary my-2"},"Projects on GitHub")),l.a.createElement(P,null)))))};var S=function(){return l.a.createElement("div",null,l.a.createElement(s.a,{path:"/",exact:!0,component:j}),l.a.createElement(s.a,{path:"/aboutme",exact:!0,component:I}),l.a.createElement(s.a,{path:"/projects",exact:!0,component:_}))},T=(a(52),a(20));c.a.render(l.a.createElement(T.a,null,l.a.createElement(S,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0f9f992f.chunk.js.map