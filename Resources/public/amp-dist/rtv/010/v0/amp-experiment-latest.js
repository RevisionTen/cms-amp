(self.AMP=self.AMP||[]).push({n:"amp-experiment",v:"0",f:(function(AMP,_){
var f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}k=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=k;var r=Object.prototype.toString;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var t=self.__AMP_LOG;function u(a,b,c,d,e,g){if(!t.user)throw Error("failed to call initLogConstructor");return t.user.assert(a,b,c,d,e,g,void 0,void 0,void 0,void 0,void 0)};var v=Object.prototype.hasOwnProperty;function w(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function x(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return y(a,b)}function z(a,b){a=A(a);var c=B(a,b);c?b=c:(a=C(a),a[b]=D(),b=a[b].promise);return b}function E(a){return a.nodeType?x((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function A(a){a=E(a);return a.isSingleDoc()?a.win:a}function y(a,b){var c=C(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function B(a,b){var c=C(a)[b];if(c){if(c.promise)return c.promise;y(a,b);return c.promise=Promise.resolve(c.obj)}return null}function C(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function D(){var a=new w,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function F(a){return G(a).then(function(a){return u(a,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","userNotificationManager","amp-user-notification","amp-user-notification","amp-user-notification")})}
function G(a){var b=B(A(a),"userNotificationManager");if(b)return b;var c=E(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var g={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var h=0;h<b.length;h++){var l=b[h];l=l.getAttribute("custom-element")||l.getAttribute("custom-template");g[l]=!0}g=Object.keys(g)}else g=[];a=g.includes("amp-user-notification")?x(a,"extensions").waitForExtension(a,"amp-user-notification"):Promise.resolve();
return a}).then(function(){var b=c.win;return b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-user-notification"]?z(a,"userNotificationManager"):null})};var H=/^[\w-]+$/;function I(a){this.ampdoc=a;this.h=new w}I.prototype.init=function(a){this.h.resolve(a)};I.prototype.getVariants=function(){return this.h.promise};I.prototype.whenReady=function(){return this.getVariants()};
function J(a,b,c){K(b);L(c);var d=a.getParam("amp-x-"+b);if(d&&v.call(c.variants,d))return Promise.resolve(d);var e=!1!==c.sticky,g=c.cidScope||"amp-experiment",h=Promise.resolve(!0);if(e&&c.consentNotificationId){var l=a.getHeadNode();h=F(l).then(function(a){return a.getNotification(c.consentNotificationId)}).then(function(a){u(a,"Notification not found: "+c.consentNotificationId);return a.isDismissed()})}return h.then(function(d){if(!d)return null;var h=c.group||b;return M(a,h,e?g:null).then(function(a){for(var b=
0,d=Object.keys(c.variants).sort(),e=0;e<d.length;e++)if(b+=c.variants[d[e]],a<b)return d[e];return null})})}function L(a){var b=a.variants;u("[object Object]"===r.call(b)&&0<Object.keys(b).length,"Missing experiment variants config.");a.group&&K(a.group);var c=0,d;for(d in b)if(v.call(b,d)){K(d);var e=b[d];u("number"===typeof e&&0<e&&100>e,"Invalid percentage %s:%s. Has to be greater than 0 and less than 100",d,e);c+=e}u(100>=c.toFixed(6),"Total percentage is bigger than 100: "+c)}
function M(a,b,c){if(!c)return Promise.resolve(100*a.win.Math.random());var d=z(a,"cid").then(function(a){return a.get({scope:c,createCookieIfNotPresent:!0},Promise.resolve())});return Promise.all([d,x(a.win,"crypto")]).then(function(a){return a[1].uniform(b+":"+a[0])}).then(function(a){return 100*a})}function K(a){u(H.test(a),"Invalid name: %s. Allowed chars are [a-zA-Z0-9-_].",a)};function N(){return AMP.BaseElement.apply(this,arguments)||this}var O=AMP.BaseElement;N.prototype=f(O.prototype);N.prototype.constructor=N;if(q)q(N,O);else for(var P in O)if("prototype"!=P)if(Object.defineProperties){var Q=Object.getOwnPropertyDescriptor(O,P);Q&&Object.defineProperty(N,P,Q)}else N[P]=O[P];N.l=O.prototype;N.prototype.isLayoutSupported=function(a){return"nodisplay"==a||"container"==a};N.prototype.prerenderAllowed=function(){return!0};N.prototype.isBuildRenderBlocking=function(){return!0};
N.prototype.buildCallback=function(){var a=this;return z(this.getAmpDoc(),"variant").then(function(b){try{var c=R(a),d=Object.create(null),e=Object.keys(c).map(function(b){return J(a.getAmpDoc(),b,c[b]).then(function(a){d[b]=a})}),g=Promise.all(e).then(function(){return d}).then(a.j.bind(a));b.init(g)}catch(h){throw b.init({}),h;}})};
function R(a){a=a.element.children;u(1==a.length&&"SCRIPT"==a[0].tagName&&"APPLICATION/JSON"==a[0].getAttribute("type").toUpperCase(),'<amp-experiment> should contain exactly one <script type="application/json"> child.');return JSON.parse(a[0].textContent)}N.prototype.j=function(a){return this.getAmpDoc().waitForBodyOpen().then(function(b){for(var c in a)a[c]&&b.setAttribute("amp-x-"+c,a[c]);return a})};(function(a){a.registerServiceForDoc("variant",I);a.registerElement("amp-experiment",N)})(self.AMP);
})});

//# sourceMappingURL=amp-experiment-0.1.js.map
