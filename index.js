// create a let variable to use after
let weather1 = {
  apiKey: "9b9bea2d75a107e39817969422f605db",
// created the fetch weather function to fetch the weather for Montreal
  fetchWeather: function () {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${Montreal}
       &units=metric&appid=${apiKey}`
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },

  // created a display function to with variable to display on the browser
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
  // created a search function to find montreal
  search: function () {
    this.fetchWeather(document.getElementById("montreal"));
  },
};
// created an event listener to capture the information and display it on browser load
document.getElementById("montreal").addEventListener("load", function () {
  weather1.search();
  });

  let weather2 = {
    apiKey: "9b9bea2d75a107e39817969422f605db",
  // created the fetch weather function to fetch the weather for Montreal
    fetchWeather: function () {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${Toronto}
         &units=metric&appid=${apiKey}`
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
  
    // created a display function to with variable to display on the browser
    displayWeather: function(data) {
  const { temp } = data.main;
  const { feels_like } = data.main;
  const { pressure } = data.wind;
  const { humidity } = data.main;
  document.querySelector(".temp2").innerText = Math.round(temp) + "°C";
  document.querySelector(".feels_like2").innerText = Math.round(feels_like) + "°C";
  document.querySelector(".pressure2").innerText = "Pressure: " + pressure + "hpa";
  document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
    },
    // created a search function to find montreal
    search: function () {
      this.fetchWeather(document.getElementById("montreal"));
    },
  };
  // created an event listener to capture the information and display it on browser load
  document.getElementById("montreal").addEventListener("load", function () {
    weather2.search();
    });

