
const APIKEY = "21885e66ee224fc9a14104524231507"


async function getFCWeather(location) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=3`)
    let data = await response.json()
    console.log(data)
    return data
}


getFCWeather('rosario')
