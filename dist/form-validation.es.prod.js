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
var e=function(){return(e=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)};function r(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function c(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,c)}u((n=n.apply(e,r||[])).next())}))}function t(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function n(e){return Object.prototype.toString.call(e)}function a(e){return"[object Object]"===n(e)}function o(e){return"[object Array]"===n(e)}function i(e){return"function"==typeof e}function c(e){return null!==e&&"object"==typeof e&&i(e.then)}function u(e,r){return e.hasOwnProperty(r)}function l(e,r){if(0===r.length)return e;var t=e;return r.slice(0,-1).forEach((function(e){t=t[e]})),t[r[r.length-1]]}function s(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]}var f="__form_validation__",v="__form_validation_reactive",d=function(e,r,t){var n;(a(e)||o(e))&&Object.defineProperty(e,v,{enumerable:!1,configurable:!0,value:e}),(a(r)||o(r))&&(Object.defineProperty(r,v,{enumerable:!1,configurable:!0,value:r}),Object.defineProperty(r,f,{enumerable:!1,configurable:!0,value:r[f]||(n={},n.path=t,n)}),Object.defineProperty(r,"$v",{enumerable:!1,configurable:!0,value:r.$v||{}}))},h=new Set(["shift","unshift"]),p=function(e){var r=e.object,t=e.clone,n=e.path,i=void 0===n?[]:n,c=e.wrap,l=void 0===c?d:c,s=e.callback,v=void 0===s?function(){}:s;if(l(r,t,i),(a(t)||o(t))&&v(t),!1===a(r)&&!1===o(r))return r;for(var $=0,y=Object.keys(r);$<y.length;$++){var m=y[$];Reflect.set(t,m,t[m]||(o(r[m])?[]:{})),Reflect.set(r,m,p({object:r[m],clone:t[m],path:i.concat(m),wrap:l,callback:v}))}for(var m in t)!1===u(r,m)&&delete t[m];var b=null,g=0,j=[],w=[];return new Proxy(r,{deleteProperty:function(e,r){return Reflect.deleteProperty(t,r),Reflect.deleteProperty(e,r)},set:function(e,r,n){var a=Reflect.set(e,r,n);if(!1===u(e,r))return a;if(o(e)){if("length"===r){if("shift"===b){j.shift(),j.reverse(),t.length=0;for(var c=0,s=w;c<s.length;c++){var d=s[c],$=j.pop();$[f].path=$[f].path.slice(0,-1).concat(d),t[d]=$}}else if("unshift"===b){j.shift(),j.push(t[0]),j.reverse(),t.length=0;for(var y=0,m=w;y<m.length;y++){var O=m[y],P=j.pop();P[f].path=P[f].path.slice(0,-1).concat(O),t[O]=P}}for(var k in t[r]=n,b=null,t)v(t[k]);return a}h.has(b)&&/^\d+$/.test(r)&&(w.push(r),++g,t[r]=o(n)?[]:{})}return t[r]=t[r]||(o(n)?[]:{}),Reflect.set(e,r,p({object:n,clone:t[r],path:i.concat(r),wrap:l,callback:v}))},get:function(e,r){var n=Reflect.get(e,r);return o(e)&&(h.has(r)?(b=r,g=0,j.length=0,w.length=0):h.has(b)&&("length"===r?g=0:/^\d+$/.test(r)&&(j[g]=t[r]))),n}})},$=function(e){var r=e.rootSchema,t=e.validator,n=e.path,o=e.startIndex;if(o===n.length){try{var c=l(r,n);if(y(c))return a(c.$params)&&(t[f].schema.$params=c.$params),i(c.$normalizer)&&(t[f].schema.$normalizer=c.$normalizer),a(c.$rules)&&(t[f].schema.$rules=c.$rules),a(c.$errors)&&(t[f].schema.$errors=c.$errors),!0}catch(e){}return!1}if($({rootSchema:r,validator:t,path:n,startIndex:o+1}))return!0;var u=n[o];return n[o]="$iter",!!$({rootSchema:r,validator:t,path:n,startIndex:o+1})||(n[o]=u,!1)},y=function(e){return void 0!==e&&(void 0!==e.$params||(void 0!==e.$normalizer||(void 0!==e.$rules||void 0!==e.$errors)))};var m=function(e){return function(r){e[f].validated=r}},b=function(e){return function(r){e[f].invalid=r,P(e),S(e),I(e)}},g=function(e){return function(r){e[f].dirty=r,k(e),x(e),S(e),I(e)}},j=function(e){return function(r){e[f].pending+=!0===r?1:-1,O(e),P(e),S(e),I(e)}},w=function(e){return function(){e[f].pending=0,O(e),P(e),S(e),I(e)}},O=function(e){e.$v.pending=0!==e[f].pending||_(e).some((function(e){return e.$v.pending}))},P=function(e){e.$v.invalid=e[f].invalid&&0===e[f].pending||_(e).some((function(e){return e.$v.invalid}))},k=function(e){e.$v.dirty=e[f].dirty||0!==_(e).length&&_(e).every((function(e){return e.$v.dirty}))},x=function(e){e.$v.anyDirty=e[f].dirty||_(e).some((function(e){return e.$v.anyDirty}))},S=function(e){e.$v.error=e[f].dirty&&e[f].invalid&&0===e[f].pending},I=function(e){e.$v.anyError=e[f].dirty&&e[f].invalid&&0===e[f].pending||_(e).some((function(e){return e.$v.anyError}))},_=function(e){return Object.keys(e).filter((function(e){return e!==f&&"$v"!==e})).map((function(r){return e[r]}))},z=function(e){var r=e.form,t=e.schema,n=e.validator;return p({object:r,clone:n,callback:function(e){!function(e){var r=e;void 0===r[f].invalid&&(r[f].invalid=!1,r[f].validated=!1,r[f].pending=0,r[f].dirty=!1,r[f].setValidated=m(r),r[f].setInvalid=b(r),r[f].setDirty=g(r),r[f].setPending=j(r),r[f].resetPending=w(r),r.$v.pending=!1,r.$v.invalid=!1,r.$v.dirty=!1,r.$v.anyDirty=!1,r.$v.error=!1,r.$v.anyError=!1,r.$v.errors={})}(e),function(e){var r=e.rootSchema,t=e.validator,n=t[f].path,a={$params:{},$normalizer:function(e){return e.value},$rules:{},$errors:{}};for(var o in t[f].schema=t[f].schema||{},t[f].schema.$params=a.$params,t[f].schema.$normalizer=a.$normalizer,t[f].schema.$rules=a.$rules,t[f].schema.$errors=a.$errors,$({rootSchema:r,validator:t,path:n.slice(),startIndex:0}),t[f].schema.$rules)void 0===t[f].schema.$errors[o]&&(t[f].schema.$errors[o]=s)}({rootSchema:t,validator:e}),R(r,e),e[f].validated&&e.$v.validate()}})},R=function(n,a){var o=a[f].schema,i={};a.$v.validate=function(){a[f].setValidated(!0),a[f].setInvalid(!1),a[f].resetPending(),a.$v.errors={},i={};for(var u=function(n){for(var a,o,i=n.rootForm,u=n.validator,s=e(((a={}).$rules={},a),u[f].schema.$params),v=u[f].schema.$normalizer,d=u[f].schema.$rules,h=u[f].schema.$errors,p=i,$=u[f].path,y=0===$.length?void 0:l(i,$.slice(0,-1)),m=0===$.length?void 0:$[$.length-1],b=v({value:0===$.length?i:l(i,$),key:m,parent:y,path:$,root:p,params:s}),g=((o={}).$rules={},o),j=function(e){var n={value:b,key:m,parent:y,path:$,root:p,params:s},a=d[e](n);g.$rules[e]=a,n.params.$rules[e]=a,g[e]=void 0,c(a)?a.finally((function(){return r(void 0,void 0,void 0,(function(){return t(this,(function(r){switch(r.label){case 0:return[4,a];case 1:return void 0!==r.sent()&&(g[e]=h[e](n)),[2]}}))}))})):void 0!==a&&(g[e]=h[e](n))},w=0,O=Object.keys(d);w<O.length;w++){j(O[w])}return g}({rootForm:n,validator:a}),s=function(e){c(u.$rules[e])?(a[f].setPending(!0),u.$rules[e].finally((function(){return r(void 0,void 0,void 0,(function(){var r,n;return t(this,(function(t){switch(t.label){case 0:return i!==u.$rules?[2]:[4,u.$rules[e]];case 1:return void 0===t.sent()?[3,3]:(a[f].setInvalid(!0),r=a.$v.errors,n=e,[4,u[e]]);case 2:r[n]=t.sent(),t.label=3;case 3:return a[f].setPending(!1),[2]}}))}))}))):void 0!==u.$rules[e]&&(a[f].setInvalid(!0),a.$v.errors[e]=u[e])},v=0,d=Object.keys(o.$rules);v<d.length;v++){s(d[v])}i=u.$rules;for(var h={},p=0,$=Object.keys(a).filter((function(e){return"$v"!==e&&e!==f}));p<$.length;p++){var y=$[p];h[y]=a[y].$v.validate()}return Promise.all(Object.values(i)).then((function(){return Promise.all(Object.values(h))})).then((function(){}))},a.$v.reset=function(){a[f].setValidated(!1),a[f].setInvalid(!1),a[f].setDirty(!1),a[f].resetPending(),a.$v.errors={},i={};for(var e=0,r=Object.keys(a).filter((function(e){return"$v"!==e&&e!==f}));e<r.length;e++){var t=r[e];a[t].$v.reset()}},a.$v.touch=function(){a[f].setDirty(!0);for(var e=0,r=Object.keys(a).filter((function(e){return"$v"!==e&&e!==f}));e<r.length;e++){var t=r[e];a[t].$v.touch()}}};export{z as proxy};
