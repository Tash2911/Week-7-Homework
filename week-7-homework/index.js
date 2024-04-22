function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
function searchCity(city) {
  let apiKey = "5804cet5d8681bbaa2c0f31803d6o3f5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}& units=metric or imperial`;
  axios.get(apiUrl).then(displayTemperature);
}
function SubmitEvent(event) {
  event.preventDefault();
  searchInput = document.querySelector("#placeholder");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", SubmitEvent);
searchCity("Harare");
