let now = new Date();

let getDate = document.querySelector("#today-date");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Fri",
  "Sat"
];
let day = days[now.getDay()];

getDate.innerHTML = `${day} ${hours} : ${minutes}`;

function displayWeatherCondition(response) {
  console.log(response.data.name);

  document.querySelector("#place").innerHTML = response.data.name;
  document.querySelector(".today-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function search(event) {
  event.preventDefault();
  let apiKey = "e3e9fd7afc4e2dcfc8944940fed88215";
  let city = document.querySelector("#search-query").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);

  let cityElement = document.querySelector("#place");
  let cityInput = document.querySelector("#search-query").value;
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#weather-form");
searchForm.addEventListener("submit", search);

