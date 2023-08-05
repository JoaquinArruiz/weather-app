// Path: src/weatherv2.js
import { Weather } from "./weather";



const APIKEY = "21885e66ee224fc9a14104524231507"

let weather = await createWeather('Rosario')
let searchButton = document.querySelector(".search-button")

// todayWeather: location, weather
let todayWeather = document.querySelector(".today-weather")

// todayStats: humidity, rain chance
let todayStats = document.querySelector(".today-stats")

// hourlyWeather: today temps per 4 hours
let hourlyWeather = document.querySelector(".hourly-weather")


//create weather object
async function createWeather(location) {    
    let weather = new Weather(await searchLocation(APIKEY, location))
    return weather
}

//api request, returns data object
async function searchLocation(APIKEY, location) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=3`, {mode: "cors"})
    let data = await response.json()
    return data
}

//renders html elements
function render(){
    todayWeather.appendChild(weather.renderLocationCard())
    todayWeather.appendChild(weather.renderWeatherCard())
    todayStats.appendChild(weather.renderHumidity())
    todayStats.appendChild(weather.renderRainChance())
    hourlyWeather.appendChild(weather.renderTodayTemps())
}

searchButton.addEventListener("click", async function() {
    let location = document.querySelector(".search-input").value
    weather = await createWeather(location)
    hourlyWeather.innerHTML = ""
    todayWeather.innerHTML = ""
    todayStats.innerHTML = ""
    render()
})

render()