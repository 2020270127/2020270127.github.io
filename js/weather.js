const API_KEY = "ef025d7d81e6ee3b0b77976ed6b34456";


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innterText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoFail() {
  alert("Can't find you. No weather for you.");
}

function Weather() {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);
}

Weather();
