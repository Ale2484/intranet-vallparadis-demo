var Ee=(j,u)=>()=>(u||j((u={exports:{}}).exports,u),u.exports);var St=Ee((de,ve)=>{(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))g(E);new MutationObserver(E=>{for(const b of E)if(b.type==="childList")for(const h of b.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&g(h)}).observe(document,{childList:!0,subtree:!0});function f(E){const b={};return E.integrity&&(b.integrity=E.integrity),E.referrerPolicy&&(b.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?b.credentials="include":E.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(E){if(E.ep)return;E.ep=!0;const b=f(E);fetch(E.href,b)}})();/*!
 * Quill Editor v1.3.6
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */(function(j,u){typeof de=="object"&&typeof ve=="object"?ve.exports=u():typeof define=="function"&&define.amd?define([],u):typeof de=="object"?de.Quill=u():j.Quill=u()})(typeof self<"u"?self:void 0,function(){return(function(j){function u(g){if(f[g])return f[g].exports;var E=f[g]={i:g,l:!1,exports:{}};return j[g].call(E.exports,E,E.exports,u),E.l=!0,E.exports}var f={};return u.m=j,u.c=f,u.d=function(g,E,b){u.o(g,E)||Object.defineProperty(g,E,{configurable:!1,enumerable:!0,get:b})},u.n=function(g){var E=g&&g.__esModule?function(){return g.default}:function(){return g};return u.d(E,"a",E),E},u.o=function(g,E){return Object.prototype.hasOwnProperty.call(g,E)},u.p="",u(u.s=45)})([function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0});var g=f(17),E=f(18),b=f(19),h=f(48),p=f(49),c=f(50),e=f(51),t=f(52),n=f(11),r=f(29),l=f(30),s=f(28),a=f(1),i={Scope:a.Scope,create:a.create,find:a.find,query:a.query,register:a.register,Container:g.default,Format:E.default,Leaf:b.default,Embed:e.default,Scroll:h.default,Block:c.default,Inline:p.default,Text:t.default,Attributor:{Attribute:n.default,Class:r.default,Style:l.default,Store:s.default}};u.default=i},function(j,u,f){function g(s,a){var i=b(s);if(i==null)throw new c("Unable to create "+s+" blot");var m=i;return new m(s instanceof Node||s.nodeType===Node.TEXT_NODE?s:m.create(a),a)}function E(s,a){return a===void 0&&(a=!1),s==null?null:s[u.DATA_KEY]!=null?s[u.DATA_KEY].blot:a?E(s.parentNode,a):null}function b(s,a){a===void 0&&(a=l.ANY);var i;if(typeof s=="string")i=r[s]||e[s];else if(s instanceof Text||s.nodeType===Node.TEXT_NODE)i=r.text;else if(typeof s=="number")s&l.LEVEL&l.BLOCK?i=r.block:s&l.LEVEL&l.INLINE&&(i=r.inline);else if(s instanceof HTMLElement){var m=(s.getAttribute("class")||"").split(/\s+/);for(var o in m)if(i=t[m[o]])break;i=i||n[s.tagName]}return i==null?null:a&l.LEVEL&i.scope&&a&l.TYPE&i.scope?i:null}function h(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];if(s.length>1)return s.map(function(o){return h(o)});var i=s[0];if(typeof i.blotName!="string"&&typeof i.attrName!="string")throw new c("Invalid definition");if(i.blotName==="abstract")throw new c("Cannot register abstract class");if(r[i.blotName||i.attrName]=i,typeof i.keyName=="string")e[i.keyName]=i;else if(i.className!=null&&(t[i.className]=i),i.tagName!=null){Array.isArray(i.tagName)?i.tagName=i.tagName.map(function(o){return o.toUpperCase()}):i.tagName=i.tagName.toUpperCase();var m=Array.isArray(i.tagName)?i.tagName:[i.tagName];m.forEach(function(o){n[o]!=null&&i.className!=null||(n[o]=i)})}return i}var p=this&&this.__extends||(function(){var s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,i){a.__proto__=i}||function(a,i){for(var m in i)i.hasOwnProperty(m)&&(a[m]=i[m])};return function(a,i){function m(){this.constructor=a}s(a,i),a.prototype=i===null?Object.create(i):(m.prototype=i.prototype,new m)}})();Object.defineProperty(u,"__esModule",{value:!0});var c=(function(s){function a(i){var m=this;return i="[Parchment] "+i,m=s.call(this,i)||this,m.message=i,m.name=m.constructor.name,m}return p(a,s),a})(Error);u.ParchmentError=c;var e={},t={},n={},r={};u.DATA_KEY="__blot";var l;(function(s){s[s.TYPE=3]="TYPE",s[s.LEVEL=12]="LEVEL",s[s.ATTRIBUTE=13]="ATTRIBUTE",s[s.BLOT=14]="BLOT",s[s.INLINE=7]="INLINE",s[s.BLOCK=11]="BLOCK",s[s.BLOCK_BLOT=10]="BLOCK_BLOT",s[s.INLINE_BLOT=6]="INLINE_BLOT",s[s.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",s[s.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",s[s.ANY=15]="ANY"})(l=u.Scope||(u.Scope={})),u.create=g,u.find=E,u.query=b,u.register=h},function(j,u){var f=Object.prototype.hasOwnProperty,g=Object.prototype.toString,E=function(h){return typeof Array.isArray=="function"?Array.isArray(h):g.call(h)==="[object Array]"},b=function(h){if(!h||g.call(h)!=="[object Object]")return!1;var p=f.call(h,"constructor"),c=h.constructor&&h.constructor.prototype&&f.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!p&&!c)return!1;var e;for(e in h);return e===void 0||f.call(h,e)};j.exports=function h(){var p,c,e,t,n,r,l=arguments[0],s=1,a=arguments.length,i=!1;for(typeof l=="boolean"&&(i=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<a;++s)if((p=arguments[s])!=null)for(c in p)e=l[c],t=p[c],l!==t&&(i&&t&&(b(t)||(n=E(t)))?(n?(n=!1,r=e&&E(e)?e:[]):r=e&&b(e)?e:{},l[c]=h(i,r,t)):t!==void 0&&(l[c]=t));return l}},function(j,u,f){function g(w){return w&&w.__esModule?w:{default:w}}function E(w,d){if(!(w instanceof d))throw new TypeError("Cannot call a class as a function")}function b(w,d){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?w:d}function h(w,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);w.prototype=Object.create(d&&d.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(w,d):w.__proto__=d)}function p(w){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return w==null?d:(typeof w.formats=="function"&&(d=(0,n.default)(d,w.formats())),w.parent==null||w.parent.blotName=="scroll"||w.parent.statics.scope!==w.statics.scope?d:p(w.parent,d))}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.BlockEmbed=u.bubbleFormats=void 0;var c=(function(){function w(d,v){for(var F=0;F<v.length;F++){var N=v[F];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(d,N.key,N)}}return function(d,v,F){return v&&w(d.prototype,v),F&&w(d,F),d}})(),e=function w(d,v,F){d===null&&(d=Function.prototype);var N=Object.getOwnPropertyDescriptor(d,v);if(N===void 0){var L=Object.getPrototypeOf(d);return L===null?void 0:w(L,v,F)}if("value"in N)return N.value;var B=N.get;if(B!==void 0)return B.call(F)},t=f(2),n=g(t),r=f(4),l=g(r),s=f(0),a=g(s),i=f(14),m=g(i),o=f(5),x=g(o),_=f(8),A=g(_),O=(function(w){function d(){return E(this,d),b(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return h(d,w),c(d,[{key:"attach",value:function(){e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"attach",this).call(this),this.attributes=new a.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new l.default().insert(this.value(),(0,n.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(v,F){var N=a.default.query(v,a.default.Scope.BLOCK_ATTRIBUTE);N!=null&&this.attributes.attribute(N,F)}},{key:"formatAt",value:function(v,F,N,L){this.format(N,L)}},{key:"insertAt",value:function(v,F,N){if(typeof F=="string"&&F.endsWith(`
`)){var L=a.default.create(y.blotName);this.parent.insertBefore(L,v===0?this:this.next),L.insertAt(0,F.slice(0,-1))}else e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"insertAt",this).call(this,v,F,N)}}]),d})(a.default.Embed);O.scope=a.default.Scope.BLOCK_BLOT;var y=(function(w){function d(v){E(this,d);var F=b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,v));return F.cache={},F}return h(d,w),c(d,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(a.default.Leaf).reduce(function(v,F){return F.length()===0?v:v.insert(F.value(),p(F))},new l.default).insert(`
`,p(this))),this.cache.delta}},{key:"deleteAt",value:function(v,F){e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"deleteAt",this).call(this,v,F),this.cache={}}},{key:"formatAt",value:function(v,F,N,L){F<=0||(a.default.query(N,a.default.Scope.BLOCK)?v+F===this.length()&&this.format(N,L):e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"formatAt",this).call(this,v,Math.min(F,this.length()-v-1),N,L),this.cache={})}},{key:"insertAt",value:function(v,F,N){if(N!=null)return e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"insertAt",this).call(this,v,F,N);if(F.length!==0){var L=F.split(`
`),B=L.shift();B.length>0&&(v<this.length()-1||this.children.tail==null?e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"insertAt",this).call(this,Math.min(v,this.length()-1),B):this.children.tail.insertAt(this.children.tail.length(),B),this.cache={});var Z=this;L.reduce(function(U,M){return Z=Z.split(U,!0),Z.insertAt(0,M),M.length},v+B.length)}}},{key:"insertBefore",value:function(v,F){var N=this.children.head;e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"insertBefore",this).call(this,v,F),N instanceof m.default&&N.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(v,F){e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"moveChildren",this).call(this,v,F),this.cache={}}},{key:"optimize",value:function(v){e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"optimize",this).call(this,v),this.cache={}}},{key:"path",value:function(v){return e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"path",this).call(this,v,!0)}},{key:"removeChild",value:function(v){e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"removeChild",this).call(this,v),this.cache={}}},{key:"split",value:function(v){var F=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(F&&(v===0||v>=this.length()-1)){var N=this.clone();return v===0?(this.parent.insertBefore(N,this),this):(this.parent.insertBefore(N,this.next),N)}var L=e(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"split",this).call(this,v,F);return this.cache={},L}}]),d})(a.default.Block);y.blotName="block",y.tagName="P",y.defaultChild="break",y.allowedChildren=[x.default,a.default.Embed,A.default],u.bubbleFormats=p,u.BlockEmbed=O,u.default=y},function(j,u,f){var g=f(54),E=f(12),b=f(2),h=f(20),p="\0",c=function(e){Array.isArray(e)?this.ops=e:e!=null&&Array.isArray(e.ops)?this.ops=e.ops:this.ops=[]};c.prototype.insert=function(e,t){var n={};return e.length===0?this:(n.insert=e,t!=null&&typeof t=="object"&&Object.keys(t).length>0&&(n.attributes=t),this.push(n))},c.prototype.delete=function(e){return e<=0?this:this.push({delete:e})},c.prototype.retain=function(e,t){if(e<=0)return this;var n={retain:e};return t!=null&&typeof t=="object"&&Object.keys(t).length>0&&(n.attributes=t),this.push(n)},c.prototype.push=function(e){var t=this.ops.length,n=this.ops[t-1];if(e=b(!0,{},e),typeof n=="object"){if(typeof e.delete=="number"&&typeof n.delete=="number")return this.ops[t-1]={delete:n.delete+e.delete},this;if(typeof n.delete=="number"&&e.insert!=null&&(t-=1,typeof(n=this.ops[t-1])!="object"))return this.ops.unshift(e),this;if(E(e.attributes,n.attributes)){if(typeof e.insert=="string"&&typeof n.insert=="string")return this.ops[t-1]={insert:n.insert+e.insert},typeof e.attributes=="object"&&(this.ops[t-1].attributes=e.attributes),this;if(typeof e.retain=="number"&&typeof n.retain=="number")return this.ops[t-1]={retain:n.retain+e.retain},typeof e.attributes=="object"&&(this.ops[t-1].attributes=e.attributes),this}}return t===this.ops.length?this.ops.push(e):this.ops.splice(t,0,e),this},c.prototype.chop=function(){var e=this.ops[this.ops.length-1];return e&&e.retain&&!e.attributes&&this.ops.pop(),this},c.prototype.filter=function(e){return this.ops.filter(e)},c.prototype.forEach=function(e){this.ops.forEach(e)},c.prototype.map=function(e){return this.ops.map(e)},c.prototype.partition=function(e){var t=[],n=[];return this.forEach(function(r){(e(r)?t:n).push(r)}),[t,n]},c.prototype.reduce=function(e,t){return this.ops.reduce(e,t)},c.prototype.changeLength=function(){return this.reduce(function(e,t){return t.insert?e+h.length(t):t.delete?e-t.delete:e},0)},c.prototype.length=function(){return this.reduce(function(e,t){return e+h.length(t)},0)},c.prototype.slice=function(e,t){e=e||0,typeof t!="number"&&(t=1/0);for(var n=[],r=h.iterator(this.ops),l=0;l<t&&r.hasNext();){var s;l<e?s=r.next(e-l):(s=r.next(t-l),n.push(s)),l+=h.length(s)}return new c(n)},c.prototype.compose=function(e){for(var t=h.iterator(this.ops),n=h.iterator(e.ops),r=new c;t.hasNext()||n.hasNext();)if(n.peekType()==="insert")r.push(n.next());else if(t.peekType()==="delete")r.push(t.next());else{var l=Math.min(t.peekLength(),n.peekLength()),s=t.next(l),a=n.next(l);if(typeof a.retain=="number"){var i={};typeof s.retain=="number"?i.retain=l:i.insert=s.insert;var m=h.attributes.compose(s.attributes,a.attributes,typeof s.retain=="number");m&&(i.attributes=m),r.push(i)}else typeof a.delete=="number"&&typeof s.retain=="number"&&r.push(a)}return r.chop()},c.prototype.concat=function(e){var t=new c(this.ops.slice());return e.ops.length>0&&(t.push(e.ops[0]),t.ops=t.ops.concat(e.ops.slice(1))),t},c.prototype.diff=function(e,t){if(this.ops===e.ops)return new c;var n=[this,e].map(function(i){return i.map(function(m){if(m.insert!=null)return typeof m.insert=="string"?m.insert:p;var o=i===e?"on":"with";throw new Error("diff() called "+o+" non-document")}).join("")}),r=new c,l=g(n[0],n[1],t),s=h.iterator(this.ops),a=h.iterator(e.ops);return l.forEach(function(i){for(var m=i[1].length;m>0;){var o=0;switch(i[0]){case g.INSERT:o=Math.min(a.peekLength(),m),r.push(a.next(o));break;case g.DELETE:o=Math.min(m,s.peekLength()),s.next(o),r.delete(o);break;case g.EQUAL:o=Math.min(s.peekLength(),a.peekLength(),m);var x=s.next(o),_=a.next(o);E(x.insert,_.insert)?r.retain(o,h.attributes.diff(x.attributes,_.attributes)):r.push(_).delete(o)}m-=o}}),r.chop()},c.prototype.eachLine=function(e,t){t=t||`
`;for(var n=h.iterator(this.ops),r=new c,l=0;n.hasNext();){if(n.peekType()!=="insert")return;var s=n.peek(),a=h.length(s)-n.peekLength(),i=typeof s.insert=="string"?s.insert.indexOf(t,a)-a:-1;if(i<0)r.push(n.next());else if(i>0)r.push(n.next(i));else{if(e(r,n.next(1).attributes||{},l)===!1)return;l+=1,r=new c}}r.length()>0&&e(r,{},l)},c.prototype.transform=function(e,t){if(t=!!t,typeof e=="number")return this.transformPosition(e,t);for(var n=h.iterator(this.ops),r=h.iterator(e.ops),l=new c;n.hasNext()||r.hasNext();)if(n.peekType()!=="insert"||!t&&r.peekType()==="insert")if(r.peekType()==="insert")l.push(r.next());else{var s=Math.min(n.peekLength(),r.peekLength()),a=n.next(s),i=r.next(s);if(a.delete)continue;i.delete?l.push(i):l.retain(s,h.attributes.transform(a.attributes,i.attributes,t))}else l.retain(h.length(n.next()));return l.chop()},c.prototype.transformPosition=function(e,t){t=!!t;for(var n=h.iterator(this.ops),r=0;n.hasNext()&&r<=e;){var l=n.peekLength(),s=n.peekType();n.next(),s!=="delete"?(s==="insert"&&(r<e||!t)&&(e+=l),r+=l):e-=Math.min(l,e-r)}return e},j.exports=c},function(j,u,f){function g(s){return s&&s.__esModule?s:{default:s}}function E(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function b(s,a){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?s:a}function h(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(s,a):s.__proto__=a)}Object.defineProperty(u,"__esModule",{value:!0});var p=(function(){function s(a,i){for(var m=0;m<i.length;m++){var o=i[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}return function(a,i,m){return i&&s(a.prototype,i),m&&s(a,m),a}})(),c=function s(a,i,m){a===null&&(a=Function.prototype);var o=Object.getOwnPropertyDescriptor(a,i);if(o===void 0){var x=Object.getPrototypeOf(a);return x===null?void 0:s(x,i,m)}if("value"in o)return o.value;var _=o.get;if(_!==void 0)return _.call(m)},e=f(8),t=g(e),n=f(0),r=g(n),l=(function(s){function a(){return E(this,a),b(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return h(a,s),p(a,[{key:"formatAt",value:function(i,m,o,x){if(a.compare(this.statics.blotName,o)<0&&r.default.query(o,r.default.Scope.BLOT)){var _=this.isolate(i,m);x&&_.wrap(o,x)}else c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"formatAt",this).call(this,i,m,o,x)}},{key:"optimize",value:function(i){if(c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"optimize",this).call(this,i),this.parent instanceof a&&a.compare(this.statics.blotName,this.parent.statics.blotName)>0){var m=this.parent.isolate(this.offset(),this.length());this.moveChildren(m),m.wrap(this)}}}],[{key:"compare",value:function(i,m){var o=a.order.indexOf(i),x=a.order.indexOf(m);return o>=0||x>=0?o-x:i===m?0:i<m?-1:1}}]),a})(r.default.Inline);l.allowedChildren=[l,r.default.Embed,t.default],l.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],u.default=l},function(j,u,f){function g(M){return M&&M.__esModule?M:{default:M}}function E(M,k,T){return k in M?Object.defineProperty(M,k,{value:T,enumerable:!0,configurable:!0,writable:!0}):M[k]=T,M}function b(M,k){if(!(M instanceof k))throw new TypeError("Cannot call a class as a function")}function h(M,k){if(k=(0,v.default)(!0,{container:M,modules:{clipboard:!0,keyboard:!0,history:!0}},k),k.theme&&k.theme!==U.DEFAULTS.theme){if(k.theme=U.import("themes/"+k.theme),k.theme==null)throw new Error("Invalid theme "+k.theme+". Did you register it?")}else k.theme=B.default;var T=(0,v.default)(!0,{},k.theme.DEFAULTS);[T,k].forEach(function(I){I.modules=I.modules||{},Object.keys(I.modules).forEach(function(D){I.modules[D]===!0&&(I.modules[D]={})})});var S=Object.keys(T.modules).concat(Object.keys(k.modules)),P=S.reduce(function(I,D){var q=U.import("modules/"+D);return q==null?Z.error("Cannot load "+D+" module. Are you sure you registered it?"):I[D]=q.DEFAULTS||{},I},{});return k.modules!=null&&k.modules.toolbar&&k.modules.toolbar.constructor!==Object&&(k.modules.toolbar={container:k.modules.toolbar}),k=(0,v.default)(!0,{},U.DEFAULTS,{modules:P},T,k),["bounds","container","scrollingContainer"].forEach(function(I){typeof k[I]=="string"&&(k[I]=document.querySelector(k[I]))}),k.modules=Object.keys(k.modules).reduce(function(I,D){return k.modules[D]&&(I[D]=k.modules[D]),I},{}),k}function p(M,k,T,S){if(this.options.strict&&!this.isEnabled()&&k===o.default.sources.USER)return new s.default;var P=T==null?null:this.getSelection(),I=this.editor.delta,D=M();if(P!=null&&(T===!0&&(T=P.index),S==null?P=e(P,D,k):S!==0&&(P=e(P,T,S,k)),this.setSelection(P,o.default.sources.SILENT)),D.length()>0){var q,C=[o.default.events.TEXT_CHANGE,D,I,k];if((q=this.emitter).emit.apply(q,[o.default.events.EDITOR_CHANGE].concat(C)),k!==o.default.sources.SILENT){var R;(R=this.emitter).emit.apply(R,C)}}return D}function c(M,k,T,S,P){var I={};return typeof M.index=="number"&&typeof M.length=="number"?typeof k!="number"?(P=S,S=T,T=k,k=M.length,M=M.index):(k=M.length,M=M.index):typeof k!="number"&&(P=S,S=T,T=k,k=0),(T===void 0?"undefined":t(T))==="object"?(I=T,P=S):typeof T=="string"&&(S!=null?I[T]=S:P=T),P=P||o.default.sources.API,[M,k,I,P]}function e(M,k,T,S){if(M==null)return null;var P=void 0,I=void 0;if(k instanceof s.default){var D=[M.index,M.index+M.length].map(function(V){return k.transformPosition(V,S!==o.default.sources.USER)}),q=n(D,2);P=q[0],I=q[1]}else{var C=[M.index,M.index+M.length].map(function(V){return V<k||V===k&&S===o.default.sources.USER?V:T>=0?V+T:Math.max(k,V+T)}),R=n(C,2);P=R[0],I=R[1]}return new y.Range(P,I-P)}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.overload=u.expandConfig=void 0;var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},n=(function(){function M(k,T){var S=[],P=!0,I=!1,D=void 0;try{for(var q,C=k[Symbol.iterator]();!(P=(q=C.next()).done)&&(S.push(q.value),!T||S.length!==T);P=!0);}catch(R){I=!0,D=R}finally{try{!P&&C.return&&C.return()}finally{if(I)throw D}}return S}return function(k,T){if(Array.isArray(k))return k;if(Symbol.iterator in Object(k))return M(k,T);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),r=(function(){function M(k,T){for(var S=0;S<T.length;S++){var P=T[S];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(k,P.key,P)}}return function(k,T,S){return T&&M(k.prototype,T),S&&M(k,S),k}})();f(53);var l=f(4),s=g(l),a=f(57),i=g(a),m=f(9),o=g(m),x=f(7),_=g(x),A=f(0),O=g(A),y=f(22),w=g(y),d=f(2),v=g(d),F=f(10),N=g(F),L=f(32),B=g(L),Z=(0,N.default)("quill"),U=(function(){function M(k){var T=this,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(b(this,M),this.options=h(k,S),this.container=this.options.container,this.container==null)return Z.error("Invalid Quill container",k);this.options.debug&&M.debug(this.options.debug);var P=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new o.default,this.scroll=O.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new i.default(this.scroll),this.selection=new w.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(o.default.events.EDITOR_CHANGE,function(D){D===o.default.events.TEXT_CHANGE&&T.root.classList.toggle("ql-blank",T.editor.isBlank())}),this.emitter.on(o.default.events.SCROLL_UPDATE,function(D,q){var C=T.selection.lastRange,R=C&&C.length===0?C.index:void 0;p.call(T,function(){return T.editor.update(null,q,R)},D)});var I=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+P+"<p><br></p></div>");this.setContents(I),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return r(M,null,[{key:"debug",value:function(k){k===!0&&(k="log"),N.default.level(k)}},{key:"find",value:function(k){return k.__quill||O.default.find(k)}},{key:"import",value:function(k){return this.imports[k]==null&&Z.error("Cannot import "+k+". Are you sure it was registered?"),this.imports[k]}},{key:"register",value:function(k,T){var S=this,P=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(typeof k!="string"){var I=k.attrName||k.blotName;typeof I=="string"?this.register("formats/"+I,k,T):Object.keys(k).forEach(function(D){S.register(D,k[D],T)})}else this.imports[k]==null||P||Z.warn("Overwriting "+k+" with",T),this.imports[k]=T,(k.startsWith("blots/")||k.startsWith("formats/"))&&T.blotName!=="abstract"?O.default.register(T):k.startsWith("modules")&&typeof T.register=="function"&&T.register()}}]),r(M,[{key:"addContainer",value:function(k){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof k=="string"){var S=k;k=document.createElement("div"),k.classList.add(S)}return this.container.insertBefore(k,T),k}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(k,T,S){var P=this,I=c(k,T,S),D=n(I,4);return k=D[0],T=D[1],S=D[3],p.call(this,function(){return P.editor.deleteText(k,T)},S,k,-1*T)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var k=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.scroll.enable(k),this.container.classList.toggle("ql-disabled",!k)}},{key:"focus",value:function(){var k=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=k,this.scrollIntoView()}},{key:"format",value:function(k,T){var S=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:o.default.sources.API;return p.call(this,function(){var I=S.getSelection(!0),D=new s.default;if(I==null)return D;if(O.default.query(k,O.default.Scope.BLOCK))D=S.editor.formatLine(I.index,I.length,E({},k,T));else{if(I.length===0)return S.selection.format(k,T),D;D=S.editor.formatText(I.index,I.length,E({},k,T))}return S.setSelection(I,o.default.sources.SILENT),D},P)}},{key:"formatLine",value:function(k,T,S,P,I){var D=this,q=void 0,C=c(k,T,S,P,I),R=n(C,4);return k=R[0],T=R[1],q=R[2],I=R[3],p.call(this,function(){return D.editor.formatLine(k,T,q)},I,k,0)}},{key:"formatText",value:function(k,T,S,P,I){var D=this,q=void 0,C=c(k,T,S,P,I),R=n(C,4);return k=R[0],T=R[1],q=R[2],I=R[3],p.call(this,function(){return D.editor.formatText(k,T,q)},I,k,0)}},{key:"getBounds",value:function(k){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,S=void 0;S=typeof k=="number"?this.selection.getBounds(k,T):this.selection.getBounds(k.index,k.length);var P=this.container.getBoundingClientRect();return{bottom:S.bottom-P.top,height:S.height,left:S.left-P.left,right:S.right-P.left,top:S.top-P.top,width:S.width}}},{key:"getContents",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-k,S=c(k,T),P=n(S,2);return k=P[0],T=P[1],this.editor.getContents(k,T)}},{key:"getFormat",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof k=="number"?this.editor.getFormat(k,T):this.editor.getFormat(k.index,k.length)}},{key:"getIndex",value:function(k){return k.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(k){return this.scroll.leaf(k)}},{key:"getLine",value:function(k){return this.scroll.line(k)}},{key:"getLines",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof k!="number"?this.scroll.lines(k.index,k.length):this.scroll.lines(k,T)}},{key:"getModule",value:function(k){return this.theme.modules[k]}},{key:"getSelection",value:function(){return arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-k,S=c(k,T),P=n(S,2);return k=P[0],T=P[1],this.editor.getText(k,T)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(k,T,S){var P=this,I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:M.sources.API;return p.call(this,function(){return P.editor.insertEmbed(k,T,S)},I,k)}},{key:"insertText",value:function(k,T,S,P,I){var D=this,q=void 0,C=c(k,0,S,P,I),R=n(C,4);return k=R[0],q=R[2],I=R[3],p.call(this,function(){return D.editor.insertText(k,T,q)},I,k,T.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(k,T,S){this.clipboard.dangerouslyPasteHTML(k,T,S)}},{key:"removeFormat",value:function(k,T,S){var P=this,I=c(k,T,S),D=n(I,4);return k=D[0],T=D[1],S=D[3],p.call(this,function(){return P.editor.removeFormat(k,T)},S,k)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(k){var T=this,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o.default.sources.API;return p.call(this,function(){k=new s.default(k);var P=T.getLength(),I=T.editor.deleteText(0,P),D=T.editor.applyDelta(k),q=D.ops[D.ops.length-1];return q!=null&&typeof q.insert=="string"&&q.insert[q.insert.length-1]===`
`&&(T.editor.deleteText(T.getLength()-1,1),D.delete(1)),I.compose(D)},S)}},{key:"setSelection",value:function(k,T,S){if(k==null)this.selection.setRange(null,T||M.sources.API);else{var P=c(k,T,S),I=n(P,4);k=I[0],T=I[1],S=I[3],this.selection.setRange(new y.Range(k,T),S),S!==o.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(k){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o.default.sources.API,S=new s.default().insert(k);return this.setContents(S,T)}},{key:"update",value:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o.default.sources.USER,T=this.scroll.update(k);return this.selection.update(k),T}},{key:"updateContents",value:function(k){var T=this,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o.default.sources.API;return p.call(this,function(){return k=new s.default(k),T.editor.applyDelta(k,S)},S,!0)}}]),M})();U.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},U.events=o.default.events,U.sources=o.default.sources,U.version="1.3.6",U.imports={delta:s.default,parchment:O.default,"core/module":_.default,"core/theme":B.default},u.expandConfig=h,u.overload=c,u.default=U},function(j,u,f){function g(b,h){if(!(b instanceof h))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(u,"__esModule",{value:!0});var E=function b(h){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};g(this,b),this.quill=h,this.options=p};E.DEFAULTS={},u.default=E},function(j,u,f){function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?e:t}function b(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(u,"__esModule",{value:!0});var h=f(0),p=(function(e){return e&&e.__esModule?e:{default:e}})(h),c=(function(e){function t(){return g(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t})(p.default.Text);u.default=c},function(j,u,f){function g(a){return a&&a.__esModule?a:{default:a}}function E(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}function b(a,i){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||typeof i!="object"&&typeof i!="function"?a:i}function h(a,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);a.prototype=Object.create(i&&i.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(a,i):a.__proto__=i)}Object.defineProperty(u,"__esModule",{value:!0});var p=(function(){function a(i,m){for(var o=0;o<m.length;o++){var x=m[o];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(i,x.key,x)}}return function(i,m,o){return m&&a(i.prototype,m),o&&a(i,o),i}})(),c=function a(i,m,o){i===null&&(i=Function.prototype);var x=Object.getOwnPropertyDescriptor(i,m);if(x===void 0){var _=Object.getPrototypeOf(i);return _===null?void 0:a(_,m,o)}if("value"in x)return x.value;var A=x.get;if(A!==void 0)return A.call(o)},e=f(58),t=g(e),n=f(10),r=g(n),l=(0,r.default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach(function(a){document.addEventListener(a,function(){for(var i=arguments.length,m=Array(i),o=0;o<i;o++)m[o]=arguments[o];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(x){if(x.__quill&&x.__quill.emitter){var _;(_=x.__quill.emitter).handleDOM.apply(_,m)}})})});var s=(function(a){function i(){E(this,i);var m=b(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return m.listeners={},m.on("error",l.error),m}return h(i,a),p(i,[{key:"emit",value:function(){l.log.apply(l,arguments),c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(m){for(var o=arguments.length,x=Array(o>1?o-1:0),_=1;_<o;_++)x[_-1]=arguments[_];(this.listeners[m.type]||[]).forEach(function(A){var O=A.node,y=A.handler;(m.target===O||O.contains(m.target))&&y.apply(void 0,[m].concat(x))})}},{key:"listenDOM",value:function(m,o,x){this.listeners[m]||(this.listeners[m]=[]),this.listeners[m].push({node:o,handler:x})}}]),i})(t.default);s.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},s.sources={API:"api",SILENT:"silent",USER:"user"},u.default=s},function(j,u,f){function g(p){if(b.indexOf(p)<=b.indexOf(h)){for(var c,e=arguments.length,t=Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];(c=console)[p].apply(c,t)}}function E(p){return b.reduce(function(c,e){return c[e]=g.bind(console,e,p),c},{})}Object.defineProperty(u,"__esModule",{value:!0});var b=["error","warn","log","info"],h="warn";g.level=E.level=function(p){h=p},u.default=E},function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0});var g=f(1),E=(function(){function b(h,p,c){c===void 0&&(c={}),this.attrName=h,this.keyName=p;var e=g.Scope.TYPE&g.Scope.ATTRIBUTE;c.scope!=null?this.scope=c.scope&g.Scope.LEVEL|e:this.scope=g.Scope.ATTRIBUTE,c.whitelist!=null&&(this.whitelist=c.whitelist)}return b.keys=function(h){return[].map.call(h.attributes,function(p){return p.name})},b.prototype.add=function(h,p){return!!this.canAdd(h,p)&&(h.setAttribute(this.keyName,p),!0)},b.prototype.canAdd=function(h,p){return g.query(h,g.Scope.BLOT&(this.scope|g.Scope.TYPE))!=null&&(this.whitelist==null||(typeof p=="string"?this.whitelist.indexOf(p.replace(/["']/g,""))>-1:this.whitelist.indexOf(p)>-1))},b.prototype.remove=function(h){h.removeAttribute(this.keyName)},b.prototype.value=function(h){var p=h.getAttribute(this.keyName);return this.canAdd(h,p)&&p?p:""},b})();u.default=E},function(j,u,f){function g(t){return t==null}function E(t){return!(!t||typeof t!="object"||typeof t.length!="number")&&typeof t.copy=="function"&&typeof t.slice=="function"&&!(t.length>0&&typeof t[0]!="number")}function b(t,n,r){var l,s;if(g(t)||g(n)||t.prototype!==n.prototype)return!1;if(c(t))return!!c(n)&&(t=h.call(t),n=h.call(n),e(t,n,r));if(E(t)){if(!E(n)||t.length!==n.length)return!1;for(l=0;l<t.length;l++)if(t[l]!==n[l])return!1;return!0}try{var a=p(t),i=p(n)}catch{return!1}if(a.length!=i.length)return!1;for(a.sort(),i.sort(),l=a.length-1;l>=0;l--)if(a[l]!=i[l])return!1;for(l=a.length-1;l>=0;l--)if(s=a[l],!e(t[s],n[s],r))return!1;return typeof t==typeof n}var h=Array.prototype.slice,p=f(55),c=f(56),e=j.exports=function(t,n,r){return r||(r={}),t===n||(t instanceof Date&&n instanceof Date?t.getTime()===n.getTime():!t||!n||typeof t!="object"&&typeof n!="object"?r.strict?t===n:t==n:b(t,n,r))}},function(j,u,f){function g(O){return O&&O.__esModule?O:{default:O}}function E(O,y){if(!(O instanceof y))throw new TypeError("Cannot call a class as a function")}function b(O,y){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!y||typeof y!="object"&&typeof y!="function"?O:y}function h(O,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);O.prototype=Object.create(y&&y.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(O,y):O.__proto__=y)}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.Code=void 0;var p=(function(){function O(y,w){var d=[],v=!0,F=!1,N=void 0;try{for(var L,B=y[Symbol.iterator]();!(v=(L=B.next()).done)&&(d.push(L.value),!w||d.length!==w);v=!0);}catch(Z){F=!0,N=Z}finally{try{!v&&B.return&&B.return()}finally{if(F)throw N}}return d}return function(y,w){if(Array.isArray(y))return y;if(Symbol.iterator in Object(y))return O(y,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),c=(function(){function O(y,w){for(var d=0;d<w.length;d++){var v=w[d];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(y,v.key,v)}}return function(y,w,d){return w&&O(y.prototype,w),d&&O(y,d),y}})(),e=function O(y,w,d){y===null&&(y=Function.prototype);var v=Object.getOwnPropertyDescriptor(y,w);if(v===void 0){var F=Object.getPrototypeOf(y);return F===null?void 0:O(F,w,d)}if("value"in v)return v.value;var N=v.get;if(N!==void 0)return N.call(d)},t=f(4),n=g(t),r=f(0),l=g(r),s=f(3),a=g(s),i=f(5),m=g(i),o=f(8),x=g(o),_=(function(O){function y(){return E(this,y),b(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return h(y,O),y})(m.default);_.blotName="code",_.tagName="CODE";var A=(function(O){function y(){return E(this,y),b(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return h(y,O),c(y,[{key:"delta",value:function(){var w=this,d=this.domNode.textContent;return d.endsWith(`
`)&&(d=d.slice(0,-1)),d.split(`
`).reduce(function(v,F){return v.insert(F).insert(`
`,w.formats())},new n.default)}},{key:"format",value:function(w,d){if(w!==this.statics.blotName||!d){var v=this.descendant(x.default,this.length()-1),F=p(v,1),N=F[0];N?.deleteAt(N.length()-1,1),e(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"format",this).call(this,w,d)}}},{key:"formatAt",value:function(w,d,v,F){if(d!==0&&l.default.query(v,l.default.Scope.BLOCK)!=null&&(v!==this.statics.blotName||F!==this.statics.formats(this.domNode))){var N=this.newlineIndex(w);if(!(N<0||N>=w+d)){var L=this.newlineIndex(w,!0)+1,B=N-L+1,Z=this.isolate(L,B),U=Z.next;Z.format(v,F),U instanceof y&&U.formatAt(0,w-L+d-B,v,F)}}}},{key:"insertAt",value:function(w,d,v){if(v==null){var F=this.descendant(x.default,w),N=p(F,2),L=N[0],B=N[1];L.insertAt(B,d)}}},{key:"length",value:function(){var w=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?w:w+1}},{key:"newlineIndex",value:function(w){if(arguments.length>1&&arguments[1]!==void 0&&arguments[1])return this.domNode.textContent.slice(0,w).lastIndexOf(`
`);var d=this.domNode.textContent.slice(w).indexOf(`
`);return d>-1?w+d:-1}},{key:"optimize",value:function(w){this.domNode.textContent.endsWith(`
`)||this.appendChild(l.default.create("text",`
`)),e(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"optimize",this).call(this,w);var d=this.next;d!=null&&d.prev===this&&d.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===d.statics.formats(d.domNode)&&(d.optimize(w),d.moveChildren(this),d.remove())}},{key:"replace",value:function(w){e(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"replace",this).call(this,w),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(d){var v=l.default.find(d);v==null?d.parentNode.removeChild(d):v instanceof l.default.Embed?v.remove():v.unwrap()})}}],[{key:"create",value:function(w){var d=e(y.__proto__||Object.getPrototypeOf(y),"create",this).call(this,w);return d.setAttribute("spellcheck",!1),d}},{key:"formats",value:function(){return!0}}]),y})(a.default);A.blotName="code-block",A.tagName="PRE",A.TAB="  ",u.Code=_,u.default=A},function(j,u,f){function g(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function E(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||typeof r!="object"&&typeof r!="function"?n:r}function b(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)}Object.defineProperty(u,"__esModule",{value:!0});var h=(function(){function n(r,l){for(var s=0;s<l.length;s++){var a=l[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(r,l,s){return l&&n(r.prototype,l),s&&n(r,s),r}})(),p=function n(r,l,s){r===null&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,l);if(a===void 0){var i=Object.getPrototypeOf(r);return i===null?void 0:n(i,l,s)}if("value"in a)return a.value;var m=a.get;if(m!==void 0)return m.call(s)},c=f(0),e=(function(n){return n&&n.__esModule?n:{default:n}})(c),t=(function(n){function r(){return g(this,r),E(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return b(r,n),h(r,[{key:"insertInto",value:function(l,s){l.children.length===0?p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"insertInto",this).call(this,l,s):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),r})(e.default.Embed);t.blotName="break",t.tagName="BR",u.default=t},function(j,u,f){function g(r,l){if(!(r instanceof l))throw new TypeError("Cannot call a class as a function")}function E(r,l){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?r:l}function b(r,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);r.prototype=Object.create(l&&l.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(r,l):r.__proto__=l)}function h(r,l){var s=document.createElement("a");s.href=r;var a=s.href.slice(0,s.href.indexOf(":"));return l.indexOf(a)>-1}Object.defineProperty(u,"__esModule",{value:!0}),u.sanitize=u.default=void 0;var p=(function(){function r(l,s){for(var a=0;a<s.length;a++){var i=s[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}return function(l,s,a){return s&&r(l.prototype,s),a&&r(l,a),l}})(),c=function r(l,s,a){l===null&&(l=Function.prototype);var i=Object.getOwnPropertyDescriptor(l,s);if(i===void 0){var m=Object.getPrototypeOf(l);return m===null?void 0:r(m,s,a)}if("value"in i)return i.value;var o=i.get;if(o!==void 0)return o.call(a)},e=f(5),t=(function(r){return r&&r.__esModule?r:{default:r}})(e),n=(function(r){function l(){return g(this,l),E(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return b(l,r),p(l,[{key:"format",value:function(s,a){if(s!==this.statics.blotName||!a)return c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"format",this).call(this,s,a);a=this.constructor.sanitize(a),this.domNode.setAttribute("href",a)}}],[{key:"create",value:function(s){var a=c(l.__proto__||Object.getPrototypeOf(l),"create",this).call(this,s);return s=this.sanitize(s),a.setAttribute("href",s),a.setAttribute("target","_blank"),a}},{key:"formats",value:function(s){return s.getAttribute("href")}},{key:"sanitize",value:function(s){return h(s,this.PROTOCOL_WHITELIST)?s:this.SANITIZED_URL}}]),l})(t.default);n.blotName="link",n.tagName="A",n.SANITIZED_URL="about:blank",n.PROTOCOL_WHITELIST=["http","https","mailto","tel"],u.default=n,u.sanitize=h},function(j,u,f){function g(s){return s&&s.__esModule?s:{default:s}}function E(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function b(s,a){s.setAttribute(a,s.getAttribute(a)!=="true")}Object.defineProperty(u,"__esModule",{value:!0});var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},p=(function(){function s(a,i){for(var m=0;m<i.length;m++){var o=i[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}return function(a,i,m){return i&&s(a.prototype,i),m&&s(a,m),a}})(),c=f(25),e=g(c),t=f(106),n=g(t),r=0,l=(function(){function s(a){var i=this;E(this,s),this.select=a,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){i.togglePicker()}),this.label.addEventListener("keydown",function(m){switch(m.keyCode){case e.default.keys.ENTER:i.togglePicker();break;case e.default.keys.ESCAPE:i.escape(),m.preventDefault()}}),this.select.addEventListener("change",this.update.bind(this))}return p(s,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),b(this.label,"aria-expanded"),b(this.options,"aria-hidden")}},{key:"buildItem",value:function(a){var i=this,m=document.createElement("span");return m.tabIndex="0",m.setAttribute("role","button"),m.classList.add("ql-picker-item"),a.hasAttribute("value")&&m.setAttribute("data-value",a.getAttribute("value")),a.textContent&&m.setAttribute("data-label",a.textContent),m.addEventListener("click",function(){i.selectItem(m,!0)}),m.addEventListener("keydown",function(o){switch(o.keyCode){case e.default.keys.ENTER:i.selectItem(m,!0),o.preventDefault();break;case e.default.keys.ESCAPE:i.escape(),o.preventDefault()}}),m}},{key:"buildLabel",value:function(){var a=document.createElement("span");return a.classList.add("ql-picker-label"),a.innerHTML=n.default,a.tabIndex="0",a.setAttribute("role","button"),a.setAttribute("aria-expanded","false"),this.container.appendChild(a),a}},{key:"buildOptions",value:function(){var a=this,i=document.createElement("span");i.classList.add("ql-picker-options"),i.setAttribute("aria-hidden","true"),i.tabIndex="-1",i.id="ql-picker-options-"+r,r+=1,this.label.setAttribute("aria-controls",i.id),this.options=i,[].slice.call(this.select.options).forEach(function(m){var o=a.buildItem(m);i.appendChild(o),m.selected===!0&&a.selectItem(o)}),this.container.appendChild(i)}},{key:"buildPicker",value:function(){var a=this;[].slice.call(this.select.attributes).forEach(function(i){a.container.setAttribute(i.name,i.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var a=this;this.close(),setTimeout(function(){return a.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(a){var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],m=this.container.querySelector(".ql-selected");if(a!==m&&(m?.classList.remove("ql-selected"),a!=null&&(a.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(a.parentNode.children,a),a.hasAttribute("data-value")?this.label.setAttribute("data-value",a.getAttribute("data-value")):this.label.removeAttribute("data-value"),a.hasAttribute("data-label")?this.label.setAttribute("data-label",a.getAttribute("data-label")):this.label.removeAttribute("data-label"),i))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event>"u"?"undefined":h(Event))==="object"){var o=document.createEvent("Event");o.initEvent("change",!0,!0),this.select.dispatchEvent(o)}this.close()}}},{key:"update",value:function(){var a=void 0;if(this.select.selectedIndex>-1){var i=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];a=this.select.options[this.select.selectedIndex],this.selectItem(i)}else this.selectItem(null);var m=a!=null&&a!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",m)}}]),s})();u.default=l},function(j,u,f){function g(e){var t=p.find(e);if(t==null)try{t=p.create(e)}catch{t=p.create(p.Scope.INLINE),[].slice.call(e.childNodes).forEach(function(r){t.domNode.appendChild(r)}),e.parentNode&&e.parentNode.replaceChild(t.domNode,e),t.attach()}return t}var E=this&&this.__extends||(function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(u,"__esModule",{value:!0});var b=f(47),h=f(27),p=f(1),c=(function(e){function t(n){var r=e.call(this,n)||this;return r.build(),r}return E(t,e),t.prototype.appendChild=function(n){this.insertBefore(n)},t.prototype.attach=function(){e.prototype.attach.call(this),this.children.forEach(function(n){n.attach()})},t.prototype.build=function(){var n=this;this.children=new b.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(r){try{var l=g(r);n.insertBefore(l,n.children.head||void 0)}catch(s){if(s instanceof p.ParchmentError)return;throw s}})},t.prototype.deleteAt=function(n,r){if(n===0&&r===this.length())return this.remove();this.children.forEachAt(n,r,function(l,s,a){l.deleteAt(s,a)})},t.prototype.descendant=function(n,r){var l=this.children.find(r),s=l[0],a=l[1];return n.blotName==null&&n(s)||n.blotName!=null&&s instanceof n?[s,a]:s instanceof t?s.descendant(n,a):[null,-1]},t.prototype.descendants=function(n,r,l){r===void 0&&(r=0),l===void 0&&(l=Number.MAX_VALUE);var s=[],a=l;return this.children.forEachAt(r,l,function(i,m,o){(n.blotName==null&&n(i)||n.blotName!=null&&i instanceof n)&&s.push(i),i instanceof t&&(s=s.concat(i.descendants(n,m,a))),a-=o}),s},t.prototype.detach=function(){this.children.forEach(function(n){n.detach()}),e.prototype.detach.call(this)},t.prototype.formatAt=function(n,r,l,s){this.children.forEachAt(n,r,function(a,i,m){a.formatAt(i,m,l,s)})},t.prototype.insertAt=function(n,r,l){var s=this.children.find(n),a=s[0],i=s[1];if(a)a.insertAt(i,r,l);else{var m=l==null?p.create("text",r):p.create(r,l);this.appendChild(m)}},t.prototype.insertBefore=function(n,r){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(l){return n instanceof l}))throw new p.ParchmentError("Cannot insert "+n.statics.blotName+" into "+this.statics.blotName);n.insertInto(this,r)},t.prototype.length=function(){return this.children.reduce(function(n,r){return n+r.length()},0)},t.prototype.moveChildren=function(n,r){this.children.forEach(function(l){n.insertBefore(l,r)})},t.prototype.optimize=function(n){if(e.prototype.optimize.call(this,n),this.children.length===0)if(this.statics.defaultChild!=null){var r=p.create(this.statics.defaultChild);this.appendChild(r),r.optimize(n)}else this.remove()},t.prototype.path=function(n,r){r===void 0&&(r=!1);var l=this.children.find(n,r),s=l[0],a=l[1],i=[[this,n]];return s instanceof t?i.concat(s.path(a,r)):(s!=null&&i.push([s,a]),i)},t.prototype.removeChild=function(n){this.children.remove(n)},t.prototype.replace=function(n){n instanceof t&&n.moveChildren(this),e.prototype.replace.call(this,n)},t.prototype.split=function(n,r){if(r===void 0&&(r=!1),!r){if(n===0)return this;if(n===this.length())return this.next}var l=this.clone();return this.parent.insertBefore(l,this.next),this.children.forEachAt(n,this.length(),function(s,a,i){s=s.split(a,r),l.appendChild(s)}),l},t.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},t.prototype.update=function(n,r){var l=this,s=[],a=[];n.forEach(function(i){i.target===l.domNode&&i.type==="childList"&&(s.push.apply(s,i.addedNodes),a.push.apply(a,i.removedNodes))}),a.forEach(function(i){if(!(i.parentNode!=null&&i.tagName!=="IFRAME"&&document.body.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var m=p.find(i);m!=null&&(m.domNode.parentNode!=null&&m.domNode.parentNode!==l.domNode||m.detach())}}),s.filter(function(i){return i.parentNode==l.domNode}).sort(function(i,m){return i===m?0:i.compareDocumentPosition(m)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(i){var m=null;i.nextSibling!=null&&(m=p.find(i.nextSibling));var o=g(i);o.next==m&&o.next!=null||(o.parent!=null&&o.parent.removeChild(l),l.insertBefore(o,m||void 0))})},t})(h.default);u.default=c},function(j,u,f){var g=this&&this.__extends||(function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(u,"__esModule",{value:!0});var E=f(11),b=f(28),h=f(17),p=f(1),c=(function(e){function t(n){var r=e.call(this,n)||this;return r.attributes=new b.default(r.domNode),r}return g(t,e),t.formats=function(n){return typeof this.tagName=="string"||(Array.isArray(this.tagName)?n.tagName.toLowerCase():void 0)},t.prototype.format=function(n,r){var l=p.query(n);l instanceof E.default?this.attributes.attribute(l,r):r&&(l==null||n===this.statics.blotName&&this.formats()[n]===r||this.replaceWith(n,r))},t.prototype.formats=function(){var n=this.attributes.values(),r=this.statics.formats(this.domNode);return r!=null&&(n[this.statics.blotName]=r),n},t.prototype.replaceWith=function(n,r){var l=e.prototype.replaceWith.call(this,n,r);return this.attributes.copy(l),l},t.prototype.update=function(n,r){var l=this;e.prototype.update.call(this,n,r),n.some(function(s){return s.target===l.domNode&&s.type==="attributes"})&&this.attributes.build()},t.prototype.wrap=function(n,r){var l=e.prototype.wrap.call(this,n,r);return l instanceof t&&l.statics.scope===this.statics.scope&&this.attributes.move(l),l},t})(h.default);u.default=c},function(j,u,f){var g=this&&this.__extends||(function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var t in e)e.hasOwnProperty(t)&&(c[t]=e[t])};return function(c,e){function t(){this.constructor=c}p(c,e),c.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}})();Object.defineProperty(u,"__esModule",{value:!0});var E=f(27),b=f(1),h=(function(p){function c(){return p!==null&&p.apply(this,arguments)||this}return g(c,p),c.value=function(e){return!0},c.prototype.index=function(e,t){return this.domNode===e||this.domNode.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(t,1):-1},c.prototype.position=function(e,t){var n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return e>0&&(n+=1),[this.parent.domNode,n]},c.prototype.value=function(){return e={},e[this.statics.blotName]=this.statics.value(this.domNode)||!0,e;var e},c.scope=b.Scope.INLINE_BLOT,c})(E.default);u.default=h},function(j,u,f){function g(p){this.ops=p,this.index=0,this.offset=0}var E=f(12),b=f(2),h={attributes:{compose:function(p,c,e){typeof p!="object"&&(p={}),typeof c!="object"&&(c={});var t=b(!0,{},c);e||(t=Object.keys(t).reduce(function(r,l){return t[l]!=null&&(r[l]=t[l]),r},{}));for(var n in p)p[n]!==void 0&&c[n]===void 0&&(t[n]=p[n]);return Object.keys(t).length>0?t:void 0},diff:function(p,c){typeof p!="object"&&(p={}),typeof c!="object"&&(c={});var e=Object.keys(p).concat(Object.keys(c)).reduce(function(t,n){return E(p[n],c[n])||(t[n]=c[n]===void 0?null:c[n]),t},{});return Object.keys(e).length>0?e:void 0},transform:function(p,c,e){if(typeof p!="object")return c;if(typeof c=="object"){if(!e)return c;var t=Object.keys(c).reduce(function(n,r){return p[r]===void 0&&(n[r]=c[r]),n},{});return Object.keys(t).length>0?t:void 0}}},iterator:function(p){return new g(p)},length:function(p){return typeof p.delete=="number"?p.delete:typeof p.retain=="number"?p.retain:typeof p.insert=="string"?p.insert.length:1}};g.prototype.hasNext=function(){return this.peekLength()<1/0},g.prototype.next=function(p){p||(p=1/0);var c=this.ops[this.index];if(c){var e=this.offset,t=h.length(c);if(p>=t-e?(p=t-e,this.index+=1,this.offset=0):this.offset+=p,typeof c.delete=="number")return{delete:p};var n={};return c.attributes&&(n.attributes=c.attributes),typeof c.retain=="number"?n.retain=p:typeof c.insert=="string"?n.insert=c.insert.substr(e,p):n.insert=c.insert,n}return{retain:1/0}},g.prototype.peek=function(){return this.ops[this.index]},g.prototype.peekLength=function(){return this.ops[this.index]?h.length(this.ops[this.index])-this.offset:1/0},g.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},j.exports=h},function(j,u){var f=(function(){function g(l,s){return s!=null&&l instanceof s}function E(l,s,a,i,m){function o(O,y){if(O===null)return null;if(y===0)return O;var w,d;if(typeof O!="object")return O;if(g(O,t))w=new t;else if(g(O,n))w=new n;else if(g(O,r))w=new r(function(k,T){O.then(function(S){k(o(S,y-1))},function(S){T(o(S,y-1))})});else if(E.__isArray(O))w=[];else if(E.__isRegExp(O))w=new RegExp(O.source,e(O)),O.lastIndex&&(w.lastIndex=O.lastIndex);else if(E.__isDate(O))w=new Date(O.getTime());else{if(A&&Buffer.isBuffer(O))return w=new Buffer(O.length),O.copy(w),w;g(O,Error)?w=Object.create(O):i===void 0?(d=Object.getPrototypeOf(O),w=Object.create(d)):(w=Object.create(i),d=i)}if(s){var v=x.indexOf(O);if(v!=-1)return _[v];x.push(O),_.push(w)}g(O,t)&&O.forEach(function(k,T){var S=o(T,y-1),P=o(k,y-1);w.set(S,P)}),g(O,n)&&O.forEach(function(k){var T=o(k,y-1);w.add(T)});for(var F in O){var N;d&&(N=Object.getOwnPropertyDescriptor(d,F)),N&&N.set==null||(w[F]=o(O[F],y-1))}if(Object.getOwnPropertySymbols)for(var L=Object.getOwnPropertySymbols(O),F=0;F<L.length;F++){var B=L[F],Z=Object.getOwnPropertyDescriptor(O,B);(!Z||Z.enumerable||m)&&(w[B]=o(O[B],y-1),Z.enumerable||Object.defineProperty(w,B,{enumerable:!1}))}if(m)for(var U=Object.getOwnPropertyNames(O),F=0;F<U.length;F++){var M=U[F],Z=Object.getOwnPropertyDescriptor(O,M);Z&&Z.enumerable||(w[M]=o(O[M],y-1),Object.defineProperty(w,M,{enumerable:!1}))}return w}typeof s=="object"&&(a=s.depth,i=s.prototype,m=s.includeNonEnumerable,s=s.circular);var x=[],_=[],A=typeof Buffer<"u";return s===void 0&&(s=!0),a===void 0&&(a=1/0),o(l,a)}function b(l){return Object.prototype.toString.call(l)}function h(l){return typeof l=="object"&&b(l)==="[object Date]"}function p(l){return typeof l=="object"&&b(l)==="[object Array]"}function c(l){return typeof l=="object"&&b(l)==="[object RegExp]"}function e(l){var s="";return l.global&&(s+="g"),l.ignoreCase&&(s+="i"),l.multiline&&(s+="m"),s}var t;try{t=Map}catch{t=function(){}}var n;try{n=Set}catch{n=function(){}}var r;try{r=Promise}catch{r=function(){}}return E.clonePrototype=function(l){if(l===null)return null;var s=function(){};return s.prototype=l,new s},E.__objToStr=b,E.__isDate=h,E.__isArray=p,E.__isRegExp=c,E.__getRegExpFlags=e,E})();typeof j=="object"&&j.exports&&(j.exports=f)},function(j,u,f){function g(O){return O&&O.__esModule?O:{default:O}}function E(O){if(Array.isArray(O)){for(var y=0,w=Array(O.length);y<O.length;y++)w[y]=O[y];return w}return Array.from(O)}function b(O,y){if(!(O instanceof y))throw new TypeError("Cannot call a class as a function")}function h(O,y){try{y.parentNode}catch{return!1}return y instanceof Text&&(y=y.parentNode),O.contains(y)}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.Range=void 0;var p=(function(){function O(y,w){var d=[],v=!0,F=!1,N=void 0;try{for(var L,B=y[Symbol.iterator]();!(v=(L=B.next()).done)&&(d.push(L.value),!w||d.length!==w);v=!0);}catch(Z){F=!0,N=Z}finally{try{!v&&B.return&&B.return()}finally{if(F)throw N}}return d}return function(y,w){if(Array.isArray(y))return y;if(Symbol.iterator in Object(y))return O(y,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),c=(function(){function O(y,w){for(var d=0;d<w.length;d++){var v=w[d];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(y,v.key,v)}}return function(y,w,d){return w&&O(y.prototype,w),d&&O(y,d),y}})(),e=f(0),t=g(e),n=f(21),r=g(n),l=f(12),s=g(l),a=f(9),i=g(a),m=f(10),o=g(m),x=(0,o.default)("quill:selection"),_=function O(y){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;b(this,O),this.index=y,this.length=w},A=(function(){function O(y,w){var d=this;b(this,O),this.emitter=w,this.scroll=y,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=t.default.create("cursor",this),this.lastRange=this.savedRange=new _(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){d.mouseDown||setTimeout(d.update.bind(d,i.default.sources.USER),1)}),this.emitter.on(i.default.events.EDITOR_CHANGE,function(v,F){v===i.default.events.TEXT_CHANGE&&F.length()>0&&d.update(i.default.sources.SILENT)}),this.emitter.on(i.default.events.SCROLL_BEFORE_UPDATE,function(){if(d.hasFocus()){var v=d.getNativeRange();v!=null&&v.start.node!==d.cursor.textNode&&d.emitter.once(i.default.events.SCROLL_UPDATE,function(){try{d.setNativeRange(v.start.node,v.start.offset,v.end.node,v.end.offset)}catch{}})}}),this.emitter.on(i.default.events.SCROLL_OPTIMIZE,function(v,F){if(F.range){var N=F.range,L=N.startNode,B=N.startOffset,Z=N.endNode,U=N.endOffset;d.setNativeRange(L,B,Z,U)}}),this.update(i.default.sources.SILENT)}return c(O,[{key:"handleComposition",value:function(){var y=this;this.root.addEventListener("compositionstart",function(){y.composing=!0}),this.root.addEventListener("compositionend",function(){if(y.composing=!1,y.cursor.parent){var w=y.cursor.restore();if(!w)return;setTimeout(function(){y.setNativeRange(w.startNode,w.startOffset,w.endNode,w.endOffset)},1)}})}},{key:"handleDragging",value:function(){var y=this;this.emitter.listenDOM("mousedown",document.body,function(){y.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){y.mouseDown=!1,y.update(i.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(y,w){if(this.scroll.whitelist==null||this.scroll.whitelist[y]){this.scroll.update();var d=this.getNativeRange();if(d!=null&&d.native.collapsed&&!t.default.query(y,t.default.Scope.BLOCK)){if(d.start.node!==this.cursor.textNode){var v=t.default.find(d.start.node,!1);if(v==null)return;if(v instanceof t.default.Leaf){var F=v.split(d.start.offset);v.parent.insertBefore(this.cursor,F)}else v.insertBefore(this.cursor,d.start.node);this.cursor.attach()}this.cursor.format(y,w),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(y){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,d=this.scroll.length();y=Math.min(y,d-1),w=Math.min(y+w,d-1)-y;var v=void 0,F=this.scroll.leaf(y),N=p(F,2),L=N[0],B=N[1];if(L==null)return null;var Z=L.position(B,!0),U=p(Z,2);v=U[0],B=U[1];var M=document.createRange();if(w>0){M.setStart(v,B);var k=this.scroll.leaf(y+w),T=p(k,2);if(L=T[0],B=T[1],L==null)return null;var S=L.position(B,!0),P=p(S,2);return v=P[0],B=P[1],M.setEnd(v,B),M.getBoundingClientRect()}var I="left",D=void 0;return v instanceof Text?(B<v.data.length?(M.setStart(v,B),M.setEnd(v,B+1)):(M.setStart(v,B-1),M.setEnd(v,B),I="right"),D=M.getBoundingClientRect()):(D=L.domNode.getBoundingClientRect(),B>0&&(I="right")),{bottom:D.top+D.height,height:D.height,left:D[I],right:D[I],top:D.top,width:0}}},{key:"getNativeRange",value:function(){var y=document.getSelection();if(y==null||y.rangeCount<=0)return null;var w=y.getRangeAt(0);if(w==null)return null;var d=this.normalizeNative(w);return x.info("getNativeRange",d),d}},{key:"getRange",value:function(){var y=this.getNativeRange();return y==null?[null,null]:[this.normalizedToRange(y),y]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(y){var w=this,d=[[y.start.node,y.start.offset]];y.native.collapsed||d.push([y.end.node,y.end.offset]);var v=d.map(function(L){var B=p(L,2),Z=B[0],U=B[1],M=t.default.find(Z,!0),k=M.offset(w.scroll);return U===0?k:M instanceof t.default.Container?k+M.length():k+M.index(Z,U)}),F=Math.min(Math.max.apply(Math,E(v)),this.scroll.length()-1),N=Math.min.apply(Math,[F].concat(E(v)));return new _(N,F-N)}},{key:"normalizeNative",value:function(y){if(!h(this.root,y.startContainer)||!y.collapsed&&!h(this.root,y.endContainer))return null;var w={start:{node:y.startContainer,offset:y.startOffset},end:{node:y.endContainer,offset:y.endOffset},native:y};return[w.start,w.end].forEach(function(d){for(var v=d.node,F=d.offset;!(v instanceof Text)&&v.childNodes.length>0;)if(v.childNodes.length>F)v=v.childNodes[F],F=0;else{if(v.childNodes.length!==F)break;v=v.lastChild,F=v instanceof Text?v.data.length:v.childNodes.length+1}d.node=v,d.offset=F}),w}},{key:"rangeToNative",value:function(y){var w=this,d=y.collapsed?[y.index]:[y.index,y.index+y.length],v=[],F=this.scroll.length();return d.forEach(function(N,L){N=Math.min(F-1,N);var B=void 0,Z=w.scroll.leaf(N),U=p(Z,2),M=U[0],k=U[1],T=M.position(k,L!==0),S=p(T,2);B=S[0],k=S[1],v.push(B,k)}),v.length<2&&(v=v.concat(v)),v}},{key:"scrollIntoView",value:function(y){var w=this.lastRange;if(w!=null){var d=this.getBounds(w.index,w.length);if(d!=null){var v=this.scroll.length()-1,F=this.scroll.line(Math.min(w.index,v)),N=p(F,1),L=N[0],B=L;if(w.length>0){var Z=this.scroll.line(Math.min(w.index+w.length,v));B=p(Z,1)[0]}if(L!=null&&B!=null){var U=y.getBoundingClientRect();d.top<U.top?y.scrollTop-=U.top-d.top:d.bottom>U.bottom&&(y.scrollTop+=d.bottom-U.bottom)}}}}},{key:"setNativeRange",value:function(y,w){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:w,F=arguments.length>4&&arguments[4]!==void 0&&arguments[4];if(x.info("setNativeRange",y,w,d,v),y==null||this.root.parentNode!=null&&y.parentNode!=null&&d.parentNode!=null){var N=document.getSelection();if(N!=null)if(y!=null){this.hasFocus()||this.root.focus();var L=(this.getNativeRange()||{}).native;if(L==null||F||y!==L.startContainer||w!==L.startOffset||d!==L.endContainer||v!==L.endOffset){y.tagName=="BR"&&(w=[].indexOf.call(y.parentNode.childNodes,y),y=y.parentNode),d.tagName=="BR"&&(v=[].indexOf.call(d.parentNode.childNodes,d),d=d.parentNode);var B=document.createRange();B.setStart(y,w),B.setEnd(d,v),N.removeAllRanges(),N.addRange(B)}}else N.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(y){var w=arguments.length>1&&arguments[1]!==void 0&&arguments[1],d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:i.default.sources.API;if(typeof w=="string"&&(d=w,w=!1),x.info("setRange",y),y!=null){var v=this.rangeToNative(y);this.setNativeRange.apply(this,E(v).concat([w]))}else this.setNativeRange(null);this.update(d)}},{key:"update",value:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i.default.sources.USER,w=this.lastRange,d=this.getRange(),v=p(d,2),F=v[0],N=v[1];if(this.lastRange=F,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,s.default)(w,this.lastRange)){var L;!this.composing&&N!=null&&N.native.collapsed&&N.start.node!==this.cursor.textNode&&this.cursor.restore();var B=[i.default.events.SELECTION_CHANGE,(0,r.default)(this.lastRange),(0,r.default)(w),y];if((L=this.emitter).emit.apply(L,[i.default.events.EDITOR_CHANGE].concat(B)),y!==i.default.sources.SILENT){var Z;(Z=this.emitter).emit.apply(Z,B)}}}}]),O})();u.Range=_,u.default=A},function(j,u,f){function g(r){return r&&r.__esModule?r:{default:r}}function E(r,l){if(!(r instanceof l))throw new TypeError("Cannot call a class as a function")}function b(r,l){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?r:l}function h(r,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);r.prototype=Object.create(l&&l.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(r,l):r.__proto__=l)}Object.defineProperty(u,"__esModule",{value:!0});var p=f(0),c=g(p),e=f(3),t=g(e),n=(function(r){function l(){return E(this,l),b(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return h(l,r),l})(c.default.Container);n.allowedChildren=[t.default,e.BlockEmbed,n],u.default=n},function(j,u,f){function g(l,s){if(!(l instanceof s))throw new TypeError("Cannot call a class as a function")}function E(l,s){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||typeof s!="object"&&typeof s!="function"?l:s}function b(l,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);l.prototype=Object.create(s&&s.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(l,s):l.__proto__=s)}Object.defineProperty(u,"__esModule",{value:!0}),u.ColorStyle=u.ColorClass=u.ColorAttributor=void 0;var h=(function(){function l(s,a){for(var i=0;i<a.length;i++){var m=a[i];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(s,m.key,m)}}return function(s,a,i){return a&&l(s.prototype,a),i&&l(s,i),s}})(),p=function l(s,a,i){s===null&&(s=Function.prototype);var m=Object.getOwnPropertyDescriptor(s,a);if(m===void 0){var o=Object.getPrototypeOf(s);return o===null?void 0:l(o,a,i)}if("value"in m)return m.value;var x=m.get;if(x!==void 0)return x.call(i)},c=f(0),e=(function(l){return l&&l.__esModule?l:{default:l}})(c),t=(function(l){function s(){return g(this,s),E(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return b(s,l),h(s,[{key:"value",value:function(a){var i=p(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"value",this).call(this,a);return i.startsWith("rgb(")?(i=i.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+i.split(",").map(function(m){return("00"+parseInt(m).toString(16)).slice(-2)}).join("")):i}}]),s})(e.default.Attributor.Style),n=new e.default.Attributor.Class("color","ql-color",{scope:e.default.Scope.INLINE}),r=new t("color","color",{scope:e.default.Scope.INLINE});u.ColorAttributor=t,u.ColorClass=n,u.ColorStyle=r},function(j,u,f){function g(q){return q&&q.__esModule?q:{default:q}}function E(q,C,R){return C in q?Object.defineProperty(q,C,{value:R,enumerable:!0,configurable:!0,writable:!0}):q[C]=R,q}function b(q,C){if(!(q instanceof C))throw new TypeError("Cannot call a class as a function")}function h(q,C){if(!q)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!C||typeof C!="object"&&typeof C!="function"?q:C}function p(q,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof C);q.prototype=Object.create(C&&C.prototype,{constructor:{value:q,enumerable:!1,writable:!0,configurable:!0}}),C&&(Object.setPrototypeOf?Object.setPrototypeOf(q,C):q.__proto__=C)}function c(q,C){var R,V=q===D.keys.LEFT?"prefix":"suffix";return R={key:q,shiftKey:C,altKey:null},E(R,V,/^$/),E(R,"handler",function(K){var Y=K.index;q===D.keys.RIGHT&&(Y+=K.length+1);var Q=this.quill.getLeaf(Y);return!(m(Q,1)[0]instanceof B.default.Embed)||(q===D.keys.LEFT?C?this.quill.setSelection(K.index-1,K.length+1,U.default.sources.USER):this.quill.setSelection(K.index-1,U.default.sources.USER):C?this.quill.setSelection(K.index,K.length+1,U.default.sources.USER):this.quill.setSelection(K.index+K.length+1,U.default.sources.USER),!1)}),R}function e(q,C){if(!(q.index===0||this.quill.getLength()<=1)){var R=this.quill.getLine(q.index),V=m(R,1),K=V[0],Y={};if(C.offset===0){var Q=this.quill.getLine(q.index-1),J=m(Q,1),te=J[0];if(te!=null&&te.length()>1){var oe=K.formats(),ie=this.quill.getFormat(q.index-1,1);Y=N.default.attributes.diff(oe,ie)||{}}}var se=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(C.prefix)?2:1;this.quill.deleteText(q.index-se,se,U.default.sources.USER),Object.keys(Y).length>0&&this.quill.formatLine(q.index-se,se,Y,U.default.sources.USER),this.quill.focus()}}function t(q,C){var R=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(C.suffix)?2:1;if(!(q.index>=this.quill.getLength()-R)){var V={},K=0,Y=this.quill.getLine(q.index),Q=m(Y,1),J=Q[0];if(C.offset>=J.length()-1){var te=this.quill.getLine(q.index+1),oe=m(te,1),ie=oe[0];if(ie){var se=J.formats(),z=this.quill.getFormat(q.index,1);V=N.default.attributes.diff(se,z)||{},K=ie.length()}}this.quill.deleteText(q.index,R,U.default.sources.USER),Object.keys(V).length>0&&this.quill.formatLine(q.index+K-1,R,V,U.default.sources.USER)}}function n(q){var C=this.quill.getLines(q),R={};if(C.length>1){var V=C[0].formats(),K=C[C.length-1].formats();R=N.default.attributes.diff(K,V)||{}}this.quill.deleteText(q,U.default.sources.USER),Object.keys(R).length>0&&this.quill.formatLine(q.index,1,R,U.default.sources.USER),this.quill.setSelection(q.index,U.default.sources.SILENT),this.quill.focus()}function r(q,C){var R=this;q.length>0&&this.quill.scroll.deleteAt(q.index,q.length);var V=Object.keys(C.format).reduce(function(K,Y){return B.default.query(Y,B.default.Scope.BLOCK)&&!Array.isArray(C.format[Y])&&(K[Y]=C.format[Y]),K},{});this.quill.insertText(q.index,`
`,V,U.default.sources.USER),this.quill.setSelection(q.index+1,U.default.sources.SILENT),this.quill.focus(),Object.keys(C.format).forEach(function(K){V[K]==null&&(Array.isArray(C.format[K])||K!=="link"&&R.quill.format(K,C.format[K],U.default.sources.USER))})}function l(q){return{key:D.keys.TAB,shiftKey:!q,format:{"code-block":!0},handler:function(C){var R=B.default.query("code-block"),V=C.index,K=C.length,Y=this.quill.scroll.descendant(R,V),Q=m(Y,2),J=Q[0],te=Q[1];if(J!=null){var oe=this.quill.getIndex(J),ie=J.newlineIndex(te,!0)+1,se=J.newlineIndex(oe+te+K),z=J.domNode.textContent.slice(ie,se).split(`
`);te=0,z.forEach(function(H,G){q?(J.insertAt(ie+te,R.TAB),te+=R.TAB.length,G===0?V+=R.TAB.length:K+=R.TAB.length):H.startsWith(R.TAB)&&(J.deleteAt(ie+te,R.TAB.length),te-=R.TAB.length,G===0?V-=R.TAB.length:K-=R.TAB.length),te+=H.length+1}),this.quill.update(U.default.sources.USER),this.quill.setSelection(V,K,U.default.sources.SILENT)}}}}function s(q){return{key:q[0].toUpperCase(),shortKey:!0,handler:function(C,R){this.quill.format(q,!R.format[q],U.default.sources.USER)}}}function a(q){if(typeof q=="string"||typeof q=="number")return a({key:q});if((q===void 0?"undefined":i(q))==="object"&&(q=(0,_.default)(q,!1)),typeof q.key=="string")if(D.keys[q.key.toUpperCase()]!=null)q.key=D.keys[q.key.toUpperCase()];else{if(q.key.length!==1)return null;q.key=q.key.toUpperCase().charCodeAt(0)}return q.shortKey&&(q[I]=q.shortKey,delete q.shortKey),q}Object.defineProperty(u,"__esModule",{value:!0}),u.SHORTKEY=u.default=void 0;var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},m=(function(){function q(C,R){var V=[],K=!0,Y=!1,Q=void 0;try{for(var J,te=C[Symbol.iterator]();!(K=(J=te.next()).done)&&(V.push(J.value),!R||V.length!==R);K=!0);}catch(oe){Y=!0,Q=oe}finally{try{!K&&te.return&&te.return()}finally{if(Y)throw Q}}return V}return function(C,R){if(Array.isArray(C))return C;if(Symbol.iterator in Object(C))return q(C,R);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),o=(function(){function q(C,R){for(var V=0;V<R.length;V++){var K=R[V];K.enumerable=K.enumerable||!1,K.configurable=!0,"value"in K&&(K.writable=!0),Object.defineProperty(C,K.key,K)}}return function(C,R,V){return R&&q(C.prototype,R),V&&q(C,V),C}})(),x=f(21),_=g(x),A=f(12),O=g(A),y=f(2),w=g(y),d=f(4),v=g(d),F=f(20),N=g(F),L=f(0),B=g(L),Z=f(6),U=g(Z),M=f(10),k=g(M),T=f(7),S=g(T),P=(0,k.default)("quill:keyboard"),I=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",D=(function(q){function C(R,V){b(this,C);var K=h(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,R,V));return K.bindings={},Object.keys(K.options.bindings).forEach(function(Y){(Y!=="list autofill"||R.scroll.whitelist==null||R.scroll.whitelist.list)&&K.options.bindings[Y]&&K.addBinding(K.options.bindings[Y])}),K.addBinding({key:C.keys.ENTER,shiftKey:null},r),K.addBinding({key:C.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(K.addBinding({key:C.keys.BACKSPACE},{collapsed:!0},e),K.addBinding({key:C.keys.DELETE},{collapsed:!0},t)):(K.addBinding({key:C.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},e),K.addBinding({key:C.keys.DELETE},{collapsed:!0,suffix:/^.?$/},t)),K.addBinding({key:C.keys.BACKSPACE},{collapsed:!1},n),K.addBinding({key:C.keys.DELETE},{collapsed:!1},n),K.addBinding({key:C.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},e),K.listen(),K}return p(C,q),o(C,null,[{key:"match",value:function(R,V){return V=a(V),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(K){return!!V[K]!==R[K]&&V[K]!==null})&&V.key===(R.which||R.keyCode)}}]),o(C,[{key:"addBinding",value:function(R){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},Y=a(R);if(Y==null||Y.key==null)return P.warn("Attempted to add invalid keyboard binding",Y);typeof V=="function"&&(V={handler:V}),typeof K=="function"&&(K={handler:K}),Y=(0,w.default)(Y,V,K),this.bindings[Y.key]=this.bindings[Y.key]||[],this.bindings[Y.key].push(Y)}},{key:"listen",value:function(){var R=this;this.quill.root.addEventListener("keydown",function(V){if(!V.defaultPrevented){var K=V.which||V.keyCode,Y=(R.bindings[K]||[]).filter(function(ae){return C.match(V,ae)});if(Y.length!==0){var Q=R.quill.getSelection();if(Q!=null&&R.quill.hasFocus()){var J=R.quill.getLine(Q.index),te=m(J,2),oe=te[0],ie=te[1],se=R.quill.getLeaf(Q.index),z=m(se,2),H=z[0],G=z[1],$=Q.length===0?[H,G]:R.quill.getLeaf(Q.index+Q.length),W=m($,2),X=W[0],ne=W[1],ee=H instanceof B.default.Text?H.value().slice(0,G):"",le=X instanceof B.default.Text?X.value().slice(ne):"",re={collapsed:Q.length===0,empty:Q.length===0&&oe.length()<=1,format:R.quill.getFormat(Q),offset:ie,prefix:ee,suffix:le};Y.some(function(ae){if(ae.collapsed!=null&&ae.collapsed!==re.collapsed||ae.empty!=null&&ae.empty!==re.empty||ae.offset!=null&&ae.offset!==re.offset)return!1;if(Array.isArray(ae.format)){if(ae.format.every(function(ce){return re.format[ce]==null}))return!1}else if(i(ae.format)==="object"&&!Object.keys(ae.format).every(function(ce){return ae.format[ce]===!0?re.format[ce]!=null:ae.format[ce]===!1?re.format[ce]==null:(0,O.default)(ae.format[ce],re.format[ce])}))return!1;return!(ae.prefix!=null&&!ae.prefix.test(re.prefix))&&!(ae.suffix!=null&&!ae.suffix.test(re.suffix))&&ae.handler.call(R,Q,re)!==!0})&&V.preventDefault()}}}})}}]),C})(S.default);D.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},D.DEFAULTS={bindings:{bold:s("bold"),italic:s("italic"),underline:s("underline"),indent:{key:D.keys.TAB,format:["blockquote","indent","list"],handler:function(q,C){if(C.collapsed&&C.offset!==0)return!0;this.quill.format("indent","+1",U.default.sources.USER)}},outdent:{key:D.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(q,C){if(C.collapsed&&C.offset!==0)return!0;this.quill.format("indent","-1",U.default.sources.USER)}},"outdent backspace":{key:D.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(q,C){C.format.indent!=null?this.quill.format("indent","-1",U.default.sources.USER):C.format.list!=null&&this.quill.format("list",!1,U.default.sources.USER)}},"indent code-block":l(!0),"outdent code-block":l(!1),"remove tab":{key:D.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(q){this.quill.deleteText(q.index-1,1,U.default.sources.USER)}},tab:{key:D.keys.TAB,handler:function(q){this.quill.history.cutoff();var C=new v.default().retain(q.index).delete(q.length).insert("	");this.quill.updateContents(C,U.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(q.index+1,U.default.sources.SILENT)}},"list empty enter":{key:D.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(q,C){this.quill.format("list",!1,U.default.sources.USER),C.format.indent&&this.quill.format("indent",!1,U.default.sources.USER)}},"checklist enter":{key:D.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(q){var C=this.quill.getLine(q.index),R=m(C,2),V=R[0],K=R[1],Y=(0,w.default)({},V.formats(),{list:"checked"}),Q=new v.default().retain(q.index).insert(`
`,Y).retain(V.length()-K-1).retain(1,{list:"unchecked"});this.quill.updateContents(Q,U.default.sources.USER),this.quill.setSelection(q.index+1,U.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:D.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(q,C){var R=this.quill.getLine(q.index),V=m(R,2),K=V[0],Y=V[1],Q=new v.default().retain(q.index).insert(`
`,C.format).retain(K.length()-Y-1).retain(1,{header:null});this.quill.updateContents(Q,U.default.sources.USER),this.quill.setSelection(q.index+1,U.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(q,C){var R=C.prefix.length,V=this.quill.getLine(q.index),K=m(V,2),Y=K[0],Q=K[1];if(Q>R)return!0;var J=void 0;switch(C.prefix.trim()){case"[]":case"[ ]":J="unchecked";break;case"[x]":J="checked";break;case"-":case"*":J="bullet";break;default:J="ordered"}this.quill.insertText(q.index," ",U.default.sources.USER),this.quill.history.cutoff();var te=new v.default().retain(q.index-Q).delete(R+1).retain(Y.length()-2-Q).retain(1,{list:J});this.quill.updateContents(te,U.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(q.index-R,U.default.sources.SILENT)}},"code exit":{key:D.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(q){var C=this.quill.getLine(q.index),R=m(C,2),V=R[0],K=R[1],Y=new v.default().retain(q.index+V.length()-K-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(Y,U.default.sources.USER)}},"embed left":c(D.keys.LEFT,!1),"embed left shift":c(D.keys.LEFT,!0),"embed right":c(D.keys.RIGHT,!1),"embed right shift":c(D.keys.RIGHT,!0)}},u.default=D,u.SHORTKEY=I},function(j,u,f){j.exports={align:{"":f(75),center:f(76),right:f(77),justify:f(78)},background:f(79),blockquote:f(80),bold:f(81),clean:f(82),code:f(40),"code-block":f(40),color:f(83),direction:{"":f(84),rtl:f(85)},float:{center:f(86),full:f(87),left:f(88),right:f(89)},formula:f(90),header:{1:f(91),2:f(92)},italic:f(93),image:f(94),indent:{"+1":f(95),"-1":f(96)},link:f(97),list:{ordered:f(98),bullet:f(99),check:f(100)},script:{sub:f(101),super:f(102)},strike:f(103),underline:f(104),video:f(105)}},function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0});var g=f(1),E=(function(){function b(h){this.domNode=h,this.domNode[g.DATA_KEY]={blot:this}}return Object.defineProperty(b.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),b.create=function(h){if(this.tagName==null)throw new g.ParchmentError("Blot definition missing tagName");var p;return Array.isArray(this.tagName)?(typeof h=="string"&&(h=h.toUpperCase(),parseInt(h).toString()===h&&(h=parseInt(h))),p=typeof h=="number"?document.createElement(this.tagName[h-1]):this.tagName.indexOf(h)>-1?document.createElement(h):document.createElement(this.tagName[0])):p=document.createElement(this.tagName),this.className&&p.classList.add(this.className),p},b.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},b.prototype.clone=function(){var h=this.domNode.cloneNode(!1);return g.create(h)},b.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[g.DATA_KEY]},b.prototype.deleteAt=function(h,p){this.isolate(h,p).remove()},b.prototype.formatAt=function(h,p,c,e){var t=this.isolate(h,p);if(g.query(c,g.Scope.BLOT)!=null&&e)t.wrap(c,e);else if(g.query(c,g.Scope.ATTRIBUTE)!=null){var n=g.create(this.statics.scope);t.wrap(n),n.format(c,e)}},b.prototype.insertAt=function(h,p,c){var e=c==null?g.create("text",p):g.create(p,c),t=this.split(h);this.parent.insertBefore(e,t)},b.prototype.insertInto=function(h,p){p===void 0&&(p=null),this.parent!=null&&this.parent.children.remove(this);var c=null;h.children.insertBefore(this,p),p!=null&&(c=p.domNode),this.domNode.parentNode==h.domNode&&this.domNode.nextSibling==c||h.domNode.insertBefore(this.domNode,c),this.parent=h,this.attach()},b.prototype.isolate=function(h,p){var c=this.split(h);return c.split(p),c},b.prototype.length=function(){return 1},b.prototype.offset=function(h){return h===void 0&&(h=this.parent),this.parent==null||this==h?0:this.parent.children.offset(this)+this.parent.offset(h)},b.prototype.optimize=function(h){this.domNode[g.DATA_KEY]!=null&&delete this.domNode[g.DATA_KEY].mutations},b.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},b.prototype.replace=function(h){h.parent!=null&&(h.parent.insertBefore(this,h.next),h.remove())},b.prototype.replaceWith=function(h,p){var c=typeof h=="string"?g.create(h,p):h;return c.replace(this),c},b.prototype.split=function(h,p){return h===0?this:this.next},b.prototype.update=function(h,p){},b.prototype.wrap=function(h,p){var c=typeof h=="string"?g.create(h,p):h;return this.parent!=null&&this.parent.insertBefore(c,this.next),c.appendChild(this),c},b.blotName="abstract",b})();u.default=E},function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0});var g=f(11),E=f(29),b=f(30),h=f(1),p=(function(){function c(e){this.attributes={},this.domNode=e,this.build()}return c.prototype.attribute=function(e,t){t?e.add(this.domNode,t)&&(e.value(this.domNode)!=null?this.attributes[e.attrName]=e:delete this.attributes[e.attrName]):(e.remove(this.domNode),delete this.attributes[e.attrName])},c.prototype.build=function(){var e=this;this.attributes={};var t=g.default.keys(this.domNode),n=E.default.keys(this.domNode),r=b.default.keys(this.domNode);t.concat(n).concat(r).forEach(function(l){var s=h.query(l,h.Scope.ATTRIBUTE);s instanceof g.default&&(e.attributes[s.attrName]=s)})},c.prototype.copy=function(e){var t=this;Object.keys(this.attributes).forEach(function(n){var r=t.attributes[n].value(t.domNode);e.format(n,r)})},c.prototype.move=function(e){var t=this;this.copy(e),Object.keys(this.attributes).forEach(function(n){t.attributes[n].remove(t.domNode)}),this.attributes={}},c.prototype.values=function(){var e=this;return Object.keys(this.attributes).reduce(function(t,n){return t[n]=e.attributes[n].value(e.domNode),t},{})},c})();u.default=p},function(j,u,f){function g(p,c){return(p.getAttribute("class")||"").split(/\s+/).filter(function(e){return e.indexOf(c+"-")===0})}var E=this&&this.__extends||(function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var t in e)e.hasOwnProperty(t)&&(c[t]=e[t])};return function(c,e){function t(){this.constructor=c}p(c,e),c.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}})();Object.defineProperty(u,"__esModule",{value:!0});var b=f(11),h=(function(p){function c(){return p!==null&&p.apply(this,arguments)||this}return E(c,p),c.keys=function(e){return(e.getAttribute("class")||"").split(/\s+/).map(function(t){return t.split("-").slice(0,-1).join("-")})},c.prototype.add=function(e,t){return!!this.canAdd(e,t)&&(this.remove(e),e.classList.add(this.keyName+"-"+t),!0)},c.prototype.remove=function(e){g(e,this.keyName).forEach(function(t){e.classList.remove(t)}),e.classList.length===0&&e.removeAttribute("class")},c.prototype.value=function(e){var t=g(e,this.keyName)[0]||"",n=t.slice(this.keyName.length+1);return this.canAdd(e,n)?n:""},c})(b.default);u.default=h},function(j,u,f){function g(p){var c=p.split("-"),e=c.slice(1).map(function(t){return t[0].toUpperCase()+t.slice(1)}).join("");return c[0]+e}var E=this&&this.__extends||(function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var t in e)e.hasOwnProperty(t)&&(c[t]=e[t])};return function(c,e){function t(){this.constructor=c}p(c,e),c.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}})();Object.defineProperty(u,"__esModule",{value:!0});var b=f(11),h=(function(p){function c(){return p!==null&&p.apply(this,arguments)||this}return E(c,p),c.keys=function(e){return(e.getAttribute("style")||"").split(";").map(function(t){return t.split(":")[0].trim()})},c.prototype.add=function(e,t){return!!this.canAdd(e,t)&&(e.style[g(this.keyName)]=t,!0)},c.prototype.remove=function(e){e.style[g(this.keyName)]="",e.getAttribute("style")||e.removeAttribute("style")},c.prototype.value=function(e){var t=e.style[g(this.keyName)];return this.canAdd(e,t)?t:""},c})(b.default);u.default=h},function(j,u,f){function g(a){return a&&a.__esModule?a:{default:a}}function E(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}function b(a,i){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||typeof i!="object"&&typeof i!="function"?a:i}function h(a,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);a.prototype=Object.create(i&&i.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(a,i):a.__proto__=i)}Object.defineProperty(u,"__esModule",{value:!0});var p=(function(){function a(i,m){var o=[],x=!0,_=!1,A=void 0;try{for(var O,y=i[Symbol.iterator]();!(x=(O=y.next()).done)&&(o.push(O.value),!m||o.length!==m);x=!0);}catch(w){_=!0,A=w}finally{try{!x&&y.return&&y.return()}finally{if(_)throw A}}return o}return function(i,m){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return a(i,m);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),c=function a(i,m,o){i===null&&(i=Function.prototype);var x=Object.getOwnPropertyDescriptor(i,m);if(x===void 0){var _=Object.getPrototypeOf(i);return _===null?void 0:a(_,m,o)}if("value"in x)return x.value;var A=x.get;if(A!==void 0)return A.call(o)},e=(function(){function a(i,m){for(var o=0;o<m.length;o++){var x=m[o];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(i,x.key,x)}}return function(i,m,o){return m&&a(i.prototype,m),o&&a(i,o),i}})(),t=f(0),n=g(t),r=f(8),l=g(r),s=(function(a){function i(m,o){E(this,i);var x=b(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,m));return x.selection=o,x.textNode=document.createTextNode(i.CONTENTS),x.domNode.appendChild(x.textNode),x._length=0,x}return h(i,a),e(i,null,[{key:"value",value:function(){}}]),e(i,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(m,o){if(this._length!==0)return c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"format",this).call(this,m,o);for(var x=this,_=0;x!=null&&x.statics.scope!==n.default.Scope.BLOCK_BLOT;)_+=x.offset(x.parent),x=x.parent;x!=null&&(this._length=i.CONTENTS.length,x.optimize(),x.formatAt(_,i.CONTENTS.length,m,o),this._length=0)}},{key:"index",value:function(m,o){return m===this.textNode?0:c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"index",this).call(this,m,o)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&this.parent!=null){var m=this.textNode,o=this.selection.getNativeRange(),x=void 0,_=void 0,A=void 0;if(o!=null&&o.start.node===m&&o.end.node===m){var O=[m,o.start.offset,o.end.offset];x=O[0],_=O[1],A=O[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==i.CONTENTS){var y=this.textNode.data.split(i.CONTENTS).join("");this.next instanceof l.default?(x=this.next.domNode,this.next.insertAt(0,y),this.textNode.data=i.CONTENTS):(this.textNode.data=y,this.parent.insertBefore(n.default.create(this.textNode),this),this.textNode=document.createTextNode(i.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),_!=null){var w=[_,A].map(function(v){return Math.max(0,Math.min(x.data.length,v-1))}),d=p(w,2);return _=d[0],A=d[1],{startNode:x,startOffset:_,endNode:x,endOffset:A}}}}},{key:"update",value:function(m,o){var x=this;if(m.some(function(A){return A.type==="characterData"&&A.target===x.textNode})){var _=this.restore();_&&(o.range=_)}}},{key:"value",value:function(){return""}}]),i})(n.default.Embed);s.blotName="cursor",s.className="ql-cursor",s.tagName="span",s.CONTENTS="\uFEFF",u.default=s},function(j,u,f){function g(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(u,"__esModule",{value:!0});var E=(function(){function h(p,c){for(var e=0;e<c.length;e++){var t=c[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(p,t.key,t)}}return function(p,c,e){return c&&h(p.prototype,c),e&&h(p,e),p}})(),b=(function(){function h(p,c){g(this,h),this.quill=p,this.options=c,this.modules={}}return E(h,[{key:"init",value:function(){var p=this;Object.keys(this.options.modules).forEach(function(c){p.modules[c]==null&&p.addModule(c)})}},{key:"addModule",value:function(p){var c=this.quill.constructor.import("modules/"+p);return this.modules[p]=new c(this.quill,this.options.modules[p]||{}),this.modules[p]}}]),h})();b.DEFAULTS={modules:{}},b.themes={default:b},u.default=b},function(j,u,f){function g(a){return a&&a.__esModule?a:{default:a}}function E(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}function b(a,i){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||typeof i!="object"&&typeof i!="function"?a:i}function h(a,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);a.prototype=Object.create(i&&i.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(a,i):a.__proto__=i)}Object.defineProperty(u,"__esModule",{value:!0});var p=(function(){function a(i,m){for(var o=0;o<m.length;o++){var x=m[o];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(i,x.key,x)}}return function(i,m,o){return m&&a(i.prototype,m),o&&a(i,o),i}})(),c=function a(i,m,o){i===null&&(i=Function.prototype);var x=Object.getOwnPropertyDescriptor(i,m);if(x===void 0){var _=Object.getPrototypeOf(i);return _===null?void 0:a(_,m,o)}if("value"in x)return x.value;var A=x.get;if(A!==void 0)return A.call(o)},e=f(0),t=g(e),n=f(8),r=g(n),l="\uFEFF",s=(function(a){function i(m){E(this,i);var o=b(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,m));return o.contentNode=document.createElement("span"),o.contentNode.setAttribute("contenteditable",!1),[].slice.call(o.domNode.childNodes).forEach(function(x){o.contentNode.appendChild(x)}),o.leftGuard=document.createTextNode(l),o.rightGuard=document.createTextNode(l),o.domNode.appendChild(o.leftGuard),o.domNode.appendChild(o.contentNode),o.domNode.appendChild(o.rightGuard),o}return h(i,a),p(i,[{key:"index",value:function(m,o){return m===this.leftGuard?0:m===this.rightGuard?1:c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"index",this).call(this,m,o)}},{key:"restore",value:function(m){var o=void 0,x=void 0,_=m.data.split(l).join("");if(m===this.leftGuard)if(this.prev instanceof r.default){var A=this.prev.length();this.prev.insertAt(A,_),o={startNode:this.prev.domNode,startOffset:A+_.length}}else x=document.createTextNode(_),this.parent.insertBefore(t.default.create(x),this),o={startNode:x,startOffset:_.length};else m===this.rightGuard&&(this.next instanceof r.default?(this.next.insertAt(0,_),o={startNode:this.next.domNode,startOffset:_.length}):(x=document.createTextNode(_),this.parent.insertBefore(t.default.create(x),this.next),o={startNode:x,startOffset:_.length}));return m.data=l,o}},{key:"update",value:function(m,o){var x=this;m.forEach(function(_){if(_.type==="characterData"&&(_.target===x.leftGuard||_.target===x.rightGuard)){var A=x.restore(_.target);A&&(o.range=A)}})}}]),i})(t.default.Embed);u.default=s},function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0}),u.AlignStyle=u.AlignClass=u.AlignAttribute=void 0;var g=f(0),E=(function(e){return e&&e.__esModule?e:{default:e}})(g),b={scope:E.default.Scope.BLOCK,whitelist:["right","center","justify"]},h=new E.default.Attributor.Attribute("align","align",b),p=new E.default.Attributor.Class("align","ql-align",b),c=new E.default.Attributor.Style("align","text-align",b);u.AlignAttribute=h,u.AlignClass=p,u.AlignStyle=c},function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0}),u.BackgroundStyle=u.BackgroundClass=void 0;var g=f(0),E=(function(c){return c&&c.__esModule?c:{default:c}})(g),b=f(24),h=new E.default.Attributor.Class("background","ql-bg",{scope:E.default.Scope.INLINE}),p=new b.ColorAttributor("background","background-color",{scope:E.default.Scope.INLINE});u.BackgroundClass=h,u.BackgroundStyle=p},function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0}),u.DirectionStyle=u.DirectionClass=u.DirectionAttribute=void 0;var g=f(0),E=(function(e){return e&&e.__esModule?e:{default:e}})(g),b={scope:E.default.Scope.BLOCK,whitelist:["rtl"]},h=new E.default.Attributor.Attribute("direction","dir",b),p=new E.default.Attributor.Class("direction","ql-direction",b),c=new E.default.Attributor.Style("direction","direction",b);u.DirectionAttribute=h,u.DirectionClass=p,u.DirectionStyle=c},function(j,u,f){function g(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function E(s,a){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?s:a}function b(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(s,a):s.__proto__=a)}Object.defineProperty(u,"__esModule",{value:!0}),u.FontClass=u.FontStyle=void 0;var h=(function(){function s(a,i){for(var m=0;m<i.length;m++){var o=i[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}return function(a,i,m){return i&&s(a.prototype,i),m&&s(a,m),a}})(),p=function s(a,i,m){a===null&&(a=Function.prototype);var o=Object.getOwnPropertyDescriptor(a,i);if(o===void 0){var x=Object.getPrototypeOf(a);return x===null?void 0:s(x,i,m)}if("value"in o)return o.value;var _=o.get;if(_!==void 0)return _.call(m)},c=f(0),e=(function(s){return s&&s.__esModule?s:{default:s}})(c),t={scope:e.default.Scope.INLINE,whitelist:["serif","monospace"]},n=new e.default.Attributor.Class("font","ql-font",t),r=(function(s){function a(){return g(this,a),E(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return b(a,s),h(a,[{key:"value",value:function(i){return p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"value",this).call(this,i).replace(/["']/g,"")}}]),a})(e.default.Attributor.Style),l=new r("font","font-family",t);u.FontStyle=l,u.FontClass=n},function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0}),u.SizeStyle=u.SizeClass=void 0;var g=f(0),E=(function(p){return p&&p.__esModule?p:{default:p}})(g),b=new E.default.Attributor.Class("size","ql-size",{scope:E.default.Scope.INLINE,whitelist:["small","large","huge"]}),h=new E.default.Attributor.Style("size","font-size",{scope:E.default.Scope.INLINE,whitelist:["10px","18px","32px"]});u.SizeClass=b,u.SizeStyle=h},function(j,u,f){function g(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function E(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||typeof r!="object"&&typeof r!="function"?n:r}function b(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)}Object.defineProperty(u,"__esModule",{value:!0});var h=(function(){function n(r,l){for(var s=0;s<l.length;s++){var a=l[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(r,l,s){return l&&n(r.prototype,l),s&&n(r,s),r}})(),p=function n(r,l,s){r===null&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,l);if(a===void 0){var i=Object.getPrototypeOf(r);return i===null?void 0:n(i,l,s)}if("value"in a)return a.value;var m=a.get;if(m!==void 0)return m.call(s)},c=f(5),e=(function(n){return n&&n.__esModule?n:{default:n}})(c),t=(function(n){function r(){return g(this,r),E(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return b(r,n),h(r,[{key:"optimize",value:function(l){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"optimize",this).call(this,l),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return p(r.__proto__||Object.getPrototypeOf(r),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),r})(e.default);t.blotName="bold",t.tagName=["STRONG","B"],u.default=t},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(j,u,f){function g(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function E(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||typeof r!="object"&&typeof r!="function"?n:r}function b(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)}Object.defineProperty(u,"__esModule",{value:!0});var h=(function(){function n(r,l){for(var s=0;s<l.length;s++){var a=l[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(r,l,s){return l&&n(r.prototype,l),s&&n(r,s),r}})(),p=function n(r,l,s){r===null&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,l);if(a===void 0){var i=Object.getPrototypeOf(r);return i===null?void 0:n(i,l,s)}if("value"in a)return a.value;var m=a.get;if(m!==void 0)return m.call(s)},c=f(16),e=(function(n){return n&&n.__esModule?n:{default:n}})(c),t=(function(n){function r(l,s){g(this,r);var a=E(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,l));return a.label.innerHTML=s,a.container.classList.add("ql-color-picker"),[].slice.call(a.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(i){i.classList.add("ql-primary")}),a}return b(r,n),h(r,[{key:"buildItem",value:function(l){var s=p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"buildItem",this).call(this,l);return s.style.backgroundColor=l.getAttribute("value")||"",s}},{key:"selectItem",value:function(l,s){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"selectItem",this).call(this,l,s);var a=this.label.querySelector(".ql-color-label"),i=l&&l.getAttribute("data-value")||"";a&&(a.tagName==="line"?a.style.stroke=i:a.style.fill=i)}}]),r})(e.default);u.default=t},function(j,u,f){function g(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function E(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||typeof r!="object"&&typeof r!="function"?n:r}function b(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)}Object.defineProperty(u,"__esModule",{value:!0});var h=(function(){function n(r,l){for(var s=0;s<l.length;s++){var a=l[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(r,l,s){return l&&n(r.prototype,l),s&&n(r,s),r}})(),p=function n(r,l,s){r===null&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,l);if(a===void 0){var i=Object.getPrototypeOf(r);return i===null?void 0:n(i,l,s)}if("value"in a)return a.value;var m=a.get;if(m!==void 0)return m.call(s)},c=f(16),e=(function(n){return n&&n.__esModule?n:{default:n}})(c),t=(function(n){function r(l,s){g(this,r);var a=E(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,l));return a.container.classList.add("ql-icon-picker"),[].forEach.call(a.container.querySelectorAll(".ql-picker-item"),function(i){i.innerHTML=s[i.getAttribute("data-value")||""]}),a.defaultItem=a.container.querySelector(".ql-selected"),a.selectItem(a.defaultItem),a}return b(r,n),h(r,[{key:"selectItem",value:function(l,s){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"selectItem",this).call(this,l,s),l=l||this.defaultItem,this.label.innerHTML=l.innerHTML}}]),r})(e.default);u.default=t},function(j,u,f){function g(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(u,"__esModule",{value:!0});var E=(function(){function h(p,c){for(var e=0;e<c.length;e++){var t=c[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(p,t.key,t)}}return function(p,c,e){return c&&h(p.prototype,c),e&&h(p,e),p}})(),b=(function(){function h(p,c){var e=this;g(this,h),this.quill=p,this.boundsContainer=c||document.body,this.root=p.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){e.root.style.marginTop=-1*e.quill.root.scrollTop+"px"}),this.hide()}return E(h,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(p){var c=p.left+p.width/2-this.root.offsetWidth/2,e=p.bottom+this.quill.root.scrollTop;this.root.style.left=c+"px",this.root.style.top=e+"px",this.root.classList.remove("ql-flip");var t=this.boundsContainer.getBoundingClientRect(),n=this.root.getBoundingClientRect(),r=0;if(n.right>t.right&&(r=t.right-n.right,this.root.style.left=c+r+"px"),n.left<t.left&&(r=t.left-n.left,this.root.style.left=c+r+"px"),n.bottom>t.bottom){var l=n.bottom-n.top,s=p.bottom-p.top+l;this.root.style.top=e-s+"px",this.root.classList.add("ql-flip")}return r}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),h})();u.default=b},function(j,u,f){function g(S){return S&&S.__esModule?S:{default:S}}function E(S,P){if(!(S instanceof P))throw new TypeError("Cannot call a class as a function")}function b(S,P){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!P||typeof P!="object"&&typeof P!="function"?S:P}function h(S,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof P);S.prototype=Object.create(P&&P.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),P&&(Object.setPrototypeOf?Object.setPrototypeOf(S,P):S.__proto__=P)}function p(S){var P=S.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||S.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return P?(P[1]||"https")+"://www.youtube.com/embed/"+P[2]+"?showinfo=0":(P=S.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(P[1]||"https")+"://player.vimeo.com/video/"+P[2]+"/":S}function c(S,P){var I=arguments.length>2&&arguments[2]!==void 0&&arguments[2];P.forEach(function(D){var q=document.createElement("option");D===I?q.setAttribute("selected","selected"):q.setAttribute("value",D),S.appendChild(q)})}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.BaseTooltip=void 0;var e=(function(){function S(P,I){for(var D=0;D<I.length;D++){var q=I[D];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(P,q.key,q)}}return function(P,I,D){return I&&S(P.prototype,I),D&&S(P,D),P}})(),t=function S(P,I,D){P===null&&(P=Function.prototype);var q=Object.getOwnPropertyDescriptor(P,I);if(q===void 0){var C=Object.getPrototypeOf(P);return C===null?void 0:S(C,I,D)}if("value"in q)return q.value;var R=q.get;if(R!==void 0)return R.call(D)},n=f(2),r=g(n),l=f(4),s=g(l),a=f(9),i=g(a),m=f(25),o=g(m),x=f(32),_=g(x),A=f(41),O=g(A),y=f(42),w=g(y),d=f(16),v=g(d),F=f(43),N=g(F),L=[!1,"center","right","justify"],B=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],Z=[!1,"serif","monospace"],U=["1","2","3",!1],M=["small",!1,"large","huge"],k=(function(S){function P(I,D){E(this,P);var q=b(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,I,D)),C=function R(V){if(!document.body.contains(I.root))return document.body.removeEventListener("click",R);q.tooltip==null||q.tooltip.root.contains(V.target)||document.activeElement===q.tooltip.textbox||q.quill.hasFocus()||q.tooltip.hide(),q.pickers!=null&&q.pickers.forEach(function(K){K.container.contains(V.target)||K.close()})};return I.emitter.listenDOM("click",document.body,C),q}return h(P,S),e(P,[{key:"addModule",value:function(I){var D=t(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"addModule",this).call(this,I);return I==="toolbar"&&this.extendToolbar(D),D}},{key:"buildButtons",value:function(I,D){I.forEach(function(q){(q.getAttribute("class")||"").split(/\s+/).forEach(function(C){if(C.startsWith("ql-")&&(C=C.slice(3),D[C]!=null))if(C==="direction")q.innerHTML=D[C][""]+D[C].rtl;else if(typeof D[C]=="string")q.innerHTML=D[C];else{var R=q.value||"";R!=null&&D[C][R]&&(q.innerHTML=D[C][R])}})})}},{key:"buildPickers",value:function(I,D){var q=this;this.pickers=I.map(function(R){if(R.classList.contains("ql-align"))return R.querySelector("option")==null&&c(R,L),new w.default(R,D.align);if(R.classList.contains("ql-background")||R.classList.contains("ql-color")){var V=R.classList.contains("ql-background")?"background":"color";return R.querySelector("option")==null&&c(R,B,V==="background"?"#ffffff":"#000000"),new O.default(R,D[V])}return R.querySelector("option")==null&&(R.classList.contains("ql-font")?c(R,Z):R.classList.contains("ql-header")?c(R,U):R.classList.contains("ql-size")&&c(R,M)),new v.default(R)});var C=function(){q.pickers.forEach(function(R){R.update()})};this.quill.on(i.default.events.EDITOR_CHANGE,C)}}]),P})(_.default);k.DEFAULTS=(0,r.default)(!0,{},_.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var S=this,P=this.container.querySelector("input.ql-image[type=file]");P==null&&(P=document.createElement("input"),P.setAttribute("type","file"),P.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),P.classList.add("ql-image"),P.addEventListener("change",function(){if(P.files!=null&&P.files[0]!=null){var I=new FileReader;I.onload=function(D){var q=S.quill.getSelection(!0);S.quill.updateContents(new s.default().retain(q.index).delete(q.length).insert({image:D.target.result}),i.default.sources.USER),S.quill.setSelection(q.index+1,i.default.sources.SILENT),P.value=""},I.readAsDataURL(P.files[0])}}),this.container.appendChild(P)),P.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var T=(function(S){function P(I,D){E(this,P);var q=b(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,I,D));return q.textbox=q.root.querySelector('input[type="text"]'),q.listen(),q}return h(P,S),e(P,[{key:"listen",value:function(){var I=this;this.textbox.addEventListener("keydown",function(D){o.default.match(D,"enter")?(I.save(),D.preventDefault()):o.default.match(D,"escape")&&(I.cancel(),D.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),D!=null?this.textbox.value=D:I!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+I)||""),this.root.setAttribute("data-mode",I)}},{key:"restoreFocus",value:function(){var I=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=I}},{key:"save",value:function(){var I=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var D=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",I,i.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",I,i.default.sources.USER)),this.quill.root.scrollTop=D;break;case"video":I=p(I);case"formula":if(!I)break;var q=this.quill.getSelection(!0);if(q!=null){var C=q.index+q.length;this.quill.insertEmbed(C,this.root.getAttribute("data-mode"),I,i.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(C+1," ",i.default.sources.USER),this.quill.setSelection(C+2,i.default.sources.USER)}}this.textbox.value="",this.hide()}}]),P})(N.default);u.BaseTooltip=T,u.default=k},function(j,u,f){function g(X){return X&&X.__esModule?X:{default:X}}Object.defineProperty(u,"__esModule",{value:!0});var E=f(46),b=g(E),h=f(34),p=f(36),c=f(62),e=f(63),t=g(e),n=f(64),r=g(n),l=f(65),s=g(l),a=f(35),i=f(24),m=f(37),o=f(38),x=f(39),_=g(x),A=f(66),O=g(A),y=f(15),w=g(y),d=f(67),v=g(d),F=f(68),N=g(F),L=f(69),B=g(L),Z=f(70),U=g(Z),M=f(71),k=g(M),T=f(13),S=g(T),P=f(72),I=g(P),D=f(73),q=g(D),C=f(74),R=g(C),V=f(26),K=g(V),Y=f(16),Q=g(Y),J=f(41),te=g(J),oe=f(42),ie=g(oe),se=f(43),z=g(se),H=f(107),G=g(H),$=f(108),W=g($);b.default.register({"attributors/attribute/direction":p.DirectionAttribute,"attributors/class/align":h.AlignClass,"attributors/class/background":a.BackgroundClass,"attributors/class/color":i.ColorClass,"attributors/class/direction":p.DirectionClass,"attributors/class/font":m.FontClass,"attributors/class/size":o.SizeClass,"attributors/style/align":h.AlignStyle,"attributors/style/background":a.BackgroundStyle,"attributors/style/color":i.ColorStyle,"attributors/style/direction":p.DirectionStyle,"attributors/style/font":m.FontStyle,"attributors/style/size":o.SizeStyle},!0),b.default.register({"formats/align":h.AlignClass,"formats/direction":p.DirectionClass,"formats/indent":c.IndentClass,"formats/background":a.BackgroundStyle,"formats/color":i.ColorStyle,"formats/font":m.FontClass,"formats/size":o.SizeClass,"formats/blockquote":t.default,"formats/code-block":S.default,"formats/header":r.default,"formats/list":s.default,"formats/bold":_.default,"formats/code":T.Code,"formats/italic":O.default,"formats/link":w.default,"formats/script":v.default,"formats/strike":N.default,"formats/underline":B.default,"formats/image":U.default,"formats/video":k.default,"formats/list/item":l.ListItem,"modules/formula":I.default,"modules/syntax":q.default,"modules/toolbar":R.default,"themes/bubble":G.default,"themes/snow":W.default,"ui/icons":K.default,"ui/picker":Q.default,"ui/icon-picker":ie.default,"ui/color-picker":te.default,"ui/tooltip":z.default},!0),u.default=b.default},function(j,u,f){function g(B){return B&&B.__esModule?B:{default:B}}Object.defineProperty(u,"__esModule",{value:!0});var E=f(0),b=g(E),h=f(6),p=g(h),c=f(3),e=g(c),t=f(14),n=g(t),r=f(23),l=g(r),s=f(31),a=g(s),i=f(33),m=g(i),o=f(5),x=g(o),_=f(59),A=g(_),O=f(8),y=g(O),w=f(60),d=g(w),v=f(61),F=g(v),N=f(25),L=g(N);p.default.register({"blots/block":e.default,"blots/block/embed":c.BlockEmbed,"blots/break":n.default,"blots/container":l.default,"blots/cursor":a.default,"blots/embed":m.default,"blots/inline":x.default,"blots/scroll":A.default,"blots/text":y.default,"modules/clipboard":d.default,"modules/history":F.default,"modules/keyboard":L.default}),b.default.register(e.default,n.default,a.default,x.default,A.default,y.default),u.default=p.default},function(j,u,f){Object.defineProperty(u,"__esModule",{value:!0});var g=(function(){function E(){this.head=this.tail=null,this.length=0}return E.prototype.append=function(){for(var b=[],h=0;h<arguments.length;h++)b[h]=arguments[h];this.insertBefore(b[0],null),b.length>1&&this.append.apply(this,b.slice(1))},E.prototype.contains=function(b){for(var h,p=this.iterator();h=p();)if(h===b)return!0;return!1},E.prototype.insertBefore=function(b,h){b&&(b.next=h,h!=null?(b.prev=h.prev,h.prev!=null&&(h.prev.next=b),h.prev=b,h===this.head&&(this.head=b)):this.tail!=null?(this.tail.next=b,b.prev=this.tail,this.tail=b):(b.prev=null,this.head=this.tail=b),this.length+=1)},E.prototype.offset=function(b){for(var h=0,p=this.head;p!=null;){if(p===b)return h;h+=p.length(),p=p.next}return-1},E.prototype.remove=function(b){this.contains(b)&&(b.prev!=null&&(b.prev.next=b.next),b.next!=null&&(b.next.prev=b.prev),b===this.head&&(this.head=b.next),b===this.tail&&(this.tail=b.prev),this.length-=1)},E.prototype.iterator=function(b){return b===void 0&&(b=this.head),function(){var h=b;return b!=null&&(b=b.next),h}},E.prototype.find=function(b,h){h===void 0&&(h=!1);for(var p,c=this.iterator();p=c();){var e=p.length();if(b<e||h&&b===e&&(p.next==null||p.next.length()!==0))return[p,b];b-=e}return[null,0]},E.prototype.forEach=function(b){for(var h,p=this.iterator();h=p();)b(h)},E.prototype.forEachAt=function(b,h,p){if(!(h<=0))for(var c,e=this.find(b),t=e[0],n=e[1],r=b-n,l=this.iterator(t);(c=l())&&r<b+h;){var s=c.length();b>r?p(c,b-r,Math.min(h,r+s-b)):p(c,0,Math.min(s,b+h-r)),r+=s}},E.prototype.map=function(b){return this.reduce(function(h,p){return h.push(b(p)),h},[])},E.prototype.reduce=function(b,h){for(var p,c=this.iterator();p=c();)h=b(h,p);return h},E})();u.default=g},function(j,u,f){var g=this&&this.__extends||(function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}})();Object.defineProperty(u,"__esModule",{value:!0});var E=f(17),b=f(1),h={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},p=(function(c){function e(t){var n=c.call(this,t)||this;return n.scroll=n,n.observer=new MutationObserver(function(r){n.update(r)}),n.observer.observe(n.domNode,h),n.attach(),n}return g(e,c),e.prototype.detach=function(){c.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(t,n){this.update(),t===0&&n===this.length()?this.children.forEach(function(r){r.remove()}):c.prototype.deleteAt.call(this,t,n)},e.prototype.formatAt=function(t,n,r,l){this.update(),c.prototype.formatAt.call(this,t,n,r,l)},e.prototype.insertAt=function(t,n,r){this.update(),c.prototype.insertAt.call(this,t,n,r)},e.prototype.optimize=function(t,n){var r=this;t===void 0&&(t=[]),n===void 0&&(n={}),c.prototype.optimize.call(this,n);for(var l=[].slice.call(this.observer.takeRecords());l.length>0;)t.push(l.pop());for(var s=function(o,x){x===void 0&&(x=!0),o!=null&&o!==r&&o.domNode.parentNode!=null&&(o.domNode[b.DATA_KEY].mutations==null&&(o.domNode[b.DATA_KEY].mutations=[]),x&&s(o.parent))},a=function(o){o.domNode[b.DATA_KEY]!=null&&o.domNode[b.DATA_KEY].mutations!=null&&(o instanceof E.default&&o.children.forEach(a),o.optimize(n))},i=t,m=0;i.length>0;m+=1){if(m>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(i.forEach(function(o){var x=b.find(o.target,!0);x!=null&&(x.domNode===o.target&&(o.type==="childList"?(s(b.find(o.previousSibling,!1)),[].forEach.call(o.addedNodes,function(_){var A=b.find(_,!1);s(A,!1),A instanceof E.default&&A.children.forEach(function(O){s(O,!1)})})):o.type==="attributes"&&s(x.prev)),s(x))}),this.children.forEach(a),i=[].slice.call(this.observer.takeRecords()),l=i.slice();l.length>0;)t.push(l.pop())}},e.prototype.update=function(t,n){var r=this;n===void 0&&(n={}),t=t||this.observer.takeRecords(),t.map(function(l){var s=b.find(l.target,!0);return s==null?null:s.domNode[b.DATA_KEY].mutations==null?(s.domNode[b.DATA_KEY].mutations=[l],s):(s.domNode[b.DATA_KEY].mutations.push(l),null)}).forEach(function(l){l!=null&&l!==r&&l.domNode[b.DATA_KEY]!=null&&l.update(l.domNode[b.DATA_KEY].mutations||[],n)}),this.domNode[b.DATA_KEY].mutations!=null&&c.prototype.update.call(this,this.domNode[b.DATA_KEY].mutations,n),this.optimize(t,n)},e.blotName="scroll",e.defaultChild="block",e.scope=b.Scope.BLOCK_BLOT,e.tagName="DIV",e})(E.default);u.default=p},function(j,u,f){function g(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(var t in c)if(c[t]!==e[t])return!1;return!0}var E=this&&this.__extends||(function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}})();Object.defineProperty(u,"__esModule",{value:!0});var b=f(18),h=f(1),p=(function(c){function e(){return c!==null&&c.apply(this,arguments)||this}return E(e,c),e.formats=function(t){if(t.tagName!==e.tagName)return c.formats.call(this,t)},e.prototype.format=function(t,n){var r=this;t!==this.statics.blotName||n?c.prototype.format.call(this,t,n):(this.children.forEach(function(l){l instanceof b.default||(l=l.wrap(e.blotName,!0)),r.attributes.copy(l)}),this.unwrap())},e.prototype.formatAt=function(t,n,r,l){this.formats()[r]!=null||h.query(r,h.Scope.ATTRIBUTE)?this.isolate(t,n).format(r,l):c.prototype.formatAt.call(this,t,n,r,l)},e.prototype.optimize=function(t){c.prototype.optimize.call(this,t);var n=this.formats();if(Object.keys(n).length===0)return this.unwrap();var r=this.next;r instanceof e&&r.prev===this&&g(n,r.formats())&&(r.moveChildren(this),r.remove())},e.blotName="inline",e.scope=h.Scope.INLINE_BLOT,e.tagName="SPAN",e})(b.default);u.default=p},function(j,u,f){var g=this&&this.__extends||(function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var t in e)e.hasOwnProperty(t)&&(c[t]=e[t])};return function(c,e){function t(){this.constructor=c}p(c,e),c.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}})();Object.defineProperty(u,"__esModule",{value:!0});var E=f(18),b=f(1),h=(function(p){function c(){return p!==null&&p.apply(this,arguments)||this}return g(c,p),c.formats=function(e){var t=b.query(c.blotName).tagName;if(e.tagName!==t)return p.formats.call(this,e)},c.prototype.format=function(e,t){b.query(e,b.Scope.BLOCK)!=null&&(e!==this.statics.blotName||t?p.prototype.format.call(this,e,t):this.replaceWith(c.blotName))},c.prototype.formatAt=function(e,t,n,r){b.query(n,b.Scope.BLOCK)!=null?this.format(n,r):p.prototype.formatAt.call(this,e,t,n,r)},c.prototype.insertAt=function(e,t,n){if(n==null||b.query(t,b.Scope.INLINE)!=null)p.prototype.insertAt.call(this,e,t,n);else{var r=this.split(e),l=b.create(t,n);r.parent.insertBefore(l,r)}},c.prototype.update=function(e,t){navigator.userAgent.match(/Trident/)?this.build():p.prototype.update.call(this,e,t)},c.blotName="block",c.scope=b.Scope.BLOCK_BLOT,c.tagName="P",c})(E.default);u.default=h},function(j,u,f){var g=this&&this.__extends||(function(){var h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,c){p.__proto__=c}||function(p,c){for(var e in c)c.hasOwnProperty(e)&&(p[e]=c[e])};return function(p,c){function e(){this.constructor=p}h(p,c),p.prototype=c===null?Object.create(c):(e.prototype=c.prototype,new e)}})();Object.defineProperty(u,"__esModule",{value:!0});var E=f(19),b=(function(h){function p(){return h!==null&&h.apply(this,arguments)||this}return g(p,h),p.formats=function(c){},p.prototype.format=function(c,e){h.prototype.formatAt.call(this,0,this.length(),c,e)},p.prototype.formatAt=function(c,e,t,n){c===0&&e===this.length()?this.format(t,n):h.prototype.formatAt.call(this,c,e,t,n)},p.prototype.formats=function(){return this.statics.formats(this.domNode)},p})(E.default);u.default=b},function(j,u,f){var g=this&&this.__extends||(function(){var p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var t in e)e.hasOwnProperty(t)&&(c[t]=e[t])};return function(c,e){function t(){this.constructor=c}p(c,e),c.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}})();Object.defineProperty(u,"__esModule",{value:!0});var E=f(19),b=f(1),h=(function(p){function c(e){var t=p.call(this,e)||this;return t.text=t.statics.value(t.domNode),t}return g(c,p),c.create=function(e){return document.createTextNode(e)},c.value=function(e){var t=e.data;return t.normalize&&(t=t.normalize()),t},c.prototype.deleteAt=function(e,t){this.domNode.data=this.text=this.text.slice(0,e)+this.text.slice(e+t)},c.prototype.index=function(e,t){return this.domNode===e?t:-1},c.prototype.insertAt=function(e,t,n){n==null?(this.text=this.text.slice(0,e)+t+this.text.slice(e),this.domNode.data=this.text):p.prototype.insertAt.call(this,e,t,n)},c.prototype.length=function(){return this.text.length},c.prototype.optimize=function(e){p.prototype.optimize.call(this,e),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof c&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},c.prototype.position=function(e,t){return[this.domNode,e]},c.prototype.split=function(e,t){if(t===void 0&&(t=!1),!t){if(e===0)return this;if(e===this.length())return this.next}var n=b.create(this.domNode.splitText(e));return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n},c.prototype.update=function(e,t){var n=this;e.some(function(r){return r.type==="characterData"&&r.target===n.domNode})&&(this.text=this.statics.value(this.domNode))},c.prototype.value=function(){return this.text},c.blotName="text",c.scope=b.Scope.INLINE_BLOT,c})(E.default);u.default=h},function(j,u,f){var g=document.createElement("div");if(g.classList.toggle("test-class",!1),g.classList.contains("test-class")){var E=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(b,h){return arguments.length>1&&!this.contains(b)==!h?h:E.call(this,b)}}String.prototype.startsWith||(String.prototype.startsWith=function(b,h){return h=h||0,this.substr(h,b.length)===b}),String.prototype.endsWith||(String.prototype.endsWith=function(b,h){var p=this.toString();(typeof h!="number"||!isFinite(h)||Math.floor(h)!==h||h>p.length)&&(h=p.length),h-=b.length;var c=p.indexOf(b,h);return c!==-1&&c===h}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(b){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof b!="function")throw new TypeError("predicate must be a function");for(var h,p=Object(this),c=p.length>>>0,e=arguments[1],t=0;t<c;t++)if(h=p[t],b.call(e,h,t,p))return h}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(j,u){function f(o,x,_){if(o==x)return o?[[i,o]]:[];(_<0||o.length<_)&&(_=null);var A=h(o,x),O=o.substring(0,A);o=o.substring(A),x=x.substring(A),A=p(o,x);var y=o.substring(o.length-A);o=o.substring(0,o.length-A),x=x.substring(0,x.length-A);var w=g(o,x);return O&&w.unshift([i,O]),y&&w.push([i,y]),e(w),_!=null&&(w=n(w,_)),w=r(w)}function g(o,x){var _;if(!o)return[[a,x]];if(!x)return[[s,o]];var A=o.length>x.length?o:x,O=o.length>x.length?x:o,y=A.indexOf(O);if(y!=-1)return _=[[a,A.substring(0,y)],[i,O],[a,A.substring(y+O.length)]],o.length>x.length&&(_[0][0]=_[2][0]=s),_;if(O.length==1)return[[s,o],[a,x]];var w=c(o,x);if(w){var d=w[0],v=w[1],F=w[2],N=w[3],L=w[4],B=f(d,F),Z=f(v,N);return B.concat([[i,L]],Z)}return E(o,x)}function E(o,x){for(var _=o.length,A=x.length,O=Math.ceil((_+A)/2),y=O,w=2*O,d=new Array(w),v=new Array(w),F=0;F<w;F++)d[F]=-1,v[F]=-1;d[y+1]=0,v[y+1]=0;for(var N=_-A,L=N%2!=0,B=0,Z=0,U=0,M=0,k=0;k<O;k++){for(var T=-k+B;T<=k-Z;T+=2){var S,P=y+T;S=T==-k||T!=k&&d[P-1]<d[P+1]?d[P+1]:d[P-1]+1;for(var I=S-T;S<_&&I<A&&o.charAt(S)==x.charAt(I);)S++,I++;if(d[P]=S,S>_)Z+=2;else if(I>A)B+=2;else if(L){var D=y+N-T;if(D>=0&&D<w&&v[D]!=-1){var q=_-v[D];if(S>=q)return b(o,x,S,I)}}}for(var C=-k+U;C<=k-M;C+=2){var q,D=y+C;q=C==-k||C!=k&&v[D-1]<v[D+1]?v[D+1]:v[D-1]+1;for(var R=q-C;q<_&&R<A&&o.charAt(_-q-1)==x.charAt(A-R-1);)q++,R++;if(v[D]=q,q>_)M+=2;else if(R>A)U+=2;else if(!L){var P=y+N-C;if(P>=0&&P<w&&d[P]!=-1){var S=d[P],I=y+S-P;if(q=_-q,S>=q)return b(o,x,S,I)}}}}return[[s,o],[a,x]]}function b(o,x,_,A){var O=o.substring(0,_),y=x.substring(0,A),w=o.substring(_),d=x.substring(A),v=f(O,y),F=f(w,d);return v.concat(F)}function h(o,x){if(!o||!x||o.charAt(0)!=x.charAt(0))return 0;for(var _=0,A=Math.min(o.length,x.length),O=A,y=0;_<O;)o.substring(y,O)==x.substring(y,O)?(_=O,y=_):A=O,O=Math.floor((A-_)/2+_);return O}function p(o,x){if(!o||!x||o.charAt(o.length-1)!=x.charAt(x.length-1))return 0;for(var _=0,A=Math.min(o.length,x.length),O=A,y=0;_<O;)o.substring(o.length-O,o.length-y)==x.substring(x.length-O,x.length-y)?(_=O,y=_):A=O,O=Math.floor((A-_)/2+_);return O}function c(o,x){function _(B,Z,U){for(var M,k,T,S,P=B.substring(U,U+Math.floor(B.length/4)),I=-1,D="";(I=Z.indexOf(P,I+1))!=-1;){var q=h(B.substring(U),Z.substring(I)),C=p(B.substring(0,U),Z.substring(0,I));D.length<C+q&&(D=Z.substring(I-C,I)+Z.substring(I,I+q),M=B.substring(0,U-C),k=B.substring(U+q),T=Z.substring(0,I-C),S=Z.substring(I+q))}return 2*D.length>=B.length?[M,k,T,S,D]:null}var A=o.length>x.length?o:x,O=o.length>x.length?x:o;if(A.length<4||2*O.length<A.length)return null;var y,w=_(A,O,Math.ceil(A.length/4)),d=_(A,O,Math.ceil(A.length/2));if(!w&&!d)return null;y=d?w&&w[4].length>d[4].length?w:d:w;var v,F,N,L;return o.length>x.length?(v=y[0],F=y[1],N=y[2],L=y[3]):(N=y[0],L=y[1],v=y[2],F=y[3]),[v,F,N,L,y[4]]}function e(o){o.push([i,""]);for(var x,_=0,A=0,O=0,y="",w="";_<o.length;)switch(o[_][0]){case a:O++,w+=o[_][1],_++;break;case s:A++,y+=o[_][1],_++;break;case i:A+O>1?(A!==0&&O!==0&&(x=h(w,y),x!==0&&(_-A-O>0&&o[_-A-O-1][0]==i?o[_-A-O-1][1]+=w.substring(0,x):(o.splice(0,0,[i,w.substring(0,x)]),_++),w=w.substring(x),y=y.substring(x)),(x=p(w,y))!==0&&(o[_][1]=w.substring(w.length-x)+o[_][1],w=w.substring(0,w.length-x),y=y.substring(0,y.length-x))),A===0?o.splice(_-O,A+O,[a,w]):O===0?o.splice(_-A,A+O,[s,y]):o.splice(_-A-O,A+O,[s,y],[a,w]),_=_-A-O+(A?1:0)+(O?1:0)+1):_!==0&&o[_-1][0]==i?(o[_-1][1]+=o[_][1],o.splice(_,1)):_++,O=0,A=0,y="",w=""}o[o.length-1][1]===""&&o.pop();var d=!1;for(_=1;_<o.length-1;)o[_-1][0]==i&&o[_+1][0]==i&&(o[_][1].substring(o[_][1].length-o[_-1][1].length)==o[_-1][1]?(o[_][1]=o[_-1][1]+o[_][1].substring(0,o[_][1].length-o[_-1][1].length),o[_+1][1]=o[_-1][1]+o[_+1][1],o.splice(_-1,1),d=!0):o[_][1].substring(0,o[_+1][1].length)==o[_+1][1]&&(o[_-1][1]+=o[_+1][1],o[_][1]=o[_][1].substring(o[_+1][1].length)+o[_+1][1],o.splice(_+1,1),d=!0)),_++;d&&e(o)}function t(o,x){if(x===0)return[i,o];for(var _=0,A=0;A<o.length;A++){var O=o[A];if(O[0]===s||O[0]===i){var y=_+O[1].length;if(x===y)return[A+1,o];if(x<y){o=o.slice();var w=x-_,d=[O[0],O[1].slice(0,w)],v=[O[0],O[1].slice(w)];return o.splice(A,1,d,v),[A+1,o]}_=y}}throw new Error("cursor_pos is out of bounds!")}function n(o,x){var _=t(o,x),A=_[1],O=_[0],y=A[O],w=A[O+1];if(y==null||y[0]!==i)return o;if(w!=null&&y[1]+w[1]===w[1]+y[1])return A.splice(O,2,w,y),l(A,O,2);if(w!=null&&w[1].indexOf(y[1])===0){A.splice(O,2,[w[0],y[1]],[0,y[1]]);var d=w[1].slice(y[1].length);return d.length>0&&A.splice(O+2,0,[w[0],d]),l(A,O,3)}return o}function r(o){for(var x=!1,_=function(y){return y.charCodeAt(0)>=56320&&y.charCodeAt(0)<=57343},A=2;A<o.length;A+=1)o[A-2][0]===i&&(function(y){return y.charCodeAt(y.length-1)>=55296&&y.charCodeAt(y.length-1)<=56319})(o[A-2][1])&&o[A-1][0]===s&&_(o[A-1][1])&&o[A][0]===a&&_(o[A][1])&&(x=!0,o[A-1][1]=o[A-2][1].slice(-1)+o[A-1][1],o[A][1]=o[A-2][1].slice(-1)+o[A][1],o[A-2][1]=o[A-2][1].slice(0,-1));if(!x)return o;for(var O=[],A=0;A<o.length;A+=1)o[A][1].length>0&&O.push(o[A]);return O}function l(o,x,_){for(var A=x+_-1;A>=0&&A>=x-1;A--)if(A+1<o.length){var O=o[A],y=o[A+1];O[0]===y[1]&&o.splice(A,2,[O[0],O[1]+y[1]])}return o}var s=-1,a=1,i=0,m=f;m.INSERT=a,m.DELETE=s,m.EQUAL=i,j.exports=m},function(j,u){function f(g){var E=[];for(var b in g)E.push(b);return E}u=j.exports=typeof Object.keys=="function"?Object.keys:f,u.shim=f},function(j,u){function f(b){return Object.prototype.toString.call(b)=="[object Arguments]"}function g(b){return b&&typeof b=="object"&&typeof b.length=="number"&&Object.prototype.hasOwnProperty.call(b,"callee")&&!Object.prototype.propertyIsEnumerable.call(b,"callee")||!1}var E=(function(){return Object.prototype.toString.call(arguments)})()=="[object Arguments]";u=j.exports=E?f:g,u.supported=f,u.unsupported=g},function(j,u,f){function g(M){return M&&M.__esModule?M:{default:M}}function E(M,k,T){return k in M?Object.defineProperty(M,k,{value:T,enumerable:!0,configurable:!0,writable:!0}):M[k]=T,M}function b(M,k){if(!(M instanceof k))throw new TypeError("Cannot call a class as a function")}function h(M,k){return Object.keys(k).reduce(function(T,S){return M[S]==null||(k[S]===M[S]?T[S]=k[S]:Array.isArray(k[S])?k[S].indexOf(M[S])<0&&(T[S]=k[S].concat([M[S]])):T[S]=[k[S],M[S]]),T},{})}function p(M){return M.reduce(function(k,T){if(T.insert===1){var S=(0,v.default)(T.attributes);return delete S.image,k.insert({image:T.attributes.image},S)}if(T.attributes==null||T.attributes.list!==!0&&T.attributes.bullet!==!0||(T=(0,v.default)(T),T.attributes.list?T.attributes.list="ordered":(T.attributes.list="bullet",delete T.attributes.bullet)),typeof T.insert=="string"){var P=T.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return k.insert(P,T.attributes)}return k.push(T)},new r.default)}Object.defineProperty(u,"__esModule",{value:!0});var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},e=(function(){function M(k,T){var S=[],P=!0,I=!1,D=void 0;try{for(var q,C=k[Symbol.iterator]();!(P=(q=C.next()).done)&&(S.push(q.value),!T||S.length!==T);P=!0);}catch(R){I=!0,D=R}finally{try{!P&&C.return&&C.return()}finally{if(I)throw D}}return S}return function(k,T){if(Array.isArray(k))return k;if(Symbol.iterator in Object(k))return M(k,T);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),t=(function(){function M(k,T){for(var S=0;S<T.length;S++){var P=T[S];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(k,P.key,P)}}return function(k,T,S){return T&&M(k.prototype,T),S&&M(k,S),k}})(),n=f(4),r=g(n),l=f(20),s=g(l),a=f(0),i=g(a),m=f(13),o=g(m),x=f(31),_=g(x),A=f(3),O=g(A),y=f(14),w=g(y),d=f(21),v=g(d),F=f(12),N=g(F),L=f(2),B=g(L),Z=/^[ -~]*$/,U=(function(){function M(k){b(this,M),this.scroll=k,this.delta=this.getDelta()}return t(M,[{key:"applyDelta",value:function(k){var T=this,S=!1;this.scroll.update();var P=this.scroll.length();return this.scroll.batchStart(),k=p(k),k.reduce(function(I,D){var q=D.retain||D.delete||D.insert.length||1,C=D.attributes||{};if(D.insert!=null){if(typeof D.insert=="string"){var R=D.insert;R.endsWith(`
`)&&S&&(S=!1,R=R.slice(0,-1)),I>=P&&!R.endsWith(`
`)&&(S=!0),T.scroll.insertAt(I,R);var V=T.scroll.line(I),K=e(V,2),Y=K[0],Q=K[1],J=(0,B.default)({},(0,A.bubbleFormats)(Y));if(Y instanceof O.default){var te=Y.descendant(i.default.Leaf,Q),oe=e(te,1),ie=oe[0];J=(0,B.default)(J,(0,A.bubbleFormats)(ie))}C=s.default.attributes.diff(J,C)||{}}else if(c(D.insert)==="object"){var se=Object.keys(D.insert)[0];if(se==null)return I;T.scroll.insertAt(I,se,D.insert[se])}P+=q}return Object.keys(C).forEach(function(z){T.scroll.formatAt(I,q,z,C[z])}),I+q},0),k.reduce(function(I,D){return typeof D.delete=="number"?(T.scroll.deleteAt(I,D.delete),I):I+(D.retain||D.insert.length||1)},0),this.scroll.batchEnd(),this.update(k)}},{key:"deleteText",value:function(k,T){return this.scroll.deleteAt(k,T),this.update(new r.default().retain(k).delete(T))}},{key:"formatLine",value:function(k,T){var S=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(P).forEach(function(I){if(S.scroll.whitelist==null||S.scroll.whitelist[I]){var D=S.scroll.lines(k,Math.max(T,1)),q=T;D.forEach(function(C){var R=C.length();if(C instanceof o.default){var V=k-C.offset(S.scroll),K=C.newlineIndex(V+q)-V+1;C.formatAt(V,K,I,P[I])}else C.format(I,P[I]);q-=R})}}),this.scroll.optimize(),this.update(new r.default().retain(k).retain(T,(0,v.default)(P)))}},{key:"formatText",value:function(k,T){var S=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(P).forEach(function(I){S.scroll.formatAt(k,T,I,P[I])}),this.update(new r.default().retain(k).retain(T,(0,v.default)(P)))}},{key:"getContents",value:function(k,T){return this.delta.slice(k,k+T)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(k,T){return k.concat(T.delta())},new r.default)}},{key:"getFormat",value:function(k){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,S=[],P=[];T===0?this.scroll.path(k).forEach(function(D){var q=e(D,1),C=q[0];C instanceof O.default?S.push(C):C instanceof i.default.Leaf&&P.push(C)}):(S=this.scroll.lines(k,T),P=this.scroll.descendants(i.default.Leaf,k,T));var I=[S,P].map(function(D){if(D.length===0)return{};for(var q=(0,A.bubbleFormats)(D.shift());Object.keys(q).length>0;){var C=D.shift();if(C==null)return q;q=h((0,A.bubbleFormats)(C),q)}return q});return B.default.apply(B.default,I)}},{key:"getText",value:function(k,T){return this.getContents(k,T).filter(function(S){return typeof S.insert=="string"}).map(function(S){return S.insert}).join("")}},{key:"insertEmbed",value:function(k,T,S){return this.scroll.insertAt(k,T,S),this.update(new r.default().retain(k).insert(E({},T,S)))}},{key:"insertText",value:function(k,T){var S=this,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T=T.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(k,T),Object.keys(P).forEach(function(I){S.scroll.formatAt(k,T.length,I,P[I])}),this.update(new r.default().retain(k).insert(T,(0,v.default)(P)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var k=this.scroll.children.head;return k.statics.blotName===O.default.blotName&&!(k.children.length>1)&&k.children.head instanceof w.default}},{key:"removeFormat",value:function(k,T){var S=this.getText(k,T),P=this.scroll.line(k+T),I=e(P,2),D=I[0],q=I[1],C=0,R=new r.default;D!=null&&(C=D instanceof o.default?D.newlineIndex(q)-q+1:D.length()-q,R=D.delta().slice(q,q+C-1).insert(`
`));var V=this.getContents(k,T+C),K=V.diff(new r.default().insert(S).concat(R)),Y=new r.default().retain(k).concat(K);return this.applyDelta(Y)}},{key:"update",value:function(k){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,P=this.delta;if(T.length===1&&T[0].type==="characterData"&&T[0].target.data.match(Z)&&i.default.find(T[0].target)){var I=i.default.find(T[0].target),D=(0,A.bubbleFormats)(I),q=I.offset(this.scroll),C=T[0].oldValue.replace(_.default.CONTENTS,""),R=new r.default().insert(C),V=new r.default().insert(I.value());k=new r.default().retain(q).concat(R.diff(V,S)).reduce(function(K,Y){return Y.insert?K.insert(Y.insert,D):K.push(Y)},new r.default),this.delta=P.compose(k)}else this.delta=this.getDelta(),k&&(0,N.default)(P.compose(k),this.delta)||(k=P.diff(this.delta,S));return k}}]),M})();u.default=U},function(j,u){function f(){}function g(p,c,e){this.fn=p,this.context=c,this.once=e||!1}function E(){this._events=new f,this._eventsCount=0}var b=Object.prototype.hasOwnProperty,h="~";Object.create&&(f.prototype=Object.create(null),new f().__proto__||(h=!1)),E.prototype.eventNames=function(){var p,c,e=[];if(this._eventsCount===0)return e;for(c in p=this._events)b.call(p,c)&&e.push(h?c.slice(1):c);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(p)):e},E.prototype.listeners=function(p,c){var e=h?h+p:p,t=this._events[e];if(c)return!!t;if(!t)return[];if(t.fn)return[t.fn];for(var n=0,r=t.length,l=new Array(r);n<r;n++)l[n]=t[n].fn;return l},E.prototype.emit=function(p,c,e,t,n,r){var l=h?h+p:p;if(!this._events[l])return!1;var s,a,i=this._events[l],m=arguments.length;if(i.fn){switch(i.once&&this.removeListener(p,i.fn,void 0,!0),m){case 1:return i.fn.call(i.context),!0;case 2:return i.fn.call(i.context,c),!0;case 3:return i.fn.call(i.context,c,e),!0;case 4:return i.fn.call(i.context,c,e,t),!0;case 5:return i.fn.call(i.context,c,e,t,n),!0;case 6:return i.fn.call(i.context,c,e,t,n,r),!0}for(a=1,s=new Array(m-1);a<m;a++)s[a-1]=arguments[a];i.fn.apply(i.context,s)}else{var o,x=i.length;for(a=0;a<x;a++)switch(i[a].once&&this.removeListener(p,i[a].fn,void 0,!0),m){case 1:i[a].fn.call(i[a].context);break;case 2:i[a].fn.call(i[a].context,c);break;case 3:i[a].fn.call(i[a].context,c,e);break;case 4:i[a].fn.call(i[a].context,c,e,t);break;default:if(!s)for(o=1,s=new Array(m-1);o<m;o++)s[o-1]=arguments[o];i[a].fn.apply(i[a].context,s)}}return!0},E.prototype.on=function(p,c,e){var t=new g(c,e||this),n=h?h+p:p;return this._events[n]?this._events[n].fn?this._events[n]=[this._events[n],t]:this._events[n].push(t):(this._events[n]=t,this._eventsCount++),this},E.prototype.once=function(p,c,e){var t=new g(c,e||this,!0),n=h?h+p:p;return this._events[n]?this._events[n].fn?this._events[n]=[this._events[n],t]:this._events[n].push(t):(this._events[n]=t,this._eventsCount++),this},E.prototype.removeListener=function(p,c,e,t){var n=h?h+p:p;if(!this._events[n])return this;if(!c)return--this._eventsCount==0?this._events=new f:delete this._events[n],this;var r=this._events[n];if(r.fn)r.fn!==c||t&&!r.once||e&&r.context!==e||(--this._eventsCount==0?this._events=new f:delete this._events[n]);else{for(var l=0,s=[],a=r.length;l<a;l++)(r[l].fn!==c||t&&!r[l].once||e&&r[l].context!==e)&&s.push(r[l]);s.length?this._events[n]=s.length===1?s[0]:s:--this._eventsCount==0?this._events=new f:delete this._events[n]}return this},E.prototype.removeAllListeners=function(p){var c;return p?(c=h?h+p:p,this._events[c]&&(--this._eventsCount==0?this._events=new f:delete this._events[c])):(this._events=new f,this._eventsCount=0),this},E.prototype.off=E.prototype.removeListener,E.prototype.addListener=E.prototype.on,E.prototype.setMaxListeners=function(){return this},E.prefixed=h,E.EventEmitter=E,j!==void 0&&(j.exports=E)},function(j,u,f){function g(w){return w&&w.__esModule?w:{default:w}}function E(w,d){if(!(w instanceof d))throw new TypeError("Cannot call a class as a function")}function b(w,d){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?w:d}function h(w,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);w.prototype=Object.create(d&&d.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(w,d):w.__proto__=d)}function p(w){return w instanceof i.default||w instanceof a.BlockEmbed}Object.defineProperty(u,"__esModule",{value:!0});var c=(function(){function w(d,v){var F=[],N=!0,L=!1,B=void 0;try{for(var Z,U=d[Symbol.iterator]();!(N=(Z=U.next()).done)&&(F.push(Z.value),!v||F.length!==v);N=!0);}catch(M){L=!0,B=M}finally{try{!N&&U.return&&U.return()}finally{if(L)throw B}}return F}return function(d,v){if(Array.isArray(d))return d;if(Symbol.iterator in Object(d))return w(d,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),e=(function(){function w(d,v){for(var F=0;F<v.length;F++){var N=v[F];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(d,N.key,N)}}return function(d,v,F){return v&&w(d.prototype,v),F&&w(d,F),d}})(),t=function w(d,v,F){d===null&&(d=Function.prototype);var N=Object.getOwnPropertyDescriptor(d,v);if(N===void 0){var L=Object.getPrototypeOf(d);return L===null?void 0:w(L,v,F)}if("value"in N)return N.value;var B=N.get;if(B!==void 0)return B.call(F)},n=f(0),r=g(n),l=f(9),s=g(l),a=f(3),i=g(a),m=f(14),o=g(m),x=f(13),_=g(x),A=f(23),O=g(A),y=(function(w){function d(v,F){E(this,d);var N=b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,v));return N.emitter=F.emitter,Array.isArray(F.whitelist)&&(N.whitelist=F.whitelist.reduce(function(L,B){return L[B]=!0,L},{})),N.domNode.addEventListener("DOMNodeInserted",function(){}),N.optimize(),N.enable(),N}return h(d,w),e(d,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(v,F){var N=this.line(v),L=c(N,2),B=L[0],Z=L[1],U=this.line(v+F),M=c(U,1),k=M[0];if(t(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"deleteAt",this).call(this,v,F),k!=null&&B!==k&&Z>0){if(B instanceof a.BlockEmbed||k instanceof a.BlockEmbed)return void this.optimize();if(B instanceof _.default){var T=B.newlineIndex(B.length(),!0);if(T>-1&&(B=B.split(T+1))===k)return void this.optimize()}else if(k instanceof _.default){var S=k.newlineIndex(0);S>-1&&k.split(S+1)}var P=k.children.head instanceof o.default?null:k.children.head;B.moveChildren(k,P),B.remove()}this.optimize()}},{key:"enable",value:function(){var v=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.domNode.setAttribute("contenteditable",v)}},{key:"formatAt",value:function(v,F,N,L){(this.whitelist==null||this.whitelist[N])&&(t(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"formatAt",this).call(this,v,F,N,L),this.optimize())}},{key:"insertAt",value:function(v,F,N){if(N==null||this.whitelist==null||this.whitelist[F]){if(v>=this.length())if(N==null||r.default.query(F,r.default.Scope.BLOCK)==null){var L=r.default.create(this.statics.defaultChild);this.appendChild(L),N==null&&F.endsWith(`
`)&&(F=F.slice(0,-1)),L.insertAt(0,F,N)}else{var B=r.default.create(F,N);this.appendChild(B)}else t(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"insertAt",this).call(this,v,F,N);this.optimize()}}},{key:"insertBefore",value:function(v,F){if(v.statics.scope===r.default.Scope.INLINE_BLOT){var N=r.default.create(this.statics.defaultChild);N.appendChild(v),v=N}t(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"insertBefore",this).call(this,v,F)}},{key:"leaf",value:function(v){return this.path(v).pop()||[null,-1]}},{key:"line",value:function(v){return v===this.length()?this.line(v-1):this.descendant(p,v)}},{key:"lines",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return(function N(L,B,Z){var U=[],M=Z;return L.children.forEachAt(B,Z,function(k,T,S){p(k)?U.push(k):k instanceof r.default.Container&&(U=U.concat(N(k,T,M))),M-=S}),U})(this,v,F)}},{key:"optimize",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(t(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"optimize",this).call(this,v,F),v.length>0&&this.emitter.emit(s.default.events.SCROLL_OPTIMIZE,v,F))}},{key:"path",value:function(v){return t(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"path",this).call(this,v).slice(1)}},{key:"update",value:function(v){if(this.batch!==!0){var F=s.default.sources.USER;typeof v=="string"&&(F=v),Array.isArray(v)||(v=this.observer.takeRecords()),v.length>0&&this.emitter.emit(s.default.events.SCROLL_BEFORE_UPDATE,F,v),t(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"update",this).call(this,v.concat([])),v.length>0&&this.emitter.emit(s.default.events.SCROLL_UPDATE,F,v)}}}]),d})(r.default.Scroll);y.blotName="scroll",y.className="ql-editor",y.tagName="DIV",y.defaultChild="block",y.allowedChildren=[i.default,a.BlockEmbed,O.default],u.default=y},function(j,u,f){function g(z){return z&&z.__esModule?z:{default:z}}function E(z,H,G){return H in z?Object.defineProperty(z,H,{value:G,enumerable:!0,configurable:!0,writable:!0}):z[H]=G,z}function b(z,H){if(!(z instanceof H))throw new TypeError("Cannot call a class as a function")}function h(z,H){if(!z)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!H||typeof H!="object"&&typeof H!="function"?z:H}function p(z,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof H);z.prototype=Object.create(H&&H.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),H&&(Object.setPrototypeOf?Object.setPrototypeOf(z,H):z.__proto__=H)}function c(z,H,G){return(H===void 0?"undefined":y(H))==="object"?Object.keys(H).reduce(function($,W){return c($,W,H[W])},z):z.reduce(function($,W){return W.attributes&&W.attributes[H]?$.push(W):$.insert(W.insert,(0,F.default)({},E({},H,G),W.attributes))},new L.default)}function e(z){return z.nodeType!==Node.ELEMENT_NODE?{}:z["__ql-computed-style"]||(z["__ql-computed-style"]=window.getComputedStyle(z))}function t(z,H){for(var G="",$=z.ops.length-1;$>=0&&G.length<H.length;--$){var W=z.ops[$];if(typeof W.insert!="string")break;G=W.insert+G}return G.slice(-1*H.length)===H}function n(z){return z.childNodes.length!==0&&["block","list-item"].indexOf(e(z).display)>-1}function r(z,H,G){return z.nodeType===z.TEXT_NODE?G.reduce(function($,W){return W(z,$)},new L.default):z.nodeType===z.ELEMENT_NODE?[].reduce.call(z.childNodes||[],function($,W){var X=r(W,H,G);return W.nodeType===z.ELEMENT_NODE&&(X=H.reduce(function(ne,ee){return ee(W,ne)},X),X=(W[J]||[]).reduce(function(ne,ee){return ee(W,ne)},X)),$.concat(X)},new L.default):new L.default}function l(z,H,G){return c(G,z,!0)}function s(z,H){var G=Z.default.Attributor.Attribute.keys(z),$=Z.default.Attributor.Class.keys(z),W=Z.default.Attributor.Style.keys(z),X={};return G.concat($).concat(W).forEach(function(ne){var ee=Z.default.query(ne,Z.default.Scope.ATTRIBUTE);ee!=null&&(X[ee.attrName]=ee.value(z),X[ee.attrName])||(ee=oe[ne],ee==null||ee.attrName!==ne&&ee.keyName!==ne||(X[ee.attrName]=ee.value(z)||void 0),(ee=ie[ne])==null||ee.attrName!==ne&&ee.keyName!==ne||(ee=ie[ne],X[ee.attrName]=ee.value(z)||void 0))}),Object.keys(X).length>0&&(H=c(H,X)),H}function a(z,H){var G=Z.default.query(z);if(G==null)return H;if(G.prototype instanceof Z.default.Embed){var $={},W=G.value(z);W!=null&&($[G.blotName]=W,H=new L.default().insert($,G.formats(z)))}else typeof G.formats=="function"&&(H=c(H,G.blotName,G.formats(z)));return H}function i(z,H){return t(H,`
`)||H.insert(`
`),H}function m(){return new L.default}function o(z,H){var G=Z.default.query(z);if(G==null||G.blotName!=="list-item"||!t(H,`
`))return H;for(var $=-1,W=z.parentNode;!W.classList.contains("ql-clipboard");)(Z.default.query(W)||{}).blotName==="list"&&($+=1),W=W.parentNode;return $<=0?H:H.compose(new L.default().retain(H.length()-1).retain(1,{indent:$}))}function x(z,H){return t(H,`
`)||(n(z)||H.length()>0&&z.nextSibling&&n(z.nextSibling))&&H.insert(`
`),H}function _(z,H){if(n(z)&&z.nextElementSibling!=null&&!t(H,`

`)){var G=z.offsetHeight+parseFloat(e(z).marginTop)+parseFloat(e(z).marginBottom);z.nextElementSibling.offsetTop>z.offsetTop+1.5*G&&H.insert(`
`)}return H}function A(z,H){var G={},$=z.style||{};return $.fontStyle&&e(z).fontStyle==="italic"&&(G.italic=!0),$.fontWeight&&(e(z).fontWeight.startsWith("bold")||parseInt(e(z).fontWeight)>=700)&&(G.bold=!0),Object.keys(G).length>0&&(H=c(H,G)),parseFloat($.textIndent||0)>0&&(H=new L.default().insert("	").concat(H)),H}function O(z,H){var G=z.data;if(z.parentNode.tagName==="O:P")return H.insert(G.trim());if(G.trim().length===0&&z.parentNode.classList.contains("ql-clipboard"))return H;if(!e(z.parentNode).whiteSpace.startsWith("pre")){var $=function(W,X){return X=X.replace(/[^\u00a0]/g,""),X.length<1&&W?" ":X};G=G.replace(/\r\n/g," ").replace(/\n/g," "),G=G.replace(/\s\s+/g,$.bind($,!0)),(z.previousSibling==null&&n(z.parentNode)||z.previousSibling!=null&&n(z.previousSibling))&&(G=G.replace(/^\s+/,$.bind($,!1))),(z.nextSibling==null&&n(z.parentNode)||z.nextSibling!=null&&n(z.nextSibling))&&(G=G.replace(/\s+$/,$.bind($,!1)))}return H.insert(G)}Object.defineProperty(u,"__esModule",{value:!0}),u.matchText=u.matchSpacing=u.matchNewline=u.matchBlot=u.matchAttributor=u.default=void 0;var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},w=(function(){function z(H,G){var $=[],W=!0,X=!1,ne=void 0;try{for(var ee,le=H[Symbol.iterator]();!(W=(ee=le.next()).done)&&($.push(ee.value),!G||$.length!==G);W=!0);}catch(re){X=!0,ne=re}finally{try{!W&&le.return&&le.return()}finally{if(X)throw ne}}return $}return function(H,G){if(Array.isArray(H))return H;if(Symbol.iterator in Object(H))return z(H,G);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),d=(function(){function z(H,G){for(var $=0;$<G.length;$++){var W=G[$];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(H,W.key,W)}}return function(H,G,$){return G&&z(H.prototype,G),$&&z(H,$),H}})(),v=f(2),F=g(v),N=f(4),L=g(N),B=f(0),Z=g(B),U=f(6),M=g(U),k=f(10),T=g(k),S=f(7),P=g(S),I=f(34),D=f(35),q=f(13),C=g(q),R=f(24),V=f(36),K=f(37),Y=f(38),Q=(0,T.default)("quill:clipboard"),J="__ql-matcher",te=[[Node.TEXT_NODE,O],[Node.TEXT_NODE,x],["br",i],[Node.ELEMENT_NODE,x],[Node.ELEMENT_NODE,a],[Node.ELEMENT_NODE,_],[Node.ELEMENT_NODE,s],[Node.ELEMENT_NODE,A],["li",o],["b",l.bind(l,"bold")],["i",l.bind(l,"italic")],["style",m]],oe=[I.AlignAttribute,V.DirectionAttribute].reduce(function(z,H){return z[H.keyName]=H,z},{}),ie=[I.AlignStyle,D.BackgroundStyle,R.ColorStyle,V.DirectionStyle,K.FontStyle,Y.SizeStyle].reduce(function(z,H){return z[H.keyName]=H,z},{}),se=(function(z){function H(G,$){b(this,H);var W=h(this,(H.__proto__||Object.getPrototypeOf(H)).call(this,G,$));return W.quill.root.addEventListener("paste",W.onPaste.bind(W)),W.container=W.quill.addContainer("ql-clipboard"),W.container.setAttribute("contenteditable",!0),W.container.setAttribute("tabindex",-1),W.matchers=[],te.concat(W.options.matchers).forEach(function(X){var ne=w(X,2),ee=ne[0],le=ne[1];($.matchVisual||le!==_)&&W.addMatcher(ee,le)}),W}return p(H,z),d(H,[{key:"addMatcher",value:function(G,$){this.matchers.push([G,$])}},{key:"convert",value:function(G){if(typeof G=="string")return this.container.innerHTML=G.replace(/\>\r?\n +\</g,"><"),this.convert();var $=this.quill.getFormat(this.quill.selection.savedRange.index);if($[C.default.blotName]){var W=this.container.innerText;return this.container.innerHTML="",new L.default().insert(W,E({},C.default.blotName,$[C.default.blotName]))}var X=this.prepareMatching(),ne=w(X,2),ee=ne[0],le=ne[1],re=r(this.container,ee,le);return t(re,`
`)&&re.ops[re.ops.length-1].attributes==null&&(re=re.compose(new L.default().retain(re.length()-1).delete(1))),Q.log("convert",this.container.innerHTML,re),this.container.innerHTML="",re}},{key:"dangerouslyPasteHTML",value:function(G,$){var W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M.default.sources.API;if(typeof G=="string")this.quill.setContents(this.convert(G),$),this.quill.setSelection(0,M.default.sources.SILENT);else{var X=this.convert($);this.quill.updateContents(new L.default().retain(G).concat(X),W),this.quill.setSelection(G+X.length(),M.default.sources.SILENT)}}},{key:"onPaste",value:function(G){var $=this;if(!G.defaultPrevented&&this.quill.isEnabled()){var W=this.quill.getSelection(),X=new L.default().retain(W.index),ne=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(M.default.sources.SILENT),setTimeout(function(){X=X.concat($.convert()).delete(W.length),$.quill.updateContents(X,M.default.sources.USER),$.quill.setSelection(X.length()-W.length,M.default.sources.SILENT),$.quill.scrollingContainer.scrollTop=ne,$.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var G=this,$=[],W=[];return this.matchers.forEach(function(X){var ne=w(X,2),ee=ne[0],le=ne[1];switch(ee){case Node.TEXT_NODE:W.push(le);break;case Node.ELEMENT_NODE:$.push(le);break;default:[].forEach.call(G.container.querySelectorAll(ee),function(re){re[J]=re[J]||[],re[J].push(le)})}}),[$,W]}}]),H})(P.default);se.DEFAULTS={matchers:[],matchVisual:!0},u.default=se,u.matchAttributor=s,u.matchBlot=a,u.matchNewline=x,u.matchSpacing=_,u.matchText=O},function(j,u,f){function g(m){return m&&m.__esModule?m:{default:m}}function E(m,o){if(!(m instanceof o))throw new TypeError("Cannot call a class as a function")}function b(m,o){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||typeof o!="object"&&typeof o!="function"?m:o}function h(m,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);m.prototype=Object.create(o&&o.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(m,o):m.__proto__=o)}function p(m){var o=m.ops[m.ops.length-1];return o!=null&&(o.insert!=null?typeof o.insert=="string"&&o.insert.endsWith(`
`):o.attributes!=null&&Object.keys(o.attributes).some(function(x){return n.default.query(x,n.default.Scope.BLOCK)!=null}))}function c(m){var o=m.reduce(function(_,A){return _+=A.delete||0},0),x=m.length()-o;return p(m)&&(x-=1),x}Object.defineProperty(u,"__esModule",{value:!0}),u.getLastChangeIndex=u.default=void 0;var e=(function(){function m(o,x){for(var _=0;_<x.length;_++){var A=x[_];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(o,A.key,A)}}return function(o,x,_){return x&&m(o.prototype,x),_&&m(o,_),o}})(),t=f(0),n=g(t),r=f(6),l=g(r),s=f(7),a=g(s),i=(function(m){function o(x,_){E(this,o);var A=b(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,x,_));return A.lastRecorded=0,A.ignoreChange=!1,A.clear(),A.quill.on(l.default.events.EDITOR_CHANGE,function(O,y,w,d){O!==l.default.events.TEXT_CHANGE||A.ignoreChange||(A.options.userOnly&&d!==l.default.sources.USER?A.transform(y):A.record(y,w))}),A.quill.keyboard.addBinding({key:"Z",shortKey:!0},A.undo.bind(A)),A.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},A.redo.bind(A)),/Win/i.test(navigator.platform)&&A.quill.keyboard.addBinding({key:"Y",shortKey:!0},A.redo.bind(A)),A}return h(o,m),e(o,[{key:"change",value:function(x,_){if(this.stack[x].length!==0){var A=this.stack[x].pop();this.stack[_].push(A),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(A[x],l.default.sources.USER),this.ignoreChange=!1;var O=c(A[x]);this.quill.setSelection(O)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(x,_){if(x.ops.length!==0){this.stack.redo=[];var A=this.quill.getContents().diff(_),O=Date.now();if(this.lastRecorded+this.options.delay>O&&this.stack.undo.length>0){var y=this.stack.undo.pop();A=A.compose(y.undo),x=y.redo.compose(x)}else this.lastRecorded=O;this.stack.undo.push({redo:x,undo:A}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(x){this.stack.undo.forEach(function(_){_.undo=x.transform(_.undo,!0),_.redo=x.transform(_.redo,!0)}),this.stack.redo.forEach(function(_){_.undo=x.transform(_.undo,!0),_.redo=x.transform(_.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),o})(a.default);i.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},u.default=i,u.getLastChangeIndex=c},function(j,u,f){function g(r,l){if(!(r instanceof l))throw new TypeError("Cannot call a class as a function")}function E(r,l){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?r:l}function b(r,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);r.prototype=Object.create(l&&l.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(r,l):r.__proto__=l)}Object.defineProperty(u,"__esModule",{value:!0}),u.IndentClass=void 0;var h=(function(){function r(l,s){for(var a=0;a<s.length;a++){var i=s[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}return function(l,s,a){return s&&r(l.prototype,s),a&&r(l,a),l}})(),p=function r(l,s,a){l===null&&(l=Function.prototype);var i=Object.getOwnPropertyDescriptor(l,s);if(i===void 0){var m=Object.getPrototypeOf(l);return m===null?void 0:r(m,s,a)}if("value"in i)return i.value;var o=i.get;if(o!==void 0)return o.call(a)},c=f(0),e=(function(r){return r&&r.__esModule?r:{default:r}})(c),t=(function(r){function l(){return g(this,l),E(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return b(l,r),h(l,[{key:"add",value:function(s,a){if(a==="+1"||a==="-1"){var i=this.value(s)||0;a=a==="+1"?i+1:i-1}return a===0?(this.remove(s),!0):p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"add",this).call(this,s,a)}},{key:"canAdd",value:function(s,a){return p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"canAdd",this).call(this,s,a)||p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"canAdd",this).call(this,s,parseInt(a))}},{key:"value",value:function(s){return parseInt(p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"value",this).call(this,s))||void 0}}]),l})(e.default.Attributor.Class),n=new t("indent","ql-indent",{scope:e.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});u.IndentClass=n},function(j,u,f){function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?e:t}function b(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(u,"__esModule",{value:!0});var h=f(3),p=(function(e){return e&&e.__esModule?e:{default:e}})(h),c=(function(e){function t(){return g(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t})(p.default);c.blotName="blockquote",c.tagName="blockquote",u.default=c},function(j,u,f){function g(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function E(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||typeof n!="object"&&typeof n!="function"?t:n}function b(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(u,"__esModule",{value:!0});var h=(function(){function t(n,r){for(var l=0;l<r.length;l++){var s=r[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(n,r,l){return r&&t(n.prototype,r),l&&t(n,l),n}})(),p=f(3),c=(function(t){return t&&t.__esModule?t:{default:t}})(p),e=(function(t){function n(){return g(this,n),E(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,t),h(n,null,[{key:"formats",value:function(r){return this.tagName.indexOf(r.tagName)+1}}]),n})(c.default);e.blotName="header",e.tagName=["H1","H2","H3","H4","H5","H6"],u.default=e},function(j,u,f){function g(o){return o&&o.__esModule?o:{default:o}}function E(o,x,_){return x in o?Object.defineProperty(o,x,{value:_,enumerable:!0,configurable:!0,writable:!0}):o[x]=_,o}function b(o,x){if(!(o instanceof x))throw new TypeError("Cannot call a class as a function")}function h(o,x){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!x||typeof x!="object"&&typeof x!="function"?o:x}function p(o,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);o.prototype=Object.create(x&&x.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(o,x):o.__proto__=x)}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.ListItem=void 0;var c=(function(){function o(x,_){for(var A=0;A<_.length;A++){var O=_[A];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(x,O.key,O)}}return function(x,_,A){return _&&o(x.prototype,_),A&&o(x,A),x}})(),e=function o(x,_,A){x===null&&(x=Function.prototype);var O=Object.getOwnPropertyDescriptor(x,_);if(O===void 0){var y=Object.getPrototypeOf(x);return y===null?void 0:o(y,_,A)}if("value"in O)return O.value;var w=O.get;if(w!==void 0)return w.call(A)},t=f(0),n=g(t),r=f(3),l=g(r),s=f(23),a=g(s),i=(function(o){function x(){return b(this,x),h(this,(x.__proto__||Object.getPrototypeOf(x)).apply(this,arguments))}return p(x,o),c(x,[{key:"format",value:function(_,A){_!==m.blotName||A?e(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"format",this).call(this,_,A):this.replaceWith(n.default.create(this.statics.scope))}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():e(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(_,A){return this.parent.isolate(this.offset(this.parent),this.length()),_===this.parent.statics.blotName?(this.parent.replaceWith(_,A),this):(this.parent.unwrap(),e(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"replaceWith",this).call(this,_,A))}}],[{key:"formats",value:function(_){return _.tagName===this.tagName?void 0:e(x.__proto__||Object.getPrototypeOf(x),"formats",this).call(this,_)}}]),x})(l.default);i.blotName="list-item",i.tagName="LI";var m=(function(o){function x(_){b(this,x);var A=h(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,_)),O=function(y){if(y.target.parentNode===_){var w=A.statics.formats(_),d=n.default.find(y.target);w==="checked"?d.format("list","unchecked"):w==="unchecked"&&d.format("list","checked")}};return _.addEventListener("touchstart",O),_.addEventListener("mousedown",O),A}return p(x,o),c(x,null,[{key:"create",value:function(_){var A=_==="ordered"?"OL":"UL",O=e(x.__proto__||Object.getPrototypeOf(x),"create",this).call(this,A);return _!=="checked"&&_!=="unchecked"||O.setAttribute("data-checked",_==="checked"),O}},{key:"formats",value:function(_){return _.tagName==="OL"?"ordered":_.tagName==="UL"?_.hasAttribute("data-checked")?_.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet":void 0}}]),c(x,[{key:"format",value:function(_,A){this.children.length>0&&this.children.tail.format(_,A)}},{key:"formats",value:function(){return E({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(_,A){if(_ instanceof i)e(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"insertBefore",this).call(this,_,A);else{var O=A==null?this.length():A.offset(this),y=this.split(O);y.parent.insertBefore(_,y)}}},{key:"optimize",value:function(_){e(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"optimize",this).call(this,_);var A=this.next;A!=null&&A.prev===this&&A.statics.blotName===this.statics.blotName&&A.domNode.tagName===this.domNode.tagName&&A.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(A.moveChildren(this),A.remove())}},{key:"replace",value:function(_){if(_.statics.blotName!==this.statics.blotName){var A=n.default.create(this.statics.defaultChild);_.moveChildren(A),this.appendChild(A)}e(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"replace",this).call(this,_)}}]),x})(a.default);m.blotName="list",m.scope=n.default.Scope.BLOCK_BLOT,m.tagName=["OL","UL"],m.defaultChild="list-item",m.allowedChildren=[i],u.ListItem=i,u.default=m},function(j,u,f){function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?e:t}function b(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(u,"__esModule",{value:!0});var h=f(39),p=(function(e){return e&&e.__esModule?e:{default:e}})(h),c=(function(e){function t(){return g(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t})(p.default);c.blotName="italic",c.tagName=["EM","I"],u.default=c},function(j,u,f){function g(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function E(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||typeof r!="object"&&typeof r!="function"?n:r}function b(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)}Object.defineProperty(u,"__esModule",{value:!0});var h=(function(){function n(r,l){for(var s=0;s<l.length;s++){var a=l[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(r,l,s){return l&&n(r.prototype,l),s&&n(r,s),r}})(),p=function n(r,l,s){r===null&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,l);if(a===void 0){var i=Object.getPrototypeOf(r);return i===null?void 0:n(i,l,s)}if("value"in a)return a.value;var m=a.get;if(m!==void 0)return m.call(s)},c=f(5),e=(function(n){return n&&n.__esModule?n:{default:n}})(c),t=(function(n){function r(){return g(this,r),E(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return b(r,n),h(r,null,[{key:"create",value:function(l){return l==="super"?document.createElement("sup"):l==="sub"?document.createElement("sub"):p(r.__proto__||Object.getPrototypeOf(r),"create",this).call(this,l)}},{key:"formats",value:function(l){return l.tagName==="SUB"?"sub":l.tagName==="SUP"?"super":void 0}}]),r})(e.default);t.blotName="script",t.tagName=["SUB","SUP"],u.default=t},function(j,u,f){function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?e:t}function b(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(u,"__esModule",{value:!0});var h=f(5),p=(function(e){return e&&e.__esModule?e:{default:e}})(h),c=(function(e){function t(){return g(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t})(p.default);c.blotName="strike",c.tagName="S",u.default=c},function(j,u,f){function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?e:t}function b(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(u,"__esModule",{value:!0});var h=f(5),p=(function(e){return e&&e.__esModule?e:{default:e}})(h),c=(function(e){function t(){return g(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t})(p.default);c.blotName="underline",c.tagName="U",u.default=c},function(j,u,f){function g(l,s){if(!(l instanceof s))throw new TypeError("Cannot call a class as a function")}function E(l,s){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||typeof s!="object"&&typeof s!="function"?l:s}function b(l,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);l.prototype=Object.create(s&&s.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(l,s):l.__proto__=s)}Object.defineProperty(u,"__esModule",{value:!0});var h=(function(){function l(s,a){for(var i=0;i<a.length;i++){var m=a[i];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(s,m.key,m)}}return function(s,a,i){return a&&l(s.prototype,a),i&&l(s,i),s}})(),p=function l(s,a,i){s===null&&(s=Function.prototype);var m=Object.getOwnPropertyDescriptor(s,a);if(m===void 0){var o=Object.getPrototypeOf(s);return o===null?void 0:l(o,a,i)}if("value"in m)return m.value;var x=m.get;if(x!==void 0)return x.call(i)},c=f(0),e=(function(l){return l&&l.__esModule?l:{default:l}})(c),t=f(15),n=["alt","height","width"],r=(function(l){function s(){return g(this,s),E(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return b(s,l),h(s,[{key:"format",value:function(a,i){n.indexOf(a)>-1?i?this.domNode.setAttribute(a,i):this.domNode.removeAttribute(a):p(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"format",this).call(this,a,i)}}],[{key:"create",value:function(a){var i=p(s.__proto__||Object.getPrototypeOf(s),"create",this).call(this,a);return typeof a=="string"&&i.setAttribute("src",this.sanitize(a)),i}},{key:"formats",value:function(a){return n.reduce(function(i,m){return a.hasAttribute(m)&&(i[m]=a.getAttribute(m)),i},{})}},{key:"match",value:function(a){return/\.(jpe?g|gif|png)$/.test(a)||/^data:image\/.+;base64/.test(a)}},{key:"sanitize",value:function(a){return(0,t.sanitize)(a,["http","https","data"])?a:"//:0"}},{key:"value",value:function(a){return a.getAttribute("src")}}]),s})(e.default.Embed);r.blotName="image",r.tagName="IMG",u.default=r},function(j,u,f){function g(l,s){if(!(l instanceof s))throw new TypeError("Cannot call a class as a function")}function E(l,s){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||typeof s!="object"&&typeof s!="function"?l:s}function b(l,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);l.prototype=Object.create(s&&s.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(l,s):l.__proto__=s)}Object.defineProperty(u,"__esModule",{value:!0});var h=(function(){function l(s,a){for(var i=0;i<a.length;i++){var m=a[i];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(s,m.key,m)}}return function(s,a,i){return a&&l(s.prototype,a),i&&l(s,i),s}})(),p=function l(s,a,i){s===null&&(s=Function.prototype);var m=Object.getOwnPropertyDescriptor(s,a);if(m===void 0){var o=Object.getPrototypeOf(s);return o===null?void 0:l(o,a,i)}if("value"in m)return m.value;var x=m.get;if(x!==void 0)return x.call(i)},c=f(3),e=f(15),t=(function(l){return l&&l.__esModule?l:{default:l}})(e),n=["height","width"],r=(function(l){function s(){return g(this,s),E(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return b(s,l),h(s,[{key:"format",value:function(a,i){n.indexOf(a)>-1?i?this.domNode.setAttribute(a,i):this.domNode.removeAttribute(a):p(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"format",this).call(this,a,i)}}],[{key:"create",value:function(a){var i=p(s.__proto__||Object.getPrototypeOf(s),"create",this).call(this,a);return i.setAttribute("frameborder","0"),i.setAttribute("allowfullscreen",!0),i.setAttribute("src",this.sanitize(a)),i}},{key:"formats",value:function(a){return n.reduce(function(i,m){return a.hasAttribute(m)&&(i[m]=a.getAttribute(m)),i},{})}},{key:"sanitize",value:function(a){return t.default.sanitize(a)}},{key:"value",value:function(a){return a.getAttribute("src")}}]),s})(c.BlockEmbed);r.blotName="video",r.className="ql-video",r.tagName="IFRAME",u.default=r},function(j,u,f){function g(m){return m&&m.__esModule?m:{default:m}}function E(m,o){if(!(m instanceof o))throw new TypeError("Cannot call a class as a function")}function b(m,o){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||typeof o!="object"&&typeof o!="function"?m:o}function h(m,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);m.prototype=Object.create(o&&o.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(m,o):m.__proto__=o)}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.FormulaBlot=void 0;var p=(function(){function m(o,x){for(var _=0;_<x.length;_++){var A=x[_];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(o,A.key,A)}}return function(o,x,_){return x&&m(o.prototype,x),_&&m(o,_),o}})(),c=function m(o,x,_){o===null&&(o=Function.prototype);var A=Object.getOwnPropertyDescriptor(o,x);if(A===void 0){var O=Object.getPrototypeOf(o);return O===null?void 0:m(O,x,_)}if("value"in A)return A.value;var y=A.get;if(y!==void 0)return y.call(_)},e=f(33),t=g(e),n=f(6),r=g(n),l=f(7),s=g(l),a=(function(m){function o(){return E(this,o),b(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return h(o,m),p(o,null,[{key:"create",value:function(x){var _=c(o.__proto__||Object.getPrototypeOf(o),"create",this).call(this,x);return typeof x=="string"&&(window.katex.render(x,_,{throwOnError:!1,errorColor:"#f00"}),_.setAttribute("data-value",x)),_}},{key:"value",value:function(x){return x.getAttribute("data-value")}}]),o})(t.default);a.blotName="formula",a.className="ql-formula",a.tagName="SPAN";var i=(function(m){function o(){E(this,o);var x=b(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return x}return h(o,m),p(o,null,[{key:"register",value:function(){r.default.register(a,!0)}}]),o})(s.default);u.FormulaBlot=a,u.default=i},function(j,u,f){function g(_){return _&&_.__esModule?_:{default:_}}function E(_,A){if(!(_ instanceof A))throw new TypeError("Cannot call a class as a function")}function b(_,A){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!A||typeof A!="object"&&typeof A!="function"?_:A}function h(_,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof A);_.prototype=Object.create(A&&A.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(_,A):_.__proto__=A)}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.CodeToken=u.CodeBlock=void 0;var p=(function(){function _(A,O){for(var y=0;y<O.length;y++){var w=O[y];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(A,w.key,w)}}return function(A,O,y){return O&&_(A.prototype,O),y&&_(A,y),A}})(),c=function _(A,O,y){A===null&&(A=Function.prototype);var w=Object.getOwnPropertyDescriptor(A,O);if(w===void 0){var d=Object.getPrototypeOf(A);return d===null?void 0:_(d,O,y)}if("value"in w)return w.value;var v=w.get;if(v!==void 0)return v.call(y)},e=f(0),t=g(e),n=f(6),r=g(n),l=f(7),s=g(l),a=f(13),i=g(a),m=(function(_){function A(){return E(this,A),b(this,(A.__proto__||Object.getPrototypeOf(A)).apply(this,arguments))}return h(A,_),p(A,[{key:"replaceWith",value:function(O){this.domNode.textContent=this.domNode.textContent,this.attach(),c(A.prototype.__proto__||Object.getPrototypeOf(A.prototype),"replaceWith",this).call(this,O)}},{key:"highlight",value:function(O){var y=this.domNode.textContent;this.cachedText!==y&&((y.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=O(y),this.domNode.normalize(),this.attach()),this.cachedText=y)}}]),A})(i.default);m.className="ql-syntax";var o=new t.default.Attributor.Class("token","hljs",{scope:t.default.Scope.INLINE}),x=(function(_){function A(O,y){E(this,A);var w=b(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,O,y));if(typeof w.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var d=null;return w.quill.on(r.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(d),d=setTimeout(function(){w.highlight(),d=null},w.options.interval)}),w.highlight(),w}return h(A,_),p(A,null,[{key:"register",value:function(){r.default.register(o,!0),r.default.register(m,!0)}}]),p(A,[{key:"highlight",value:function(){var O=this;if(!this.quill.selection.composing){this.quill.update(r.default.sources.USER);var y=this.quill.getSelection();this.quill.scroll.descendants(m).forEach(function(w){w.highlight(O.options.highlight)}),this.quill.update(r.default.sources.SILENT),y!=null&&this.quill.setSelection(y,r.default.sources.SILENT)}}}]),A})(s.default);x.DEFAULTS={highlight:(function(){return window.hljs==null?null:function(_){return window.hljs.highlightAuto(_).value}})(),interval:1e3},u.CodeBlock=m,u.CodeToken=o,u.default=x},function(j,u,f){function g(d){return d&&d.__esModule?d:{default:d}}function E(d,v,F){return v in d?Object.defineProperty(d,v,{value:F,enumerable:!0,configurable:!0,writable:!0}):d[v]=F,d}function b(d,v){if(!(d instanceof v))throw new TypeError("Cannot call a class as a function")}function h(d,v){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!v||typeof v!="object"&&typeof v!="function"?d:v}function p(d,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);d.prototype=Object.create(v&&v.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(d,v):d.__proto__=v)}function c(d,v,F){var N=document.createElement("button");N.setAttribute("type","button"),N.classList.add("ql-"+v),F!=null&&(N.value=F),d.appendChild(N)}function e(d,v){Array.isArray(v[0])||(v=[v]),v.forEach(function(F){var N=document.createElement("span");N.classList.add("ql-formats"),F.forEach(function(L){if(typeof L=="string")c(N,L);else{var B=Object.keys(L)[0],Z=L[B];Array.isArray(Z)?t(N,B,Z):c(N,B,Z)}}),d.appendChild(N)})}function t(d,v,F){var N=document.createElement("select");N.classList.add("ql-"+v),F.forEach(function(L){var B=document.createElement("option");L!==!1?B.setAttribute("value",L):B.setAttribute("selected","selected"),N.appendChild(B)}),d.appendChild(N)}Object.defineProperty(u,"__esModule",{value:!0}),u.addControls=u.default=void 0;var n=(function(){function d(v,F){var N=[],L=!0,B=!1,Z=void 0;try{for(var U,M=v[Symbol.iterator]();!(L=(U=M.next()).done)&&(N.push(U.value),!F||N.length!==F);L=!0);}catch(k){B=!0,Z=k}finally{try{!L&&M.return&&M.return()}finally{if(B)throw Z}}return N}return function(v,F){if(Array.isArray(v))return v;if(Symbol.iterator in Object(v))return d(v,F);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),r=(function(){function d(v,F){for(var N=0;N<F.length;N++){var L=F[N];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(v,L.key,L)}}return function(v,F,N){return F&&d(v.prototype,F),N&&d(v,N),v}})(),l=f(4),s=g(l),a=f(0),i=g(a),m=f(6),o=g(m),x=f(10),_=g(x),A=f(7),O=g(A),y=(0,_.default)("quill:toolbar"),w=(function(d){function v(F,N){b(this,v);var L=h(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,F,N));if(Array.isArray(L.options.container)){var B=document.createElement("div");e(B,L.options.container),F.container.parentNode.insertBefore(B,F.container),L.container=B}else typeof L.options.container=="string"?L.container=document.querySelector(L.options.container):L.container=L.options.container;if(!(L.container instanceof HTMLElement)){var Z;return Z=y.error("Container required for toolbar",L.options),h(L,Z)}return L.container.classList.add("ql-toolbar"),L.controls=[],L.handlers={},Object.keys(L.options.handlers).forEach(function(U){L.addHandler(U,L.options.handlers[U])}),[].forEach.call(L.container.querySelectorAll("button, select"),function(U){L.attach(U)}),L.quill.on(o.default.events.EDITOR_CHANGE,function(U,M){U===o.default.events.SELECTION_CHANGE&&L.update(M)}),L.quill.on(o.default.events.SCROLL_OPTIMIZE,function(){var U=L.quill.selection.getRange(),M=n(U,1),k=M[0];L.update(k)}),L}return p(v,d),r(v,[{key:"addHandler",value:function(F,N){this.handlers[F]=N}},{key:"attach",value:function(F){var N=this,L=[].find.call(F.classList,function(Z){return Z.indexOf("ql-")===0});if(L){if(L=L.slice(3),F.tagName==="BUTTON"&&F.setAttribute("type","button"),this.handlers[L]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[L]==null)return void y.warn("ignoring attaching to disabled format",L,F);if(i.default.query(L)==null)return void y.warn("ignoring attaching to nonexistent format",L,F)}var B=F.tagName==="SELECT"?"change":"click";F.addEventListener(B,function(Z){var U=void 0;if(F.tagName==="SELECT"){if(F.selectedIndex<0)return;var M=F.options[F.selectedIndex];U=!M.hasAttribute("selected")&&(M.value||!1)}else U=!F.classList.contains("ql-active")&&(F.value||!F.hasAttribute("value")),Z.preventDefault();N.quill.focus();var k=N.quill.selection.getRange(),T=n(k,1),S=T[0];if(N.handlers[L]!=null)N.handlers[L].call(N,U);else if(i.default.query(L).prototype instanceof i.default.Embed){if(!(U=prompt("Enter "+L)))return;N.quill.updateContents(new s.default().retain(S.index).delete(S.length).insert(E({},L,U)),o.default.sources.USER)}else N.quill.format(L,U,o.default.sources.USER);N.update(S)}),this.controls.push([L,F])}}},{key:"update",value:function(F){var N=F==null?{}:this.quill.getFormat(F);this.controls.forEach(function(L){var B=n(L,2),Z=B[0],U=B[1];if(U.tagName==="SELECT"){var M=void 0;if(F==null)M=null;else if(N[Z]==null)M=U.querySelector("option[selected]");else if(!Array.isArray(N[Z])){var k=N[Z];typeof k=="string"&&(k=k.replace(/\"/g,'\\"')),M=U.querySelector('option[value="'+k+'"]')}M==null?(U.value="",U.selectedIndex=-1):M.selected=!0}else if(F==null)U.classList.remove("ql-active");else if(U.hasAttribute("value")){var T=N[Z]===U.getAttribute("value")||N[Z]!=null&&N[Z].toString()===U.getAttribute("value")||N[Z]==null&&!U.getAttribute("value");U.classList.toggle("ql-active",T)}else U.classList.toggle("ql-active",N[Z]!=null)})}}]),v})(O.default);w.DEFAULTS={},w.DEFAULTS={container:null,handlers:{clean:function(){var d=this,v=this.quill.getSelection();if(v!=null)if(v.length==0){var F=this.quill.getFormat();Object.keys(F).forEach(function(N){i.default.query(N,i.default.Scope.INLINE)!=null&&d.quill.format(N,!1)})}else this.quill.removeFormat(v,o.default.sources.USER)},direction:function(d){var v=this.quill.getFormat().align;d==="rtl"&&v==null?this.quill.format("align","right",o.default.sources.USER):d||v!=="right"||this.quill.format("align",!1,o.default.sources.USER),this.quill.format("direction",d,o.default.sources.USER)},indent:function(d){var v=this.quill.getSelection(),F=this.quill.getFormat(v),N=parseInt(F.indent||0);if(d==="+1"||d==="-1"){var L=d==="+1"?1:-1;F.direction==="rtl"&&(L*=-1),this.quill.format("indent",N+L,o.default.sources.USER)}},link:function(d){d===!0&&(d=prompt("Enter link URL:")),this.quill.format("link",d,o.default.sources.USER)},list:function(d){var v=this.quill.getSelection(),F=this.quill.getFormat(v);d==="check"?F.list==="checked"||F.list==="unchecked"?this.quill.format("list",!1,o.default.sources.USER):this.quill.format("list","unchecked",o.default.sources.USER):this.quill.format("list",d,o.default.sources.USER)}}},u.default=w,u.addControls=e},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(j,u){j.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(j,u){j.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(j,u){j.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(j,u){j.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(j,u){j.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(j,u,f){function g(A){return A&&A.__esModule?A:{default:A}}function E(A,O){if(!(A instanceof O))throw new TypeError("Cannot call a class as a function")}function b(A,O){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!O||typeof O!="object"&&typeof O!="function"?A:O}function h(A,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof O);A.prototype=Object.create(O&&O.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),O&&(Object.setPrototypeOf?Object.setPrototypeOf(A,O):A.__proto__=O)}Object.defineProperty(u,"__esModule",{value:!0}),u.default=u.BubbleTooltip=void 0;var p=function A(O,y,w){O===null&&(O=Function.prototype);var d=Object.getOwnPropertyDescriptor(O,y);if(d===void 0){var v=Object.getPrototypeOf(O);return v===null?void 0:A(v,y,w)}if("value"in d)return d.value;var F=d.get;if(F!==void 0)return F.call(w)},c=(function(){function A(O,y){for(var w=0;w<y.length;w++){var d=y[w];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(O,d.key,d)}}return function(O,y,w){return y&&A(O.prototype,y),w&&A(O,w),O}})(),e=f(2),t=g(e),n=f(9),r=g(n),l=f(44),s=g(l),a=f(22),i=f(26),m=g(i),o=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],x=(function(A){function O(y,w){E(this,O),w.modules.toolbar!=null&&w.modules.toolbar.container==null&&(w.modules.toolbar.container=o);var d=b(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,y,w));return d.quill.container.classList.add("ql-bubble"),d}return h(O,A),c(O,[{key:"extendToolbar",value:function(y){this.tooltip=new _(this.quill,this.options.bounds),this.tooltip.root.appendChild(y.container),this.buildButtons([].slice.call(y.container.querySelectorAll("button")),m.default),this.buildPickers([].slice.call(y.container.querySelectorAll("select")),m.default)}}]),O})(s.default);x.DEFAULTS=(0,t.default)(!0,{},s.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(A){A?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var _=(function(A){function O(y,w){E(this,O);var d=b(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,y,w));return d.quill.on(r.default.events.EDITOR_CHANGE,function(v,F,N,L){if(v===r.default.events.SELECTION_CHANGE)if(F!=null&&F.length>0&&L===r.default.sources.USER){d.show(),d.root.style.left="0px",d.root.style.width="",d.root.style.width=d.root.offsetWidth+"px";var B=d.quill.getLines(F.index,F.length);if(B.length===1)d.position(d.quill.getBounds(F));else{var Z=B[B.length-1],U=d.quill.getIndex(Z),M=Math.min(Z.length()-1,F.index+F.length-U),k=d.quill.getBounds(new a.Range(U,M));d.position(k)}}else document.activeElement!==d.textbox&&d.quill.hasFocus()&&d.hide()}),d}return h(O,A),c(O,[{key:"listen",value:function(){var y=this;p(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){y.root.classList.remove("ql-editing")}),this.quill.on(r.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!y.root.classList.contains("ql-hidden")){var w=y.quill.getSelection();w!=null&&y.position(y.quill.getBounds(w))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(y){var w=p(O.prototype.__proto__||Object.getPrototypeOf(O.prototype),"position",this).call(this,y),d=this.root.querySelector(".ql-tooltip-arrow");if(d.style.marginLeft="",w===0)return w;d.style.marginLeft=-1*w-d.offsetWidth/2+"px"}}]),O})(l.BaseTooltip);_.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),u.BubbleTooltip=_,u.default=x},function(j,u,f){function g(w){return w&&w.__esModule?w:{default:w}}function E(w,d){if(!(w instanceof d))throw new TypeError("Cannot call a class as a function")}function b(w,d){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||typeof d!="object"&&typeof d!="function"?w:d}function h(w,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);w.prototype=Object.create(d&&d.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(w,d):w.__proto__=d)}Object.defineProperty(u,"__esModule",{value:!0});var p=(function(){function w(d,v){var F=[],N=!0,L=!1,B=void 0;try{for(var Z,U=d[Symbol.iterator]();!(N=(Z=U.next()).done)&&(F.push(Z.value),!v||F.length!==v);N=!0);}catch(M){L=!0,B=M}finally{try{!N&&U.return&&U.return()}finally{if(L)throw B}}return F}return function(d,v){if(Array.isArray(d))return d;if(Symbol.iterator in Object(d))return w(d,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),c=function w(d,v,F){d===null&&(d=Function.prototype);var N=Object.getOwnPropertyDescriptor(d,v);if(N===void 0){var L=Object.getPrototypeOf(d);return L===null?void 0:w(L,v,F)}if("value"in N)return N.value;var B=N.get;if(B!==void 0)return B.call(F)},e=(function(){function w(d,v){for(var F=0;F<v.length;F++){var N=v[F];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(d,N.key,N)}}return function(d,v,F){return v&&w(d.prototype,v),F&&w(d,F),d}})(),t=f(2),n=g(t),r=f(9),l=g(r),s=f(44),a=g(s),i=f(15),m=g(i),o=f(22),x=f(26),_=g(x),A=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],O=(function(w){function d(v,F){E(this,d),F.modules.toolbar!=null&&F.modules.toolbar.container==null&&(F.modules.toolbar.container=A);var N=b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,v,F));return N.quill.container.classList.add("ql-snow"),N}return h(d,w),e(d,[{key:"extendToolbar",value:function(v){v.container.classList.add("ql-snow"),this.buildButtons([].slice.call(v.container.querySelectorAll("button")),_.default),this.buildPickers([].slice.call(v.container.querySelectorAll("select")),_.default),this.tooltip=new y(this.quill,this.options.bounds),v.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(F,N){v.handlers.link.call(v,!N.format.link)})}}]),d})(a.default);O.DEFAULTS=(0,n.default)(!0,{},a.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(w){if(w){var d=this.quill.getSelection();if(d==null||d.length==0)return;var v=this.quill.getText(d);/^\S+@\S+\.\S+$/.test(v)&&v.indexOf("mailto:")!==0&&(v="mailto:"+v),this.quill.theme.tooltip.edit("link",v)}else this.quill.format("link",!1)}}}}});var y=(function(w){function d(v,F){E(this,d);var N=b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,v,F));return N.preview=N.root.querySelector("a.ql-preview"),N}return h(d,w),e(d,[{key:"listen",value:function(){var v=this;c(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(F){v.root.classList.contains("ql-editing")?v.save():v.edit("link",v.preview.textContent),F.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(F){if(v.linkRange!=null){var N=v.linkRange;v.restoreFocus(),v.quill.formatText(N,"link",!1,l.default.sources.USER),delete v.linkRange}F.preventDefault(),v.hide()}),this.quill.on(l.default.events.SELECTION_CHANGE,function(F,N,L){if(F!=null){if(F.length===0&&L===l.default.sources.USER){var B=v.quill.scroll.descendant(m.default,F.index),Z=p(B,2),U=Z[0],M=Z[1];if(U!=null){v.linkRange=new o.Range(F.index-M,U.length());var k=m.default.formats(U.domNode);return v.preview.textContent=k,v.preview.setAttribute("href",k),v.show(),void v.position(v.quill.getBounds(v.linkRange))}}else delete v.linkRange;v.hide()}})}},{key:"show",value:function(){c(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),d})(s.BaseTooltip);y.TEMPLATE=['<a class="ql-preview" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),u.default=O}]).default});const be=5;function Oe(j){return j.split("").reduce(((u,f)=>(u^f.charCodeAt(0))*-be),be)>>>2}function je(j="",u=95,f=45,g=Oe){const E=g(j),b=E%9*40;return[...Array(j?25:0)].reduce(((h,p,c)=>E&1<<c%15?h+`<rect x="${c>14?7-~~(c/5):~~(c/5)}" y="${c%5}" width="1" height="1"/>`:h),`<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${b} ${u}% ${f}%)">`)+"</svg>"}globalThis.customElements?.get("minidenticon-svg")||globalThis.customElements?.define("minidenticon-svg",class pe extends HTMLElement{static observedAttributes=["username","saturation","lightness"];static#n={};#e=!1;connectedCallback(){this.#t(),this.#e=!0}attributeChangedCallback(){this.#e&&this.#t()}#t(){const u=pe.observedAttributes.map((g=>this.getAttribute(g)||void 0)),f=u.join(",");this.innerHTML=pe.#n[f]??=je(...u)}});const Fe={"/":"index.html","/login":"pages/login.html","/users":"pages/users/index.html","/users/create":"pages/users/create.html","/users/1":"pages/users/1/index.html","/users/1/edit":"pages/users/1/edit.html","/users/1/docs":"pages/users/1/docs/index.html","/users/1/trackings":"pages/users/1/trackings/index.html","/users/1/evaluations":"pages/users/1/evaluations/index.html","/users/1/evaluations/create":"pages/users/1/evaluations/create.html","/users/1/accidentabilites":"pages/users/1/accidentabilites/index.html","/users/1/uniformities/edit":"pages/users/1/uniformities/edit.html","/users/2":"pages/users/2/index.html","/users/2/edit":"pages/users/2/edit.html","/users/2/docs":"pages/users/2/docs/index.html","/users/2/trackings":"pages/users/2/trackings/index.html","/users/2/evaluations":"pages/users/2/evaluations/index.html","/users/2/evaluations/create":"pages/users/2/evaluations/create.html","/users/2/accidentabilites":"pages/users/2/accidentabilites/index.html","/users/2/uniformities/edit":"pages/users/2/uniformities/edit.html","/users/3":"pages/users/3/index.html","/users/3/edit":"pages/users/3/edit.html","/users/3/docs":"pages/users/3/docs/index.html","/users/3/trackings":"pages/users/3/trackings/index.html","/users/3/evaluations":"pages/users/3/evaluations/index.html","/users/3/evaluations/create":"pages/users/3/evaluations/create.html","/users/3/accidentabilites":"pages/users/3/accidentabilites/index.html","/users/3/uniformities/edit":"pages/users/3/uniformities/edit.html","/centers":"pages/centers/index.html","/centers/create":"pages/centers/create.html","/centers/1":"pages/centers/1/index.html","/centers/1/edit":"pages/centers/1/edit.html","/centers/1/documents":"pages/centers/1/documents/index.html","/centers/2":"pages/centers/2/index.html","/centers/2/edit":"pages/centers/2/edit.html","/centers/2/documents":"pages/centers/2/documents/index.html","/centers/3":"pages/centers/3/index.html","/centers/3/edit":"pages/centers/3/edit.html","/centers/3/documents":"pages/centers/3/documents/index.html","/courses":"pages/courses/index.html","/courses/create":"pages/courses/create.html","/courses/1":"pages/courses/1/index.html","/courses/1/edit":"pages/courses/1/edit.html","/courses/1/users":"pages/courses/1/users/index.html","/courses/2":"pages/courses/2/index.html","/courses/2/edit":"pages/courses/2/edit.html","/courses/2/users":"pages/courses/2/users/index.html","/courses/3":"pages/courses/3/index.html","/courses/3/edit":"pages/courses/3/edit.html","/courses/3/users":"pages/courses/3/users/index.html","/projects":"pages/projects/index.html","/projects/create":"pages/projects/create.html","/projects/1":"pages/projects/1/index.html","/projects/1/edit":"pages/projects/1/edit.html","/projects/2":"pages/projects/2/index.html","/projects/2/edit":"pages/projects/2/edit.html","/projects/3":"pages/projects/3/index.html","/projects/3/edit":"pages/projects/3/edit.html","/general-services":"pages/general-services/index.html","/general-services/create":"pages/general-services/create.html","/general-services/1":"pages/general-services/1/index.html","/general-services/1/edit":"pages/general-services/1/edit.html","/general-services/2":"pages/general-services/2/index.html","/general-services/2/edit":"pages/general-services/2/edit.html","/general-services/3":"pages/general-services/3/index.html","/general-services/3/edit":"pages/general-services/3/edit.html","/external-contacts":"pages/external-contacts/index.html","/external-contacts/create":"pages/external-contacts/create.html","/external-contacts/1":"pages/external-contacts/1/index.html","/external-contacts/1/edit":"pages/external-contacts/1/edit.html","/external-contacts/2":"pages/external-contacts/2/index.html","/external-contacts/2/edit":"pages/external-contacts/2/edit.html","/external-contacts/3":"pages/external-contacts/3/index.html","/external-contacts/3/edit":"pages/external-contacts/3/edit.html","/complementary-services":"pages/complementary-services/index.html","/complementary-services/create":"pages/complementary-services/create.html","/complementary-services/1":"pages/complementary-services/1/index.html","/complementary-services/1/edit":"pages/complementary-services/1/edit.html","/complementary-services/2":"pages/complementary-services/2/index.html","/complementary-services/2/edit":"pages/complementary-services/2/edit.html","/complementary-services/3":"pages/complementary-services/3/index.html","/complementary-services/3/edit":"pages/complementary-services/3/edit.html","/rrhh":"pages/rrhh/index.html","/rrhh/create":"pages/rrhh/create.html","/rrhh/1":"pages/rrhh/1/index.html","/rrhh/1/tracking":"pages/rrhh/1/tracking/index.html","/rrhh/1/docs":"pages/rrhh/1/docs/index.html","/rrhh/2":"pages/rrhh/2/index.html","/rrhh/2/tracking":"pages/rrhh/2/tracking/index.html","/rrhh/2/docs":"pages/rrhh/2/docs/index.html","/rrhh/3":"pages/rrhh/3/index.html","/rrhh/3/tracking":"pages/rrhh/3/tracking/index.html","/rrhh/3/docs":"pages/rrhh/3/docs/index.html","/maintenance":"pages/maintenance/index.html","/maintenance/create":"pages/maintenance/create.html","/maintenance/1":"pages/maintenance/1/index.html","/maintenance/1/tracking":"pages/maintenance/1/tracking/index.html","/maintenance/1/docs":"pages/maintenance/1/docs/index.html","/maintenance/2":"pages/maintenance/2/index.html","/maintenance/2/tracking":"pages/maintenance/2/tracking/index.html","/maintenance/2/docs":"pages/maintenance/2/docs/index.html","/maintenance/3":"pages/maintenance/3/index.html","/maintenance/3/tracking":"pages/maintenance/3/tracking/index.html","/maintenance/3/docs":"pages/maintenance/3/docs/index.html","/documents":"pages/documents/index.html","/documents/create":"pages/documents/create.html","/documents/1":"pages/documents/1/index.html","/documents/1/edit":"pages/documents/1/edit.html","/documents/2":"pages/documents/2/index.html","/documents/2/edit":"pages/documents/2/edit.html","/documents/3":"pages/documents/3/index.html","/documents/3/edit":"pages/documents/3/edit.html","/users/2/trackings/1":"pages/users/2/trackings/1/index.html","/users/2/accidentabilites/1":"pages/users/2/accidentabilites/1/index.html","/maintenance/1/tracking/1":"pages/maintenance/1/tracking/1/index.html"};function Ae(){const j=document.body.dataset.demoBase||"./";return new URL(j,window.location.href)}function he(j){const u=j.replace(/\/$/,"")||"/",f=Fe[u];return f?new URL(f,Ae()).href:null}let xe;function me(j){let u=document.getElementById("static-demo-notice");u||(u=document.createElement("div"),u.id="static-demo-notice",u.setAttribute("role","status"),u.className="fixed bottom-5 right-5 z-50 bg-orange-100 text-orange-900 border border-orange-300 rounded-lg p-4 shadow-lg max-w-sm",document.body.append(u)),u.textContent=j,clearTimeout(xe),xe=setTimeout(()=>u.remove(),5e3)}function qe(){document.addEventListener("submit",j=>{const u=j.target;if(j.preventDefault(),!(u.classList.contains("searchForm")||u.id==="general-search")){if(u.dataset.demoAction==="login"){window.location.href=he("/");return}if(u.dataset.demoAction==="logout"){window.location.href=he("/login");return}document.getElementById("confirmable-modal")?.classList.add("hidden"),me("Mode demo: pots provar el formulari; els canvis no es desen ni s’envien.")}}),document.body.dataset.demoPath==="/login"&&(document.querySelector('input[name="email"]').value="demo@example.com",document.querySelector('input[name="password"]').value="demo"),document.querySelectorAll('select[name="center_id"]').forEach(j=>{j.addEventListener("change",()=>{me("Mode demo: les dades de mostra corresponen al centre inicial.")})})}const Te=[{id:1,name:"Anna Demo",email:"demo1@example.com",phone:"000000000",role:"equip_directiu",center:1,status:"active",locker:"D1",profile_photo_path:null,email_verified_at:null,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z",is_active:1},{id:2,name:"Marc Exemple",email:"demo2@example.com",phone:"000000000",role:"administracio",center:1,status:"active",locker:"D2",profile_photo_path:null,email_verified_at:null,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z",is_active:1},{id:3,name:"Laia Mostra",email:"demo3@example.com",phone:"000000000",role:"administracio",center:1,status:"active",locker:"D3",profile_photo_path:null,email_verified_at:null,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z",is_active:0}],Ne=[{id:1,name:"Centre Demo Terrassa",address:"Adreça de demostració 1",phone:"000000000",email:"centre1@example.com",is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:2,name:"Centre Demo Sabadell",address:"Adreça de demostració 2",phone:"000000000",email:"centre2@example.com",is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:3,name:"Centre Demo Barcelona",address:"Adreça de demostració 3",phone:"000000000",email:"centre3@example.com",is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"}],Se=[{id:1,center_id:1,code:"DEMO1",hours:15,type:"Formació interna",modality:"presencial",name:"Primers auxilis",description:"Curs de demostració.",is_active:1,assistant:1,start_date:"2026-10-21",end_date:"2026-11-21",created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:2,center_id:1,code:"DEMO2",hours:15,type:"Formació interna",modality:"presencial",name:"Atenció centrada en la persona",description:"Curs de demostració.",is_active:1,assistant:1,start_date:"2026-10-21",end_date:"2026-11-21",created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:3,center_id:1,code:"DEMO3",hours:15,type:"Formació interna",modality:"presencial",name:"Prevenció de riscos",description:"Curs de demostració.",is_active:0,assistant:1,start_date:"2026-10-21",end_date:"2026-11-21",created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"}],Pe=[{id:1,center:1,name:"Millora dels espais",start:"2026-10-21T00:00:00.000000Z",user:1,description:"Projecte de demostració.",observations:"Observacions de mostra.",is_active:!0,type:"Projecte",created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:2,center:1,name:"Pla de benestar",start:"2026-10-21T00:00:00.000000Z",user:1,description:"Projecte de demostració.",observations:"Observacions de mostra.",is_active:!0,type:"Projecte",created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:3,center:1,name:"Transformació digital",start:"2026-10-21T00:00:00.000000Z",user:1,description:"Projecte de demostració.",observations:"Observacions de mostra.",is_active:!1,type:"Projecte",created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"}],Ce=[{id:1,center:1,opening:"2026-10-21",user_affected:2,description:"Tema de demostració",user_register:1,derivative:"Direcció",topic:"Pla de formació",is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:2,center:1,opening:"2026-10-21",user_affected:2,description:"Tema de demostració",user_register:1,derivative:"Direcció",topic:"Acollida",is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:3,center:1,opening:"2026-10-21",user_affected:2,description:"Tema de demostració",user_register:1,derivative:"Direcció",topic:"Organització dels torns",is_active:0,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"}],Le=[{id:1,center:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z",responsible:"Responsable Demo",description:"Incidència de demostració",topic:"Climatització",is_active:1},{id:2,center:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z",responsible:"Responsable Demo",description:"Incidència de demostració",topic:"Il·luminació",is_active:1},{id:3,center:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z",responsible:"Responsable Demo",description:"Incidència de demostració",topic:"Ascensor",is_active:0}],De=[{id:1,name:"Protocol d’acollida",type:"Altres",description:"Document fictici de demostració",path:"demo.txt",user:1,documentstable_id:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:2,name:"Pla de formació",type:"Altres",description:"Document fictici de demostració",path:"demo.txt",user:1,documentstable_id:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:3,name:"Guia del centre",type:"Altres",description:"Document fictici de demostració",path:"demo.txt",user:1,documentstable_id:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"}],Ie={users:Te,centers:Ne,courses:Se,projects:Pe,"general-services":[{id:1,center_id:1,name:"Restauració",type:"cuina",manager_name:"Responsable Demo",staff_and_schedules:"Dilluns a divendres, 09:00–17:00",manager_email:"responsable@example.com",manager_phone:null,is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:2,center_id:1,name:"Neteja",type:"neteja",manager_name:"Responsable Demo",staff_and_schedules:"Dilluns a divendres, 09:00–17:00",manager_email:"responsable@example.com",manager_phone:null,is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:3,center_id:1,name:"Bugaderia",type:"bugaderia",manager_name:"Responsable Demo",staff_and_schedules:"Dilluns a divendres, 09:00–17:00",manager_email:"responsable@example.com",manager_phone:null,is_active:0,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"}],"external-contacts":[{id:1,center_id:1,category:"serveis generals",reason:null,company_or_department:"Empresa Demo 1",contact_person:"Contacte Demo 1",phone:"000000000",email:"contacte1@example.com",is_active:1,observations:null,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:2,center_id:1,category:"serveis generals",reason:null,company_or_department:"Empresa Demo 2",contact_person:"Contacte Demo 2",phone:"000000000",email:"contacte2@example.com",is_active:1,observations:null,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:3,center_id:1,category:"serveis generals",reason:null,company_or_department:"Empresa Demo 3",contact_person:"Contacte Demo 3",phone:"000000000",email:"contacte3@example.com",is_active:0,observations:null,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"}],"complementary-services":[{id:1,center_id:1,name:"Fisioteràpia",type:"Servei de demostració",manager_name:"Responsable Demo",manager_email:"responsable@example.com",manager_phone:null,schedules:"Dilluns a divendres",observations:"Dades de demostració",is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:2,center_id:1,name:"Perruqueria",type:"Servei de demostració",manager_name:"Responsable Demo",manager_email:"responsable@example.com",manager_phone:null,schedules:"Dilluns a divendres",observations:"Dades de demostració",is_active:1,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"},{id:3,center_id:1,name:"Activitats",type:"Servei de demostració",manager_name:"Responsable Demo",manager_email:"responsable@example.com",manager_phone:null,schedules:"Dilluns a divendres",observations:"Dades de demostració",is_active:0,created_at:"2026-10-21T10:00:00.000000Z",updated_at:"2026-10-21T10:00:00.000000Z"}],rrhh:Ce,maintenance:Le,documents:De},Me=`<template data-id="1" data-name="Anna Demo" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2">
                    <div class="bg-gray-200 rounded-full h-16 w-16 aspect-square">
                        <minidenticon-svg
                            username="c4ca4238a0b923820dcc509a6f75849b"
                        ></minidenticon-svg>
                    </div>
                    <div class="flex items-center">
                        <a
                            href="{{base}}pages/users/1/index.html"
                            class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                        >
                            Anna Demo
                        </a>
                    </div>
                </div>
                <div
                    class="w-16 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </div>
            </div>

            <div class="mt-3 ml-5 space-y-5">
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-center"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Centre Demo Terrassa</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-role"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Equip Directiu</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-phone"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">000000000</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <div class="aspect-square">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-mail"></use>
                        </svg>
                    </div>
                    <span class="ml-2 dark:text-white">demo1@example.com</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-calendar"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">21 de October de 2026</span>
                </div>
            </div>
        </div>

        <div class="w-full flex gap-5 flex-col sm:flex-col justify-center md:flex-row">
            <a
                href="{{base}}pages/users/1/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] transition-all dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <form
                data-demo-action="preview"
                method="POST"
                class="w-full sm:w-full md:w-[50%] lg:w-[50%]"
            >
                <button
                    type="submit"
                    class="confirmable w-full text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all flex justify-center gap-3"
                    data-confirm-message="Estàs segur que vols desactivar aquest usuari?"
                >
                    <div class="aspect-square">
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                    </div>
                    <p>Desactivar</p>
                </button>
            </form>
        </div>
    </div>
</template>

<template data-id="2" data-name="Marc Exemple" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2">
                    <div class="bg-gray-200 rounded-full h-16 w-16 aspect-square">
                        <minidenticon-svg
                            username="c81e728d9d4c2f636f067f89cc14862c"
                        ></minidenticon-svg>
                    </div>
                    <div class="flex items-center">
                        <a
                            href="{{base}}pages/users/2/index.html"
                            class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                        >
                            Marc Exemple
                        </a>
                    </div>
                </div>
                <div
                    class="w-16 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </div>
            </div>

            <div class="mt-3 ml-5 space-y-5">
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-center"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Centre Demo Terrassa</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-role"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Administració</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-phone"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">000000000</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <div class="aspect-square">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-mail"></use>
                        </svg>
                    </div>
                    <span class="ml-2 dark:text-white">demo2@example.com</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-calendar"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">21 de October de 2026</span>
                </div>
            </div>
        </div>

        <div class="w-full flex gap-5 flex-col sm:flex-col justify-center md:flex-row">
            <a
                href="{{base}}pages/users/2/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] transition-all dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <form
                data-demo-action="preview"
                method="POST"
                class="w-full sm:w-full md:w-[50%] lg:w-[50%]"
            >
                <button
                    type="submit"
                    class="confirmable w-full text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all flex justify-center gap-3"
                    data-confirm-message="Estàs segur que vols desactivar aquest usuari?"
                >
                    <div class="aspect-square">
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                    </div>
                    <p>Desactivar</p>
                </button>
            </form>
        </div>
    </div>
</template>

<template data-id="3" data-name="Laia Mostra" data-active="false">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2">
                    <div class="bg-gray-200 rounded-full h-16 w-16 aspect-square">
                        <minidenticon-svg
                            username="eccbc87e4b5ce2fe28308fd9f2a7baf3"
                        ></minidenticon-svg>
                    </div>
                    <div class="flex items-center">
                        <a
                            href="{{base}}pages/users/3/index.html"
                            class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                        >
                            Laia Mostra
                        </a>
                    </div>
                </div>
                <div
                    class="w-16 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </div>
            </div>

            <div class="mt-3 ml-5 space-y-5">
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-center"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Centre Demo Terrassa</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-role"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Administració</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-phone"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">000000000</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <div class="aspect-square">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-mail"></use>
                        </svg>
                    </div>
                    <span class="ml-2 dark:text-white">demo3@example.com</span>
                </div>
                <div class="flex items-center text-[#011020]">
                    <svg class="w-6 h-6 dark:text-neutral-400">
                        <use xlink:href="#icon-calendar"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">21 de October de 2026</span>
                </div>
            </div>
        </div>

        <div class="w-full flex gap-5 flex-col sm:flex-col justify-center md:flex-row">
            <a
                href="{{base}}pages/users/3/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] transition-all dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <form
                data-demo-action="preview"
                method="POST"
                class="w-full sm:w-full md:w-[50%] lg:w-[50%]"
            >
                <button
                    type="submit"
                    class="confirmable w-full text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all flex justify-center gap-3"
                    data-confirm-message="Estàs segur que vols activar aquest usuari?"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-power"></use>
                    </svg>
                    Activar
                </button>
            </form>
        </div>
    </div>
</template>
`,Re=`<template data-id="1" data-name="Anna Demo" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div
                class="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center aspect-square"
            >
                <minidenticon-svg
                    username="c4ca4238a0b923820dcc509a6f75849b"
                    class="w-10 h-10"
                ></minidenticon-svg>
            </div>
            <a
                href="{{base}}pages/users/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Anna Demo
            </a>
        </td>

        <td class="text-center px-3">
            <p>Equip Directiu</p>
        </td>

        <td class="text-center px-3">
            <p>000000000</p>
        </td>

        <td class="text-center px-3">
            <p>demo1@example.com</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/users/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest usuari?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Marc Exemple" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div
                class="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center aspect-square"
            >
                <minidenticon-svg
                    username="c81e728d9d4c2f636f067f89cc14862c"
                    class="w-10 h-10"
                ></minidenticon-svg>
            </div>
            <a
                href="{{base}}pages/users/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Marc Exemple
            </a>
        </td>

        <td class="text-center px-3">
            <p>Administració</p>
        </td>

        <td class="text-center px-3">
            <p>000000000</p>
        </td>

        <td class="text-center px-3">
            <p>demo2@example.com</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/users/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest usuari?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Laia Mostra" data-active="false">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div
                class="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center aspect-square"
            >
                <minidenticon-svg
                    username="eccbc87e4b5ce2fe28308fd9f2a7baf3"
                    class="w-10 h-10"
                ></minidenticon-svg>
            </div>
            <a
                href="{{base}}pages/users/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Laia Mostra
            </a>
        </td>

        <td class="text-center px-3">
            <p>Administració</p>
        </td>

        <td class="text-center px-3">
            <p>000000000</p>
        </td>

        <td class="text-center px-3">
            <p>demo3@example.com</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/users/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest usuari?"
                    >
                        Activar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,Be=`<template data-id="1" data-name="Centre Demo Terrassa" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-maps"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/centers/1/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Centre Demo Terrassa
                </a>
            </div>

            <p
                class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-maps"></use>
                </svg>
                <p class="dark:text-white">Adreça de demostració 1</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">000000000</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-mail"></use>
                </svg>
                <p class="dark:text-white">centre1@example.com</p>
            </div>
        </div>
        <p class="text-sm dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/centers/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>

                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="2" data-name="Centre Demo Sabadell" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-maps"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/centers/2/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Centre Demo Sabadell
                </a>
            </div>

            <p
                class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-maps"></use>
                </svg>
                <p class="dark:text-white">Adreça de demostració 2</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">000000000</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-mail"></use>
                </svg>
                <p class="dark:text-white">centre2@example.com</p>
            </div>
        </div>
        <p class="text-sm dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/centers/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>

                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="3" data-name="Centre Demo Barcelona" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-maps"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/centers/3/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Centre Demo Barcelona
                </a>
            </div>

            <p
                class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-maps"></use>
                </svg>
                <p class="dark:text-white">Adreça de demostració 3</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">000000000</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-mail"></use>
                </svg>
                <p class="dark:text-white">centre3@example.com</p>
            </div>
        </div>
        <p class="text-sm dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/centers/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>

                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
`,Ue=`<template data-id="1" data-name="Centre Demo Terrassa" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-maps"></use></svg>
            </div>
            <a
                href="{{base}}pages/centers/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Centre Demo Terrassa
            </a>
        </td>

        <td class="text-center px-3">
            <p>Adreça de demostració 1</p>
        </td>

        <td class="text-center px-3">
            <p>000000000</p>
        </td>

        <td class="text-center px-3">
            <p>centre1@example.com</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/centers/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Centre Demo Sabadell" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-maps"></use></svg>
            </div>
            <a
                href="{{base}}pages/centers/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Centre Demo Sabadell
            </a>
        </td>

        <td class="text-center px-3">
            <p>Adreça de demostració 2</p>
        </td>

        <td class="text-center px-3">
            <p>000000000</p>
        </td>

        <td class="text-center px-3">
            <p>centre2@example.com</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/centers/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Centre Demo Barcelona" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-maps"></use></svg>
            </div>
            <a
                href="{{base}}pages/centers/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Centre Demo Barcelona
            </a>
        </td>

        <td class="text-center px-3">
            <p>Adreça de demostració 3</p>
        </td>

        <td class="text-center px-3">
            <p>000000000</p>
        </td>

        <td class="text-center px-3">
            <p>centre3@example.com</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/centers/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,ze=`<template data-id="1" data-name="Primers auxilis" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-book"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/courses/1/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Primers auxilis
                </a>
            </div>
            <p
                class="w-20 border-1 p-1 ml-3 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <a
                    href="{{base}}pages/courses/1/users/index.html"
                    class="flex flex-row items-center gap-2 text-orange-500"
                >
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-group-user"></use>
                    </svg>
                    <p>2 participants</p>
                </a>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-role"></use>
                </svg>
                <p class="dark:text-white">Formació interna</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-computer-desktop"></use>
                </svg>
                <p class="dark:text-white">Presencial</p>
            </div>
        </div>
        <p class="text-sm ml-3 my-4 dark:text-white">Inici: 21/10/2026 | Fi: 21/11/2026</p>
        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/courses/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest curs?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="2" data-name="Atenció centrada en la persona" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-book"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/courses/2/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Atenció centrada en la persona
                </a>
            </div>
            <p
                class="w-20 border-1 p-1 ml-3 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-group-user"></use>
                </svg>
                <p>Aquest curs no té participants</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-role"></use>
                </svg>
                <p class="dark:text-white">Formació interna</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-computer-desktop"></use>
                </svg>
                <p class="dark:text-white">Presencial</p>
            </div>
        </div>
        <p class="text-sm ml-3 my-4 dark:text-white">Inici: 21/10/2026 | Fi: 21/11/2026</p>
        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/courses/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest curs?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="3" data-name="Prevenció de riscos" data-active="false">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-book"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/courses/3/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Prevenció de riscos
                </a>
            </div>
            <p
                class="w-20 border-1 p-1 ml-3 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
            >
                Inactiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-group-user"></use>
                </svg>
                <p>Aquest curs no té participants</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-role"></use>
                </svg>
                <p class="dark:text-white">Formació interna</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-computer-desktop"></use>
                </svg>
                <p class="dark:text-white">Presencial</p>
            </div>
        </div>
        <p class="text-sm ml-3 my-4 dark:text-white">Inici: 21/10/2026 | Fi: 21/11/2026</p>
        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/courses/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest curs?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Activar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
`,He=`<template data-id="1" data-name="Primers auxilis" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-book"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/courses/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Primers auxilis
            </a>
        </td>

        <td class="text-center px-3">
            <a href="{{base}}pages/courses/1/users/index.html" class="text-[#FF7E13]">2</a>
        </td>

        <td class="text-center px-3">
            <p>Formació interna</p>
        </td>

        <td class="text-center px-3">
            <p>Presencial</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/courses/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest curs?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Atenció centrada en la persona" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-book"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/courses/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Atenció centrada en la persona
            </a>
        </td>

        <td class="text-center px-3">
            <p class="text-neutral-400 font-semibold">0</p>
        </td>

        <td class="text-center px-3">
            <p>Formació interna</p>
        </td>

        <td class="text-center px-3">
            <p>Presencial</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/courses/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest curs?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Prevenció de riscos" data-active="false">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-book"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/courses/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Prevenció de riscos
            </a>
        </td>

        <td class="text-center px-3">
            <p class="text-neutral-400 font-semibold">0</p>
        </td>

        <td class="text-center px-3">
            <p>Formació interna</p>
        </td>

        <td class="text-center px-3">
            <p>Presencial</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/courses/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest curs?"
                    >
                        Activar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,Ze=`<template data-id="1" data-name="Millora dels espais" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="border-b-gray-600 border-b-1 pb-5">
            <div class="flex flex-row justify-between items-center w-full mb-2">
                <div class="flex flex-row justify-between gap-2 items-center">
                    <div class="bg-green-600/16 rounded-lg p-2 flex items-center justify-center">
                        <svg class="w-8 h-8 text-green-600">
                            <use xlink:href="#icon-folder"></use>
                        </svg>
                    </div>
                    <div class="flex flex-col items-start">
                        <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">PROJECTE</p>
                        <a
                            href="{{base}}pages/projects/1/index.html"
                            class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                        >
                            Millora dels espais
                        </a>
                    </div>
                </div>
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
            <div class="mt-3 ml-5 space-y-5 text-[#011020] dark:text-neutral-400">
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Anna Demo</span>
                </div>
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-document"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">0 Documents adjunts</p>
                </div>
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-calendar"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">21/10/2026</p>
                </div>
                <div class="flex items-center">
                    <p class="ml-2 text-sm dark:text-white">Creat: 21/10/2026</p>
                    <p class="ml-2 text-sm dark:text-white">Actualizat: 21/10/2026</p>
                </div>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end mt-4">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/projects/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="POST"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest projecte/comissió?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="2" data-name="Pla de benestar" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="border-b-gray-600 border-b-1 pb-5">
            <div class="flex flex-row justify-between items-center w-full mb-2">
                <div class="flex flex-row justify-between gap-2 items-center">
                    <div class="bg-green-600/16 rounded-lg p-2 flex items-center justify-center">
                        <svg class="w-8 h-8 text-green-600">
                            <use xlink:href="#icon-folder"></use>
                        </svg>
                    </div>
                    <div class="flex flex-col items-start">
                        <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">PROJECTE</p>
                        <a
                            href="{{base}}pages/projects/2/index.html"
                            class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                        >
                            Pla de benestar
                        </a>
                    </div>
                </div>
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
            <div class="mt-3 ml-5 space-y-5 text-[#011020] dark:text-neutral-400">
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Anna Demo</span>
                </div>
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-document"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">0 Documents adjunts</p>
                </div>
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-calendar"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">21/10/2026</p>
                </div>
                <div class="flex items-center">
                    <p class="ml-2 text-sm dark:text-white">Creat: 21/10/2026</p>
                    <p class="ml-2 text-sm dark:text-white">Actualizat: 21/10/2026</p>
                </div>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end mt-4">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/projects/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="POST"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest projecte/comissió?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="3" data-name="Transformació digital" data-active="false">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="border-b-gray-600 border-b-1 pb-5">
            <div class="flex flex-row justify-between items-center w-full mb-2">
                <div class="flex flex-row justify-between gap-2 items-center">
                    <div class="bg-green-600/16 rounded-lg p-2 flex items-center justify-center">
                        <svg class="w-8 h-8 text-green-600">
                            <use xlink:href="#icon-folder"></use>
                        </svg>
                    </div>
                    <div class="flex flex-col items-start">
                        <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">PROJECTE</p>
                        <a
                            href="{{base}}pages/projects/3/index.html"
                            class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                        >
                            Transformació digital
                        </a>
                    </div>
                </div>
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
            <div class="mt-3 ml-5 space-y-5 text-[#011020] dark:text-neutral-400">
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <span class="ml-2 dark:text-white">Anna Demo</span>
                </div>
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-document"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">0 Documents adjunts</p>
                </div>
                <div class="flex items-center">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-calendar"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">21/10/2026</p>
                </div>
                <div class="flex items-center">
                    <p class="ml-2 text-sm dark:text-white">Creat: 21/10/2026</p>
                    <p class="ml-2 text-sm dark:text-white">Actualizat: 21/10/2026</p>
                </div>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end mt-4">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/projects/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="POST"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest projecte/comissió?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Activar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
`,Ke=`<template data-id="1" data-name="Millora dels espais" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-green-600/16 rounded-lg p-2">
                <svg class="w-8 h-8 text-green-600"><use xlink:href="#icon-folder"></use></svg>
            </div>
            <a
                href="{{base}}pages/projects/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Millora dels espais
            </a>
        </td>

        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>

        <td class="text-center px-3">
            <p>Projecte</p>
        </td>

        <td class="text-center px-3">
            <p>0 documents</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/projects/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest projecte/comissió?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Pla de benestar" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-green-600/16 rounded-lg p-2">
                <svg class="w-8 h-8 text-green-600"><use xlink:href="#icon-folder"></use></svg>
            </div>
            <a
                href="{{base}}pages/projects/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Pla de benestar
            </a>
        </td>

        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>

        <td class="text-center px-3">
            <p>Projecte</p>
        </td>

        <td class="text-center px-3">
            <p>0 documents</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/projects/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest projecte/comissió?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Transformació digital" data-active="false">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-green-600/16 rounded-lg p-2">
                <svg class="w-8 h-8 text-green-600"><use xlink:href="#icon-folder"></use></svg>
            </div>
            <a
                href="{{base}}pages/projects/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Transformació digital
            </a>
        </td>

        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>

        <td class="text-center px-3">
            <p>Projecte</p>
        </td>

        <td class="text-center px-3">
            <p>0 documents</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/projects/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest projecte/comissió?"
                    >
                        Activar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,Ve=`<template data-id="1" data-name="Restauració" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-knife"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/general-services/1/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Restauració
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-cog-6-tooth"></use>
                </svg>
                <p class="dark:text-white">Cuina</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-users"></use>
                </svg>
                <p class="dark:text-white">Responsable Demo</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 flex-shrink-0">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">Aquest servei no té número d&#039;encarregat</p>
            </div>
        </div>
        <p class="text-sm my-4 dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/general-services/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest servei?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="2" data-name="Neteja" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-sparkles"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/general-services/2/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Neteja
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-cog-6-tooth"></use>
                </svg>
                <p class="dark:text-white">Neteja</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-users"></use>
                </svg>
                <p class="dark:text-white">Responsable Demo</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 flex-shrink-0">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">Aquest servei no té número d&#039;encarregat</p>
            </div>
        </div>
        <p class="text-sm my-4 dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/general-services/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest servei?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="3" data-name="Bugaderia" data-active="false">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-sea"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/general-services/3/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Bugaderia
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
            >
                Inactiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-cog-6-tooth"></use>
                </svg>
                <p class="dark:text-white">Bugaderia</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7">
                    <use xlink:href="#icon-users"></use>
                </svg>
                <p class="dark:text-white">Responsable Demo</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 flex-shrink-0">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">Aquest servei no té número d&#039;encarregat</p>
            </div>
        </div>
        <p class="text-sm my-4 dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/general-services/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest servei?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Activar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
`,Ge=`<template data-id="1" data-name="Restauració" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-knife"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/general-services/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Restauració
            </a>
        </td>

        <td class="text-center px-3">
            <p>Centre Demo Terrassa</p>
        </td>

        <td class="text-center px-3">
            <p>Cuina</p>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/general-services/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest servei?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Neteja" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-sparkles"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/general-services/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Neteja
            </a>
        </td>

        <td class="text-center px-3">
            <p>Centre Demo Terrassa</p>
        </td>

        <td class="text-center px-3">
            <p>Neteja</p>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/general-services/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest servei?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Bugaderia" data-active="false">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-sea"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/general-services/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Bugaderia
            </a>
        </td>

        <td class="text-center px-3">
            <p>Centre Demo Terrassa</p>
        </td>

        <td class="text-center px-3">
            <p>Bugaderia</p>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/general-services/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest servei?"
                    >
                        Activar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,We=`<template data-id="1" data-name="Contacte Demo 1" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2">
                    <div class="flex flex-row items-center gap-5">
                        <div class="bg-[#ffe7de] rounded-lg p-2">
                            <svg class="w-8 h-8 text-[#FF7E13]">
                                <use xlink:href="#icon-conctact"></use>
                            </svg>
                        </div>
                        <div class="flex flex-col items-start">
                            <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">
                                SERVEIS GENERALS
                            </p>
                            <a
                                href="{{base}}pages/external-contacts/1/index.html"
                                class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                            >
                                Contacte Demo 1
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="w-16 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </div>
            </div>

            <div class="mt-3 ml-3 space-y-3">
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-role"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Empresa Demo 1</p>
                </div>

                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Contacte Demo 1</p>
                </div>
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-mail"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">contacte1@example.com</p>
                </div>
            </div>
        </div>

        <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <a
                href="{{base}}pages/external-contacts/1/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <form data-demo-action="preview" method="post" class="w-full sm:w-full md:w-[50%]">
                <button
                    type="submit"
                    class="confirmable w-full sm:w-full md:w-full flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                    data-confirm-message="Estàs segur que vols desactivar aquest contacte?"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-power"></use>
                    </svg>
                    Desactivar
                </button>
            </form>
        </div>
    </div>
</template>

<template data-id="2" data-name="Contacte Demo 2" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2">
                    <div class="flex flex-row items-center gap-5">
                        <div class="bg-[#ffe7de] rounded-lg p-2">
                            <svg class="w-8 h-8 text-[#FF7E13]">
                                <use xlink:href="#icon-conctact"></use>
                            </svg>
                        </div>
                        <div class="flex flex-col items-start">
                            <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">
                                SERVEIS GENERALS
                            </p>
                            <a
                                href="{{base}}pages/external-contacts/2/index.html"
                                class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                            >
                                Contacte Demo 2
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="w-16 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </div>
            </div>

            <div class="mt-3 ml-3 space-y-3">
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-role"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Empresa Demo 2</p>
                </div>

                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Contacte Demo 2</p>
                </div>
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-mail"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">contacte2@example.com</p>
                </div>
            </div>
        </div>

        <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <a
                href="{{base}}pages/external-contacts/2/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <form data-demo-action="preview" method="post" class="w-full sm:w-full md:w-[50%]">
                <button
                    type="submit"
                    class="confirmable w-full sm:w-full md:w-full flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                    data-confirm-message="Estàs segur que vols desactivar aquest contacte?"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-power"></use>
                    </svg>
                    Desactivar
                </button>
            </form>
        </div>
    </div>
</template>

<template data-id="3" data-name="Contacte Demo 3" data-active="false">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2">
                    <div class="flex flex-row items-center gap-5">
                        <div class="bg-[#ffe7de] rounded-lg p-2">
                            <svg class="w-8 h-8 text-[#FF7E13]">
                                <use xlink:href="#icon-conctact"></use>
                            </svg>
                        </div>
                        <div class="flex flex-col items-start">
                            <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">
                                SERVEIS GENERALS
                            </p>
                            <a
                                href="{{base}}pages/external-contacts/3/index.html"
                                class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                            >
                                Contacte Demo 3
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="w-16 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </div>
            </div>

            <div class="mt-3 ml-3 space-y-3">
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-role"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Empresa Demo 3</p>
                </div>

                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Contacte Demo 3</p>
                </div>
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-mail"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">contacte3@example.com</p>
                </div>
            </div>
        </div>

        <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <a
                href="{{base}}pages/external-contacts/3/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <form data-demo-action="preview" method="post" class="w-full sm:w-full md:w-[50%]">
                <button
                    type="submit"
                    class="confirmable w-full sm:w-full md:w-full flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                    data-confirm-message="Estàs segur que vols activar aquest contacte?"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-power"></use>
                    </svg>
                    Activar
                </button>
            </form>
        </div>
    </div>
</template>
`,$e=`<template data-id="1" data-name="Contacte Demo 1" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-conctact"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/external-contacts/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Contacte Demo 1
            </a>
        </td>
        <td class="text-center px-3">
            <p>Empresa Demo 1</p>
        </td>
        <td class="text-center px-3">
            <p class="truncate">000000000</p>
            <a href="mailto:contacte1@example.com" target="_blank" class="truncate text-[#df6400]">
                contacte1@example.com
            </a>
        </td>
        <td class="text-center px-3">
            <p>Serveis generals</p>
        </td>
        <td class="text-center px-3">
            <p>Aquest contacte no té motiu</p>
        </td>
        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>
        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/external-contacts/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest contacte?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Contacte Demo 2" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-conctact"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/external-contacts/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Contacte Demo 2
            </a>
        </td>
        <td class="text-center px-3">
            <p>Empresa Demo 2</p>
        </td>
        <td class="text-center px-3">
            <p class="truncate">000000000</p>
            <a href="mailto:contacte2@example.com" target="_blank" class="truncate text-[#df6400]">
                contacte2@example.com
            </a>
        </td>
        <td class="text-center px-3">
            <p>Serveis generals</p>
        </td>
        <td class="text-center px-3">
            <p>Aquest contacte no té motiu</p>
        </td>
        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>
        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/external-contacts/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest contacte?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Contacte Demo 3" data-active="false">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-conctact"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/external-contacts/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Contacte Demo 3
            </a>
        </td>
        <td class="text-center px-3">
            <p>Empresa Demo 3</p>
        </td>
        <td class="text-center px-3">
            <p class="truncate">000000000</p>
            <a href="mailto:contacte3@example.com" target="_blank" class="truncate text-[#df6400]">
                contacte3@example.com
            </a>
        </td>
        <td class="text-center px-3">
            <p>Serveis generals</p>
        </td>
        <td class="text-center px-3">
            <p>Aquest contacte no té motiu</p>
        </td>
        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
        </td>
        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/external-contacts/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest contacte?"
                    >
                        Activar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,Ye=`<template data-id="1" data-name="Fisioteràpia" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-services"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/complementary-services/1/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Fisioteràpia
                </a>
            </div>

            <p
                class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A]">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-cog-6-tooth"></use>
                </svg>
                <p class="dark:text-white">Servei de demostració</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-users"></use>
                </svg>
                <p class="dark:text-white">Responsable Demo</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">Aquest servei no té telèfon de l&#039;encarregat</p>
            </div>
        </div>
        <p class="text-sm my-4 dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/complementary-services/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest servei?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="2" data-name="Perruqueria" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-services"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/complementary-services/2/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Perruqueria
                </a>
            </div>

            <p
                class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A]">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-cog-6-tooth"></use>
                </svg>
                <p class="dark:text-white">Servei de demostració</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-users"></use>
                </svg>
                <p class="dark:text-white">Responsable Demo</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">Aquest servei no té telèfon de l&#039;encarregat</p>
            </div>
        </div>
        <p class="text-sm my-4 dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/complementary-services/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest servei?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="3" data-name="Activitats" data-active="false">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center mb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-services"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/complementary-services/3/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Activitats
                </a>
            </div>

            <p
                class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
            >
                Inactiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A]">
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-center"></use>
                </svg>
                <p class="dark:text-white">Centre Demo Terrassa</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-cog-6-tooth"></use>
                </svg>
                <p class="dark:text-white">Servei de demostració</p>
            </div>

            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-users"></use>
                </svg>
                <p class="dark:text-white">Responsable Demo</p>
            </div>
            <div class="flex flex-row items-center gap-2 pl-2">
                <svg class="w-7 h-7 dark:text-neutral-400">
                    <use xlink:href="#icon-phone"></use>
                </svg>
                <p class="dark:text-white">Aquest servei no té telèfon de l&#039;encarregat</p>
            </div>
        </div>
        <p class="text-sm my-4 dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <div
                class="w-full sm:w-full md:w-auto md:max-w-full lg:w-auto flex gap-5 justify-end flex-col sm:flex-col sm:justify-center md:flex-row"
            >
                <a
                    href="{{base}}pages/complementary-services/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    <svg class="w-6 h-6">
                        <use xlink:href="#icon-square-pen"></use>
                    </svg>
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest servei?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Activar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
`,Xe=`<template data-id="1" data-name="Fisioteràpia" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-services"></use></svg>
            </div>
            <a
                href="{{base}}pages/complementary-services/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Fisioteràpia
            </a>
        </td>

        <td class="text-center px-3">
            <p>Centre Demo Terrassa</p>
        </td>

        <td class="text-center px-3">
            <p>Servei de demostració</p>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/complementary-services/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest servei?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Perruqueria" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-services"></use></svg>
            </div>
            <a
                href="{{base}}pages/complementary-services/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Perruqueria
            </a>
        </td>

        <td class="text-center px-3">
            <p>Centre Demo Terrassa</p>
        </td>

        <td class="text-center px-3">
            <p>Servei de demostració</p>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/complementary-services/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest servei?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Activitats" data-active="false">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-services"></use></svg>
            </div>
            <a
                href="{{base}}pages/complementary-services/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Activitats
            </a>
        </td>

        <td class="text-center px-3">
            <p>Centre Demo Terrassa</p>
        </td>

        <td class="text-center px-3">
            <p>Servei de demostració</p>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/complementary-services/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest servei?"
                    >
                        Activar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,Qe=`<template data-id="1" data-name="Pla de formació" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center border-b-1 border-b-[#AFAFAF] pb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-group-user"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/rrhh/1/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Pla de formació
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-white">
            <div class="flex gap-4 border-b-1 border-b-[#AFAFAF] pb-5 pt-2">
                <div class="flex flex-col gap-4 w-full">
                    <h2 class="text-[#012F4A] dark:text-white font-bold text-[18px]">
                        Professional afectat
                    </h2>
                    <div class="flex items-center pl-2 gap-2">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-user"></use>
                        </svg>
                        Marc Exemple
                    </div>
                    <div class="flex items-center text-[#011020] dark:text-white gap-2 pl-2">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-phone"></use>
                        </svg>
                        <span class="dark:text-white">000000000</span>
                    </div>
                    <div class="flex items-center text-[#011020] dark:text-white gap-2 pl-2">
                        <div>
                            <svg class="w-6 h-6 dark:text-neutral-400">
                                <use xlink:href="#icon-mail"></use>
                            </svg>
                        </div>
                        <span class="dark:text-white">demo2@example.com</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 border-b-1 border-b-[#AFAFAF] pb-5 pt-2">
                <div class="flex items-center gap-4">
                    <h2 class="text-[#012F4A] dark:text-white font-bold text-[18px]">Descripció</h2>
                </div>
                <div class="overflow-hidden break-words whitespace-normal break-all">
                    Tema de demostració
                </div>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end">
            <div class="w-full items-center flex gap-5 justify-between flex-col md:flex-row">
                <p class="text-sm dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>
                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-max sm:w-max md:w-max lg:w-max flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest Tema pendent?"
                    >
                        <div>
                            <svg class="w-6 h-6">
                                <use xlink:href="#icon-power"></use>
                            </svg>
                        </div>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="2" data-name="Acollida" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center border-b-1 border-b-[#AFAFAF] pb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-group-user"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/rrhh/2/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Acollida
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-white">
            <div class="flex gap-4 border-b-1 border-b-[#AFAFAF] pb-5 pt-2">
                <div class="flex flex-col gap-4 w-full">
                    <h2 class="text-[#012F4A] dark:text-white font-bold text-[18px]">
                        Professional afectat
                    </h2>
                    <div class="flex items-center pl-2 gap-2">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-user"></use>
                        </svg>
                        Marc Exemple
                    </div>
                    <div class="flex items-center text-[#011020] dark:text-white gap-2 pl-2">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-phone"></use>
                        </svg>
                        <span class="dark:text-white">000000000</span>
                    </div>
                    <div class="flex items-center text-[#011020] dark:text-white gap-2 pl-2">
                        <div>
                            <svg class="w-6 h-6 dark:text-neutral-400">
                                <use xlink:href="#icon-mail"></use>
                            </svg>
                        </div>
                        <span class="dark:text-white">demo2@example.com</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 border-b-1 border-b-[#AFAFAF] pb-5 pt-2">
                <div class="flex items-center gap-4">
                    <h2 class="text-[#012F4A] dark:text-white font-bold text-[18px]">Descripció</h2>
                </div>
                <div class="overflow-hidden break-words whitespace-normal break-all">
                    Tema de demostració
                </div>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end">
            <div class="w-full items-center flex gap-5 justify-between flex-col md:flex-row">
                <p class="text-sm dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>
                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-max sm:w-max md:w-max lg:w-max flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest Tema pendent?"
                    >
                        <div>
                            <svg class="w-6 h-6">
                                <use xlink:href="#icon-power"></use>
                            </svg>
                        </div>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="3" data-name="Organització dels torns" data-active="false">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center border-b-1 border-b-[#AFAFAF] pb-5">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-group-user"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/rrhh/3/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Organització dels torns
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
            >
                Inactiu
            </p>
        </div>

        <div class="flex flex-col gap-3 text-[#0F172A] dark:text-white">
            <div class="flex gap-4 border-b-1 border-b-[#AFAFAF] pb-5 pt-2">
                <div class="flex flex-col gap-4 w-full">
                    <h2 class="text-[#012F4A] dark:text-white font-bold text-[18px]">
                        Professional afectat
                    </h2>
                    <div class="flex items-center pl-2 gap-2">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-user"></use>
                        </svg>
                        Marc Exemple
                    </div>
                    <div class="flex items-center text-[#011020] dark:text-white gap-2 pl-2">
                        <svg class="w-6 h-6 dark:text-neutral-400">
                            <use xlink:href="#icon-phone"></use>
                        </svg>
                        <span class="dark:text-white">000000000</span>
                    </div>
                    <div class="flex items-center text-[#011020] dark:text-white gap-2 pl-2">
                        <div>
                            <svg class="w-6 h-6 dark:text-neutral-400">
                                <use xlink:href="#icon-mail"></use>
                            </svg>
                        </div>
                        <span class="dark:text-white">demo2@example.com</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 border-b-1 border-b-[#AFAFAF] pb-5 pt-2">
                <div class="flex items-center gap-4">
                    <h2 class="text-[#012F4A] dark:text-white font-bold text-[18px]">Descripció</h2>
                </div>
                <div class="overflow-hidden break-words whitespace-normal break-all">
                    Tema de demostració
                </div>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end">
            <div class="w-full items-center flex gap-5 justify-between flex-col md:flex-row">
                <p class="text-sm dark:text-white">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>
                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-max sm:w-max md:w-max lg:w-max flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest Tema pendent?"
                    >
                        <div>
                            <svg class="w-6 h-6">
                                <use xlink:href="#icon-power"></use>
                            </svg>
                        </div>
                        Activar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
`,Je=`<template data-id="1" data-name="Pla de formació" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-group-user"></use></svg>
            </div>
            <a
                href="{{base}}pages/rrhh/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Pla de formació
            </a>
        </td>

        <td class="text-center px-3">
            <p>Marc Exemple</p>
        </td>

        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>
        <td class="text-center px-3">
            <p>Direcció</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Acollida" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-group-user"></use></svg>
            </div>
            <a
                href="{{base}}pages/rrhh/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Acollida
            </a>
        </td>

        <td class="text-center px-3">
            <p>Marc Exemple</p>
        </td>

        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>
        <td class="text-center px-3">
            <p>Direcció</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Organització dels torns" data-active="false">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]"><use xlink:href="#icon-group-user"></use></svg>
            </div>
            <a
                href="{{base}}pages/rrhh/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Organització dels torns
            </a>
        </td>

        <td class="text-center px-3">
            <p>Marc Exemple</p>
        </td>

        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>
        <td class="text-center px-3">
            <p>Direcció</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest centre?"
                    >
                        Activar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,et=`<template data-id="1" data-name="Climatització" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-wrench-screwdriver"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/maintenance/1/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Climatització
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div
            class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400 border-b-1 border-b-[#AFAFAF] pb-5"
        >
            <div class="flex items-center">
                <svg class="w-6 h-6 dark:text-neutral-400">
                    <use xlink:href="#icon-worker"></use>
                </svg>
                <span class="ml-2 break-words whitespace-normal break-all dark:text-white">
                    Responsable Demo
                </span>
            </div>
            <div class="flex items-center">
                <svg class="w-6 h-6 dark:text-neutral-400">
                    <use xlink:href="#icon-desc"></use>
                </svg>
                <span class="ml-2 break-words whitespace-normal break-all dark:text-white">
                    Incidència de demostració
                </span>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end dark:text-white">
            <div class="w-full items-center flex gap-5 justify-between flex-col md:flex-row">
                <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>
                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest manteniment?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="2" data-name="Il·luminació" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-wrench-screwdriver"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/maintenance/2/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Il·luminació
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
            >
                Actiu
            </p>
        </div>

        <div
            class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400 border-b-1 border-b-[#AFAFAF] pb-5"
        >
            <div class="flex items-center">
                <svg class="w-6 h-6 dark:text-neutral-400">
                    <use xlink:href="#icon-worker"></use>
                </svg>
                <span class="ml-2 break-words whitespace-normal break-all dark:text-white">
                    Responsable Demo
                </span>
            </div>
            <div class="flex items-center">
                <svg class="w-6 h-6 dark:text-neutral-400">
                    <use xlink:href="#icon-desc"></use>
                </svg>
                <span class="ml-2 break-words whitespace-normal break-all dark:text-white">
                    Incidència de demostració
                </span>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end dark:text-white">
            <div class="w-full items-center flex gap-5 justify-between flex-col md:flex-row">
                <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>
                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest manteniment?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Desactivar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<template data-id="3" data-name="Ascensor" data-active="false">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div class="flex justify-between items-center">
            <div class="flex flex-row items-center gap-5">
                <div class="bg-[#ffe7de] rounded-lg p-2">
                    <svg class="w-8 h-8 text-[#FF7E13]">
                        <use xlink:href="#icon-wrench-screwdriver"></use>
                    </svg>
                </div>
                <a
                    href="{{base}}pages/maintenance/3/index.html"
                    class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                >
                    Ascensor
                </a>
            </div>

            <p
                class="w-20 border-1 p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
            >
                Inactiu
            </p>
        </div>

        <div
            class="flex flex-col gap-3 text-[#0F172A] dark:text-neutral-400 border-b-1 border-b-[#AFAFAF] pb-5"
        >
            <div class="flex items-center">
                <svg class="w-6 h-6 dark:text-neutral-400">
                    <use xlink:href="#icon-worker"></use>
                </svg>
                <span class="ml-2 break-words whitespace-normal break-all dark:text-white">
                    Responsable Demo
                </span>
            </div>
            <div class="flex items-center">
                <svg class="w-6 h-6 dark:text-neutral-400">
                    <use xlink:href="#icon-desc"></use>
                </svg>
                <span class="ml-2 break-words whitespace-normal break-all dark:text-white">
                    Incidència de demostració
                </span>
            </div>
        </div>

        <div class="flex flex-row gap-5 justify-end dark:text-white">
            <div class="w-full items-center flex gap-5 justify-between flex-col md:flex-row">
                <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>
                <form data-demo-action="preview" method="post">
                    <button
                        type="submit"
                        class="confirmable w-full sm:w-full md:w-auto lg:w-auto flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest manteniment?"
                    >
                        <svg class="w-6 h-6">
                            <use xlink:href="#icon-power"></use>
                        </svg>
                        Activar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
`,tt=`<template data-id="1" data-name="Climatització" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-wrench-screwdriver"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/maintenance/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Climatització
            </a>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Il·luminació" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-wrench-screwdriver"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/maintenance/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Il·luminació
            </a>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-green-200 text-green-600 border-green-600 rounded-lg"
                >
                    Actiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-red-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-red-800 hover:transition-all"
                        data-confirm-message="Estàs segur que vols desactivar aquest centre?"
                    >
                        Desactivar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Ascensor" data-active="false">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-wrench-screwdriver"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/maintenance/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Ascensor
            </a>
        </td>

        <td class="text-center px-3">
            <p>Responsable Demo</p>
        </td>

        <td class="text-center px-3">
            <div class="flex items-center justify-center">
                <p
                    class="w-20 border p-1 text-center bg-red-200 text-red-600 border-red-600 rounded-lg"
                >
                    Inactiu
                </p>
            </div>
        </td>

        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <form
                    data-demo-action="preview"
                    method="post"
                    class="w-full sm:w-full md:w-auto lg:w-auto"
                >
                    <button
                        type="submit"
                        class="confirmable w-24 flex justify-center gap-3 text-white bg-green-600 rounded-lg p-2 font-semibold cursor-pointer hover:bg-green-700 hover:transition-all"
                        data-confirm-message="Estàs segur que vols activar aquest centre?"
                    >
                        Activar
                    </button>
                </form>
            </div>
        </td>
    </tr>
</template>
`,nt=`<template data-id="1" data-name="Protocol d’acollida" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2 w-full">
                    <div class="flex flex-row items-center gap-5 w-full">
                        <div class="bg-[#ffe7de] rounded-lg p-2">
                            <svg class="w-8 h-8 text-[#FF7E13]">
                                <use xlink:href="#icon-desc"></use>
                            </svg>
                        </div>
                        <div class="flex flex-col items-start">
                            <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">ALTRES</p>
                            <a
                                href="{{base}}pages/documents/1/index.html"
                                class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                            >
                                Protocol d’acollida
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3 ml-3 space-y-3">
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-desc"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Document fictici de demostració</p>
                </div>
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Anna Demo</p>
                </div>
            </div>
        </div>

        <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <a
                href="{{base}}pages/documents/1/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <a
                href="#"
                data-demo-action="unavailable"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-[#FF7E13] hover:bg-[#FE712B] text-white rounded-lg p-2 font-semibold items-center justify-center cursor-pointer transition-all"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-download"></use>
                </svg>
                Descarregar
            </a>
        </div>
    </div>
</template>

<template data-id="2" data-name="Pla de formació" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2 w-full">
                    <div class="flex flex-row items-center gap-5 w-full">
                        <div class="bg-[#ffe7de] rounded-lg p-2">
                            <svg class="w-8 h-8 text-[#FF7E13]">
                                <use xlink:href="#icon-desc"></use>
                            </svg>
                        </div>
                        <div class="flex flex-col items-start">
                            <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">ALTRES</p>
                            <a
                                href="{{base}}pages/documents/2/index.html"
                                class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                            >
                                Pla de formació
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3 ml-3 space-y-3">
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-desc"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Document fictici de demostració</p>
                </div>
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Anna Demo</p>
                </div>
            </div>
        </div>

        <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <a
                href="{{base}}pages/documents/2/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <a
                href="#"
                data-demo-action="unavailable"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-[#FF7E13] hover:bg-[#FE712B] text-white rounded-lg p-2 font-semibold items-center justify-center cursor-pointer transition-all"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-download"></use>
                </svg>
                Descarregar
            </a>
        </div>
    </div>
</template>

<template data-id="3" data-name="Guia del centre" data-active="true">
    <div
        data-clickable-element="true"
        class="shadow-md border border-[#AFAFAF] bg-white rounded-[15px] p-5 min-w-[220px] mb-5 flex flex-col gap-5 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex flex-row justify-between gap-2 w-full">
                    <div class="flex flex-row items-center gap-5 w-full">
                        <div class="bg-[#ffe7de] rounded-lg p-2">
                            <svg class="w-8 h-8 text-[#FF7E13]">
                                <use xlink:href="#icon-desc"></use>
                            </svg>
                        </div>
                        <div class="flex flex-col items-start">
                            <p class="text-[#AFAFAF] text-xs md:text-sm font-semibold">ALTRES</p>
                            <a
                                href="{{base}}pages/documents/3/index.html"
                                class="text-[#012F4A] font-bold text-[20px] dark:text-white main-link"
                            >
                                Guia del centre
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3 ml-3 space-y-3">
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-desc"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Document fictici de demostració</p>
                </div>
                <div class="flex items-center text-[#011020] dark:text-neutral-400">
                    <svg class="w-7 h-7">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <p class="ml-2 dark:text-white">Anna Demo</p>
                </div>
            </div>
        </div>

        <p class="text-sm">Creat: 21/10/2026 | Actualitzat: 21/10/2026</p>

        <div class="flex flex-row gap-5 justify-end">
            <a
                href="{{base}}pages/documents/3/edit.html"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border-1 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-square-pen"></use>
                </svg>
                Editar
            </a>
            <a
                href="#"
                data-demo-action="unavailable"
                class="w-full sm:w-full md:w-[50%] flex gap-3 bg-[#FF7E13] hover:bg-[#FE712B] text-white rounded-lg p-2 font-semibold items-center justify-center cursor-pointer transition-all"
            >
                <svg class="w-6 h-6">
                    <use xlink:href="#icon-download"></use>
                </svg>
                Descarregar
            </a>
        </div>
    </div>
</template>
`,rt=`<template data-id="1" data-name="Protocol d’acollida" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-desc"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/documents/1/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Protocol d’acollida
            </a>
        </td>
        <td class="text-center px-3">
            <p>ALTRES</p>
        </td>
        <td class="text-center px-3">
            <p class="truncate">Document fictici de demostració</p>
        </td>
        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>
        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>
        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/documents/1/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <a
                    href="#"
                    data-demo-action="unavailable"
                    class="flex gap-3 bg-[#FF7E13] text-white rounded-lg p-2 font-semibold items-center justify-center cursor-pointer w-32 hover:bg-[#FE712B] transition-all"
                >
                    Descarregar
                </a>
            </div>
        </td>
    </tr>
</template>

<template data-id="2" data-name="Pla de formació" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-desc"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/documents/2/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Pla de formació
            </a>
        </td>
        <td class="text-center px-3">
            <p>ALTRES</p>
        </td>
        <td class="text-center px-3">
            <p class="truncate">Document fictici de demostració</p>
        </td>
        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>
        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>
        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/documents/2/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <a
                    href="#"
                    data-demo-action="unavailable"
                    class="flex gap-3 bg-[#FF7E13] text-white rounded-lg p-2 font-semibold items-center justify-center cursor-pointer w-32 hover:bg-[#FE712B] transition-all"
                >
                    Descarregar
                </a>
            </div>
        </td>
    </tr>
</template>

<template data-id="3" data-name="Guia del centre" data-active="true">
    <tr
        data-clickable-element="true"
        class="mb-10 bg-white border-b border-[#AFAFAF] text-[#0F172A] hover:bg-[#eeeeee65] hover:transition-all dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700 cursor-pointer"
    >
        <td class="flex items-center gap-2 p-3">
            <div class="bg-[#ffe7de] rounded-lg p-2">
                <svg class="w-8 h-8 text-[#FF7E13]">
                    <use xlink:href="#icon-desc"></use>
                </svg>
            </div>
            <a
                href="{{base}}pages/documents/3/index.html"
                class="text-[#012F4A] font-bold text-[16px] dark:text-white main-link"
            >
                Guia del centre
            </a>
        </td>
        <td class="text-center px-3">
            <p>ALTRES</p>
        </td>
        <td class="text-center px-3">
            <p class="truncate">Document fictici de demostració</p>
        </td>
        <td class="text-center px-3">
            <p>Anna Demo</p>
        </td>
        <td class="text-center px-3">
            <p>21/10/2026</p>
        </td>
        <td class="px-3">
            <div class="flex items-center justify-center gap-2 p-2">
                <a
                    href="{{base}}pages/documents/3/edit.html"
                    class="flex gap-3 bg-white text-[#011020] rounded-lg p-2 font-semibold items-center justify-center cursor-pointer border w-24 border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-500 dark:text-white dark:hover:bg-neutral-600"
                >
                    Editar
                </a>
                <a
                    href="#"
                    data-demo-action="unavailable"
                    class="flex gap-3 bg-[#FF7E13] text-white rounded-lg p-2 font-semibold items-center justify-center cursor-pointer w-32 hover:bg-[#FE712B] transition-all"
                >
                    Descarregar
                </a>
            </div>
        </td>
    </tr>
</template>
`,at={users:{card:Me,table:Re},centers:{card:Be,table:Ue},courses:{card:ze,table:He},projects:{card:Ze,table:Ke},"general-services":{card:Ve,table:Ge},"external-contacts":{card:We,table:$e},"complementary-services":{card:Ye,table:Xe},rrhh:{card:Qe,table:Je},maintenance:{card:et,table:tt},documents:{card:nt,table:rt}},st={users:"Usuaris",centers:"Centres",projects:"Projectes",courses:"Cursos","general-services":"Serveis generals","external-contacts":"Contactes externs","complementary-services":"Serveis complementaris",rrhh:"Temes pendents RRHH",maintenance:"Manteniments",documents:"Documents"};function _e(j){return Ie[j]||[]}function ge(j){return j.name||j.contact_person||j.topic||""}function ye(j,u){const f=at[j]?.[u];if(!f)return[];const g=document.createElement("template");g.innerHTML=f.replaceAll("{{base}}",Ae().href);const E=[],b=g.content.querySelectorAll("template[data-id]");for(const h of b)E.push({id:h.dataset.id,name:h.dataset.name,active:h.dataset.active==="true",html:h.innerHTML});return E}function we(j){let u=String(j);return/^[=+@\-\t\r]/.test(u)&&(u="'"+u),'"'+u.replaceAll('"','""')+'"'}function it(){const u=(document.body.dataset.demoPath||"/").split("/")[1],f=["Nom;Estat"];for(const p of _e(u)){const c=we(ge(p)),e=p.is_active?"Actiu":"Inactiu";f.push(`${c};${we(e)}`)}const g="\uFEFF"+f.join(`\r
`),E=new Blob([g],{type:"text/csv;charset=utf-8"}),b=URL.createObjectURL(E),h=document.createElement("a");h.href=b,h.download="demo.csv",h.click(),setTimeout(()=>URL.revokeObjectURL(b),1e3)}function ot(){document.addEventListener("click",j=>{const u=j.target.closest("a[data-demo-action]");u&&(j.preventDefault(),u.dataset.demoAction==="export"?it():me("Acció de demostració: aquesta operació necessita el servidor de la intranet."))})}const lt=`<dialog
    class="welcome-dialog w-11/12 md:w-[40%] max-w-[450px] md:max-w-none bg-white rounded-lg dark:bg-neutral-800 text-[#011020] dark:text-white"
    aria-labelledby="welcome-title"
    aria-describedby="welcome-description"
>
    <div class="flex items-center justify-between gap-3 bg-orange-500 rounded-t-lg p-3">
        <div class="flex items-center gap-3">
            <div
                class="w-12 h-12 shrink-0 bg-white rounded-lg flex items-center justify-center text-[#FF7E13] dark:bg-neutral-800"
            >
                <svg
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    aria-hidden="true"
                >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 9h18m-13 4-2 2 2 2m8-4 2 2-2 2m-3-4-2 4"
                    />
                </svg>
            </div>
            <h1 id="welcome-title" class="text-2xl font-bold text-white">Demo de la intranet</h1>
        </div>
        <button
            type="button"
            class="cursor-pointer shrink-0"
            data-close-welcome
            aria-label="Cerrar aviso"
        >
            <svg class="w-8 h-8 text-white" aria-hidden="true">
                <use href="#icon-cross"></use>
            </svg>
        </button>
    </div>
    <hr class="border-orange-800 border-2" />

    <div class="welcome-body p-5 overflow-y-auto">
        <section class="flex items-start gap-3 mb-5">
            <div
                class="w-12 h-12 shrink-0 bg-[#ffe7de] rounded-lg flex items-center justify-center text-[#FF7E13]"
            >
                <svg class="w-8 h-8" aria-hidden="true">
                    <use href="#icon-eye"></use>
                </svg>
            </div>
            <div>
                <h2 class="text-lg font-semibold">Solo frontend</h2>
                <p id="welcome-description" class="text-sm mt-1">
                    Esta web es una demostración de la interfaz de Vallparadís. Puedes explorar sus
                    pantallas con datos de ejemplo, sin backend ni base de datos.
                </p>
            </div>
        </section>

        <section class="flex items-start gap-3 mb-5">
            <div
                class="w-12 h-12 shrink-0 bg-[#ffe7de] rounded-lg flex items-center justify-center text-[#FF7E13]"
            >
                <svg class="w-8 h-8" aria-hidden="true">
                    <use href="#icon-warning"></use>
                </svg>
            </div>
            <div>
                <h2 class="text-lg font-semibold">Funcionalidades limitadas</h2>
                <p class="text-sm mt-1">
                    Muchas funcionalidades están limitadas porque esta versión es solo frontend. Los
                    formularios, las subidas de archivos y otras acciones no guardan ni envían
                    datos.
                </p>
            </div>
        </section>

        <section class="flex items-start gap-3">
            <div
                class="w-12 h-12 shrink-0 bg-[#ffe7de] rounded-lg flex items-center justify-center text-[#FF7E13]"
            >
                <svg class="w-8 h-8" aria-hidden="true">
                    <use href="#icon-desc"></use>
                </svg>
            </div>
            <div>
                <h2 class="text-lg font-semibold">Prueba el proyecto completo</h2>
                <p class="text-sm mt-1">
                    Visita el repositorio de GitHub, descarga el proyecto y sigue las instrucciones
                    de instalación para montarlo en tu equipo y probar todas sus funcionalidades.
                </p>
            </div>
        </section>

        <div class="mt-5 flex flex-col sm:flex-row justify-end gap-3">
            <button
                type="button"
                class="bg-white text-[#011020] rounded-lg p-2 font-semibold flex items-center justify-center cursor-pointer gap-2 border border-[#AFAFAF] dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                data-close-welcome
                autofocus
            >
                Explorar la demo
            </button>
            <a
                class="bg-[#FF7E13] text-white rounded-lg p-2 font-semibold flex items-center justify-center cursor-pointer gap-2 hover:bg-[#FE712B]"
                href="https://github.com/Ale2484/intranet-vallparadis"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver proyecto en GitHub
                <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14 4h6v6m0-6L10 14m10 0v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"
                    />
                </svg>
            </a>
        </div>
    </div>
</dialog>
`,ke="vallparadis-welcome-seen";function ct(){try{if(sessionStorage.getItem(ke))return}catch{}const j=document.createElement("template");j.innerHTML=lt;const u=j.content.querySelector("dialog");document.body.append(u);const f=document.body.style.overflow;document.body.style.overflow="hidden";function g(){u.close()}u.querySelectorAll("[data-close-welcome]").forEach(E=>{E.addEventListener("click",g)}),u.addEventListener("close",()=>{document.body.style.overflow=f,u.remove()}),u.showModal();try{sessionStorage.setItem(ke,"true")}catch{}}function ut(){const j=document.getElementById("sidebar"),u=document.querySelectorAll('[id="toggleMenu"]'),f=document.querySelectorAll(".menu-text");if(!j||u.length===0)return;function g(E){j.classList.toggle("w-20",!E),j.classList.toggle("w-72",E),j.classList.toggle("hidden",!E);for(const b of f)b.classList.toggle("hidden",!E);for(const b of u)b.setAttribute("aria-expanded",String(E)),b.querySelector("svg")?.classList.toggle("rotate-180",E)}for(const E of u)E.addEventListener("click",()=>{g(j.classList.contains("w-20"))});document.addEventListener("click",E=>{const b=Array.from(u).some(h=>h.contains(E.target));!j.contains(E.target)&&!b&&g(!1)})}function dt(){const j=document.querySelectorAll("[data-dropdown-content-id]");for(const u of j){const f=document.getElementById(u.dataset.dropdownContentId);f&&(u.addEventListener("click",()=>f.classList.toggle("hidden")),document.addEventListener("click",g=>{!u.contains(g.target)&&!f.contains(g.target)&&f.classList.add("hidden")}))}}function ft(){document.querySelectorAll(".open-modal-button").forEach(j=>{j.addEventListener("click",()=>{document.getElementById(j.dataset.modalId)?.classList.remove("hidden")})}),document.querySelectorAll(".close-modal-button").forEach(j=>{j.addEventListener("click",()=>{j.closest(".fixed.inset-0")?.classList.add("hidden")})})}function pt(){const j=document.getElementById("confirmable-modal"),u=document.getElementById("confirmable-message-container"),f=document.getElementById("send-confirmable-modal"),g=document.getElementById("close-confirmable-modal");if(!j||!u||!f||!g)return;let E=null;document.addEventListener("click",b=>{const h=b.target.closest(".confirmable");h&&(b.preventDefault(),E=h.closest("form"),u.textContent=h.dataset.confirmMessage||"",j.classList.remove("hidden"))}),g.addEventListener("click",()=>{E=null,j.classList.add("hidden")}),f.addEventListener("click",()=>{E?.requestSubmit()})}function ht(){document.addEventListener("click",j=>{if(j.target.closest("a, button, input, select, textarea, label"))return;const f=j.target.closest('[data-clickable-element="true"]')?.querySelector(".main-link");f&&f.click()})}function mt(){const j=document.getElementById("theme-toggle");j&&j.addEventListener("click",()=>{const u=document.documentElement.classList.toggle("dark");localStorage.setItem("theme",u?"dark":"light")})}function gt(){const j=document.querySelectorAll("button.togglePassword");for(const u of j){const f=document.getElementById(u.dataset.idInput),g=u.querySelector("use");!f||!g||u.addEventListener("click",()=>{const E=f.type==="password";f.type=E?"text":"password",g.setAttribute("xlink:href",E?"#icon-eye-slash":"#icon-eye")})}}function vt(){const j=document.querySelectorAll("[data-change-content-to][data-hidden-content]");for(const u of j){const f=document.getElementById(u.dataset.changeContentTo),g=document.getElementById(u.dataset.hiddenContent),E=u.closest(".fixed.inset-0")?.querySelector(".close-modal-button");!f||!g||(u.addEventListener("click",()=>{f.classList.remove("hidden"),g.classList.add("hidden")}),E?.addEventListener("click",()=>{f.classList.add("hidden"),g.classList.remove("hidden")}))}}function ue(){return document.cookie.split("; ").find(f=>f.startsWith("view_type="))==="view_type=table"?"table":"card"}function bt(j){const f=new Date(Date.now()+2592e6).toUTCString();document.cookie=`view_type=${j}; path=/; expires=${f}`}function fe(j){return String(j||"").trim().toLocaleLowerCase("ca")}function xt(j,u,f){const g=fe(u);return j.filter(E=>fe(E.name).includes(g)?f==="active"?E.active:f==="inactive"?!E.active:!0:!1)}function yt(j,u){const f=[...j];return u==="az"?f.sort((g,E)=>g.name.localeCompare(E.name,"ca")):u==="za"?f.sort((g,E)=>E.name.localeCompare(g.name,"ca")):(u==="oldest-first"||u==="first-modified")&&f.reverse(),f}function wt(){const j=document.querySelector(".searchForm");if(!j)return;const u=j.querySelector('input[type="search"]'),f=document.getElementById("filterContainer"),g=document.getElementById("changeView"),E=document.querySelector('[data-demo-layout="card"]'),b=document.querySelector('[data-demo-layout="table"]');if(!u||!E||!b)return;const h=j.dataset.type,p={card:ye(h,"card"),table:ye(h,"table")};function c(r,l){const s=f?.querySelector(`input[name="${r}"]:checked`);return s?s.id:l}function e(){const r=ue(),l=c("status","all"),s=c("order","recent-first"),a=xt(p[r],u.value,l),i=yt(a,s),o=(r==="table"?b:E).querySelector(".resultContainer");if(i.length>0)o.innerHTML=i.map(x=>x.html).join("");else if(r==="table"){const x=b.querySelectorAll("th").length;o.innerHTML=`<tr><td colspan="${x}" class="text-center py-4 dark:text-white">No hi ha resultats</td></tr>`}else o.innerHTML='<p class="dark:text-white">No hi ha resultats</p>'}function t(r){document.documentElement.dataset.demoView=r,E.classList.toggle("hidden",r!=="card"),b.classList.toggle("hidden",r!=="table");const l=g?.querySelector("use");l&&l.setAttribute("xlink:href",r==="card"?"#icon-table":"#icon-square"),e()}const n=new URLSearchParams(window.location.search).get("status");if(n==="active"||n==="inactive"){const r=f?.querySelector(`#${n}`);r&&(r.checked=!0)}u.addEventListener("input",e),f?.addEventListener("change",e),j.addEventListener("submit",r=>{r.preventDefault(),e()}),g?.addEventListener("click",()=>{const r=ue()==="card"?"table":"card";bt(r),t(r)}),window.addEventListener("pageshow",()=>t(ue())),t(ue())}function kt(){const j=document.getElementById("general-search"),u=document.getElementById("general-results"),f=j?.querySelector('input[type="search"]');if(!j||!f||!u)return;function g(){const E=fe(f.value);if(u.replaceChildren(),u.classList.toggle("hidden",E===""),!!E){for(const[b,h]of Object.entries(st)){const p=_e(b).filter(t=>fe(ge(t)).includes(E));if(p.length===0)continue;const c=document.createElement("div");c.className="flex items-center justify-between mt-2";const e=document.createElement("p");if(e.className="text-[#012F4A] dark:text-neutral-200 font-bold",e.textContent=`${h}:`,c.append(e),p.length>3){const t=document.createElement("span");t.className="bg-[#ffe7de] text-[#FF7E13] text-sm rounded-full px-2",t.textContent=`+${p.length-3}`,c.append(t)}u.append(c);for(const t of p.slice(0,3)){const n=document.createElement("a");n.href=he(`/${b}/${t.id}`),n.className="block border-b border-[#E6E5DE] p-2 pl-5 dark:text-white",n.textContent=ge(t),u.append(n)}}if(u.childElementCount===0){const b=document.createElement("p");b.className="text-center pt-3 dark:text-white",b.textContent="No hi ha resultats",u.append(b)}}}f.addEventListener("input",g),j.addEventListener("submit",E=>{E.preventDefault(),g()}),document.addEventListener("click",E=>{j.contains(E.target)||u.classList.add("hidden")})}function At(){const j=document.getElementById("dropZoneLeft"),u=document.getElementById("dropZoneRight"),f=document.getElementById("userIds");if(!j||!u||!f)return;const g=j.closest("div"),E=u.closest("div"),b=document.querySelectorAll(".information-drop");let h=null;function p(e){j.classList.toggle("dragStartleft",e),u.classList.toggle("dragStartRight",e),b.forEach(t=>t.classList.toggle("hidden",!e))}function c(e,t){if(!h||h.parentElement===e)return;const n=h.dataset.id;let r=f.value.split(",").filter(Boolean);t&&!r.includes(n)?r.push(n):t||(r=r.filter(l=>l!==n)),f.value=r.join(","),h.classList.add("mb-3"),e.append(h),e.querySelector(".no-registered-users")?.classList.add("hidden"),h=null}document.querySelectorAll('[draggable="true"]').forEach(e=>{e.addEventListener("dragstart",()=>{h=e,p(!0)}),e.addEventListener("dragend",()=>p(!1))}),j.addEventListener("dragover",e=>e.preventDefault()),u.addEventListener("dragover",e=>e.preventDefault()),j.addEventListener("drop",e=>{e.preventDefault(),c(g,!0)}),u.addEventListener("drop",e=>{e.preventDefault(),c(E,!1)})}function _t(){document.querySelectorAll(".searchUser").forEach(j=>{const u=j.closest("div");j.addEventListener("input",()=>{const f=j.value.toLocaleLowerCase("ca");let g=0;for(const p of u.querySelectorAll(".user-item")){const e=p.querySelector(".user-name").textContent.toLocaleLowerCase("ca").includes(f);p.classList.toggle("hidden",!e),e&&(g+=1)}const E=u.querySelector(".no-user-message"),b=u.querySelector(".no-registered-users:not(.hidden)"),h=g===0&&!b;E?.classList.toggle("hidden",!h)})})}function Et(){const j=document.getElementById("rich-editor-container");if(!j)return;const u=new window.Quill(j,{theme:"snow",placeholder:"Escriu aquí el personal i els seus horaris...",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],["bold","italic","underline"],[{align:[]}],[{background:[]}],[{color:[]}]]}}),f=document.getElementById(j.dataset.idInput);f&&(u.root.innerHTML=f.value,u.on("text-change",()=>{f.value=u.root.innerHTML}))}function Ot(){const j=document.querySelectorAll("div[data-question]");for(const u of j)u.addEventListener("click",()=>{const f=u.dataset.question,g=u.dataset.value,E=document.querySelectorAll(`div[data-question="${f}"]`);for(const e of E)e.querySelector("svg")?.remove();const b="http://www.w3.org/2000/svg",h=document.createElementNS(b,"svg"),p=document.createElementNS(b,"use");h.setAttribute("class","w-6 h-6"),p.setAttribute("href","#icon-cross"),h.append(p),u.append(h);const c=document.querySelector(`input[name="${f}"][value="${g}"]`);c&&(c.checked=!0)})}const jt=`<div
    class="mt-2 border border-[#AFAFAF] rounded-lg p-2 flex items-center gap-4 dark:border-neutral-600"
>
    <svg class="w-7 h-7 text-[#011020] dark:text-white">
        <use href="#icon-document"></use>
    </svg>
    <div class="w-full flex justify-between items-center">
        <div>
            <p data-file-name class="font-semibold text-[#011020] dark:text-white"></p>
            <p data-file-size class="text-[#AFAFAF]"></p>
        </div>
        <button type="button" data-remove-file aria-label="Eliminar arxiu">
            <svg class="w-7 h-7 text-[#011020] cursor-pointer hover:text-red-600 dark:text-white">
                <use href="#icon-cross"></use>
            </svg>
        </button>
    </div>
</div>
`;function Ft(){const j=document.querySelectorAll(".upload-file-button[data-file-input-id]"),u=document.createElement("template");u.innerHTML=jt;for(const g of j){let p=function(){b.replaceChildren(),h.forEach((e,t)=>{const n=u.content.cloneNode(!0);n.querySelector("[data-file-name]").textContent=e.name,n.querySelector("[data-file-size]").textContent=`${(e.size/(1024*1024)).toFixed(2)} MB`,n.querySelector("[data-remove-file]").addEventListener("click",()=>{h.splice(t,1),p()}),b.append(n)});const c=new DataTransfer;for(const e of h)c.items.add(e);E.files=c.files};var f=p;const E=document.getElementById(g.dataset.fileInputId),b=document.getElementById(g.dataset.showUploadedFilesId);if(!E||!b)continue;let h=[];g.addEventListener("click",()=>E.click()),E.addEventListener("change",()=>{h=Array.from(E.files),p()})}}function qt(){const j=document.getElementById("canvas");if(!j)return;const u=j.getContext("2d"),f=document.getElementById("colorPicker"),g=document.getElementById("brushSize"),E=document.getElementById("clearCanvas"),b=document.getElementById("canvas-form"),h=document.getElementById("profile_photo_data");let p=!1;function c(){p=!1,u.beginPath()}E.addEventListener("click",()=>{u.clearRect(0,0,j.width,j.height)}),j.addEventListener("mousedown",e=>{p=!0,u.beginPath(),u.moveTo(e.offsetX,e.offsetY)}),j.addEventListener("mousemove",e=>{p&&(u.lineWidth=Number(g.value),u.lineCap="round",u.strokeStyle=f.value,u.lineTo(e.offsetX,e.offsetY),u.stroke())}),j.addEventListener("mouseup",c),j.addEventListener("mouseleave",c),b?.addEventListener("submit",()=>{h.value=j.toDataURL("image/png")})}function Tt(){const j=document.getElementById("upload-photo-button"),u=document.getElementById("profile_photo_file_input"),f=document.getElementById("profile-photo-form");!j||!u||!f||(j.addEventListener("click",()=>u.click()),u.addEventListener("change",()=>{u.files.length>0&&f.requestSubmit()}))}function Nt(){qe(),ot(),ut(),dt(),ft(),pt(),ht(),mt(),gt(),vt(),wt(),kt(),At(),_t(),Et(),Ot(),Ft(),qt(),Tt(),ct()}Nt()});export default St();
