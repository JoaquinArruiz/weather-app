// Path: src/weatherv2.js
import { weather2 } from "./weatherv2";



const APIKEY = "21885e66ee224fc9a14104524231507"


async function searchLocation(APIKEY, location) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=3`, {mode: "cors"})
    let data = await response.json()
    return data
}


let weather = new weather2(await searchLocation(APIKEY, 'Pelham'))

console.log(weather.getName())
console.log(weather.getRegion())
console.log(weather.getCountry())
console.log("")
console.log(weather.getDay())
console.log(weather.getFeelsLike())

console.log(weather.getForecast())

