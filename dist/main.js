/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"hi\")\r\n\r\nconst cityName = document.getElementById('cityInput');\r\nconst searchBtn = document.getElementById('searchBtn');\r\nconst cityInfo = document.getElementById('cityInfo');\r\nconst tempInfo = document.getElementById('tempInfo');\r\n\r\nconst getFahrenheit = (tempCelsius) => {\r\n\tlet tempFahrenheit = (tempCelsius / (5/9)) + 32;\r\n\tconsole.log(tempFahrenheit.toFixed(2) + \" °F\");\r\n}\r\n\r\nconst getCelsius = (tempFahrenheit) => {\r\n\tlet tempCelsius = (tempFahrenheit - 32) * (5/9);\r\n\tconsole.log(tempCelsius.toFixed(2) + \" °C\");\r\n}\r\n\r\ngetFahrenheit(5.15);\r\ngetCelsius(41.27);\r\n\r\nconst getWeather = async (city) => {\r\n\tconst response = await fetch(\"http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c414b36c42d82ca02be257a1553e41c6&units=metric&q=\" + cityName.value);\r\n\tconst weatherData = await response.json();\r\n\tconsole.log(weatherData);\r\n\tcityInfo.innerHTML = weatherData.city.name;\r\n\ttempCelsius = weatherData.list[0].main.temp;\r\n\ttempInfo.innerHTML = tempCelsius + \" °C\";\r\n}\r\n\r\nsearchBtn.addEventListener(\"click\", () => {\r\n\tgetWeather(cityName);\r\n})\r\n\r\ncityName.addEventListener(\"keydown\", () => {\r\n\tif (event.key === \"Enter\") {\r\n    event.preventDefault();\r\n\t\tconsole.log(\"zzzzzz\")\r\n\t\tsearchBtn.click();\r\n\t}\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });