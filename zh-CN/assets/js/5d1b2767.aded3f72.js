"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[7869],{93525:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=n(86070),t=n(76113);const i={id:"introduction",title:"\u7b80\u4ecb",sidebar_position:1},c="\u4ec0\u4e48\u662f Apache StreamPark\u2122 ?",a={id:"get-started/introduction",title:"\u7b80\u4ecb",description:"\ud83d\ude80 \u4e00\u4e2a\u795e\u5947\u7684\u6846\u67b6\uff0c\u8ba9\u6d41\u5904\u7406\u66f4\u7b80\u5355\uff01",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/get-started/1.introduction.md",sourceDirName:"get-started",slug:"/get-started/introduction",permalink:"/zh-CN/docs/get-started/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/get-started/1.introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"\u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/zh-CN/docs/get-started/quick-start"}},h={},o=[{value:"\u6838\u5fc3\u7279\u6027",id:"\u6838\u5fc3\u7279\u6027",level:2},{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",level:2},{value:"StreamPark Core",id:"streampark-core",level:3},{value:"StreamPark Console",id:"streampark-console",level:3}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\u4ec0\u4e48\u662f-apache-streampark-",children:"\u4ec0\u4e48\u662f Apache StreamPark\u2122 ?"}),"\n",(0,s.jsxs)(r.p,{children:["\ud83d\ude80 ",(0,s.jsx)(r.strong,{children:"\u4e00\u4e2a\u795e\u5947\u7684\u6846\u67b6\uff0c\u8ba9\u6d41\u5904\u7406\u66f4\u7b80\u5355\uff01"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["\u5728\u5b9e\u65f6\u5904\u7406\u9886\u57df\uff0cApache Spark\u2122 \u548c Apache Flink\xae \u4ee3\u8868\u7740\u5de8\u5927\u7684\u8fdb\u6b65\uff0c\u5c24\u5176\u662f Flink\uff0c\u5b83\u88ab\u5e7f\u6cdb\u89c6\u4e3a\u4e0b\u4e00\u4ee3\u5927\u6570\u636e\u6d41\u8ba1\u7b97\u5f15\u64ce\uff0c\u800c\u6211\u4eec\u5728\u4f7f\u7528 Apache Flink\xae \u548c Apache Spark\u2122 \u65f6\u53d1\u73b0\u4ece\u7f16\u7a0b\u6a21\u578b\u3001\u542f\u52a8\u914d\u7f6e\u5230\u8fd0\u7ef4\u7ba1\u7406\u90fd\u5b58\u5728\u8bb8\u591a\u53ef\u4ee5\u62bd\u8c61\u548c\u5171\u7528\u7684\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u4e00\u4e9b\u4f18\u79c0\u7ecf\u9a8c\u8fdb\u884c\u56fa\u5316\u5e76\u7ed3\u5408\u4e1a\u5185\u6700\u4f73\u5b9e\u8df5\uff0c\u7ecf\u8fc7\u4e0d\u61c8\u52aa\u529b\u6700\u7ec8\u8bde\u751f\u4e86\uff1a ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"Apache StreamPark\u2122"})})," \u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"screenshot",src:n(90867).A+"",width:"2020",height:"1103"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.code,{children:"Apache StreamPark\u2122"})," \u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u7684\u6d41\u5904\u7406\u8ba1\u7b97\u5e73\u53f0"]}),"\u3002\u89c4\u8303\u4e86\u9879\u76ee\u7684\u914d\u7f6e\u3001\u9f13\u52b1\u51fd\u6570\u5f0f\u7f16\u7a0b\u3001\u5b9a\u4e49\u4e86\u6700\u4f73\u7684\u7f16\u7a0b\u65b9\u5f0f\uff0c\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684\u8fde\u63a5\u5668\uff08Connector\uff09\uff0c\u6807\u51c6\u5316\u4e86\u914d\u7f6e\u3001\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u90e8\u7f72\u3001\u76d1\u63a7\u3001\u8fd0\u7ef4\u7684\u6574\u4e2a\u8fc7\u7a0b\uff0c\u63d0\u4f9b\u4e86 Scala \u548c Java \u4e24\u5957\u63a5\u53e3\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u7684\u6d41\u5904\u7406\u4f5c\u4e1a\u5f00\u53d1\u7ba1\u7406\u5e73\u53f0\uff0c\u4ece\u6d41\u5904\u7406\u4f5c\u4e1a\u5f00\u53d1\u5230\u4e0a\u7ebf\u5168\u751f\u547d\u5468\u671f\u90fd\u505a\u4e86\u652f\u6301\u3002\u4f7f\u7528 Apache StreamPark\u2122 \u5f00\u53d1\u6d41\u5904\u7406\u4f5c\u4e1a\u53ef\u4ee5\u663e\u8457\u964d\u4f4e\u5b66\u4e60\u6210\u672c\u548c\u5f00\u53d1\u95e8\u69db\uff0c\u8ba9\u5f00\u53d1\u8005\u80fd\u591f\u4e13\u6ce8\u4e8e\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u3002\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u6838\u5fc3\u7279\u6027",children:"\u6838\u5fc3\u7279\u6027"}),"\n",(0,s.jsx)("h6",{children:" \ud83c\udf89 \u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u811a\u624b\u67b6"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Apache StreamPark\u2122"})," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u4f7f\u5f00\u53d1\u8005\u80fd\u591f\u9ad8\u6548\u5730\u6784\u5efa\u6d41\u5904\u7406\u5e94\u7528\u3002\u5b83",(0,s.jsx)("u",{children:(0,s.jsx)(r.strong,{children:"\u652f\u6301\u591a\u79cd\u7248\u672c"})}),"\u7684 Apache Flink\xae \u548c Apache Spark\u2122\uff0c\u964d\u4f4e\u4e86\u5b66\u4e60\u6210\u672c\u548c\u5f00\u53d1\u95e8\u69db\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u4e13\u6ce8\u4e8e\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u3002"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"mutiple_version",src:n(9260).A+"",width:"887",height:"306"})}),"\n",(0,s.jsx)("h6",{children:" \ud83c\udf89  \u5f00\u7bb1\u5373\u7528\u7684\u8fde\u63a5\u5668"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Apache StreamPark\u2122"})," \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217",(0,s.jsx)("u",{children:(0,s.jsx)(r.strong,{children:"\u5f00\u7bb1\u5373\u7528"})}),"\u7684\u8fde\u63a5\u5668\uff0c\u7b80\u5316\u4e86\u4e0e\u4e0d\u540c\u6570\u636e\u6e90\u548c\u76ee\u6807\u7684\u96c6\u6210\u3002\u8fd9\u4e9b\u8fde\u63a5\u5668\u4f7f\u5f97\u6570\u636e\u6d41\u7684\u83b7\u53d6\u548c\u5904\u7406\u53d8\u5f97\u66f4\u52a0\u9ad8\u6548\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u573a\u666f\u3002"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"connectors",src:n(78161).A+"",width:"887",height:"183"})}),"\n",(0,s.jsx)("h6",{children:" \ud83c\udf89  \u4e00\u7ad9\u5f0f\u6d41\u5904\u7406\u8fd0\u7ef4\u5e73\u53f0"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Apache StreamPark\u2122"})," \u4f5c\u4e3a\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u6d41\u5904\u7406\u8fd0\u7ef4\u5e73\u53f0\uff0c",(0,s.jsx)("u",{children:(0,s.jsx)(r.strong,{children:"\u96c6\u6210\u4e86\u5e94\u7528\u7684\u5f00\u53d1\u3001\u8c03\u8bd5\u3001\u90e8\u7f72\u548c\u8fd0\u7ef4\u7ba1\u7406\u529f\u80fd"})}),"\u3002\u5b83\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"streampark-console"})," \u63d0\u4f9b\u4e86\u4f4e\u4ee3\u7801\u5e73\u53f0\uff0c\u65b9\u4fbf\u7528\u6237\u7ba1\u7406 Flink \u4efb\u52a1\uff0c\u7b80\u5316\u4e86\u9879\u76ee\u7684\u7f16\u8bd1\u3001\u53d1\u5e03\u3001\u53c2\u6570\u914d\u7f6e\u7b49\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"cicd",src:n(75572).A+"",width:"887",height:"327"})}),"\n",(0,s.jsx)("h6",{children:" \ud83c\udf89  \u652f\u6301\u591a\u79cd\u573a\u666f"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Apache StreamPark\u2122"})," \u652f\u6301\u591a\u79cd\u5e94\u7528\u573a\u666f\uff0c\u5305\u62ec Catalog\u3001OLAP \u548c Streaming Warehouse \u7b49\u3002\u8fd9\u4f7f\u5f97\u7528\u6237\u80fd\u591f\u5728\u4e0d\u540c\u7684\u6570\u636e\u5904\u7406\u9700\u6c42\u4e0b\u7075\u6d3b\u5e94\u7528 Apache StreamPark\u2122\uff0c\u6ee1\u8db3\u5b9e\u65f6\u6570\u636e\u5206\u6790\u548c\u5904\u7406\u7684\u9700\u6c42\u3002"]}),"\n",(0,s.jsx)("h6",{children:" \ud83c\udf89  ..."}),"\n",(0,s.jsx)(r.h2,{id:"\u67b6\u6784\u8bbe\u8ba1",children:"\u67b6\u6784\u8bbe\u8ba1"}),"\n",(0,s.jsxs)(r.p,{children:["\ud83c\udff3\u200d\ud83c\udf08 ",(0,s.jsx)(r.strong,{children:"Apache StreamPark\u2122"})," \u6838\u5fc3\u7531 ",(0,s.jsx)(r.code,{children:"StreamPark Core"})," \u548c ",(0,s.jsx)(r.code,{children:"StreamPark Console"})," \u7ec4\u6210\uff1a"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"StreamPark Archite",src:n(18309).A+"",width:"2734",height:"1311"})}),"\n",(0,s.jsx)(r.h3,{id:"streampark-core",children:"StreamPark Core"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"StreamPark Core"})," \u5b9a\u4f4d\u662f\u4e00\u4e2a\u5f00\u53d1\u65f6\u6846\u67b6\uff0c\u5173\u6ce8\u7f16\u7801\u5f00\u53d1\uff0c\u89c4\u8303\u4e86\u914d\u7f6e\u6587\u4ef6\uff0c\u6309\u7167\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e\u7684\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f00\u53d1\u73af\u5883\u7684 RuntimeContext \u548c\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684\u8fde\u63a5\u5668\uff0c\u6269\u5c55\u4e86 DataStream \u76f8\u5173\u7684\u65b9\u6cd5\uff0c\u878d\u5408\u4e86 DataStream \u548c Flink SQL API\uff0c\u7b80\u5316\u7e41\u7410\u7684\u64cd\u4f5c\u3001\u805a\u7126\u4e1a\u52a1\u672c\u8eab\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u548c\u5f00\u53d1\u4f53\u9a8c\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"streampark-console",children:"StreamPark Console"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"StreamPark Console"})," \u662f\u4e00\u4e2a\u96c6\u5b9e\u65f6\u6570\u636e\u5904\u7406\u4e0e\u4f4e\u4ee3\u7801\u5f00\u53d1\u4e8e\u4e00\u4f53\u7684\u5e73\u53f0\uff0c\u80fd\u591f\u9ad8\u6548\u7ba1\u7406 Flink \u4efb\u52a1\u3002\u5b83\u6574\u5408\u4e86\u9879\u76ee\u7f16\u8bd1\u3001\u53d1\u5e03\u3001\u53c2\u6570\u914d\u7f6e\u3001\u542f\u52a8\u3001\u4fdd\u5b58\u70b9\u3001\u706b\u7130\u56fe\u3001Flink SQL \u548c\u76d1\u63a7\u7b49\u529f\u80fd\uff0c\u6781\u5927\u7b80\u5316\u4e86 Flink \u4efb\u52a1\u7684\u65e5\u5e38\u64cd\u4f5c\u4e0e\u7ef4\u62a4\uff0c\u5e76\u878d\u5165\u4e86\u4f17\u591a\u6700\u4f73\u5b9e\u8df5\u3002\u8be5\u5e73\u53f0\u4f7f\u539f\u672c\u53ea\u6709\u5927\u516c\u53f8\u624d\u80fd\u7814\u53d1\u548c\u4f7f\u7528\u7684\u9879\u76ee\uff0c\u5982\u4eca\u4eba\u4eba\u53ef\u5f97\uff0c\u5176\u76ee\u6807\u662f\u6253\u9020\u4e00\u4e2a\u5b9e\u65f6\u6570\u4ed3\u3001\u6d41\u6279\u4e00\u4f53\u7684\u4e00\u5f0f\u7ad9\u5927\u6570\u636e\u89e3\u51b3\u65b9\u6848\u3002\u8be5\u5e73\u53f0\u4f7f\u7528\u4e86\u4ee5\u4e0b\u6280\u672f\uff08\u4f46\u4e0d\u9650\u4e8e\uff09\uff1a"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"http://flink.apache.org",children:"Apache Flink"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"http://spark.apache.org",children:"Apache Spark"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"http://hadoop.apache.org",children:"Apache YARN"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"https://spring.io/projects/spring-boot/",children:"Spring Boot"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"http://www.mybatis.org",children:"Mybatis"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"http://mp.baomidou.com",children:"Mybatis-Plus"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"https://cn.vuejs.org/",children:"Vue"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"https://vuepress.vuejs.org/",children:"VuePress"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"https://antdv.com/",children:"Ant Design of Vue"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"https://pro.antdv",children:"ANTD PRO VUE"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"https://xtermjs.org/",children:"xterm.js"})]}),"\n",(0,s.jsxs)(r.li,{children:["\xb7 ",(0,s.jsx)(r.a,{href:"https://microsoft.github.io/monaco-editor/",children:"Monaco Editor"})]}),"\n",(0,s.jsx)(r.li,{children:"\xb7 ..."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u611f\u8c22\u4ee5\u4e0a\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\u548c\u5f88\u591a\u672a\u63d0\u5230\u7684\u4f18\u79c0\u5f00\u6e90\u9879\u76ee\uff0c\u7ed9\u4e88\u6700\u5927\u7684 respect\uff01"})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75572:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/cicd-403f0a9b4ce60c40b70e76728bcf66bf.png"},78161:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/connectors-831e19567b750e6dec0d24b835e66388.png"},9260:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/mutiple_version-73cf1231d626c9ecdd98f2fbe973168e.png"},18309:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/streampark_archite-208af7dd55c924f7fd8e07280b3b89c4.png"},90867:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/screenshot-2f530d5da47a7837975ff1481daa63e8.png"},76113:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>a});var s=n(30758);const t={},i=s.createContext(t);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);