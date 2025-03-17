function refreshWeather(response) {
  let tempratureElement = document.querySelector("#temperature");
  temperature = response.data.tempareture.current;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "b7o9a4at99230450582332933f8140b0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metrics`;
  axios.get(apiUrl).then(refreshWeather);
}

function handlesearchsubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handlesearchsubmit);
