(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8305],{11774:function(e){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(o(n(1)),n(6)),a=o(r),s=o(n(7)),u=o(n(8)),c=o(n(9)),l=o(n(10)),d=o(n(11)),m=o(n(14)),f=[],p=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},b=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return f=(0,d.default)(f,g),(0,l.default)(f,g.once),f},v=function(){f=(0,m.default)(),b()},h=function(){f.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&c.default.mobile()||"phone"===e&&c.default.phone()||"tablet"===e&&c.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){g=i(g,e),f=(0,m.default)();var t=document.all&&!window.atob;return y(g.disable)||t?h():(g.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),"DOMContentLoaded"===g.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?b(!0):"load"===g.startEvent?window.addEventListener(g.startEvent,(function(){b(!0)})):document.addEventListener(g.startEvent,(function(){b(!0)})),window.addEventListener("resize",(0,s.default)(b,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(b,g.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,l.default)(f,g.once)}),g.throttleDelay)),g.disableMutationObserver||u.default.ready("[data-aos]",v),f)};e.exports={init:w,refresh:b,refreshHard:v}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=g,o=b;return g=b=void 0,j=t,h=e.apply(o,n)}function r(e){return j=e,y=setTimeout(l,t),O?o(e):h}function a(e){var n=t-(e-w);return _?U(n,v-(e-j)):n}function u(e){var n=e-w;return void 0===w||n>=t||n<0||_&&e-j>=v}function l(){var e=x();return u(e)?d(e):void(y=setTimeout(l,a(e)))}function d(e){return y=void 0,z&&g?o(e):(g=b=void 0,h)}function m(){void 0!==y&&clearTimeout(y),j=0,g=w=b=y=void 0}function f(){return void 0===y?h:d(x())}function p(){var e=x(),n=u(e);if(g=arguments,b=this,w=e,n){if(void 0===y)return r(w);if(_)return y=setTimeout(l,t),o(w)}return void 0===y&&(y=setTimeout(l,t)),h}var g,b,v,h,y,w,j=0,O=!1,_=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,i(n)&&(O=!!n.leading,v=(_="maxWait"in n)?k(s(n.maxWait)||0,t):v,z="trailing"in n?!!n.trailing:z),p.cancel=m,p.flush=f,p}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t=void 0===e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}function a(e){return"symbol"==(void 0===e?"undefined":u(e))||r(e)&&w.call(e)==d}function s(e){if("number"==typeof e)return e;if(a(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=p.test(e);return n||g.test(e)?b(e.slice(2),n?2:8):f.test(e)?l:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,d="[object Symbol]",m=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":u(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,y=v||h||Function("return this")(),w=Object.prototype.toString,k=Math.max,U=Math.min,x=function(){return y.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=g,o=b;return g=b=void 0,j=t,h=e.apply(o,n)}function r(e){return j=e,y=setTimeout(l,t),O?i(e):h}function s(e){var n=t-(e-x);return _?k(n,v-(e-j)):n}function c(e){var n=e-x;return void 0===x||n>=t||n<0||_&&e-j>=v}function l(){var e=U();return c(e)?d(e):void(y=setTimeout(l,s(e)))}function d(e){return y=void 0,z&&g?i(e):(g=b=void 0,h)}function m(){void 0!==y&&clearTimeout(y),j=0,g=x=b=y=void 0}function f(){return void 0===y?h:d(U())}function p(){var e=U(),n=c(e);if(g=arguments,b=this,x=e,n){if(void 0===y)return r(x);if(_)return y=setTimeout(l,t),i(x)}return void 0===y&&(y=setTimeout(l,t)),h}var g,b,v,h,y,x,j=0,O=!1,_=!1,z=!0;if("function"!=typeof e)throw new TypeError(u);return t=a(t)||0,o(n)&&(O=!!n.leading,v=(_="maxWait"in n)?w(a(n.maxWait)||0,t):v,z="trailing"in n?!!n.trailing:z),p.cancel=m,p.flush=f,p}function o(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function r(e){return"symbol"==(void 0===e?"undefined":s(e))||i(e)&&y.call(e)==l}function a(e){if("number"==typeof e)return e;if(r(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=f.test(e);return n||p.test(e)?g(e.slice(2),n?2:8):m.test(e)?c:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",c=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,b="object"==(void 0===t?"undefined":s(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,h=b||v||Function("return this")(),y=Object.prototype.toString,w=Math.max,k=Math.min,U=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=new(o())(a);s=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!s.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,r){n(e,i+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(12)),r=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(13)),r=function(e,t){var n=0,o=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,i.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+e.offsetHeight;break;case"center-center":n+=r/2+e.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=e.offsetHeight+r;break;case"center-top":n+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},13540:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(30758);var o=n(33689),i=n(86070);function r(e){let{children:t,fallback:n}=e;return(0,o.A)()?(0,i.jsx)(i.Fragment,{children:t?.()}):n??null}},48403:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var o=n(30758),i=n(13540),r=n(33689),a=n(5283);const s=JSON.parse('{"zh-CN":{"common":{"ourUsers":"\u6211\u4eec\u7684\u7528\u6237","tip":"\u8bf8\u591a\u516c\u53f8\u548c\u7ec4\u7ec7\u5c06 StreamPark \u7528\u4e8e\u7814\u7a76\u3001\u751f\u4ea7\u548c\u5546\u4e1a\u4ea7\u54c1\u4e2d<br/> \u5982\u679c\u60a8\u4e5f\u5728\u4f7f\u7528 ? <a href=\\"https://github.com/apache/streampark/issues/163\\" target=\\"_blank\\" rel=\\"noopener\\"><u>\u53ef\u4ee5\u5728\u8fd9\u91cc\u6dfb\u52a0</u></a>"}},"en":{"common":{"ourUsers":"Our Users","tip":"Various companies and organizations use StreamPark for research, production and commercial products.<br/> Are you using this project ? <a href=\\"https://github.com/apache/streampark/issues/163\\" target=\\"_blank\\" rel=\\"noopener\\"><u>you can add your company</u></a>"}}}'),u=JSON.parse('[{"imgUrl":"tencent.png"},{"imgUrl":"baidu.png"},{"imgUrl":"volcengine.png"},{"imgUrl":"china-unicom.png"},{"imgUrl":"mafengwo.png"},{"imgUrl":"hzbank.png"},{"imgUrl":"guilinbank.png"},{"imgUrl":"tianyi-cloud.png"},{"imgUrl":"tyo-express.png"},{"imgUrl":"ziroom.png"},{"imgUrl":"changan.png"},{"imgUrl":"china-entercom.png"},{"imgUrl":"tongcheng.png"},{"imgUrl":"rurora.png"},{"imgUrl":"lilith-games.png"},{"imgUrl":"tianyan.png"},{"imgUrl":"ninebot.png"},{"imgUrl":"kingcloud.png"},{"imgUrl":"wifi.png"},{"imgUrl":"net163.png"},{"imgUrl":"HSBC.png"},{"imgUrl":"GCT.png"},{"imgUrl":"zto.png"},{"imgUrl":"yonghui.png"},{"imgUrl":"wanda.png"},{"imgUrl":"apollo.png"},{"imgUrl":"imile.png"},{"imgUrl":"tjbank.png"},{"imgUrl":"zoomlion.png"},{"imgUrl":"inmobi.png"},{"imgUrl":"huanle-game.png"},{"imgUrl":"root-cloud.png"},{"imgUrl":"joyme.png"},{"imgUrl":"arc-health.png"},{"imgUrl":"belle.png"},{"imgUrl":"itcast.png"},{"imgUrl":"dustess.png"},{"imgUrl":"dataway.png"},{"imgUrl":"relx.png"},{"imgUrl":"zhengzhou.png"},{"imgUrl":"donson.png"},{"imgUrl":"daokoujinke.png"},{"imgUrl":"itbox.png"},{"imgUrl":"dongxin.png"},{"imgUrl":"e-sign.png"},{"imgUrl":"deepway.png"},{"imgUrl":"dyrs.png"},{"imgUrl":"bthome.png"},{"imgUrl":"kujiale.png"},{"imgUrl":"supcon.png"},{"imgUrl":"zmn.png"},{"imgUrl":"eeo.png"},{"imgUrl":"lccomputing.png"},{"imgUrl":"vixtel.png"},{"imgUrl":"shuxing.png"},{"imgUrl":"longping.png"},{"imgUrl":"bairong.png"},{"imgUrl":"bondex.png"},{"imgUrl":"zhenghao.png"},{"imgUrl":"vlion.png"},{"imgUrl":"ane.png"},{"imgUrl":"shunwang.png"},{"imgUrl":"atguigu.png"},{"imgUrl":"d4px.png"},{"imgUrl":"doctor-glasses.png"},{"imgUrl":"shudui.png"},{"imgUrl":"sunvega.png"},{"imgUrl":"shifang.png"},{"imgUrl":"haibo.png"},{"imgUrl":"banggood.png"},{"imgUrl":"hrfax.png"},{"imgUrl":"bl.png"},{"imgUrl":"sobot.png"},{"imgUrl":"quectel.png"},{"imgUrl":"zhxk.png"}]');var c=n(71563),l=n(11774),d=n.n(l),m=n(87221),f=n(86070);function p(){const e=(0,r.A)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",t=s?.[e];return(0,f.jsx)(c.A,{children:(0,f.jsx)(i.A,{children:()=>(d().init({offset:80,duration:500,easing:"ease-out-quad",once:!0}),window.addEventListener("load",d().refresh),(0,f.jsx)("div",{className:"block user_page container",children:(0,f.jsxs)("div",{className:"user-main",style:{padding:"10px 0 30px"},children:[(0,f.jsx)("h1",{className:"fs-2 mb-4 fw-bold text-center",children:t.common.ourUsers}),(0,f.jsx)("hr",{className:"divider my-4 mx-auto",style:{maxWidth:"10rem"}}),(0,f.jsx)("div",{className:"desc",dangerouslySetInnerHTML:{__html:t.common.tip}}),(0,f.jsxs)("div",{className:"user_case home_block",children:[(0,f.jsx)("div",{className:"bg-shadow-bubble"}),u.map(((e,t)=>(0,f.jsx)(g,{img:e,aosDelay:50*t},t)))]})]})}))})})}function g(e){let{img:t,aosDelay:n}=e;const{colorMode:i}=(0,m.G)(),[r,s]=o.useState();return o.useEffect((()=>{s("dark"===i?"/home/user/dark/"+t.imgUrl:"/home/user/light/"+t.imgUrl)}),[i]),(0,f.jsx)("div",{"data-aos":"fade-up","data-aos-delay":n,onMouseEnter:function(){s(`/home/user/dark/${t.imgUrl}`)},onMouseLeave:function(){s(`/home/user/${"dark"===i?"dark":"light"}/${t.imgUrl}`)},children:(0,f.jsx)("div",{className:"case_item case_hover",children:(0,f.jsx)("img",{src:(0,a.Ay)(r),alt:t.imgUrl})})})}}}]);