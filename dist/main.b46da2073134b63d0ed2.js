/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/main.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/main.css ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  height: 100%;\\n  font-family: 'Montserrat', sans-serif;\\n  font-size: 14px;\\n  font-weight: 700;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  -webkit-box-sizing: inherit;\\n          box-sizing: inherit;\\n}\\n\\nbody {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  height: 100%;\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-color: black;\\n  color: white;\\n}\\n\\nh1 {\\n  margin-bottom: 10;\\n  font-size: 30px;\\n}\\n\\nh3 {\\n  font-size: 20px;\\n}\\n\\na {\\n  color: black;\\n  text-decoration: none;\\n}\\n\\ninput {\\n  -webkit-box-shadow: none;\\n          box-shadow: none;\\n}\\n\\ntextarea {\\n  resize: none;\\n  outline: none;\\n  -webkit-box-shadow: none;\\n          box-shadow: none;\\n  font-size: 2rem;\\n}\\n\\n.content {\\n  max-width: 1020px;\\n  width: 100%;\\n  margin: 0 auto;\\n  padding: 10px;\\n}\\n\\n.header {\\n  border-bottom: 2px solid #c3a000;\\n}\\n\\n.header__content {\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  height: 100px;\\n}\\n\\n.movie-list-item {\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  margin-top: 20px;\\n  padding: 20px;\\n  border: 2px solid #c3a000;\\n  border-radius: 20px;\\n  background-color: black;\\n  -webkit-transition: 1s;\\n  transition: 1s;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\n\\n.movie-list-item:hover {\\n  -webkit-transform: scale(1.1);\\n          transform: scale(1.1);\\n}\\n\\n.movie-list-item__image {\\n  max-width: 170px;\\n  margin-right: 30px;\\n}\\n\\n@media screen and (max-width: 374px) {\\n  .movie-list-item__image {\\n    max-width: 100px;\\n  }\\n}\\n\\n.movie-list-item__info {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n}\\n\\n.movie-list-item__title {\\n  margin-bottom: 20px;\\n  font-size: 2rem;\\n}\\n\\n@media screen and (max-width: 767px) {\\n  .movie-list-item__title {\\n    font-size: 1.5rem;\\n  }\\n}\\n\\n@media screen and (max-width: 374px) {\\n  .movie-list-item__title {\\n    font-size: 1rem;\\n  }\\n}\\n\\n.movie-list-item__tagline {\\n  font-size: 1.3rem;\\n}\\n\\n@media screen and (max-width: 767px) {\\n  .movie-list-item__tagline {\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media screen and (max-width: 374px) {\\n  .movie-list-item__tagline {\\n    font-size: 0.8rem;\\n  }\\n}\\n\\n.movie-list-item__rating {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  margin-top: 20px;\\n  font-size: 1.3rem;\\n}\\n\\n@media screen and (max-width: 767px) {\\n  .movie-list-item__rating {\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media screen and (max-width: 374px) {\\n  .movie-list-item__rating {\\n    font-size: 0.7rem;\\n  }\\n}\\n\\n.movie-list-item__score {\\n  margin-right: 10px;\\n}\\n\\n.loader {\\n  position: fixed;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-transform: scale(1);\\n          transform: scale(1);\\n  background-color: #c3a000;\\n}\\n\\n.loader_disable {\\n  -webkit-transform: scale(0);\\n          transform: scale(0);\\n}\\n\\n.loader__circle {\\n  width: 50px;\\n  height: 50px;\\n  background-color: white;\\n  border: 5px solid white;\\n  border-radius: 50%;\\n  border-bottom-left-radius: 0;\\n  -webkit-animation: rotate linear 0.6s infinite;\\n          animation: rotate linear 0.6s infinite;\\n}\\n\\n@-webkit-keyframes rotate {\\n  0% {\\n    -webkit-transform: rotate(0deg);\\n            transform: rotate(0deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n            transform: rotate(360deg);\\n  }\\n}\\n\\n@keyframes rotate {\\n  0% {\\n    -webkit-transform: rotate(0deg);\\n            transform: rotate(0deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n            transform: rotate(360deg);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/main.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./assets/placeholder.png":
/*!********************************!*\
  !*** ./assets/placeholder.png ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5ed52dd9ba109c67f1605314b6999d92.png\");\n\n//# sourceURL=webpack:///./assets/placeholder.png?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/main.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./scripts/components/Controller.js":
/*!******************************************!*\
  !*** ./scripts/components/Controller.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _helpers_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/constants.js */ \"./scripts/helpers/constants.js\");\n/* harmony import */ var _helpers_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/functions.js */ \"./scripts/helpers/functions.js\");\n\r\n\r\n\r\n// var constants = require('../helpers/constants.js');\r\n// var functions = require('../helpers/functions.js');\r\n\r\n// var DATA_LINK = require('../helpers/constants.js');\r\n// var getData = require('../helpers/functions.js');\r\n// var getImage = require('../helpers/functions.js');\r\n// var createCard = require('../helpers/functions.js');\r\n\r\nclass Controller {\r\n  constructor(placeholder) {\r\n    this.placeholder = placeholder;\r\n    // this.movieList = document.querySelector('.movie-list');\r\n  }\r\n\r\n  insertCards(data) {\r\n    var movieList = document.querySelector('.movie-list');\r\n    var placeholder = this.placeholder;\r\n    data.forEach(function (a) {\r\n      (0,_helpers_functions_js__WEBPACK_IMPORTED_MODULE_1__.getImage)(a, placeholder)\r\n        .then(img => movieList.append((0,_helpers_functions_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(a, img)))\r\n        .catch(error => console.log(error))\r\n    })\r\n  }\r\n\r\n  start() {\r\n    console.log(this)\r\n    var loader = document.querySelector('.loader');\r\n\r\n    (0,_helpers_functions_js__WEBPACK_IMPORTED_MODULE_1__.getData)(_helpers_constants_js__WEBPACK_IMPORTED_MODULE_0__.DATA_LINK)\r\n      .then(data => this.insertCards(data))\r\n      .then(() => loader.classList.toggle('loader_disable'))\r\n      .catch(error => console.log(error));\r\n  }\r\n}\r\n\r\n// var controller = new Controller();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\r\n\n\n//# sourceURL=webpack:///./scripts/components/Controller.js?");

