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
const displayWeatherInfo = async (weatherData) => {
  const title = document.querySelector(".title");
  const weather = document.querySelector(".weather");
  const temp = document.querySelector(".temp");
  const feels = document.querySelector(".feels");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");
  const cloud = document.querySelector(".cloud");
  title.textContent = `Weather Information For ${weatherData.city}`;
  weather.textContent = `Weather: ${weatherData.weather}`;
  temp.textContent = `Temperature: ${Math.round(weatherData.temp - 273.15)}°C`;
  feels.textContent = `Feels Like: ${Math.round(weatherData.feels - 273.15)}°C`;
  wind.textContent = `Wind Speed: ${Math.round(weatherData.wind)} km/h`;
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
  cloud.textContent = `Cloud Cover: ${weatherData.cloud}%`;
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
    cityError.textContent =
      "Sorry, that is either not a valid city/town or information for that area is not available.";
    return [25.2653471, 55.2924914];
  }
};

const getWeatherData = async (city) => {
  const coords = await getLocationData(city);
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


(0,_page_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUJBQWlCO0FBQ2xFLG9DQUFvQyxvQkFBb0I7QUFDeEQscUNBQXFDLHNDQUFzQztBQUMzRSxxQ0FBcUMsdUNBQXVDO0FBQzVFLG9DQUFvQyw4QkFBOEI7QUFDbEUsc0NBQXNDLHFCQUFxQjtBQUMzRCxzQ0FBc0Msa0JBQWtCO0FBQ3hEOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJVOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBYzs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFjO0FBQ3BCLE1BQU07QUFDTixHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsSUFBSSxPQUFPLElBQUk7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQWtCO0FBQ3BCOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQ3RDOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsdURBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00td2VhdGhlci1pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2Utc2V0dXAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci1pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGlzcGxheVdlYXRoZXJJbmZvID0gYXN5bmMgKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlclwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbiAgY29uc3QgZmVlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzXCIpO1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gIGNvbnN0IGNsb3VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG91ZFwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBgV2VhdGhlciBJbmZvcm1hdGlvbiBGb3IgJHt3ZWF0aGVyRGF0YS5jaXR5fWA7XG4gIHdlYXRoZXIudGV4dENvbnRlbnQgPSBgV2VhdGhlcjogJHt3ZWF0aGVyRGF0YS53ZWF0aGVyfWA7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50ZW1wIC0gMjczLjE1KX3CsENgO1xuICBmZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke01hdGgucm91bmQod2VhdGhlckRhdGEuZmVlbHMgLSAyNzMuMTUpfcKwQ2A7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLndpbmQpfSBrbS9oYDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEuaHVtaWRpdHl9JWA7XG4gIGNsb3VkLnRleHRDb250ZW50ID0gYENsb3VkIENvdmVyOiAke3dlYXRoZXJEYXRhLmNsb3VkfSVgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVdlYXRoZXJJbmZvO1xuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXItaW5mb1wiO1xuXG5jb25zdCBwYWdlU2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LWlucHV0XCIpO1xuICBjb25zdCBjaXR5RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktaW5wdXQtZXJyb3JcIik7XG4gIGNpdHlJbnB1dC52YWx1ZSA9IFwiRHViYWlcIjtcbiAgZ2V0V2VhdGhlckRhdGEoXCJEdWJhaVwiKTtcblxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LWlucHV0XCIpLnZhbHVlO1xuICAgIGlmIChjaXR5ICE9PSBcIlwiKSB7XG4gICAgICBjaXR5RXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZ2V0V2VhdGhlckRhdGEoY2l0eSk7XG4gICAgfSBlbHNlIGNpdHlFcnJvci50ZXh0Q29udGVudCA9IFwiUGxlYXNlIEVudGVyIGEgQ2l0eSBvciBUb3duLlwiO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VTZXR1cDtcbiIsImltcG9ydCBkaXNwbGF5V2VhdGhlckluZm8gZnJvbSBcIi4vRE9NLXdlYXRoZXItaW5mb1wiO1xuXG5jb25zdCBnZXRMb2NhdGlvbkRhdGEgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zdCBjaXR5RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktaW5wdXQtZXJyb3JcIik7XG4gIGNpdHlFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gIHRyeSB7XG4gICAgY29uc3QgcmF3TG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmFwcGlkPTQ5NmJkNWM5NGRhMzU0NmZjOTZkYzNhNTcwZjc4YjFmYFxuICAgICk7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgcmF3TG9jYXRpb25EYXRhLmpzb24oKTtcbiAgICByZXR1cm4gW2xvY2F0aW9uRGF0YVswXS5sYXQsIGxvY2F0aW9uRGF0YVswXS5sb25dO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjaXR5RXJyb3IudGV4dENvbnRlbnQgPVxuICAgICAgXCJTb3JyeSwgdGhhdCBpcyBlaXRoZXIgbm90IGEgdmFsaWQgY2l0eS90b3duIG9yIGluZm9ybWF0aW9uIGZvciB0aGF0IGFyZWEgaXMgbm90IGF2YWlsYWJsZS5cIjtcbiAgICByZXR1cm4gWzI1LjI2NTM0NzEsIDU1LjI5MjQ5MTRdO1xuICB9XG59O1xuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGdldExvY2F0aW9uRGF0YShjaXR5KTtcbiAgY29uc3QgbGF0ID0gY29vcmRzWzBdO1xuICBjb25zdCBsb24gPSBjb29yZHNbMV07XG4gIGNvbnN0IHJhd1dlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD00OTZiZDVjOTRkYTM1NDZmYzk2ZGMzYTU3MGY3OGIxZmBcbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByYXdXZWF0aGVyRGF0YS5qc29uKCk7XG4gIGNvbnN0IGZpbHRlcmVkV2VhdGhlckRhdGEgPSB7XG4gICAgd2VhdGhlcjogd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluLFxuICAgIHRlbXA6IHdlYXRoZXJEYXRhLm1haW4udGVtcCxcbiAgICBmZWVsczogd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIGNsb3VkOiB3ZWF0aGVyRGF0YS5jbG91ZHMuYWxsLFxuICAgIHdpbmQ6IHdlYXRoZXJEYXRhLndpbmQuc3BlZWQsXG4gICAgY2l0eTogd2VhdGhlckRhdGEubmFtZSxcbiAgfTtcbiAgZGlzcGxheVdlYXRoZXJJbmZvKGZpbHRlcmVkV2VhdGhlckRhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlU2V0dXAgZnJvbSBcIi4vcGFnZS1zZXR1cFwiO1xuXG5wYWdlU2V0dXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==