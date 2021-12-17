// create a let variable to use after
let weather1 = {
  apiKey: "9b9bea2d75a107e39817969422f605db",
// created the fetch weather function to fetch the weather for Montreal
  fetchWeather: function (montreal) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
       montreal +
       "&units=metric&appid=" +
       this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },

  // created a display function to with variable to display on the browser
  displayWeather: function(data) {
const { temp } = data.main;
const { feels_like } = data.main;
const { pressure } = data.main;
const { humidity } = data.main;
document.querySelector(".temp1").innerText = Math.round(temp) + "°C";
document.querySelector(".feels_like1").innerText = Math.round(feels_like) + "°C";
document.querySelector(".pressure1").innerText = "Pressure: " + pressure + "hpa";
document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%";
  },
  // created a search function to find montreal
  search: function () {
    this.fetchWeather(document.getElementById("montreal").value);
  },
};
// created an event listener to capture the information and display it on browser load
document.getElementById("montreal").addEventListener("click", function () {
  weather1.search();
  });

  let weather2 = {
    apiKey: "9b9bea2d75a107e39817969422f605db",
  // created the fetch weather function to fetch the weather for Montreal
    fetchWeather: function (toronto) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        toronto +
        "&units=metric&appid=" +
        this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
  
    // created a display function to with variable to display on the browser
    displayWeather: function(data) {
  const { temp } = data.main;
  const { feels_like } = data.main;
  const { pressure } = data.main;
  const { humidity } = data.main;
  document.querySelector(".temp2").innerText = Math.round(temp) + "°C";
  document.querySelector(".feels_like2").innerText = Math.round(feels_like) + "°C";
  document.querySelector(".pressure2").innerText = "Pressure: " + pressure + "hpa";
  document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
    },
    // created a search function to find totonto
    search: function () {
      this.fetchWeather(document.getElementById("toronto"));
    },
  };
  // created an event listener to capture the information and display it on browser load
  document.getElementById("montreal").addEventListener("click", function () {
    weather2.search();
    });

