let weather = {
    APIKEY: "21885e66ee224fc9a14104524231507",
    
    search: async function(location) {
        this.response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=3`)
        this.data = await response.json()
        return data
    },

    
    //location getters
    getName: function() {
        return this.data.location.name
    },

    getCountry: function() {
        return this.data.location.country
    },

    getRegion: function() {
        return this.data.location.region
    },

    getDay: function() {
        return this.data.location.localtime.split(' ')[0]
    },

    getTime: function() {
        return this.data.location.localtime.split(' ')[1]
    },


    //current getters
    getTemp: function() {
        return this.data.current.temp_c + ' °C'
    },

    getCondition: function() {
        return this.data.current.condition.text
    },

    getFeelsLike: function() {
        return this.data.current.feelslike_c
    },

    getCloud: function() {
        if(this.data.current.cloud > 66) {
            return 'cloudy'
        }
        if(this.data.current.cloud > 33 && this.data.current.cloud < 66) {
            return 'partly cloudy'
        }
        else {
            return 'clear'
        }
    },


    //forecast getters
    forecast: {
        day1: {
            getDate: function() {
                return this.data.forecast.forecastday[1].date
            },
            getTemp: function() {
                return this.data.forecast.forecastday[1].day.avgtemp_c
            },
            getCondition: function() {
                return this.data.forecast.forecastday[1].day.condition.text
            }
        },
        day2: {
            getDate: function() {
                return this.data.forecast.forecastday[2].date
            },
            getTemp: function() {
                return this.data.forecast.forecastday[2].day.avgtemp_c
            },
            getCondition: function() {
                return this.data.forecast.forecastday[2].day.condition.text
            }
        }
}

}

export default weather