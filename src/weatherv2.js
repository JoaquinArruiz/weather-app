export class weather2 {
    constructor(data) {
        this.data = data
        this.forecast = data.forecast
        this.day0 = data.forecast.forecastday[0]
        this.day1 = data.forecast.forecastday[1]
        this.day2 = data.forecast.forecastday[2]
    }


    
    //location getters
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
    
