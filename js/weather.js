import { API_KEY } from "./apikey.js";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather p:first-child");
      const city = document.querySelector("#weather p:last-child");
      city.innerText = data.name;
      const tempInt = Math.floor(data.main.temp);
      weather.innerText = `${data.weather[0].main}  ${tempInt}°C`;
    });
}

function onGeoError() {
  alert("Can't find. you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