/***/ }),

/***/ "./scripts/helpers/constants.js":
/*!**************************************!*\
  !*** ./scripts/helpers/constants.js ***!
  \**************************************/
/*! namespace exports */
/*! export DATA_LINK [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DATA_LINK\": () => /* binding */ DATA_LINK\n/* harmony export */ });\nvar DATA_LINK = 'http://react-cdp-api.herokuapp.com/movies/';\r\n\r\n// module.exports(DATA_LINK);\r\n\n\n//# sourceURL=webpack:///./scripts/helpers/constants.js?");

/***/ }),

/***/ "./scripts/helpers/functions.js":
/*!**************************************!*\
  !*** ./scripts/helpers/functions.js ***!
  \**************************************/
/*! namespace exports */
/*! export createCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getImage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => /* binding */ getData,\n/* harmony export */   \"getImage\": () => /* binding */ getImage,\n/* harmony export */   \"createCard\": () => /* binding */ createCard\n/* harmony export */ });\nfunction getData(link) {\r\n  return fetch(link)\r\n    .then(responce => responce.json())\r\n    .then(json => json.data)\r\n}\r\n\r\nfunction getImage(data, image) {\r\n  return fetch(data.poster_path)\r\n    .then(img => img.blob())\r\n    .then(function (blob) {\r\n      if (blob.type === 'image/jpeg') {\r\n        return URL.createObjectURL(blob);\r\n      }\r\n      return image\r\n    })\r\n    .catch(error => console.log(error));\r\n}\r\n\r\nfunction createCard(object, image) {\r\n  var mainBlock = document.createElement('div');\r\n  mainBlock.className = 'movie-list__item movie-list-item';\r\n\r\n  var img = document.createElement('img');\r\n  img.setAttribute('src', image);\r\n  img.className = 'movie-list-item__image';\r\n  mainBlock.append(img);\r\n\r\n  var infoBlock = document.createElement('div');\r\n  infoBlock.className = 'movie-list-item__info';\r\n  mainBlock.append(infoBlock);\r\n\r\n  var title = document.createElement('h3');\r\n  title.className = 'movie-list-item__title';\r\n  title.textContent = object.title;\r\n  infoBlock.append(title);\r\n\r\n  var tagline = document.createElement('p');\r\n  tagline.className = 'movie-list-item__tagline';\r\n  tagline.textContent = object.tagline;\r\n  infoBlock.append(tagline);\r\n\r\n  var rateBlock = document.createElement('div');\r\n  rateBlock.className = 'movie-list-item__rating';\r\n  infoBlock.append(rateBlock);\r\n\r\n  var score = document.createElement('p');\r\n  score.className = 'movie-list-item__score';\r\n  score.textContent = `Score: ${object.vote_average}`;\r\n  rateBlock.append(score);\r\n\r\n  var date = document.createElement('p');\r\n  date.className = 'movie-list-item__date';\r\n  date.textContent = `Release Date: ${object.release_date}`;\r\n  rateBlock.append(date);\r\n\r\n  return mainBlock;\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/helpers/functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("// import controller from './components/Controller.js';\r\nvar Controller = __webpack_require__(/*! ./components/Controller.js */ \"./scripts/components/Controller.js\");\r\nvar placeholder = __webpack_require__(/*! ../assets/placeholder.png */ \"./assets/placeholder.png\");\r\n__webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\r\n\r\n// controller.default.start();\r\nconsole.log(Controller)\r\nvar controller = new Controller.default(placeholder.default);\r\ncontroller.start();\n\n//# sourceURL=webpack:///./scripts/main.js?");
})();

/******/ })()
;