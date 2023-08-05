// Path: src/weatherv2.js
import { weather2 } from "./weatherv2";



const APIKEY = "21885e66ee224fc9a14104524231507"
let location = 'rosario'
let weather = new weather2(await searchLocation(APIKEY, location))

async function searchLocation(APIKEY, location) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=3`, {mode: "cors"})
    let data = await response.json()
    return data
}





console.log(weather)
console.log(weather.getName())
console.log(weather.getRegion())
console.log(weather.getCountry())
console.log("")
console.log(weather.getDay())
console.log(weather.getFeelsLike())

console.log(weather.getForecast())
console.log(weather.day1)
console.log(weather.day2)

let todayWeather = document.querySelector(".today-weather")
todayWeather.appendChild(weather.renderCard())