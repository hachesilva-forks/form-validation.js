"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(){return(e=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)};function r(e,r,n,t){return new(n||(n=Promise))((function(a,o){function i(e){try{u(t.next(e))}catch(e){o(e)}}function c(e){try{u(t.throw(e))}catch(e){o(e)}}function u(e){var r;e.done?a(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,c)}u((t=t.apply(e,r||[])).next())}))}function n(e,r){var n,t,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(a=2&o[0]?t.return:o[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,o[1])).done)return a;switch(t=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],t=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function t(e){return Object.prototype.toString.call(e)}function a(e){return"[object Object]"===t(e)}function o(e){return"[object Array]"===t(e)}function i(e){return"function"==typeof e}function c(e){return null!==e&&"object"==typeof e&&i(e.then)}function u(e,r){if(0===r.length)return e;var n=e;return r.slice(0,-1).forEach((function(e){n=n[e]})),n[r[r.length-1]]}function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]}var s="__form_validation__",f="__form_validation_reactive",v=function(e,r,n){var t;(a(e)||o(e))&&Object.defineProperty(e,f,{enumerable:!1,configurable:!0,value:e}),(a(r)||o(r))&&(Object.defineProperty(r,f,{enumerable:!1,configurable:!0,value:r}),Object.defineProperty(r,s,{enumerable:!1,configurable:!0,value:r[s]||(t={},t.path=n,t)}),Object.defineProperty(r,"$v",{enumerable:!1,configurable:!0,value:r.$v||{}}))},d=function(e){var r=e.object,n=e.clone,t=e.path,i=void 0===t?[]:t,c=e.wrap,u=void 0===c?v:c,l=e.callback,s=void 0===l?function(){}:l;if(u(r,n,i),(a(n)||o(n))&&s(n),!1===a(r)&&!1===o(r))return r;for(var f=0,$=Object.keys(r);f<$.length;f++){var h=$[f];Reflect.set(n,h,n[h]||(o(r[h])?[]:{})),Reflect.set(r,h,d({object:r[h],clone:n[h],path:i.concat(h),wrap:u,callback:s}))}return new Proxy(r,{deleteProperty:function(e,r){return Reflect.deleteProperty(n,r),Reflect.deleteProperty(e,r)},set:function(e,r,t){var a=Reflect.set(e,r,t);return!1===function(e,r){return e.hasOwnProperty(r)}(e,r)?a:(Reflect.set(n,r,n[r]||(o(t)?[]:{})),Reflect.set(e,r,d({object:t,clone:n[r],path:i.concat(r),wrap:u,callback:s})))}})};var $=function(e){return function(r){e[s].validated=r}},h=function(e){return function(r){e[s].invalid=r,g(e),O(e),P(e)}},p=function(e){return function(r){e[s].dirty=r,j(e),w(e),O(e),P(e)}},y=function(e){return function(r){e[s].pending+=!0===r?1:-1,b(e),g(e),O(e),P(e)}},m=function(e){return function(){e[s].pending=0,b(e),g(e),O(e),P(e)}},b=function(e){e.$v.pending=0!==e[s].pending||k(e).some((function(e){return e.$v.pending}))},g=function(e){e.$v.invalid=e[s].invalid&&0===e[s].pending||k(e).some((function(e){return e.$v.invalid}))},j=function(e){e.$v.dirty=e[s].dirty||0!==k(e).length&&k(e).every((function(e){return e.$v.dirty}))},w=function(e){e.$v.anyDirty=e[s].dirty||k(e).some((function(e){return e.$v.anyDirty}))},O=function(e){e.$v.error=e[s].dirty&&e[s].invalid&&0===e[s].pending},P=function(e){e.$v.anyError=e[s].dirty&&e[s].invalid&&0===e[s].pending||k(e).some((function(e){return e.$v.anyError}))},k=function(e){return Object.keys(e).filter((function(e){return e!==s&&"$v"!==e})).map((function(r){return e[r]}))},_=function(t,a){var o=a[s].schema,i=null;a.$v.validate=function(){a[s].setValidated(!0),a[s].setInvalid(!1),a[s].resetPending(),a.$v.errors={},i=null;for(var l=function(t){for(var a,o,i=t.rootForm,l=t.validator,f=e(((a={}).$rules={},a),l[s].schema.$params),v=l[s].schema.$normalizer,d=l[s].schema.$rules,$=l[s].schema.$errors,h=i,p=l[s].path,y=0===p.length?void 0:u(i,p.slice(0,-1)),m=0===p.length?void 0:p[p.length-1],b=v({value:0===p.length?i:u(i,p),key:m,parent:y,path:p,root:h,params:f}),g=((o={}).$rules={},o),j=function(e){var t={value:b,key:m,parent:y,path:p,root:h,params:f},a=d[e](t);g.$rules[e]=a,t.params.$rules[e]=a,g[e]=void 0,c(a)?a.finally((function(){return r(void 0,void 0,void 0,(function(){return n(this,(function(r){switch(r.label){case 0:return[4,a];case 1:return void 0!==r.sent()&&(g[e]=$[e](t)),[2]}}))}))})):void 0!==a&&(g[e]=$[e](t))},w=0,O=Object.keys(d);w<O.length;w++){j(O[w])}return g}({rootForm:t,validator:a}),f=function(e){c(l.$rules[e])?(a[s].setPending(!0),l.$rules[e].finally((function(){return r(void 0,void 0,void 0,(function(){var r,t;return n(this,(function(n){switch(n.label){case 0:return i!==l.$rules?[2]:[4,l.$rules[e]];case 1:return void 0===n.sent()?[3,3]:(a[s].setInvalid(!0),r=a.$v.errors,t=e,[4,l[e]]);case 2:r[t]=n.sent(),n.label=3;case 3:return a[s].setPending(!1),[2]}}))}))}))):void 0!==l.$rules[e]&&(a[s].setInvalid(!0),a.$v.errors[e]=l[e])},v=0,d=Object.keys(o.$rules);v<d.length;v++){f(d[v])}i=l.$rules;for(var $=0,h=Object.keys(a).filter((function(e){return"$v"!==e&&e!==s}));$<h.length;$++){var p=h[$];a[p].$v.validate()}},a.$v.reset=function(){a[s].setValidated(!1),a[s].setInvalid(!1),a[s].setDirty(!1),a[s].resetPending(),a.$v.errors={},i=null;for(var e=0,r=Object.keys(a).filter((function(e){return"$v"!==e&&e!==s}));e<r.length;e++){var n=r[e];a[n].$v.reset()}},a.$v.touch=function(){a[s].setDirty(!0);for(var e=0,r=Object.keys(a).filter((function(e){return"$v"!==e&&e!==s}));e<r.length;e++){var n=r[e];a[n].$v.touch()}}};exports.proxy=function(e){var r=e.form,n=e.schema,t=e.validator;return d({object:r,clone:t,callback:function(e){!function(e){var r=e;void 0===r[s].invalid&&(r[s].invalid=!1,r[s].validated=!1,r[s].pending=0,r[s].dirty=!1,r[s].setValidated=$(r),r[s].setInvalid=h(r),r[s].setDirty=p(r),r[s].setPending=y(r),r[s].resetPending=m(r),r.$v.pending=!1,r.$v.invalid=!1,r.$v.dirty=!1,r.$v.anyDirty=!1,r.$v.error=!1,r.$v.anyError=!1,r.$v.errors={})}(e),function(e){var r,n=e.rootSchema,t=e.validator,o=t[s].path,c={$params:{},$normalizer:function(e){return e.value},$rules:{},$errors:{}};if(t[s].schema=t[s].schema||{},t[s].schema.$params=c.$params,t[s].schema.$normalizer=c.$normalizer,t[s].schema.$rules=c.$rules,t[s].schema.$errors=c.$errors,0!==o.length){try{r=u(n,o.slice(0,-1).concat("$iter"))}catch(e){}r&&(a(r.$params)&&(t[s].schema.$params=r.$params),i(r.$normalizer)&&(t[s].schema.$normalizer=r.$normalizer),a(r.$rules)&&(t[s].schema.$rules=r.$rules),a(r.$errors)&&(t[s].schema.$errors=r.$errors))}try{r=u(n,o)}catch(e){}for(var f in r&&(a(r.$params)&&(t[s].schema.$params=r.$params),i(r.$normalizer)&&(t[s].schema.$normalizer=r.$normalizer),a(r.$rules)&&(t[s].schema.$rules=r.$rules),a(r.$errors)&&(t[s].schema.$errors=r.$errors)),t[s].schema.$rules)void 0===t[s].schema.$errors[f]&&(t[s].schema.$errors[f]=l)}({rootSchema:n,validator:e}),_(r,e),e[s].validated&&e.$v.validate()}})};
