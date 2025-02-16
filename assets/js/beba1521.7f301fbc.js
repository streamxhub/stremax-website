"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4314],{24601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(86070),i=t(76113);const o={id:"k8s-pvc-integration",title:"Kubernetes PVC Resource Usage",sidebar_position:3},r=void 0,c={id:"platform/k8s/k8s-pvc-integration",title:"Kubernetes PVC Resource Usage",description:"Resource usage instructions of K8s PVC",source:"@site/docs/platform/k8s/3.k8s-pvc-integration.md",sourceDirName:"platform/k8s",slug:"/platform/k8s/k8s-pvc-integration",permalink:"/docs/platform/k8s/k8s-pvc-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/docs/platform/k8s/3.k8s-pvc-integration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"k8s-pvc-integration",title:"Kubernetes PVC Resource Usage",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using Hadoop Resource in Flink on Kubernetes",permalink:"/docs/platform/k8s/hadoop-resource-integration"},next:{title:"Version Upgrade Guide",permalink:"/docs/platform/version-upgrade"}},a={},d=[{value:"Resource usage instructions of K8s PVC",id:"resource-usage-instructions-of-k8s-pvc",level:2}];function p(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"resource-usage-instructions-of-k8s-pvc",children:"Resource usage instructions of K8s PVC"}),"\n",(0,s.jsx)(n.p,{children:"The support for pvc resource(mount file resources such as checkpoint/savepoint/logs and so on) is based on pod-template at current version\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["Users do not have to concern the Native-Kubernetes Session.It will be processed when Session Cluster is constructed .Native-Kubernetes Application can be constructed by configuring on StreamPark webpage using ",(0,s.jsx)(n.code,{children:"pod-template"}),"\u3001",(0,s.jsx)(n.code,{children:"jm-pod-template"}),"\u3001",(0,s.jsx)(n.code,{children:"tm-pod-template"}),"."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["Here is a brief example. Two PVC ",(0,s.jsx)(n.code,{children:"flink-checkpoint"}),"\uff0c ",(0,s.jsx)(n.code,{children:"flink-savepoint"})," should be constructed in advance"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Kubernetes PVC",src:t(14910).A+"",width:"2476",height:"1842"})}),"\n",(0,s.jsx)(n.p,{children:"'pod-template' can be configured as below \uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-template\nspec:\n  containers:\n    - name: flink-main-container\n      volumeMounts:\n        - name: checkpoint-pvc\n          mountPath: /opt/flink/checkpoints\n        - name: savepoint-pvc\n          mountPath: /opt/flink/savepoints\n  volumes:\n    - name: checkpoint-pvc\n      persistentVolumeClaim:\n        claimName: flink-checkpoint\n    - name: savepoint-pvc\n      persistentVolumeClaim:\n        claimName: flink-savepoint\n"})}),"\n",(0,s.jsxs)(n.p,{children:["There are three ways to provide the dependency when using ",(0,s.jsx)(n.code,{children:"rocksdb-backend"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Flink Base Docker Image contains the dependency\uff08user fix the dependency conflict by themself\uff09;"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Put the dependency ",(0,s.jsx)(n.code,{children:"flink-statebackend-rocksdb_xx.jar"})," to  the path ",(0,s.jsx)(n.code,{children:"Workspace/jars"})," in StreamPark ;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the rockdb-backend dependency to StreamPark Dependency(StreamPark will fix the conflict automatically) \uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"rocksdb dependency",src:t(17776).A+"",width:"1698",height:"926"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"We will provide a graceful way to generate pod-template configuration to simplify the procedure of k8s-pvc mounting in future version."})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},14910:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/k8s_pvc-cdeee4dafe036102e017aad3b6c13f5d.png"},17776:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/rocksdb_dependency-932be3682bef8d8cd169522c00cfd12b.png"},76113:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(30758);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);