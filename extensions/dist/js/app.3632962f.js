(function(e){function t(t){for(var s,o,r=t[0],i=t[1],u=t[2],l=0,f=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(s=!1)}s&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},c=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"13b8":function(e,t,n){},"2e63":function(e,t,n){"use strict";n("3746")},"303c":function(e,t,n){"use strict";n("cb94")},3746:function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=c,e.exports=a,a.id="4678"},4732:function(e,t,n){"use strict";n("673f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("f23d"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r=(n("ac1f"),n("1276"),n("5530")),i=n("2f62"),u={mounted:function(){var e=this;try{chrome.tabs.getSelected(null,(function(t){var n=t.url.split("/").length>=3?t.url.split("/")[2]:"";e.SET_CURPAGE({id:t.id,domain:n||t.url})}))}catch(t){this.SET_CURPAGE({id:"0",domain:window.location.origin})}},methods:Object(r["a"])({},Object(i["b"])("task",["SET_CURPAGE"]))},d=u,l=(n("034f"),n("2877")),f=Object(l["a"])(d,c,o,!1,null,null,null),b=f.exports,j=(n("202f"),n("7db0"),n("c740"),n("a434"),n("b0c0"),{tasks:[],curPage:{}}),m={ADD_TASK:function(e,t){e.tasks.push(Object(r["a"])(Object(r["a"])({},t),{},{domain:e.curPage.domain,id:(new Date).getTime()}))},UPDATE_TASK:function(e,t){var n=e.tasks.find((function(e){return e.id===t.id}));n.name=t.name,n.code=t.code},SET_CURPAGE:function(e,t){e.curPage=t},DELETE_TASK:function(e,t){var n=e.tasks.findIndex((function(e){return e.id===t}));e.tasks.splice(n,1)}},p={namespaced:!0,state:j,mutations:m},h=n("bfa9");s["a"].use(i["a"]);var v=new h["a"]({storage:window.localStorage,reducer:function(e){return{task:{tasks:e.task.tasks}}}}),k=new i["a"].Store({plugins:[v.plugin],modules:{task:p}}),y=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task-list"},[n("div",{staticClass:"add-task",on:{click:e.handleAdd}},[e._v("新增任务")]),e._l(e.curTasks,(function(e,t){return n("TaskItem",{key:t,attrs:{value:e}})}))],2)},w=[],x=(n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task-item",on:{contextmenu:e.show}},[e._v(e._s(e.value.name))])}),_=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task-context-menu",on:{click:function(t){return e.$emit("onClose")}}},[n("span",{on:{click:e.handleRun}},[e._v("运行")]),n("span",{on:{click:e.handleUpdate}},[e._v("详情")]),n("span",{on:{click:e.handleDelete}},[e._v("删除")])])},O=[],$={props:{task:{type:Object,default:null}},methods:{handleUpdate:function(){window.$vm.$router.push({name:"add-page",params:this.task})},handleDelete:function(){window.$vm.$store.commit("task/DELETE_TASK",this.task.id)},handleRun:function(){chrome.tabs.executeScript(window.$vm.$store.state.task.curPage.id,{code:this.task.code})}}},E=$,z=(n("f071"),Object(l["a"])(E,T,O,!1,null,null,null)),S=z.exports,A={props:["value"],methods:{show:function(e){window.event.returnValue=!1,this.$contextMenu({component:S,event:e,props:{task:this.value}})}}},P=A,D=(n("303c"),Object(l["a"])(P,x,_,!1,null,null,null)),C=D.exports,U={components:{TaskItem:C},computed:Object(r["a"])(Object(r["a"])({},Object(i["c"])("task",["tasks","curPage"])),{},{curTasks:function(){var e=this;return this.tasks.filter((function(t){return t.domain===e.curPage.domain}))}}),methods:{handleAdd:function(){this.$router.push("/add")}}},K=U,L=(n("2e63"),Object(l["a"])(K,g,w,!1,null,"2e56664e",null)),M=L.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-form",{staticClass:"task-add",attrs:{form:e.form},on:{submit:e.handleSubmit}},[n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:this.editTask.name,rules:[{align:"left",required:!0,message:"请输入任务名称"}]}],expression:"[\n        'name',\n        {\n          initialValue: this.editTask.name,\n          rules: [\n            { align: 'left', required: true, message: '请输入任务名称' },\n          ],\n        },\n      ]"}],attrs:{placeholder:"请填写任务名称"}})],1),n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{initialValue:this.editTask.code,rules:[{align:"left",required:!0,message:"请输入脚本"}]}],expression:"[\n        'code',\n        {\n          initialValue: this.editTask.code,\n          rules: [{ align: 'left', required: true, message: '请输入脚本' }],\n        },\n      ]"}],staticStyle:{height:"400px"},attrs:{type:"textarea",placeholder:"请填写JS脚本"}})],1),n("a-form-item",[n("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" 保存任务 ")]),n("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"default"},on:{click:function(t){return e.$router.push("/")}}},[e._v("取消")])],1)],1)},R=[],I={data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"form"}),editTask:{}}},created:function(){this.editTask=this.$route.params||{name:"",code:""}},methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])("task",["ADD_TASK","UPDATE_TASK"])),{},{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,n){e||(t.editTask.id?(t.UPDATE_TASK(Object(r["a"])({id:t.editTask.id},n)),t.$message.success("更新成功")):(t.ADD_TASK(n),t.$message.success("保存成功")),t.$router.push("/"))}))}})},V=I,G=(n("4732"),Object(l["a"])(V,q,R,!1,null,"8d68c162",null)),N=G.exports;s["a"].use(y["a"]);var F=[{path:"/",name:"Home",component:M},{path:"/add",name:"add-page",component:N}],H=new y["a"]({routes:F}),J=H,W=(n("4160"),n("b64b"),n("159b"),{menu:null}),X=function(e){var t=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop,s=e.pageX||e.clientX-t,a=e.pageY||e.clientY-n;return{x:s,y:a}},Y=function(e){W.menu&&(document.body.removeChild(W.menu),W.menu=null),document.body.removeEventListener("click",B)},B=function(e){e.path&&e.path.findIndex((function(e){return e===W.menu}))<=0&&Y()},Q=function(e,t){Object.keys(e).forEach((function(n){t.style[n]=e[n]}))},Z=function(e){var t=Object(r["a"])(Object(r["a"])({},{offsets:{x:10,y:0}}),e),n=t.component,a=t.props,c=t.event,o=t.offsets,i=new s["a"](n),u=X(c),d=u.x,l=u.y;a&&Object.keys(a).forEach((function(e){i[e]=a[e]})),i.$mount();var f=l+10;Q({left:"".concat(d+o.x,"px"),top:"".concat(f+o.y,"px"),position:"fixed",zIndex:1002,opacity:0},i.$el),W.menu&&(document.body.removeChild(W.menu),W.menu=null),W.menu=i.$el,document.body.appendChild(i.$el);var b=i.$el.offsetHeight,j=i.$el.offsetWidth,m=document.body.clientHeight,p=document.body.clientWidth;m-f<b+o.y&&(f<b+o.y?i.$el.style.top="".concat(m-b-o.y,"px"):i.$el.style.top="".concat(f-b-o.y,"px")),p-d<j&&(i.$el.style.left="".concat(d-j-o.x,"px")),i.$el.style.opacity=1,i.$on("onClose",(function(){Y()})),document.body.addEventListener("click",B)};s["a"].prototype.$contextMenu=Z,s["a"].config.productionTip=!1,s["a"].use(a["a"]),s["a"].config.productionTip=!1;var ee=new s["a"]({router:J,store:k,render:function(e){return e(b)}}).$mount("#app");window.$vm=ee},"673f":function(e,t,n){},"85ec":function(e,t,n){},cb94:function(e,t,n){},f071:function(e,t,n){"use strict";n("13b8")}});
//# sourceMappingURL=app.3632962f.js.map