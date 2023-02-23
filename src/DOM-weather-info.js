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

export default displayWeatherInfo;
