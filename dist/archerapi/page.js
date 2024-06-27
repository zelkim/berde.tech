(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},631:e=>{e.exports={style:{fontFamily:"'__JetBrains_Mono_2c91d1', '__JetBrains_Mono_Fallback_2c91d1'",fontStyle:"normal"},className:"__className_2c91d1"}},6271:e=>{e.exports={style:{fontFamily:"'__Montserrat_b1da2a', '__Montserrat_Fallback_b1da2a'",fontStyle:"normal"},className:"__className_b1da2a"}},3111:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>f,originalPathname:()=>p,pages:()=>l,routeModule:()=>d,tree:()=>c}),r(1838),r(8295),r(5866);var n=r(3191),i=r(8716),a=r(7922),o=r.n(a),s=r(5231),u={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>s[e]);r.d(t,u);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1838)),"C:\\Users\\exl\\Documents\\acads\\ccprog\\discord_workshop\\archer_api_docs\\my-app\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"C:\\Users\\exl\\Documents\\acads\\ccprog\\discord_workshop\\archer_api_docs\\my-app\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\exl\\Documents\\acads\\ccprog\\discord_workshop\\archer_api_docs\\my-app\\src\\app\\page.js"],p="/page",f={require:r,loadChunk:()=>Promise.resolve()},d=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1031:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},1077:()=>{},8641:(e,t,r)=>{Promise.resolve().then(r.bind(r,6777))},6777:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ApiData:()=>p,MainHome:()=>l,default:()=>c});var n=r(326),i=r(6271),a=r.n(i),o=r(631),s=r.n(o),u=r(7577);function c(){let[e,t]=(0,u.useState)(""),[r,i]=(0,u.useState)(null);return(0,n.jsxs)("main",{className:"h-screen flex items-center justify-left p-16 bg-gradient-to-r from-[#005342] to-[#227564]",children:[n.jsx(l,{setInputValue:t,handleSubmit:t=>{t.preventDefault(),console.log(`handleSubmit called: ${e}`),e&&(console.log(`Fetching data for input: ${e}`),fetch(`https://api.berde.co/course/${e}?limit=1`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log("Fetched data:",e),i(e.docs)}).catch(e=>console.error("Error fetching data:",e)),i([]))}}),n.jsx(p,{apiData:r})]})}function l({setInputValue:e,handleSubmit:t}){return(0,n.jsxs)("div",{className:"flex-col w-full",children:[(0,n.jsxs)("div",{className:"flex",children:[n.jsx("h1",{className:`font-bold text-5xl font-Montserrat ${a().className}`,children:"ArcherAPI"}),n.jsx("button",{className:`px-5 font-bold text-lg mx-4 rounded-full bg-green-400 ${a().className}`,children:"berde.co"})]}),n.jsx("p",{className:"text-2xl",children:"Lasallian data: by Lasallians, for Lasallians."}),n.jsx("p",{className:"text-1xl mt-6",children:"Try it out:"}),n.jsx("form",{onSubmit:t,children:(0,n.jsxs)("div",{className:"bg-gray-50 rounded-xl",children:[(0,n.jsxs)("span",{className:`text-black py-2 pl-4 pr-1 ${s().className}`,children:[n.jsx("span",{className:"text-[#FF0000] font-bold",children:"GET"})," api.berde.co/course/"]}),n.jsx("input",{className:`bg-[#e7e7e7] text-black py-2 px-2 w-32 ${s().className}`,placeholder:"CCPROG3...",type:"text",onChange:t=>{e(t.target.value),console.log("Input value:",t.target.value)}}),n.jsx("span",{className:`text-black py-2 pl-1 pr-4 ${s().className}`,children:"?limit=1"})]})}),n.jsx("p",{className:"text-1xl mt-6",children:"You can now use this API for your own use using the same URL as shown above. That is the only available endpoint as of now, we are actively developing this API."}),n.jsx("p",{className:"text-1xl mt-2 font-bold",children:"Animo, La Salle."})]})}function p({apiData:e}){return n.jsx("div",{className:"flex-col h-full w-full",children:n.jsx("div",{className:"flex flex-col h-full w-full items-center justify-center p-24",children:(0,n.jsxs)("div",{className:"bg-white w-full rounded-lg bg-[#86e9bb] p-4 divide-y divide-[#00562e]",children:[n.jsx("p",{className:`${s().className} font-bold text-[#00562e]`,children:e&&e.length>0?"Example data for "+e[0].class+":":""}),n.jsx("p",{className:`${s().className} p-2 whitespace-pre bg-[#00562e] text-[#86e9bb]`,children:e&&e.length>0?JSON.stringify(e[0],null,2):"Input a valid course code."})]})})})}},338:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION:function(){return n},FLIGHT_PARAMETERS:function(){return u},NEXT_DID_POSTPONE_HEADER:function(){return l},NEXT_ROUTER_PREFETCH_HEADER:function(){return a},NEXT_ROUTER_STATE_TREE:function(){return i},NEXT_RSC_UNION_QUERY:function(){return c},NEXT_URL:function(){return o},RSC_CONTENT_TYPE_HEADER:function(){return s},RSC_HEADER:function(){return r}});let r="RSC",n="Next-Action",i="Next-Router-State-Tree",a="Next-Router-Prefetch",o="Next-Url",s="text/x-component",u=[[r],[i],[a]],c="_rsc",l="x-nextjs-postponed";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7255:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var i={},a=t.split(n),o=(r||{}).decode||e,s=0;s<a.length;s++){var u=a[s],c=u.indexOf("=");if(!(c<0)){var l=u.substr(0,c).trim(),p=u.substr(++c,u.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==i[l]&&(i[l]=function(e,t){try{return t(e)}catch(t){return e}}(p,o))}}return i},t.serialize=function(e,t,n){var a=n||{},o=a.encode||r;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var s=o(t);if(s&&!i.test(s))throw TypeError("argument val is invalid");var u=e+"="+s;if(null!=a.maxAge){var c=a.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(c)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");u+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");u+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");u+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(u+="; HttpOnly"),a.secure&&(u+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},1792:(e,t)=>{"use strict";function r(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var i="",a=r+1;a<e.length;){var o=e.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o){i+=e[a++];continue}break}if(!i)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=a;continue}if("("===n){var s=1,u="",a=r+1;if("?"===e[a])throw TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;){if("\\"===e[a]){u+=e[a++]+e[a++];continue}if(")"===e[a]){if(0==--s){a++;break}}else if("("===e[a]&&(s++,"?"!==e[a+1]))throw TypeError("Capturing groups are not allowed at "+a);u+=e[a++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!u)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:u}),r=a;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,o="[^"+a(t.delimiter||"/#?")+"]+?",s=[],u=0,c=0,l="",p=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},f=function(e){var t=p(e);if(void 0!==t)return t;var n=r[c];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},d=function(){for(var e,t="";e=p("CHAR")||p("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var m=p("CHAR"),h=p("NAME"),g=p("PATTERN");if(h||g){var y=m||"";-1===i.indexOf(y)&&(l+=y,y=""),l&&(s.push(l),l=""),s.push({name:h||u++,prefix:y,suffix:"",pattern:g||o,modifier:p("MODIFIER")||""});continue}var x=m||p("ESCAPED_CHAR");if(x){l+=x;continue}if(l&&(s.push(l),l=""),p("OPEN")){var y=d(),_=p("NAME")||"",v=p("PATTERN")||"",E=d();f("CLOSE"),s.push({name:_||(v?u++:""),pattern:_&&!v?o:v,prefix:y,suffix:E,modifier:p("MODIFIER")||""});continue}f("END")}return s}function n(e,t){void 0===t&&(t={});var r=o(t),n=t.encode,i=void 0===n?function(e){return e}:n,a=t.validate,s=void 0===a||a,u=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var a=e[n];if("string"==typeof a){r+=a;continue}var o=t?t[a.name]:void 0,c="?"===a.modifier||"*"===a.modifier,l="*"===a.modifier||"+"===a.modifier;if(Array.isArray(o)){if(!l)throw TypeError('Expected "'+a.name+'" to not repeat, but got an array');if(0===o.length){if(c)continue;throw TypeError('Expected "'+a.name+'" to not be empty')}for(var p=0;p<o.length;p++){var f=i(o[p],a);if(s&&!u[n].test(f))throw TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but got "'+f+'"');r+=a.prefix+f+a.suffix}continue}if("string"==typeof o||"number"==typeof o){var f=i(String(o),a);if(s&&!u[n].test(f))throw TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+f+'"');r+=a.prefix+f+a.suffix;continue}if(!c){var d=l?"an array":"a string";throw TypeError('Expected "'+a.name+'" to be '+d)}}return r}}function i(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var a=n[0],o=n.index,s=Object.create(null),u=1;u<n.length;u++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return i(e,r)}):s[r.name]=i(n[e],r)}}(u);return{path:a,index:o,params:s}}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function s(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,s=r.start,u=r.end,c=r.encode,l=void 0===c?function(e){return e}:c,p="["+a(r.endsWith||"")+"]|$",f="["+a(r.delimiter||"/#?")+"]",d=void 0===s||s?"^":"",m=0;m<e.length;m++){var h=e[m];if("string"==typeof h)d+=a(l(h));else{var g=a(l(h.prefix)),y=a(l(h.suffix));if(h.pattern){if(t&&t.push(h),g||y){if("+"===h.modifier||"*"===h.modifier){var x="*"===h.modifier?"?":"";d+="(?:"+g+"((?:"+h.pattern+")(?:"+y+g+"(?:"+h.pattern+"))*)"+y+")"+x}else d+="(?:"+g+"("+h.pattern+")"+y+")"+h.modifier}else d+="("+h.pattern+")"+h.modifier}else d+="(?:"+g+y+")"+h.modifier}}if(void 0===u||u)i||(d+=f+"?"),d+=r.endsWith?"(?="+p+")":"$";else{var _=e[e.length-1],v="string"==typeof _?f.indexOf(_[_.length-1])>-1:void 0===_;i||(d+="(?:"+f+"(?="+p+"))?"),v||(d+="(?="+f+"|"+p+")")}return new RegExp(d,o(r))}function u(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?RegExp("(?:"+e.map(function(e){return u(e,t,n).source}).join("|")+")",o(n)):s(r(e,n),t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.compile=function(e,t){return n(r(e,t),t)},t.tokensToFunction=n,t.match=function(e,t){var r=[];return i(u(e,r,t),r,t)},t.regexpToFunction=i,t.tokensToRegexp=s,t.pathToRegexp=u},6621:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return p},normalizeMetadataRoute:function(){return f}});let n=r(616),i=function(e){return e&&e.__esModule?e:{default:e}}(r(1293)),a=r(7262),o=r(5679),s=r(8785),u=r(8168),c=r(1040);function l(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function p(e,t,r){let n=(0,u.normalizeAppPath)(e),s=(0,o.getNamedRouteRegex)(n,!1),p=(0,a.interpolateDynamicPath)(n,t,s),f=l(e),d=f?`-${f}`:"",{name:m,ext:h}=i.default.parse(r);return(0,c.normalizePathSep)(i.default.join(p,`${m}${d}${h}`))}function f(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":e.endsWith("/sitemap")?t+=".xml":r=l(e.slice(0,-(i.default.basename(e).length+1))),!t.endsWith("/route")){let{dir:a,name:o,ext:s}=i.default.parse(t),u=(0,n.isStaticMetadataRoute)(e);t=i.default.posix.join(a,`${o}${r?`-${r}`:""}${s}`,u?"":"[[...__metadata_id__]]","route")}return t}},616:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return i},isMetadataRoute:function(){return l},isMetadataRouteFile:function(){return s},isStaticMetadataRoute:function(){return c},isStaticMetadataRouteFile:function(){return u}});let n=r(1040),i={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},a=["js","jsx","ts","tsx"],o=e=>`(?:${e.join("|")})`;function s(e,t,r){let a=[RegExp(`^[\\\\/]robots${r?`\\.${o(t.concat("txt"))}$`:""}`),RegExp(`^[\\\\/]manifest${r?`\\.${o(t.concat("webmanifest","json"))}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`\\.${o(t.concat("xml"))}$`:""}`),RegExp(`[\\\\/]${i.icon.filename}\\d?${r?`\\.${o(t.concat(i.icon.extensions))}$`:""}`),RegExp(`[\\\\/]${i.apple.filename}\\d?${r?`\\.${o(t.concat(i.apple.extensions))}$`:""}`),RegExp(`[\\\\/]${i.openGraph.filename}\\d?${r?`\\.${o(t.concat(i.openGraph.extensions))}$`:""}`),RegExp(`[\\\\/]${i.twitter.filename}\\d?${r?`\\.${o(t.concat(i.twitter.extensions))}$`:""}`)],s=(0,n.normalizePathSep)(e);return a.some(e=>e.test(s))}function u(e){return s(e,[],!0)}function c(e){return"/robots"===e||"/manifest"===e||u(e)}function l(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,a,!1)}},6975:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(7255);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},1586:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},extractInterceptionRouteInformation:function(){return o},isInterceptionRouteAppPath:function(){return a}});let n=r(8168),i=["(..)(..)","(.)","(..)","(...)"];function a(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function o(e){let t,r,a;for(let n of e.split("/"))if(r=i.find(e=>n.startsWith(e))){[t,a]=e.split(r,2);break}if(!t||!r||!a)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":a="/"===t?`/${a}`:t+"/"+a;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);a=t.split("/").slice(0,-1).concat(a).join("/");break;case"(...)":a="/"+a;break;case"(..)(..)":let o=t.split("/");if(o.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);a=o.slice(0,-2).concat(a).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:a}}},7262:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getUtils:function(){return h},interpolateDynamicPath:function(){return d},normalizeDynamicRouteParams:function(){return m},normalizeVercelUrl:function(){return f}});let n=r(7310),i=r(5014),a=r(3707),o=r(5679),s=r(3525),u=r(5257),c=r(7847),l=r(8168),p=r(1943);function f(e,t,r,i,a){if(i&&t&&a){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query)))(e!==p.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(p.NEXT_QUERY_PARAM_PREFIX)||(r||Object.keys(a.groups)).includes(e))&&delete t.query[e];e.url=(0,n.format)(t)}}function d(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let{optional:i,repeat:a}=r.groups[n],o=`[${a?"...":""}${n}]`;i&&(o=`[${o}]`);let s=e.indexOf(o);if(s>-1){let r;let i=t[n];r=Array.isArray(i)?i.map(e=>e&&encodeURIComponent(e)).join("/"):i?encodeURIComponent(i):"",e=e.slice(0,s)+r+e.slice(s+o.length)}}return e}function m(e,t,r,n){let i=!0;return r?{params:e=Object.keys(r.groups).reduce((a,o)=>{let s=e[o];"string"==typeof s&&(s=(0,l.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,l.normalizeRscURL)(e)),e)));let u=n[o],c=r.groups[o].optional;return((Array.isArray(u)?u.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(u))||void 0===s&&!(c&&t))&&(i=!1),c&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${o}]]`))&&(s=void 0,delete e[o]),s&&"string"==typeof s&&r.groups[o].repeat&&(s=s.split("/")),s&&(a[o]=s),a},{}),hasValidParams:i}:{params:e,hasValidParams:!1}}function h({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:l,trailingSlash:h,caseSensitive:g}){let y,x,_;return l&&(y=(0,o.getNamedRouteRegex)(e,!1),_=(x=(0,s.getRouteMatcher)(y))(e)),{handleRewrites:function(o,s){let p={},f=s.pathname,d=n=>{let c=(0,a.getPathMatch)(n.source+(h?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!g})(s.pathname);if((n.has||n.missing)&&c){let e=(0,u.matchHas)(o,s.query,n.has,n.missing);e?Object.assign(c,e):c=!1}if(c){let{parsedDestination:a,destQuery:o}=(0,u.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:c,query:s.query});if(a.protocol)return!0;if(Object.assign(p,o,c),Object.assign(s.query,a.query),delete a.query,Object.assign(s,a),f=s.pathname,r&&(f=f.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,i.normalizeLocalePath)(f,t.locales);f=e.pathname,s.query.nextInternalLocale=e.detectedLocale||c.nextInternalLocale}if(f===e)return!0;if(l&&x){let e=x(f);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])d(e);if(f!==e){let t=!1;for(let e of n.afterFiles||[])if(t=d(e))break;if(!t&&!(()=>{let t=(0,c.removeTrailingSlash)(f||"");return t===(0,c.removeTrailingSlash)(e)||(null==x?void 0:x(t))})()){for(let e of n.fallback||[])if(t=d(e))break}}return p},defaultRouteRegex:y,dynamicRouteMatcher:x,defaultRouteMatches:_,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:i}=y;return{re:{exec:a=>{let o=Object.fromEntries(new URLSearchParams(a)),s=t&&n&&o["1"]===n;for(let e of Object.keys(o)){let t=o[e];e!==p.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(p.NEXT_QUERY_PARAM_PREFIX)&&(o[e.substring(p.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete o[e])}let u=Object.keys(i||{}),c=e=>{if(t){let i=Array.isArray(e),a=i?e[0]:e;if("string"==typeof a&&t.locales.some(e=>e.toLowerCase()===a.toLowerCase()&&(n=e,r.locale=n,!0)))return i&&e.splice(0,1),!i||0===e.length}return!1};return u.every(e=>o[e])?u.reduce((t,r)=>{let n=null==i?void 0:i[r];return n&&!c(o[r])&&(t[e[n].pos]=o[r]),t},{}):Object.keys(o).reduce((e,t)=>{if(!c(o[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:o[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>m(e,t,y,_),normalizeVercelUrl:(e,t,r)=>f(e,t,r,l,y),interpolateDynamicPath:(e,t)=>d(e,t,y)}}},4080:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},8785:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&4294967295;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},5014:(e,t)=>{"use strict";function r(e,t){let r;let n=e.split("/");return(t||[]).some(t=>!!n[1]&&n[1].toLowerCase()===t.toLowerCase()&&(r=t,n.splice(1,1),e=n.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},1293:(e,t,r)=>{"use strict";let n;n=r(1017),e.exports=n},1555:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},1040:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},8168:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return a},normalizeRscURL:function(){return o}});let n=r(1555),i=r(5406);function a(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function o(e){return e.replace(/\.rsc($|\?)/,"$1")}},1942:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return i}}),r(2569);let n=r(4869);function i(e,t){let r=new URL("http://n"),i=t?new URL(t,r):e.startsWith(".")?new URL("http://n"):r,{pathname:a,searchParams:o,search:s,hash:u,href:c,origin:l}=new URL(e,i);if(l!==r.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:a,query:(0,n.searchParamsToUrlQuery)(o),search:s,hash:u,href:c.slice(r.origin.length)}}},3226:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return a}});let n=r(4869),i=r(1942);function a(e){if(e.startsWith("/"))return(0,i.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},3707:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return i}});let n=r(1792);function i(e,t){let r=[],i=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),a=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(i.source),i.flags):i,r);return(e,n)=>{if("string"!=typeof e)return!1;let i=a(e);if(!i)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete i.params[e.name];return{...n,...i.params}}}},5257:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{compileNonPath:function(){return p},matchHas:function(){return l},prepareDestination:function(){return f}});let n=r(1792),i=r(4080),a=r(3226),o=r(1586),s=r(338),u=r(6975);function c(e){return e.replace(/__ESC_COLON_/gi,":")}function l(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let i={},a=r=>{let n;let a=r.key;switch(r.type){case"header":a=a.toLowerCase(),n=e.headers[a];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,u.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[a];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return i[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(a)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{i[e]=t.groups[e]}):"host"===r.type&&t[0]&&(i.host=t[0])),!0}return!1};return!!r.every(e=>a(e))&&!n.some(e=>a(e))&&i}function p(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function f(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let u=e.destination;for(let t of Object.keys({...e.params,...r}))u=u.replace(RegExp(":"+(0,i.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t);let l=(0,a.parseUrl)(u),f=l.query,d=c(""+l.pathname+(l.hash||"")),m=c(l.hostname||""),h=[],g=[];(0,n.pathToRegexp)(d,h),(0,n.pathToRegexp)(m,g);let y=[];h.forEach(e=>y.push(e.name)),g.forEach(e=>y.push(e.name));let x=(0,n.compile)(d,{validate:!1}),_=(0,n.compile)(m,{validate:!1});for(let[t,r]of Object.entries(f))Array.isArray(r)?f[t]=r.map(t=>p(c(t),e.params)):"string"==typeof r&&(f[t]=p(c(r),e.params));let v=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!v.some(e=>y.includes(e)))for(let t of v)t in f||(f[t]=e.params[t]);if((0,o.isInterceptionRouteAppPath)(d))for(let t of d.split("/")){let r=o.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){e.params["0"]=r;break}}try{let[r,n]=(t=x(e.params)).split("#",2);l.hostname=_(e.params),l.pathname=r,l.hash=(n?"#":"")+(n||""),delete l.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return l.query={...r,...l.query},{newUrl:t,destQuery:f,parsedDestination:l}}},4869:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i}})},7847:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},3525:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(2569);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},o={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(o[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),o}}},5679:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return f},getNamedRouteRegex:function(){return p},getRouteRegex:function(){return u}});let n=r(1586),i=r(4080),a=r(7847);function o(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function s(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},s=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:u}=o(a[1]);return r[e]={pos:s++,repeat:u,optional:n},"/"+(0,i.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,i.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=o(a[1]);return r[e]={pos:s++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function u(e){let{parameterizedRoute:t,groups:r}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function c(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:a,keyPrefix:s}=e,{key:u,optional:c,repeat:l}=o(n),p=u.replace(/\W/g,"");s&&(p=""+s+p);let f=!1;(0===p.length||p.length>30)&&(f=!0),isNaN(parseInt(p.slice(0,1)))||(f=!0),f&&(p=r()),s?a[p]=""+s+u:a[p]=u;let d=t?(0,i.escapeStringRegexp)(t):"";return l?c?"(?:/"+d+"(?<"+p+">.+?))?":"/"+d+"(?<"+p+">.+?)":"/"+d+"(?<"+p+">[^/]+?)"}function l(e,t){let r;let o=(0,a.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:o.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&a){let[r]=e.split(a[0]);return c({getSafeRouteKey:s,interceptionMarker:r,segment:a[1],routeKeys:u,keyPrefix:t?"nxtI":void 0})}return a?c({getSafeRouteKey:s,segment:a[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,i.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function p(e,t){let r=l(e,t);return{...u(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function f(e,t){let{parameterizedRoute:r}=s(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=l(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},5406:(e,t)=>{"use strict";function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DEFAULT_SEGMENT_KEY:function(){return i},PAGE_SEGMENT_KEY:function(){return n},isGroupSegment:function(){return r}});let n="__PAGE__",i="__DEFAULT__"},2569:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return y},NormalizeError:function(){return h},PageNotFoundError:function(){return g},SP:function(){return f},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return o},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return c},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return l},stringifyError:function(){return _}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>i.test(e);function o(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=o();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function l(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function p(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let f="undefined"!=typeof performance,d=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},8295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>o});var n=r(9510),i=r(1723),a=r.n(i);r(5023);let o={title:"Create Next App",description:"Generated by create next app"};function s({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:a().className,children:e})})}},1838:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,ApiData:()=>c,MainHome:()=>u,__esModule:()=>a,default:()=>s});var n=r(8570);let i=(0,n.createProxy)(String.raw`C:\Users\exl\Documents\acads\ccprog\discord_workshop\archer_api_docs\my-app\src\app\page.js`),{__esModule:a,$$typeof:o}=i;i.default;let s=(0,n.createProxy)(String.raw`C:\Users\exl\Documents\acads\ccprog\discord_workshop\archer_api_docs\my-app\src\app\page.js#default`),u=(0,n.createProxy)(String.raw`C:\Users\exl\Documents\acads\ccprog\discord_workshop\archer_api_docs\my-app\src\app\page.js#MainHome`),c=(0,n.createProxy)(String.raw`C:\Users\exl\Documents\acads\ccprog\discord_workshop\archer_api_docs\my-app\src\app\page.js#ApiData`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(6621);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,462],()=>r(3111));module.exports=n})();