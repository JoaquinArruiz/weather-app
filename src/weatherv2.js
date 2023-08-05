export class weather2 {
    constructor(data) {
        this.data = data
        this.forecast = data.forecast
        this.day0 = data.forecast.forecastday[0]
        this.day1 = data.forecast.forecastday[1]
        this.day2 = data.forecast.forecastday[2]
    }


    
    //location getters & render
    getName() {
        return this.data.location.name
    }

    getCountry() {
        return this.data.location.country
    }

    getRegion() {
        return this.data.location.region
    }

    getDay() {
        return this.data.location.localtime.split(' ')[0]
    }

    getTime() {
        return this.data.location.localtime.split(' ')[1]
    }
    
    renderLocationCard() {
        let card = document.createElement('div')
        card.classList.add('location-card')
        card.innerHTML = `
            <h3 class = "location-name">${this.getName()}</h3>
            <h5 class = "location-region">${this.getRegion()}, ${this.getCountry()}</h5>
            <h5 class = "location-day">${this.getDay()}</h5>
            <h5 class = "location-hour">${this.getTime()}</h5>
            `
        return card
    }


    //current getters & render
    getTemp() {
        return this.data.current.temp_c + ' °C'
    }

    getCondition() {
        return this.data.current.condition.text
    }

    getFeelsLike() {
        return this.data.current.feelslike_c + ' °C'
    }

    getCloud() {
        if(this.data.current.cloud > 66) {
            return 'cloudy'
        }
        if(this.data.current.cloud > 33 && this.data.current.cloud < 66) {
            return 'partly cloudy'
        }
        else {
            return 'clear'
        }
    }

    renderWeatherCard() {
        let card = document.createElement('div')
        card.classList.add('weather-card')
        card.innerHTML = `
            <h3 class = "weather-temp">${this.getTemp()}</h3>
            <h5 class = "weather-condition">${this.getCondition()}</h5>
            <h5 class = "weather-feels-like">Feels like: ${this.getFeelsLike()}</h5>
            <h5 class = "weather-cloud">Clouds: ${this.getCloud()}</h5>
            `
        return card
    }


    //today stats getters & render
    getRainChance() {
        return this.day0.day.daily_chance_of_rain + '%'
    }

    renderRainChance() {
        let card = document.createElement('div')
        card.classList.add('rain-chance')
        card.innerHTML = `
            <h5 class = "rain-chance">Rain chance: ${this.getRainChance()}</h5>
            `
        return card
    }


    getHumidity() {
        return this.day0.day.avghumidity + '%'
    }

    renderHumidity() {
        let card = document.createElement('div')
        card.classList.add('humidity')
        card.innerHTML = `
            <h5 class = "humidity">Humidity: ${this.getHumidity()}</h5>
            `
        return card
    }


    //forecast getters
    getForecast() {
        return this.forecast
    }
}
    
