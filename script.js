const apiKey = "72a07b1a5107afee2827d9776e886514";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherImg = document.querySelector(".weather-img");
const weatherBox = document.querySelector(".weather-box");

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    alert("Enter correct city name");
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "assets/img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "assets/img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "assets/img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "assets/img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "assets/img/mist.png";
    }
    document.querySelector(".weather-box").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
