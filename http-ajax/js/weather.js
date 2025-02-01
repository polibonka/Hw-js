// Отримати погоду за допомогою OpenWeatherMap API Опис: Використайте публічне API OpenWeatherMap для отримання поточної погоди. Зробіть GET-запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}, де {city} - назва міста, а {API_KEY} - ваш ключ API OpenWeatherMap. Перегляньте отримані дані щодо погоди

import { log } from "handlebars/runtime";
import templateWeather from "../template/weather.hbs";

const cityInput = document.querySelector("#city-input");
const citybtn = document.querySelector("#search-btn");
const weatherWrapper = document.querySelector(".weather-info");

const getWeatherbyCity = (city) => {
  const params = new URLSearchParams({
    q: city,
    appid: "004b5962600b68f8b615bde29f5d1160",
    units: "metric",
  }).toString();

  return fetch(`https://api.openweathermap.org/data/2.5/weather?${params}`);
};

citybtn.addEventListener("click", () => {
  getWeatherbyCity(cityInput.value)
    .then((response) => response.json())
    .then((weather) => {
      const params = {
        name: weather.name,
        temp: weather.main.temp,
        descr: weather.weather[0].main,
        humidity: weather.main.humidity,
        wind: weather.wind.speed,
        icon: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
      };

      weatherWrapper.innerHTML = templateWeather(params);
      console.log(weather);
    })

    .catch((error) => console.log(error));
});

// getWeatherbyCity("Lviv")
