"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8513],{83086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=n(86070),i=n(76113);const l={},r="Pull Request Notice",o={id:"contribution_guide/pull-request",title:"Pull Request Notice",description:"Preface",source:"@site/community/contribution_guide/pull-request.md",sourceDirName:"contribution_guide",slug:"/contribution_guide/pull-request",permalink:"/zh-CN/community/contribution_guide/pull-request",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"E2E Test Contribution Guide",permalink:"/zh-CN/community/contribution_guide/e2e-guide"},next:{title:"\u6587\u6863\u8bf4\u660e",permalink:"/zh-CN/community/submit_guide/document"}},d={},c=[{value:"Preface",id:"preface",level:2},{value:"Specification",id:"specification",level:2},{value:"Pull Request Title",id:"pull-request-title",level:3},{value:"Pull Request Branch",id:"pull-request-branch",level:3},{value:"Pull Request Content",id:"pull-request-content",level:3},{value:"Pull Request Code Style",id:"pull-request-code-style",level:3},{value:"Question",id:"question",level:3}];function u(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pull-request-notice",children:"Pull Request Notice"}),"\n",(0,s.jsx)(t.h2,{id:"preface",children:"Preface"}),"\n",(0,s.jsx)(t.p,{children:"Pull Request is a way of software cooperation, which is a process of bringing code involving different functions into the trunk. During this process, the code can be discussed, reviewed, and modified."}),"\n",(0,s.jsx)(t.p,{children:"In Pull Request, we try not to discuss the implementation of the code. The general implementation of the code and its logic should be determined in Issue. In the Pull Request, we only focus on the code format and code specification, so as to avoid wasting time caused by different opinions on implementation."}),"\n",(0,s.jsx)(t.h2,{id:"specification",children:"Specification"}),"\n",(0,s.jsx)(t.h3,{id:"pull-request-title",children:"Pull Request Title"}),"\n",(0,s.jsxs)(t.p,{children:["Title Format: [",(0,s.jsx)(t.code,{children:"Pull Request Type"}),"-",(0,s.jsx)(t.code,{children:"Issue No"}),"][",(0,s.jsx)(t.code,{children:"Module Name"}),"] ",(0,s.jsx)(t.code,{children:"Pull Request Description"})]}),"\n",(0,s.jsxs)(t.p,{children:["The corresponding relationship between ",(0,s.jsx)(t.code,{children:"Pull Request Type"})," and ",(0,s.jsx)(t.code,{children:"Issue Type"})," is as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'<table>\n    <thead>\n        <tr>\n            <th style="width: 10%; text-align: center;">Issue Type</th>\n            <th style="width: 20%; text-align: center;">Pull Request Type</th>\n            <th style="width: 20%; text-align: center;">Example(Suppose Issue No is 3333)</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td style="text-align: center;">Feature</td>\n            <td style="text-align: center;">Feature</td>\n            <td style="text-align: center;">[Feature-3333][server] Implement xxx</td>\n        </tr>\n        <tr>\n            <td style="text-align: center;">Bug</td>\n            <td style="text-align: center;">Fix</td>\n            <td style="text-align: center;">[Fix-3333][ui] Fix xxx</td>\n        </tr>\n        <tr>\n            <td style="text-align: center;">Improvement</td>\n            <td style="text-align: center;">Improvement</td>\n            <td style="text-align: center;">[Improvement-3333][alert] Improve the performance of xxx</td>\n        </tr>\n        <tr>\n            <td style="text-align: center;">Test</td>\n            <td style="text-align: center;">Test</td>\n            <td style="text-align: center;">[Test-3333][api] Add the e2e test of xxx</td>\n        </tr>\n        <tr>\n            <td style="text-align: center;">Doc</td>\n            <td style="text-align: center;">Doc</td>\n            <td style="text-align: center;">[Doc-3333] Improve xxx</td>\n        </tr>\n        <tr>\n            <td style="text-align: center;">E2E</td>\n            <td style="text-align: center;">E2E</td>\n            <td style="text-align: center;">[E2E-3333] Implement xxx</td>\n        </tr>\n        <tr>\n            <td style="text-align: center;">CI</td>\n            <td style="text-align: center;">CI</td>\n            <td style="text-align: center;">[CI] Improve xxx</td>\n        </tr>\n        <tr>\n            <td style="text-align: center;">Chore</td>\n            <td style="text-align: center;">Chore</td>\n            <td style="text-align: center;">[Chore] Improve xxx</td>\n        </tr>\n    </tbody>\n</table>\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Issue No"})," refers to the Issue number corresponding to the current Pull Request to be resolved, ",(0,s.jsx)(t.code,{children:"Module Name"})," is the same as the ",(0,s.jsx)(t.code,{children:"Module Name"})," of Issue."]}),"\n",(0,s.jsx)(t.h3,{id:"pull-request-branch",children:"Pull Request Branch"}),"\n",(0,s.jsxs)(t.p,{children:["Branch name format: ",(0,s.jsx)(t.code,{children:"Pull Request type"}),"-",(0,s.jsx)(t.code,{children:"Issue number"}),". e.g. Feature-3333"]}),"\n",(0,s.jsx)(t.h3,{id:"pull-request-content",children:"Pull Request Content"}),"\n",(0,s.jsx)(t.p,{children:"Please refer to the commit message section."}),"\n",(0,s.jsx)(t.h3,{id:"pull-request-code-style",children:"Pull Request Code Style"}),"\n",(0,s.jsxs)(t.p,{children:["StreamPark uses ",(0,s.jsx)(t.code,{children:"Spotless"})," to automatically fix code style and formatting errors,"]}),"\n",(0,s.jsx)(t.h3,{id:"question",children:"Question"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"How to deal with one Pull Request to many Issues scenario."}),"\n",(0,s.jsx)(t.p,{children:"First of all, there are fewer scenarios for one Pull Request to many Issues.\nThe root cause is that multiple issues need to do the same thing.\nUsually, there are two solutions to this scenario: the first is to merge multiple issues with into the same issue, and then close the other issues;\nthe second is multiple issues have subtle differences.\nIn this scenario, the responsibilities of each issue can be clearly divided. The type of each issue is marked as Sub-Task, and then these sub task type issues are associated with one issue.\nAnd each Pull Request is submitted should be associated with only one issue of a sub task."}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},76113:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(30758);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);