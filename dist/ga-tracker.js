!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.gaTracker=t():e.gaTracker=t()}(self,(()=>(()=>{"use strict";var e={374:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n={utm_id:"ci",utm_source:"cs",utm_medium:"cm",utm_campaign:"cn",utm_term:"ck",utm_content:"cc",gclid:"gclid"},s={ci:"gaTracker",cm:"gaTracker"};t.default=class{parseFromUrl(e){const t={};return e.split("&").forEach((e=>{const[s,r]=e.split("="),o=n[s],a=encodeURIComponent(r);t[o]=a})),Object.assign({},s,t)}}},987:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(374)),o={page_title:"dt",page_location:"dl"};t.default=class{constructor(){this.event={name:"page_view",params:{}},this.campaignParams=null}setName(e){return this.event.name=e,this}setParams(e){return Object.assign(this.event.params,e),this}setCampaignParamsFromUrl(e){const t=new r.default;return this.campaignParams=t.parseFromUrl(e),this}mergeParams(e,t,n=""){Object.keys(e).forEach((s=>{const r=encodeURIComponent(s);t[`${n}${r}`]=e[s]}))}getParams(){const e={en:this.event.name,_ee:1};return Object.keys(this.event.params).forEach((t=>{o[t]&&(e[o[t]]=this.event.params[t],delete this.event.params[t])})),this.mergeParams(this.event.params,e,"ep."),this.campaignParams&&this.mergeParams(this.campaignParams,e),e}}},334:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(121)),o=s(n(53)),a=n(917),i=n(928);let u=null;class c{constructor(){if(this.params={version:"2",gtm:"2oe6t0",clientId:this.getClientId(),screenResolution:this.getScreenResolution()},this.trackers=[],this.log=!0,u)return u;u=this}getInstance(){return new c}getClientId(){let e=o.default.getItem(a.CLIENT_ID);return e||(e=(0,i.uuid)(),o.default.setItem(a.CLIENT_ID,e)),e}getScreenResolution(){const e=(0,i.getSystemInfo)();return`${e.windowWidth}x${e.windowHeight}`}getTracker(e){const t=new r.default(this,e);return this.trackers.push(t),t}getDefaultTracker(){return this.trackers.length>0?this.trackers[0]:null}}t.default=c},859:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(987));class o extends r.default{constructor(){super(),this.event.name="page_view"}}t.default=o},121:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{u(s.next(e))}catch(e){o(e)}}function i(e){try{u(s.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(928),o=n(85);t.default=class{constructor(e,t){this.ga=e,this.measurementId=t,this.trackerServer="https://www.google-analytics.com",this.queue=[],this.sending=!1}setTrackerServer(e){return this.trackerServer=e,this}send(e){const t=e.getParams();return this.addToQueue(t),this}addToQueue(e){this.queue.push({payload:e,time:+new Date}),this.processQueue()}processQueue(){if(this.sending)return;this.sending=!0;const e=[];for(;this.queue.length>0;){const t=this.queue[0],n=t.payload,s=t.time;n._et=+new Date-s;const o=(0,r.buildQueryFromObject)(n),a=e.map((e=>o.length)).reduce(((e,t)=>e+t),0),i=o.length;if((i+a>19264||i>8192||e.length>=20)&&e.length>0)break;e.push(o),this.queue.shift()}const t=e.join("\r\n");this.sendRequest(t)}sendRequest(e){return s(this,void 0,void 0,(function*(){const t=this.ga,n=(0,r.getSystemInfo)(),s={v:t.params.version,cid:t.params.clientId,tid:this.measurementId,gtm:t.params.gtm,sr:t.params.screenResolution,sid:+new Date,ul:n.language,_p:Math.round(2147483647*Math.random()).toString()},a=`${this.trackerServer}/g/collect?${(0,r.buildQueryFromObject)(s)}`;try{const t=yield(0,o.request)(a,e);this.sending=!1,(0,r.log)("ga:success",t)}catch(e){this.sending=!1,(0,r.log)("ga:failed",e)}}))}}},913:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=n(917);t.default={mode:s.Mode.uniapp}},607:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(987)),o=s(n(859)),a=s(n(334));t.default={Event:r.default,PageViewEvent:o.default,GoogleAnalytics:a.default}},917:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Mode=t.CLIENT_ID=void 0,t.CLIENT_ID="client_id",(n=t.Mode||(t.Mode={})).uniapp="uniapp",n.wechat="wechat",n.tara="taro",n.web="web"},928:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getSystemInfo=t.uuid=t.log=t.buildQueryFromObject=void 0;const r=s(n(334)),o=s(n(913)),a=n(917);t.buildQueryFromObject=e=>{const t=[];return Object.keys(e).forEach((n=>{const s=encodeURIComponent(n),r=encodeURIComponent(e[n]);t.push(`${s}=${r}`)})),t.join("&")},t.log=(...e)=>{(new r.default).log&&console.log(e)},t.uuid=()=>{let e=+new Date;return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))},t.getSystemInfo=()=>{let e={};return o.default.mode===a.Mode.web?e={windowWidth:window.innerWidth,windowHeight:window.innerHeight,pixelRatio:window.devicePixelRatio,language:navigator.language}:o.default.mode===a.Mode.uniapp&&(e=uni.getSystemInfoSync()),Object.assign({},{windowWidth:0,windowHeight:0,pixelRatio:1,language:"zh_CN"},e)}},85:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.request=void 0;const r=n(917),o=s(n(913));t.request=(e,t)=>o.default.mode===r.Mode.web?i(e,t):o.default.mode===r.Mode.uniapp?a(e,t):void 0;const a=(e,t)=>new Promise(((n,s)=>{uni.request({url:e,data:t,method:"POST",success:e=>{console.log("success"),n("success")},fail:e=>{s(e)}})})),i=(e,t)=>new Promise(((n,s)=>{fetch(e,{method:"POST",body:t}).then((e=>{n("success")})).catch((e=>{s(e)}))}))},53:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(913)),o=n(917);t.default=new class{setItem(e,t){"object"==typeof t&&(t=JSON.stringify(t)),r.default.mode===o.Mode.web?localStorage.setItem(e,t):r.default.mode===o.Mode.uniapp&&uni.setStorageSync(e,t)}getItem(e){let t;if(r.default.mode===o.Mode.web?t=localStorage.getItem(e):r.default.mode===o.Mode.uniapp&&(t=uni.getStorageSync(e)),t)try{return JSON.parse(t)}catch(e){return t}return null}}}},t={},n=function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}(607);return n.default})()));