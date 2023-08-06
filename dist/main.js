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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n// Path: src/weatherv2.js\n\n\n\n\nconst APIKEY = \"21885e66ee224fc9a14104524231507\"\n\nlet weather = await createWeather('Rosario')\nlet searchButton = document.querySelector(\".search-button\")\n\n// todayWeather: location, weather\nlet todayWeather = document.querySelector(\".today-weather\")\n\n// todayStats: humidity, rain chance\nlet todayStats = document.querySelector(\".today-stats\")\n\n// hourlyWeather: today temps per 4 hours\nlet hourlyWeather = document.querySelector(\".hourly-weather\")\n\n// forecastWeather: 2 days forecast\nlet forecastWeather = document.querySelector(\".forecast-weather\")\n\n\n//create weather object\nasync function createWeather(location) {    \n    let weather = new _weather__WEBPACK_IMPORTED_MODULE_0__.Weather(await searchLocation(APIKEY, location))\n    return weather\n}\n\n//api request, returns data object\nasync function searchLocation(APIKEY, location) {\n    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=3`, {mode: \"cors\"})\n    let data = await response.json()\n    return data\n}\n\n//renders html elements\nfunction render(){\n    todayWeather.appendChild(weather.renderLocationCard())\n    todayWeather.appendChild(weather.renderWeatherCard())\n    todayStats.appendChild(weather.renderHumidity())\n    todayStats.appendChild(weather.renderRainChance())\n    hourlyWeather.appendChild(weather.renderTodayTemps())\n    forecastWeather.appendChild(weather.renderForecast())\n}\n\nsearchButton.addEventListener(\"click\", async function() {\n    let location = document.querySelector(\".search-input\").value\n    weather = await createWeather(location)\n    hourlyWeather.innerHTML = \"\"\n    todayWeather.innerHTML = \"\"\n    todayStats.innerHTML = \"\"\n    forecastWeather.innerHTML = \"\"\n    render()\n})\n\nrender()\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Weather: () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather {\n    constructor(data) {\n        this.data = data\n        this.forecast = data.forecast\n        this.today = data.forecast.forecastday[0]\n        this.tomorrow = data.forecast.forecastday[1]\n        this.tomorrow2 = data.forecast.forecastday[2]\n    }\n    \n    \n    //location getters & render\n    getName() {\n        return this.data.location.name\n    }\n    \n    getCountry() {\n        return this.data.location.country\n    }\n    \n    getRegion() {\n        return this.data.location.region\n    }\n    \n    getDay() {\n        return this.data.location.localtime.split(' ')[0]\n    }\n    \n    getTime() {\n        return this.data.location.localtime.split(' ')[1]\n    }\n    \n    getIsDay(){\n        return this.data.current.is_day\n    }\n    \n    renderLocationCard() {\n        let card = document.createElement('div')\n        card.classList.add('location-card')\n        card.innerHTML = `\n            <h3 class = \"location-name\">${this.getName()}</h3>\n            <h5 class = \"location-region\">${this.getRegion()}, ${this.getCountry()}</h5>\n            <h5 class = \"location-day\">${this.getDay()}</h5>\n            <h5 class = \"location-hour\">${this.getTime()}</h5>\n            `\n        return card\n    }\n\n\n    //current getters & render\n    getTemp() {\n        return this.data.current.temp_c + ' °C'\n    }\n\n    getCondition() {\n        return this.data.current.condition.text\n    }\n\n    getFeelsLike() {\n        return this.data.current.feelslike_c + ' °C'\n    }\n\n    getCloud() {\n        if(this.data.current.cloud > 66) {\n            return 'cloudy'\n        }\n        if(this.data.current.cloud > 33 && this.data.current.cloud < 66) {\n            return 'partly cloudy'\n        }\n        else {\n            return 'clear'\n        }\n    }\n\n    getMinMaxTemp() {\n        return this.today.day.mintemp_c + ' °C / ' + this.today.day.maxtemp_c + ' °C'\n    }\n\n    renderWeatherCard() {\n        let card = document.createElement('div')\n        card.classList.add('weather-card')\n        card.innerHTML = `\n            <h3 class = \"weather-temp\">${this.getTemp()}</h3>\n            <h5 class = \"weather-condition\">${this.getCondition()}</h5>\n            <h5 class = \"weather-feels-like\">Feels like: ${this.getFeelsLike()}</h5>\n            <h5 class = \"weather-cloud\">Clouds: ${this.getCloud()}</h5>\n            <h5 class = \"weather-minmax\">Min/Max: ${this.getMinMaxTemp()}</h5>\n            `\n        return card\n    }\n\n\n    //today stats getters & render\n    getRainChance() {\n        return this.today.day.daily_chance_of_rain + '%'\n    }\n\n    renderRainChance() {\n        let card = document.createElement('div')\n        card.classList.add('rain-chance')\n        card.innerHTML = `\n            <h5 class = \"rain-chance\">Rain chance: ${this.getRainChance()}</h5>\n            `\n        return card\n    }\n\n\n    getHumidity() {\n        return this.today.day.avghumidity + '%'\n    }\n\n    renderHumidity() {\n        let card = document.createElement('div')\n        card.classList.add('humidity')\n        card.innerHTML = `\n            <h5 class = \"humidity\">Humidity: ${this.getHumidity()}</h5>\n            `\n        return card\n    }\n\n    \n    //today per 4hours getters & render\n    getTodayTemps() {\n        let temps = {\n            '8:00': {\n                temp: this.today.hour[8].temp_c + ' °C',\n                condition: this.today.hour[8].condition.text,\n                feelslike_c: this.today.hour[8].feelslike_c + ' °C'\n            },\n            '12:00': {\n                temp: this.today.hour[12].temp_c + ' °C',\n                condition: this.today.hour[12].condition.text,\n                feelslike_c: this.today.hour[12].feelslike_c + ' °C'\n            },\n            '16:00': {\n                temp: this.today.hour[16].temp_c + ' °C',\n                condition: this.today.hour[16].condition.text,\n                feelslike_c: this.today.hour[16].feelslike_c + ' °C'\n            },\n            '20:00': {\n                temp: this.today.hour[20].temp_c + ' °C',\n                condition: this.today.hour[20].condition.text,\n                feelslike_c: this.today.hour[20].feelslike_c + ' °C'\n            }\n        }\n        return temps\n    }\n\n    renderTodayTemps() {\n        let tempsData = this.getTodayTemps()\n        let temps = document.createElement('div')\n        temps.classList.add('today-temps')\n        for(let temp in tempsData) {\n            let tempCard = document.createElement('div')\n            tempCard.classList.add('temp-card')\n            tempCard.innerHTML = `\n                <h5 class = \"temp-hour\">${temp}</h5>\n                <h5 class = \"temp-temp\">${tempsData[temp].temp}</h5>\n                <h5 class = \"temp-condition\">${tempsData[temp].condition}</h5>\n                <h5 class = \"temp-feels-like\">Feels like: ${tempsData[temp].feelslike_c}</h5>\n                `\n            temps.appendChild(tempCard)\n        }\n        return temps\n    }\n\n    //forecast getters and render\n    getTomorrowData() {\n        let data = {\n            date: this.tomorrow.date.split('-')[1] + '/' + this.tomorrow.date.split('-')[2],\n            day: this.tomorrow.day.maxtemp_c + ' °C / ' + this.tomorrow.day.mintemp_c + ' °C',\n            condition: this.tomorrow.day.condition.text,\n            rainChance: this.tomorrow.day.daily_chance_of_rain + '%'\n        }\n        return data\n    }\n\n    getTomorrow2Data() {\n        let data = {\n            date: this.tomorrow2.date.split('-')[1] + '/' + this.tomorrow.date.split('-')[2],\n            day: this.tomorrow2.day.maxtemp_c + ' °C / ' + this.tomorrow2.day.mintemp_c + ' °C',\n            condition: this.tomorrow2.day.condition.text,\n            rainChance: this.tomorrow2.day.daily_chance_of_rain + '%'\n        }\n        return data\n    }\n\n    renderForecast() {\n        let forecastCard = document.createElement('div')\n        let tomorrowCard = document.createElement('div')\n        let tomorrow2Card = document.createElement('div')\n        forecastCard.classList.add('forecast-card')\n        tomorrowCard.classList.add('tomorrow-card')\n        tomorrow2Card.classList.add('tomorrow2-card')\n        forecastCard.innerHTML = `\n            <h3 class = \"forecast-title\">Forecast</h3>\n            `\n        tomorrowCard.innerHTML = `\n            <h5 class = \"tomorrow-title\">${this.getTomorrowData().date}</h5>\n            <h5 class = \"tomorrow-day\">${this.getTomorrowData().day}</h5>\n            <h5 class = \"tomorrow-condition\">${this.getTomorrowData().condition}</h5>\n            <h5 class = \"tomorrow-rain-chance\">Rain chance: ${this.getTomorrowData().rainChance}</h5>\n            `\n        tomorrow2Card.innerHTML = `\n            <h5 class = \"tomorrow2-title\">${this.getTomorrow2Data().date}</h5>\n            <h5 class = \"tomorrow2-day\">${this.getTomorrow2Data().day}</h5>\n            <h5 class = \"tomorrow2-condition\">${this.getTomorrow2Data().condition}</h5>\n            <h5 class = \"tomorrow2-rain-chance\">Rain chance: ${this.getTomorrow2Data().rainChance}</h5>\n            `\n        forecastCard.appendChild(tomorrowCard)\n        forecastCard.appendChild(tomorrow2Card)\n        return forecastCard\n    }\n}\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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