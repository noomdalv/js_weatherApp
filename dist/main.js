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

eval("// HTML Variables //\r\n\r\nconst cityName = document.getElementById('cityInput');\r\nconst searchBtn = document.getElementById('searchBtn');\r\nconst errorMsg = document.getElementById('errorMsg');\r\nconst displayInfo = document.getElementById('displayInfo');\r\nconst cityInfo = document.getElementById('cityInfo');\r\nconst tempInfo = document.getElementById('tempInfo');\r\nconst switchTempBtn = document.getElementById('switchTempBtn');\r\nconst statusInfo = document.getElementById('statusInfo');\r\nconst statusImg = document.getElementById('statusImg');\r\nconst windInfo = document.getElementById('windInfo');\r\nlet temp, tempUnit;\r\n\r\nconst getFahrenheit = (tempCelsius) => {\r\n\tlet tempFahrenheit = (tempCelsius / (5/9)) + 32;\r\n\ttemp = tempFahrenheit.toFixed(2);\r\n\ttempUnit = \"F\";\r\n\ttempInfo.innerHTML = (temp + \" °F\");\r\n\tswitchTempBtn.innerHTML = \"Switch to °C\";\r\n}\r\n\r\nconst getCelsius = (tempFahrenheit) => {\r\n\tlet tempCelsius = (tempFahrenheit - 32) * (5/9);\r\n\ttemp = tempCelsius.toFixed(2);\r\n\ttempUnit = \"C\"\r\n\ttempInfo.innerHTML = (temp + \" °C\");\r\n\tswitchTempBtn.innerHTML = \"Switch to °F\";\r\n}\r\n\r\nconst displayWeatherData = (data) => {\r\n\tif (data.cod == \"200\") {\r\n\t\terrorMsg.style.visibility = \"hidden\";\r\n\t\tdisplayInfo.style.visibility = \"visible\";\r\n\t\tcityInfo.innerHTML = data.city.name;\r\n\t\twindInfo.innerHTML = ((data.list[0].wind.speed) + \" m/s\");\r\n\t\tstatusInfo.innerHTML = data.list[0].weather[0].description;\r\n\t\tstatusImg.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;\r\n\t\ttempInfo.innerHTML = data.list[0].main.temp + \" °C\";\r\n\t\ttemp = data.list[0].main.temp;\r\n\t\ttempUnit = \"C\";\r\n\t} else if (data.cod == \"404\") {\r\n\t\terrorMsg.style.visibility = \"visible\";\t\t\r\n\t\tdisplayInfo.style.visibility = \"hidden\";\r\n\t}\r\n}\r\n\r\nconst getWeather = async (city) => {\r\n\t\tconst response = await fetch(\"http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c414b36c42d82ca02be257a1553e41c6&units=metric&q=\" + cityName.value);\r\n\t\tconst weatherData = await response.json();\r\n\t\tconsole.log(weatherData);\r\n\t\tawait displayWeatherData(weatherData);\r\n}\r\n\r\nsearchBtn.addEventListener(\"click\", () => {\r\n\tif (cityName.value.length > 0) {\r\n\t\tgetWeather(cityName);\r\n\t}\r\n})\r\n\r\ncityName.addEventListener(\"keydown\", () => {\r\n\tif (event.key === \"Enter\") {\r\n    event.preventDefault();\r\n\t\tsearchBtn.click();\r\n\t}\r\n})\r\n\r\nswitchTempBtn.addEventListener(\"click\", () => {\r\n\tconsole.log(\"temp = \" + temp);\r\n\tconsole.log(\"tempUnit = \" + tempUnit);\r\n\tif (tempUnit === \"C\") {\r\n\t\tconsole.log(\"a\");\r\n\t\tgetFahrenheit(temp);\r\n\t} else if (tempUnit === \"F\") {\r\n\t\tconsole.log(\"b\");\r\n\t\tgetCelsius(temp);\r\n\t}\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });