/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM-weather-info.js":
/*!*********************************!*\
  !*** ./src/DOM-weather-info.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _temp_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp-toggle */ "./src/temp-toggle.js");


const submitButton = document.querySelector(".submit-button");

const displayWeatherInfo = async (weatherData) => {
  const body = document.querySelector("body");
  const title = document.querySelector(".title");
  const weather = document.querySelector(".weather");
  const temp = document.querySelector(".temp");
  const feels = document.querySelector(".feels");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");
  const cloud = document.querySelector(".cloud");
  title.textContent = `Weather Information For ${weatherData.city}`;
  weather.textContent = `Weather: ${weatherData.weather}`;
  if (weatherData.weather === "Clear") body.style.backgroundColor = "aqua";
  if (
    weatherData.weather === "Clouds" ||
    weatherData.weather === "Drizzle" ||
    weatherData.weather === "Mist" ||
    weatherData.weather === "Haze" ||
    weatherData.weather === "Dust" ||
    weatherData.weather === "Fog" ||
    weatherData.weather === "Sand"
  )
    body.style.backgroundColor = "lightgrey";
  if (
    weatherData.weather === "Rain" ||
    weatherData.weather === "Thunderstorm" ||
    weatherData.weather === "Smoke" ||
    weatherData.weather === "Ash" ||
    weatherData.weather === "Tornado"
  )
    body.style.backgroundColor = "grey";
  if (weatherData.weather === "Snow" || weatherData.weather === "Squall")
    body.style.backgroundColor = "whitesmoke";
  if (_temp_toggle__WEBPACK_IMPORTED_MODULE_0__.cel) {
    temp.textContent = `Temperature: ${Math.round(
      weatherData.temp - 273.15
    )}°C`;
    feels.textContent = `Feels Like: ${Math.round(
      weatherData.feels - 273.15
    )}°C`;
  } else {
    temp.textContent = `Temperature: ${Math.round(
      (weatherData.temp - 273.15) * (9 / 5) + 32
    )}°F`;
    feels.textContent = `Feels Like: ${Math.round(
      (weatherData.feels - 273.15) * (9 / 5) + 32
    )}°F`;
  }
  wind.textContent = `Wind Speed: ${Math.round(weatherData.wind)} km/h`;
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
  cloud.textContent = `Cloud Cover: ${weatherData.cloud}%`;
  submitButton.textContent = "Submit";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeatherInfo);


/***/ }),

/***/ "./src/page-setup.js":
/*!***************************!*\
  !*** ./src/page-setup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-info */ "./src/weather-info.js");


const pageSetup = async () => {
  const submitButton = document.querySelector(".submit-button");
  const cityInput = document.getElementById("city-input");
  const cityError = document.querySelector(".city-input-error");
  cityInput.value = "Dubai";
  (0,_weather_info__WEBPACK_IMPORTED_MODULE_0__["default"])("Dubai");

  submitButton.addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city !== "") {
      cityError.textContent = "";
      (0,_weather_info__WEBPACK_IMPORTED_MODULE_0__["default"])(city);
    } else cityError.textContent = "Please Enter a City or Town.";
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageSetup);


/***/ }),

/***/ "./src/temp-toggle.js":
/*!****************************!*\
  !*** ./src/temp-toggle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cel": () => (/* binding */ cel),
/* harmony export */   "createTempToggle": () => (/* binding */ createTempToggle)
/* harmony export */ });
// eslint-disable-next-line import/no-mutable-exports
let cel = true;

const createTempToggle = async () => {
  const tempToggleButton = document.querySelector(".temp-toggle");
  const submitButton = document.querySelector(".submit-button");

  tempToggleButton.addEventListener("click", () => {
    if (cel) {
      cel = false;
    } else cel = true;
    submitButton.click();
  });
};




/***/ }),

/***/ "./src/weather-info.js":
/*!*****************************!*\
  !*** ./src/weather-info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_weather_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-weather-info */ "./src/DOM-weather-info.js");


const submitButton = document.querySelector(".submit-button");

