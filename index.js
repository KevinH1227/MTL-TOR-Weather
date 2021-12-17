// // create a let variable to use after
// let weather1 = {
//   apiKey: "9b9bea2d75a107e39817969422f605db",
// // created the fetch weather function to fetch the weather for Montreal
//   fetchWeather: function (montreal) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//        montreal +
//        "&units=metric&appid=" +
//        this.apiKey
//     )
//     .then((response) => response.json())
//     .then((data) => this.displayWeather(data));
//   },

//   // created a display function to with variable to display on the browser
//   displayWeather: function(data) {
// const { temp } = data.main;
// const { feels_like } = data.main;
// const { pressure } = data.main;
// const { humidity } = data.main;
// document.querySelector(".temp1").innerText = Math.round(temp) + "°C";
// document.querySelector(".feels_like1").innerText = Math.round(feels_like) + "°C";
// document.querySelector(".pressure1").innerText = "Pressure: " + pressure + "hpa";
// document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%";
//   },
//   // created a search function to find montreal
//   search: function () {
//     this.fetchWeather(document.getElementById("montreal").value);
//   },
// };
// // created an event listener to capture the information and display it on browser load
// document.getElementById("montreal").addEventListener("click", function () {
//   weather1.search();
//   });

//   let weather2 = {
//     apiKey: "9b9bea2d75a107e39817969422f605db",
//   // created the fetch weather function to fetch the weather for Toronto
//     fetchWeather: function (toronto) {
//       fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q=" +
//         toronto +
//         "&units=metric&appid=" +
//         this.apiKey
//       )
//       .then((response) => response.json())
//       .then((data) => this.displayWeather(data));
//     },
  
//     // created a display function to with variable to display on the browser
//     displayWeather: function(data) {
//   const { temp } = data.main;
//   const { feels_like } = data.main;
//   const { pressure } = data.main;
//   const { humidity } = data.main;
//   document.querySelector(".temp2").innerText = Math.round(temp) + "°C";
//   document.querySelector(".feels_like2").innerText = Math.round(feels_like) + "°C";
//   document.querySelector(".pressure2").innerText = "Pressure: " + pressure + "hpa";
//   document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
//     },
//     // created a search function to find toronto
//     search: function () {
//       this.fetchWeather(document.getElementById("toronto"));
//     },
//   };
//   // created an event listener to capture the information and display it on browser load
//   document.getElementById("montreal").addEventListener("click", function () {
//     weather2.search();
//     });

// created all the variables
const API_KEY = "9b9bea2d75a107e39817969422f605db";

const temp1 = document.querySelector(".temp1");
const feels_like1 = document.querySelector(".feels_like1");
const pressure1 = document.querySelector(".pressure1");
const humidity1 = document.querySelector(".humidity1");
// created a variable that would insert the information fetched by the api call below
const updateCard1 = (data) => {
  temp1.innerText = `Temp: ${Math.round(data.main.temp)} °C`;
  feels_like1.innerText = `Feels Like: ${Math.round(data.main.feels_like)} °C`;
  pressure1.innerText = `Pressure: ${data.main.pressure} hpa`;
  humidity1.innerText = `Humidity: ${data.main.humidity} %`;
};
// fetch variabl to fetch the inforamtion and then insert it into the correct fields
const fetchWeatherM = (cityName = 'Montreal') => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(updateCard1);
};
// called another variable to indentify the value of the below ID, Montreal then added the click event in concurrence 
// with the fetch variable
const cityInput1 = document.getElementById("montreal");
document.addEventListener("click", (event) => {
  event.preventDefault();
  fetchWeatherM(cityInput1.value);
});


const temp2 = document.querySelector(".temp2");
const feels_like2 = document.querySelector(".feels_like2");
const pressure2 = document.querySelector(".pressure2");
const humidity2 = document.querySelector(".humidity2");

const updateCard2 = (data) => {
  temp2.innerText = `Temp: ${Math.round(data.main.temp)} °C`;
  feels_like2.innerText = `Feels Like: ${Math.round(data.main.feels_like)} °C`;
  pressure2.innerText = `Pressure: ${data.main.pressure} hpa`;
  humidity2.innerText = `Humidity: ${data.main.humidity} %`;
};

const fetchWeatherT = (cityName = "Toronto") => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(updateCard2);
};

const cityInput2 = document.getElementById("toronto");
document.addEventListener("click", (event) => {
  event.preventDefault();
  fetchWeatherT(cityInput2.value);
});
