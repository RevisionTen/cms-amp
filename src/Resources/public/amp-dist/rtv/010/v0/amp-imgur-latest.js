(self.AMP=self.AMP||[]).push({n:"amp-imgur",v:"0",f:(function(AMP,_){
var c="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},e;if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var f;a:{var g={a:!0},l={};try{l.__proto__=g;f=l.a;break a}catch(a){}f=!1}e=f?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=e,q;
function r(a,b){var d=void 0,h=a,k=b;var n=function(a){try{return k(a)}catch(t){throw self.__AMP_REPORT_ERROR(t),t;}};var u=v(),p=!1;d&&(p=d.capture);h.addEventListener("message",n,u?d:p);return function(){h&&h.removeEventListener("message",n,u?d:p);n=h=k=null}}function v(){if(void 0!==q)return q;q=!1;try{var a={get capture(){q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return q};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var w=Object.prototype.toString;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(a){return 1>a.length?!1:0==a.lastIndexOf("{",0)};function z(a,b){return r(a,b)};function A(a){var b;try{return JSON.parse(a)}catch(d){return b&&b(d),null}};function B(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.h=null;a.j="";return a}var C=AMP.BaseElement;B.prototype=c(C.prototype);B.prototype.constructor=B;if(m)m(B,C);else for(var D in C)if("prototype"!=D)if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(C,D);E&&Object.defineProperty(B,D,E)}else B[D]=C[D];B.m=C.prototype;B.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
B.prototype.buildCallback=function(){var a=this.element.getAttribute("data-imgur-id"),b=this.element;if(!x.user)throw Error("failed to call initLogConstructor");this.j=x.user.assert(a,"The data-imgur-id attribute is required for <amp-imgur> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};
B.prototype.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe");this.c=a;this.h=z(this.win,this.l.bind(this));a.setAttribute("scrolling","no");a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");var b=this.j.replace(/^(a\/)?(.*)/,function(a,b,k){return(b||"")+encodeURIComponent(k)});a.src="https://imgur.com/"+b+"/embed?pub=true";this.applyFillContent(a);this.element.appendChild(a);return this.loadPromise(a)};
B.prototype.l=function(a){if("https://imgur.com"==a.origin&&a.source==this.c.contentWindow){var b=a.data;b&&("[object Object]"===w.call(b)||y(b))&&(a="[object Object]"===w.call(b)?b:A(b),"resize_imgur"==a.message&&this.attemptChangeHeight(a.height).catch(function(){}))}};B.prototype.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.c=null}this.h&&this.h();return!0};(function(a){a.registerElement("amp-imgur",B)})(self.AMP);
})});

//# sourceMappingURL=amp-imgur-0.1.js.map