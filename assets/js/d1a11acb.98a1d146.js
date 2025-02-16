"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[7849],{72134:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(86070),s=i(76113);const t={},l=void 0,o={type:"mdx",permalink:"/download/release-note/2.1.0",source:"@site/src/pages/download/release-note/2.1.0.md",description:"Release Notes 2.1.0",frontMatter:{},unlisted:!1},a={},d=[{value:"Release Notes 2.1.0",id:"release-notes-210",level:2},{value:"Features",id:"features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bugfix",id:"bugfix",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"release-notes-210",children:"Release Notes 2.1.0"}),"\n",(0,r.jsx)("div",{style:{height:"30px"}}),"\n",(0,r.jsx)(n.p,{children:"Apache StreamPark 2.1.0 is an important upgrade version. In this current version, we have upgraded many dependencies version to address vulnerabilities and risks, support Flink 1.17. Numerous improvements have been incorporated, and many bugs have been fixed. Stability and security have been further improved."}),"\n",(0,r.jsx)("div",{style:{height:"30px"}}),"\n",(0,r.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Support Flink 1.17 (#2533)"}),"\n",(0,r.jsx)(n.li,{children:"Support external link (#2375)"}),"\n",(0,r.jsx)(n.li,{children:"Support openapi3 (#2459)"}),"\n",(0,r.jsx)(n.li,{children:"Support yarn-queue management. (#2317)"}),"\n",(0,r.jsx)(n.li,{children:"Refactor settings page (#2545)"}),"\n",(0,r.jsx)(n.li,{children:"Support trigger savepoint manually (#2268)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"improvements",children:"Improvements"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Upgrade Hadoop Version to 3.3.4 (#2650)"}),"\n",(0,r.jsx)(n.li,{children:"Upgrade springboot version to 2.7.11 (#2685)"}),"\n",(0,r.jsx)(n.li,{children:"Upgrade mybatis-plus to 3.5.3.1 (#2666)"}),"\n",(0,r.jsx)(n.li,{children:"FlinkHome check improvement (#2548)"}),"\n",(0,r.jsx)(n.li,{children:"Ingress multi-version adaptation (#2704)"}),"\n",(0,r.jsx)(n.li,{children:"Start-script improvement (#2715)"}),"\n",(0,r.jsx)(n.li,{children:"Reset password improvement(#2696)"}),"\n",(0,r.jsx)(n.li,{children:"Workspace local permission check improvement(#2557)"}),"\n",(0,r.jsx)(n.li,{children:"DDL schema column length improvement (#2680)"}),"\n",(0,r.jsx)(n.li,{children:"Trigger savepoint improvement (#2679)"}),"\n",(0,r.jsx)(n.li,{children:"FlinkHome delete support (#2615)"}),"\n",(0,r.jsx)(n.li,{children:"Start script and ldap config improvement (#2640)"}),"\n",(0,r.jsx)(n.li,{children:"Add more constraints the user permission (#2634)"}),"\n",(0,r.jsx)(n.li,{children:"Consistently use pnpm in build and CI  (#2507)"}),"\n",(0,r.jsx)(n.li,{children:"Record more info of application log (#2472)"}),"\n",(0,r.jsx)(n.li,{children:"i18n improvement (#2346)"}),"\n",(0,r.jsx)(n.li,{children:"Spark app support user args (#2627)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bugfix",children:"Bugfix"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Trigger savepoint timeout bug fixed. (#2575)"}),"\n",(0,r.jsx)(n.li,{children:"Postgresql scheme data type error #2649 (#2660)"}),"\n",(0,r.jsx)(n.li,{children:"No log output in kubernetes session cluster bug fixed (#2599)"}),"\n",(0,r.jsx)(n.li,{children:"The restartSize in the application cannot be set to 0 (#2491)"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"state.checkpoints.num-retained"})," is invalid (#2333)"]}),"\n",(0,r.jsx)(n.li,{children:"Yarn per job mode the yarn-queue parameter is not work #2669 (#2670)"}),"\n",(0,r.jsx)(n.li,{children:"Modifications should be disabled when building a project (#2596) (#2597)"}),"\n",(0,r.jsx)(n.li,{children:"The editor of the system setting module does not have permission control (#2637)"}),"\n",(0,r.jsx)(n.li,{children:"Delete application will not remove k8s watching (#2598)"}),"\n",(0,r.jsx)(n.li,{children:"Duplicate dependencies in console module (#2519)"}),"\n",(0,r.jsx)(n.li,{children:"The application can be started repeatedly by calling the api #2488 (#2499)"}),"\n",(0,r.jsx)(n.li,{children:"Application parameter restartSize cannot be updated to the database #2482 (#2484)"}),"\n",(0,r.jsx)(n.li,{children:"login failed when ldap password was changed (#2478)"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},76113:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(30758);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);