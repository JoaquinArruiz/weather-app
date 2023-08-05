export class weather2 {
    constructor(data) {
        this.data = data
        this.forecast = data.forecast
        this.day0 = data.forecast.forecastday[0]
        this.day1 = data.forecast.forecastday[1]
        this.day2 = data.forecast.forecastday[2]
    }


    
    //location getters and render
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
    
    renderCard() {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div class="card-header">
            <h3>${this.getName()}</h3>
            <h5>${this.getRegion()}, ${this.getCountry()}</h5>
            <h5>${this.getDay()}</h5>
            <h5>${this.getTime()}</h5>
        </div>
        <div class="card-body">
            <h5 class="card-title">${this.getTemp()}</h5>
            <p class="card-text">${this.getCondition()}</p>
            <p class="card-text">${this.getFeelsLike()}</p>
        </div>
        `
        return card
    }


    //current getters
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

    getForecast() {
        return this.data.forecast
    }
}
    
