(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./src/components/VSketchFabViewer.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_f76cbbf5da9c2936d5fdbb58483aa887/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),loadScript=function loadScript(){var url=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(resolve,reject){"undefined"==typeof document&&reject();var el=document.createElement("script");el.src=url,el.defer=!0,el.addEventListener("load",resolve),el.addEventListener("error",reject),document.head.appendChild(el)}))},VSketchFabViewervue_type_script_lang_ts_=Object(dist_runtime.b)({props:{uid:{type:String,required:!0}},emits:["failure"],setup:function setup(props,_ref){var emit=_ref.emit,label=Object(use_i18n.a)().t("sketchfab-iframe-title",{sketchfab:"Sketchfab"}).toString(),node=Object(dist_runtime.l)(),$sentry=Object(dist_runtime.q)().$sentry,initSketchfab=function(){var _ref2=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,loadScript("https://static.sketchfab.com/api/sketchfab-viewer-1.10.1.js");case 2:if(void 0!==window.Sketchfab){_context.next=5;break}return $sentry.captureMessage("Unable to find window.Sketchfab after loading"),_context.abrupt("return");case 5:if(node.value){_context.next=7;break}return _context.abrupt("return");case 7:new window.Sketchfab(node.value).init(props.uid,{error:function error(e){$sentry.captureException(e),emit("failure")}});case 9:case"end":return _context.stop()}}),_callee)})));return function initSketchfab(){return _ref2.apply(this,arguments)}}();return Object(dist_runtime.g)((function(){initSketchfab()})),{node:node,label:label}}}),components_VSketchFabViewervue_type_script_lang_ts_=VSketchFabViewervue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VSketchFabViewervue_type_script_lang_ts_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"block max-w-[1000px] max-h-[500px] aspect-[2/1]"},[_c("iframe",{ref:"node",staticClass:"h-full w-full",attrs:{id:"sketchfab-iframe",src:"",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",title:this.label,"aria-label":this.label,allow:"autoplay; fullscreen; vr",autoplay:!0}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"VSketchFabViewer",description:"",tags:{},props:[{name:"uid",type:{name:"string"},required:!0}],events:[{name:"failure"}]}}}]);