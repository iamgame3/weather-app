import getWeatherData from "./weather-info";

const pageSetup = async () => {
  const submitButton = document.querySelector(".submit-button");
  const cityInput = document.getElementById("city-input");
  const cityError = document.querySelector(".city-input-error");
  cityInput.value = "Dubai";
  getWeatherData("Dubai");

  submitButton.addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city !== "") {
      cityError.textContent = "";
      getWeatherData(city);
    } else cityError.textContent = "Please Enter a City or Town.";
  });
};

export default pageSetup;
