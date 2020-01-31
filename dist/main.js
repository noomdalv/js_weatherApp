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

eval("// HTML Variables //\n\nconst cityName = document.getElementById('cityInput');\nconst searchBtn = document.getElementById('searchBtn');\nconst errorMsg = document.getElementById('errorMsg');\nconst displayInfo = document.getElementById('displayInfo');\nconst cityInfo = document.getElementById('cityInfo');\nconst tempInfo = document.getElementById('tempInfo');\nconst switchTempBtn = document.getElementById('switchTempBtn');\nconst statusInfo = document.getElementById('statusInfo');\nconst statusImg = document.getElementById('statusImg');\nconst windInfo = document.getElementById('windInfo');\nlet temp; let\n  tempUnit;\n\nconst getFahrenheit = (tempCelsius) => {\n  const tempFahrenheit = (tempCelsius / (5 / 9)) + 32;\n  temp = tempFahrenheit.toFixed(2);\n  tempUnit = 'F';\n  tempInfo.innerHTML = (`${temp} °F`);\n  switchTempBtn.innerHTML = 'Switch to °C';\n};\n\nconst getCelsius = (tempFahrenheit) => {\n  const tempCelsius = (tempFahrenheit - 32) * (5 / 9);\n  temp = tempCelsius.toFixed(2);\n  tempUnit = 'C';\n  tempInfo.innerHTML = (`${temp} °C`);\n  switchTempBtn.innerHTML = 'Switch to °F';\n};\n\nconst displayWeatherData = (data) => {\n  if (data.cod === '200') {\n    errorMsg.style.visibility = 'hidden';\n    displayInfo.style.visibility = 'visible';\n    cityInfo.innerHTML = data.city.name;\n    windInfo.innerHTML = (`${data.list[0].wind.speed} m/s`);\n    statusInfo.innerHTML = data.list[0].weather[0].description;\n    statusImg.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;\n    tempInfo.innerHTML = `${data.list[0].main.temp} °C`;\n    temp = data.list[0].main.temp;\n    tempUnit = 'C';\n  } else if (data.cod === '404') {\n    errorMsg.style.visibility = 'visible';\n    displayInfo.style.visibility = 'hidden';\n  }\n};\n\nconst getWeather = async () => {\n  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c414b36c42d82ca02be257a1553e41c6&units=metric&q=${cityName.value}`);\n  const weatherData = await response.json();\n  await displayWeatherData(weatherData);\n};\n\nsearchBtn.addEventListener('click', () => {\n  if (cityName.value.length > 0) {\n    getWeather(cityName);\n  }\n});\n\ncityName.addEventListener('keydown', (event) => {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    searchBtn.click();\n  }\n});\n\nswitchTempBtn.addEventListener('click', () => {\n  if (tempUnit === 'C') {\n    getFahrenheit(temp);\n  } else if (tempUnit === 'F') {\n    getCelsius(temp);\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });