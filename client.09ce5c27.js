webpackJsonp([0,2],[function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(27)("wks"),o=e(29),s=e(0).Symbol,i="function"==typeof s,a=t.exports=function(t){return r[t]||(r[t]=i&&s[t]||(i?s:o)("Symbol."+t))};a.store=r},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(11),o=e(25);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(4),o=e(59),s=e(73),i=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=s(n,!0),r(e),o)try{return i(t,n,e)}catch(a){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(27)("keys"),o=e(29);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(60),o=e(8);t.exports=function(t){return r(o(t))}},,function(t,n,e){"use strict";n.a={"en-US":e(36),"zh-CN":e(44),"zh-TW":e(45),"hu-HU":e(40),"bg-BG":e(34),"de-DE":e(35),"es-ES":e(37),"pt-BR":e(42),"fr-FR":e(39),"it-IT":e(41),"ru-RU":e(43),"fa-IR":e(38)}},function(t,n,e){"use strict";function r(){if(!location.search)return{};var t=location.search.substr(1).split("&"),n={},e=!0,r=!1,o=void 0;try{for(var i,a=s()(t);!(e=(i=a.next()).done);e=!0){var u=i.value,c=u.split("=");n[c[0]]=c[1]}}catch(f){r=!0,o=f}finally{try{!e&&a["return"]&&a["return"]()}finally{if(r)throw o}}return n}var o=e(50),s=e.n(o);n.a=r},function(t,n,e){t.exports={"default":e(52),__esModule:!0}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(10),o=e(0).document,s=r(o)&&r(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0),o=e(2),s=e(57),i=e(3),a="prototype",u=function(t,n,e){var c,f,l,p=t&u.F,h=t&u.G,v=t&u.S,d=t&u.P,m=t&u.B,y=t&u.W,g=h?o:o[n]||(o[n]={}),x=g[a],b=h?r:v?r[n]:(r[n]||{})[a];h&&(e=n);for(c in e)f=!p&&b&&void 0!==b[c],f&&c in g||(l=f?b[c]:e[c],g[c]=h&&"function"!=typeof b[c]?e[c]:m&&f?s(l,r):y&&b[c]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[a]=t[a],n}(l):d&&"function"==typeof l?s(Function.call,l):l,d&&((g.virtual||(g.virtual={}))[c]=l,t&u.R&&x&&!x[c]&&i(x,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n,e){"use strict";var r=e(63),o=e(22),s=e(69),i=e(3),a=e(6),u=e(7),c=e(61),f=e(26),l=e(66),p=e(1)("iterator"),h=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",m="values",y=function(){return this};t.exports=function(t,n,e,g,x,b,w){c(e,n,g);var _,j,O,S=function(t){if(!h&&t in k)return k[t];switch(t){case d:return function(){return new e(this,t)};case m:return function(){return new e(this,t)}}return function(){return new e(this,t)}},T=n+" Iterator",L=x==m,M=!1,k=t.prototype,E=k[p]||k[v]||x&&k[x],C=E||S(x),P=x?L?S("entries"):C:void 0,A="Array"==n?k.entries||E:E;if(A&&(O=l(A.call(new t)),O!==Object.prototype&&(f(O,T,!0),r||a(O,p)||i(O,p,y))),L&&E&&E.name!==m&&(M=!0,C=function(){return E.call(this)}),r&&!w||!h&&!M&&k[p]||i(k,p,C),u[n]=C,u[T]=y,x)if(_={values:L?C:S(m),keys:b?C:S(d),entries:P},w)for(j in _)j in k||s(k,j,_[j]);else o(o.P+o.F*(h||M),n,_);return _}},function(t,n,e){var r=e(67),o=e(21);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(11).f,o=e(6),s=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,s)&&r(t,s,{configurable:!0,value:n})}},function(t,n,e){var r=e(0),o="__core-js_shared__",s=r[o]||(r[o]={});t.exports=function(t){return s[t]||(s[t]={})}},function(t,n,e){var r=e(8);t.exports=function(t){return Object(r(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){"use strict";var r=e(15),o=e.n(r),s=e(32),i=e(47),a=e.n(i),u=(e(17),e(16));o.a.config.debug=!0,o.a.use(s.a,{locale:"en-US",locales:u.a}),new o.a({el:"#app",render:function(t){return t(a.a)}})},function(t,n,e){"use strict";var r=e(18),o=e.n(r),s=e(17),i=e(16),a=(new Date).getTime(),u=[{name:"egoist",birth:a-6e4},{name:"chelly",birth:a-132e4},{name:"aimer",birth:a-612e4},{name:"young boy",birth:a-1e3},{name:"old man",birth:new Date("2014-01-01")}];n["default"]={data:function(){return{people:u,currentLang:e.i(s.a)().lang||"en-US",langs:o()(i.a)}},methods:{handleChange:function(t){this.currentLang=t.target.value},format:function(t){return""}}}},function(t,n,e){"use strict";function r(t,n){if("just now"===t)return n;var e=Math.round(t);return Array.isArray(n)?e>1?n[1].replace(/%s/,e):n[0].replace(/%s/,e):n.replace(/%s/,e)}function o(t){var n=new Date(t);return n.toLocaleString()}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.name,s=void 0===e?"timeago":e,i=n.locale,v=void 0===i?"en-US":i,d=n.locales,m=void 0===d?null:d;if(!m||0===a()(m).length)throw new TypeError("Expected locales to have at lease one locale.");var y={props:{since:{required:!0},locale:String,maxTime:Number,autoUpdate:Number,format:Function},data:function(){return{now:(new Date).getTime()}},computed:{currentLocale:function(){var t=m[this.locale||v];return t?t:m[v]},sinceTime:function(){return new Date(this.since).getTime()},timeago:function(){var t=this.now/1e3-this.sinceTime/1e3;if(this.maxTime&&t>this.maxTime)return clearInterval(this.interval),this.format?this.format(this.sinceTime):o(this.sinceTime);var n=t<=5?r("just now",this.currentLocale[0]):t<u?r(t,this.currentLocale[1]):t<c?r(t/u,this.currentLocale[2]):t<f?r(t/c,this.currentLocale[3]):t<l?r(t/f,this.currentLocale[4]):t<p?r(t/l,this.currentLocale[5]):t<h?r(t/p,this.currentLocale[6]):r(t/h,this.currentLocale[7]);return n}},mounted:function(){this.autoUpdate&&this.update()},render:function(t){return t("span",this.timeago)},methods:{update:function(){var t=this,n=1e3*this.autoUpdate;this.interval=setInterval(function(){t.now=(new Date).getTime()},n)}},beforeDestroy:function(){clearInterval(this.interval),this.interval=null}};t.component(s,y)}var i=e(18),a=e.n(i);n.a=s;var u=60,c=60*u,f=24*c,l=7*f,p=30*f,h=365*f},function(t,n){},function(t,n){t.exports=["току-що",["преди %s секунда","преди %s секунди"],["преди %s минута","преди %s минути"],["преди %s час","преди %s часа"],["преди %s ден","преди %s дни"],["преди %s седмица","преди %s седмици"],["преди %s месец","преди %s месеца"],["преди %s година","преди %s години"]]},function(t,n){t.exports=["jetzt gerade",["vor %s Sekunde","vor %s Sekunden"],["vor %s Minute","vor %s Minuten"],["vor %s Stunde","vor %s Stunden"],["vor %s Tag","vor %s Tagen"],["vor %s Woche","vor %s Wochen"],["vor %s Monat","vor %s Monaten"],["vor %s Jahr","vor %s Jahren"]]},function(t,n){t.exports=["just now",["%s second ago","%s seconds ago"],["%s minute ago","%s minutes ago"],["%s hour ago","%s hours ago"],["%s day ago","%s days ago"],["%s week ago","%s weeks ago"],["%s month ago","%s months ago"],["%s year ago","%s years ago"]]},function(t,n){t.exports=["ahora",["hace %s segundo","hace %s segundos"],["hace %s minuto","hace %s minutos"],["hace %s hora","hace %s horas"],["hace %s día","hace %s días"],["hace %s semana","hace %s semanas"],["hace %s mes","hace %s meses"],["hace %s año","hace %s años"]]},function(t,n){t.exports=["همین حالا",["%s ثانیه پیش","%s ثانیه پیش"],["%s دقیقه پیش","%s دقیقه پیش"],["%s ساعت پیش","%s ساعت پیش"],["%s روز پیش","%s روز پیش"],["%s هفته پیش","%s هفته پیش"],["%s ماه پیش","%s ماه پیش"],["%s سال پیش","%s سال پیش"]]},function(t,n){t.exports=["à l'instant",["il y a %s seconde","il y a %s secondes"],["il y a %s minute","il y a %s minutes"],["il y a %s heure","il y a %s heures"],["il y a %s jour","il y a %s jours"],["il y a %s semaine","il y a %s semaines"],["il y a %s mois","il y a %s mois"],["il y a %s an","il y a %s ans"]]},function(t,n){t.exports=["pont most","%s másodperce","%s perce","%s órája","%s napja","%s hete","%s hónapja","%s éve"]},function(t,n){t.exports=["adesso",["%s secondo fa","%s secondi fa"],["%s minuto fa","%s minuti fa"],["%s ora fa","%s ore fa"],["%s giorno fa","%s giorni fa"],["%s settimana fa","%s settimane fa"],["%s mese fa","%s mesi fa"],["%s anno fa","%s anni fa"]]},function(t,n){t.exports=["agora mesmo",["%s segundo atrás","%s segundos atrás"],["%s minuto atrás","%s minutos atrás"],["%s hora atrás","%s horas atrás"],["%s dia atrás","%s dias atrás"],["%s semana atrás","%s semanas atrás"],["%s mês atrás","%s meses atrás"],["%s ano atrás","%s anos atrás"]]},function(t,n){t.exports=["только что",["%s секунда назад","%s секунд назад"],["%s минута назад","%s минут назад"],["%s час назад","%s часов назад"],["%s день назад","%s дней назад"],["%s неделя назад","%s недель назад"],["%s месяц","%s месяцев назад"],["%s год назад","%s лет назад"]]},function(t,n){t.exports=["刚刚","%s 秒前","%s 分钟前","%s 小时前","%s 天前","%s 周前","%s 月前","%s 年前"]},function(t,n){t.exports=["剛剛","%s 秒前","%s 分鐘前","%s 小時前","%s 天前","%s 週前","%s 月前","%s 年前"]},,function(t,n,e){var r,o;e(33),r=e(31);var s=e(48);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=r},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"app"},[_h("header",{staticClass:"header"},["\n    Choose your language:\n    ",_h("select",{on:{change:handleChange}},[_l(langs,function(t){return _h("option",{domProps:{value:t,selected:t===currentLang}},["\n        "+_s(t)+"\n      "])})])])," ",_h("div",{staticClass:"people"},[_l(people,function(t){return _h("div",{staticClass:"person"},[_h("span",{staticClass:"name"},[_s(t.name)])," ",_h("div",{staticClass:"meta"},["\n        was born at\n        ",_h("timeago",{staticClass:"timeago",attrs:{"auto-update":1,"max-time":31536e3,locale:currentLang,since:t.birth}})])])})])])},staticRenderFns:[]}},,function(t,n,e){t.exports={"default":e(51),__esModule:!0}},function(t,n,e){e(79),e(78),t.exports=e(75)},function(t,n,e){e(77),t.exports=e(2).Object.keys},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(14),o=e(72),s=e(71);t.exports=function(t){return function(n,e,i){var a,u=r(n),c=o(u.length),f=s(i,c);if(t&&e!=e){for(;c>f;)if(a=u[f++],a!=a)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(19),o=e(1)("toStringTag"),s="Arguments"==r(function(){return arguments}()),i=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=i(n=Object(t),o))?e:s?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},function(t,n,e){var r=e(53);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){t.exports=e(0).document&&document.documentElement},function(t,n,e){t.exports=!e(5)&&!e(9)(function(){return 7!=Object.defineProperty(e(20)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(64),o=e(25),s=e(26),i={};e(3)(i,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(i,{next:o(1,e)}),s(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=!0},function(t,n,e){var r=e(4),o=e(65),s=e(21),i=e(12)("IE_PROTO"),a=function(){},u="prototype",c=function(){var t,n=e(20)("iframe"),r=s.length,o="<",i=">";for(n.style.display="none",e(58).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),c=t.F;r--;)delete c[u][s[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(a[u]=r(t),e=new a,a[u]=null,e[i]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(11),o=e(4),s=e(24);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,i=s(n),a=i.length,u=0;a>u;)r.f(t,e=i[u++],n[e]);return t}},function(t,n,e){var r=e(6),o=e(28),s=e(12)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,n,e){var r=e(6),o=e(14),s=e(55)(!1),i=e(12)("IE_PROTO");t.exports=function(t,n){var e,a=o(t),u=0,c=[];for(e in a)e!=i&&r(a,e)&&c.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~s(c,e)||c.push(e));return c}},function(t,n,e){var r=e(22),o=e(2),s=e(9);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],i={};i[t]=n(e),r(r.S+r.F*s(function(){e(1)}),"Object",i)}},function(t,n,e){t.exports=e(3)},function(t,n,e){var r=e(13),o=e(8);t.exports=function(t){return function(n,e){var s,i,a=String(o(n)),u=r(e),c=a.length;return u<0||u>=c?t?"":void 0:(s=a.charCodeAt(u),s<55296||s>56319||u+1===c||(i=a.charCodeAt(u+1))<56320||i>57343?t?a.charAt(u):s:t?a.slice(u,u+2):(s-55296<<10)+(i-56320)+65536)}}},function(t,n,e){var r=e(13),o=Math.max,s=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):s(t,n)}},function(t,n,e){var r=e(13),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(56),o=e(1)("iterator"),s=e(7);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||s[r(t)]}},function(t,n,e){var r=e(4),o=e(74);t.exports=e(2).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},function(t,n,e){"use strict";var r=e(54),o=e(62),s=e(7),i=e(14);t.exports=e(23)(Array,"Array",function(t,n){this._t=i(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(28),o=e(24);e(68)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){"use strict";var r=e(70)(!0);e(23)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(76);for(var r=e(0),o=e(3),s=e(7),i=e(1)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var c=a[u],f=r[c],l=f&&f.prototype;l&&!l[i]&&o(l,i,c),s[c]=s.Array}},function(t,n,e){t.exports=e(30)}],[80]);
//# sourceMappingURL=client.09ce5c27.js.map