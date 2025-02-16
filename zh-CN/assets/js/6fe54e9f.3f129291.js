"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[9273],{34115:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(86070),n=i(76113);const r={},a="SPIP",o={id:"contribution_guide/SPIP",title:"SPIP",description:"StreamPark Improvement Proposal(SPIP) introduce major improvements to the Apache StreamPark codebase. It is",source:"@site/community/contribution_guide/SPIP.md",sourceDirName:"contribution_guide",slug:"/contribution_guide/SPIP",permalink:"/zh-CN/community/contribution_guide/SPIP",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"License Notice",permalink:"/zh-CN/community/contribution_guide/SP-License"},next:{title:"Commit Message Notice",permalink:"/zh-CN/community/contribution_guide/commit-message"}},l={},c=[{value:"What is considered as SPIP",id:"what-is-considered-as-spip",level:2},{value:"Current SPIPs",id:"current-spips",level:3},{value:"Past SPIPs",id:"past-spips",level:3},{value:"SPIP Process",id:"spip-process",level:2},{value:"Create GitHub Issue",id:"create-github-issue",level:3},{value:"Send Discuss Mail",id:"send-discuss-mail",level:3},{value:"Work On It, Or Create Subtask For It",id:"work-on-it-or-create-subtask-for-it",level:3},{value:"Close After It Done",id:"close-after-it-done",level:3},{value:"An Example For SPIP",id:"an-example-for-spip",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"spip",children:"SPIP"}),"\n",(0,t.jsx)(s.p,{children:"StreamPark Improvement Proposal(SPIP) introduce major improvements to the Apache StreamPark codebase. It is\nnot for small incremental improvements, and the purpose of SPIP is to notice and inform community the finished or coming\nbig feature for Apache StreamPark."}),"\n",(0,t.jsx)(s.h2,{id:"what-is-considered-as-spip",children:"What is considered as SPIP"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Any major new feature, major improvement, introduce or remove components"}),"\n",(0,t.jsx)(s.li,{children:"Any major change of public interfaces, such as API endpoints, web ui huge change"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"When the change in doubt and any committer thinks it should be SPIP, it does."}),"\n",(0,t.jsxs)(s.p,{children:["We use GitHub Issue and Apache mail thread to record and hold SPIP, for more detail you could go to section\n",(0,t.jsx)(s.a,{href:"#current-SPIPs",children:"current SPIPs"})," and ",(0,t.jsx)(s.a,{href:"#past-SPIPs",children:"past SPIPs"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"As a SPIP, it should:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Have a mail thread title started with ",(0,t.jsx)(s.code,{children:"[DISCUSS]"})," in ",(0,t.jsx)(s.a,{href:"mailto:dev@streampark.apache.org",children:"dev@streampark.apache.org"})]}),"\n",(0,t.jsxs)(s.li,{children:["Have a GitHub Issue labeled with ",(0,t.jsx)(s.code,{children:"SPIP"}),", and including the mail thread link in the description."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"current-spips",children:"Current SPIPs"}),"\n",(0,t.jsxs)(s.p,{children:["Current SPIPs including all SPIP still work-in-progress, you could see in ",(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues?q=is%3Aissue+is%3Aopen+label%3A%22SPIP%22",children:"current SPIPs"})]}),"\n",(0,t.jsx)(s.h3,{id:"past-spips",children:"Past SPIPs"}),"\n",(0,t.jsxs)(s.p,{children:["Past SPIPs including all SPIP already done or retired for some reason, you could see in ",(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues?q=is%3Aissue+is%3Aclosed+label%3A%22SPIP%22+",children:"past SPIPs"})]}),"\n",(0,t.jsx)(s.h2,{id:"spip-process",children:"SPIP Process"}),"\n",(0,t.jsx)(s.h3,{id:"create-github-issue",children:"Create GitHub Issue"}),"\n",(0,t.jsx)(s.p,{children:"All SPIP should start with GitHub Issue"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:['If you pretty sure your issue is SPIP, you could click and choose "SPIP" in\n',(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues/new/choose",children:"GitHub Issue"})]}),"\n",(0,t.jsxs)(s.li,{children:['If you not sure about your issue is SPIP or not, you could click and choose "Feature request" in\n',(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues/new/choose",children:"GitHub Issue"}),". StreamPark maintainer team would add label ",(0,t.jsx)(s.code,{children:"SPIP"}),", mention you in the\nissue and lead you to this document when they think it should be SPIP."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["You should add special prefix ",(0,t.jsx)(s.code,{children:"[SPIP-XXX]"}),", ",(0,t.jsx)(s.code,{children:"XXX"})," stand for the id SPIP. It's auto increment, and you could find the next\ninteger in ",(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues?q=is%3Aissue+label%3A%22SPIP%22+",children:"All SPIPs"})," issues."]}),"\n",(0,t.jsx)(s.h3,{id:"send-discuss-mail",children:"Send Discuss Mail"}),"\n",(0,t.jsxs)(s.p,{children:['After issue labeled with "SPIP", you should send an email to ',(0,t.jsx)(s.a,{href:"mailto:dev@streampark.apache.org",children:"dev@streampark.apache.org"}),".\nDescribe the purpose, and the draft design about your idea."]}),"\n",(0,t.jsx)(s.p,{children:"Here is the template for mail"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Title: ",(0,t.jsx)(s.code,{children:"[DISCUSS][SPIP-XXX] <CHANGE-TO-YOUR-LOVELY-PROPOSAL-TITLE>"}),", change ",(0,t.jsx)(s.code,{children:"XXX"})," to special integer you just change in\n",(0,t.jsx)(s.a,{href:"#create-github-issue",children:"GitHub Issue"}),", and also change proposal title."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Content:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Hi community,\n\n<CHANGE-TO-YOUR-PROPOSAL-DETAIL>\n\nI already add a GitHub Issue for my proposal, which you could see in <CHANGE-TO-YOUR-GITHUB-ISSUE-LINK>.\n\nLooking forward any feedback for this thread.\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["After community discuss and all of them think it worth as SPIP, you could ",(0,t.jsx)(s.a,{href:"#work-on-it-or-create-subtask-for-it",children:"work on it"}),'.\nBut if community think it should not be SPIP or even this change should not be included to StreamPark, maintainers\nterminate mail thread and remove label "SPIP" for GitHub Issue, or even close issue if it should not change.']}),"\n",(0,t.jsx)(s.h3,{id:"work-on-it-or-create-subtask-for-it",children:"Work On It, Or Create Subtask For It"}),"\n",(0,t.jsxs)(s.p,{children:["When your proposal pass in the mail thread, you could make your hand dirty and start the work. You could submit related\npull requests in GitHub if change should in one single commit. What's more, if proposal is too huge in single commit, you\ncould create subtasks in GitHub Issue like ",(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues/3905",children:"SPIP-1"}),", and separate into multiple commit."]}),"\n",(0,t.jsx)(s.h3,{id:"close-after-it-done",children:"Close After It Done"}),"\n",(0,t.jsxs)(s.p,{children:["When SPIP is finished and all related PR were merged, you should reply the mail thread you created in\n",(0,t.jsx)(s.a,{href:"#send-discuss-mail",children:"step two"})," to notice community the result of the SPIP. After that, this SPIP GitHub Issue would be\nclosed and transfer from ",(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues?q=is%3Aissue+is%3Aopen+label%3A%22SPIP%22",children:"current SPIPs"})," to ",(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues?q=is%3Aissue+is%3Aclosed+label%3A%22SPIP%22+",children:"past SPIPs"}),", but you could still find it in ",(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues?q=is%3Aissue+label%3A%22SPIP%22+",children:"All SPIPs"})]}),"\n",(0,t.jsx)(s.h2,{id:"an-example-for-spip",children:"An Example For SPIP"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/apache/streampark/issues/3905",children:"[SPIP-1][Feature][Parent] Suggest add HA for StreamPark"}),": Have multiple subtasks and Projects on it."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},76113:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var t=i(30758);const n={},r=t.createContext(n);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);