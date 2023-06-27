let weather = {
  apiKey: "YOUR API KEY HERE",
  fetchWeather1: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found in " + city);
          throw new Error("No weather found " + city);
        }
        return response.json();
      })
      .then((data) => this.displayWeatherF(data));
  },
  fetchWeatherMetric: function (city) {
    if(city == " ") {
      city = "boston"
    }
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found in " + city);
          throw new Error("No weather found " + city);
        }
        return response.json();
      })
      .then((data) => this.displayWeatherC(data));
  },
  displayWeatherC: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " kmph";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1920x1080/?," + name + "')";
      
  },

  displayWeatherF: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " mph";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1920x1080/?," + name + "')";
      
  },
  search: function () {
    if(toggle){
      this.fetchWeather1(document.querySelector(".search-bar").value);
      console.log(toggle);
    }
    else{
      this.fetchWeatherMetric(document.querySelector(".search-bar").value);
      console.log(toggle);
    }
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });



const apiKey = "YOUR API KEY HERE";

function displayWeatherF(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = Math.round(temp) + "°F";
  document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind speed: " + speed + " mph";
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1920x1080/?," + name + "')";
    
}

function displayWeatherC(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = Math.round(temp) + "°C";
  document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind speed: " + speed + " kmph";
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1920x1080/?," + name + "')";
    
}

function fetchWeather(city){
  console.log("2");
  if(city == "") {
    city = "boston"
    console.log(city);
  }
  console.log(city);
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey
  )
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        console.log(response);
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => displayWeatherF(data));
}


function fetchWeatherMetric(city) {
  console.log("3");
  if(city == "") {
    city = "boston"
    console.log(city);
  }
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  )
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => displayWeatherC(data));
}



let toggle = true;
function func() {
 toggle = !toggle;
 if(toggle){
  fetchWeather(document.querySelector(".search-bar").value);
 }
 else{
  fetchWeatherMetric(document.querySelector(".search-bar").value);
 }
}
const tog = document.getElementById("toggleID");
tog.addEventListener('click', func);
weather.fetchWeather1("Boston");

