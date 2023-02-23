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
    return null;
  }
};

const getWeatherData = async (city) => {
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


(0,_page_setup__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEUsb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0NBQXNDO0FBQzNFLHFDQUFxQyx1Q0FBdUM7QUFDNUUsb0NBQW9DLDhCQUE4QjtBQUNsRSxzQ0FBc0MscUJBQXFCO0FBQzNELHNDQUFzQyxrQkFBa0I7QUFDeEQ7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q1U7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFjOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQWM7QUFDcEIsTUFBTTtBQUNOLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjJCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEtBQUs7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELElBQUksT0FBTyxJQUFJO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFrQjtBQUNwQjs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7VUN2QzlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUM7O0FBRXJDLHVEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLXdlYXRoZXItaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLXNldHVwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9IGFzeW5jICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlclwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbiAgY29uc3QgZmVlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzXCIpO1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gIGNvbnN0IGNsb3VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG91ZFwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBgV2VhdGhlciBJbmZvcm1hdGlvbiBGb3IgJHt3ZWF0aGVyRGF0YS5jaXR5fWA7XG4gIHdlYXRoZXIudGV4dENvbnRlbnQgPSBgV2VhdGhlcjogJHt3ZWF0aGVyRGF0YS53ZWF0aGVyfWA7XG4gIGlmICh3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIkNsZWFyXCIpIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJhcXVhXCI7XG4gIGlmIChcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIkNsb3Vkc1wiIHx8XG4gICAgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJEcml6emxlXCIgfHxcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIk1pc3RcIiB8fFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiSGF6ZVwiIHx8XG4gICAgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJEdXN0XCIgfHxcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIkZvZ1wiIHx8XG4gICAgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJTYW5kXCJcbiAgKVxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyZXlcIjtcbiAgaWYgKFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiUmFpblwiIHx8XG4gICAgd2VhdGhlckRhdGEud2VhdGhlciA9PT0gXCJUaHVuZGVyc3Rvcm1cIiB8fFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiU21va2VcIiB8fFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiQXNoXCIgfHxcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID09PSBcIlRvcm5hZG9cIlxuICApXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIjtcbiAgaWYgKHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiU25vd1wiIHx8IHdlYXRoZXJEYXRhLndlYXRoZXIgPT09IFwiU3F1YWxsXCIpXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlc21va2VcIjtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRlbXAgLSAyNzMuMTUpfcKwQ2A7XG4gIGZlZWxzLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5mZWVscyAtIDI3My4xNSl9wrBDYDtcbiAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke01hdGgucm91bmQod2VhdGhlckRhdGEud2luZCl9IGttL2hgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcbiAgY2xvdWQudGV4dENvbnRlbnQgPSBgQ2xvdWQgQ292ZXI6ICR7d2VhdGhlckRhdGEuY2xvdWR9JWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VhdGhlckluZm87XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vd2VhdGhlci1pbmZvXCI7XG5cbmNvbnN0IHBhZ2VTZXR1cCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpO1xuICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktaW5wdXRcIik7XG4gIGNvbnN0IGNpdHlFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1pbnB1dC1lcnJvclwiKTtcbiAgY2l0eUlucHV0LnZhbHVlID0gXCJEdWJhaVwiO1xuICBnZXRXZWF0aGVyRGF0YShcIkR1YmFpXCIpO1xuXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktaW5wdXRcIikudmFsdWU7XG4gICAgaWYgKGNpdHkgIT09IFwiXCIpIHtcbiAgICAgIGNpdHlFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBnZXRXZWF0aGVyRGF0YShjaXR5KTtcbiAgICB9IGVsc2UgY2l0eUVycm9yLnRleHRDb250ZW50ID0gXCJQbGVhc2UgRW50ZXIgYSBDaXR5IG9yIFRvd24uXCI7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVNldHVwO1xuIiwiaW1wb3J0IGRpc3BsYXlXZWF0aGVySW5mbyBmcm9tIFwiLi9ET00td2VhdGhlci1pbmZvXCI7XG5cbmNvbnN0IGdldExvY2F0aW9uRGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNpdHlFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1pbnB1dC1lcnJvclwiKTtcbiAgY2l0eUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXdMb2NhdGlvbkRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9NDk2YmQ1Yzk0ZGEzNTQ2ZmM5NmRjM2E1NzBmNzhiMWZgXG4gICAgKTtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCByYXdMb2NhdGlvbkRhdGEuanNvbigpO1xuICAgIHJldHVybiBbbG9jYXRpb25EYXRhWzBdLmxhdCwgbG9jYXRpb25EYXRhWzBdLmxvbl07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNpdHlFcnJvci50ZXh0Q29udGVudCA9XG4gICAgICBcIlNvcnJ5LCB0aGF0IGlzIGVpdGhlciBub3QgYSB2YWxpZCBjaXR5L3Rvd24gb3IgaW5mb3JtYXRpb24gZm9yIHRoYXQgYXJlYSBpcyBub3QgYXZhaWxhYmxlLlwiO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGdldExvY2F0aW9uRGF0YShjaXR5KTtcbiAgaWYgKGNvb3JkcyA9PT0gbnVsbCkgcmV0dXJuO1xuICBjb25zdCBsYXQgPSBjb29yZHNbMF07XG4gIGNvbnN0IGxvbiA9IGNvb3Jkc1sxXTtcbiAgY29uc3QgcmF3V2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPTQ5NmJkNWM5NGRhMzU0NmZjOTZkYzNhNTcwZjc4YjFmYFxuICApO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJhd1dlYXRoZXJEYXRhLmpzb24oKTtcbiAgY29uc3QgZmlsdGVyZWRXZWF0aGVyRGF0YSA9IHtcbiAgICB3ZWF0aGVyOiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgdGVtcDogd2VhdGhlckRhdGEubWFpbi50ZW1wLFxuICAgIGZlZWxzOiB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHksXG4gICAgY2xvdWQ6IHdlYXRoZXJEYXRhLmNsb3Vkcy5hbGwsXG4gICAgd2luZDogd2VhdGhlckRhdGEud2luZC5zcGVlZCxcbiAgICBjaXR5OiB3ZWF0aGVyRGF0YS5uYW1lLFxuICB9O1xuICBkaXNwbGF5V2VhdGhlckluZm8oZmlsdGVyZWRXZWF0aGVyRGF0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VTZXR1cCBmcm9tIFwiLi9wYWdlLXNldHVwXCI7XG5cbnBhZ2VTZXR1cCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9