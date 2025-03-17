/*
need to hide api key
need to add cor
need to add suggesstions for cities
need to add a toggle for celcius aand farenhiey
*/


import { API_KEY } from './keys.js';

// Use API_KEY in your code

const getWeatherbtn = document.getElementById("getWeatherbtn");
const cityname = document.getElementById("cityname");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const weather = document.getElementById("weather");
const image = document.getElementById("image");
const weatherbox = document.getElementById("weatherbox");
const inputbox = document.getElementById("inputbox");
const inputdiv = document.getElementById("inputdiv");
async function getWeather(city) {
    try {
        // Clear any existing error messages and weather details
        clearWeatherDetails();

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        if (!response.ok) {
            displayErrorMessage("Please enter a valid city name.");
            throw new Error("Error Occurred");
        }
        const data = await response.json();
        displayWeatherDetails(data);
    } catch (error) {
        console.log(error);
    }
}

function clearWeatherDetails() {
    cityname.textContent = "";
    temperature.textContent = "";
    humidity.textContent = "";
    weather.textContent = "";
    image.style.display = "none";
    image.src = "";
    clearErrorMessage();
}

function displayErrorMessage(message) {
    weatherbox.style.display = "block";
    inputdiv.style.top = "15px";

    let errorMsg = weatherbox.querySelector(".error-message");
    if (!errorMsg) {
        errorMsg = document.createElement("p");
        errorMsg.textContent = message;
        errorMsg.classList.add("error-message");
        weatherbox.append(errorMsg);
    }
}

function clearErrorMessage() {
    const errorMsg = weatherbox.querySelector(".error-message");
    if (errorMsg) {
        errorMsg.remove();
    }
}

function displayWeatherDetails(data) {
    weatherbox.style.display = "block";
    inputdiv.style.top = "15px";

    cityname.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = data.main.temp + "° F";
    humidity.textContent = "Humidity: " + data.main.humidity + "%";
    weather.textContent = `${data.weather[0].main}`;
    const weathericon = `${data.weather[0].icon}`
    image.style.display = "block";
    image.src = `https://openweathermap.org/img/wn/${weathericon}@2x.png`;
}

document.addEventListener('DOMContentLoaded', function () {
    inputbox.focus();

    document.addEventListener("keydown", event => {
        if (event.keyCode == 13) {
            getWeather(inputbox.value.trim());
        }
    });

    const form = document.getElementById('inputdiv');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        getWeather(inputbox.value.trim());
    });
});
