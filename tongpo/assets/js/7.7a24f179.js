(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{615:function(t,n,e){"use strict";var r=e(375);function o(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},619:function(t,n,e){var r=e(52),o=e(375),i=e(29)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},620:function(t,n,e){var r,o,i,c=e(139),s=e(638),a=e(376),u=e(141),f=e(36),v=f.process,l=f.setImmediate,h=f.clearImmediate,p=f.MessageChannel,d=f.Dispatch,m=0,_={},y=function(){var t=+this;if(_.hasOwnProperty(t)){var n=_[t];delete _[t],n()}},w=function(t){y.call(t.data)};l&&h||(l=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return _[++m]=function(){s("function"==typeof t?t:Function(t),n)},r(m),m},h=function(t){delete _[t]},"process"==e(98)(v)?r=function(t){v.nextTick(c(y,t,1))}:d&&d.now?r=function(t){d.now(c(y,t,1))}:p?(i=(o=new p).port2,o.port1.onmessage=w,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",w,!1)):r="onreadystatechange"in u("script")?function(t){a.appendChild(u("script")).onreadystatechange=function(){a.removeChild(this),y.call(t)}}:function(t){setTimeout(c(y,t,1),0)}),t.exports={set:l,clear:h}},621:function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},622:function(t,n,e){var r=e(52),o=e(67),i=e(615);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},633:function(t,n,e){t.exports=e(634)},634:function(t,n,e){e(377),e(74),e(100),e(635),e(643),e(644),t.exports=e(32).Promise},635:function(t,n,e){"use strict";var r,o,i,c,s=e(73),a=e(36),u=e(139),f=e(144),v=e(66),l=e(67),h=e(375),p=e(636),d=e(637),m=e(619),_=e(620).set,y=e(639)(),w=e(615),x=e(621),g=e(640),P=e(622),j=a.TypeError,b=a.process,E=b&&b.versions,M=E&&E.v8||"",O=a.Promise,T="process"==f(b),k=function(){},R=o=w.f,U=!!function(){try{var t=O.resolve(1),n=(t.constructor={})[e(29)("species")]=function(t){t(k,k)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n&&0!==M.indexOf("6.6")&&-1===g.indexOf("Chrome/66")}catch(t){}}(),F=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},S=function(t,n){if(!t._n){t._n=!0;var e=t._c;y((function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,s=o?n.ok:n.fail,a=n.resolve,u=n.reject,f=n.domain;try{s?(o||(2==t._h&&D(t),t._h=1),!0===s?e=r:(f&&f.enter(),e=s(r),f&&(f.exit(),c=!0)),e===n.promise?u(j("Promise-chain cycle")):(i=F(e))?i.call(e,a,u):a(e)):u(r)}catch(t){f&&!c&&f.exit(),u(t)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&C(t)}))}},C=function(t){_.call(a,(function(){var n,e,r,o=t._v,i=A(t);if(i&&(n=x((function(){T?b.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=T||A(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){_.call(a,(function(){var n;T?b.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})}))},G=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),S(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw j("Promise can't be resolved itself");(n=F(t))?y((function(){var r={_w:e,_d:!1};try{n.call(t,u(I,r,1),u(G,r,1))}catch(t){G.call(r,t)}})):(e._v=t,e._s=1,S(e,!1))}catch(t){G.call({_w:e,_d:!1},t)}}};U||(O=function(t){p(this,O,"Promise","_h"),h(t),r.call(this);try{t(u(I,this,1),u(G,this,1))}catch(t){G.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(641)(O.prototype,{then:function(t,n){var e=R(m(this,O));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=T?b.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&S(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=u(I,t,1),this.reject=u(G,t,1)},w.f=R=function(t){return t===O||t===c?new i(t):o(t)}),v(v.G+v.W+v.F*!U,{Promise:O}),e(99)(O,"Promise"),e(642)("Promise"),c=e(32).Promise,v(v.S+v.F*!U,"Promise",{reject:function(t){var n=R(this);return(0,n.reject)(t),n.promise}}),v(v.S+v.F*(s||!U),"Promise",{resolve:function(t){return P(s&&this===c?O:this,t)}}),v(v.S+v.F*!(U&&e(380)((function(t){O.all(t).catch(k)}))),"Promise",{all:function(t){var n=this,e=R(n),r=e.resolve,o=e.reject,i=x((function(){var e=[],i=0,c=1;d(t,!1,(function(t){var s=i++,a=!1;e.push(void 0),c++,n.resolve(t).then((function(t){a||(a=!0,e[s]=t,--c||r(e))}),o)})),--c||r(e)}));return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=R(n),r=e.reject,o=x((function(){d(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return o.e&&r(o.v),e.promise}})},636:function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},637:function(t,n,e){var r=e(139),o=e(378),i=e(379),c=e(52),s=e(142),a=e(143),u={},f={};(n=t.exports=function(t,n,e,v,l){var h,p,d,m,_=l?function(){return t}:a(t),y=r(e,v,n?2:1),w=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(i(_)){for(h=s(t.length);h>w;w++)if((m=n?y(c(p=t[w])[0],p[1]):y(t[w]))===u||m===f)return m}else for(d=_.call(t);!(p=d.next()).done;)if((m=o(d,y,p.value,n))===u||m===f)return m}).BREAK=u,n.RETURN=f},638:function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},639:function(t,n,e){var r=e(36),o=e(620).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,s=r.Promise,a="process"==e(98)(c);t.exports=function(){var t,n,e,u=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(u)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var f=s.resolve(void 0);e=function(){f.then(u)}}else e=function(){o.call(r,u)};else{var v=!0,l=document.createTextNode("");new i(u).observe(l,{characterData:!0}),e=function(){l.data=v=!v}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},640:function(t,n,e){var r=e(36).navigator;t.exports=r&&r.userAgent||""},641:function(t,n,e){var r=e(53);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},642:function(t,n,e){"use strict";var r=e(36),o=e(32),i=e(38),c=e(39),s=e(29)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[s]&&i.f(n,s,{configurable:!0,get:function(){return this}})}},643:function(t,n,e){"use strict";var r=e(66),o=e(32),i=e(36),c=e(619),s=e(622);r(r.P+r.R,"Promise",{finally:function(t){var n=c(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return s(n,t()).then((function(){return e}))}:t,e?function(e){return s(n,t()).then((function(){throw e}))}:t)}})},644:function(t,n,e){"use strict";var r=e(66),o=e(615),i=e(621);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},690:function(t,n,e){},729:function(t,n,e){"use strict";e(690)},732:function(t,n,e){"use strict";e.r(n);var r=e(633),o=e.n(r);function i(){var t,n=null,e=navigator.mediaDevices||{};return e.getUserMedia?n=e.getUserMedia.bind(e):(t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia)&&(n=function(n){return new o.a((function(e,r){t.call(navigator,n,e,r)}))}),n}var c=e(145),s={setup(t,n){const e=Object(c.e)(null);return Object(c.c)(async()=>{const t=await(n={video:!0,audio:!0},r=i(),r?r(n):o.a.reject("浏览器不支持此API"));var n,r;e.value.srcObject=t,Object(c.d)(()=>{t.getTracks().forEach(t=>t.stop())})}),{video:e,play:()=>{e.value.play()}}}},a=(e(729),e(21)),u=Object(a.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("video",{ref:"video",on:{canplay:this.play}})])}),[],!1,null,"d1544c30",null);n.default=u.exports}}]);