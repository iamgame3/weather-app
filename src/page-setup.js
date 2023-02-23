import getWeatherData from "./weather-info";

const pageSetup = async () => {
  const submitButton = document.querySelector(".submit");

  submitButton.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city !== "") getWeatherData(city);
  });
};

export default pageSetup;
