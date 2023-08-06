export class Weather {
    constructor(data) {
        this.data = data
        this.forecast = data.forecast
        this.today = data.forecast.forecastday[0]
        this.tomorrow = data.forecast.forecastday[1]
        this.tomorrow2 = data.forecast.forecastday[2]
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
    
    getIsDay(){
        return this.data.current.is_day
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

    getMinMaxTemp() {
        return this.today.day.mintemp_c + ' °C / ' + this.today.day.maxtemp_c + ' °C'
    }

    renderWeatherCard() {
        let card = document.createElement('div')
        card.classList.add('weather-card')
        card.innerHTML = `
            <h3 class = "weather-temp">${this.getTemp()}</h3>
            <h5 class = "weather-condition">${this.getCondition()}</h5>
            <h5 class = "weather-feels-like">Feels like: ${this.getFeelsLike()}</h5>
            <h5 class = "weather-cloud">Clouds: ${this.getCloud()}</h5>
            <h5 class = "weather-minmax">Min/Max: ${this.getMinMaxTemp()}</h5>
            `
        return card
    }


    //today stats getters & render
    getRainChance() {
        return this.today.day.daily_chance_of_rain + '%'
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
        return this.today.day.avghumidity + '%'
    }

    renderHumidity() {
        let card = document.createElement('div')
        card.classList.add('humidity')
        card.innerHTML = `
            <h5 class = "humidity">Humidity: ${this.getHumidity()}</h5>
            `
        return card
    }

    
    //today per 4hours getters & render
    getTodayTemps() {
        let temps = {
            '8:00': {
                temp: this.today.hour[8].temp_c + ' °C',
                condition: this.today.hour[8].condition.text,
                feelslike_c: this.today.hour[8].feelslike_c + ' °C'
            },
            '12:00': {
                temp: this.today.hour[12].temp_c + ' °C',
                condition: this.today.hour[12].condition.text,
                feelslike_c: this.today.hour[12].feelslike_c + ' °C'
            },
            '16:00': {
                temp: this.today.hour[16].temp_c + ' °C',
                condition: this.today.hour[16].condition.text,
                feelslike_c: this.today.hour[16].feelslike_c + ' °C'
            },
            '20:00': {
                temp: this.today.hour[20].temp_c + ' °C',
                condition: this.today.hour[20].condition.text,
                feelslike_c: this.today.hour[20].feelslike_c + ' °C'
            }
        }
        return temps
    }

    renderTodayTemps() {
        let tempsData = this.getTodayTemps()
        let temps = document.createElement('div')
        temps.classList.add('today-temps')
        for(let temp in tempsData) {
            let tempCard = document.createElement('div')
            tempCard.classList.add('temp-card')
            tempCard.innerHTML = `
                <h5 class = "temp-hour">${temp}</h5>
                <h5 class = "temp-temp">${tempsData[temp].temp}</h5>
                <h5 class = "temp-condition">${tempsData[temp].condition}</h5>
                <h5 class = "temp-feels-like">Feels like: ${tempsData[temp].feelslike_c}</h5>
                `
            temps.appendChild(tempCard)
        }
        return temps
    }

    //forecast getters and render
    getTomorrowData() {
        let data = {
            date: this.tomorrow.date.split('-')[1] + '/' + this.tomorrow.date.split('-')[2],
            day: this.tomorrow.day.maxtemp_c + ' °C / ' + this.tomorrow.day.mintemp_c + ' °C',
            condition: this.tomorrow.day.condition.text,
            rainChance: this.tomorrow.day.daily_chance_of_rain + '%'
        }
        return data
    }

    getTomorrow2Data() {
        let data = {
            date: this.tomorrow2.date.split('-')[1] + '/' + this.tomorrow.date.split('-')[2],
            day: this.tomorrow2.day.maxtemp_c + ' °C / ' + this.tomorrow2.day.mintemp_c + ' °C',
            condition: this.tomorrow2.day.condition.text,
            rainChance: this.tomorrow2.day.daily_chance_of_rain + '%'
        }
        return data
    }

    renderForecast() {
        let forecastCard = document.createElement('div')
        let tomorrowCard = document.createElement('div')
        let tomorrow2Card = document.createElement('div')
        forecastCard.classList.add('forecast-card')
        tomorrowCard.classList.add('tomorrow-card')
        tomorrow2Card.classList.add('tomorrow2-card')
        forecastCard.innerHTML = `
            <h3 class = "forecast-title">Forecast</h3>
            `
        tomorrowCard.innerHTML = `
            <h5 class = "tomorrow-title">${this.getTomorrowData().date}</h5>
            <h5 class = "tomorrow-day">${this.getTomorrowData().day}</h5>
            <h5 class = "tomorrow-condition">${this.getTomorrowData().condition}</h5>
            <h5 class = "tomorrow-rain-chance">Rain chance: ${this.getTomorrowData().rainChance}</h5>
            `
        tomorrow2Card.innerHTML = `
            <h5 class = "tomorrow2-title">${this.getTomorrow2Data().date}</h5>
            <h5 class = "tomorrow2-day">${this.getTomorrow2Data().day}</h5>
            <h5 class = "tomorrow2-condition">${this.getTomorrow2Data().condition}</h5>
            <h5 class = "tomorrow2-rain-chance">Rain chance: ${this.getTomorrow2Data().rainChance}</h5>
            `
        forecastCard.appendChild(tomorrowCard)
        forecastCard.appendChild(tomorrow2Card)
        return forecastCard
    }
}