const getLocationData = async (city) => {
  const cityError = document.querySelector(".city-input-error");
  cityError.textContent = "";
  try {
    const rawLocationData = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=496bd5c94da3546fc96dc3a570f78b1f`
    );
    const locationData = await rawLocationData.json();
    return [locationData[0].lat, locationData[0].lon];
  } catch (err) {
    submitButton.textContent = "Submit";
    cityError.textContent =
      "Sorry, that is either not a valid city/town or information for that area is not available.";
    return null;
  }
};

const getWeatherData = async (city) => {
  submitButton.textContent = "Loading...";
  const coords = await getLocationData(city);
  if (coords === null) return;
  const lat = coords[0];
  const lon = coords[1];
  const rawWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=496bd5c94da3546fc96dc3a570f78b1f`
  );
  const weatherData = await rawWeatherData.json();
  const filteredWeatherData = {
    weather: weatherData.weather[0].main,
    temp: weatherData.main.temp,
    feels: weatherData.main.feels_like,
    humidity: weatherData.main.humidity,
    cloud: weatherData.clouds.all,
    wind: weatherData.wind.speed,
    city: weatherData.name,
  };
  (0,_DOM_weather_info__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredWeatherData);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-setup */ "./src/page-setup.js");
/* harmony import */ var _temp_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temp-toggle */ "./src/temp-toggle.js");



