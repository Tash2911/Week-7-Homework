function SubmitEvent(event) {
  event.preventDefault();
  searchInput = document.querySelector("#placeholder");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", SubmitEvent);
