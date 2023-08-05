/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherv2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherv2 */ \"./src/weatherv2.js\");\n// Path: src/weatherv2.js\n\n\n\n\nconst APIKEY = \"21885e66ee224fc9a14104524231507\"\nlet location = 'rosario'\nlet weather = new _weatherv2__WEBPACK_IMPORTED_MODULE_0__.weather2(await searchLocation(APIKEY, location))\n\nasync function searchLocation(APIKEY, location) {\n    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=3`, {mode: \"cors\"})\n    let data = await response.json()\n    return data\n}\n\n\n\n\n\nconsole.log(weather)\nconsole.log(weather.getName())\nconsole.log(weather.getRegion())\nconsole.log(weather.getCountry())\nconsole.log(\"\")\nconsole.log(weather.getDay())\nconsole.log(weather.getFeelsLike())\n\nconsole.log(weather.getForecast())\nconsole.log(weather.day1)\nconsole.log(weather.day2)\n\nlet todayWeather = document.querySelector(\".today-weather\")\ntodayWeather.appendChild(weather.renderCard())\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherv2.js":
/*!**************************!*\
  !*** ./src/weatherv2.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weather2: () => (/* binding */ weather2)\n/* harmony export */ });\nclass weather2 {\n    constructor(data) {\n        this.data = data\n        this.forecast = data.forecast\n        this.day0 = data.forecast.forecastday[0]\n        this.day1 = data.forecast.forecastday[1]\n        this.day2 = data.forecast.forecastday[2]\n    }\n\n\n    \n    //location getters and render\n    getName() {\n        return this.data.location.name\n    }\n\n    getCountry() {\n        return this.data.location.country\n    }\n\n    getRegion() {\n        return this.data.location.region\n    }\n\n    getDay() {\n        return this.data.location.localtime.split(' ')[0]\n    }\n\n    getTime() {\n        return this.data.location.localtime.split(' ')[1]\n    }\n    \n    renderCard() {\n        let card = document.createElement('div')\n        card.classList.add('card')\n        card.innerHTML = `\n        <div class=\"card-header\">\n            <h3>${this.getName()}</h3>\n            <h5>${this.getRegion()}, ${this.getCountry()}</h5>\n            <h5>${this.getDay()}</h5>\n            <h5>${this.getTime()}</h5>\n        </div>\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">${this.getTemp()}</h5>\n            <p class=\"card-text\">${this.getCondition()}</p>\n            <p class=\"card-text\">${this.getFeelsLike()}</p>\n        </div>\n        `\n        return card\n    }\n\n\n    //current getters\n    getTemp() {\n        return this.data.current.temp_c + ' °C'\n    }\n\n    getCondition() {\n        return this.data.current.condition.text\n    }\n\n    getFeelsLike() {\n        return this.data.current.feelslike_c + ' °C'\n    }\n\n    getCloud() {\n        if(this.data.current.cloud > 66) {\n            return 'cloudy'\n        }\n        if(this.data.current.cloud > 33 && this.data.current.cloud < 66) {\n            return 'partly cloudy'\n        }\n        else {\n            return 'clear'\n        }\n    }\n\n    getForecast() {\n        return this.data.forecast\n    }\n}\n    \n\n\n//# sourceURL=webpack://weather-app/./src/weatherv2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;