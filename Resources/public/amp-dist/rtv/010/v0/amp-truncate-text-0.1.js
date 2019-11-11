(self.AMP=self.AMP||[]).push({n:"amp-truncate-text",v:"0",f:(function(AMP,_){
var l="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var p={a:!0},q={};try{q.__proto__=p;n=q.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=m;function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var u=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(a){if(!w.user)throw Error("failed to call initLogConstructor");w.user.assert(a,"The amp-truncate-text experiment must be enabled to use this component.",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var y=Object.prototype.hasOwnProperty;function A(a){return a.trimEnd?a.trimEnd():("_"+a).trim().slice(1)};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function B(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,C(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var h;h=u.exec(e);)f=t(h[1],h[1]),h=h[2]?t(h[2].replace(/\+/g," "),h[2]):"",a[f]=h;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}}var k=
c;return!!k[b]}function C(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(w.dev)a=w.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var D={},E=(D["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},D);function F(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=G(b,"ampdoc").getAmpDoc(a)}return a}function G(a,b){H(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function H(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function I(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function J(a){return a.closest?a.closest("a[href]"):I(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"a[href]"):!1})}function K(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};var L;function M(a){a=a.ownerDocument||a;L&&L.ownerDocument===a||(L=a.createElement("div"));return N}function N(a){var b=L;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function aa(a,b){var c=1,d=1;c=void 0===c?0:c;d=void 0===d?1:d;var e=0,f=a-1,h=NaN;for(a=NaN;f>=e;){var k=e+Math.floor((f-e)/2),g=b(k);if(0<g||0==g&&1==c)h=2==d?k:h,a=0==g?k:a,e=k+1;else if(0>g||0==g&&2==c)h=1==d?k:h,a=0==g?k:a,f=k-1;else{a=k;break}}return isNaN(a)?-((isNaN(h)?1==d?e:f:h)+1):a};function O(a,b){var c="slot"==a.localName?a.assignedNodes({flatten:!0}):a.childNodes;for(a=0;a<c.length;a++)b(c[a])}function P(a){var b=a.__AMP_TRUNCATE_TEXT_DATA;b&&b.modifiedText==a.data&&(a.data=b.originalText);a.nodeType==Node.ELEMENT_NODE&&a.removeAttribute("i-amphtml-truncate-child-overflow");O(a,function(a){return P(a)})}function Q(a,b,c){a.__AMP_TRUNCATE_TEXT_DATA={originalText:b,modifiedText:c};a.data=c}
function R(a,b,c){c=void 0===c?[]:c;if(!b(a))return c;c.push(a);O(a,function(a){return R(a,b,c)});return c}function ba(a,b,c){for(var d=R(a,function(a){return!c.includes(a)}),e=d.length-1;0<=e;e--){var f=d[e];f.nodeType==Node.ELEMENT_NODE&&f.setAttribute("i-amphtml-truncate-child-overflow","");if(f.nodeType==Node.TEXT_NODE&&ca(f,a,b))break}}
function ca(a,b,c){var d=document.createRange();d.selectNode(a);var e=d.getBoundingClientRect(),f=a.data;if(e.height)if(e.top>c.bottom)Q(a,f,"");else{var h=aa(f.length,function(d){for(;!f[d].trim()&&0<d;)d--;a.data=f.slice(0,d+1)+"\u2026 ";return-(b.scrollHeight-b.offsetHeight)}),k=0<=h?h+1:-(h+1),g=A(f.slice(0,k)),z=g?g+"\u2026 ":"";Q(a,f,z);return!!g}};var da=["<div class=i-amphtml-truncate-content><span class=i-amphtml-default-slot></span> <span class=i-amphtml-truncate-collapsed-slot name=collapsed></span> <span class=i-amphtml-truncate-expanded-slot name=expanded></span> <span class=i-amphtml-truncate-persistent-slot name=persistent></span></div>"],ea=["<div class=content><slot></slot><slot class=collapsed-slot name=collapsed></slot><slot class=expanded-slot name=expanded></slot><slot class=persistent-slot name=persistent></slot></div>"];
function S(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;b.j=null;b.l=null;b.o=null;b.m=!1;b.w=new b.win.MutationObserver(function(){T(b)});return b}var U=AMP.BaseElement;S.prototype=l(U.prototype);S.prototype.constructor=S;if(r)r(S,U);else for(var V in U)if("prototype"!=V)if(Object.defineProperties){var W=Object.getOwnPropertyDescriptor(U,V);W&&Object.defineProperty(S,V,W)}else S[V]=U[V];S.A=U.prototype;
function fa(a){a.registerAction("expand",function(){return X(a)},100);a.registerAction("collapse",function(){return Y(a)},100)}S.prototype.buildCallback=function(){var a=this;x(B(this.win,"amp-truncate-text"));(this.m=!!this.element.attachShadow&&B(this.win,"amp-truncate-text-shadow"))?ha(this):ia(this);fa(this);this.j.addEventListener("click",function(b){Z(a,b,!0)});this.l.addEventListener("click",function(b){Z(a,b,!1)})};
function ia(a){var b=M(a.element);a.h=b(da);var c=a.h.querySelector(".i-amphtml-default-slot");a.j=a.h.querySelector(".i-amphtml-truncate-collapsed-slot");a.l=a.h.querySelector(".i-amphtml-truncate-expanded-slot");a.o=a.h.querySelector(".i-amphtml-truncate-persistent-slot");K(a.element.querySelectorAll('[slot="collapsed"]'),function(b){a.j.appendChild(b)});K(a.element.querySelectorAll('[slot="expanded"]'),function(b){a.l.appendChild(b)});K(a.element.querySelectorAll('[slot="persistent"]'),function(b){a.o.appendChild(b)});
a.getRealChildNodes().forEach(function(a){c.appendChild(a)});a.element.appendChild(a.h)}
function ha(a){var b=M(a.element),c=a.element;b=b(ea);var d=c.querySelector("i-amphtml-sizer");d&&d.setAttribute("slot","i-amphtml-sizer");c=c.attachShadow({mode:"open"});d=document.createElement("style");d.textContent=":host{padding:0!important;border:none!important}:host([i-amphtml-truncate-expanded]){height:auto!important}:host([i-amphtml-truncate-expanded]) ::slotted(i-amphtml-sizer){display:none!important}:host([i-amphtml-truncate-expanded]) .content{position:static}:host(:not([i-amphtml-truncate-expanded])) .expanded-slot{display:none}.content{position:absolute;top:0;left:0;bottom:0;right:0}.expand-slot::slotted(*){margin:0!important;white-space:nowrap!important}:host(:not([i-amphtml-truncate-overflow])) .collapsed-slot{display:none}::slotted([i-amphtml-truncate-child-overflow]){display:none!important}\n/*# sourceURL=/extensions/amp-truncate-text/0.1/amp-truncate-text-shadow.css*/";var e=
document.createElement("slot");e.setAttribute("name","i-amphtml-sizer");c.appendChild(d);c.appendChild(e);c.appendChild(b);var f=c;a.h=null;a.j=f.querySelector(".collapsed-slot");a.l=f.querySelector(".expanded-slot");a.o=f.querySelector(".persistent-slot")}S.prototype.layoutCallback=function(){var a=this;return this.mutateElement(function(){T(a)})};S.prototype.firstAttachedCallback=function(){this.w.observe(this.element,{attributes:!0,characterData:!0,childList:!0,subtree:!0})};
S.prototype.isRelayoutNeeded=function(){return!0};S.prototype.isLayoutSupported=function(){return!0};
function T(a){var b=a.m?a.element:a.h;var c=a.m?v(a.element.querySelectorAll('[slot="persistent"], [slot="collapsed"]')):v(a.element.querySelectorAll(".i-amphtml-truncate-persistent-slot, .i-amphtml-truncate-collapsed-slot"));b={container:b,overflowNodes:c};c=void 0===b?{}:b;b=c.container;c=c.overflowNodes;b.__AMP_TRUNCATE_TRUNCATED&&(b.__AMP_TRUNCATE_TRUNCATED=!1,b.removeAttribute("i-amphtml-truncate-overflow"),P(b));if(!(0>=b.scrollHeight-b.offsetHeight)){var d=b.getBoundingClientRect();b.__AMP_TRUNCATE_TRUNCATED=
!0;b.setAttribute("i-amphtml-truncate-overflow","");ba(b,d,c)}a.w.takeRecords()}
function Z(a,b,c){b=b.target;var d=a.element,e=d.ownerDocument.defaultView,f=e.__AMP_TOP||(e.__AMP_TOP=e),h=e!=f;if(B(f,"ampdoc-fie")){f.__AMP_EXPERIMENT_BRANCHES=f.__AMP_EXPERIMENT_BRANCHES||{};for(g in E)if(y.call(E,g)&&!y.call(f.__AMP_EXPERIMENT_BRANCHES,g))if(E[g].isTrafficEligible&&E[g].isTrafficEligible(f)){if(!f.__AMP_EXPERIMENT_BRANCHES[g]&&B(f,g)){var k=E[g].branches;f.__AMP_EXPERIMENT_BRANCHES[g]=k[Math.floor(Math.random()*k.length)]||null}}else f.__AMP_EXPERIMENT_BRANCHES[g]=null;var g=
"21065002"===(f.__AMP_EXPERIMENT_BRANCHES?f.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else g=!1;h&&!g?d=H(e,"action")?G(e,"action"):null:(d=F(d),d=F(d),d=d.isSingleDoc()?d.win:d,d=H(d,"action")?G(d,"action"):null);var z=d;z.hasAction(b,"tap")||J(b)||(c?X(a):Y(a))}function X(a){a.element.setAttribute("i-amphtml-truncate-expanded","")}function Y(a){a.element.removeAttribute("i-amphtml-truncate-expanded")}(function(a){a.registerElement("amp-truncate-text",S,"amp-truncate-text{padding:0!important;border:none!important}amp-truncate-text[i-amphtml-truncate-expanded]{height:auto!important}amp-truncate-text[i-amphtml-truncate-expanded]>i-amphtml-sizer{display:none!important}amp-truncate-text[i-amphtml-truncate-expanded] .i-amphtml-truncate-content{position:static!important}amp-truncate-text:not([i-amphtml-truncate-expanded]) .i-amphtml-truncate-expanded-slot{display:none!important}.i-amphtml-truncate-content{position:absolute!important;top:0!important;left:0!important;bottom:0!important;right:0!important}.i-amphtml-truncate-content [slot=expand]{margin:0!important;white-space:nowrap!important}.i-amphtml-truncate-content:not([i-amphtml-truncate-overflow]) .i-amphtml-truncate-collapsed-slot,[i-amphtml-truncate-child-overflow]{display:none!important}\n/*# sourceURL=/extensions/amp-truncate-text/0.1/amp-truncate-text.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-truncate-text-0.1.js.map