(0,_page_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_temp_toggle__WEBPACK_IMPORTED_MODULE_1__.createTempToggle)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEUsb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZDQUFHO0FBQ1QsdUNBQXVDO0FBQ3ZDO0FBQ0EsTUFBTTtBQUNOLHVDQUF1QztBQUN2QztBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0osdUNBQXVDO0FBQ3ZDO0FBQ0EsTUFBTTtBQUNOLHVDQUF1QztBQUN2QztBQUNBLE1BQU07QUFDTjtBQUNBLG9DQUFvQyw4QkFBOEI7QUFDbEUsc0NBQXNDLHFCQUFxQjtBQUMzRCxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RFU7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFjOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQWM7QUFDcEIsTUFBTTtBQUNOLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEdBQUc7QUFDSDs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbUI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELElBQUksT0FBTyxJQUFJO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFrQjtBQUNwQjs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7VUMzQzlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ1k7O0FBRWpELHVEQUFTO0FBQ1QsOERBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLXdlYXRoZXItaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLXNldHVwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXAtdG9nZ2xlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNlbCB9IGZyb20gXCIuL3RlbXAtdG9nZ2xlXCI7XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcblxuY29uc3QgZGlzcGxheVdlYXRoZXJJbmZvID0gYXN5bmMgKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpO1xuICBjb25zdCBmZWVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNcIik7XG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbiAgY29uc3QgY2xvdWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3VkXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGBXZWF0aGVyIEluZm9ybWF0aW9uIEZvciAke3dlYXRoZXJEYXRhLmNpdHl9YDtcbiAgd2VhdGhlci50ZXh0Q29udGVudCA9IGBXZWF0aGVyOiAke3dlYXRoZXJEYXRhLndlYXRoZXJ9YDtcbiAgaWYgKHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiQ2xlYXJcIikgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImFxdWFcIjtcbiAgaWYgKFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiQ2xvdWRzXCIgfHxcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIkRyaXp6bGVcIiB8fFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiTWlzdFwiIHx8XG4gICAgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJIYXplXCIgfHxcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIkR1c3RcIiB8fFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiRm9nXCIgfHxcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIlNhbmRcIlxuICApXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JleVwiO1xuICBpZiAoXG4gICAgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJSYWluXCIgfHxcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIlRodW5kZXJzdG9ybVwiIHx8XG4gICAgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJTbW9rZVwiIHx8XG4gICAgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJBc2hcIiB8fFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiVG9ybmFkb1wiXG4gIClcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JleVwiO1xuICBpZiAod2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJTbm93XCIgfHwgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJTcXVhbGxcIilcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVzbW9rZVwiO1xuICBpZiAoY2VsKSB7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHtNYXRoLnJvdW5kKFxuICAgICAgd2VhdGhlckRhdGEudGVtcCAtIDI3My4xNVxuICAgICl9wrBDYDtcbiAgICBmZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke01hdGgucm91bmQoXG4gICAgICB3ZWF0aGVyRGF0YS5mZWVscyAtIDI3My4xNVxuICAgICl9wrBDYDtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke01hdGgucm91bmQoXG4gICAgICAod2VhdGhlckRhdGEudGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzJcbiAgICApfcKwRmA7XG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtNYXRoLnJvdW5kKFxuICAgICAgKHdlYXRoZXJEYXRhLmZlZWxzIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMlxuICAgICl9wrBGYDtcbiAgfVxuICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS53aW5kKX0ga20vaGA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSVgO1xuICBjbG91ZC50ZXh0Q29udGVudCA9IGBDbG91ZCBDb3ZlcjogJHt3ZWF0aGVyRGF0YS5jbG91ZH0lYDtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWF0aGVySW5mbztcbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWluZm9cIjtcblxuY29uc3QgcGFnZVNldHVwID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIik7XG4gIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1pbnB1dFwiKTtcbiAgY29uc3QgY2l0eUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LWlucHV0LWVycm9yXCIpO1xuICBjaXR5SW5wdXQudmFsdWUgPSBcIkR1YmFpXCI7XG4gIGdldFdlYXRoZXJEYXRhKFwiRHViYWlcIik7XG5cbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1pbnB1dFwiKS52YWx1ZTtcbiAgICBpZiAoY2l0eSAhPT0gXCJcIikge1xuICAgICAgY2l0eUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGdldFdlYXRoZXJEYXRhKGNpdHkpO1xuICAgIH0gZWxzZSBjaXR5RXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBFbnRlciBhIENpdHkgb3IgVG93bi5cIjtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlU2V0dXA7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IGNlbCA9IHRydWU7XG5cbmNvbnN0IGNyZWF0ZVRlbXBUb2dnbGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRlbXBUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtdG9nZ2xlXCIpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIik7XG5cbiAgdGVtcFRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChjZWwpIHtcbiAgICAgIGNlbCA9IGZhbHNlO1xuICAgIH0gZWxzZSBjZWwgPSB0cnVlO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRlbXBUb2dnbGUsIGNlbCB9O1xuIiwiaW1wb3J0IGRpc3BsYXlXZWF0aGVySW5mbyBmcm9tIFwiLi9ET00td2VhdGhlci1pbmZvXCI7XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcblxuY29uc3QgZ2V0TG9jYXRpb25EYXRhID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc3QgY2l0eUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LWlucHV0LWVycm9yXCIpO1xuICBjaXR5RXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICB0cnkge1xuICAgIGNvbnN0IHJhd0xvY2F0aW9uRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZhcHBpZD00OTZiZDVjOTRkYTM1NDZmYzk2ZGMzYTU3MGY3OGIxZmBcbiAgICApO1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IHJhd0xvY2F0aW9uRGF0YS5qc29uKCk7XG4gICAgcmV0dXJuIFtsb2NhdGlvbkRhdGFbMF0ubGF0LCBsb2NhdGlvbkRhdGFbMF0ubG9uXTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBjaXR5RXJyb3IudGV4dENvbnRlbnQgPVxuICAgICAgXCJTb3JyeSwgdGhhdCBpcyBlaXRoZXIgbm90IGEgdmFsaWQgY2l0eS90b3duIG9yIGluZm9ybWF0aW9uIGZvciB0aGF0IGFyZWEgaXMgbm90IGF2YWlsYWJsZS5cIjtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIjtcbiAgY29uc3QgY29vcmRzID0gYXdhaXQgZ2V0TG9jYXRpb25EYXRhKGNpdHkpO1xuICBpZiAoY29vcmRzID09PSBudWxsKSByZXR1cm47XG4gIGNvbnN0IGxhdCA9IGNvb3Jkc1swXTtcbiAgY29uc3QgbG9uID0gY29vcmRzWzFdO1xuICBjb25zdCByYXdXZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9NDk2YmQ1Yzk0ZGEzNTQ2ZmM5NmRjM2E1NzBmNzhiMWZgXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmF3V2VhdGhlckRhdGEuanNvbigpO1xuICBjb25zdCBmaWx0ZXJlZFdlYXRoZXJEYXRhID0ge1xuICAgIHdlYXRoZXI6IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICB0ZW1wOiB3ZWF0aGVyRGF0YS5tYWluLnRlbXAsXG4gICAgZmVlbHM6IHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICBodW1pZGl0eTogd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eSxcbiAgICBjbG91ZDogd2VhdGhlckRhdGEuY2xvdWRzLmFsbCxcbiAgICB3aW5kOiB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkLFxuICAgIGNpdHk6IHdlYXRoZXJEYXRhLm5hbWUsXG4gIH07XG4gIGRpc3BsYXlXZWF0aGVySW5mbyhmaWx0ZXJlZFdlYXRoZXJEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJEYXRhO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZVNldHVwIGZyb20gXCIuL3BhZ2Utc2V0dXBcIjtcbmltcG9ydCB7IGNyZWF0ZVRlbXBUb2dnbGUgfSBmcm9tIFwiLi90ZW1wLXRvZ2dsZVwiO1xuXG5wYWdlU2V0dXAoKTtcbmNyZWF0ZVRlbXBUb2dnbGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==