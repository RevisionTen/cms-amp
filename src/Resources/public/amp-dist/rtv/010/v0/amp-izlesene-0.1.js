(self.AMP=self.AMP||[]).push({n:"amp-izlesene",v:"0",f:(function(AMP,_){
var d="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}g=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=g;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;function t(a){return a||{}};t({c:!0,v:!0,a:!0,ad:!0,action:!0});/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function u(a){var b,c,h=b||function(a){return a},f=a.dataset;a={};var k=c?c:/^param(.+)/,l;for(l in f){var e=l.match(k);if(e){var A=e[1][0].toLowerCase()+e[1].substr(1);a[h(A)]=f[l]}}return a};function v(a){a=AMP.BaseElement.call(this,a)||this;a.l=null;a.h=null;a.j=null;return a}var w=AMP.BaseElement;v.prototype=d(w.prototype);v.prototype.constructor=v;if(q)q(v,w);else for(var x in w)if("prototype"!=x)if(Object.defineProperties){var y=Object.getOwnPropertyDescriptor(w,x);y&&Object.defineProperty(v,x,y)}else v[x]=w[x];v.m=w.prototype;v.prototype.preconnectCallback=function(a){this.preconnect.url(z(this));this.preconnect.url("https://i1.imgiz.com",a)};
v.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};v.prototype.buildCallback=function(){var a=this.element.getAttribute("data-videoid"),b=this.element;if(!r.user)throw Error("failed to call initLogConstructor");this.l=r.user.assert(a,"The data-videoid attribute is required for <amp-izlesene> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};
function z(a){if(a.j)return a.j;var b="https://www.izlesene.com/embedplayer/"+encodeURIComponent(a.l||"")+"/?",c=u(a.element);"autoplay"in c&&delete c.autoplay;var h=[];for(e in c){var f=c[e];if(null!=f)if(Array.isArray(f))for(var k=0;k<f.length;k++){var l=f[k];h.push(encodeURIComponent(e)+"="+encodeURIComponent(l))}else h.push(encodeURIComponent(e)+"="+encodeURIComponent(f))}c=h.join("&");if(c){b=b.split("#",2);var e=b[0].split("?",2);c=e[0]+(e[1]?"?"+e[1]+"&"+c:"?"+c);b=c+=b[1]?"#"+b[1]:""}return a.j=
b}v.prototype.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe"),b=z(this);a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.src=b;this.applyFillContent(a);this.element.appendChild(a);this.h=a;return this.loadPromise(a)};v.prototype.pauseCallback=function(){this.h&&this.h.contentWindow&&this.h.contentWindow.postMessage(t({command:"pause"}),"*")};(function(a){a.registerElement("amp-izlesene",v)})(self.AMP);
})});

//# sourceMappingURL=amp-izlesene-0.1.js.map