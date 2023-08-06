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
    
    getDayFormated() {
        let date = this.data.location.localtime.split(' ')[0]
        let day = date.split('-')[2]
        let month = date.split('-')[1]
        let year = date.split('-')[0]
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
        let d = new Date(year, month, day)
        return days[d.getDay()] + ' | ' + day + '/' + month
        // d.getDay is a method that returns the day of the week as a number (0-6) (from Date class)
    }
    
    getTime() {
        return this.data.location.localtime.split(' ')[1]
    }
    
    getIsDay(){
        return this.data.current.is_day
    }

    getCurrentIcon(){
        return this.data.current.condition.icon
    }
    
    renderLocationCard() {
        let card = document.createElement('div')
        card.classList.add('location-card')
        card.innerHTML = `
            <h3 class = "location-name">
                <img src="../img/location-dot-solid.svg"></img>
                ${this.getName()}
            </h3>
            <h5 class = "location-region">${this.getRegion()}, ${this.getCountry()}</h5>
            <h5 class = "location-day">${this.getDayFormated()} | ${this.getTime()}</h5>            `
        return card
    }


    //current getters & render
    getTemp() {
        return this.data.current.temp_c + '°'
    }

    getCondition() {
        return this.data.current.condition.text
    }

    getFeelsLike() {
        return this.data.current.feelslike_c + '°'
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
        return this.today.day.mintemp_c + '° / ' + this.today.day.maxtemp_c + '°'
    }

    getCurrentConditionCode() {
        return this.data.current.condition.code
    }

    renderWeatherCard() {
        let card = document.createElement('div')
        card.classList.add('weather-card')
        card.innerHTML = `
            <div class="first">
                <h3 class = "weather-temp">
                    <img src="${this.getCurrentIcon()}"></img>
                    ${this.getTemp()}
                </h3>
                <h5 class = "weather-condition">${this.getCondition()}</h5>
            </div>

            <div class="second">
                <h5 class = "weather-minmax">${this.getMinMaxTemp()}</h5>            
                <h5 class = "weather-feels-like">Feels like: ${this.getFeelsLike()}</h5>
            </div>`
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
            <h5 class = "rain-chance">Rain chance: <b>${this.getRainChance()}</b></h5>
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
            <h5 class = "humidity">Humidity: <b>${this.getHumidity()}</b></h5>
            `
        return card
    }

    
    //today per 4hours getters & render
    getTodayTemps() {
        let temps = {
            '8:00': {
                temp: this.today.hour[8].temp_c + '°',
                condition: this.today.hour[8].condition.text,
                icon: this.today.hour[8].condition.icon
            },
            '12:00': {
                temp: this.today.hour[12].temp_c + '°',
                condition: this.today.hour[12].condition.text,
                icon: this.today.hour[12].condition.icon
            },
            '16:00': {
                temp: this.today.hour[16].temp_c + '°',
                condition: this.today.hour[16].condition.text,
                icon: this.today.hour[16].condition.icon
            },
            '20:00': {
                temp: this.today.hour[20].temp_c + '°',
                condition: this.today.hour[20].condition.text,
                icon: this.today.hour[20].condition.icon
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
                <img src="${tempsData[temp].icon}"></img>
                <h5 class = "temp-temp">${tempsData[temp].temp}</h5>
                `
                temps.appendChild(tempCard)
            //<h5 class = "temp-condition">${tempsData[temp].condition}</h5>
        }
        return temps
    }

    //forecast getters and render
    getTomorrowData() {
        let data = {
            date: this.tomorrow.date.split('-')[2] + '/' + this.tomorrow.date.split('-')[1],
            day: this.tomorrow.day.maxtemp_c + '° / ' + this.tomorrow.day.mintemp_c + '°',
            condition: this.tomorrow.day.condition.text,
            rainChance: this.tomorrow.day.daily_chance_of_rain + '%',
            icon: this.tomorrow.day.condition.icon
        }
        return data
    }

    getTomorrow2Data() {
        let data = {
            date: this.tomorrow2.date.split('-')[2] + '/' + this.tomorrow2.date.split('-')[1],
            day: this.tomorrow2.day.maxtemp_c + '° / ' + this.tomorrow2.day.mintemp_c + '°',
            condition: this.tomorrow2.day.condition.text,
            rainChance: this.tomorrow2.day.daily_chance_of_rain + '%',
            icon: this.tomorrow2.day.condition.icon
        }
        return data
    }

    renderForecast() {
        let forecastCard = document.createElement('div')
        let tomorrowCard = document.createElement('div')
        let tomorrow2Card = document.createElement('div')
        forecastCard.classList.add('forecast-card')
        tomorrowCard.classList.add('tomorrow-card')
        tomorrow2Card.classList.add('tomorrow-card')

        tomorrowCard.innerHTML = `
            <div class="tomorrow-title">
                <h5>${this.getTomorrowData().date}</h5>
            </div>

            <div class="tomorrow-data">
                <img src="${this.getTomorrowData().icon}"></img>
                <div class="tomorrow-data-stats">
                    <h5 class = "tomorrow-day">${this.getTomorrowData().day}</h5>
                    <h5 class = "tomorrow-rain-chance">Rain: ${this.getTomorrowData().rainChance}</h5>
                </div>
            </div>
                `
        tomorrow2Card.innerHTML = `
            <div class="tomorrow-title">
                <h5>${this.getTomorrow2Data().date}</h5>
            </div>

            <div class="tomorrow-data">
                <img src="${this.getTomorrow2Data().icon}"></img>
                <div class="tomorrow-data-stats">
                    <h5 class = "tomorrow2-day">${this.getTomorrow2Data().day}</h5>
                    <h5 class = "tomorrow2-rain-chance">Rain: ${this.getTomorrow2Data().rainChance}</h5>
                </div>
            </div>
            `
        forecastCard.appendChild(tomorrowCard)
        forecastCard.appendChild(tomorrow2Card)
        return forecastCard
    }
}