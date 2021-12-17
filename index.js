let weather = {
  apiKey: "9b9bea2d75a107e39817969422f605db",
  fetchWeather: function (Montreal) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
       Montreal +
       "&units=metric&appid=" +
       this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
const { temp } = data.main;
const { feels_like } = data.main;
const { pressure } = data.wind;
const { humidity } = data.main;
document.querySelector(".temp1").innerText = Math.round(temp) + "°C";
document.querySelector(".feels_like1").innerText = Math.round(feels_like) + "°C";
document.querySelector(".pressure1").innerText = "Pressure: " + pressure + "hpa";
document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%";
  },
displayWeather();
};
