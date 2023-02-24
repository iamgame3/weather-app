import { cel } from "./temp-toggle";

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
  if (cel) {
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

export default displayWeatherInfo;
