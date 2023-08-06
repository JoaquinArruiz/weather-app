// Path: src/weatherv2.js
import { Weather } from "./weather";
import '../styles/main.scss';


const APIKEY = "21885e66ee224fc9a14104524231507"

let weather = await createWeather('Rosario')
let searchButton = document.querySelector(".search-button")

// todayWeather: location, weather
let todayWeather = document.querySelector(".today-weather")

// todayStats: humidity, rain chance
let todayStats = document.querySelector(".today-stats")

// midScreen: today temps per 4 hours
let midScreen = document.querySelector(".mid-screen")

// bottomScreen: 2 days forecast
let bottomScreen = document.querySelector(".bottom-screen")


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
    let separator = document.createElement('div')
    separator.classList.add('separator')
    separator.innerHTML = ` | `
    todayWeather.appendChild(weather.renderLocationCard())
    todayWeather.appendChild(weather.renderWeatherCard())
    todayStats.appendChild(weather.renderHumidity())
    todayStats.appendChild(separator)
    todayStats.appendChild(weather.renderRainChance())
    midScreen.appendChild(weather.renderTodayTemps())
    bottomScreen.appendChild(weather.renderForecast())
}

searchButton.addEventListener("click", async function() {
    let form = document.querySelector(".search-form")
    let location = document.querySelector(".search-input").value
    if (!location.replace(/\s/g, '').length == 0) {
        try{
            weather = await createWeather(location)
        } catch{
            alert("Sorry, we couldn't find that location.")
        }
        
        midScreen.innerHTML = ""
        todayWeather.innerHTML = ""
        todayStats.innerHTML = ""
        bottomScreen.innerHTML = ""
        render()
        form.reset()
    }
    else {
        form.reset()
    }
})
console.log(weather.getCurrentIcon())

render()