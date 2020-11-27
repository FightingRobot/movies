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

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./scripts/components/Controller.js":
/*!******************************************!*\
  !*** ./scripts/components/Controller.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 29:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var constants = __webpack_require__(/*! ../helpers/constants.js */ \"./scripts/helpers/constants.js\");\r\nvar functions = __webpack_require__(/*! ../helpers/functions.js */ \"./scripts/helpers/functions.js\");\r\n\r\nclass Controller {\r\n  constructor(placeholder) {\r\n    this.placeholder = placeholder;\r\n  }\r\n\r\n  insertCards(data) {\r\n    var movieList = document.querySelector('.movie-list');\r\n    var placeholder = this.placeholder;\r\n    data.forEach(function (a) {\r\n      functions.getImage(a, placeholder)\r\n        .then(img => movieList.append(functions.createCard(a, img)))\r\n        .catch(error => console.log(error))\r\n    })\r\n  }\r\n\r\n  start() {\r\n    var loader = document.querySelector('.loader');\r\n\r\n    functions.getData(constants.DATA_LINK)\r\n      .then(data => this.insertCards(data))\r\n      .then(() => loader.classList.toggle('loader_disable'))\r\n      .catch(error => console.log(error));\r\n  }\r\n}\r\n\r\nmodule.exports = Controller;\r\n\n\n//# sourceURL=webpack:///./scripts/components/Controller.js?");

/***/ }),

/***/ "./scripts/helpers/constants.js":
/*!**************************************!*\
  !*** ./scripts/helpers/constants.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

eval("var DATA_LINK = 'http://react-cdp-api.herokuapp.com/movies/';\r\n\r\nmodule.exports = { DATA_LINK };\r\n\n\n//# sourceURL=webpack:///./scripts/helpers/constants.js?");

/***/ }),

/***/ "./scripts/helpers/functions.js":
/*!**************************************!*\
  !*** ./scripts/helpers/functions.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 60:0-14 */
/***/ ((module) => {

eval("function getData(link) {\r\n  return fetch(link)\r\n    .then(responce => responce.json())\r\n    .then(json => json.data)\r\n}\r\n\r\nfunction getImage(data, image) {\r\n  return fetch(data.poster_path)\r\n    .then(img => img.blob())\r\n    .then(function (blob) {\r\n      if (blob.type === 'image/jpeg') {\r\n        return URL.createObjectURL(blob);\r\n      }\r\n      return image\r\n    })\r\n    .catch(error => console.log(error));\r\n}\r\n\r\nfunction createCard(object, image) {\r\n  var mainBlock = document.createElement('div');\r\n  var img = document.createElement('img');\r\n  var infoBlock = document.createElement('div');\r\n  var title = document.createElement('h3');\r\n  var tagline = document.createElement('p');\r\n  var rateBlock = document.createElement('div');\r\n  var score = document.createElement('p');\r\n  var date = document.createElement('p');\r\n\r\n  mainBlock.className = 'movie-list__item movie-list-item';\r\n\r\n  img.setAttribute('src', image);\r\n  img.className = 'movie-list-item__image';\r\n  mainBlock.append(img);\r\n\r\n  infoBlock.className = 'movie-list-item__info';\r\n  mainBlock.append(infoBlock);\r\n\r\n  title.className = 'movie-list-item__title';\r\n  title.textContent = object.title;\r\n  infoBlock.append(title);\r\n\r\n  tagline.className = 'movie-list-item__tagline';\r\n  tagline.textContent = object.tagline;\r\n  infoBlock.append(tagline);\r\n\r\n  rateBlock.className = 'movie-list-item__rating';\r\n  infoBlock.append(rateBlock);\r\n\r\n  score.className = 'movie-list-item__score';\r\n  score.textContent = `Score: ${object.vote_average}`;\r\n  rateBlock.append(score);\r\n\r\n  date.className = 'movie-list-item__date';\r\n  date.textContent = `Release Date: ${object.release_date}`;\r\n  rateBlock.append(date);\r\n\r\n  return mainBlock;\r\n}\r\n\r\nmodule.exports = { getData, getImage, createCard };\r\n\n\n//# sourceURL=webpack:///./scripts/helpers/functions.js?");

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
/******/ 			// no module.id needed
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
eval("var Controller = __webpack_require__(/*! ./components/Controller.js */ \"./scripts/components/Controller.js\");\r\nvar placeholder = __webpack_require__(/*! ../assets/placeholder.png */ \"./assets/placeholder.png\");\r\n__webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\r\n\r\n// controller.default.start();\r\nconsole.log(Controller)\r\nvar controller = new Controller(placeholder.default);\r\ncontroller.start();\n\n//# sourceURL=webpack:///./scripts/main.js?");
})();

/******/ })()
;