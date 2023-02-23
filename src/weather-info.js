import displayWeatherInfo from "./DOM-weather-info";

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
  displayWeatherInfo(filteredWeatherData);
};

export default getWeatherData;
