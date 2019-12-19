(self.AMP=self.AMP||[]).push({n:"amp-access-laterpay",v:"0",f:(function(AMP,_){
function g(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function m(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var n=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=n.exec(a);){var d=m(c[1],c[1]),f=c[2]?m(c[2].replace(/\+/g," "),c[2]):"";b[d]=f}return b};var q="";
function r(){var a,b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},f=!!d.test||!1,e=p(c.location.originalHash||c.location.hash);d=d.spt;var h=p(c.location.search);q||(q=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"010");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(e.development)||c.AMP_DEV_MODE),examiner:"2"==e.development,geoOverride:e["amp-geo"],userLocationOverride:e["amp-user-location"],minified:!0,lite:void 0!=h.amp_lite,test:f,
log:e.log,version:"0",rtvVersion:q,singlePassType:d};c=b.__AMP_MODE=c}return c};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var t=self.__AMP_LOG;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user}function v(a,b,c,d,f,e){return u().assert(a,b,c,d,f,e,void 0,void 0,void 0,void 0,void 0)};function w(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return x(a,b)}function z(a){var b=A(a);b=B(b);return x(b,"viewport")}function A(a){return a.nodeType?w((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a){a=A(a);return a.isSingleDoc()?a.win:a}function x(a,b){var c=C(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function D(a){var b=C(a).access;if(b){if(b.promise)return b.promise;x(a,"access");return b.promise=Promise.resolve(b.obj)}return null}function C(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function E(){var a=new g,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function F(a){return G(a).then(function(a){return v(a,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","access","amp-access","amp-access","amp-access")})}
function G(a){var b=D(B(a));if(b)return b;var c=A(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var e={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var h=0;h<b.length;h++){var k=b[h];k=k.getAttribute("custom-element")||k.getAttribute("custom-template");e[k]=!0}e=Object.keys(e)}else e=[];a=e.includes("amp-access")?w(a,"extensions").waitForExtension(a,"amp-access"):Promise.resolve();return a}).then(function(){var b=c.win;if(b.__AMP_EXTENDED_ELEMENTS&&
b.__AMP_EXTENDED_ELEMENTS["amp-access"]){b=B(a);var f=D(b);f?b=f:(b=C(b),b.access=E(),b=b.access.promise)}else b=null;return b})};function H(a,b){var c=".amp-access-laterpay{position:relative}@media (min-width:420px){.amp-access-laterpay{width:420px}}.amp-access-laterpay ul{width:100%;padding:0;margin:0 0 40px}.amp-access-laterpay li{list-style:none;display:-ms-flexbox;display:flex;margin-bottom:20px}.amp-access-laterpay label{display:-ms-flexbox;display:flex;padding-right:10px}.amp-access-laterpay input{width:20px}.amp-access-laterpay-container{padding:16px 24px 16px 16px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;border-radius:12px;box-shadow:0 0 10px -1px rgba(0,0,0,0.25)}.amp-access-laterpay-sandbox{width:112%;padding:15px 10px;background-color:#f2902a;color:#fff;font-weight:700;text-align:center}.amp-access-laterpay-badge{text-align:center;color:#999}.amp-access-laterpay-badge a{color:#8db444}.amp-access-laterpay-header{font-size:1.2em;margin-bottom:40px}.amp-access-laterpay-metadata{width:92%}.amp-access-laterpay-title{font-size:1.1em;margin:0;padding:0}.amp-access-laterpay-description{font-size:0.9em;margin:0;padding:0}.amp-access-laterpay-price-container{margin-top:0;margin-left:auto}.amp-access-laterpay-price{font-size:1.5em}.amp-access-laterpay-currency{font-size:0.7em}.amp-access-laterpay-purchase-button{font-size:1.1em;padding:0.5em 0.8em;background-color:#8db444;border-radius:4px;border:0;color:#fff;width:70%}.amp-access-laterpay-already-purchased-link-container{font-size:0.9em}\n/*# sourceURL=/extensions/amp-access-laterpay/0.2/amp-access-laterpay.css*/",
d=!1,f="amp-access-laterpay",e=a.getHeadNode(),h=I(e,K(e,c),d||!1,f||null);if(b){var k=a.getRootNode();if(L(k,h))b(h);else var l=setInterval(function(){L(k,h)&&(clearInterval(l),b(h))},4)}}
function I(a,b,c,d){var f=a.__AMP_CSS_SM;if(!f){var e=Object.create(null);f=a.__AMP_CSS_SM=e}var h=!c&&d&&"amp-custom"!=d&&"amp-keyframes"!=d;if(e=c?"amp-runtime":h?"amp-extension="+d:null){var k=M(a,f,e);if(k)return k.textContent!==b&&(k.textContent=b),k}var l=(a.ownerDocument||a).createElement("style");l.textContent=b;var y=null;c?l.setAttribute("amp-runtime",""):h?(l.setAttribute("amp-extension",d||""),y=M(a,f,"amp-runtime")):(d&&l.setAttribute(d,""),y=a.lastChild);b=y;a.insertBefore(l,b?b.nextSibling:
a.firstChild);e&&(f[e]=l);return l}function M(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function K(a,b){return(a=a.__AMP_CSS_TR)?a(b):b}function L(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++){var d=c[a];if(d.ownerNode==b)return!0}return!1};var N;function O(a,b,c){var d=void 0,f=a,e=c;var h=function(a){try{return e(a)}catch(J){throw self.__AMP_REPORT_ERROR(J),J;}};var k=P(),l=!1;d&&(l=d.capture);f.addEventListener(b,h,k?d:l);return function(){f&&f.removeEventListener(b,h,k?d:l);h=f=e=null}}function P(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N};function Q(a,b,c){return O(a,b,c)};var aa={eu:"https://connector.laterpay.net",us:"https://connector.uselaterpay.com"},ba={eu:"https://connector.sandbox.laterpaytest.net",us:"https://connector.sandbox.uselaterpaytest.com"},ca={payLaterButton:"Buy Now, Pay Later",payNowButton:"Buy Now",defaultButton:"Buy Now",alreadyPurchasedLink:"I already bought this",sandbox:"Site in test mode. No payment required.",laterpayBadgePrefix:"Powered by ",laterpayBadgeSuffix:""};
function R(a,b){this.ampdoc=a.ampdoc;this.l=b;this.M=z(this.ampdoc);this.c=this.l.getAdapterConfig();this.w=this.A=this.B=this.F=null;this.G=[];this.C=!0;this.D=this.o=this.h=null;this.I=this.c.locale||"en";this.j=Object.assign({},ca,this.c.localeMessages||{});this.m=da(this)+"/api/v2/fetch/amp/?article_url=CANONICAL_URL&amp_reader_id=READER_ID&return_url=RETURN_URL";var c=this.c.articleId;c&&(this.m+="&article_id="+encodeURIComponent(c));var d=this.c.jwt;d&&(this.m+="&jwt="+encodeURIComponent(d));
this.L=w(this.ampdoc.win,"timer");this.H=w(this.ampdoc.win,"vsync");this.N=w(this.ampdoc.win,"xhr");H(this.ampdoc,function(){})}function da(a){var b=a.c.region||"eu";return(r().localDev||r().development)&&a.c.configUrl?a.c.configUrl:a.c.sandbox?ba[b]:aa[b]}
R.prototype.authorize=function(){var a=this;return ea(this).then(function(b){if(204===b.status)throw u().createError("No merchant domains have been matched for this article, or no paid content configurations are setup.");a.c.scrollToTopAfterAuth&&a.H.mutate(function(){return a.M.setScrollTop(0)});S(a);return{access:b.access}},function(b){if(!b||!b.response)throw b;var c=b.response;if(402!==c.status)throw b;return c.json().catch(function(){}).then(function(b){a.F=b;a.B=fa(a,b.purchase_options);S(a).then(a.K.bind(a));
return{access:!1}})})};function ea(a){var b=a.m+"&article_title="+encodeURIComponent(T(a)),c=a.l.buildUrl(b,!1);return c.then(function(b){return a.l.getLoginUrl(b)}).then(function(b){if(t.dev)var c=t.dev;else throw Error("failed to call initLogConstructor");c.info("amp-access-laterpay","Authorization URL: ",b);return a.L.timeoutPromise(3E3,a.N.fetchJson(b,{credentials:"include"})).then(function(a){return a.json()})})}
function fa(a,b){var c=T(a),d={};d.singlePurchases=b.filter(function(a){return"single_purchase"===a.sales_model});d.singlePurchases.forEach(function(a){return a.description=c});d.timepasses=b.filter(function(a){return"timepass"===a.sales_model});d.subscriptions=b.filter(function(a){return"subscription"===a.sales_model});return d}function U(a,b){return a.ampdoc.win.document.createElement(b)}
function T(a){var b=a.ampdoc.getRootNode().querySelector(a.c.articleTitleSelector);v(b,"No article title element found with selector %s",a.c.articleTitleSelector);return b.textContent.trim()}function V(a){var b=a.ampdoc.getElementById("amp-access-laterpay-dialog");return u().assertElement(b,"No element found with id amp-access-laterpay-dialog")}
function S(a){if(a.C)return Promise.resolve();for(var b;b=a.G.shift();)b();a.A&&(a.A(),a.A=null);a.w&&(a.w(),a.w=null);return a.H.mutatePromise(function(){a.C=!0;a.h=null;for(var b=V(a);b.firstChild;)b.removeChild(b.firstChild)})}
R.prototype.K=function(){var a=this,b=V(this);this.h=U(this,"div");this.h.className="amp-access-laterpay-container";this.c.sandbox&&W(this,"sandbox");W(this,"header");var c=U(this,"ul");this.B.singlePurchases.forEach(function(b){c.appendChild(X(a,b))});this.B.timepasses.forEach(function(b){c.appendChild(X(a,b))});this.B.subscriptions.forEach(function(b){c.appendChild(X(a,b))});var d=U(this,"button");d.className="amp-access-laterpay-purchase-button";d.textContent=this.j.defaultButton;this.D=d;this.A=
Q(d,"click",function(b){var c=a.o.dataset.purchaseType;Y(a,b,a.o.value,c)});this.h.appendChild(c);this.h.appendChild(d);this.h.appendChild(ha(this,this.F.identify_url));W(this,"footer");b.appendChild(this.h);b.appendChild(ia(this));this.C=!1;ja(this,c.firstElementChild)};function ja(a,b){var c=b.querySelector('input[type="radio"]');c.checked=!0;Z(a,c)}function W(a,b){if(a.j[b]){var c=U(a,"p");c.className="amp-access-laterpay-"+b;c.textContent=a.j[b];a.h.appendChild(c)}}
function ia(a){var b=U(a,"a");b.href="https://blog.laterpay.net/laterpay-academy/what-is-laterpay";b.target="_blank";b.textContent="LaterPay";var c=U(a,"p"),d=U(a,"span");d.textContent=a.j.laterpayBadgePrefix;var f=U(a,"span");f.textContent=a.j.laterpayBadgeSuffix;c.className="amp-access-laterpay-badge";c.appendChild(d);c.appendChild(b);c.appendChild(f);return c}
function X(a,b){var c=U(a,"li"),d=U(a,"label");d.for=b.title;d.appendChild(ka(a,b));var f=U(a,"div");f.className="amp-access-laterpay-metadata";var e=U(a,"span");e.className="amp-access-laterpay-title";e.textContent=b.title;f.appendChild(e);e=U(a,"p");e.className="amp-access-laterpay-description";e.textContent=b.description;f.appendChild(e);d.appendChild(f);c.appendChild(d);c.appendChild(la(a,b.price));return c}
function ka(a,b){var c=U(a,"input");c.name="purchaseOption";c.type="radio";c.id=b.title;c.value=b.purchase_url;b="pay_later"===b.price.payment_model?"payLater":"payNow";var d=a.j[b+"Button"];c.setAttribute("data-purchase-action-label",d);c.setAttribute("data-purchase-type",b);a.G.push(Q(c,"change",a.J.bind(a)));return c}
function la(a,b){var c=(b.amount/100).toLocaleString(a.I,{style:"decimal",minimumFractionDigits:0}),d=U(a,"span");d.className="amp-access-laterpay-price";d.textContent=c;var f=U(a,"sup");f.className="amp-access-laterpay-currency";f.textContent=b.currency;var e=U(a,"p");e.className="amp-access-laterpay-price-container";e.appendChild(d);e.appendChild(f);return e}
function ha(a,b){var c=U(a,"p");c.className="amp-access-laterpay-already-purchased-link-container";var d=U(a,"a");d.href=b;d.textContent=a.j.alreadyPurchasedLink;a.w=Q(d,"click",function(c){Y(a,c,b,"alreadyPurchased")});c.appendChild(d);return c}R.prototype.J=function(a){a.preventDefault();Z(this,a.target)};function Z(a,b){var c="amp-access-laterpay-selected",d=a.o,f=b.dataset.purchaseActionLabel;d&&d.classList.contains(c)&&d.classList.remove(c);a.o=b;a.o.classList.add(c);a.D.textContent=f}
function Y(a,b,c,d){b.preventDefault();a.l.buildUrl(c,!1).then(function(b){a.l.loginWithUrl(b,d)})}R.prototype.pingback=function(){return Promise.resolve()};(function(a){a.registerServiceForDoc("laterpay",function(a){a=a.getHeadNode();return F(a).then(function(a){var b=a.getVendorSource("laterpay"),c=new R(a,b),e=b.getAdapter();e.registerVendor(c);return c})})})(self.AMP);
})});

//# sourceMappingURL=amp-access-laterpay-0.2.js.map